const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(item => [".bin"].indexOf(item) === -1) // exclude the .bin folder
  .forEach(mod => {
    nodeModules[mod] = "commonjs " + mod;
  });

const commonConfig = {
  externals: nodeModules,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.tsx?$/,
        loader: ["ts-loader", "babel-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"]
  }
};

module.exports = [
  Object.assign(
    {
      target: "electron-renderer",
      entry: { gui: "./src/gui.tsx" },
      plugins: [new HtmlWebpackPlugin()]
    },
    commonConfig
  )
];
