import type { ModuleOptions } from "webpack";

export default [
  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
        },
      },
    ],
  },
] satisfies ModuleOptions["rules"];
