import { renderWithRedux } from "@/shared/store";
import { EditModeToggle } from "../ui/edit-mode-toggle";
import { fireEvent } from "@testing-library/react";
import { act } from "react";
import { Mode } from "@/entities/editor";

describe("EditModeToggle", () => {
  it("should render correctly", () => {
    const { getByTestId } = renderWithRedux(<EditModeToggle />);
    expect(getByTestId("editmodetoggleel")).toBeInTheDocument();
    expect(getByTestId("editmodetoggleel")).toBeDisabled();
  });

  it("should toggle edit mode", async () => {
    const { getByTestId, store } = renderWithRedux(<EditModeToggle />, {
      preloadedState: {
        editor: {
          undoList: [],
          value: "some value",
          editMode: true,
          mode: Mode.none,
          searchTarget: "",
        },
      },
    });

    const button = getByTestId("editmodetoggleel");

    expect(store.getState().editor.editMode).toBe(true);
    await act(async () => fireEvent.click(button));
    expect(store.getState().editor.editMode).toBe(false);
    await act(async () => fireEvent.click(button));
    expect(store.getState().editor.editMode).toBe(true);
  });
});
