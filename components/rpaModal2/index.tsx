import React, { useState } from "react";
import { createRoot, Root } from 'react-dom/client'
import { RpaTasksModal } from './modal';
import { IRPAConfig } from './constant'
// CHECKING = 1,//检测中
// CHECK_DONE = 10,//检测成功
// RUNNING = 20,//执行中
// END = 30,//执行完
export interface RootX extends Root {
  visible?: boolean,
}

let containerDomMap: { [key: string]: RootX } = {};

function getContainer(id: string) {
  if (!id) {
    return document.createElement('div');
  }
  if (id in containerDomMap) {
    return document.getElementById(id) as HTMLElement;
  } else {
    let dom = document.createElement('div');
    dom.id = id;
    return dom;
  }
}

const openRpaModal = (config: IRPAConfig) => {
  let key = config.key || "defalut";
  const container = getContainer(key);
  key && (container.id = key);

  let containerDom: RootX;

  if (key in containerDomMap) {
    containerDom = containerDomMap[key];
  } else {
    containerDom = createRoot(container);
  }


  const destroy = () => {
    if (key in containerDomMap) {
      delete containerDomMap[key];
    }
    containerDom.unmount();
    document.body.removeChild(container);
  }


  const minimize = () => {
    config?.onMini?.();
    containerDomMap[key].visible = false;
    update({ visible: false });
  }

  function close() {
    config?.onClose?.();
    const modalProps = {
      ...config,
      visible: false
    }
    containerDom.render(<RpaTasksModal {...modalProps} />);
    setTimeout(destroy, 200)
  }
  let commonConfig: any = { close, visible: true, minimize, update, isStop: false };

  function update(newConfig: any) {
    const modalProps = {
      ...commonConfig,
      ...config,
      ...newConfig,
    }
    containerDom.render(<RpaTasksModal {...modalProps} />);
  }



  function render() {
    let modalProps = {
      ...commonConfig,
      ...config
    }
    //最小化恢复
    if (key in containerDomMap) {
      modalProps.visible = !containerDomMap[key].visible;
      containerDomMap[key].render(<RpaTasksModal {...modalProps} />);
      containerDomMap[key].visible = !containerDomMap[key].visible;
      return;
    }
    containerDom.render(<RpaTasksModal {...modalProps} />);
    document.body.appendChild(container);

    if (key) {
      //存储参数引用
      containerDomMap[key] = containerDom;
    }
  }

  const stop = () => {
    update({ isStop: true });
  }

  render();

  return {
    stop
  }
}


export {
  openRpaModal
}


