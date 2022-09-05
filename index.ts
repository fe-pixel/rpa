import projectConfig from './package.json';
import './components/rpaModal/style.less';



//UI组件
import { openRpaModal } from "./components/rpaModal2"
//待测试
import { openShoplineRpaModal } from "./components/shoplineRpaModal2"
//api
import { runScript, getAPIPort } from "./rpa"

import eventBus from "./utils/EventBus"
//window.rpa
const version = projectConfig?.version || undefined
export {
  version,
  runScript,
  openRpaModal,
  openShoplineRpaModal,
  getAPIPort,
  eventBus,
};







