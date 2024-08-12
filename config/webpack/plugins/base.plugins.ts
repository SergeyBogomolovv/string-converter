import type { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { Paths } from "../types/types";

export default function basePlugins(paths: Paths): Configuration["plugins"] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.public, "index.html"),
      favicon: path.resolve(paths.public, "favicon.ico"),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ];
}
