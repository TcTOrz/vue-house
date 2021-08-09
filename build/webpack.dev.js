/*
 * @Author: Li Jian
 * @Date: 2021-08-05 10:47:20
 * @LastEditTime: 2021-08-09 09:15:20
 * @LastEditors: Li Jian
 */
// const base = require('./webpack.base.js')
// const path = require('path')
// const { VueLoaderPlugin } = require('vue-loader')

// const webpack = require('webpack')

// const pkg = require('../package.json')

// module.exports = {
//   mode: 'development',
//   entry: "./src/index.js",
//   devtool: 'inline-source-map',
//   output: {
//     path: path.resolve('dist'),
//     filename: "house.js",
//     library: {
//       name: 'VueHouse',
//       type: 'umd'
//     },
//     clean: true
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'vue-style-loader',
//           'css-loader'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new VueLoaderPlugin(),
//     new webpack.BannerPlugin({
//       banner: `${pkg.name} v${pkg.version}
// Author: ${pkg.author}
// Homepage: ${pkg.homepage}
// License: ${pkg.license}`
//     }),
//     new webpack.DefinePlugin({
//       __VERSION__: JSON.stringify(pkg.version)
//     })
//   ],
//   devServer: {
//     contentBase: path.resolve('dist'),
//   }
// }

const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve('dist'),
  }
})