import { StatsState } from "./slice";

export const selectShowWordsCount = (state: { stats: StatsState }) =>
  state.stats.showWordsCount;

export const selectMostUsedWords = (state: { stats: StatsState }) =>
  state.stats.stats.mostUsedWords;

export const selectWordsCount = (state: { stats: StatsState }) =>
  state.stats.stats.wordsCount;

export const selectCharsCount = (state: { stats: StatsState }) =>
  state.stats.stats.charsCount;
