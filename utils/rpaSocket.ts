import { params } from "../type";
import eventBus from "./EventBus";
let soketMap = {

}
// 请求地址
export const rpaSocket = (prot: string, opts?: params) => {
  const wsUrl = `ws://127.0.0.1:${prot}`
  let reconnectTimer: any = null // 重连定时器
  let lockReconnect = false // 重连锁
  let socket: any = null; // 存储socket对象
  let stop = false;


  // eventBus.on("send", (res: any) => {
  //   try {
  //     socket.send(JSON.stringify(res));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // })

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
      console.log('链接关闭', e);
      !stop && reconnect();
    };

    socket.onerror = (e: any) => {
      !stop && reconnect();
    };

    socket.onopen = () => {
      console.log('链接成功');
    };

    socket.onmessage = (event: any) => {
      try {
        let tempContent = event.data;
        //中文解析掉
        tempContent = decodeURIComponent(tempContent);
        const res = JSON.parse(tempContent);
        // console.log("收到消息", res);
        eventBus.emit("message", res, opts);
      } catch (error) {
        console.error("socket解析错误", error);
      }
    }
  }

  // 重连
  const reconnect = () => {
    if (stop) return;
    if (lockReconnect) return;
    console.log('soket重连')
    lockReconnect = true;
    reconnectTimer && clearTimeout(reconnectTimer);
    reconnectTimer = setTimeout(function () {
      createWebSocket();
      lockReconnect = false;
    }, 4000);
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
