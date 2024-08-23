import { renderWithRedux } from "@/shared/store";
import { Toolbar } from "../../../widgets/toolbar/ui/toolbar";
import { fireEvent } from "@testing-library/react";
import { Mode } from "@/entities/editor";

describe("Mode select component", () => {
  it("should change mode", () => {
    const { getByTestId, store } = renderWithRedux(<Toolbar />);
    const statsModeBtn = getByTestId("statsModeBtn");
    const replaceModeBtn = getByTestId("replaceModeBtn");
    const generateModeBtn = getByTestId("generateModeBtn");
    const sortModeBtn = getByTestId("sortModeBtn");

    fireEvent.click(statsModeBtn);
    expect(store.getState().editor.mode).toBe(Mode.stats);

    fireEvent.click(replaceModeBtn);
    expect(store.getState().editor.mode).toBe(Mode.replace);

    fireEvent.click(generateModeBtn);
    expect(store.getState().editor.mode).toBe(Mode.generate);

    fireEvent.click(sortModeBtn);
    expect(store.getState().editor.mode).toBe(Mode.sort);
  });
});
