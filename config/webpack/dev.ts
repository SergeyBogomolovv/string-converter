import { merge } from "webpack-merge";
import commonConfig from "./common";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { Configuration } from "webpack";

const devConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    static: "./dist",
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

export default merge(commonConfig, devConfig);
