import type { Configuration } from "webpack";
import type { Paths } from "../types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import basePlugins from "./base.plugins";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default function prodPlugins(
  paths: Paths,
  analyze: boolean
): Configuration["plugins"] {
  return [
    ...basePlugins(paths),
    new MiniCssExtractPlugin(),
    analyze && new BundleAnalyzerPlugin(),
  ].filter(Boolean);
}
