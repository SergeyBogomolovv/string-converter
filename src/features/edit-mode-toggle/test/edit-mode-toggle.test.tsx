import { renderWithRedux } from "@/shared/store";
import { EditModeToggle } from "../ui/edit-mode-toggle";
import { fireEvent } from "@testing-library/react";

describe("EditModeToggle", () => {
  it("should render correctly", () => {
    const { getByTestId } = renderWithRedux(<EditModeToggle />);
    expect(getByTestId("editmodetoggleel")).toBeInTheDocument();
  });

  it("should toggle edit mode", () => {
    const { getByTestId, store } = renderWithRedux(<EditModeToggle />);

    const button = getByTestId("editmodetoggleel");

    expect(store.getState().editor.editMode).toBe(true);

    fireEvent.click(button);
    expect(store.getState().editor.editMode).toBe(false);

    fireEvent.click(button);
    expect(store.getState().editor.editMode).toBe(true);
  });
});
