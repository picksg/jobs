var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,

            // There is not need to run the loader through
            // vendors
            exclude: [node_modules_dir],
            loader: 'babel'
        }]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Mobile Timesheet',
            template: 'my-index.html',
            inject: 'body'
        })
    ]
};

module.exports = config;