
# 数据结构

```
{
  "simple": false,//是否是简单模式  简单模式会跳过自动登录和手动登录 默认false
  "key": "A",//是否状态保持的标识
  "title": "我是标题",//标题
  "visible": true,//是否显示
  "group": "groupName",//组别，同一组别并发在一起，同一应用受影响
  "executeNumber": 3,//执行次数
  "interval": 10,//执行间隔
  "limit": 2,//执行次数
  "isDev": false,//是否开发模式
  "autoExecute":false,//是否自动执行 默认false
  "autoClose":false,//是否执行完自动关闭 默认false
  "onBeforeRuning": () => {},//执行之前的回调
  "onClose": () => {},//关闭回调
  "onChecking": () => {},//检测中
  "onCheckDone": () => {},//检测完成
  "onRuning": () => {},//执行中
  "onRunComplete": (result) => {},//全部完成后触发回调
  "onMini": () => {},//最小化回调
  "data": [
    {
      "envId": "9186931228077920908",//环境ID
      "accountId": "", //账户ID  当前环境下绑定哪一个账号
      "autoLoginScript": {//自动登录脚本
        "scriptName": "自动登录脚本",
        "runScript": "",
        "args": {
          "account": "",
          "password": ""
        }
      },
      "manualLoginScript": {//手动登录脚本
        "scriptName": "自动登录脚本",
        "runScript": "",
        "args": {
          "account": "",
          "password": ""
        }
      },
      "script": [//运行业务脚本
        {
          "scriptName": "脚本步骤1",//脚本名称
          "runScript": "脚本数据",//运行脚本 可以是方法
          "args": {//脚本传入参数
            "account": "",
            "password": ""
          },
            //执行rpa的配置信息  log：是否开启console有效 默认false  headless:是否开启无头 true
           options: { log: false, headless: true },
        },
        {
          "scriptName": "脚本步骤2",
          "runScript": "脚本数据",
          "args": {
            "admin_url": "https://zzshopline.myshopline.com/admin/"
          }
        }
      ]
    }
  ]
}
```