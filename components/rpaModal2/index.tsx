import React, { useState } from "react";
import { createRoot, Root } from 'react-dom/client'
import { RpaTasksModal } from './modal';
import { IRPAConfig } from './constant'

export interface RootX extends Root {
  minimize?: boolean,
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
  console.log("containerDomMap", containerDomMap);

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
    if (key) {
      containerDomMap[key].minimize = true;
    }
    config?.onMini?.();
    const modalProps = {
      ...config,
      visible: false
    }
    containerDom.render(<RpaTasksModal {...modalProps} />);
  }
  const close = () => {
    config?.onClose?.();
    const modalProps = {
      ...config,
      visible: false
    }
    containerDom.render(<RpaTasksModal {...modalProps} />);
    setTimeout(destroy, 200);
  }
  const reSet = (newConfig: IRPAConfig) => {
    const modalProps = {
      ...commonConfig,
      ...config,
      ...newConfig,
      visible: true
    }
    containerDom.render(<RpaTasksModal key={Date.now()} {...modalProps} />);
  }
  const update = (newConfig: any) => {
    console.log("执行");
    const modalProps = {
      ...commonConfig,
      ...config,
      ...newConfig,
    }
    containerDom.render(<RpaTasksModal {...modalProps} />);
  }
  let commonConfig: any = { close, visible: true, minimize, reSet, update };

  const render = () => {
    let modalProps = {
      ...commonConfig,
      ...config
    }
    //最小化回复
    if (key in containerDomMap && containerDomMap[key].minimize) {
      containerDomMap[key].render(<RpaTasksModal {...modalProps} />);
      containerDomMap[key].minimize = false;
      return;
    }

    containerDom.render(<RpaTasksModal {...modalProps} />);
    document.body.appendChild(container);

    if (key) {
      //存储参数引用
      containerDomMap[key] = containerDom;
    }
  }



  render();

  return {
    update
  }
}


export {
  openRpaModal
}


