import EventBus from "./EventBus";

// 请求地址
export const rpaSocket = (prot: string) => {
  const wsUrl = `ws://127.0.0.1:${prot}`
  let reconnectTimer: any = null // 重连定时器
  let lockReconnect = false // 重连锁
  let socket: any = null; // 存储socket对象
  let stop = false;
  let soketEvent = new EventBus();

  soketEvent.on("send", (res: any) => {
    try {
      socket.send(JSON.stringify(res));
    } catch (error) {
      console.error(error);
    }
  })

  // 创建socket
  const createWebSocket = () => {
    try {
      socket = new WebSocket(wsUrl)
      init()
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
      console.log('发生异常了');
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
        console.log("收到消息", res);
        soketEvent.emit("message", res);
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
    socket?.close();
    stop = true;
  }

  createWebSocket()
  return {
    soketEvent: soketEvent,
    stop: stopFn
  }
}
