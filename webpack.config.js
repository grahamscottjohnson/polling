var path = require("path");

module.exports = {
  entry: "./public/index.js",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["react", "env"]
        },
      }
    ]
  },
}
