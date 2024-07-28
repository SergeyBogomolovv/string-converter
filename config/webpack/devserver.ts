import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer({ port }: BuildOptions): Configuration {
  return {
    port,
    static: "./dist",
    historyApiFallback: true,
    hot: true,
  };
}
