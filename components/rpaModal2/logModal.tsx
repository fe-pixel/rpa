import { Modal, ConfigProvider, Button, Divider } from "antd"
import { LeftOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useMemo, useRef, useState } from "react";
import './logModal.less';
import { RPAProcess } from "./constant";
import { IRpaItemX } from "./modal";
import eventBus from "../../utils/EventBus";
import { formatDate } from "../../utils";
type logType = {
  [fileName: string]: {
    time: string,
    value: string,
    type: string,
  }[],
}

export default (props: {
  visible: boolean,
  index: number,
  data: IRpaItemX[],
  onClose: Function,
  process: RPAProcess,
  setTipText: Function,
}) => {
  const [logData, setLogData] = useState<logType>({});
  const logContent = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState<boolean>(true);//控制只监听一次
  // const [toBtoom, setToBtoom] = useState<boolean>(true);//控制只监听一次

  const maxSize = 200;
  const closeHandle = () => {
    props.onClose();
  }

  useEffect(() => {
    // logContent.current?.addEventListener("mouseenter", mouseenter)
    // logContent.current?.addEventListener("mouseleave", mouseleave)
    return () => {
      console.log("日志-销毁");
      eventBus.off("message", logMessage);
    }
  }, []);

  function logMessage(log: any, opts: any) {
    //过滤不是该弹框的message
    if (opts.group !== props.data[0]?.group) return;
    if (log.type != "log") return;
    let value = log?.data?.text;
    let type = log?.data?.level;
    let time = log?.data?.time?.slice(0, log?.data?.time?.lastIndexOf("."));
    time = formatDate(new Date(time), "yyyy-MM-dd HH:mm:ss");
    let data = formatDate(props.data[0]?.startTime, "yyyy-MM-dd HH:mm:ss");
    let fileName = `${data}-${opts.group}-${opts.envId}`;
    logData[fileName] = logData[fileName] || [];
    logData[fileName].push({ time, type, value });
    //最大限制判断
    if (logData[fileName].length > maxSize) {
      logData[fileName].shift();
    }
    if (type === "info") {
      props.setTipText(opts.envId, value, props.data);
    }
    if (type === "error") {
      props.setTipText(props.index, value, props.data);
    }
    setLogData({ ...logData });
  }

  useEffect(() => {
    if (!props.data.length) return;
    if (!run) return;
    setRun(false);
    eventBus.on("message", logMessage)
  }, [props.data]);


  useEffect(() => {
    // if (logContent.current) {
    //   logContent.current.scrollTop = logContent.current?.scrollHeight;
    // }
  }, [logData])

  let fileName = useMemo(() => {
    if (props.data.length === 0) return "";
    if (props.index === -1) return "";
    let time = formatDate(props.data[0]?.startTime, "yyyy-MM-dd HH:mm:ss");
    let item = props.data[props.index];
    return `${time}-${item.group}-${item.envId}`;
  }, [props.index])

  const Title = (
    <div className="modal-title">
      <span style={{
        cursor: "pointer"
      }}
        onClick={() => props.onClose()}
      >
        <LeftOutlined style={{
          color: '#474F5E',
          fontSize: '11px',
          verticalAlign: 'initial',
          lineHeight: "22px"
        }} />
        <span className="back-span">返回</span>
      </span>
      <Divider type="vertical" style={{ margin: '0px 12px', height: '24px' }} />
      {props.data[props.index]?.envName}-执行日志
      <div className="right-btns">
        <div className="opt close" onClick={() => closeHandle()} ></div>
      </div>
    </div>
  )
  // const ParseStr = () => {
  //   let res = logData[fileName].split("\r\n");
  //   return <>
  //     {res.map((v, i) => {
  //       let rest = v.split("::::");
  //       let className = "";
  //       let lastK = rest[1]?.indexOf("】")
  //       let value = rest[1]?.slice(lastK + 1);
  //       let t = rest[1]?.slice(1, lastK);
  //       if (t !== "log") {
  //         className = t;
  //       }
  //       return <p className="item" key={i}>
  //         <span className="time">{rest[0]}</span>
  //         <span className={`content ${className}`}>{value}</span>
  //       </p>
  //     }
  //     )}
  //   </>
  // }
  const Content = () => {
    let res = logData[fileName];
    return <>
      {res.map((v, i) => {
        return <p className="item" key={i}>
          <span className="time">{v.time}</span>
          <span className={`content ${v.type}`}>{v.value}</span>
        </p>
      }
      )}
    </>
  }
  //@ts-expect-error
  return <Modal
    wrapClassName="journal-modal"
    width={1000}
    style={{ top: 200, minWidth: 1000 }}
    title={Title}
    onCancel={() => { closeHandle() }}
    mask={false}
    footer={false}
    maskClosable={false}
    destroyOnClose={true}
    visible={props.visible}
    closeIcon={<span className="close"></span>}
  >

    <div ref={logContent} className="journal-content">
      {/* <h6 className="title">XXXXX@gmail.com日志</h6> */}
      <div className="scroll">
        {(logData[fileName] && logData[fileName]?.length > 0) ? <Content></Content>
          :
          <div style={{ textAlign: "center", color: "#ccc" }}>暂无数据~</div>
        }

        {/* <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功
            234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功234-394-8456 创建广告成功
          </span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content info">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content error">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功</span>
        </p>
        <p className="item">
          <span className="time">2022-07-16 19:12:34</span>
          <span className="content">234-394-8456 创建广告成功</span>
        </p> */}

      </div>
    </div>

    <div className="btn-bar">
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Button
          type="default"
          onClick={() => closeHandle()}
        >
          确定
        </Button>
      </ConfigProvider>
    </div>

  </Modal >
}