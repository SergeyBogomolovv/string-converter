import type { Configuration } from "webpack";
import type { Paths } from "../types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import basePlugins from "./base.plugins";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default function prodPlugins(paths: Paths): Configuration["plugins"] {
  return [
    ...basePlugins(paths),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin(),
  ];
}
