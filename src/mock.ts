import axios from "axios";
import { getAPIPort } from "../rpa/common";
import template from "./../utils/template";
export let demoFn = async ({ args }) => {
  await new Promise(res => setTimeout(res, 2000));
  return args
}
export let demoFn2 = async ({ args }) => {
  await new Promise(res => setTimeout(res, 5000));
  return args
}
export let demoFn3 = async ({ args }) => {
  await new Promise(res => setTimeout(res, 1000000));
  return args
}


export let logDemo = async (context) => {
  let { args, driver } = context;
  const { log, logInfo, logError } = require('@fe-pixel/rpa-node');
  const { Builder, By, until } = require('selenium-webdriver');
  log(Math.random());
  await driver.sleep(1000);
  log("我是一个比较长的日志文本我是一个比较长的日志文本我是一个比较长的日志文本我是一个比较长的日志文本我是一个比较长的日志文本我是一个比较长的日志文本我是一个比较长的日志文本我是一个比较长的日志文本我是一个比较长的日志文本");
  await driver.sleep(1000);
  logInfo(args.log);
  await driver.sleep(1000);
  log(args.log);
  await driver.sleep(1000);
  logInfo(args.log);
  // logError("执行失败");
  let arr = new Array(10).fill("");
  for (let i = 0; i < arr.length; i++) {
    await driver.sleep(500);
    log(Math.random());
  }
  await driver.sleep(1000);
  logInfo(Math.random());
  return {
    code: 0,
    data: args.log,
    message: "ok"
  };
}
export const executeFailFN = `module.exports = async (context) => {
  const { Builder, By, until } = require("selenium-webdriver");
  let { 
    driver,
    args,
    options
  } = context;
  await driver.get("https://www.baidu.com/");
  let searchText = args.keyword;
  let searchEdit = driver.findElement(By.id("kw"));

  await new Promise((res) => setTimeout(res, 5000));
  let res = await driver.executeScript("return arguments[0].value;", searchEdit, searchText);
  if (res === "true") { 
    return {
      code: 0,
      data: "脚本2,命中正确值",
      message: "ok"
    };
  }
  return {
    code: -1,
    data: "脚本2",
    message: "ok"
  };
} ;`


let envArr = [
  "9198059408263926703",
  "9151932498655370565",
  "9209955923324946514",
  "9193017789882505763",
  "9183805073595268917",
  "9161300723794233646"
];
let envIds2000 = [];
; (async () => {
  envIds2000 = await getEnvIds(300);
})()
  ; (async () => {
    envArr = await getEnvIds(100);
  })()

export let envError = () => ({
  key: "A",
  title: "我的测试title",
  data: [
    {
      "envId": envArr[0],
      "autoLoginScript": {
        "scriptName": "自动登录",
        "runScript": logDemo,
        "args": {
          log: "autoLoginScript-log-2"
        }
      },
      "manualLoginScript": {
        "runScript": executeFailFN,
        "args": {
          log: "manualLoginScript-log"
        }
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": logDemo,
          "args": {
            log: "script-log-1-1"
          }
        },
        {
          "scriptName": "脚本2",
          "runScript": logDemo,
          "args": {
            log: "script-log-2-1"
          }
        }
      ]
    }
  ],
  // onClose?: Function;//关闭回调
  // onChecking?: Function;//检测中
  // onCheckDone?: Function;//检测完成
  // onRuning?: Function;//运行中
  // onRunComplete?: Function;//全部完成后触发回调
  onBeforeRuning: () => {
    console.log("onBeforeRuning");
  },
  onChecking: () => {
    console.log("onChecking");
  },
  onCheckDone: () => {
    console.log("onCheckDone");
  },
  onRuning: () => {
    console.log("onRuning");
  },
  onRunComplete: (result) => {
    console.log("onRunComplete")
    console.log("RPA任务执行结果", result)
  },
  onClose: () => {
    console.log("onClose");
  },
})
export let pressureTest = () => {
  return {
    key: "A",
    title: "我的测试title",
    data: envIds2000.map(v => ({
      "envId": v,
      "autoLoginScript": {
        "scriptName": "自动登录脚本",
        "runScript": logDemo,
        "args": {
          log: "autoLoginScript-log-2"
        }
      },
      "manualLoginScript": {
        "runScript": executeFailFN,
        "args": {
          log: "manualLoginScript-log"
        }
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": logDemo,
          "args": {
            log: "script-log-1-1"
          }
        },
        {
          "scriptName": "脚本2",
          "runScript": logDemo,
          "args": {
            log: "script-log-2-1"
          }
        }
      ]
    }))
    ,
    onBeforeRuning: () => {
      console.log("onBeforeRuning");
    },
    onChecking: () => {
      console.log("onChecking");
    },
    onCheckDone: () => {
      console.log("onCheckDone");
    },
    onRuning: () => {
      console.log("onRuning");
    },
    onRunComplete: (result) => {
      console.log("onRunComplete")
      console.log("RPA任务执行结果", result)
    },
    onClose: () => {
      console.log("onClose");
    },
  }
}


