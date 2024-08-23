import { renderWithRedux } from "@/shared/store";
import { UndoButton } from "../ui/undo-button";
import { EditorState, Mode } from "@/entities/editor";
import { fireEvent } from "@testing-library/react";
import { act } from "react";

describe("Undo button component", () => {
  it("should undo correctly", async () => {
    const preloadedState: { editor: EditorState } = {
      editor: {
        mode: Mode.none,
        editMode: false,
        searchTarget: "",
        undoList: ["value before"],
        value: "some value",
      },
    };
    const { getByTestId, store } = renderWithRedux(<UndoButton />, {
      preloadedState,
    });

    const undoBtn = getByTestId("undoBtn");

    await act(async () => fireEvent.click(undoBtn));

    expect(store.getState().editor.value).toBe("value before");
    expect(store.getState().editor.undoList).toHaveLength(0);
  });
});
