export default 'const { Builder, By, until, logging, Actions, Key } = require(\'selenium-webdriver\');\nconst { Options, ServiceBuilder } = require(\'selenium-webdriver/chrome\');\nconst { log, logInfo, logError } = require(\'@fe-pixel/rpa-node\');\n\n\nconst crypto = require(\'crypto\');\n\n\n\nlet result = {\n  code: -1,\n  data: null,\n  message: \'未命中脚本,请手动登录\',\n};\n\n\n\nmodule.exports =  async (context) => { \n  let {driver,args,options} = context;\n  result = shoplineAuthOther({driver,args,result});\n  return result;\n}\n\n\nasync function shoplineAuthOther({ driver,result,args}){\n  console.time(\'shopline:auth\');\n  let shopline_admin_url = args.admin_url;\n  let appKey = args.appKey;\n  let secret = args.secret;\n  let scope = args.scope || "read_customers,read_discounts,read_draft_orders,read_inventory,read_metafileds,read_orders,read_page,read_price_rules,read_products,read_script_tags,read_themes,read_store_information,read_store_metrics,read_marketing_event,read_payment";\n  let redirectUri = args.redirectUri || "https://www.baidu.com";\n  const timeOut = 10000;//10s没请求到就退出\n  //Array.from(document.querySelectorAll("tbody tr td:nth-last-child(2)>span")).map(v=>~v.innerText.indexOf(\'\\n\')?v.innerText.slice(0,-1):v.innerText).join(",")\n  // https://zzshopline.myshopline.com/admin/\n  //https://developer.myshopline.com/docs/introduce/NOAkhsPT\n  \n  const shopline_admin_authorize = `oauth-web/#/oauth/authorize?appKey=${appKey}&responseType=code&scope=${scope}&redirectUri=${redirectUri}`;\n\n  const shopline_admin_create_url = \'oauth/token/create\';\n  const create_headers = {\n    \'content-type\': \'application/json;charset=UTF-8\',\n    appkey:appKey,\n    sign: \'\',\n    timestamp: \'\',\n  };\n\n  try {\n    await driver.get(shopline_admin_url);\n    log("判断店铺是否异常，过期，冻结等");\n    logInfo("检查账号情况");\n    //判断是否过期\n    let currUrlTemp = await driver.getCurrentUrl();\n    if (currUrlTemp !== shopline_admin_url) {\n      result = {\n        code: -1,\n        data: null,\n        message: \'该店铺异常,请核查~\',\n      }\n      return;\n    }\n    logInfo("检查账号-正常");\n\n    logInfo("进行授权");\n    await driver.get(shopline_admin_url + shopline_admin_authorize);\n\n    logInfo("进行重定向");\n    await new Promise((res) => new setTimeout(res, 4000));\n    const currCurl = await driver.getCurrentUrl();\n    console.log("currCurl", currCurl);\n    if ((shopline_admin_url + shopline_admin_authorize) === currCurl) {\n      console.log("A");\n      let authDom = await driver.wait( until.elementLocated(By.css(\'main button.ant-btn-primary\')), timeOut, \'执行超时\', 1000);\n      console.log("authDom", authDom);\n      await authDom.click();\n    } else {\n      console.log("B");\n      //点击后还会跳转走下面逻辑\n      await driver.wait(async () => {\n        console.count("timeB-agin");\n        const currCurl = await driver.getCurrentUrl();\n        return currCurl !== (shopline_admin_url + shopline_admin_authorize);\n      }, timeOut, \'执行超时\', 1000);\n    }\n    logInfo("重定向成功");\n    const currUrl = await driver.getCurrentUrl();\n    await driver.get(shopline_admin_url);\n    const params = getJSONByURL(currUrl);\n    console.log("currUrl",currUrl);\n    console.log("params",params);\n    let create_body = JSON.stringify({ code: params.code });\n    const timestamp = Date.now();\n    const hmac = crypto.createHmac(\'sha256\', secret);\n    hmac.update(create_body + timestamp);\n    create_headers.sign = hmac.digest(\'hex\');\n    create_headers.timestamp = timestamp;\n    logInfo("获取令牌");\n    result = await driver.executeAsyncScript(fetchCreate, shopline_admin_create_url, create_headers, create_body);\n    logInfo("授权成功");\n  } catch (error) {\n    result.code = -1;\n    result.message = error.toString();\n  } finally {\n    console.timeEnd(\'shopline:auth\');\n    return result;\n  }\n};\n\nasync function fetchCreate( shopline_admin_create_url, create_headers, create_body) {\n  const callback = arguments[arguments.length - 1];\n  const res = await (await fetch(shopline_admin_create_url, {\n    method: \'POST\',\n    headers: create_headers,\n    body: create_body\n  })).json();\n  if (res?.code === 200) {\n    callback({\n      code: 0,\n      data: res?.data,\n      message:res?.message\n    });\n  } else { \n    callback({\n      code: -1,\n      data: null,\n      message:res?.message\n    });\n  }\n}\n\n\nfunction getJSONByURL(params) {\n  const index = params.indexOf(\'?\');\n  if (!~index) return {};\n  params = params.slice(index + 1);\n  const res = {};\n  for (const item of params.split(\'&\')) {\n    const [key, val] = item.split(\'=\');\n    res[key] = val;\n  }\n  return res;\n}\n\nexports.shoplineAuthOther = shoplineAuthOther;\n\n\n\n'