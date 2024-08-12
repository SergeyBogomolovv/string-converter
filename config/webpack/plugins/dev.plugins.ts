import type { Configuration } from "webpack";
import type { Paths } from "../types/types";
import ESLintPlugin from "eslint-webpack-plugin";
import StylelintPlugin from "stylelint-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import basePlugins from "./base.plugins";
import { ProgressPlugin } from "webpack";

export default function devPlugins(paths: Paths): Configuration["plugins"] {
  return [
    ...basePlugins(paths),
    new ProgressPlugin(),
    new ReactRefreshWebpackPlugin(),
    new ESLintPlugin(),
    new StylelintPlugin(),
  ];
}
