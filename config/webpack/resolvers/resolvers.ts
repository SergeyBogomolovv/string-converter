import type { Configuration } from "webpack";
import type { Paths } from "../types/types";

export default function resolvers(paths: Paths): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: { "@": paths.src },
  };
}
