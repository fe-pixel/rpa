import { Modal, ConfigProvider, Button, Divider } from "antd"
import { LeftOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './journalModal.less';
import { IRpaItemX } from "./modal";
import { RPAProcess } from "./constant";
export default (props: {
  visible: boolean,
  item: IRpaItemX,
  onClose: Function,
  setData: Function
  process: RPAProcess
}) => {
  const closeHandle = () => {
    props.onClose();
  }

  useEffect(() => {
    console.log("日志-初始化");
    () => {
      console.log("日志-销毁");
    }
  }, []);




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
      <div className="right-btns">
        <div className="opt close" onClick={() => closeHandle()} ></div>
      </div>
    </div>
  )

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
        <p className="item">
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
        </p>

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