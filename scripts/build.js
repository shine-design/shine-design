/* eslint-disable */

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
    throw err;
});

require('../config/env');

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/env/prod');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');

const measureFileSizesBeforeBuild =
    FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const useYarn = fs.existsSync(paths.yarnLockFile);

// 尺寸超出会产生警报
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

// 如果缺少必需的文件，则发出警告并崩溃
if (!checkRequiredFiles([paths.appIndexJs])) {
    process.exit(1);
}

measureFileSizesBeforeBuild(paths.appBuild)
    .then(previousFileSizes => {
        fs.emptyDirSync(paths.appBuild);
        return build(previousFileSizes);
    })
    .then(
        ({stats, previousFileSizes, warnings}) => {
            if (warnings.length) {
                console.log();
                console.log(chalk.yellow('共有' + warnings.length + '条警告待处理：\n'));
                console.log(warnings.join('\n\n'));
                console.log(
                    '\n查看 ' +
                    chalk.underline(chalk.yellow('keywords')) +
                    ' 获得错误信息和修改方案。',
                );
            } else {
                console.log();
                console.log(chalk.green('发布包构建成功！\n'));
            }

            console.log('构建文件大小：\n');
            printFileSizesAfterBuild(
                stats,
                previousFileSizes,
                paths.appBuild,
                WARN_AFTER_BUNDLE_GZIP_SIZE,
                WARN_AFTER_CHUNK_GZIP_SIZE,
            );
            console.log();
            console.log('如果您准备好了，试着给我们发 Pull Request 吧！');
            console.log();
        },
        err => {
            console.log(chalk.red('发布包构建失败.\n'));
            printBuildError(err);
            process.exit(1);
        },
    );

// 创建生产构建并打印部署指令。
function build(previousFileSizes) {
    console.log('当前环境：' + chalk.red('生产环境'));
    console.log();
    console.log('开始构建发布包...');

    let compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                return reject(err);
            }
            const messages = formatWebpackMessages(stats.toJson({}, true));
            if (messages.errors.length) {

                if (messages.errors.length > 1) {
                    messages.errors.length = 1;
                }
                return reject(new Error(messages.errors.join('\n\n')));
            }
            if (
                process.env.CI &&
                (typeof process.env.CI !== 'string' ||
                    process.env.CI.toLowerCase() !== 'false') &&
                messages.warnings.length
            ) {
                console.log(
                    chalk.yellow(
                        '\nTreating warnings as errors because process.env.CI = true.\n' +
                        'Most CI servers set it automatically.\n',
                    ),
                );
                return reject(new Error(messages.warnings.join('\n\n')));
            }
            return resolve({
                stats,
                previousFileSizes,
                warnings: messages.warnings,
            });
        });
    });
}

