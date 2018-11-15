'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const path = require('path');

module.exports = merge(webpackCommon, {
    devtool: 'inline-source-map',
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
});