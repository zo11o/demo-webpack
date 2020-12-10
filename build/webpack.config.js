const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
console.log(CleanWebpackPlugin)
console.log(__dirname)
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[fullhash:8].js',
        path: path.resolve(__dirname, '../','dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'My App',
            template: path.resolve(__dirname, '../public','index.html')
        }),
        // new CleanWebpackPlugin([
        //     "./dist"
        // ]),
    ]
}