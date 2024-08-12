import { merge } from "webpack-merge";
import commonConfig from "./common";
import { Configuration } from "webpack";

const testConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

export default merge(commonConfig, testConfig);
