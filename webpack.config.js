require("dotenv").config();

const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  CopyPlugin = require("copy-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader",'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      cache: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/public",
          globOptions: {
            dot: true,
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    new BrowserSyncPlugin({
      host: process.env.HOST,
      port: process.env.PORT,
      server: { baseDir: ["dist"] },
      open: false,
    }),
  ],
};
