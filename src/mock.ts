import template from "./../utils/template";
let demoFn = async ({ args }) => {
  await new Promise(res => setTimeout(res, 2000));
  return args
}
let demoFn2 = async ({ args }) => {
  await new Promise(res => setTimeout(res, 5000));
  return args
}
let demoFn3 = async ({ args }) => {
  await new Promise(res => setTimeout(res, 1000000));
  return args
}
const executeFailFN = `module.exports = async (context) => {
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

export let accountName = {
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
}

export let executeFail = {
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
}
export let loginFail = {
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
}
export let interval = {
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
}

export let time = {
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
}

export let newModal = {
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
}
export let newModal2 = {
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
}

export let testAccount = [
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
]

export let noCallBack = [
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
]

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


export const auth_shopView = [
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
]

//简单使用
export const simple = [
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
]
//多脚本
export const moreScript = [
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
]
//手动登录
export const manualLogin = [
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
]
//开启非无头模式
export const headless = [
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
]
//仅仅只传一个脚本
export const onlyOne = [
  {
    "envId": envArr[0],
    "script": [
      {
        "scriptName": "检查 网站 登录",
        "runScript": demoFn,
      }
    ]
  }
]

//关闭正在执行脚本的窗口
export const closeWin = [
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
]
//环境占用
export const errorEnv = [
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
]
//登录失败
export const errorLogin = [
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
]
//3个脚本执行，第二个脚本执行失败
export const errorMiddle = [
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
]
//全部配置
export const allData = [
  ...simple,
  ...moreScript,
  ...manualLogin,
  ...headless,
  ...onlyOne,
  ...closeWin,
  ...errorEnv,
  ...errorLogin,
  ...errorMiddle,
]


export let mockData = [
  {
    "envId": "9161300723794233646",
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
    "envId": "9183805073595268917",
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
    "envId": "9168978793798293364",
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
]

export let mockData2 = [
  {
    envId: "9186931228077920000",
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
    envId: "9186931228077920908",
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
    envId: "9186931228077926666",
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
    envId: "9186931228077920908",
    envName: "环境23",
    initStatus: 1, //1~30 看下面Map
    script: []
  },
  {
    envId: "9186931228077920908",
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
]
