//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://cdn.q8oils.cc/3a6fbfed26f851fd32b739f384393bab@1e_420w_130h_1c_0i_1o_90Q_3-10bl_1x.png',
      'http://cdn.q8oils.cc/119c52e9a4cd06cdfd2124d7debe7495@1e_420w_130h_1c_0i_1o_90Q_3-10bl_1x.png',
      'http://cdn.q8oils.cc/215e1e0b5c7ef2cec3bd9a1c68a092b1@1e_420w_130h_1c_0i_1o_90Q_3-10bl_1x.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    btns: [
      {
        name1: 'btns1', content: ['btn1', 'btn2', 'btn3'] 
      },
      {
        name1: 'btns2', content: ['btn4', 'btn5', 'btn6']
      },
      {
        name1: 'btns3', content: ['btn7', 'btn8', 'btn9']
      }
    ]  
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
  }
})
