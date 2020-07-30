/*
 * @Author: your name
 * @Date: 2020-07-30 09:22:52
 * @LastEditTime: 2020-07-30 09:26:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g2-databoard\webpack.dev.js
 */
const {
  merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');

const beforeDevServer = app => {
  app.get('/test', (req, res) => {
    res.json({
      data: 'hahaha'
    })
  })
};

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: '#source-map', //  错误追踪
  devServer: {
    port: 8000,
    open: true,
    hot: true,
    hotOnly: true,
    before: beforeDevServer
  },
})