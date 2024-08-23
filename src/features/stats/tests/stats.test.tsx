import { renderWithRedux } from "@/shared/store";
import { StatsState } from "../model/slice";
import Stats from "../ui/stats";
import { EditorState, Mode } from "@/entities/editor";

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

  it("should render correctly", () => {
    const { getByTestId, getAllByTestId } = renderWithRedux(<Stats />, {
      preloadedState,
    });

    const container = getByTestId("mostusedwordscontainerel");
    const cards = getAllByTestId("statcardel");

    expect(container).toBeInTheDocument();
    expect(cards).toHaveLength(3);
  });

  it("should set most used words correctly", () => {
    const { store } = renderWithRedux(<Stats />, {
      preloadedState,
    });

    expect(store.getState().stats.stats.mostUsedWords).toEqual(
      expectedMostUsedWordsCount
    );
  });
});
