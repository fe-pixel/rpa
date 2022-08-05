import 'antd/dist/antd.css'
import './test.less'
import { Button, Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import { getAPIPort, runScript } from './../rpa'
import axios from "axios";
import { shopviewLauncherApi } from "./../service/ShopViewAPI"
import { mockData } from "./mock"
import template from "./../utils/template"
import TextArea from 'antd/lib/input/TextArea'

function Rpa() {
  const [count, setCount] = useState(0);
  const openWin = async () => {
    let envId = (await getEnvIds(1))[0]
    let script = template.openUrl;
    let args = { openUrl: "https://www.baidu.com/" };
    runScript({
      script,
      args,
      envId
    });
  }

  const runScript1 = () => {
    let envId = mockData()[0].envId;
    let script = mockData()[0].script[0].runScript;
    let args = mockData()[0].script[0].args;
    runScript({
      script,
      args,
      envId
    });
  }
  const runScript2 = () => {
    let envId = mockData()[0].envId;
    let script = mockData()[0].script[1].runScript;
    let args = mockData()[0].script[1].args;
    runScript({
      script,
      args,
      envId
    });
  }
  const runScript3 = () => {
    let envId = mockData()[0].envId;
    let script = mockData()[1].script[1].runScript;
    let args = mockData()[1].script[1].args;
    runScript({
      script,
      args,
      envId
    });
  }

  const runScript4 = () => {
    let envId = mockData()[0].envId
    let script = template.openUrl;
    let args = { openUrl: "https://www.baidu.com/" };
    runScript({
      script,
      args,
      envId
    });
  }


  const openEnv = () => {
    console.log("点击打开")
    openBrowser("9168978793798293369");
  }
  const closeEnv = () => {
    console.log("点击关闭")
    closeBrowser("9168978793798293369");
  }
  const closeSocketEnv = async () => {
    let res = await axios.request({
      url: `http://127.0.0.1:${shopviewLauncherApi.getLocalApiPort()}/api/v1/browser/stop`,
      method: "get",
      params: { "env_id": "9168978793798293369" }
    });
    console.log("closeSocketEnv", res);

  }
  const getEnvList = async () => {
    let res = await axios.request({
      url: `http://127.0.0.1:${shopviewLauncherApi.getLocalApiPort()}/api/v1/env/search`,
      method: "get"
    });
    console.log("getEnvList", res);
  }

  let [params, setParams] = useState("");
  let [code, setCode] = useState("");
  useEffect(() => {
    reSet();
    // let script = mockData[0].script[0].runScript;
  }, [])

  let setValue = v => {
    setParams(v);
  }
  let changeParams = () => {
    setParams(params);
  }


  let scriptFn = async (context) => {
    const { Builder, By, until } = require('selenium-webdriver');
    let { driver, args, options } = context;
    await driver.get(args.openUrl);
    // 2. 搜索
    let searchText = args.keyword;
    // 定位到搜索框, 并输入关键字
    let searchEdit = driver.findElement(By.id('kw'));
    driver.executeScript("arguments[0].value=arguments[1];", searchEdit, searchText);
    await new Promise(res => setTimeout(res, 1000));

    let search = await driver.findElement(By.id('su'));
    driver.executeScript("arguments[0].click();", search);
    await new Promise(res => setTimeout(res, 5000));
    return {
      code: 0,
      data: args.keyword,
      message: 'ok',
    };
  };

  let reSet = async () => {
    let envId = (await getEnvIds(1))[0]
    let args = { openUrl: "https://www.baidu.com/" };
    let options = { log: true, headless: false };
    let params = { envId, args, options };
    setCode(`module.exports = ${scriptFn.toString()}`)
    setParams(JSON.stringify(params, null, 4));
  }

  let send = () => {
    try {
      let param = JSON.parse(params);
      param.script = code;
      runScript(param);
    } catch (error) {
      console.log("参数不是标准得json", error);
    }
  }

  let run = (params, keyword) => {
    let args = { openUrl: "https://www.baidu.com/", keyword };
    runScript(Object.assign({}, {
      script: scriptFn,
      args
    }, params));
  }

  const runWeb = async (num) => {
    let arr = await getEnvIds(num);
    console.log("arr", arr);

    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      run({ "envId": item }, "环境" + i)
    }
  }


  return <div className='rpa'>
    <h1>rpa测试</h1>
    <div><span className='title'>openAPI:</span>
      <Button onClick={() => openWin()}>打开窗口不关闭</Button>
      <Button onClick={() => closeSocketEnv()}>关闭浏览器</Button>
      <Button onClick={() => getEnvList()}>获取环境列表</Button></div>
    <div><span className='title'>ui:</span>
      <Button onClick={() => runScript1()}>登录shopline</Button>
      <Button onClick={() => runScript2()}>获取店铺信息</Button>
      <Button onClick={() => runScript3()}>授权</Button>
      <Button onClick={() => runScript4()}>打开指定地址做登录</Button>
    </div>

    <div><span className='title'>rpa测试并发:</span>
      <Button onClick={() => runWeb(2)}>同时执行2个环境</Button>
      <Button onClick={() => runWeb(3)}>同时执行3个环境</Button>
      <Button onClick={() => runWeb(4)}>同时执行4个环境</Button>
      <Button onClick={() => runWeb(5)}>同时执行5个环境</Button>
    </div>

    <div><span className='title'>手动打开|关闭环境:</span>
      <Button onClick={() => openEnv()}>打开环境</Button>
      <Button onClick={() => closeEnv()}>关闭浏览器实例并调用接口关闭环境</Button>
    </div >


    <div><span className='title'>在线编程:</span>
      <Row>
        <Col span={16}>
          代码：
          <TextArea
            value={code}
            onChange={e => setCode(e.target.value)}
            autoSize={{ minRows: 3, maxRows: 10 }}
          />
        </Col>
        <Col span={8}>
          参数：
          <TextArea
            value={params}
            onChange={e => setValue(e.target.value)}
            onBlur={e => changeParams()}
            autoSize={{ minRows: 3, maxRows: 10 }}
          />
        </Col>
      </Row>
      <Button style={{ marginTop: 15 }} onClick={() => reSet()}>重置</Button>
      <Button style={{ marginTop: 15 }} onClick={() => send()}>发送</Button>
    </div >
  </div >
}

export default Rpa

async function getEnvIds(count: number = 1) {
  let res = await searchEnvs({
    "count": count,
    "openState": 1//打开状态的环境
  });
  let { code, data } = res.data
  if (code !== 0) return;
  if (data.items.length === 0) {
    console.error("当前暂无可用环境");
    return;
  }
  return data.items.map((v: any) => v.envId);
}

function searchEnvs(params: any) {
  //获取端口
  const baseURL = `http://127.0.0.1:${getAPIPort()}`
  let getEnvs = "/api/v1/env/search"
  axios.defaults.baseURL = baseURL;
  return axios.request({
    url: getEnvs,
    method: "get",
    params
  })
}