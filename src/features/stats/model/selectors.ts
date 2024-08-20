import { RootState } from "@/shared/store";

export const selectShowWordsCount = (state: RootState) =>
  state.stats.showWordsCount;

export const selectMostUsedWords = (state: RootState) =>
  state.stats.stats.mostUsedWords;

export const selectWordsCount = (state: RootState) =>
  state.stats.stats.wordsCount;

export const selectCharsCount = (state: RootState) =>
  state.stats.stats.charsCount;
