// pages/message/message.js
import {
  createStoreBindings
} from "mobx-miniprogram-bindings"
import {
  store
} from "../../store/store"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "zs",
    country: "CHINA",
    count: 0,
  },
  syncCount(e) {
    this.setData({
      count: e.detail.value
    })
  },
  // 
  handleClick1(e) {
    this.updateNum1(e.target.dataset.step)

  },
  // 获取信息
  async getInfo() {
    const {
      data: res
    } = await wx.p.request({
      url: 'https://www.escook.cn/api/get',
      method: "GET",
      data: {
        name: "zs",
        age: 16
      }
    })
    console.log(res);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['updateNum1']
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
    this.storeBindings.detroyStoreBindings()
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

  }
})