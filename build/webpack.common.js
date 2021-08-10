/*
 * @Author: Li Jian
 * @Date: 2021-08-05 10:48:58
 * @LastEditTime: 2021-08-10 14:08:12
 * @LastEditors: Li Jian
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const pkg = require('../package.json')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'house.js',
    library: {
      name: 'VueHouse',
      type: 'umd'
    },
    clean: true
  },
  resolve: {
    alias: {
      'OrbitControls$': path.resolve(__dirname, '../src/plugins/OrbitControls.js'),
      '@imgs': path.resolve(__dirname, '../asset/resource/images'),
      '@src': path.resolve(__dirname, '../src'),
    }
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
      include: [path.resolve(__dirname, '../src')],
      exclude: /node_modules/
    }, {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.jpg/,
      type: 'asset/resource',
      exclude: /node_modules/
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
    }),
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      handler(percentage, message, ...args) {
        // custom logic
        if (!args.length) return
        console.info((percentage*100).toFixed(0)+'%', message, args);
      },
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
    })
  ],
}