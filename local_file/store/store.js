//   store 的共享实例
import {
  action,
  observable
} from "mobx-miniprogram"

export const store = observable({
  //  数据字段
  numA: 1,
  numB: 2,
  //  计算属性
  get sum() {
    return this.numA + this.numB;
  },
  // sctions 函数，专门来修改store
  updateNum1: action(function (step) {
    this.numA += step
  })
})