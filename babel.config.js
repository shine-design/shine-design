module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    'transform-class-properties',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    // 'syntax-dynamic-import',
    // ' @babel/plugin-syntax-dynamic-import',
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
  ],
};
