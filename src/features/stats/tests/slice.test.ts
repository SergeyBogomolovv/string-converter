import {
  decreaseShowWordsCount,
  increaseShowWordsCount,
  initialState,
  setStats,
  statsSlice,
} from "../model/slice";

describe("Stats slice", () => {
  it("should return empty state", () => {
    const state = statsSlice.reducer(undefined, { type: undefined });
    expect(state).toEqual(initialState);
  });

  it("should set stats", () => {
    const stats = {
      wordsCount: 12,
      charsCount: 144,
      mostUsedWords: ["wer"],
    };
    const action = setStats(stats);
    const state = statsSlice.reducer(initialState, action);
    expect(state.stats).toEqual(stats);
  });

  it("should increase showWordsCount", () => {
    const action = increaseShowWordsCount();
    const state = statsSlice.reducer(initialState, action);
    expect(state.showWordsCount).toEqual(initialState.showWordsCount + 1);
  });

  it("should decrease showWordsCount", () => {
    const action = decreaseShowWordsCount();
    const state = statsSlice.reducer(initialState, action);
    expect(state.showWordsCount).toEqual(initialState.showWordsCount - 1);
  });
});
