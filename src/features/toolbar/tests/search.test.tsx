import { renderWithRedux } from "@/shared/store";
import { SearchInput } from "../ui/search-input";
import { EditorState } from "@/entities/editor";
import { fireEvent } from "@testing-library/react";

describe("Search input", () => {
  it("should render correctly", () => {
    const { getByTestId } = renderWithRedux(<SearchInput />);
    expect(getByTestId("search-inputel")).toBeInTheDocument();
  });

  it("should be disabled during editMode", () => {
    const { getByTestId } = renderWithRedux(<SearchInput />);
    expect(getByTestId("search-inputel")).toBeDisabled();
  });

  it("should search correctly", () => {
    const preloadedState: { editor: EditorState } = {
      editor: {
        searchTarget: "",
        value: "some test value",
        highlighted: ["some test value"],
        editMode: false,
      },
    };

    const { getByTestId, store } = renderWithRedux(<SearchInput />, {
      preloadedState,
    });

    const input = getByTestId("search-inputel") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test" } });

    expect(store.getState().editor.searchTarget).toEqual("test");
    expect(store.getState().editor.highlighted).toEqual([
      "some ",
      <mark key={1} style={{ backgroundColor: "yellow", color: "black" }}>
        test
      </mark>,
      " value",
    ]);
  });
});
