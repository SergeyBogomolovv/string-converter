import { StatCard } from "@/entities/stat-card";
import { useAppSelector } from "@/shared/store/hooks";
import { Stack } from "@mui/material";
import { mostUsedWordsSelector } from "../model/selectors";

export const MostUsedWords = () => {
  const mostUsedWords = useAppSelector(mostUsedWordsSelector);

  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", gap: "1rem" }}>
      {mostUsedWords?.map((stats) => (
        <StatCard
          key={stats.word}
          count={stats.count}
          word={stats.word}
          variations={stats.variations}
        />
      ))}
    </Stack>
  );
};
