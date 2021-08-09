/*
 * @Author: Li Jian
 * @Date: 2021-08-06 10:44:15
 * @LastEditTime: 2021-08-06 10:57:11
 * @LastEditors: Li Jian
 */
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map'
})