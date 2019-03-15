/* eslint-disable */
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const paths = require('../paths');

const getClientEnvironment = require('../env');

const publicPath = paths.servedPath;

// `publicUrl` 和 `publicPath` 很类似。
const publicUrl = publicPath.slice(0, -1);

// 获取要注入到应用程序中的环境变量。
const env = getClientEnvironment(publicUrl);

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

const cssFilename = './index.css';

// 生产环境配置
module.exports = {
  mode: 'production',
  bail: true,
  devtool: false,
  entry: paths.appIndexJs,
  output: {
    path: paths.appBuild,
    library: 'shined',
    libraryTarget: "umd",
    filename: 'index.js',
    publicPath: publicPath,
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
    ),
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.scss'],
    alias: {},
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: [paths.appSrc],
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.(css|scss|less)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              require.resolve('sass-loader')
            ],
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
      sourceMap: false,
    })],
  },
  plugins: [
    //使一些环境变量可用于JS代码，例如： if（process.env.node_env=='production'）…}。
    new webpack.DefinePlugin(env.stringified),
    // 样式抽取
    new MiniCssExtractPlugin({
      filename: cssFilename,
    }),
    // 针对 Moment.js 的打包优化，参考：https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  // 有些依赖项仅仅用于 Node 环境，在此处配置为空。
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
