import { CheckCircleFilled, ExclamationCircleFilled } from "@ant-design/icons";
import { getUid } from "../../utils";

export enum RPAProcess {
  CHECKING = 1,//检测中
  CHECK_DONE = 10,//检测成功
  RUNING = 20,//执行中
  END = 30,//执行完
}
export enum RpaItemStatus {
  LOADING = 1,
  SUCCESS,
  FAIL,
  WAITING
};

export const OptsTipMap: any = {
  [RPAProcess.CHECKING + RpaItemStatus.LOADING]: "检查中",
  [RPAProcess.CHECKING + RpaItemStatus.SUCCESS]: "可执行",
  [RPAProcess.CHECK_DONE + RpaItemStatus.SUCCESS]: "可执行",
  [RPAProcess.RUNING + RpaItemStatus.WAITING]: "等待中",
  [RPAProcess.RUNING + RpaItemStatus.LOADING]: "执行中",
  [RPAProcess.RUNING + RpaItemStatus.SUCCESS]: "执行成功",
  [RPAProcess.END + RpaItemStatus.SUCCESS]: "执行成功",
  [RPAProcess.END + RpaItemStatus.FAIL]: "执行失败",
}
export const RpaItemStatusMap: any = {
  [RpaItemStatus.WAITING]: "nomal",
  [RpaItemStatus.LOADING]: "nomal",
  [RpaItemStatus.SUCCESS]: "success",
  [RpaItemStatus.FAIL]: "error",
}



export interface IRPAConfig {
  key?: string,//是否状态保持的标识
  autoExecute?: boolean;//是否自动执行 默认false
  autoClose?: boolean,//是否执行完自动关闭 默认false
  group?: string,//组别，同一组别并发在一起，同一应用受影响
  executeNumber?: number,//执行次数
  interval?: number,//执行间隔
  limit?: number,//执行次数
  isDev?: boolean,//是否开发模式
  title?: string;//标题
  data: IRpaItem[];//脚本数据
  visible?: boolean;//是否显示
  onBeforeRuning?: Function;//执行之前的回调
  onClose?: Function;//关闭回调
  onChecking?: Function;//检测中
  onCheckDone?: Function;//检测完成
  onRuning?: Function;//运行中
  onRunComplete?: IFn;//全部完成后触发回调
  onMini?: Function;//最小化回调
}

export interface IRpaItem {
  envId: string;  //环境ID
  accountId?: string;  //环境名字  会根据ID获取
  autoLoginScript: IRpaScript,//自动登录脚本
  manualLoginScript: IRpaScript,//手动登录脚本
  script: IRpaScript[],//运行业务脚本
};

export interface IRpaScript {
  scriptName: string;  //脚本名称
  runScript: string | Function;
  args?: Object;  //脚本参数
  options?: { log?: boolean, headless?: boolean },
  openUrl?: string; //当执行手动登录时配置的登录地址
}

interface IFn {
  (result: TReturnResult): void;
}

export type TReturnResult = {
  [envId: string]: {
    envId: string,//环境ID
    envName?: string,//环境名字  会根据ID获取
    result: result[]
  }
}

export type result = {
  code: number,
  data: any,
  message: string,
  isKeepOpen?: boolean //运行浏览器是否保持窗口打开
}

export const winGid = getUid();
export const groupMap: { [gid: string]: number } = {

};

export const defaultConfig = {
  executeNumber: 1,
  interval: 0,
  limit: 3,
  isDev: false
}