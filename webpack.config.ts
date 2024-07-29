import "webpack-dev-server";
import path from "path";
import { BuildMode, BuildPlatform, buildWebpack } from "./config/webpack";
import { config } from "dotenv";

interface Environment {
  MODE: BuildMode;
  PORT: number;
  PLATFORM?: BuildPlatform;
}

config({ path: "./.env" });

export default (env: Environment) => {
  const config = buildWebpack({
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "dist"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
      public: path.resolve(__dirname, "public"),
    },
    port: env.PORT || 3000,
    mode: env.MODE || "development",
  });
  return config;
};
