/*
 * @Author: Li Jian
 * @Date: 2021-08-06 09:19:31
 * @LastEditTime: 2021-08-09 13:44:27
 * @LastEditors: Li Jian
 */
import House from './src/index.vue'

// console.log('xzxzxzxzxzxz', three);

House.install = function (Vue) {
  // console.log('House install')
  Vue.component(House.name, House)
}

export default House