import type { Configuration } from "webpack";
import type { Paths } from "./types/types";
import resolvers from "./resolvers/resolvers";

export default function baseConfig(paths: Paths): Configuration {
  return {
    entry: paths.entry,
    resolve: resolvers(paths),
    optimization: {
      runtimeChunk: "single",
    },
    output: {
      path: paths.dist,
      filename: "[name].[contenthash].js",
      clean: true,
    },
  };
}
