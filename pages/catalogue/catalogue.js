Page({
  data: {
    winH: 0,
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0,
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
  }
  ,
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
  },
  
  onLoad: function () {
    this.resetHeight()
    // 加载的使用进行网络访问，把需要的数据设置到data数据对象  
    var that = this
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          navLeftItems: res.data,
          navRightItems: res.data
        })
      }
    })
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }

})  