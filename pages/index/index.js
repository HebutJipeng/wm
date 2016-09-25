//index.js
//获取应用实例
var app = getApp()
var common = require('../../common/a.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    staffA: {firstName: 'Hulk', lastName: 'Hua'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Giden', lastName: 'Lin'}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function() {
    console.log("页面渲染完成")
  },
  onShow: function() {
    console.log("监听页面显示")
  },
  onHide: function() {
    console.log("监听页面隐藏")
  },
  onUnload: function() {
    console.log("监听页面卸载")
  },
  viewTap: function() {
    console.log("首页的标语被点击了")
  },
  helloMina: function() {
    common.sayHello("Mina")
  }
})
