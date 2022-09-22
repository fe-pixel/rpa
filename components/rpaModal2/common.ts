import { setConcurrent, getEnvItem } from "./../../rpa/common";
import { cloneDeep } from "lodash";
import { envRecover, runScript } from './../../rpa/ui'

import { IRPAConfig, IRpaItem, RpaItemStatus, RPAProcess } from "./constant";
import { IRpaItemX, Tsetting } from "./modal";
import { shopviewLauncherApi } from "../../service/ShopViewAPI";
function checkParams(item: IRpaItem, simple: boolean) {
  //参数检测
  if (!item.envId) {
    throw new Error("组件envId为空");
  }
  if (!simple) {
    if (item.envId === "none") {
      throw new Error("无环境只支持简单模式，请配置simple:true");
    }
    if (!item.autoLoginScript) {
      throw new Error("自动登录脚本为空");
    }
    if (!item.manualLoginScript) {
      throw new Error("手动登录脚本为空");
    }
  }
  if (!item.script || item.script?.length === 0) {
    throw new Error("执行脚本参数为空");
  }
}

export function init(config: IRPAConfig, settingValue: Tsetting, group: string): IRpaItemX[] {
  let rpaItems: IRpaItem[] = cloneDeep(config.data);
  let result: IRpaItemX[] = [];

  rpaItems?.length && rpaItems.map((item: IRpaItem, i: number) => {
    checkParams(item, !!config.simple);
    let runResult: IRpaItemX = {
      ...item,
      envName: `环境${i + 1}`,
      status: RpaItemStatus.LOADING,
      tipText: "",//初始什么都没有
      checked: false,
      scriptName: item.autoLoginScript?.scriptName || "自动登录脚本",
      group: group,
      index: i,
      ...settingValue,
      step: 0,
      btnLoading: false,
      startTime: new Date(),
      alreadyExecuteNumber: 0,
    };
    result.push(runResult);
  });
  return result
}
export async function check(rpaItems: IRpaItemX[], setData: Function) {

  //环境恢复机制
  const defaultOptions = { log: false, headless: true };
  let loginPromise = [];
  //初始化检查是否被占用
  for (let i = 0; i < rpaItems.length; i++) {
    const item = rpaItems[i];
    //中途停止退出操作
    if (item.status === RpaItemStatus.FAIL) break;
    let { code, data } = await getEnvItem(item.envId);

    //获取环境失败
    if (code != 0 || !data || data.items?.length === 0) {
      item.status = RpaItemStatus.FAIL;
      item.tipText = "环境获取失败";
      continue;
    }
    //环境名称复制
    item.envName = data?.items[0]?.envName;
    //检查是否占用
    if (data.items[0]?.envState?.openState !== 1) {
      item.status = RpaItemStatus.FAIL;
      item.tipText = "环境被占用";
      continue;
    }
    //环境名称复制
    if (item.accountId) {
      item.accountName = findAccount(data.items[0]?.linkedAccount, item.accountId)?.accountName;
      let accountName = item.accountName;
      loop:
      for (const accounts of data?.items[0].linkedAccount) {
        for (const items of accounts.accountList) {
          if (items.accountId === item.accountId) {
            accountName = item.accountName;
            break loop;
          }
        }
      }
      if (!accountName) {
        item.status = RpaItemStatus.FAIL;
        item.tipText = "账号Id不存在,请检查环境关联账号";
        continue;
      } else {
        item.accountName = accountName;
      }
    }
    //更新环境名称和账号
    setData([...rpaItems]);
    //判断是否是跳过执行
    let loginScript = item.autoLoginScript;
    let script = loginScript?.runScript || (() => { });
    let args = loginScript?.args || {};
    let envId = item.envId;
    let options = Object.assign({}, defaultOptions, loginScript?.options ?? {});
    let accountId = item?.accountId;
    let group = item?.group;
    let sessionId = item?.group + item?.envId + "-autoLoginScript";
    // console.log({ script, args, envId, options, group, accountId });
    //中途停止退出操作
    //@ts-expect-error
    if (item.status === RpaItemStatus.FAIL) break;
    //运行登录脚本
    let p = runScript({
      script, args, envId, options, group, accountId, sessionId
    });
    p.then((res) => {
      //把原本的取消设置为空
      item.autoLoginScript && (item.autoLoginScript.cancel = undefined);
      if (res.code === 0) {
        item.status = RpaItemStatus.SUCCESS;
        // item.tipText = "检查正常";
        item.checked = true;
      } else {
        item.status = RpaItemStatus.FAIL;
        item.tipText = res.message || "登录失败";
        // if (res.code === -1) {
        //   item.tipText = res.message || "登录失败";
        // } else {
        //   item.tipText = "登录失败";
        // }

        item.checked = false;
      }
      //每条记录加载完就重新渲染
      setData([...rpaItems]);
    })
    //记录自动登录脚本的取消
    //把取消函数存储起来;
    item.autoLoginScript && (item.autoLoginScript.cancel = p.cancel);
    loginPromise.push(p);
  }
  await Promise.allSettled(loginPromise);
  return rpaItems;
}