export let logMork2 = () => ({
  key: "A",
  title: "我的测试title",
  data: [
    {
      "envId": envArr[0],
      "autoLoginScript": {
        "scriptName": "登录失败",
        "runScript": logDemo,
        "args": {
          log: "autoLoginScript-log-2"
        }
      },
      "manualLoginScript": {
        "runScript": executeFailFN,
        "args": {
          log: "manualLoginScript-log"
        }
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": logDemo,
          "args": {
            log: "script-log-1-1"
          }
        },
        {
          "scriptName": "输入true脚本才能执行正常",
          "runScript": logDemo,
          "args": {
            log: "script-log-2-1"
          }
        }
      ]
    },
    {
      "envId": envArr[1],
      "autoLoginScript": {
        "scriptName": "自动登录",
        "runScript": logDemo,
        "args": {
          log: "autoLoginScript-log-2"
        }
      },
      "manualLoginScript": {
        "runScript": executeFailFN,
        "args": {
          log: "manualLoginScript-log"
        }
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": logDemo,
          "args": {
            log: "script-log-1-1"
          }
        },
        {
          "scriptName": "输入true脚本才能执行正常",
          "runScript": logDemo,
          "args": {
            log: "script-log-2-2"
          }
        }
      ]
    }
  ],
  // onClose?: Function;//关闭回调
  // onChecking?: Function;//检测中
  // onCheckDone?: Function;//检测完成
  // onRuning?: Function;//运行中
  // onRunComplete?: Function;//全部完成后触发回调
  onBeforeRuning: () => {
    console.log("onBeforeRuning");
  },
  onChecking: () => {
    console.log("onChecking");
  },
  onCheckDone: () => {
    console.log("onCheckDone");
  },
  onRuning: () => {
    console.log("onRuning");
  },
  onRunComplete: (result) => {
    console.log("onRunComplete")
    console.log("RPA任务执行结果", result)
  },
  onClose: () => {
    console.log("onClose");
  },
})
export let logMork = () => ({
  key: "B",
  title: "我的测试title",
  data: [
    {
      "envId": envArr[4],
      "autoLoginScript": {
        "scriptName": "登录失败",
        "runScript": logDemo,
        "args": {
          log: "autoLoginScript-log"
        }
      },
      "manualLoginScript": {
        "runScript": executeFailFN,
        "args": {
          log: "manualLoginScript-log"
        }
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": logDemo,
          "args": {
            log: "script-log-1"
          }
        },
        {
          "scriptName": "输入true脚本才能执行正常",
          "runScript": logDemo,
          "args": {
            log: "script-log-2"
          }
        }
      ]
    },
    {
      "envId": envArr[3],
      "autoLoginScript": {
        "scriptName": "自动登录",
        "runScript": logDemo,
        "args": {
          log: "autoLoginScript-log"
        }
      },
      "manualLoginScript": {
        "runScript": executeFailFN,
        "args": {
          log: "manualLoginScript-log"
        }
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": logDemo,
          "args": {
            log: "script-log-1"
          }
        },
        {
          "scriptName": "输入true脚本才能执行正常",
          "runScript": logDemo,
          "args": {
            log: "script-log-2"
          }
        }
      ]
    }
  ],
  // onClose?: Function;//关闭回调
  // onChecking?: Function;//检测中
  // onCheckDone?: Function;//检测完成
  // onRuning?: Function;//运行中
  // onRunComplete?: Function;//全部完成后触发回调
  onBeforeRuning: () => {
    console.log("onBeforeRuning");
  },
  onChecking: () => {
    console.log("onChecking");
  },
  onCheckDone: () => {
    console.log("onCheckDone");
  },
  onRuning: () => {
    console.log("onRuning");
  },
  onRunComplete: (result) => {
    console.log("onRunComplete")
    console.log("RPA任务执行结果", result)
  },
  onClose: () => {
    console.log("onClose");
  },
})
export let lifeCallBack = () => ({
  title: "我的测试title",
  data: [
    {
      "envId": envArr[4],
      "autoLoginScript": {
        "scriptName": "登录失败",
        "runScript": demoFn
      },
      "manualLoginScript": {
        "runScript": demoFn3,
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "输入true脚本才能执行正常",
          "runScript": executeFailFN,
        }
      ]
    }
  ],
  // onClose?: Function;//关闭回调
  // onChecking?: Function;//检测中
  // onCheckDone?: Function;//检测完成
  // onRuning?: Function;//运行中
  // onRunComplete?: Function;//全部完成后触发回调
  onBeforeRuning: () => {
    console.log("onBeforeRuning");
  },
  onChecking: () => {
    console.log("onChecking");
  },
  onCheckDone: () => {
    console.log("onCheckDone");
  },
  onRuning: () => {
    console.log("onRuning");
  },
  onRunComplete: (result) => {
    console.log("onRunComplete")
    console.log("RPA任务执行结果", result)
  },
  onClose: () => {
    console.log("onClose");
  },
})

