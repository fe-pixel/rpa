
export interface IFn {
  (result: TReturnResult): void;
}


export interface IConfig extends IRpaTasksModalConfig {
  wrapClassName?: string
}

export interface IRpaTasksModalConfig {
  title?: string;
  data: rpaTaskData[];
  visible?: boolean;
  onBeforeRuning?: Function;
  onRunComplete?: Function
  onClose?: (res?: TReturnResult) => void;
}


export type rpaParams = {
  title: string,
  data: rpaTaskData[],
  onBeforeRuning: Function,//运行前执行执行的回调
  onRunComplete: IFn //执行完成的回调
}

export type rpaTaskData = {
  envId: string;  //环境ID
  envName?: string;  //环境名字  会根据ID获取
  initStatus?: number;  //初始化状态    具体看 statusMap
  script: rpaScript[];
};

export type rpaScript = {
  scriptName: string;  //脚本名称
  runScript?: string | Function;  //
  args?: Object;  //脚本参数
  options?: { log?: boolean, headless?: boolean }, //
  status?: number;  //脚本执行状态  具体看 statusMap
  openUrl?: string; //当执行手动登录时配置的登录地址
}

export type TReturnResult = {
  [envName: string]: {
    envId: string,//环境ID
    envName?: string,//环境名字  会根据ID获取
    result: result[]
  },
}

export type result = {
  code: number,
  data: any,
  message: string,
  isKeepOpen?: boolean //运行浏览器是否保持窗口打开
}

//1-30 检测阶段
//31~60 执行阶段
export let statusMap = {
  1: "账号检查中...",
  2: "环境被占用",
  3: "环境获取失败",
  4: "账号登录失败",
  30: "检查成功",
  31: "用户手动登录",
  32: "正在执行...",
  59: "执行失败",
  60: "执行完成",
}



export interface options {
  args?: Object,
  envId: string,
  accountId?: string,
  group?: string,
  options?: {
    log?: boolean,
    headless?: boolean,
  },
  sessionId?: string
}
export interface params extends options {
  script: string | Function
}
