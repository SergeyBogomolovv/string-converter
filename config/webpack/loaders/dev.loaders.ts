import type { ModuleOptions } from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript";
import baseLoaders from "./base.loaders";

export default [
  ...baseLoaders,
  {
    test: /\.module\.css$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            localIdentName: "[name]__[local]___[hash:base64:5]",
          },
        },
      },
    ],
  },
  {
    test: /\.css$/i,
    exclude: /\.module\.css$/i,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
          }),
        },
      },
    ],
    exclude: /node_modules/,
  },
] satisfies ModuleOptions["rules"];
