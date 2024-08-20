import { RootState } from "@/shared/store";

export const showWordsCountSelector = (state: RootState) =>
  state.stats.showWordsCount;

export const mostUsedWordsSelector = (state: RootState) =>
  state.stats.stats.mostUsedWords;

export const wordsCountSelector = (state: RootState) =>
  state.stats.stats.wordsCount;

export const charsCountSelector = (state: RootState) =>
  state.stats.stats.charsCount;
