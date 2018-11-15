'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = merge(webpackCommon,{
  devtool: 'none',
  entry: {
    index: './src/index.js'
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [new CopyPlugin([{
    from: './src/query-builder.scss'
  }])]
});
