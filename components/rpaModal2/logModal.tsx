import { Modal, ConfigProvider, Button, Divider } from "antd"
import { LeftOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useMemo, useState } from "react";
import './logModal.less';
import { RPAProcess } from "./constant";
import { IRpaItemX } from "./modal";
import eventBus from "../../utils/EventBus";
import { formatDate } from "../../utils";

type logType = {
  [fileName: string]: string,
}
export default (props: {
  visible: boolean,
  index: number,
  data: IRpaItemX[],
  onClose: Function,
  process: RPAProcess
}) => {
  const [logData, setLogData] = useState<logType>({});

  const closeHandle = () => {
    props.onClose();
  }

  useEffect(() => {
    console.log("日志-初始化");
    init();
    return () => {
      console.log("日志-销毁");
    }
  }, []);

  async function init() {
    //     一个环境对应一个日志
    // 文件名:2022-08-03-gid-envId
    // gid-envId
    // 2022-08-03 19:36:44  啊实打实多\r\n
    eventBus.on("message", (log: any, opts: any) => {
      let data = formatDate(new Date(), "yyyy-MM-dd");
      let time = formatDate(new Date(), "yyyy-MM-dd-HH:mm:ss");
      let value = `${time}::::【${log.type}】${log.data}\r\n`
      let fileName = `${data}-${opts.group}-${opts.envId}`;
      let str = logData[fileName] || "";
      logData[fileName] = str + value;
      setLogData({ ...logData });
    })
  }

  let fileName = useMemo(() => {
    if (props.data.length === 0) return "";
    let data = formatDate(new Date(), "yyyy-MM-dd");
    let item = props.data[props.index];
    return `${data}-${item.group}-${item.envId}`;
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
  const ParseStr = () => {
    let res = logData[fileName].split("\r\n");
    return <>
      {res.map((v, i) => {
        let rest = v.split("::::");
        let className = "";
        let lastK = rest[1]?.indexOf("】")
        let value = rest[1]?.slice(lastK + 1);
        let t = rest[1]?.slice(1, lastK);
        if (t !== "log") {
          className = t;
        }
        return <p className="item" key={i}>
          <span className="time">{rest[0]}</span>
          <span className={`content ${className}`}>{value}</span>
        </p>
      }
      )}
    </>
  }
  //@ts-expect-error
  return <Modal
    wrapClassName="journal-modal"
    width={1000}
    title={Title}
    onCancel={() => { closeHandle() }}
    mask={false}
    footer={false}
    maskClosable={false}
    destroyOnClose={true}
    visible={props.visible}
    closeIcon={<span className="close"></span>}
  >

    <div className="journal-content">
      {/* <h6 className="title">XXXXX@gmail.com日志</h6> */}
      <div className="scroll">
        {logData[fileName] ? <ParseStr></ParseStr>
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