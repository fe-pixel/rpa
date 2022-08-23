
// 自定义事件
class EventBus {
  _events: {
    [key: string]: Function[]
  } = {}
  on(event: string, cb: Function) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(cb);
    return this;
  }
  emit(event: string, ...args: any[]) {
    if (!this._events[event]) this._events[event] = []
    let arr = this._events[event];
    if (arr) {
      for (let cb of arr) {
        cb(...args);
      }
    }

    return this;
  }
  off(event: string, cb?: Function) {
    if (!cb) {
      delete this._events[event];
    }
    if (this._events?.[event]) {
      this._events[event] = this._events[event].filter((cbitem) => {
        return cb !== cbitem;
      })
    }
    return this;
  }
  once(event: string, cb: Function) {
    let that = this;
    let fn = function (...args: any[]) {
      cb.apply(that, ...args);
      that.off(event, fn);
    }
    fn = fn.bind(this)
    this.on(event, fn);
    return this;
  }
}
let eventBus = new EventBus();
// //@ts-expect-error
// window.eventBus = eventBus;
export default eventBus; 