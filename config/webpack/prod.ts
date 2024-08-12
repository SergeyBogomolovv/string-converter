import { merge } from "webpack-merge";
import commonConfig from "./common";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";

const prodConfig: Configuration = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
};

export default merge(commonConfig, prodConfig);
