import "webpack-dev-server";
import { Configuration } from "webpack";
import { buildDevServer } from "./devserver";
import { buildLoaders } from "./loaders";
import { buildPlugins } from "./plugins";
import { buildResolvers } from "./resolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): Configuration {
  const isDev = options.mode === "development";
  return {
    mode: options.mode,
    entry: options.paths.entry,
    optimization: {
      runtimeChunk: "single",
    },
    devtool: isDev && "inline-source-map",
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
