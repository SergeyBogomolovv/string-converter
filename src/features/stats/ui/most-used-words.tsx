import { StatCard } from "@/entities/stat-card";
import { useAppSelector } from "@/shared/store/hooks";
import { Stack } from "@mui/material";
import { selectMostUsedWords } from "../model/selectors";

export const MostUsedWords = () => {
  const mostUsedWords = useAppSelector(selectMostUsedWords);

  return (
    <Stack data-testid="mostusedwordscontainerel" spacing={2}>
      {mostUsedWords.map((stats) => (
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
