import { lazy } from "react";

export const Stats = lazy(
  () => import(/* webpackPrefetch: true */ "./ui/stats")
);

export { default } from "./model/slice";
