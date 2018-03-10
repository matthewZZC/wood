// pages/wood/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    array: [{
      title: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
      picture: 'https://t10.baidu.com/it/u=2969485281,2552444972&fm=173&s=118B9D554202554D4E1EDC780300A038&w=600&h=375&img.JPEG',
      source: '线上测试'
    }, {
        title: '北京东坝木材交易，北京东坝木材交易北京东坝木材交易北京东坝木材交易',
        picture: 'https://t10.baidu.com/it/u=2969485281,2552444972&fm=173&s=118B9D554202554D4E1EDC780300A038&w=600&h=375&img.JPEG',
      source: '北京新闻'
      }, {
        title: '码头交易',
        picture: 'https://t10.baidu.com/it/u=2969485281,2552444972&fm=173&s=118B9D554202554D4E1EDC780300A038&w=600&h=375&img.JPEG',
        source: '太仓港'
    }, {
      title: '郑清福木材制造',
      picture: 'https://t10.baidu.com/it/u=2969485281,2552444972&fm=173&s=118B9D554202554D4E1EDC780300A038&w=600&h=375&img.JPEG',
      source: '清福业务员'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    console.log(cur)
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab:function(e){
    this.setData({
      currentTab: e.detail.current
    })
    this.checkCor();
  },
  checkCor:function(){
    if(this.data.currentTab>=4){
      this.setData({
        scrollLeft:300
      })
    }else{
      this.setData({
        scrollLeft: 0
      })
    }
  }

  
})