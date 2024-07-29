import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {
  Configuration,
  HotModuleReplacementPlugin,
  ProgressPlugin,
} from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ESLintPlugin from "eslint-webpack-plugin";
import StylelintPlugin from "stylelint-webpack-plugin";

export function buildPlugins({
  mode,
  paths,
}: BuildOptions): Configuration["plugins"] {
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, "favicon.ico"),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new ESLintPlugin(),
    new StylelintPlugin(),
  ];
  if (mode === "development") {
    return [...plugins, new ProgressPlugin(), new ReactRefreshWebpackPlugin()];
  }
  if (mode === "production") {
    return [...plugins, new MiniCssExtractPlugin(), new BundleAnalyzerPlugin()];
  }
}
