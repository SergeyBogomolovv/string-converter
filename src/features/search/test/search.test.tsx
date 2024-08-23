import { renderWithRedux } from "@/shared/store";
import { Search } from "../ui/search";
import { EditorState, Mode } from "@/entities/editor";
import { fireEvent } from "@testing-library/react";
import { act } from "react";

describe("Search input", () => {
  it("should render correctly", () => {
    const { getByTestId } = renderWithRedux(<Search />);
    expect(getByTestId("search-inputel")).toBeInTheDocument();
  });

  it("should be disabled during editMode", () => {
    const { getByTestId } = renderWithRedux(<Search />);
    expect(getByTestId("search-inputel")).toBeDisabled();
  });

  it("should search correctly", async () => {
    const preloadedState: { editor: EditorState } = {
      editor: {
        searchTarget: "",
        value: "some test value",
        editMode: false,
        mode: Mode.sort,
      },
    };

    const { getByTestId, store } = renderWithRedux(<Search />, {
      preloadedState,
    });

    const input = getByTestId("search-inputel") as HTMLInputElement;

    await act(async () =>
      fireEvent.change(input, { target: { value: "test" } })
    );

    expect(store.getState().editor.searchTarget).toEqual("test");
  });
});
