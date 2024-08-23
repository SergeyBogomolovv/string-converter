import { renderWithRedux } from "@/shared/store";
import { Toolbar } from "../../../widgets/toolbar/ui/toolbar";
import { fireEvent } from "@testing-library/react";
import { Mode } from "@/entities/editor";
import { act } from "react";

describe("Mode select component", () => {
  it("should change mode", async () => {
    const { getByTestId, store } = renderWithRedux(<Toolbar />);
    const statsModeBtn = getByTestId("statsModeBtn");
    const replaceModeBtn = getByTestId("replaceModeBtn");
    const generateModeBtn = getByTestId("generateModeBtn");
    const sortModeBtn = getByTestId("sortModeBtn");
    await act(async () => fireEvent.click(statsModeBtn));
    expect(store.getState().editor.mode).toBe(Mode.stats);
    await act(async () => fireEvent.click(replaceModeBtn));
    expect(store.getState().editor.mode).toBe(Mode.replace);
    await act(async () => fireEvent.click(generateModeBtn));
    expect(store.getState().editor.mode).toBe(Mode.generate);
    await act(async () => fireEvent.click(sortModeBtn));
    expect(store.getState().editor.mode).toBe(Mode.sort);
  });
});
