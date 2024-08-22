import {
  selectEditMode,
  selectEditorValue,
  selectMode,
  selectSearchTarget,
} from "../model/selectors";
import { EditorState, Mode } from "../model/slice";

describe("Editor Selectors", () => {
  const state: { editor: EditorState } = {
    editor: {
      editMode: true,
      value: "rewark",
      searchTarget: "target",
      mode: Mode.generate,
    },
  };

  it("should select value", () => {
    expect(selectEditorValue(state)).toEqual(state.editor.value);
  });

  it("should select editMode", () => {
    expect(selectEditMode(state)).toEqual(state.editor.editMode);
  });

  it("should select searchTarget", () => {
    expect(selectSearchTarget(state)).toEqual(state.editor.searchTarget);
  });

  it("should select mode", () => {
    expect(selectMode(state)).toEqual(state.editor.mode);
  });
});
