import { Stack } from "@mui/material";
import { WordsCount } from "./words-count";
import { MostUsedWords } from "./most-used-words";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setStats } from "../model/slice";
import { useEffect, useCallback } from "react";
import { textCounter } from "@/shared/utils/textcounter";
import { selectShowWordsCount } from "../model/selectors";
import { selectEditorValue } from "@/entities/editor";
import { debouncer } from "@/shared/utils/debouncer";

const Stats = () => {
  const showWordsCount = useAppSelector(selectShowWordsCount);

  const count = useCallback(
    textCounter({
      mostUsedWords: showWordsCount,
      wordsCount: true,
      charsCount: true,
    }),
    [showWordsCount]
  );

  const dispatch = useAppDispatch();
  const value = useAppSelector(selectEditorValue);

  const debouncedSetStats = useCallback(
    debouncer((value: string) => dispatch(setStats(count(value))), 200),
    [count, dispatch]
  );

  useEffect(() => {
    debouncedSetStats(value);
  }, [value, debouncedSetStats]);

  return (
    <Stack spacing={2}>
      <WordsCount />
      <MostUsedWords />
    </Stack>
  );
};

export default Stats;
