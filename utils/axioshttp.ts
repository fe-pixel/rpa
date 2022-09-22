import axios, { AxiosResponse } from 'axios';
import { message, notification } from 'antd';
import { getStore } from './storage';
import { shopviewLauncherApi } from './../service/ShopViewAPI'
let CancelToken = axios.CancelToken;

const menuMessages = {
  "0": '操作成功',
  "-1": '登录失效，请重新登录',
  "-2": '服务异常',
  "-3": "网络请求失败"
}
//调整message配置  最多一个，延迟2s
message.config({
  maxCount: 1,
  duration: 2
})


const axioshttp = axios.create({
  withCredentials: true,
})
//@ts-expect-error
axioshttp.CancelToken = CancelToken;

export const axioshttpWithRes = axios.create({
  withCredentials: true,
})

axioshttp.interceptors.request.use(
  (requestConfig) => {
    let xHdid = shopviewLauncherApi.getMachineId() || '';
    requestConfig.headers = requestConfig.headers || {}
    requestConfig.headers['request-startTime'] = new Date().getTime();
    requestConfig.headers['X-hdid'] = xHdid;
    //登录信息携带
    getStore("token") && (requestConfig.headers["X-accessKey"] = getStore("token"));
    getStore("teamid") && (requestConfig.headers["X-teamid"] = getStore("teamid"));
    getStore("request_ip") && (requestConfig.headers["X-userIp"] = getStore("request_ip"));
    getStore("uid") && (requestConfig.headers["X-uid"] = getStore("uid"));
    return requestConfig
  },
  (err) => {
    return Promise.reject(err)
  },
)

axioshttp.interceptors.response.use(
  (response) => {
    handleApiError(response);
    return response.data || response;
  }, systemError
)

const handleApiError = (response: AxiosResponse) => {
  if (!~response.headers['content-type']?.indexOf('application/json')) return;
  let code = response.data.code;
  const url = response.config.url
  const msg = response.data.message;
  if (code === 0) return;
  if (code === -2) {
    // console.error('------服务响应异常------', response);
    let mesObj = { message: msg, type: "error", code, url }
    runNotification(mesObj);
    return;
  }
  runMessage({ type: "error", message: msg })
}


function systemError(error: any) {
  if (error.response) {
    let data = error.response.data
    const url = error.response?.config?.url
    console.error('------请求异常响应------', error.response.status, data)
    let code = data.ErrorCode || error.response.status
    let mesObj = { message: menuMessages["-2"], type: "error", code, url }
    runNotification(mesObj)
  } else {
    //请求报错
    try {
      error = error.toJSON();
      console.error('------请求报错------', error.message, error);
      let mesObj = { message: menuMessages["-3"], type: "error" }
      runNotification(mesObj)
    } catch (error) {
      console.error('------catch请求报错------', error);
    }
  }
  return Promise.reject(error)
}

//错误对话弹框 请求错误
function runNotification(obj: errorType) {
  // notification[obj.type]({
  //   message: (obj.code || "") + ' 错误:' + (obj.url || ""),
  //   description: obj.message
  // })
}
//操作提示弹框  业务错误
function runMessage(obj: errorType) {
  //销毁 让它只存在一个 这个如果生效就会有过度动画，但是这个版本的ant有bug
  //message[obj.type](obj.message)
}

type errorType = {
  type: string,
  code?: number,
  message: string,
  url?: string,
}


export default axioshttp
