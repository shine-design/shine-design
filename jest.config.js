/**
 *  Jest 配置文件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019/3/17 00:40
 */
module.exports = {
  verbose: true,
  setupFiles: ['./tests/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx', 'scss', 'css'],
  collectCoverage: true, // 是否收集测试时的覆盖率信息
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs,ts,tsx}'], // 哪些文件需要收集覆盖率信息
  coverageDirectory: '<rootDir>/tests/coverage', // 输出覆盖信息文件的目录
  coveragePathIgnorePatterns: ['/node_modules/'], // 统计覆盖信息时需要忽略的文件
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
    ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform",
  },
};
