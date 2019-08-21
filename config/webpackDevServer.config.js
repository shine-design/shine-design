/* eslint-disable */
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const paths = require('./paths');
const fs = require('fs');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function (proxy, allowedHost) {
  return {
    // 采用 Gzip 压缩生成的目录
    compress: true,
    // 静默输出日志
    clientLogLevel: 'none',
    // 路径
    // contentBase: paths.appPublic,
    // 监听该路径里的文件变化
    watchContentBase: true,
    // 是否开启热部署
    hot: true,
    // 公共路径
    publicPath: '/',
    // 静默监听事件
    quiet: true,

    watchOptions: {
      ignored: ignoredFiles(paths.appSrc),
    },
    // 校验是否启用 HTTPS
    https: protocol === 'https',
    host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    before(app, server) {
      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app);
      }

      app.use(evalSourceMapMiddleware(server));
      app.use(errorOverlayMiddleware());

      app.use(noopServiceWorkerMiddleware());
    },
  };
};
