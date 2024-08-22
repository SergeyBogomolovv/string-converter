import { Stack } from "@mui/material";
import { WordsCount } from "./words-count";
import { MostUsedWords } from "./most-used-words";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setStats } from "../model/slice";
import { useEffect } from "react";
import { textCounter } from "@/shared/utils/textcounter";
import { selectShowWordsCount } from "../model/selectors";
import { selectEditorValue } from "@/entities/editor";

const Stats = () => {
  const showWordsCount = useAppSelector(selectShowWordsCount);

  const count = textCounter({
    mostUsedWords: showWordsCount,
    wordsCount: true,
    charsCount: true,
  });

  const dispatch = useAppDispatch();
  const value = useAppSelector(selectEditorValue);

  //TODO: debounce
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

export default Stats;
