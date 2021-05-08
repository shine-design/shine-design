/**
 * @File 项目配置 - webpack 配置 - 生产环境 webpack 配置
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 10:04:42
 */
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common')
const { productionEnv } = require('../env');

module.exports = merge(common, {
    mode: productionEnv,
    devtool: false,
    target: 'browserslist',
    plugins: [],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                // 去除所有注释，除了有特殊标志的注释如 @preserve 标记
                extractComments: false,
                terserOptions: {
                    // 去除函数，如配置的意思是将所有 console.log 函数去除
                    compress: { pure_funcs: [ 'console.log' ] },
                },
            }),
        ],
        // 代码分割
        splitChunks: {
            chunks: 'all',
            minSize: 0,
        },
    },
});
