// 请求地址
export const rpaSocket = (prot: string) => {
  const wsUrl = `ws://127.0.0.1:${prot}`
  // const token = getStore("token")
  // const uid = getStore("uid")
  let reconnectTimer: any = null // 重连定时器
  let lockReconnect = false // 重连锁
  let socket: any = null; // 存储socket对象

  // 创建socket
  const createWebSocket = () => {
    try {
      socket = new WebSocket(wsUrl)
      init()
    } catch (e) {
      reconnect();
    }
  }


  // 监听集合
  const init = () => {
    socket.onclose = (e: any) => {
      console.log('链接关闭', e);
      reconnect();
    };

    socket.onerror = (e: any) => {
      console.log('发生异常了', e);
      reconnect();
    };

    socket.onopen = () => {
      socket.send({ "message": "链接成功" });
      console.log('链接成功');
    };

    socket.onmessage = (event: any) => {
      try {
        let tempContent = event.data;
        //中文解析掉
        tempContent = decodeURIComponent(tempContent);
        const res = JSON.parse(tempContent);
        console.log("收到消息", res);
      } catch (error) {
        console.error("socket解析错误", error);
      }

    }
  }

  // 重连
  const reconnect = () => {
    if (lockReconnect) {
      return;
    };
    console.log('重连')
    lockReconnect = true;
    reconnectTimer && clearTimeout(reconnectTimer);
    reconnectTimer = setTimeout(function () {
      createWebSocket();
      lockReconnect = false;
    }, 4000);
  }

  createWebSocket()
  return socket
}
