/* eslint-disable */
const fs = require('fs');
const path = require('path');
const paths = require('./paths');

delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
    throw new Error(
        'The NODE_ENV environment variable is required but was not specified.'
    );
}

// 从文件加载环境变量
// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
    `${paths.dotenv}.${NODE_ENV}.local`,
    `${paths.dotenv}.${NODE_ENV}`,
    NODE_ENV !== 'test' && `${paths.dotenv}.local`,
    paths.dotenv,
].filter(Boolean);

// 从 .env* 文件读取变量
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
        require('dotenv-expand')(
            require('dotenv').config({
                path: dotenvFile,
            })
        );
    }
});


const appDirectory = fs.realpathSync(process.cwd());

process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);


const REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
    const raw = Object.keys(process.env)
        .filter(key => REACT_APP.test(key))
        .reduce(
            (env, key) => {
                env[key] = process.env[key];
                return env;
            },
            {
                NODE_ENV: process.env.NODE_ENV || 'development',
                // 用于解析中静态资产的正确路径。
                PUBLIC_URL: publicUrl,
            }
        );
    // Stringify 所有属性值，以便能传入 Webpack DefinePlugin
    const stringified = {
        'process.env': Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };

    return {raw, stringified};
}

module.exports = getClientEnvironment;
