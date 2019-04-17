const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //target
    target: 'node',
    //entry point of server
    entry: './src/index.js',
    //output budle path
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    //not to include imported full node module code
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);
