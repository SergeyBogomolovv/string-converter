import { renderWithRedux } from "@/shared/store";
import { StatsState } from "../model/slice";
import { WordsCount } from "../ui/words-count";
import { fireEvent } from "@testing-library/react";

describe("Most used words Count", () => {
  let preloadedState: { stats: StatsState };

  beforeEach(() => {
    preloadedState = {
      stats: {
        showWordsCount: 5,
        stats: { wordsCount: 8, charsCount: 6, mostUsedWords: [] },
      },
    };
  });

  it("should correctly show count", () => {
    const { getByTestId } = renderWithRedux(<WordsCount />, {
      preloadedState,
    });
    expect(Number(getByTestId("showwordscountel").textContent)).toBe(
      preloadedState.stats.showWordsCount
    );
  });

  it("should correctly increase count", () => {
    const { getByTestId, store } = renderWithRedux(<WordsCount />, {
      preloadedState,
    });
    const button = getByTestId("showwordscountincreaseel");
    fireEvent.click(button);
    expect(store.getState().stats.showWordsCount).toBe(
      preloadedState.stats.showWordsCount + 1
    );
  });

  it("should correctly decrease count", () => {
    const { getByTestId, store } = renderWithRedux(<WordsCount />, {
      preloadedState,
    });
    const button = getByTestId("showwordscountdecreaseel");
    fireEvent.click(button);
    expect(store.getState().stats.showWordsCount).toBe(
      preloadedState.stats.showWordsCount - 1
    );
  });
});
