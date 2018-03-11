// pages/article/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winH:0,
    articalId: 10001,
    message: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
    author: "郑清福编辑",
    date: "2018-02-08 18:10",
    favor: 1,
    searchLoadingComplete: false,
    searchCount:0,
    searchPageNum: 1,   // 设置加载的第几次，默认是第一次  
    commentData: [{
      name: '郑清福',
      content: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
      date: '2018-8-12 13:52'
    }, {
      name: '郑清福',
      content: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
      date: '2018-8-12 13:52'
    }, {
      name: '郑清福',
      content: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
      date: '2018-8-12 13:52'
    }, {
      name: '郑清福',
      content: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
      date: '2018-8-12 13:52'
    }]
    // favorImage: "/resources/images/favorBefore.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  resetHeight: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        console.log(res.windowHeight);
        that.setData({
          winH: res.windowHeight
        })
      },
    })
  }
  ,
  onLoad: function (options) {
    this.resetHeight()
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
  chufa: function () {

  },
  ceshi: function () {
    console.log("fuck")
    this.onShareAppMessage();

  },
  favorArtical: function (e) {
    var titleId = e.target.dataset.current;
    console.log(titleId)
    var tempFavor = this.data.favor + 1;
    this.setData({
      favor: tempFavor
    })
    console.log(tempFavor)
  }  , 
  fetchSearchList: function () { 
    if (this.data.searchCount<5){
      var loadList = [{
        name: '郑清福',
        content: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
        date: '2018-8-12 13:52'
      }, {
        name: '郑清福',
        content: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
        date: '2018-8-12 13:52'
      }, {
        name: '郑清福',
        content: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
        date: '2018-8-12 13:52'
      }, {
        name: '郑清福',
        content: '俄罗斯板材进出口限制好，俄罗斯板材进出口限制，俄罗斯板材进出口限制，俄罗斯板材进出口限制',
        date: '2018-8-12 13:52'
      }];
      this.setData({
        commentData: this.data.commentData.concat(loadList),
        searchCount: this.data.searchCount + 1
      })
    }else{
      this.setData({
        searchLoadingComplete:true
      })
    }
  },
  getMoreComments: function (e) {
    if (!this.data.searchLoadingComplete) {
      console.log("fuck")
      this.setData({
        searchPageNum : this.data.searchPageNum + 1
      })
      this.fetchSearchList();
    }
  }


})