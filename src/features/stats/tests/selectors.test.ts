import {
  selectCharsCount,
  selectMostUsedWords,
  selectShowWordsCount,
  selectWordsCount,
} from "../model/selectors";
import { StatsState } from "../model/slice";

describe("Stats selectors", () => {
  const state: { stats: StatsState } = {
    stats: {
      showWordsCount: 144,
      stats: {
        wordsCount: 12,
        charsCount: 13,
        mostUsedWords: [{ word: "weqwe", count: 12, variations: [] }],
      },
    },
  };

  it("should select wordsCount", () => {
    expect(selectWordsCount(state)).toEqual(state.stats.stats.wordsCount);
  });

  it("should select charsCount", () => {
    expect(selectCharsCount(state)).toEqual(state.stats.stats.charsCount);
  });

  it("should select showMostUsedWordsCount", () => {
    expect(selectShowWordsCount(state)).toEqual(state.stats.showWordsCount);
  });

  it("should select mostUsedWords", () => {
    expect(selectMostUsedWords(state)).toEqual(state.stats.stats.mostUsedWords);
  });
});
