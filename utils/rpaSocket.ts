import { params } from "../type";
import eventBus from "./EventBus";
let soketMap: {
  [envId: string]: WebSocket[]
} = {

}
//调试
// window.soketMap = soketMap;
eventBus.on("send", (envId: string, res: any) => {
  try {
    let sendData = JSON.stringify(res);
    let sokets = soketMap[envId] || [];
    for (let i = 0; i < sokets.length; i++) {
      const soket = sokets[i];
      if (soket.readyState === 1) {
        soket.send(sendData);
      }
    }
  } catch (error) {
    console.error(error);
  }
})
// 请求地址
export const rpaSocket = (prot: string, opts: params) => {
  const wsUrl = `ws://127.0.0.1:${prot}`
  let reconnectTimer: any = null // 重连定时器
  let lockReconnect = false // 重连锁
  let socket: any = null; // 存储socket对象
  let stop = false;

  // 创建socket
  const createWebSocket = () => {
    try {
      socket = new WebSocket(wsUrl)
      init();
    } catch (e) {
      !stop && reconnect();
    }
  }

  // 监听集合
  const init = () => {
    socket.onclose = (e: any) => {
      // console.log('链接关闭', e);
      !stop && reconnect();
      //清除已关闭socket
      soketMap[opts.envId] = soketMap[opts.envId]?.filter(s => s.readyState === 1);
    };

    socket.onerror = (e: any) => {
      !stop && reconnect();
    };

    socket.onopen = () => {
      // console.log('链接成功');
      soketMap[opts.envId] = soketMap[opts.envId] || [];
      soketMap[opts.envId].push(socket);
    };

    socket.onmessage = (event: any) => {
      let tempContent = event.data;
      try {
        tempContent = decodeURIComponent(tempContent);
      } catch (error) {
        tempContent = tempContent;
      }
      try {
        const res = JSON.parse(tempContent);
        // console.log("收到消息", res);
        eventBus.emit("message", res, opts);
      } catch (error) {
        console.error("socket解析错误");
      }
    }
  }

  // 重连
  const reconnect = () => {
    if (stop) return;
    if (lockReconnect) return;
    lockReconnect = true;
    reconnectTimer && clearTimeout(reconnectTimer);
    reconnectTimer = setTimeout(function () {
      createWebSocket();
      lockReconnect = false;
    }, 1000);
  }
  function stopFn() {
    stop = true;
  }

  createWebSocket()
  return {
    soketEvent: eventBus,
    stop: stopFn
  }
}
