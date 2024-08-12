import type { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import baseLoaders from "./base.loaders";

export default [
  ...baseLoaders,
  {
    test: /\.module\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
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
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  },
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
    exclude: /node_modules/,
  },
] satisfies ModuleOptions["rules"];
