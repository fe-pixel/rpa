import { useCallback, useEffect, useState, MouseEventHandler, useMemo } from "react";
import { Button, Modal, ConfigProvider, Checkbox, message, Alert } from "antd";
import { IRPAConfig, IRpaScript, IRpaItem, TReturnResult, RPAProcess, RpaItemStatus, LogItemStatusMap, RpaItemStatusMap, OptsTipMap, defaultConfig, winGid, groupMap } from './constant'
import { runScript } from './../../rpa/ui'
import './style.less'
import List from 'rc-virtual-list';
import SetModal from "./setModal";
import LogModal from "./logModal";
import { MinusOutlined, SettingOutlined, CheckCircleFilled, ExclamationCircleFilled, HistoryOutlined } from "@ant-design/icons";
import { check, simpleCheck, init } from "./common";
import { cloneDeep, throttle } from "lodash";
import { compose, getUid, stepTime } from "../../utils";
import { setConcurrent } from "../../rpa/common";
import eventBus from "../../utils/EventBus";


export type Tsetting = {
  executeNumber: number,
  interval: number,
  limit: number,
  isDev: boolean
}

export interface IRPAConfigX extends IRPAConfig {
  close?: Function,
  minimize?: Function,
  update?: Function,
  isStop?: boolean
}

export interface IRpaItemX extends IRpaItem {
  btnLoading: boolean,//打开按钮
  envName: string,
  accountName?: string,
  scriptName: string,//脚本名称
  group: string,//组名
  status: RpaItemStatus,//脚本状态
  tipText: string,//提示文本
  checked: boolean,//是否选中
  index: number,//当前的下标
  step: number,//当前脚本执行的下标
  executeNumber: number,
  alreadyExecuteNumber: number,//已经执行次数
  interval: number,
  limit: number,
  isDev: boolean,
  script: IRpaScriptX[],
  manualLoginScript?: IRpaScriptX,
  autoLoginScript?: IRpaScriptX,
  startTime: Date
}
export interface IRpaScriptX extends IRpaScript {
  cancel?: Function,//取消
}


const defaultOptions = { log: false, headless: true };

