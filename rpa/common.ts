import { envCookieEdit, envFindById, envRefreshState, getConfig, searchEnvs } from './../service/api'
import envStaticStore from './../utils/envSource'
import { shopviewLauncherApi } from './../service/ShopViewAPI'
import { getStore } from './../utils';
import axios from "./../utils/axioshttp"

//业务逻辑的comm.js
/**
 * @description: 环境ID查询对应的item
 * @param {string} envId
 * @return {code,data}
 */
export const getEnvItem = async (envId: string) => {
  let res = await envFindById({ envId });
  if (res?.code !== 0) {
    res.message = "未查询到环境";
  }
  return res;
}

export const setConcurrent = (params: { group: string, limit: number }) => {
  const blob = new Blob([JSON.stringify(params)], {
    type: 'application/json; charset=UTF-8',
  });
  //sendBeacon 不占用http请求数
  navigator.sendBeacon(`http://127.0.0.1:${shopviewLauncherApi.getLocalApiPort()}/api/v1/rpa/group/concurrent`, blob);
}

//公共业务
/**
 * @description: 获取设备、系统、协议、代理类型
 * @return {code,data}
 */
export const fetchBaseConfig = async () => {
  if (envStaticStore.baseHasInit) return { code: 0, data: {} };
  let { code, data } = await getConfig({ key: 'baseData' });
  if (code == 0) {
    envStaticStore.initBaseConf(data);
    return { code, data };
  } else {
    console.log("-----base conifg初始化失败-----")
    return { code, message: '环境映射初始化失败-' };
  }
}



/**
 * 打开浏览器，依赖于fetchBaseConfig
 * @param args 参数
 * @param context 上下文
 * @param cb 回调函数
 */
export const openBrowser = async (env_id: string, launch_args?: Array<string>) => {
  let res = {
    "code": -1,
    "data": "",
    "message": "打开失败"
  }
  //没有环境的时候
  let { code, data, message } = await getEnvItem(env_id);
  if (code != 0 || !data || data.items.length < 1) {
    res = { code: -1, data: "", message: "环境未找到" }
    return res;
  }
  //环境被占用
  if (data.items[0].envState.openState != 1) {
    res = Object.assign({}, res, { data: data, message: '浏览器打开失败，环境被占用' });
    return res;
  }
  const staticInitRes = await fetchBaseConfig();  //获取静态映射

  if (!staticInitRes || staticInitRes.code != 0) {
    let code = staticInitRes?.code;
    res = Object.assign({}, res, { code: code == 0 ? -1 : code, data: staticInitRes?.data, message: '环境映射初始化失败' });
    return res;
  }

  const params = envStaticStore.getOpenEnvParams(data.items[0]);  //构建打开参数
  console.log("-------params-------", params)
  return new Promise((resolve, reject) => {
    try {
      //启动浏览器的参数  混淆进去
      if (launch_args) {
        let config_json = JSON.parse(params.config_json);
        config_json.launchArgs = launch_args;
        params.config_json = JSON.stringify(config_json);
      }
      shopviewLauncherApi.run(params.envId, params.fingerprint, params.config_json, params.proxy_config, (result: any, info: any) => {
        console.log("-------成功打开回调-------", result);
        let openResult = typeof result === 'boolean' ? result : result === shopviewLauncherApi.SUCCESS;
        if (openResult) {
          putEnvState([params.envId], 1); //更新打开状态，就算更新失败也已经打开了
          res = { code: 0, data: JSON.parse(info), message: '打开成功' };
        } else if (result == shopviewLauncherApi.LAUNCH_STATE_911S5_NOT_STARTED) {
          res.message = '请先打开911s5客户端';
        } else {
          res.message = '环境打开失败';
        }
        resolve(res);
      }, async (exit_code: string) => {
        console.log("-------关闭环境回调-------");
        //自定义事件触发关闭
        let str = shopviewLauncherApi.getCookie(params.envId);
        let { cookie, localStorage } = JSON.parse(str);
        envCookieEdit({ envId: params.envId, cookie, localStorage });  //接口请求复写cookie
        await putEnvState([params.envId], 3);  // 调用接口关闭环境
        var event = new CustomEvent("closeWin", { "detail": { "envId": params.envId } })
        window.dispatchEvent(event);
      });
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * @description: 将环境打开关闭状态更新到后端 1打开，2续期，3关闭；
 * @param {string} envIds
 * @param {1|2|3} state
 * @return {code,data}
 */
export const putEnvState = async (envIds: string[], state: 1 | 2 | 3) => {
  let deviceMark = state == 3 ? "" : getStore("token");  // 唯一标记打开的用户
  if (envIds.length < 1) return { code: -1, message: '环境ID不存在' };

  let editArr: { envId: string, state: number, deviceMark: string }[] = [];
  envIds.forEach((envId) => { editArr.push({ envId, state, deviceMark }); })

  let { code, data } = await envRefreshState({ envIds: editArr });  //接口调用
  if (code == 0) {
    return { code, data };
  } else {
    return { code, message: '更新状态接口调用失败' };
  }
}


/**
 * 关闭浏览器
 * @param args 参数
 * @param context 上下文
 * @param cb 回调函数
 */
export const closeBrowser = async (env_id: string) => {
  let res = { code: -1, data: null, message: '环境ID不存在' };
  if (!env_id) {
    return res
  }

  let closeState = await shopviewLauncherApi.closeEnv(env_id);  // 关闭时会触发回调，请求关闭接口和复写cookie
  if (!closeState) {
    res.message = "环境关闭失败"
    return res;
  }
  res.code = 0;
  res.data = closeState;
  res.message = "关闭成功";

  let str = shopviewLauncherApi.getCookie(env_id);
  let { cookie, localStorage } = JSON.parse(str);
  envCookieEdit({ envId: env_id, cookie, localStorage });  //接口请求复写cookie
  putEnvState([env_id], 3);  // 调用接口关闭环境

  return res;//不管cookie是否回写成功，都已经关闭了
}

/**
 * 获取环境列表
 */
export const getEnvList = async () => {
  return searchEnvs({
    "pageNum": "1",
    "pageSize": "9999",
  });
}

export const getAPIPort = () => {
  return shopviewLauncherApi.getLocalApiPort();
}
