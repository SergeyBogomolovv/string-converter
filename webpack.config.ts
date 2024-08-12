import path from "path";
import dotenv from "dotenv";
import { devConfig, prodConfig, Paths } from "./config/webpack";
dotenv.config();

const paths: Paths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  dist: path.resolve(__dirname, "dist"),
  src: path.resolve(__dirname, "src"),
  public: path.resolve(__dirname, "public"),
};

export default () => {
  return process.env.MODE === "development"
    ? devConfig({ paths, port: Number(process.env.PORT) })
    : prodConfig({ paths });
};
