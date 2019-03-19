const merge = require('webpack-merge');
const {css} = require('docz-plugin-css');
const paths = require('./config/paths');

// 为 Docz 配置特殊 Webpack Config
const webpackOverlay = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: ['babel-loader'],
  //     },
  //     {
  //       test: /\.(css|less)$/,
  //       include: [paths.sitePath],
  //       exclude: [paths.appNodeModules],
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         'less-loader',
  //       ],
  //     },
  //   ],
  // },
};

export default {
  title: 'Shine Design - 为开发者、设计师和产品经理准备的UI设计语言',
  description: '一种广泛使用的基于React实现的UI设计语言，提供上百种企业级高质量的响应式组件，为开发者、设计师和产品经理提供一站式设计方案。',
  theme: paths.themeIndex,
  indexHtml: paths.siteHtml,
  codeSandbox: true,
  modifyBundlerConfig: config => {
    // console.log(config.module)
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
    });
    return config;
    // return merge(config, webpackOverlay);
  },
  modifyBabelRc: babelrc => babelrc,
  // plugins: [
  // css({
  //   preprocessor: 'less',
  // }),
  // ],
};
