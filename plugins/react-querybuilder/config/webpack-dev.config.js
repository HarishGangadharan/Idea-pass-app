'use strict';

let HtmlPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const path = require('path');

module.exports = merge(webpackCommon, {
    devServer: {
        historyApiFallback: true,
        stats: {
            maxModules: 0
        }
    },
    devtool: 'cheap-module-source-map',
    entry: {
        demo: './demo/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist/demo')
    },
    plugins: [new HtmlPlugin({
        template: './demo/index.html',
        title: 'react-querybuilder (DEMO)',
    })]
});
