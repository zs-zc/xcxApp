// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    shopList: [],
    pageNo: 1,
    pageSize: 10,
    total: 0,
    isLoading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query: options,
    })

    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })
  },

  getShopList(cb) {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: "GET",
      data: {
        _page: this.data.pageNo,
        _limit: this.data.pageSize
      },
      success: res => {
        console.log(res, '商品');
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header['X-Total-Count'] - 0
        })
      },
      complete: () => {
        // 隐藏loading
        wx.hideLoading()
        this.setData({
          isLoading: false
        })
        cb && cb()
      }
    })
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
    this.setData({
      pageNo: 1,
      shopList: [],
      total: 0
    })
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 先判断数据是否加载完毕
    if (this.data.pageNo * this.data.pageSize >= this.data.total) {
      return wx.showToast({
        title: '数据加载完毕！',
        icon: "none"
      })
    }
    if (this.data.isLoading) return
    this.setData({
      pageNo: this.data.pageNo + 1
    })
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})