import paths from './config/paths';
import path from 'path';
import webpack from 'webpack';

export default {
  title: 'Shine Design - 为开发者、设计师和产品经理准备的UI设计语言',
  description: '一种广泛使用的基于React实现的UI设计语言，提供上百种企业级高质量的响应式组件，为开发者、设计师和产品经理提供一站式设计方案。',
  theme: paths.themeIndex,
  indexHtml: paths.siteHtml,
  codeSandbox: true,
  modifyBundlerConfig: config => {
    const {alias} = config.resolve;

    config.resolve.alias = {
      ...alias,
      assets: path.resolve(paths.sitePath, 'theme/assets'),
    };

    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        Headroom: 'headroom.js',
        SmoothScroll: 'smooth-scroll',
      }),
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    config.module.rules.push({
      test: /\.css/,
      use: ["style-loader", "css-loader"],
    });

    return config;
  },
  modifyBabelRc: babelrc => babelrc,
  // plugins: [
  // css({
  //   preprocessor: 'less',
  // }),
  // ],
};
