// pages/article/index.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    articalId:10001,
    message:'俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
    author:"郑清福编辑",
    date:"2018-02-08 18:10",
    favor:1
    // favorImage: "/resources/images/favorBefore.png"
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
  chufa:function(){
    
  },
  ceshi:function(){
      console.log("fuck")
      this.onShareAppMessage();
      
  },
   favorArtical:function(e){
     var titleId = e.target.dataset.current;
     console.log(titleId)
     var tempFavor= this.data.favor+1;
     this.setData({
       favor: tempFavor
     })
     console.log(tempFavor)
  }
})