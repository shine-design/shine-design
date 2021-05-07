module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist/umd/'),
    filename: 'webpack-ui.production.min.js', // 或者 webpack-ui.development.js
    globalObject: 'this', // 使得在 web node 都可用
    umdNamedDefine: true, // 给生成的 umd 模块中的 amd 部分命名
    library: {
      type: 'umd', // 指定输出 的格式，与设置 libraryTarget 一个效果
      name: 'Shined', // umd 格式可以给浏览器script 直接引用，这里可以设置一个 浏览器环境的全局变量名称，浏览器环境可以直接通过 WebpackUI.Button 来使用组件
      auxiliaryComment: '这里是插入的注释',
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /tsx?$/i,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
}
