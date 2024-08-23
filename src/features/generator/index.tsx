import { lazy } from "react";

export const Generator = lazy(
  () => import(/* webpackPrefetch: true */ "./ui/generator")
);
