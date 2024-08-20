import { RootState } from "@/shared/store";

export const showWordsCountSelector = (state: RootState) =>
  state.stats.showWordsCount;

export const mostUsedWordsSelector = (state: RootState) =>
  state.stats.stats.mostUsedWords;

export const statsSelector = (state: RootState) => state.stats.stats;
