// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    isLoading: false
  },
  getColorList() {
    wx.showLoading({
      title: '数据请求中...',
    })
    this.setData({
      isLoading: true
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: "GET",
      success: res => {
        console.log(res);
        this.setData({
          colorList: [...this.data.colorList, ...res.data.data]
        })
        console.log(this.colorList, '000');
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isLoading: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.isLoading) return
    this.getColorList()
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
    this.getColorList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})