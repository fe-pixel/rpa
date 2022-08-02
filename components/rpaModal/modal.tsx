import { useCallback, useEffect, useState, MouseEventHandler } from "react";
import { Button, Modal, ConfigProvider, Checkbox, message } from "antd";
import { IRpaTasksModalConfig, rpaScript, rpaTaskData, TReturnResult } from './../../type'
import { RpaStatus, RpaStatusMap, RpaStatusStyleMap } from './constant'
import { init, runScript } from './../../rpa/ui'
import template from "./../../utils/template"
import './style.less'
import List from 'rc-virtual-list';


type TRunResult = {
  envId: string,//环境ID
  envName?: string,//环境名称
  status: number,//脚本状态
  scriptName: string,//脚本名称
  step: number,//进行的步骤
  isRunAble: boolean,//是否能运行
  checked: boolean,//是否选中
}

const defaultOptions = { log: false, headless: true };


const RpaTasksModal = (config: IRpaTasksModalConfig) => {
  const [data, setData] = useState<rpaTaskData[]>(config.data || []);
  const [modalTitle, setModalTitle] = useState(config.title || "RPA任务");
  const [isRpaRunning, setRpaRunning] = useState(false);
  const [runResults, setRunResults] = useState<TRunResult[]>([]);
  const [runBtnText, setRunBtnText] = useState("执行");
  const [runBtnNotice, setRunBtnNotice] = useState("");
  const [runBtnDisabled, setRunBtnDisabled] = useState(true);
  const [loginDone, setloginDone] = useState(false);
  const [returnResult, setReturnResult] = useState<TReturnResult>({});   // 执行RPA返回的结果
  // function resetData() {
  //   setloginDone(false);
  //   setData([]);
  //   setModalTitle("RPA任务");
  //   setRpaRunning(false);
  //   setRunBtnNotice("");
  //   setRunBtnDisabled(true);
  //   setloginDone(false);
  //   setReturnResult({});
  // }
  useEffect(() => {
    initData();
  }, []);
  useEffect(() => {
    if (!config.visible) return;
    let beforeAction = async () => {
      let data = await init(config.data);
      setData(data);
      setloginDone(true);
    }
    beforeAction();
  }, [config.data])

  useEffect(() => {
    if (!loginDone) return;
    initData();
  }, [data])


  function initData() {
    if (!config.visible) return;
    let runResults: TRunResult[] = [];
    let runBtnDisabled = true;
    let tasksCount = 0;

    data?.length && data.map((item: rpaTaskData, i: number) => {
      let isRunAble = true;
      let checked = true;
      if (!item.script || item.script?.length === 0) {
        return;
      }
      item.initStatus = item.initStatus ? item.initStatus : 1;
      if (item.initStatus >= RpaStatus.CHECK_SUCCESS) {
        // 当前任务检测通过，可以执行
        runBtnDisabled = false;
        tasksCount++;
      } else {
        isRunAble = false
        checked = false
      }

      let runResult: TRunResult = {
        envId: item.envId,
        envName: item.envName ?? (`环境${i + 1}`),
        status: item.initStatus,
        scriptName: item.script?.[0]?.scriptName,
        step: 1,
        isRunAble,
        checked
      };
      runResults.push(runResult);
    })

    if (runResults.length === 1) {
      setRunBtnText("执行");
      setRunBtnNotice("");
    } else if (runResults.length > 1) {
      if (tasksCount === runResults.length) {
        setRunBtnText("全部执行");
        setRunBtnNotice("")
      } else {
        setRunBtnText("继续执行");
        setRunBtnNotice(runBtnDisabled || isRpaRunning ? "" : "检查到部分环境不可用，建议优化后再执行")
      }
    }
    setModalTitle(config.title || (runResults.length === 1 ? "RPA任务" : "RPA任务列表"));
    setRunBtnDisabled(runBtnDisabled);
    setRunResults(runResults)
  }

  const _runRpa = async (scripts: rpaScript[], i: number, n: number, envId: string, runResults: TRunResult[]) => {
    let options = Object.assign({}, defaultOptions, scripts[1]?.options ?? {});

    const returnResultTmp = returnResult || {};
    const envName = runResults[i].envName;
    returnResultTmp[envId] = returnResultTmp[envId] || {};
    returnResultTmp[envId].envId = envId;
    returnResultTmp[envId].envName = envName;
    returnResultTmp[envId].result = returnResultTmp[envId].result || [];

    runResults[i].scriptName = scripts[1]?.scriptName;
    runResults[i].status = RpaStatus.RUNNING;
    runResults[i].step = n + 1;
    setRunResults(JSON.parse(JSON.stringify(runResults)));

    let result: any = await runScript({ script: scripts[1]?.runScript || "", args: scripts[1]?.args || {}, envId, options })
    runResults[i].status = result?.code === 0 ? RpaStatus.SUCCESS : RpaStatus.FAIL;
    setRunResults(JSON.parse(JSON.stringify(runResults)));
    returnResultTmp[envId].result[n] = result;
    setReturnResult(returnResultTmp);

    scripts.shift();
    if (scripts.length > 1 && runResults[i].status !== RpaStatus.FAIL) {
      // 运行下一段脚本
      if (!config.visible) return;
      _runRpa(scripts, i, n + 1, envId, runResults)
      return;
    }
    if (![RpaStatus.FAIL].includes(runResults[i].status)) {
      // 最终任务执行状态展示
      runResults[i].status = RpaStatus.SUCCESS;
      setRunResults(JSON.parse(JSON.stringify(runResults)));
    }
  }

  const onRunRpa = useCallback(() => {

    config.onBeforeRuning?.();
    data?.length && data.map((item, i) => {
      if (!runResults[i].isRunAble) {
        // 阻止执行未检查成功的环境
        return;
      }
      if (!runResults[i].checked) {
        // 不执行没打钩的
        return;
      }
      if (!item.script || item.script?.length === 0) { return; }
      if (item.script?.length === 1) {
        message.warning("未检测到有后续脚本")
        return;
      }
      const script = [...item.script];
      setRpaRunning(true);
      setRunBtnNotice("")
      _runRpa(script, i, 1, item.envId, runResults);
    }, [data]);
  }, [data, isRpaRunning, runResults])

  const onOpenEnvLogin = useCallback(async (e: any, item: TRunResult, i: number) => {
    e.stopPropagation();
    let options = Object.assign({}, defaultOptions, data[i]?.script?.[0]?.options ?? {}, { headless: false });

    let result = await runScript({
      script: template.openUrl,
      args: {
        openUrl: data[i]?.script?.[0]?.openUrl
      },
      envId: item.envId,
      options
    });
    if (result.code === 0) {
      runResults[i].status = RpaStatus.USER_MANUAL_LOGIN;
      runResults[i].isRunAble = true;
      runResults[i].checked = true;
      autoRunBtnDisabled();
    } else {
      runResults[i].status = RpaStatus.LOGIN_FAIL;
      runResults[i].isRunAble = false;
    }
    setRunResults(JSON.parse(JSON.stringify(runResults)));
  }, [runResults])


  useEffect(() => {
    // 点击执行之后，监测执行情况
    if (!isRpaRunning) return;
    let isAllRpaFinish = true;
    runResults?.length && runResults.map((item: TRunResult, i: number) => {
      if (item.isRunAble && item.checked && ![RpaStatus.SUCCESS, RpaStatus.FAIL].includes(item.status)) {
        isAllRpaFinish = false
      }
    })
    if (isAllRpaFinish === true) {
      setRpaRunning(false);
      setRunBtnDisabled(true);
      setRunBtnText("执行完成");
      config.onRunComplete?.(returnResult);
      config.onClose?.();
      // message.success("rpa执行成功");
      // setTimeout(() => { config.onClose?.() }, 2000);
    }
  }, [data, runResults, isRpaRunning])
  const onCheckChange = (index: number) => {
    if (isRpaRunning) return;
    if (!runResults[index].isRunAble) return;
    let check = runResults[index].checked;
    runResults[index].checked = !check;
    setRunResults(JSON.parse(JSON.stringify(runResults)));
    autoRunBtnDisabled();
  };

  function autoRunBtnDisabled() {
    if (!runResults.some(v => v.checked)) {
      setRunBtnDisabled(true);
    } else {
      setRunBtnDisabled(false);
    }
  }

  const closeHandle = () => {
    config.onClose?.(returnResult);
  }

  function rowRenderer(item: TRunResult, index: number) {
    let i = index;
    return (
      <div key={i} >
        <div className={`item ${loginDone ? 'showCheck' : ''}`} onClick={() => onCheckChange(i)}>
          <div className="check">
            <Checkbox disabled={!item.isRunAble || isRpaRunning} className="checkbox" checked={item.checked} />
          </div>
          <div className="name">{item.envName}</div>
          {
            item.status === RpaStatus.LOGIN_FAIL && <>
              <div className="desc env-test-fail">
                步骤{item.step}：{item.scriptName}<span> | </span>
                {item.status === RpaStatus.LOGIN_FAIL && <><span className={`RpaStatusStyleMap[item.status] env-test-fail`}>{RpaStatusMap[item.status]}</span></>}
              </div>
              <Button
                className="open-env"
                type="primary"
                ghost={true}
                onClick={(e) => onOpenEnvLogin(e, item, i)}
              >打开环境</Button>
            </>
          }
          {
            [RpaStatus.ENV_BE_OCCUPIED, RpaStatus.ENV_FAIL].includes(item.status) && <>
              <div className="desc env-test-fail">
                步骤{item.step}：{item.scriptName}
              </div>
              <div className={RpaStatusStyleMap[item.status]}>{RpaStatusMap[item.status]}</div>
            </>
          }
          {
            ![RpaStatus.ENV_BE_OCCUPIED, RpaStatus.ENV_FAIL, RpaStatus.LOGIN_FAIL].includes(item.status) && <>
              <div className="desc">
                步骤{item.step}：{item.scriptName}
              </div>
              <div className={RpaStatusStyleMap[item.status]}>{RpaStatusMap[item.status]}</div>
            </>
          }
        </div>
      </div>
    );
  }
  // runResults?.length && runResults.map((item: TRunResult, i: number) => {
  //   return ()
  // })
  // @ts-ignore
  return <Modal
    wrapClassName="rpa-auth-modal"
    title={modalTitle}
    onCancel={() => { closeHandle() }}
    mask={false}
    maskClosable={false}
    destroyOnClose={true}
    visible={config.visible}
    closeIcon={<span className="close"></span>}
    footer={null}
    width={620}
  >
    {runResults?.length && <List
      style={{ position: "relative" }}
      height={68 * (runResults?.length >= 3 ? 3 : runResults?.length)}
      itemHeight={68}
      data={runResults}
      itemKey={(v) => v.envId}
      children={rowRenderer} />}
    <div className="btn-bar">
      <span className="notice">{runBtnNotice}</span>
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Button
          type="primary"
          loading={isRpaRunning}
          onClick={() => onRunRpa()}
          disabled={runBtnDisabled}
        >{runBtnText}</Button>
        <Button
          onClick={() => closeHandle()}
        >关闭</Button>
      </ConfigProvider>
    </div>
  </Modal >
}

export {
  RpaTasksModal
}