export let accountName = () => ({
  title: "我的测试title",
  data: [
    {
      "envId": envArr[4],
      "accountId": "9151513392188329312",
      // "accountId": "9195958090582956308",
      "autoLoginScript": {
        "scriptName": "登录失败",
        "runScript": demoFn,
        "args": {
          code: -1,
          data: "null",
          message: "666",
        }
      },
      "manualLoginScript": {
        "runScript": demoFn3,
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "输入true脚本才能执行正常",
          "runScript": executeFailFN,
        }
      ]
    }
  ],
  onBeforeRuning: () => {
  },
  onClose: (res) => {
    console.log(res);
  },
  onRunComplete: (result) => {
    console.log("RPA任务执行结果", result)
  }
})

export let executeFail = () => ({
  title: "我的测试title",
  data: [
    {
      "envId": envArr[2],
      "autoLoginScript": {
        "scriptName": "登录失败",
        "runScript": demoFn,
      },
      "manualLoginScript": {
        "runScript": demoFn,
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "输入true脚本才能执行正常",
          "runScript": executeFailFN,
        }
      ]
    },
    {
      "envId": envArr[3],
      "autoLoginScript": {
        "scriptName": "登录失败",
        "runScript": demoFn,
      },
      "manualLoginScript": {
        "runScript": demoFn,
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn3,
        }
      ]
    }
  ],
  onBeforeRuning: () => {
  },
  onClose: (res) => {
    console.log(res);
  },
  onRunComplete: (result) => {
    console.log("RPA任务执行结果", result)
  }
})
export let loginFail = () => ({
  title: "我的测试title",
  data: [
    {
      "envId": envArr[2],
      "autoLoginScript": {
        "scriptName": "登录失败",
        "runScript": demoFn,
        "args": {
          code: -1,
          data: null,
          message: "登录失败"
        }
      },
      "manualLoginScript": {
        "runScript": demoFn,
        "args": {
          code: 0,
          data: null,
          message: "登录成功"
        }
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "脚本2",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本2",
            message: "666",
          }
        }
      ]
    },
    {
      "envId": envArr[1],
      "autoLoginScript": {
        "scriptName": "登录失败",
        "runScript": demoFn2,
        "args": {
          code: -1,
          data: null,
          message: "登录失败"
        }
      },
      "manualLoginScript": {
        "runScript": demoFn,
        "args": {
          code: 0,
          data: null,
          message: "登录成功"
        }
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "脚本2",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本2",
            message: "666",
          }
        }
      ]
    }
  ],
  onBeforeRuning: () => {
  },
  onClose: (res) => {
    console.log(res);
  },
  onRunComplete: (result) => {
    console.log("RPA任务执行结果", result)
  }
})
export let interval = () => ({
  title: "我的测试title",
  interval: 20,
  executeNumber: 3,
  data: [
    {
      "envId": envArr[4],
      "autoLoginScript": {
        "scriptName": "我是很长的脚本名称我是很长的脚本名称我是很长的脚本名称",
        "runScript": demoFn,
      },
      "manualLoginScript": {
        "runScript": demoFn,
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "脚本2",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本2",
            message: "666",
          }
        }
      ]
    }
  ],
  onBeforeRuning: () => {
  },
  onClose: (res) => {
    console.log(res);
  },
  onRunComplete: (result) => {
    console.log("RPA任务执行结果", result)
  }
})

