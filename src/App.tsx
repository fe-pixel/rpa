import { openShoplineRpaModal } from '../components/shoplineRpaModal'
import { openRpaModal } from '../components/rpaModal'
import { openRpaModal as openRpaModal2 } from '../components/rpaModal2'

import { runScript } from './../rpa/ui'
import { shopviewLauncherApi } from './../service/ShopViewAPI'
import * as mock from './mock'

import 'antd/dist/antd.css';
import './App.css'
import { Button } from 'antd';
import axios from 'axios'
import { rpaSocket } from "./../utils/rpaSocket";

function App() {
  const onClick2 = (mark) => {
    return openRpaModal2(mock[mark]);
  }

  const onClick = (mark) => {
    let rpaModalDom = openRpaModal({
      // title: "RPA任务",
      data: mock[mark],
      onBeforeRuning: () => {
      },
      onClose: (res) => {
        console.log(res);
      },
      onRunComplete: (result) => {
        console.log("RPA任务执行结果", result)
      }
    });
  }
  const auth = (mark) => {
    let rpaModalDom = openShoplineRpaModal({
      // title: "RPA任务",
      data: mock[mark],
      onBeforeRuning: () => {
      },
      onRunComplete: (result) => {
        console.log("RPA任务执行结果", result)
      }
    });
  }
  //rpaModalDom.update({});

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
  let p = null;
  const send = async () => {
    let envId = "9193017789882505763";
    let args = { openUrl: "https://www.baidu.com/" };
    let options = { log: true, headless: false };
    let params = { envId, args, options };
    let script = `module.exports = ${scriptFn.toString()}`;
    p = runScript(
      {
        script, args, envId, group: "A", options
      }
    );
    let res = await p;
    console.log("res", res);

  }
  const cancelFn = () => {
    p.cancel();
  }

  const onLog = async () => {
    let res1 = runScript(async (context) => {
      const { log, logInfo, logError } = require('@fe-pixel/rpa-node');
      const { Builder, By, until } = require('selenium-webdriver');
      log("测试日志");
      logInfo("警告2");
      logError("警告3");
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
      return {
        code: 0,
        data: args.keyword,
        message: 'ok',
      };
    },
      {
        args: { openUrl: "https://www.baidu.com/" },
        envId: "9209955923324946514",
        group: "A",
        options: { log: true, headless: false },
        sessionId: "B"
      }
    );

    let res2 = await axios.request({
      url: `http://127.0.0.1:${shopviewLauncherApi.getLocalApiPort()}/api/v1/rpa/session`,
      method: "get",
      params: {
        sessionId: "B"
      }
    });
    console.log("res", res2);
    console.log("res2.data.data?.ws_port", res2.data.data?.ws_port);
    //链接soket  log
    rpaSocket(res2.data.data?.ws_port);
  }
  let shili = null;
  function onUpdate() {
    shili = onClick2("newModal");
  }
  function stop() {
    shili.stop();
  }
  return (
    <div style={{ paddingLeft: 50 }}>
      <h3>v.2.0 log日志</h3>

      <h3>v.2.0调用</h3>
      <h3>外部执行方法</h3>
      <Button onClick={() => onUpdate()}>update</Button>
      <Button onClick={() => stop()}>stop</Button>
      <Button onClick={() => onClick2("lifeCallBack")}>触发</Button>
      <h3>账户名称</h3>
      <Button onClick={() => onClick2("accountName")}>触发</Button>
      <h3>执行脚本失败</h3>
      <Button onClick={() => onClick2("executeFail")}>触发</Button>
      <h3>登录失败手动登录</h3>
      <Button onClick={() => onClick2("loginFail")}>触发</Button>
      <h3>interva等待时间后再执行</h3>
      <Button onClick={() => onClick2("interval")}>触发</Button>
      <h3>time多次调用</h3>
      <Button onClick={() => onClick2("time")}>触发</Button>
      <h3>简单使用</h3>
      <Button onClick={() => onClick2("newModal")}>触发</Button>
      {/* <h3>日志弹窗</h3>
      <Button onClick={() => onClick2("newModal")}>触发</Button> */}
      <h3>多实例打开</h3>
      <Button onClick={() => onClick2("newModal")}>触发1</Button>
      <Button onClick={() => onClick2("newModal2")}>触发2</Button>
      <h3>参数</h3>
      <hr></hr>
      <h3>复现无头模式无法触发关闭环境的回调</h3>
      <Button onClick={() => onClick("noCallBack")}>触发</Button>
      <hr></hr>
      <h3>零散调用</h3>
      <h3>调用日志</h3>
      <Button onClick={() => onLog()}>触发</Button>
      <h3>取消请求</h3>
      <Button onClick={() => send()}>发送</Button>
      <Button onClick={() => cancelFn()}>取消</Button>
      <hr></hr>
      <h3>v.1.3.3版本测试</h3>
      <h3>简单使用</h3>
      <Button onClick={() => auth("auth_shopView")}>授权应用给shopline</Button>
      <h3>简单使用</h3>
      <Button onClick={() => onClick("virtual")}>虚拟滚动5000</Button>
      <h1>授权UI测试-单环境</h1>
      <h3>简单使用</h3>
      <Button onClick={() => onClick("simple")}>打开授权框</Button>
      <h3>多脚本</h3>
      <Button onClick={() => onClick("moreScript")}>打开授权框</Button>
      <h3>手动登录</h3>
      <Button onClick={() => onClick("manualLogin")}>打开授权框</Button>
      <h3>开启非无头模式</h3>
      <Button onClick={() => onClick("headless")}>打开授权框</Button>
      <h3>仅仅只传一个脚本</h3>
      <Button onClick={() => onClick("onlyOne")}>打开授权框</Button>
      <h3>关闭正在执行脚本的窗口</h3>
      <Button onClick={() => onClick("closeWin")}>打开授权框</Button>
      <h3>环境占用</h3>
      <Button onClick={() => onClick("errorEnv")}>打开授权框</Button>
      <h3>登录失败</h3>
      <Button onClick={() => onClick("errorLogin")}>打开授权框</Button>
      <h3>3个脚本执行，第二个脚本执行失败</h3>
      <Button onClick={() => onClick("errorMiddle")}>打开授权框</Button>
      <h1>授权UI测试-多环境</h1>
      <h3>单环境全部情况</h3>
      <Button onClick={() => onClick("allData")}>打开授权框</Button>
      <hr></hr>
    </div>
  )
}

export default App
