(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72d90f2a"],{"589e":function(e,t,o){},"666e":function(e,t,o){"use strict";o("589e")},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return n}));o("b775");var r={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",socketMessageStart:"controller.example.socketMessageStart",socketMessageStop:"controller.example.socketMessageStop",hello:"controller.example.hello",executeJS:"controller.example.executeJS",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",uploadFile:"controller.example.uploadFile"},n={appUpdater:"app.updater"}},db5a:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app-base-screen"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(t){return e.getTheme()}}},[e._v("获取模式")])],1),o("span",[e._v(" 结果："+e._s(e.currentThemeMode)+" ")])],1),o("div",{staticClass:"one-block-1"},[e._v(" 2. 设置主题模式（请自行实现前端UI效果） ")]),o("div",{staticClass:"one-block-2"},[o("a-radio-group",{on:{change:e.setTheme},model:{value:e.currentThemeMode,callback:function(t){e.currentThemeMode=t},expression:"currentThemeMode"}},[o("a-radio",{attrs:{value:e.themeList[0]}},[e._v(" "+e._s(e.themeList[0])+" ")]),o("a-radio",{attrs:{value:e.themeList[1]}},[e._v(" "+e._s(e.themeList[1])+" ")]),o("a-radio",{attrs:{value:e.themeList[2]}},[e._v(" "+e._s(e.themeList[2])+" ")])],1)],1)])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 系统主题模式 ")])])}],l=o("a358"),a={data:function(){return{currentThemeMode:"",themeList:["system","light","dark"]}},mounted:function(){},methods:{setTheme:function(e){var t=this;this.currentThemeMode=e.target.value,console.log("setTheme currentThemeMode:",this.currentThemeMode),this.$ipcCall(l["a"].setTheme,this.currentThemeMode).then((function(e){console.log("result:",e),t.currentThemeMode=e}))},getTheme:function(){var e=this;this.$ipcCall(l["a"].getTheme).then((function(t){console.log("result:",t),e.currentThemeMode=t}))}}},c=a,s=(o("666e"),o("2877")),i=Object(s["a"])(c,r,n,!1,null,"452151ab",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-72d90f2a.25e085a4.js.map