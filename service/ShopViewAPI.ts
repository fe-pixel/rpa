import { message } from 'antd';
declare global {  //设置全局属性
  interface Window {  //window对象属性
    ShopviewLauncherApi: any;   //加入对象
  }
}

export const shopviewLauncherApi = (() => {
  let api = window.ShopviewLauncherApi ? new window.ShopviewLauncherApi() : false;
  //处理报错  防止  api.a()运行报错
  api = new Proxy(api ? api : Object.create(null), {
    get(targt, key) {
      if (targt[key] === undefined) return () => {
        //console.error(`ShopviewLauncherApi 调用出错:${key as string}`);
        return false
      }

      if (typeof targt[key] === 'function') {
        return targt[key].bind(targt);
      } else {
        return targt[key];
      }
    }
  });
  return api;
})()



