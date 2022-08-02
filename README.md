
# 数据结构

```
{
key:"A",
title: "我是标题";
visible: true;
onBeforeRuning:()=>{};
onRunComplete:()=>{};
onClose:()=>{};
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
        },
      openUrl: "https://admin.myshopline.com/user/signIn"
    },
    script: [
      { 
        scriptName: "shopline登录",
        runScript: "运行脚本",
        args: {
          account:"",
          password:""
        },
      //脚本手动登录执行的URL
        openUrl: "https://admin.myshopline.com/user/signIn",
      },
      {
        scriptName: "店铺授权",
        runScript: "脚本数据",
        args: {
          //店铺后台地址
          admin_url:"https://zzshopline.myshopline.com/admin/"
        },
        //脚本手动登录执行的URL
        openUrl: "",
      }
   ]
  }
]
}
```