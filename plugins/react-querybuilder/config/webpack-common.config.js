'use strict';

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ProvidePlugin = require('webpack').ProvidePlugin;

module.exports = {
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },

    plugins: [
        new ExtractTextPlugin('query-builder.css')
    ],

    stats: {
        maxModules: 0
    }
};
