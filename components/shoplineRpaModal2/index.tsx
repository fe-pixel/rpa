import { IRPAConfig } from "../rpaModal2/constant";
import { openRpaModal } from "../rpaModal2";
import { merge } from "lodash";
export const defaultOptions = {
  title: "一键授权"
}

export const defaultObj = {
  envId: "",
  script: [
    {
      scriptName: "shopline登录",
      runScript: "",
      args: {
        account: "",
        password: ""
      },
      openUrl: "https://admin.myshopline.com/user/signIn"
    },
    {
      scriptName: "店铺授权",
      runScript: "",
      args: {
        //店铺后台地址
        admin_url: "",
        appKey: "",
        secret: "",
        scope: "",
        redirectUri: "",
      },
      openUrl: "https://admin.myshopline.com/user/signIn"
    }
  ]
}

const openShoplineRpaModal = (config: IRPAConfig) => {
  let mixConfig = Object.assign({}, defaultOptions, config);
  mixConfig.data = mixConfig.data.map(v => merge({}, defaultObj, v));
  //let paramsKey = ["admin_url", "appKey", "secret", "redirectUri"];
  console.log(mixConfig);

  return openRpaModal(mixConfig);
}

export { openShoplineRpaModal }