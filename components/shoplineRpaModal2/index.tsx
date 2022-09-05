import { IRPAConfig } from "../rpaModal2/constant";
import { openRpaModal } from "../rpaModal2";
import { merge } from "lodash";
import shoplineAuthOther from "./shoplineAuthOther"
export const defaultOptions = {
  title: "一键授权"
}

export const defaultObj = {
  "envId": "",//环境ID
  "accountId": "", //账户ID  当前环境下绑定哪一个账号
  "autoLoginScript": {//自动登录脚本
    "scriptName": "自动登录脚本",
    "runScript": "",
    "args": {
      "account": "",
      "password": ""
    }
  },
  "manualLoginScript": {//手动登录脚本
    "scriptName": "手动登录脚本",
    "runScript": "",
    "args": {
      "account": "",
      "password": ""
    }
  },
  "script": [//运行业务脚本
    {
      scriptName: "店铺授权",
      runScript: shoplineAuthOther,
      args: {
        //店铺后台地址
        admin_url: "",
        appKey: "",
        secret: "",
        scope: "",
        redirectUri: "",
      }
    }
  ]
}



const openShoplineRpaModal = (config: IRPAConfig) => {
  let mixConfig = Object.assign({}, defaultOptions, config);
  console.log(mixConfig);
  mixConfig.data = mixConfig.data.map(v => merge({}, defaultObj, v));
  let paramsKey = ["admin_url", "appKey", "secret", "redirectUri"];
  for (const item of mixConfig.data) {
    if (!item.script || item.script.length === 0) {
      throw new Error("业务脚本不能为空");
    }
    for (const key of paramsKey) {
      if (!(item.script[0].args && key in item.script[0].args)) {
        throw '脚本参数必须包含,"admin_url", "appKey", "secret", "redirectUri"'
      }
    }
  }
  return openRpaModal(mixConfig);
}

export { openShoplineRpaModal }