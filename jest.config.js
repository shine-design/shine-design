/**
 * @File 单元测试 - 配置文件
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 13:35:18
 * @Note 配置文档：https://jestjs.io/docs/zh-Hans/configuration
 */

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\",
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
    ],

    // A list of paths to directories that Jest should use to search for files in
    roots: null,

    // The test environment that will be used for testing
    testEnvironment: "node",

    // The glob patterns Jest uses to detect test files
    testMatch: [
        // "**/__tests__/**/*.js?(x)",
        "**/?(*.)+(spec|test).js?(x)",
    ],

    moduleDirectories: [ "node_modules", "src" ],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
        "\\\\node_modules\\\\",
    ],

    // A map from regular expressions to paths to transformers
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
    },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: [
        "\\\\node_modules\\\\",
    ],
};