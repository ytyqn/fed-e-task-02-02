const commonConfig = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'vue-webpack',
            url: './'
        }),
    ]
})