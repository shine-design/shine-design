import webpack from 'webpack';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import path from 'path';
import paths from '../config/paths';

export default {
  title: 'Shine Design - 为开发者、设计师和产品经理准备的UI设计语言',
  description: '一种广泛使用的基于React实现的UI设计语言，提供上百种企业级高质量的响应式组件，为开发者、设计师和产品经理提供一站式设计方案。',
  theme: paths.themeIndex,
  indexHtml: paths.siteHtml,
  codeSandbox: true,
  modifyBundlerConfig: config => {

    config.entry.app.shift();
    const {alias} = config.resolve;

    config.resolve.extensions.push('scss');

    config.resolve.alias = {
      ...alias,
      assets: path.resolve(paths.sitePath, 'theme/assets'),
      shined: paths.appBuild,
      shineDev: paths.appComponent,
      configs: path.resolve(paths.appSrc, 'configs'),
      variables: path.resolve(paths.appSrc, '_variables.js'),
      validations: path.resolve(paths.appSrc, 'validations.js'),
      style: paths.appStyle,
      theme: path.resolve(paths.themePath, 'components/RenderUtils'),
      siteSrc: paths.siteSrc,
    };

    // 配置全局变量
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
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
      ],
    });

    // 配置 scss 解析器规则
    config.module.rules.push({
      test: /\.scss/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    config.module.rules.push({
      test: /\.less$/,
      use: [require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        }, {
          loader: require.resolve('less-loader'), // compiles Less to CSS
          options: {
            javascriptEnabled: true,
          },
        }],
    });

    config.plugins.unshift(new FaviconsWebpackPlugin(paths.siteSrc + '/assets/favicons/favicon-32x32.png'));
    return config;
  },
  modifyBabelRc: babelrc => babelrc,
};
