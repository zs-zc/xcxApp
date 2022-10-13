// components/test5/test5.js
const behaviors = require("../../behaviors/my-behaviors")
Component({
  behaviors: [behaviors],
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addOne() {
      this.setData({
        count: this.properties.count + 1
      })
      // 调用父组件方法
      this.triggerEvent('sync', {
        value: this.properties.count
      })
    }
  }
})