module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // .ts나 .tsx 확장자를 ts-loader가 트랜스파일
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    contentBase: "./public", // index.html 경로
    publicPath: "/dist"
  }
};
