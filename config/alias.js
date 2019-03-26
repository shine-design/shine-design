const path = require('path');
const paths = require('./paths');

// 路径别名配置
module.exports = {
  configs: path.resolve(paths.appSrc, 'configs'),
  variables: path.resolve(paths.appSrc, '_variables.js'),
  shined: paths.appBuild,
  style: paths.appStyle,
  shineDev: paths.appComponent,
};
