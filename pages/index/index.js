//index.js
//获取应用实例
const app = getApp()

Page({
  //页面的初始数据
  data: {
    motto: app.globalData.title,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow:function(){
     console.info("onShow")
     console.log(Page.prototype.route)
     console.info("begin1")
     console.info(getCurrentPages())
     console.info("begin2")
  },
  onHide:function(){
    //onHide: 页面隐藏
    // wx.showModal({
    //   title: '提示',
    //   content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    // })
    //当navigateTo或底部tab切换时调用。
    console.log("onHide call")
    console.log(wx.getSystemInfoSync)
    if (!wx.canIUse(Page.prototype.route)){
      console.log("can't Page.prototype.route")
    }else{
      console.log(this.route)
    }
  },
  onUnload:function(){
    //onUnload: 页面卸载
    //当redirectTo或navigateBack的时候调用。

  },
  //回调
  onLoad: function (prames) {
    console.log(prames.id)
    console.log("我被调用了")
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShareAppMessage:function(){
    return {
      title: '楸木',
      path: '/pages/index/index?id=123'
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
