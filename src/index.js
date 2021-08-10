/*
 * @Author: Li Jian
 * @Date: 2021-08-05 10:04:39
 * @LastEditTime: 2021-08-10 12:18:43
 * @LastEditors: Li Jian
 */

import TzHouse from './packages/House/index'
import applyMixin from '@src/mixin'

const components = [
  TzHouse
]

const install = function(Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  applyMixin(Vue)
}

console.info(`[VueHouse] version: ${__VERSION__}`)

export default {
  version: __VERSION__,
  install,
  TzHouse,
}