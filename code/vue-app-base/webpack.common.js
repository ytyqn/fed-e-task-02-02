const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {

                        limit: 10000,
                        esModule: false
                    }
                }]

            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('/')
        })
    ]
}