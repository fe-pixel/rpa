import { Input, Modal, Form, Select, InputNumber, ConfigProvider, Button, Divider, Radio } from "antd"
import { LeftOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Tsetting } from "./modal";
import './setModal.less';
export default (props: { visible: boolean, setting: Tsetting, onSave: Function, onClose: Function }) => {
  const [setting, setSetting] = useState<Tsetting>();
  const [form] = Form.useForm();
  const executeNumberSelect = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "30", value: 30 },
    // { label: "无限", value: -1 },
  ]
  useEffect(() => {
    console.log("初始化-seting");
    setSetting({ ...props.setting });
    form.setFieldsValue({ ...props.setting });
    return () => {
      console.log("销毁-setting");
    }
  }, []);
  useEffect(() => {
    setSetting({ ...props.setting });
    form.setFieldsValue({ ...props.setting });
  }, [props.setting]);
  const closeHandle = () => {
    props.onClose();
  }
  const onSave = () => {
    props.onSave({ ...setting })
    closeHandle();
  }

  const onChangeExecuteNumber = (v: number) => {
    if (v === 1) {
      // setSetting({ ...setting, executeNumber: v, interval: 0 } as Tsetting);
      setSetting({ ...setting, executeNumber: 1, interval: 0 } as Tsetting)
    } else {
      setSetting({ ...setting, executeNumber: v } as Tsetting);
    }
  }
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
      <span className="title-span">执行设置</span>

      <div className="right-btns">
        <div className="opt close" onClick={() => closeHandle()} ></div>
      </div>
    </div>
  )
  //@ts-expect-error
  return <Modal
    wrapClassName="set-modal"
    style={{ top: 200, minWidth: 1000 }}
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
    <Form
      autoComplete="off"
      form={form}
      layout="vertical"
      colon={false}
    >
      <Form.Item name="executeNumber" label="执行次数">
        <Select
          placeholder="请输入执行次数"
          options={executeNumberSelect}
          value={setting?.executeNumber}
          onChange={onChangeExecuteNumber}
        />
      </Form.Item>

      <Form.Item name="interval" label="执行间隔(单位为秒)">
        {/* 去掉InputNumber-interval不显示很奇怪 */}
        <div style={{ display: "none" }}>{setting?.interval}</div>
        <InputNumber
          disabled={setting?.executeNumber as number === 1}
          min={0}
          value={setting?.interval || 0}
          style={{ width: '100%' }}
          onChange={(v) => { setSetting({ ...setting, interval: v } as Tsetting) }}
        />
      </Form.Item>
      <Form.Item name="limit" label="执行并发">
        <InputNumber
          min={1}
          max={10}
          value={setting?.limit || 1}
          style={{ width: '100%' }}
          onChange={(v) => { setSetting({ ...setting, limit: v } as Tsetting) }}
        />
      </Form.Item>
      <Form.Item name="isDev" label="开发者模式">
        <Radio.Group
          name="radiogroup"
          onChange={e => setSetting({ ...setting, isDev: e.target.value } as Tsetting)}
          defaultValue={setting?.isDev}
        >
          <Radio checked={setting?.isDev} value={true}>启用</Radio>
          <Radio checked={setting?.isDev} value={false}>停用</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
    <div className="btn-bar">
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Button
          type="primary"
          onClick={() => onSave()}
        >
          确定
        </Button>
        {/* <Button
          onClick={() => closeHandle()}
        >关闭</Button> */}
      </ConfigProvider>
    </div>
  </Modal >
}