export async function simpleCheck(rpaItems: IRpaItemX[], setData: Function) {
  //环境恢复机制
  let promiseArr = [];
  //初始化检查是否被占用
  for (let i = 0; i < rpaItems.length; i++) {
    const item = rpaItems[i];
    //中途停止退出操作
    if (item.status === RpaItemStatus.FAIL) break;
    if (item.envId === "none") {
      //无环境被占用
      let ids = shopviewLauncherApi.getExpandActiveList();
      if (!!ids.find((v: any) => v?.id === "none")) {
        item.status = RpaItemStatus.FAIL;
        item.tipText = "环境被占用";
        setData([...rpaItems]);
        return;
      }
      item.status = RpaItemStatus.SUCCESS;
      // item.tipText = "检查正常";
      item.checked = true;
      item.envName = "--"
      setData([...rpaItems]);
      continue;
    }
    let p = getEnvItem(item.envId).then(res => {
      let { code, data } = res;
      //获取环境失败
      if (code != 0 || !data || data.items?.length === 0) {
        item.status = RpaItemStatus.FAIL;
        item.tipText = "环境获取失败";
        setData([...rpaItems]);
        return;
      }
      //环境名称复制
      item.envName = data?.items[0]?.envName;
      //检查是否占用
      if (data.items[0]?.envState?.openState !== 1) {
        item.status = RpaItemStatus.FAIL;
        item.tipText = "环境被占用";
        setData([...rpaItems]);
        return;
      }
      //环境名称复制
      if (item.accountId) {
        item.accountName = findAccount(data.items[0]?.linkedAccount, item.accountId)?.accountName;
        let accountName = item.accountName;
        loop:
        for (const accounts of data?.items[0].linkedAccount) {
          for (const items of accounts.accountList) {
            if (items.accountId === item.accountId) {
              accountName = item.accountName;
              break loop;
            }
          }
        }
        if (!accountName) {
          item.status = RpaItemStatus.FAIL;
          item.tipText = "账号Id不存在,请检查环境关联账号";
          setData([...rpaItems]);
          return;
        } else {
          item.accountName = accountName;
        }
      }
      item.status = RpaItemStatus.SUCCESS;
      // item.tipText = "检查正常";
      item.checked = true;
      setData([...rpaItems]);
    });
    promiseArr.push(p);
    //更新环境名称和账号
    setData([...rpaItems]);
  }
  await Promise.allSettled(promiseArr);
  return rpaItems;
}


function findAccount(obj: any, accountId: string) {
  for (const item of obj) {
    for (const account of item.accountList) {
      if (account.accountId === accountId) {
        return account;
      }
    }
  }
  return null;
}