export let time = () => ({
  title: "我的测试title",
  executeNumber: 2,
  data: [
    {
      "envId": envArr[5],
      "autoLoginScript": {
        "scriptName": "我是很长的脚本名称我是很长的脚本名称我是很长的脚本名称",
        "runScript": demoFn,
      },
      "manualLoginScript": {
        "runScript": demoFn,
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "脚本2",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本2",
            message: "666",
          }
        },
        {
          "scriptName": "脚本3",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本3",
            message: "666",
          }
        }
      ]
    }
  ],
  onBeforeRuning: () => {
  },
  onClose: (res) => {
    console.log(res);
  },
  onRunComplete: (result) => {
    console.log("RPA任务执行结果", result)
  }
})

export let newModal = () => ({
  onBeforeRuning: () => {
  },
  onClose: (res) => {
    console.log(res);
  },
  onRunComplete: (result) => {
    console.log("RPA任务执行结果", result)
  },
  key: "A",
  data: [
    {
      "envId": envArr[1],
      "autoLoginScript": {
        "scriptName": "我是很长的脚本名称我是很长的脚本名称我是很长的脚本名称",
        "runScript": demoFn,
      },
      "manualLoginScript": {
        "runScript": demoFn,
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "脚本2",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本2",
            message: "666",
          }
        },
        {
          "scriptName": "脚本3",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本3",
            message: "666",
          }
        }
      ]
    }
  ]
})
export let newModal2 = () => ({
  key: "B",
  onBeforeRuning: () => {
  },
  onClose: (res) => {
    console.log(res);
  },
  onRunComplete: (result) => {
    console.log("RPA任务执行结果", result)
  },
  title: "我是实例2",
  data: [
    {
      "envId": envArr[2],
      "autoLoginScript": {
        "scriptName": "脚本1",
        "runScript": demoFn,
      },
      "manualLoginScript": {
        "runScript": demoFn,
      },
      "script": [
        {
          "scriptName": "脚本1",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本1",
            message: "666",
          }
        },
        {
          "scriptName": "脚本2",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本2",
            message: "666",
          }
        },
        {
          "scriptName": "脚本3",
          "runScript": demoFn,
          "args": {
            code: 0,
            data: "脚本3",
            message: "666",
          }
        }
      ]
    }
  ]
})

export let testAccount = () => ([
  {
    "envId": "9186931228077920908",
    "accountId": "9206388638173007298",
    "autoLoginScript": {
      "scriptName": "我是很长的脚本名称我是很长的脚本名称我是很长的脚本名称",
      "runScript": demoFn,
    },
    "manualLoginScript": {
      "runScript": demoFn,
    },
    "script": [
      {
        "scriptName": "脚本1",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本3",
        "runScript": demoFn,
        "args": {
          code: -1,
          data: null,
          message: "失败啦"
        }
      },
      {
        "scriptName": "脚本4",
        "runScript": demoFn,
      }
    ]
  }
])

export let noCallBack = () => ([
  {
    "envId": envArr[0],
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": template.shopline_simple_login,
        args: {
          account: "zz2022shopline@163.com",
        },
        "options": { headless: true },
        "openUrl": "https://www.baidu.com/",
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
      }
    ]
  }
])

export let virtual = new Array(5000).fill('').map((v, i) => ({
  // "envId": envArr[i % envArr.length],
  "envId": i + 1 + "",
  "script": [
    {
      "scriptName": "检查 网站 登录",
      "runScript": demoFn,
      "openUrl": "https://www.baidu.com/",
    },
    {
      "scriptName": "脚本2",
      "runScript": demoFn,
    }
  ]
}))


