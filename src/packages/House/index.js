/*
 * @Author: Li Jian
 * @Date: 2021-08-06 09:19:31
 * @LastEditTime: 2021-08-10 10:43:21
 * @LastEditors: Li Jian
 */
import House from './src/index.vue'
import applyMixin from '@src/mixin'

// console.log('xzxzxzxzxzxz', three);

House.install = function (Vue) {
  // console.log('House install')
  Vue.component(House.name, House)
  applyMixin(Vue)
}

export default House