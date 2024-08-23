import { renderWithRedux } from "@/shared/store";
import Sort from "../ui/sort";
import { act } from "react";
import { fireEvent } from "@testing-library/react";
import { EditorState, Mode } from "@/entities/editor";

describe("Sort component", () => {
  it("should sort value", async () => {
    const preloadedState: { editor: EditorState } = {
      editor: {
        editMode: true,
        mode: Mode.sort,
        searchTarget: "",
        value: "Богомолов Грекас, Алеша Попович, Тугарин Змеевич, Some English",
      },
    };

    const { store, getByTestId } = renderWithRedux(<Sort />, {
      preloadedState,
    });
    const sortBtn = getByTestId("sortBtn");

    await act(async () => {
      fireEvent.click(sortBtn);
    });

    expect(store.getState().editor.value).toBe(
      "Some English, Алеша Попович, Богомолов Грекас, Тугарин Змеевич"
    );
  });
});
