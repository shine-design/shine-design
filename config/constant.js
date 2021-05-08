/**
 * @File 项目配置 - 全局变量
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 10:06:31
 */
const path = require('path')

// 项目根路径
const PROJECT_PATH = path.resolve(__dirname, '../')   // 项目根路径
// 开发环境下服务器IP
const SERVER_HOST = '127.0.0.1'
// 开发环境下服务器端口
const SERVER_PORT = 3000

module.exports = {
    PROJECT_PATH,
    SERVER_HOST,
    SERVER_PORT,
};
