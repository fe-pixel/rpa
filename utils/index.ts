export * from "./storage"
export * from "./common"

//责任链模式的compse
export function compose(middlewares: Function[]) {
  return (...args: any) => {
    return dispatch(0);
    function dispatch(i: number) {
      let fn = middlewares[i];
      if (!fn) return Promise.resolve();
      return Promise.resolve(
        fn(...args, () => dispatch(i + 1))
      )
    }
  }
}

/**
 *秒步骤
 *
 * @param {number} time  总时长
 * @param {Function} secondCb 没秒执行的回调
 * @param {Function} flishCb 完成后的回调
 */
export function stepTime(time: number, secondCb: Function, flishCb: Function) {
  let timefn = () => {
    setTimeout(() => {
      time = time - 1000;
      secondCb(time);
      if (time > 1000) {
        timefn();
      } else {
        setTimeout(() => {
          secondCb(time);
          flishCb();
        }, time)
      }
    }, 1000)
  }
  timefn();
}

export function getUid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}