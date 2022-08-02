import { Modal, ConfigProvider, Button, Divider } from "antd"
import { LeftOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import './journalModal.less';
export default () => {
  const [visible, setVisible] = useState<boolean>(true);

  const closeHandle = () => {
    setVisible(false)
  }

  const onSave = () => {
    setVisible(false)
  }

  const Title = (
    <div className="modal-title">
      <LeftOutlined style={{ color: '#474F5E', fontSize: '10px', verticalAlign: 'initial' }} />
      <span className="back-span">返回</span>
      <Divider type="vertical" style={{ margin: '0px 12px', height: '24px' }} />
      <span className="title-span">XXXXX@gmail.com日志</span>

      <div className="right-btns">
        <CloseOutlined onClick={closeHandle} />
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
    visible={visible}
    closeIcon={<span className="close"></span>}
  >

    <div className="journal-content">
      {/* <h6 className="title">XXXXX@gmail.com日志</h6> */}
      <div className="scroll">

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
          onClick={() => onSave()}
        >
          确定
        </Button>
      </ConfigProvider>
    </div>

  </Modal >
}