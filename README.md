
# 数据结构

```
{
key:"A",
title: "我是标题";
visible: true;
onBeforeRuning:()=>{};
onClose:()=>{};
onChecking: ()=>{};//检测中
onCheckDone: ()=>{};//检测完成
onRuning: ()=>{};//运行中
onRunComplete: ()=>{};//全部完成后触发回调
onMini:()=>{},
data:[
  {
    envId:"9186931228077920908",//环境id
    accountId:"",//账号ID
    autoLoginScript:{ //自动登录
        scriptName: "自动登录脚本",
        runScript: "",//运行脚本内容
        args: {//脚本执行参数
          account:"",
          password:""
        }
    },
    manualLoginScript:{ //手动登录
        scriptName: "自动登录脚本",
        runScript: "",//运行脚本内容
        args: {//脚本执行参数
          account:"",
          password:""
        }
    },
    script: [
      { 
        scriptName: "shopline登录",
        runScript: "运行脚本",
        args: {
          account:"",
          password:""
        },
      },
      {
        scriptName: "店铺授权",
        runScript: "脚本数据",
        args: {
          //店铺后台地址
          admin_url:"https://zzshopline.myshopline.com/admin/"
        },
        //脚本手动登录执行的URL
      }
   ]
  }
]
}
```