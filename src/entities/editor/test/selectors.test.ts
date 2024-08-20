import {
  selectEditMode,
  selectEditorValue,
  selectHighlited,
  selectSearchTarget,
} from "../model/selectors";
import { EditorState } from "../model/slice";

describe("Editor Selectors", () => {
  const state: { editor: EditorState } = {
    editor: {
      editMode: true,
      value: "rewark",
      highlighted: [""],
      searchTarget: "target",
    },
  };

  it("should select value", () => {
    expect(selectEditorValue(state)).toEqual(state.editor.value);
  });

  it("should select editMode", () => {
    expect(selectEditMode(state)).toEqual(state.editor.editMode);
  });

  it("should select highlited", () => {
    expect(selectHighlited(state)).toEqual(state.editor.highlighted);
  });

  it("should select searchTarget", () => {
    expect(selectSearchTarget(state)).toEqual(state.editor.searchTarget);
  });
});
