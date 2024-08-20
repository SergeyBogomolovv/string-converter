import { Stack } from "@mui/material";
import { WordsCount } from "./words-count";
import { MostUsedWords } from "./most-used-words";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setStats } from "../model/slice";
import { useEffect } from "react";
import { textCounter } from "@/shared/utils/textcounter";
import { showWordsCountSelector } from "../model/selectors";

export const Stats = () => {
  const showWordsCount = useAppSelector(showWordsCountSelector);

  const count = textCounter({
    mostUsedWords: showWordsCount,
    wordsCount: true,
    charsCount: true,
  });

  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.editor.value);

  useEffect(() => {
    dispatch(setStats(count(value)));
  }, [value, count]);

  return (
    <Stack spacing={2}>
      <WordsCount />
      <MostUsedWords />
    </Stack>
  );
};
