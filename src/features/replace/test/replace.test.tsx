import { act, fireEvent } from "@testing-library/react";
import Replace from "../ui/replace";
import { renderWithRedux } from "@/shared/store";
import { EditorState, Mode } from "@/entities/editor";

describe("Replace component", () => {
  it("should replace correctly", async () => {
    const preloadedState: { editor: EditorState } = {
      editor: {
        undoList: [],
        mode: Mode.replace,
        value: "some test value",
        editMode: false,
        searchTarget: "",
      },
    };
    const { getByTestId, store } = renderWithRedux(<Replace />, {
      preloadedState,
    });
    const wordsToReplaceInput = getByTestId("wordsToReplace");
    const replaceInput = getByTestId("replace");
    const replaceBtn = getByTestId("replaceBtn");

    await act(async () => {
      fireEvent.change(wordsToReplaceInput, {
        target: { value: "test, value" },
      });
      fireEvent.change(replaceInput, { target: { value: "new" } });
      fireEvent.click(replaceBtn);
    });

    expect(store.getState().editor.value).toBe("some new new");
  });

  it("should replace empty string correctly", async () => {
    const preloadedState: { editor: EditorState } = {
      editor: {
        undoList: [],
        mode: Mode.replace,
        value: "some test value test",
        editMode: false,
        searchTarget: "",
      },
    };
    const { getByTestId, store } = renderWithRedux(<Replace />, {
      preloadedState,
    });
    const wordsToReplaceInput = getByTestId("wordsToReplace");
    const replaceBtn = getByTestId("replaceBtn");

    await act(async () => {
      fireEvent.change(wordsToReplaceInput, { target: { value: "test" } });
      fireEvent.click(replaceBtn);
    });

    expect(store.getState().editor.value).toBe("some  value ");
  });
});