export const auth_shopView = () => ([
  {
    "envId": envArr[1],
    "script": [
      {
        "runScript": template.shopline_simple_login,
        "options": { headless: false },
      },
      {
        "scriptName": "脚本2",
        "runScript": template.shopline_auth_other,
        "options": { headless: false },
        "args": {
          admin_url: "https://qwertyuil.myshopline.com/admin/",
          appKey: "",
          secret: "",
          redirectUri: "",
        }
      }
    ]
  }
])

//简单使用
export const simple = () => ([
  {
    "envId": envArr[0],
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": demoFn,
        "args": {
          "account": ""
        },
        "openUrl": "https://www.baidu.com/",
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
      }
    ]
  }
])
//多脚本
export const moreScript = () => ([
  {
    "envId": envArr[1],
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本3",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本4",
        "runScript": demoFn,
      }
    ]
  }
])
//手动登录
export const manualLogin = () => ([
  {
    "envId": envArr[2],
    "script": [
      {
        "scriptName": "手动登录网站",
        "runScript": demoFn,
        "args": {
          code: -1,
          data: null,
          message: "登录失败"
        },
        "openUrl": "https://www.baidu.com/",
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
      }
    ]
  }
])
//开启非无头模式
export const headless = () => ([
  {
    "envId": envArr[3],
    "script": [
      {
        "scriptName": "手动登录网站",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本1",
        "runScript": demoFn,
        "options": { headless: false }
      }
    ]
  }
])
//仅仅只传一个脚本
export const onlyOne = () => ([
  {
    "envId": envArr[0],
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": demoFn,
      }
    ]
  }
])

//关闭正在执行脚本的窗口
export const closeWin = () => ([
  {
    "envId": envArr[4],
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本1",
        "runScript": demoFn,
        "options": { headless: false }
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
        "options": { headless: false }
      }
    ]
  }
])
//环境占用
export const errorEnv = () => ([
  {
    "envId": "7655",
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本1",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
      }
    ]
  }
])
//登录失败
export const errorLogin = () => ([
  {
    "envId": envArr[5],
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": demoFn,
        "args": {
          code: -1,
          data: null,
          message: "登录失败"
        },
        "openUrl": "https://www.baidu.com/"
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
      }
    ]
  }
])
//3个脚本执行，第二个脚本执行失败
export const errorMiddle = () => ([
  {
    "envId": envArr[3],
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本1",
        "runScript": demoFn,
      },
      {
        "scriptName": "脚本2",
        "runScript": demoFn,
        "args": {
          code: -1,
          data: null,
          message: "执行失败"
        }
      },
      {
        "scriptName": "脚本3",
        "runScript": demoFn,
      }
    ]
  }
])
//全部配置
export const allData = () => ([
  ...simple(),
  ...moreScript(),
  ...manualLogin(),
  ...headless(),
  ...onlyOne(),
  ...closeWin(),
  ...errorEnv(),
  ...errorLogin(),
  ...errorMiddle(),
])


export let mockData = () => ([
  {
    "envId": envArr[0],
    "envName": "环境1",
    "initStatus": 1,
    "script": [
      {
        "scriptName": "检查 Shopline 登录",
        "runScript": template,
        "args": {},
        "options": { log: false, headless: true },
        "status": 1,
        "openUrl": "https://admin.myshopline.com/user/signIn"
      },
      {
        "scriptName": "获取店铺列表",
        "runScript": demoFn,
        "status": 60,
        "openUrl": ""
      }
    ]
  },
  {
    "envId": envArr[2],
    "envName": "转自2204280013-220511-00018",
    "initStatus": 1,
    "script": [
      {
        "scriptName": "shopline登录",
        "runScript": demoFn,
        "args": {
          code: -1,
          data: null,
          message: "登录失败"
        },
        "status": 1,
        "openUrl": "https://admin.myshopline.com/user/signIn"
      },
      {
        "scriptName": "店铺授权",
        "runScript": demoFn,
        "options": { log: false, headless: false },
        "args": {
          "admin_url": "https://zzshopline.myshopline.com/admin/"
        },
        "status": 59,
        "openUrl": ""
      },
      {
        "scriptName": "脚本3",
        "runScript": demoFn,
        "options": { log: false, headless: false },
        "args": {
          code: 0,
          data: "",
          message: "OK",
        },
        "status": 59,
        "openUrl": ""
      }
    ]
  },
  {
    "envId": envArr[3],
    "envName": "环境2",
    "initStatus": 1,
    "script": [
      {
        "scriptName": "shopline登录",
        "runScript": demoFn,
        "args": {
          "account": "",
          "password": ""
        },
        "status": 1,
        "openUrl": "https://admin.myshopline.com/user/signIn"
      },
      {
        "scriptName": "店铺授权",
        "runScript": demoFn,
        "args": {
          "admin_url": "https://zzshopline.myshopline.com/admin/"
        },
        "status": 59,
        "openUrl": ""
      }
    ]
  }
])

