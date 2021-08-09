/*
 * @Author: Li Jian
 * @Date: 2021-08-05 10:47:20
 * @LastEditTime: 2021-08-09 16:25:08
 * @LastEditors: Li Jian
 */
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve('dist'),
  }
})