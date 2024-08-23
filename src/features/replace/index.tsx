import { lazy } from "react";

export const Replace = lazy(
  () => import(/* webpackPrefetch: true */ "./ui/replace")
);
