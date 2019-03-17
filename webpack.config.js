/* eslint-disable */
'use strict';

const path = require('path');
const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const paths = require('./config/paths');
const getClientEnvironment = require('./config/env');

// 当 env 环境变量中 GENERATE_SOURCEMAP 属性为 true 时，生成 sourceMap
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// This is the production and development configuration.
// It is focused on developer experience, fast rebuilds, and a minimal bundle.
module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  // publicPath：Webpack 会自动在静态资源路径前追加该字段
  // 生产环境下，需要提供公共路径，例如 /assets/
  // 开发环境下，通常将 publicPath 设置为 /
  const publicPath = isEnvProduction
    ? paths.servedPath
    : isEnvDevelopment && '/';

  // Some apps do not use client-side routing with pushState.
  // For these, "homepage" can be set to "." to enable relative asset paths.
  const shouldUseRelativeAssetPaths = publicPath === './';

  // 类似于 publicPath ，可以给其他类型的文件提供一些配置信息
  // 追加 %PUBLIC_URL% 到 index.html 和 process.env.PUBLIC_URL 到 Javascript
  const publicUrl = isEnvProduction
    ? publicPath.slice(0, -1)
    : isEnvDevelopment && '';

  // 将环境变量注入 Javascript
  const env = getClientEnvironment(publicUrl);

  // 样式加载器
  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: Object.assign(
          {},
          shouldUseRelativeAssetPaths ? {publicPath: '../../'} : undefined
        ),
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push({
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      });
    }
    return loaders;
  };

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'cheap-module-source-map',
    entry: isEnvDevelopment
      // 开发环境需要热部署客户端
      ? [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        paths.websiteIndexJs,
      ]
      // 生产环境
      : paths.appIndexJs,
    output: {
      // 文件构建目录
      path: isEnvProduction ? paths.appBuild : undefined,
      // 输出一些文件信息
      pathinfo: isEnvDevelopment,
      // 库名称
      library: isEnvProduction ? 'shined' : undefined,
      // 库类型
      libraryTarget: isEnvProduction ? "umd" : undefined,
      // 输出文件名称
      filename: isEnvProduction
        ? 'index.js'
        : isEnvDevelopment && 'static/js/bundle.js',
      // 静态资源路径
      publicPath: publicPath,
      // 将 sourceMap 的实体引用到真实的磁盘位置（在windows上是url）
      devtoolModuleFilenameTemplate: isEnvProduction
        ? info =>
          path
            .relative(paths.appSrc, info.absoluteResourcePath)
            .replace(/\\/g, '/')
        : isEnvDevelopment &&
        (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        // 仅生产环境生效
        new TerserPlugin({
          terserOptions: {
            parse: {
              // 解析 ECMA 8 新特性
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          // 使用多线程并行运行提高构建速度
          // 默认并发运行数：os.cpus（）。长度-1
          parallel: true,
          // 允许文件缓存
          cache: true,
          sourceMap: shouldUseSourceMap,
        }),
        // 仅生产环境生效
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: shouldUseSourceMap
              ? {
                inline: false,
                annotation: true,
              }
              : false,
          },
        }),
      ],
    },
    resolve: {
      modules: ['node_modules'].concat(
        process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
      ),
      extensions: paths.moduleFileExtensions
        .map(ext => `.${ext}`),
      alias: {},
      plugins: [
        // 添加对即插即用安装的支持，从而加快安装和添加速度
        // 防止忘记依赖等。
        PnpWebpackPlugin,
        new ModuleScopePlugin([paths.appSrc, paths.testPath, paths.websitePath], [paths.appPackageJson]),
      ],
    },
    resolveLoader: {
      plugins: [
        PnpWebpackPlugin.moduleLoader(module),
      ],
    },
    module: {
      strictExportPresence: true,
      rules: [
        // 禁用 require.ensure
        {parser: {requireEnsure: false}},

        // 在 Babel 之前执行代码风格检查
        {
          test: /\.(js|mjs|jsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
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
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: [paths.appSrc, paths.websitePath, paths.testPath],
              loader: require.resolve('babel-loader'),
              options: {
                // customize: require.resolve(
                //   'babel-preset-react-app/webpack-overrides'
                // ),

                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
                        },
                      },
                    },
                  ],
                ],
                cacheDirectory: true,
                compact: isEnvProduction,
              },
            },
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: [
                  [
                    require.resolve('babel-preset-react-app/dependencies'),
                    {helpers: true},
                  ],
                ],
                cacheDirectory: true,
                sourceMap: false,
              },
            },
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
              }),
              sideEffects: true,
            },
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              }),
            },
            {
              test: sassRegex,
              exclude: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                },
                'sass-loader'
              ),
              sideEffects: true,
            },
            {
              test: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent,
                },
                'sass-loader'
              ),
            },
            {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                },
                'less-loader'
              ),
              sideEffects: true,
            },
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent,
                },
                'less-loader'
              ),
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // 开发环境才会有网页输出
      isEnvDevelopment && new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.websiteHtml,
          },
          isEnvProduction
            ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
            : undefined
        )
      ),
      // 为未找到的模块错误提供了一些必要的上下文，例如请求的资源。
      new ModuleNotFoundPlugin(paths.appPath),
      // 使一些环境变量可用于JS代码，例如：if（process.env.node_env=='production'）…}
      // 必须将 node_env 设置为production
      new webpack.DefinePlugin(env.stringified),
      // 热部署
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      // 路径异常监听
      isEnvDevelopment && new CaseSensitivePathsPlugin(),
      // 安装脚本后自动重新加载
      isEnvDevelopment &&
      new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      // 配置 CSS 输出
      isEnvProduction &&
      new MiniCssExtractPlugin({
        filename: 'index.css'
      }),
      // 忽略某些插件
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ].filter(Boolean),
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
    performance: false,
  };
};

