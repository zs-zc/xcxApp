// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [], // 轮播图
    girdList: [], // 九宫格
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiper()
    this.getGirdList()
  },
  // 获取轮播图
  getSwiper() {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method: "GET",
      success: res => {
        console.log(res, '获取轮播图');
        this.setData({
          swiperList: res.data
        })
      }
    })
  },
  // 获取九宫格
  getGirdList() {
    wx.request({
      url: 'https://www.escook.cn/categories',
      method: "GET",
      success: res => {
        console.log(res, '获取九宫格数据');
        this.setData({
          girdList: res.data
        })
      }
    })
  },
  // 跳转tab栏页面
  navegiteHandle() {
    wx.switchTab({
      url: '/pages/contact/contact',
    })
  },
  // 跳转非tab栏页面 
  disnavegiteHandle() {
    wx.navigateTo({
      url: '/pages/info/info',
    })
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
    console.log("触发下拉刷新");
    wx.stopPullDownRefresh();  // 停止下拉刷新动作
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

  }
})