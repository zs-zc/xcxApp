// components/test3/test3.js
Component({
  options: {
    pureDataPattern: /^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0,
    },
    colorFull: "0,0,0"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickR() {
      this.setData({
        "_rgb.r": this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
      })
    },
    clickG() {
      this.setData({
        "_rgb.g": this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
      })
    },
    clickB() {
      this.setData({
        "_rgb.b": this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
      })
    },
    mandColor() {
      this.setData({
        _rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        }
      })
    }
  },
  observers: {
    "_rgb.r,_rgb.g,_rgb.b": function (r, g, b) {
      this.setData({
        colorFull: `${r},
        ${g},
        ${b}`
      })
    }
  },
  // 生命周期
  lifetimes: {
    created() {
      console.log("created");
    },
    attached() {
      console.log("attached");
    }
  },
  // 页面生命周期
  pageLifetimes: {
    show() {
      console.log("show");
      this.mandColor()
    },
    hide() {
      console.log("hide");
    },
    resize() {
      console.log("resize");
    }
  }
})