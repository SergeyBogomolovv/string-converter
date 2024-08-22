import { selectMode, Mode as ModeEnum } from "@/entities/editor";
import { Stats } from "@/features/stats";
import { useAppSelector } from "@/shared/store/hooks";
import { Suspense } from "react";

export const Mode = () => {
  const mode = useAppSelector(selectMode);

  return (
    <Suspense fallback={<div>loading...</div>}>
      {mode === ModeEnum.generate && <div></div>}
      {mode === ModeEnum.replace && <div></div>}
      {mode === ModeEnum.sort && <div></div>}
      {mode === ModeEnum.stats && <Stats />}
    </Suspense>
  );
};
