import * as self from "./storageSelf"
import * as web from "./storageWeb"


if (!!window.ShopviewLauncherApi) {
  var { setStore, getStore, clearStore, defaultConfig } = self;
} else {
  var { setStore, getStore, clearStore, defaultConfig } = web;
}

export {
  setStore, getStore, clearStore, defaultConfig
}