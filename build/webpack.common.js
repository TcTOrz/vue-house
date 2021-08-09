/*
 * @Author: Li Jian
 * @Date: 2021-08-05 10:48:58
 * @LastEditTime: 2021-08-09 13:26:03
 * @LastEditors: Li Jian
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const pkg = require('../package.json')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve('dist'),
    // filename:  (pathData) => {
    //   return pathData.chunk.name === 'main' ? 'house.js' : '[name].js';
    // },
    filename: 'house.js',
    library: {
      name: 'VueHouse',
      type: 'umd'
    },
    clean: true
  },
  externals: { // 使用外部扩展
    three: {
      commonjs2: 'three',
      commonjs: 'three',
      amd: 'three',
      root: 'THREE' // 用于script调用
    }
  },
  module: {
    noParse: /three|THREE/,
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: `${pkg.name} v${pkg.version}
Author: ${pkg.author}
Homepage: ${pkg.homepage}
License: ${pkg.license}`
    }),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(pkg.version)
    }),
    new webpack.ProvidePlugin({
      three: 'three',
      // orbit: '../src/plugins/OrbitControls.js'
    }),
    // new webpack.ProgressPlugin({
    //   activeModules: false,
    //   entries: true,
    //   handler(percentage, message, ...args) {
    //     // custom logic
    //     console.info(percentage, message, ...args);
    //   },
    //   modules: true,
    //   modulesCount: 5000,
    //   profile: false,
    //   dependencies: true,
    //   dependenciesCount: 10000,
    //   percentBy: null,
    // })
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
}