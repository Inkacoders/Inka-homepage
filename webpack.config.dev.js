const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackDevServer = require("webpack-dev-server");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/main.js",
    assetModuleFilename: "./assets/images/[name][contenthash][ext]",
  },
  resolve: {
    extensions: [".js"],
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.woff(2)?$/,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][contenthash][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: "./index.html",
      template: "../public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images",
        },
        {
          from: path.resolve(__dirname, "src", "assets/favicon"),
          to: "assets/favicon",
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};
