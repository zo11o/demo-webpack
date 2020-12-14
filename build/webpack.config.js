const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[fullhash:8].js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    mode:'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                    loader: path.resolve(__dirname, '../loader/second-loader.js'),
                    options: {
                        name: 'sl',
                        test: false
                    },
                },
                // {
                //     // 这里写loader 名字
                //     loader: path.resolve(__dirname, '../loader/first-loader.js'),
                //     options: {
                //         name: 'fl',
                //         test: true
                //     },

                // },
            ]
            // use: [
            //     {
            //         loader: 'second-loader',
            //         options: {
            //             test: true
            //         }
            //     }
            // , 'first-loader']
        }],
    },
    // resolveLoader: {
    //     // 告诉 webpack 该去那个目录下找 loader 模块
    //     modules: ['node_modules', path.resolve(__dirname, '../loader')]
    // },
    plugins: [
        // new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'My App',
            template: path.resolve(__dirname, '../public', 'index.html')
        }),
        new CleanWebpackPlugin({
            dry: false,
            cleanOnceBeforeBuildPatterns: ['../dist'], // 或者使用绝对路径
            dangerouslyAllowCleanPatternsOutsideProject: true,
        }),
    ]
}