import { EditorState } from "./slice";

export const selectEditorValue = (state: { editor: EditorState }) =>
  state.editor.value;

export const selectEditMode = (state: { editor: EditorState }) =>
  state.editor.editMode;

export const selectSearchTarget = (state: { editor: EditorState }) =>
  state.editor.searchTarget;

export const selectMode = (state: { editor: EditorState }) => state.editor.mode;
