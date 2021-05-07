module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: 'index.js',
    globalObject: 'this',
    umdNamedDefine: true,
    library: {
      type: 'umd',
      name: 'Shined'
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
