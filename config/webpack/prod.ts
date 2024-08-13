import type { Configuration } from "webpack";
import type { ProdOptions } from "./types/types";
import baseConfig from "./base";
import prodPlugins from "./plugins/prod.plugins";
import prodLoaders from "./loaders/prod.loaders";

export default function prodConfig(options: ProdOptions): Configuration {
  return {
    ...baseConfig(options.paths),
    mode: "production",
    plugins: prodPlugins(options.paths, options.analyze),
    module: {
      rules: prodLoaders,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: "single",
    },
  };
}
