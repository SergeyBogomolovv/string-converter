import { renderWithRedux } from "@/shared/store";
import { TextCount } from "../ui/text-count";
import { StatsState } from "../model/slice";

describe("Text count", () => {
  it("should render correctly", () => {
    const preloadedState: { stats: StatsState } = {
      stats: {
        stats: { wordsCount: 6, charsCount: 7, mostUsedWords: [] },
        showWordsCount: 5,
      },
    };
    const { getByTestId } = renderWithRedux(<TextCount />, { preloadedState });
    const wordsCountEl = getByTestId("wordscountel");
    const charsCountEl = getByTestId("charscountel");

    expect(wordsCountEl.textContent).toBe(
      `Количество слов: ${preloadedState.stats.stats.wordsCount}`
    );

    expect(charsCountEl.textContent).toBe(
      `Количество букв: ${preloadedState.stats.stats.charsCount}`
    );
  });
});
