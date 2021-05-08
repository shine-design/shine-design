/**
 * @File 项目配置 - 环境变量
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 10:06:31
 */

// 生产环境
const productionEnv = 'production';
// 开发环境
const developmentEnv = 'development';
// 判断当前是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development';
// 判断当前是否为生产环境
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    developmentEnv,
    productionEnv,
    isDevelopment,
    isProduction,
};
