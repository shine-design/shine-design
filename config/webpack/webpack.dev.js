/**
 * @File 项目配置 - webpack 配置 - 开发环境 webpack 配置
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 10:04:22
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { developmentEnv } = require('../env');
const { SERVER_HOST, SERVER_PORT } = require('../constant');

module.exports = merge(common, {
    mode: developmentEnv,
    // 开启 sourceMap
    devtool: 'cheap-module-source-map',
    // fix webpack 热更新 bug
    target: 'web',
    // 开发服务器
    devServer: {
        // 服务 IP
        host: SERVER_HOST,
        // 服务端口
        port: SERVER_PORT,
        // 终端只打印错误类型的日志，不会打印 Warning 以及其他信息影响阅读
        stats: 'errors-only',
        // 去除多余网页 console 信息
        clientLogLevel: 'none',
        // 启用gzip压缩
        compress: true,
        // 第一次启动项目时自动打开默认浏览器
        open: true,
        // 启用服务热替换配置
        hot: true,
        // 去除启动项目时显示的打包信息
        noInfo: true,
    },
    plugins: [],
});
