import { setConcurrent, getEnvItem } from "./../../rpa/common";
import { cloneDeep } from "lodash";
import { envRecover, runScript } from './../../rpa/ui'
import { getUid } from './../../utils'

import { IRpaItem, RpaItemStatus, RPAProcess } from "./constant";
import { IRpaItemX, Tsetting } from "./modal";

export function init(data: IRpaItem[], settingValue: Tsetting): IRpaItemX[] {
  let rpaItems: IRpaItem[] = cloneDeep(data);
  let result: IRpaItemX[] = [];
  let uid = getUid();
  //设置并发数
  setConcurrent({ group: uid, limit: settingValue.limit });

  rpaItems?.length && rpaItems.map((item: IRpaItem, i: number) => {
    //参数检测
    if (!item.envId) {
      throw new Error("组件envId为空");
    }
    if (!item.autoLoginScript) {
      throw new Error("自动登录脚本为空");
    }
    if (!item.manualLoginScript) {
      throw new Error("手动登录脚本为空");
    }
    if (!item.script || item.script?.length === 0) {
      throw new Error("执行脚本参数为空");
    }
    let runResult: IRpaItemX = {
      ...item,
      envName: `环境${i + 1}`,
      status: RpaItemStatus.LOADING,
      tipText: "正在检测...",
      checked: false,
      scriptName: item.autoLoginScript.scriptName || "自动登录脚本",
      group: uid,
      index: i,
      ...settingValue,
      step: 0,
      btnLoading: false,
    };
    //设置下并发数
    result.push(runResult);
  })
  return result
}

export async function check(rpaItems: IRpaItemX[], setData: Function) {
  //环境恢复机制
  envRecover(rpaItems.map(v => v.envId));
  const defaultOptions = { log: false, headless: true };
  let loginPromise = [];
  //初始化检查是否被占用
  for (let i = 0; i < rpaItems.length; i++) {
    const item = rpaItems[i];
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

    //判断是否是跳过执行
    let loginScript = item.autoLoginScript;
    let script = loginScript.runScript;
    let args = loginScript.args || {};
    let envId = item.envId;
    let options = Object.assign({}, defaultOptions, loginScript.options ?? {});
    let accountId = item?.accountId;
    let group = item?.group;
    // console.log({ script, args, envId, options, group, accountId });
    //运行登录脚本
    let p = runScript({
      script, args, envId, options, group, accountId
    });
    p.then((res) => {
      if (res.code === 0) {
        item.status = RpaItemStatus.SUCCESS;
        item.tipText = "检查正常";
        item.checked = true;
      } else {
        item.status = RpaItemStatus.FAIL;
        item.tipText = res.message || "检测异常";
        item.checked = false;
      }
      //每条记录加载完就重新渲染
      setData([...rpaItems]);
    })
    //记录自动登录脚本的取消
    //把取消函数存储起来;
    item.autoLoginScript.cancel = p.cancel;
    loginPromise.push(p);
  }
  await Promise.allSettled(loginPromise);
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

