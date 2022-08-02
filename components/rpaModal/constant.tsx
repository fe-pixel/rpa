import { CheckCircleFilled, ExclamationCircleFilled } from "@ant-design/icons";

/**
  1:"账号检查中...",
  2:"环境被占用",
  3:"环境获取失败",
  4:"账号登录失败",
  30:"检查成功",
  31:"正在执行...",
  59:"执行失败",
  60:"执行成功",
 * @export
 * @enum {number}
 */
export enum RpaStatus {
  IS_CHECKED = 1,
  ENV_BE_OCCUPIED = 2,
  ENV_FAIL = 3,
  LOGIN_FAIL = 4,
  CHECK_SUCCESS = 30,
  USER_MANUAL_LOGIN = 31,
  RUNNING = 32,
  FAIL = 59,
  SUCCESS = 60,
}



export const RpaStatusMap: any = {
  1: <>账号检查中... <span className="loading"></span></>,
  2: <>环境被占用 <ExclamationCircleFilled /></>,
  3: <>环境获取失败 <ExclamationCircleFilled /></>,
  4: <>登录失败 <ExclamationCircleFilled /></>,
  30: <>检查成功 <CheckCircleFilled /></>,
  31: <>用户手动登录 <CheckCircleFilled /></>,
  32: <>正在执行... <span className="loading"></span></>,
  59: <>执行失败 <ExclamationCircleFilled /></>,
  60: <>执行完成 <CheckCircleFilled /></>,
}

export const RpaStatusStyleMap: any = {
  1: "running",
  2: "fail",
  3: "fail",
  4: "fail",
  30: "success",
  31: "success",
  32: "running",
  59: "fail",
  60: "success",
}