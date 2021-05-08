/**
 * @File 项目配置 - webpack 配置 - 通用 webpack 配置
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 10:03:01
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { PROJECT_PATH } = require('../constant');
const { isDevelopment, isProduction } = require('../env');

// 抽离 CSS 解析规则
// style-loader：将 js 文件中引入的 css 代码插入到 html 模板文件，使网页可以正常展示样式。
// mini-css-extract-plugin：和 style-loader 功能一样，只是打包后会单独生成 css 文件而非直接写在 html 文件中。
// css-loader：令 js 可以通过 import 或者 require 等命令导入 css 代码
const getCssLoaders = () => {
    const cssLoaders = [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: { localIdentName: "[local]--[hash:base64:5]" },
                sourceMap: isDevelopment,
            },
        },
    ]
    isProduction && cssLoaders.push({
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    isProduction && [
                        'postcss-preset-env',
                        {
                            autoprefixer: {
                                grid: true,
                            },
                        },
                    ],
                ],
            },
        },
    })

    return cssLoaders
};

module.exports = {
    entry: {
        index: {
            import: 'src/index.ts',  // 入口文件地址
            filename: 'index.js', // 打包后输出文件地址，会覆盖 output.fileName 的配置
            dependOn: [ 'Button' ], // 将其他 entry 块设置为 dependOn 后 当前文件如果引用了这几个块，则不会将其打包进来，可以一定程度的实现代码复用
            // dependOn: ['Button', 'Alert'], // 将其他 entry 块设置为 dependOn 后 当前文件如果引用了这几个块，则不会将其打包进来，可以一定程度的实现代码复用
        },
        Button: path.resolve(PROJECT_PATH, './src/components/Button/index.tsx'),
        // path.resolve(PROJECT_PATH, './src/index.ts'),
    },
    output: {
        path: path.resolve(PROJECT_PATH, './dist'),
        filename: '[name].js',
        globalObject: 'this',
        umdNamedDefine: true,
        library: {
            type: 'umd',
            name: 'Shined',
        },
        assetModuleFilename: 'images/[name].[contenthash:8].[ext]',
    },
    resolve: {
        extensions: [ ".js", ".jsx", ".ts", ".tsx" ],
        alias: {
            'src': path.resolve(PROJECT_PATH, './src'),
            'components': path.resolve(PROJECT_PATH, './src/components'),
            'utils': path.resolve(PROJECT_PATH, './src/utils'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            cache: true,
                            formatter: require.resolve('react-dev-utils/eslintFormatter'),
                            eslintPath: require.resolve('eslint'),
                            resolvePluginsRelativeTo: __dirname,

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(tsx?|js)$/,
                loader: 'babel-loader',
                options: { cacheDirectory: true },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [ ...getCssLoaders() ],
            },
            {
                test: /\.less$/,
                use: [
                    ...getCssLoaders(),
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: isDevelopment,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    ...getCssLoaders(),
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment,
                        },
                    },
                ],
            },
            {
                test: [ /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/ ],
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024,
                    },
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2?)$/,
                type: 'asset/resource',
            },
        ],
    },
    // webpack 内置缓存机制，增快二次编译速度。
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [ __filename ],
        },
    },
    plugins: [
        // css 压缩
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].chunk.css',
        }),
        // 打包类型检查，让终端可以显示类型错误
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: path.resolve(PROJECT_PATH, './tsconfig.json'),
            },
        }),
        // 处理静态资源: 将非导入形式在js文件中使用的资源也放到打包目录
        new CopyPlugin({
            patterns: [
                {
                    // 解释 fron 路径
                    context: 'public',
                    // 定义要拷贝的源文件
                    from: '*',
                    // 定义粘贴的指定路径
                    to: path.resolve(PROJECT_PATH, './dist/public'),
                    // 确定粘贴路径的类型，dir表示路径为一个文件夹
                    toType: 'dir',
                    // 允许使用全局匹配
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: [ '**/index.html' ],		// **表示任意目录下
                    },
                },
            ],
        }),
        // 清理 dist 输出路径
        new CleanWebpackPlugin(),
    ],
}
