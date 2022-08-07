//处理UI的js

import axios from "./../utils/axioshttp"
import { shopviewLauncherApi } from './../service/ShopViewAPI'
import { getEnvItem } from "./common";
import { result, params, options } from "./../type"
import { cloneDeep } from "lodash";
import { rpaSocket } from "../utils/rpaSocket";
import { AxiosResponse } from "axios";
import eventBus from "./../utils/EventBus";

export interface PromiseX<T> extends Promise<T> {
  cancel?: Function//取消
}


/**
 *运行脚本
 *
 * @export
 * @param {(Function | params)} params
 * @param {options} [opts]  
 * @return {*}  {PromiseX<result>}
 */
export function runScript(params: Function | params, opts?: options): PromiseX<result> {
  let socket: { stop?: Function; soketEvent?: any; } | null = null
  //参数处理
  let script, args, envId: string, accountId, group, options, sessionId;
  let optionsDefault = { log: false, headless: false }
  if (typeof params === 'function') {
    script = "module.exports = " + params.toString();
    args = opts?.args;
    envId = opts?.envId as string;
    accountId = opts?.accountId;
    group = opts?.group;
    options = opts?.options;
    sessionId = opts?.sessionId;
  } else {
    if (typeof params?.script === "function") {
      script = "module.exports = " + params.script.toString();
    } else {
      script = params.script;
    }
    args = params.args;
    envId = params.envId;
    accountId = params.accountId;
    group = params.group;
    options = params.options;
    sessionId = params.sessionId;
  }
  let paramsAll: params = {
    script,
    envId,
    accountId,
    group,
    args,
    options: Object.assign({}, optionsDefault, options),
    sessionId
  }
  //1. 设置脚本名称
  //2. 获取脚本
  //3. 打开脚本执行
  let cancel = () => { };
  let p: PromiseX<result> = axios.request({
    url: `http://127.0.0.1:${shopviewLauncherApi.getLocalApiPort()}/api/v1/rpa/start`,
    method: "post",
    data: paramsAll,
    //@ts-expect-error
    cancelToken: new axios.CancelToken(function executor(c: any) {
      cancel = () => {
        //关闭对应的socket;
        //eventBus.emit("send", envId, { type: "command", data: { value: "stop" } });
        //取消运行关闭环境
        shopviewLauncherApi.closeEnv(envId);
        c();
        socket?.stop?.();
      };
    })
  });
  p.then(res => {
    if (res) {
      if (!res.isKeepOpen) {
        envId && shopviewLauncherApi.closeEnv(envId);
      }
    }
    socket?.stop?.();
    p.cancel = undefined;
  })
  //取消
  p.cancel = cancel;
  //socket
  if (sessionId) {
    let resp = axios.request({
      url: `http://127.0.0.1:${shopviewLauncherApi.getLocalApiPort()}/api/v1/rpa/session`,
      method: "get",
      params: {
        sessionId
      }
    });
    resp.then(res => {
      socket = rpaSocket(res.data?.ws_port, paramsAll);
    });
  }
  return p;
}
/**
 *检查并直接执行登录脚本
 *
 * @param {*} arr 初始化数据
 */
export async function init(arr: any) {
  arr = cloneDeep(arr);
  const defaultOptions = { log: false, headless: true };
  let loginPromise = [];
  //初始化检查是否被占用
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.initStatus >= 30) continue;
    if (!item.envId) {
      throw new Error("组件envId必传");
    }
    let { code, data } = await getEnvItem(item.envId);
    //获取环境失败
    if (code != 0 || !data || data.items?.length === 0) {
      item.initStatus = 3;
      continue;
    }
    //name赋值
    item.envName = data?.items[0]?.envName;
    //检查是否占用
    if (data.items[0]?.envState?.openState !== 1) {
      item.initStatus = 2;  //环境被占用
      continue;
    }
    //判断是否是跳过执行
    let loginScript = item.script[0];
    let script = loginScript.runScript;
    let args = loginScript.args;
    let envId = item.envId;
    let options = Object.assign({}, defaultOptions, loginScript.options ?? {});

    //运行登录脚本
    let p = runScript({
      script, args, envId, options
    }).then((res) => {
      if (res.code === 0) {
        item.initStatus = 30;
      } else {
        item.initStatus = 4;
      }
    })
    loginPromise.push(p);
  }
  await Promise.allSettled(loginPromise);
  return arr;
}




export async function envRecover(ids?: string[]) {
  let openedItems = await shopviewLauncherApi.getExpandActiveList();
  let openedEnvs = openedItems.filter((v: any) => {
    // return v.type === "rpa" && ids.includes(v.id);
    return v.type === "rpa"
  });

  openedEnvs.forEach((item: any) => {
    if (!shopviewLauncherApi.isAddBrowserExitListener(item.id)) {
      console.log("调用主动关闭环境", item.id);
      shopviewLauncherApi.closeEnv(item.id)
    }
  })
}

// window.addEventListener("beforeunload", function () {
//   envRecover()
// })
