// konfiguracja Webpack dla środowsika produkcyjnego, "dziedziczy" po konfiguracji Webpack

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      minimize: true,
      comments: false,
    }),
  ]
});
