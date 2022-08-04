import './components/rpaModal/style.less';



//UI组件
import { openRpaModal } from "./components/rpaModal2"
//待测试
import { openShoplineRpaModal } from "./components/shoplineRpaModal"
//api
import { runScript, getAPIPort } from "./rpa"

import eventBus from "./utils/EventBus"


export {
  runScript,
  openRpaModal,
  openShoplineRpaModal,
  getAPIPort,
  eventBus,
};







