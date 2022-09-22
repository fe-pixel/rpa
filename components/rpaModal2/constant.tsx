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
  RECOVER,
  SUCCESS,
  FAIL,
  WAITING
};

//tip 加个空格为了好看~
export const OptsTipMap: any = {
  [RPAProcess.CHECKING + RpaItemStatus.LOADING]: "检查中 ",
  [RPAProcess.CHECKING + RpaItemStatus.RECOVER]: "修复中 ",
  [RPAProcess.CHECKING + RpaItemStatus.SUCCESS]: "可执行 ",
  [RPAProcess.CHECK_DONE + RpaItemStatus.SUCCESS]: "可执行 ",
  [RPAProcess.CHECK_DONE + RpaItemStatus.RECOVER]: "修复中 ",
  [RPAProcess.RUNING + RpaItemStatus.WAITING]: "等待中 ",
  [RPAProcess.RUNING + RpaItemStatus.RECOVER]: "修复中 ",
  [RPAProcess.RUNING + RpaItemStatus.LOADING]: "执行中 ",
  [RPAProcess.RUNING + RpaItemStatus.SUCCESS]: "执行成功 ",
  [RPAProcess.END + RpaItemStatus.SUCCESS]: "执行成功 ",
  // [RPAProcess.END + RpaItemStatus.FAIL]: "执行失败 ",
}
export const LogItemStatusMap: any = {
  [RpaItemStatus.RECOVER]: "error",
  [RpaItemStatus.FAIL]: "error",
}
export const RpaItemStatusMap: any = {
  [RpaItemStatus.WAITING]: "nomal",
  [RpaItemStatus.LOADING]: "nomal",
  [RpaItemStatus.RECOVER]: "nomal",
  [RpaItemStatus.SUCCESS]: "success",
  [RpaItemStatus.FAIL]: "error",
}



export interface IRPAConfig {
  keyId: string;//跟config.key 相同
  simple?: boolean,//是否是简单模式  简单模式会跳过自动登录和手动登录
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
  accountId?: string;//账户ID  当前环境下绑定哪一个账号
  autoLoginScript?: IRpaScript,//自动登录脚本
  manualLoginScript?: IRpaScript,//手动登录脚本
  script: IRpaScript[],//运行业务脚本
};

export interface IRpaScript {
  scriptName: string;  //脚本名称
  runScript: string | Function;//运行脚本
  args?: Object;  //脚本参数
  //执行rpa的配置信息  log：是否开启console有效 默认false  headless:是否开启无头 true
  options?: { log?: boolean, headless?: boolean },
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