const RpaTasksModal = (config: IRPAConfigX) => {

  const [data, setData] = useState<IRpaItemX[]>([]);
  const [modalTitle, setModalTitle] = useState(config.title || "RPA任务");
  const [showNotice, setShowNotice] = useState(false);
  const [process, setProcess] = useState<RPAProcess>(RPAProcess.CHECKING);
  const [runBtnDisabled, setRunBtnDisabled] = useState(true);

  const [returnResult, setReturnResult] = useState<TReturnResult>({});   // 执行RPA返回的结果

  const [showSetModal, setShowSetModal] = useState<boolean>(false);

  const [showLog, setShowLogModal] = useState<boolean>(false);
  const [logIndex, setLogIndex] = useState<number>(-1);

  const [isAllCheck, setIsAllCheck] = useState<boolean>(false);

  const [groupUid, setGroupUid] = useState<string>(getUid());

  const [setting, setSetting] = useState({
    executeNumber: defaultConfig.executeNumber,
    interval: defaultConfig.interval,
    limit: defaultConfig.limit,
    isDev: defaultConfig.isDev
  });

  const [modalInstance, setModalInstance] = useState<any>(null);

  const [reSetLog, setReSetLog] = useState<any>(Date.now());

  useEffect(() => {
    //设置项赋值
    let setting = initSetting();
    let groupUid = initGroup(setting);
    let result = initData(setting, groupUid);
    runCheck(result);
    function Fn(groupUid: any, limit: any, configP: any) {
      if (!(groupUid in groupMap)) return;
      if (setting.limit === limit) return;
      if (config.keyId === configP.keyId) {
        groupMap[groupUid] = limit;
        setConcurrent({ group: groupUid, limit: limit });
      } else {
        setSetting({ ...setting, limit });
      }
    }
    eventBus.on(`updateLimit-${groupUid}`, Fn);
    return () => {
      eventBus.off(`updateLimit-${groupUid}`, Fn);
    }
  }, []);

  useEffect(() => {
    // onClose?: Function;//关闭回调
    // onChecking?: Function;//检测中
    // onCheckDone?: Function;//检测完成
    // onRuning?: Function;//运行中
    // onRunComplete?: Function;//全部完成后触发回调
    switch (process) {
      case RPAProcess.CHECKING:
        config.onChecking?.();
        break;
      case RPAProcess.CHECK_DONE:
        config.onCheckDone?.();
        //自动运行
        if (config.autoExecute) {
          if (runBtnDisabled) {
            setProcess(RPAProcess.END);
            return;
          }
          //运行回调函数
          config.onBeforeRuning?.();
          //修改状态 
          setProcess(RPAProcess.RUNING);
          executeScript();
        }
        break;
      case RPAProcess.RUNING:
        config.onRuning?.();
        break;
      case RPAProcess.END:
        config.onRunComplete?.(returnResult);
        //自动关闭
        if (config.autoClose) {
          config.close?.();
        }
        modalInstance?.destroy();
        break;
      default:
        break;
    }
  }, [process]);

  useEffect(() => {
    if (config.isStop) {
      stopHttp();
      config.close?.();
    }
  }, [config]);

  function reSet() {
    setModalTitle(config.title || "RPA任务");
    let result = initData();
    runCheck(result);
    setReturnResult({});
    setReSetLog(Date.now())
  }

  function initGroup(settingP: Tsetting): string {
    //初始化group的名字  为了实现groupMap全局穿透
    //group
    let group = "";
    if (config.group) {
      group = `${winGid}-${config.group}`;
      groupMap[group] = settingP.limit;
      eventBus.emit(`updateLimit-${group}`, group, settingP.limit, config);
    } else {
      group = getUid();
    }
    setConcurrent({ group: group, limit: settingP?.limit });
    setGroupUid(group);
    //设置并发数
    return group;
  }
  function initSetting() {
    let settingOptions = Object.assign({}, defaultConfig, config);
    let { executeNumber, interval, limit, isDev } = settingOptions;
    setSetting({ executeNumber, interval, limit, isDev });
    return { executeNumber, interval, limit, isDev };
  }

  //点击配置报错后更新data值
  useEffect(() => {
    if (process !== RPAProcess.CHECK_DONE) return;
    // if (data[0].limit !== setting.limit) {
    //   setConcurrent({ group: data[0].group, limit: setting.limit });
    // }

    for (const item of data) {
      item.executeNumber = setting.executeNumber;
      item.limit = setting.limit;
    }
    setData([...data]);
  }, [setting]);

  function initData(settingP?: Tsetting, groupP?: string) {
    let settingTemp = settingP ?? setting;
    let groupTemp = groupP ? groupP : groupUid;

    let result = init(config, settingTemp, groupTemp);
    setModalTitle(config.title || (result.length === 1 ? "RPA任务" : "RPA任务列表"));
    setData(result);
    autoRunBtnDisabled(result);
    return result;
  }

  async function runCheck(result: IRpaItemX[]) {
    setProcess(RPAProcess.CHECKING);
    let res = null;
    if (config.simple) {
      res = await simpleCheck(result, setData);
    } else {
      res = await check(result, setData);
    }
    setProcess(RPAProcess.CHECK_DONE);
    autoRunBtnDisabled(res);
    //判断是全部成功还是部分成功
    !config.simple && autoShowNotice(res);
    autoAllCheck(res);
  }
  function autoShowNotice(res?: IRpaItemX[]) {
    let arr = res ? res : data;
    if (arr.some(v => v.status === RpaItemStatus.FAIL)) {
      setShowNotice(true);
    } else {
      setShowNotice(false);
    }
  }

  function autoRunBtnDisabled(res?: IRpaItemX[]) {
    let arr = res ? res : data;
    if (arr.some(v => v.checked)) {
      setRunBtnDisabled(false);
    } else {
      setRunBtnDisabled(true);
    }
  }


  const scriptUnit = async (item: IRpaItemX, next: Function) => {
    //这里是防止中途有人取消让他变成失败
    if (item.status === RpaItemStatus.FAIL) return;
    //准备参数
    let runScriptItem = item.script[item.step];
    if (!runScriptItem) return;
    let script = runScriptItem.runScript;
    let args = runScriptItem.args || {};
    let envId = item.envId;
    let options = Object.assign({}, defaultOptions,
      { headless: !item.isDev },
      runScriptItem.options ?? {},
      { headless: !setting.isDev }
    );
    let accountId = item?.accountId;
    let group = item?.group;
    let sessionId = item?.group + item?.envId + `-${item.step}`;
    //每条记录加载完就重新渲染
    item.scriptName = runScriptItem.scriptName
    item.status = RpaItemStatus.LOADING;
    // item.tipText = "执行中...";
    //运行脚本
    let p = runScript({
      script, args, envId, options, group, accountId, sessionId
    });
    //把取消函数存储起来;
    item.script[item.step].cancel = p.cancel;
    //更新视图
    data[item.index] = item;
    setData([...data]);
    let res = await p;
    //把原本的取消函数还原
    item.script[item.step].cancel = undefined;
    const returnResultTmp = returnResult || {};
    returnResultTmp[item.envId] = returnResult[item.envId] || {};
    returnResultTmp[item.envId].envId = item.envId
    returnResultTmp[item.envId].envName = item.envName
    returnResultTmp[item.envId].result = returnResult[item.envId]?.result || [];
    returnResultTmp[item.envId].result.push(res);
    //结果存储
    setReturnResult(returnResultTmp);
    if (res.code === 0) {
      ++item.step;
      //等待
      if (item.step > (item.script.length - 1) && item.executeNumber > 1) {
        item.step = 0;
        //分钟转换成毫秒数
        if (setting.interval > 0) {
          item.interval = setting.interval * 1000;
          item.status = RpaItemStatus.WAITING;
          // item.tipText = "等待中...";
          //这里做等待的倒计时

          stepTime(item.interval, (time: number) => {
            item.interval = time;
            data[item.index] = item;
            setData([...data]);
          }, () => {
            if (item.status === RpaItemStatus.FAIL) return;
            item.executeNumber--;
            item.alreadyExecuteNumber++;
            data[item.index] = item;
            setData([...data]);
            next();
          });
          return;
        } else {
          item.executeNumber--;
          item.alreadyExecuteNumber++;
          data[item.index] = item;
          setData([...data]);
          next();
          return;
        }
      }
      //成功的通知
      if (item.step === item.script.length && item.executeNumber === 1) {
        item.status = RpaItemStatus.SUCCESS;
        // item.tipText = "执行成功";
      }
      //下一个脚本运行
      next();
    } else {
      item.status = RpaItemStatus.FAIL;
      item.tipText = res.message || "执行失败";
    }
    //每条记录加载完就重新渲染
    data[item.index] = item;
    setData([...data]);
  }
  const _executeScript = async (item: IRpaItemX) => {
    //顺序执行脚本
    //中途报错会终端等待重新被激活
    //循环次数
    //间隔时间
    let executeNumber = item.executeNumber || 1;
    let fns = null;
    if (item.executeNumber === Infinity) {
      fns = new Array(9999).fill(scriptUnit);
    } else {
      fns = new Array(executeNumber * item.script.length).fill(scriptUnit);
    }
    const finalFn = compose(fns);
    finalFn(item);
  };

  //防止连续点击
  const onRunRpa = throttle(() => {
    //防止连续点击
    if (process === RPAProcess.CHECK_DONE) {
      //运行回调函数
      config.onBeforeRuning?.();
      //修改状态
      setProcess(RPAProcess.RUNING);
      executeScript();
    }
    //终止
    if (process === RPAProcess.RUNING) {
      stopHttpConfirm();
    }
    //重新执行
    if (process === RPAProcess.END) {
      setProcess(RPAProcess.CHECKING);
      reSet();
    }
  }, 500, { leading: true, trailing: false });

  //停止http请求
  function stopHttpConfirm(okCb?: Function) {
    let modal = Modal.confirm({
      wrapClassName: "rpa_closeModal",
      mask: false,
      maskClosable: false,
      title: '确认关闭执行任务吗？',
      icon: <ExclamationCircleFilled style={{ color: '#F86140' }} />,
      content: '关闭后正在执行的任务将自动结束，监控任务下次进入可重新开启',
      cancelText: "取消",
      okText: "确定",
      onOk() {
        stopHttp();
        okCb && okCb();
      }
    });
    setModalInstance(modal);
  }
  //停止http请求
  function stopHttp() {
    for (const item of data) {
      //关闭正在执行的登录脚本
      item.autoLoginScript?.cancel?.();
      item.manualLoginScript?.cancel?.();
      if (item.status !== RpaItemStatus.SUCCESS && item.checked) {
        item.status = RpaItemStatus.FAIL;
        item.tipText = "已终止";
        for (const scriptItem of item.script) {
          scriptItem.cancel?.();
        }
      }
    }
    setData([...data]);
    setProcess(RPAProcess.END);
  }

  function executeScript() {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.status === RpaItemStatus.FAIL) continue;
      if (!item.checked) continue;
      _executeScript(item);
    }
  }

  useEffect(() => {
    if (process !== RPAProcess.RUNING) return;
    // // 点击执行之后，监测执行情况
    let isAllRpaFinish = false;
    isAllRpaFinish = data.filter(v => v.checked).every(v =>
      [RpaItemStatus.SUCCESS, RpaItemStatus.FAIL].includes(v.status)
    );
    if (isAllRpaFinish) {
      setProcess(RPAProcess.END);
    }

    // //调试
    // //@ts-expect-error
    // window.rpaData = data;
    // //@ts-expect-error
    // window.process = process;
  }, [data]);


  const onCheckChange = (index: number) => {
    //只能在检查完成后才能点击
    if (process !== RPAProcess.CHECK_DONE) return;
    if (data[index].status === RpaItemStatus.FAIL) return;
    let check = data[index].checked;
    data[index].checked = !check;
    setData([...data]);
    autoRunBtnDisabled();
    autoAllCheck(data)
  };

  const autoAllCheck = (res?: IRpaItemX[]) => {
    let arr = res ? res : data;
    let temp = arr.filter(v => v.status === RpaItemStatus.SUCCESS);
    if (temp.length === 0) {
      setIsAllCheck(false);
      return;
    }
    if (temp.every(v => v.checked)) {
      setIsAllCheck(true);
    } else {
      setIsAllCheck(false);
    }
  };

  const onClickAllCheck = (boo: any) => {
    //只能在检查完成后才能点击
    if (process !== RPAProcess.CHECK_DONE) return;
    setIsAllCheck(boo);
    let dataTemp = data.map(v => {
      if (v.status === RpaItemStatus.SUCCESS) {
        v.checked = boo;
      }
      return v;
    })
    setData(dataTemp);
  };



  const closeHandle = () => {
    if (process === RPAProcess.RUNING || process === RPAProcess.CHECKING) {
      stopHttpConfirm(() => {
        config?.close?.();
      })
    } else {
      stopHttp();
      config?.close?.();
    }
  }
  let fmtWaitTime = useCallback((time: number) => {
    let m = time / 1000 / 60 % 60 | 0;
    let s = time / 1000 % 60 | 0;
    function fmtNumber(v: number): string | number {
      return v < 10 ? `0${v}` : v
    }
    if (m === 0) return `${fmtNumber(s)}s`;
    return `${m}:${fmtNumber(s)}s`
  }, [data]);


  let fmtTimeInterval = useCallback((item: IRpaItemX) => {
    let { status, executeNumber, alreadyExecuteNumber, interval } = item;
    let alreadyExecuteNumberStr = process < RPAProcess.RUNING ? alreadyExecuteNumber : alreadyExecuteNumber + 1;
    let currExcuteNumberStr = `${alreadyExecuteNumberStr}/${setting.executeNumber}`;
    if (executeNumber === Infinity) {
      currExcuteNumberStr = `${alreadyExecuteNumberStr}/∞`;
    }
    if (interval === 0) {
      return currExcuteNumberStr
    } else {
      if (status === RpaItemStatus.WAITING) {
        return <>
          <span>{currExcuteNumberStr}</span>
          <span style={{ color: "#B8BECC" }}>{` (${fmtWaitTime(interval)})`}</span>
        </>
      } else {
        return currExcuteNumberStr
      }
    }
  }, [data]);
  const goOnLogin = async (item: IRpaItemX) => {
    item.btnLoading = true;
    //准备参数
    let runScriptItem = item.manualLoginScript;
    let script = runScriptItem?.runScript || (() => { });
    let args = runScriptItem?.args || {};
    let envId = item.envId;
    let options = Object.assign({}, defaultOptions, runScriptItem?.options ?? {}, { headless: false });
    let accountId = item?.accountId;
    let group = item?.group;
    let sessionId = item?.group + item?.envId + `-manualLoginScript`;
    //每条记录加载完就重新渲染
    // item.tipText = "执行手动登录中...";
    //运行脚本
    let p = runScript({
      script, args, envId, options, group, accountId, sessionId
    });

    //把取消函数存储起来;
    item.manualLoginScript && (item.manualLoginScript.cancel = p.cancel);

    //更新状态
    item.status = RpaItemStatus.RECOVER;

    //更新视图
    data[item.index] = item;
    setData([...data]);
    let res = await p;
    //把原本的取消函数还原
    item.manualLoginScript && (item.manualLoginScript.cancel = undefined);

    item.btnLoading = false;
    if (res.code === 0) {
      //成功
      item.checked = true;
      item.status = RpaItemStatus.SUCCESS;
      item.tipText = "";
      autoRunBtnDisabled();
      autoAllCheck();
      autoShowNotice();
    } else {
      //失败
      item.status = RpaItemStatus.FAIL;
      item.tipText = res.message || "登录失败";
    }
    data[item.index] = item;
    setData([...data]);
  }
  const goOnExecute = async (item: IRpaItemX) => {
    item.btnLoading = true;
    //准备参数
    let runScriptItem = item.script[item.step];
    let script = runScriptItem.runScript;
    let args = runScriptItem.args || {};
    let envId = item.envId;
    let options = Object.assign({}, defaultOptions, runScriptItem.options ?? {}, { headless: false });
    let accountId = item?.accountId;
    let group = item?.group;
    let sessionId = item?.group + item?.envId + `-${item.step}`;
    //每条记录加载完就重新渲染
    item.scriptName = runScriptItem.scriptName;

    // item.tipText = "执行修复中...";
    //运行脚本
    let p = runScript({
      script, args, envId, options, group, accountId, sessionId
    });
    //把取消函数存储起来;
    item.script[item.step].cancel = p.cancel;

    //更新视图
    data[item.index] = item;

    //单个状态和全局状态
    item.status = RpaItemStatus.RECOVER;
    let isAllRpaFinish = false;
    isAllRpaFinish = data.filter(v => v.checked).every(v =>
      [RpaItemStatus.SUCCESS, RpaItemStatus.FAIL].includes(v.status)
    );
    if (!isAllRpaFinish) {
      setProcess(RPAProcess.RUNING);
    }

    setData([...data]);
    let res = await p;
    //把原本的取消函数还原
    item.script[item.step].cancel = undefined;

    item.btnLoading = false;

    const returnResultTmp = returnResult || {};
    returnResultTmp[item.envId] = returnResult[item.envId] || {};
    returnResultTmp[item.envId].envId = item.envId
    returnResultTmp[item.envId].envName = item.envName
    returnResultTmp[item.envId].result = returnResult[item.envId]?.result || [];
    //先剔除最后的在新增防止重复新增
    returnResultTmp[item.envId].result.pop()
    returnResultTmp[item.envId].result.push(res);
    //结果存储
    setReturnResult(returnResultTmp);
    if (res.code === 0) {
      item.step = ++item.step;
      //等待
      if (item.step > (item.script.length - 1) && item.executeNumber > 1) {
        item.step = 0;
        //分钟转换成毫秒数
        if (setting.interval > 0) {
          item.interval = setting.interval * 1000;
          item.status = RpaItemStatus.WAITING;
          // item.tipText = "等待中...";
          //这里做等待的倒计时
          stepTime(item.interval, (time: number) => {
            item.interval = time;
            data[item.index] = item;
            setData([...data]);
          }, () => {
            if (item.status === RpaItemStatus.FAIL) return;
            item.executeNumber--;
            item.alreadyExecuteNumber++;
            data[item.index] = item;
            setData([...data]);
            _executeScript(item);
          });
          return;
        } else {
          item.executeNumber--;
          item.alreadyExecuteNumber++;
          data[item.index] = item;
          setData([...data]);
          _executeScript(item);
          return;
        }
      }
      //成功的通知
      item.status = RpaItemStatus.SUCCESS;
      item.tipText = "";
      data[item.index] = item;
      setData([...data]);
      //下一个脚本运行
      _executeScript(item);
    } else {
      item.status = RpaItemStatus.FAIL;
      item.tipText = res.message || "执行失败";
    }
    //每条记录加载完就重新渲染
    data[item.index] = item;
    setData([...data]);
  }

  const closeSetModal = () => {
    setShowSetModal(false)
    // config.update?.({ visible: true })
  }
  const openSetModal = () => {
    setShowSetModal(true)
    // config.update?.({ visible: false })
  }
  const closeLogModal = () => {
    setShowLogModal(false);
    // config.update?.({ visible: true })
  }
  const showLogModal = (e: any, index: number) => {
    e.stopPropagation();
    setLogIndex(index);
    setShowLogModal(true);
    // config.update?.({ visible: false })
  }

  const RpaItem = (item: IRpaItemX, index: number) => {
    return (
      <div>
        <div className={`rpa-table-item ${process !== RPAProcess.CHECKING ? 'showCheck' : ''}`}
          onClick={() => onCheckChange(index)}>
          <div className="check">
            <Checkbox
              disabled={process !== RPAProcess.CHECK_DONE || item.status !== RpaItemStatus.SUCCESS} className="checkbox" checked={item.checked} />
          </div>
          <div className={`script ${setting.executeNumber > 1 ? "min" : ""}`} title={item.scriptName}>
            {item.scriptName}
          </div>
          <div className={`name ${setting.executeNumber > 1 ? "min" : ""}`} title={item.envName}>
            {item.envName}
          </div>
          <div className={`account ${setting.executeNumber > 1 ? "min" : ""}`} title={item.accountName ? `${item.accountName}` : ""}>
            {item.accountName ? `${item.accountName}` : "--"}
          </div>
          {setting.executeNumber > 1 &&
            <div className="sctiptNumber">
              {fmtTimeInterval(item)}
            </div>
          }

          <div className={["log",
            (setting.executeNumber > 1 ? "min" : ""), "nomal",
            LogItemStatusMap[item.status]].join(" ")} title={item.tipText}>
            <span className="logBtn" onClick={(e) => showLogModal(e, index)}>log</span>
            {item.tipText}
          </div>

          <div className="opts">
            {/* 操作栏-检测阶段 */}
            {process === RPAProcess.CHECKING &&
              <>
                <span className={RpaItemStatusMap[item.status]}>{OptsTipMap[process + item.status]}</span>
                {(item.status === RpaItemStatus.LOADING || item.status === RpaItemStatus.RECOVER) && <span className="loading"></span>}

                {item.status === RpaItemStatus.SUCCESS &&
                  <CheckCircleFilled className="success"></CheckCircleFilled>
                }
              </>
            }
            {/* 操作栏-检测完成 */}
            {process === RPAProcess.CHECK_DONE &&
              <>
                <span className={RpaItemStatusMap[item.status]}>{OptsTipMap[process + item.status]}</span>
                {item.status === RpaItemStatus.SUCCESS &&
                  <CheckCircleFilled className="success"></CheckCircleFilled>
                }

              </>
            }
            {/* 操作栏-运行阶段 */}
            {process === RPAProcess.RUNING &&
              <>
                {item.checked ?
                  <>
                    <span className={RpaItemStatusMap[item.status]}>{OptsTipMap[process + item.status]}</span>
                    {(item.status === RpaItemStatus.LOADING || item.status === RpaItemStatus.RECOVER) && <span className="loading"></span>}
                    {item.status === RpaItemStatus.WAITING &&
                      <HistoryOutlined className="nomal"></HistoryOutlined>
                    }
                  </>
                  : RpaItemStatus.FAIL === item.status ? <span className="error">未处理</span>
                    : <span className="nomal">未选中</span>}

              </>
            }
            {/* 操作栏-运行结束 */}
            {process === RPAProcess.END &&
              <>
                {item.checked ?
                  <>
                    <span className={RpaItemStatusMap[item.status]}>{OptsTipMap[process + item.status]}</span>
                    {item.status === RpaItemStatus.SUCCESS &&
                      <CheckCircleFilled className="success"></CheckCircleFilled>
                    }
                  </> : RpaItemStatus.FAIL === item.status ? <span className="error">未处理</span>
                    : <span className="nomal">未选中</span>
                }
              </>
            }

            {/* 打开做登录 */}
            {([RPAProcess.CHECKING, RPAProcess.CHECK_DONE].includes(process)) &&
              item.status === RpaItemStatus.FAIL && (!config.simple) &&
              <Button
                onClick={() => { goOnLogin(item) }}
                loading={item.btnLoading} >
                打开</Button>
            }
            {/* 简单模式直接报错 */}
            {([RPAProcess.CHECKING, RPAProcess.CHECK_DONE].includes(process)) &&
              item.status === RpaItemStatus.FAIL && (config.simple) &&
              <span className="error">
                检测失败 <ExclamationCircleFilled ></ExclamationCircleFilled>
              </span>
            }
            {/* 打开做继续执行 */}
            {([RPAProcess.RUNING, RPAProcess.END].includes(process)) &&
              item.status === RpaItemStatus.FAIL &&
              item.checked === true &&
              <Button
                onClick={() => { goOnExecute(item) }}
                loading={item.btnLoading} >
                打开</Button>
            }



          </div>
        </div >
      </div >
    );
  }
  const updateSetting = (settingTemp: Tsetting) => {
    setSetting(settingTemp);
    if (groupUid in groupMap) {
      if (groupMap[groupUid] !== settingTemp.limit) {
        eventBus.emit(`updateLimit-${groupUid}`, groupUid, settingTemp.limit, config);
      }
    }
  }
  const Title = <div className="title">
    <span>{modalTitle}</span>
    <div className="opts">
      <div className="opt mini" onClick={() => config?.minimize?.()}></div>
      <div className="opt close" onClick={() => closeHandle()} ></div>
    </div>
  </div >
  const setTipText = useCallback((envId: string, text: string, data: any) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.envId === envId) {
        item.tipText = text;
      }
    }
    setData([...data]);
  }, [data]);
  return <>
    <LogModal
      key={reSetLog}
      visible={showLog}
      index={logIndex}
      data={data}
      process={process}
      setTipText={setTipText}
      onClose={() => closeLogModal()} />

    <SetModal visible={showSetModal} setting={setting} onSave={updateSetting} onClose={() => closeSetModal()}></SetModal>

    {/* @ts-ignore */}
    <Modal
      wrapClassName="rpa-auth-modal2"
      title={Title}
      mask={false}
      maskClosable={false}
      destroyOnClose={true}
      closable={false}
      visible={config.visible}
      footer={null}
      width={1000}
      style={{ top: 200, minWidth: 1000 }}
    >
      {process === RPAProcess.CHECK_DONE && showNotice && <Alert message="检查到部分环境/账号不可使用，建议优化后再执行" type="warning" showIcon />}
      <div className="rpa-table">
        <div className={`rpa-table-item header ${process !== RPAProcess.CHECKING ? 'showCheck' : ''}`}>
          <div className="check">
            <Checkbox
              disabled={process !== RPAProcess.CHECK_DONE || data.every(v => v.status === RpaItemStatus.FAIL)}
              className="checkbox" checked={isAllCheck}
              onChange={(e) => onClickAllCheck(e.target.checked)}
            />
          </div>
          <div className={`script ${setting.executeNumber > 1 ? "min" : ""}`}>任务名称</div>
          <div className={`name ${setting.executeNumber > 1 ? "min" : ""}`}>执行环境</div>
          <div className={`account ${setting.executeNumber > 1 ? "min" : ""}`}>执行账号</div>
          {setting.executeNumber > 1 &&
            <div className="sctiptNumber">
              执行次数
            </div>
          }
          <div className={`log ${setting.executeNumber > 1 ? "min" : ""}`}>log状态</div>
          <div className={`opts ${setting.executeNumber > 1 ? "min" : ""}`}>操作</div>
        </div>
        {data?.length ? <List
          className="rpa-table-content"
          height={60 * (data?.length >= 6 ? 6 : data?.length)}
          itemHeight={60}
          data={data}
          itemKey={(v) => v.envId}
          children={RpaItem}
        /> :
          <div style={{ textAlign: "center", color: "#ccc" }}>暂无数据~</div>
        }
      </div>
      <div className="rpa-footer">
        <div className="notice">
          {`执行次数：${setting.executeNumber === Infinity ? "无限次" : setting.executeNumber}｜执行间隔：${setting.interval}秒｜最大实例数：${setting.limit}｜开发者模式：${setting.isDev ? "启用" : "停用"}`}
        </div>
        <div className="btn-bar">
          <Button style={{ marginRight: 16 }} className={process !== RPAProcess.CHECK_DONE ? "hide" : ""}
            onClick={() => openSetModal()} >
            执行设置
          </Button>
          <ConfigProvider autoInsertSpaceInButton={false}>
            {process < RPAProcess.RUNING &&
              <Button type="primary" onClick={() => onRunRpa()} disabled={runBtnDisabled} >执行</Button>
            }
            {process === RPAProcess.RUNING &&
              <Button danger type="primary" onClick={() => onRunRpa()} disabled={runBtnDisabled}>
                终止
              </Button>
            }
            {process === RPAProcess.END &&
              <Button type="primary" onClick={() => onRunRpa()} >
                重新执行
              </Button>}
          </ConfigProvider>
        </div>
      </div>

    </Modal >
  </>
}

export {
  RpaTasksModal
}
