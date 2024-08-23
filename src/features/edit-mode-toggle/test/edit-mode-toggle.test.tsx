import { renderWithRedux } from "@/shared/store";
import { EditModeToggle } from "../ui/edit-mode-toggle";
import { fireEvent } from "@testing-library/react";
import { act } from "react";

describe("EditModeToggle", () => {
  it("should render correctly", () => {
    const { getByTestId } = renderWithRedux(<EditModeToggle />);
    expect(getByTestId("editmodetoggleel")).toBeInTheDocument();
  });

  it("should toggle edit mode", async () => {
    const { getByTestId, store } = renderWithRedux(<EditModeToggle />);

    const button = getByTestId("editmodetoggleel");

    expect(store.getState().editor.editMode).toBe(true);
    await act(async () => fireEvent.click(button));
    expect(store.getState().editor.editMode).toBe(false);
    await act(async () => fireEvent.click(button));
    expect(store.getState().editor.editMode).toBe(true);
  });
});
