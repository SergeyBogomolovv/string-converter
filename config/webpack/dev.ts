import "webpack-dev-server";
import type { Configuration } from "webpack";
import type { DevOptions } from "./types/types";
import baseConfig from "./base";
import devPlugins from "./plugins/dev.plugins";
import devLoaders from "./loaders/dev.loaders";

export default function devConfig(options: DevOptions): Configuration {
  return {
    ...baseConfig(options.paths),
    mode: "development",
    devtool: "inline-source-map",
    plugins: devPlugins(options.paths),
    module: {
      rules: devLoaders,
    },
    devServer: {
      port: options.port,
      static: "./dist",
      historyApiFallback: true,
      hot: true,
    },
  };
}