export let mockData2 = () => ([
  {
    envId: envArr[0],
    envName: "环境1",
    initStatus: 1, //1~30 看下面Map
    script: [
      {
        scriptName: "shopline登",
        runScript: "运行脚本",
        args: {
          account: "",
          password: ""
        },
        status: 1, //31~60 看下面Map
        //脚本执行错误后打开环境的URL
        scriptErrorOpurl: "https://admin.myshopline.com/user/signIn",
      },
      {
        scriptName: "店铺授",
        runScript: "脚本数据",
        args: {
          //店铺后台地址
          admin_url: "https://zzshopline.myshopline.com/admin/"
        },
        status: 1, //1~20 看下面Map
        //脚本执行错误后打开环境的URL
        scriptErrorOpurl: "",
      }
    ]
  },
  {
    envId: envArr[1],
    envName: "环境2",
    initStatus: 1, //1~30 看下面Map
    script: [
      {
        scriptName: "shopline登录",
        runScript: "运行脚本",
        args: {
          account: "",
          password: ""
        },
        status: 1, //31~60 看下面Map
        //脚本执行错误后打开环境的URL
        scriptErrorOpurl: "https://admin.myshopline.com/user/signIn",
      },
      {
        scriptName: "店铺授权",
        runScript: "脚本数据",
        args: {
          //店铺后台地址
          admin_url: "https://zzshopline.myshopline.com/admin/"
        },
        status: 1, //1~20 看下面Map
        //脚本执行错误后打开环境的URL
        scriptErrorOpurl: "",
      }
    ]
  },
  {
    envId: envArr[3],
    envName: "环境4",
    initStatus: 1, //1~30 看下面Map
    script: [
      {
        scriptName: "ppp登录",
        runScript: "运行脚本",
        args: {
          account: "",
          password: ""
        },
        status: 1, //31~60 看下面Map
        //脚本执行错误后打开环境的URL
        scriptErrorOpurl: "https://admin.myshopline.com/user/signIn",
      },
      {
        scriptName: "aaa",
        runScript: "脚本数据",
        args: {
          //店铺后台地址
          admin_url: "https://zzshopline.myshopline.com/admin/"
        },
        status: 1, //1~20 看下面Map
        //脚本执行错误后打开环境的URL
        scriptErrorOpurl: "",
      },
      {
        scriptName: "bbb",
        runScript: "脚本数据",
        args: {
          //店铺后台地址
          admin_url: "https://zzshopline.myshopline.com/admin/"
        },
        status: 1, //1~20 看下面Map
        //脚本执行错误后打开环境的URL
        scriptErrorOpurl: "",
      }
    ]
  },
  {
    envId: envArr[4],
    envName: "环境23",
    initStatus: 1, //1~30 看下面Map
    script: []
  },
  {
    envId: envArr[5],
    envName: "环境2",
    initStatus: 2, //1~30 看下面Map
    script: [{
      scriptName: "443jjmmm",
      runScript: "43434",
      args: {
        //店铺后台地址
        admin_url: "https://zzshopline.myshopline.com/admin/"
      },
      status: 2, //1~20 看下面Map
      //脚本执行错误后打开环境的URL
      scriptErrorOpurl: "",
    }]
  }
])


async function getEnvIds(count: number = 1) {
  let res = await searchEnvs({
    "count": count,
    "openState": 1//打开状态的环境
  });
  let { code, data } = res.data
  if (code !== 0) return;
  if (data.items.length === 0) {
    console.error("当前暂无可用环境");
    return;
  }
  return data.items.map((v: any) => v.envId);
}
function searchEnvs(params: any) {
  //获取端口
  const baseURL = `http://127.0.0.1:${getAPIPort()}`
  let getEnvs = "/api/v1/env/search"
  axios.defaults.baseURL = baseURL;
  return axios.request({
    url: getEnvs,
    method: "get",
    params
  })
}