const merge = require('webpack-merge');
const {css} = require('docz-plugin-css');
const paths = require('./config/paths');

// 为 Docz 配置特殊 Webpack Config
const webpackOverlay = {};

export default {
  title: 'Shine Design - 为开发者、设计师和产品经理准备的UI设计语言',
  description: '一种广泛使用的基于React实现的UI设计语言，提供上百种企业级高质量的响应式组件，为开发者、设计师和产品经理提供一站式设计方案。',
  theme: paths.themeIndex,
  themeConfig: {},
  indexHtml: paths.siteHtml,
  codeSandbox: true,
  modifyBundlerConfig: config => {
    return merge(config, webpackOverlay);
  },
  modifyBabelRc: babelrc => babelrc,
  plugins: [
    css({
      preprocessor: 'less',
      cssmodules: true,
    }),
  ],
};
