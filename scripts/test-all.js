/* eslint-disable */
/**
 * 全量测试流程
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-17 01:02
 */
const boxen = require('boxen');
const compareVersions = require('compare-versions');
const latestVersion = require('latest-version');

const pkg = require('../package');
const ora = require('ora');
const chalk = require('chalk');
const inquirer = require('inquirer');

const spinner = ora({
  color: 'blue'
});


function checkVersion() {
  return (async () => {
    const remoteVersion = await latestVersion('shined');
    const localVersion = pkg.version;
    const diffVersion = compareVersions(remoteVersion, localVersion);
    return {
      message: diffVersion < 0
        ? `即将执行版本发布流程 ${chalk.red(remoteVersion)} -> ${chalk.green(localVersion)}`
        : diffVersion === 0
          ? `本地版本与生产环境一致，请先执行 ${chalk.green('npm run release')} 进行升级`
          : `当前本地环境版本落后生产环境，请先同步版本`,
      result: diffVersion
    };
  })();
}

async function prompt(message) {
  return inquirer.prompt([{
    type: 'confirm',
    name: 'isChecked',
    message: `是否开始执行代码规范检查?`,
    default: true
  }]);
}

async function testAll() {
  // spinner.start(chalk.cyan(`正在校验目录...`));
  const versionResult = await checkVersion();

  const message = `${versionResult.message}\n
   ${chalk.yellow('Changelog:')} ${chalk.cyan('https://github.com/shine-design/shine-design/releases')} \n
   发布流程会持续数分钟，请耐心等待...
   `;

  if (versionResult.result >= 0) {
    return;
  }


  console.log(boxen(message, {
    padding: 1,
    margin: 1,
    align: 'center',
    borderColor: 'yellow',
    borderStyle: 'double'
  }));

  const answer = await prompt('是否开始执行代码规范检查');

}

testAll();
