import { selectMode, Mode as ModeEnum } from "@/entities/editor";
import { Generator } from "@/features/generator";
import { Replace } from "@/features/replace";
import { Stats } from "@/features/stats";
import { useAppSelector } from "@/shared/store/hooks";
import { Skeleton } from "@mui/material";
import { Suspense } from "react";

export const Mode = () => {
  const mode = useAppSelector(selectMode);

  return (
    <Suspense fallback={<Skeleton variant="rounded" height={118} />}>
      {mode === ModeEnum.generate && <Generator />}
      {mode === ModeEnum.replace && <Replace />}
      {mode === ModeEnum.sort && <div></div>}
      {mode === ModeEnum.stats && <Stats />}
    </Suspense>
  );
};
