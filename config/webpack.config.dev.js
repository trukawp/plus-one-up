// konfiguracja Webpack dla środowiska deweloperskiego, "dziedziczy" po konfiguracji Webpack

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ]
});
