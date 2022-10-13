// index.js

Page({
  data: {
    name: "三十六",
    count: 0,
    inputVal: "nono",
    type: 1,
    Src: "http://www.itheima.com/images/logo.png"
  },
  // 事件处理函数
  bindtapHandle(e) {
    // console.log(e);
    this.setData({
      count: this.data.count + 1
    })
  },
  inputHandle(e) {
    console.log(e.detail.value);
    this.setData({
      inputVal: e.detail.value
    })
  },
  // GET
  getHandle() {
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: "GET",
      data: {
        name: "zs",
        age: 18
      },
      success: res => {
        console.log(res.data, 'GET');
      }

    })
  },
  // POST
  postHandle() {
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method: "POST",
      data: {
        name: "ls",
        age: 19
      },
      success: res => {
        console.log(res.data, 'POST');
      }
    })
  },
  onLoad() {
    this.getHandle();
    this.postHandle();
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
})