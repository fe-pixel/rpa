import React from "react";
import { createRoot } from 'react-dom/client'
import { RpaTasksModal } from './modal';
import { IConfig, TReturnResult } from './../../type'


let isOpen = false;
const openRpaModal = (config: IConfig) => {
  if (isOpen) return;
  const container = document.createElement('div');
  if (config.wrapClassName) { container.className = config.wrapClassName; }
  const containerDom = createRoot(container);

  const destroy = () => {
    containerDom.unmount()
    document.body.removeChild(container);
    isOpen = false;
  }

  const onClose = (returnResult: TReturnResult) => {
    config?.onClose?.(returnResult);
    const modalProps = {
      ...config,
      visible: false
    }
    containerDom.render(<RpaTasksModal {...modalProps} />);
    setTimeout(destroy, 1000);
  }

  let commonConfig: any = { onClose, visible: true };

  const render = () => {
    isOpen = true;
    const modalProps = {
      // icon: <i className="icon icon-error"></i>,
      ...commonConfig,
      ...config,
      onClose
    }

    containerDom.render(<RpaTasksModal {...modalProps} />);
    document.body.appendChild(container);
  }

  const update = (newConfig: IConfig) => {
    const modalProps = {
      ...commonConfig,
      ...config,
      ...newConfig,
      onClose
    }
    containerDom.render(<RpaTasksModal {...modalProps} />);
  }

  render();

  return {
    update
  }
}


export {
  openRpaModal
}
