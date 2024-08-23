import { renderWithRedux } from "@/shared/store";
import { StatsState } from "../model/slice";
import Stats from "../ui/stats";
import { EditorState, Mode } from "@/entities/editor";
import { act } from "react";

describe("Stats component", () => {
  let preloadedState: { stats: StatsState; editor: EditorState };
  const expectedMostUsedWordsCount = [
    {
      word: "Third",
      variations: ["third", "Third"],
      count: 4,
    },
    { word: "Test", variations: ["test", "TEST"], count: 3 },
    {
      word: "Seconde",
      variations: ["seconde", "sEconde"],
      count: 2,
    },
  ];

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    preloadedState = {
      editor: {
        value: "test test TEST seconde sEconde third third Third Third",
        editMode: false,
        searchTarget: "",
        mode: Mode.generate,
        undoList: [],
      },
      stats: {
        showWordsCount: 3,
        stats: {
          wordsCount: 8,
          charsCount: 6,
          mostUsedWords: [],
        },
      },
    };
  });

  it("should render correctly", async () => {
    const { getByTestId, findAllByTestId } = await act(() =>
      renderWithRedux(<Stats />, {
        preloadedState,
      })
    );

    const container = getByTestId("mostusedwordscontainerel");
    const cards = await findAllByTestId("statcardel");

    await jest.advanceTimersByTimeAsync(200);

    expect(container).toBeInTheDocument();
    expect(cards).toHaveLength(3);
  });

  it("should set most used words correctly", async () => {
    const { store } = await act(() =>
      renderWithRedux(<Stats />, {
        preloadedState,
      })
    );
    await jest.advanceTimersByTimeAsync(200);
    expect(store.getState().stats.stats.mostUsedWords).toEqual(
      expectedMostUsedWordsCount
    );
  });
});
