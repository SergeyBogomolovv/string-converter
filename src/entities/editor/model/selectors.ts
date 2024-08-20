import { RootState } from "@/shared/store";

export const getEditorValueSelector = (state: RootState) => state.editor.value;

export const getEditorEditModeSelector = (state: RootState) =>
  state.editor.editMode;

export const getEditorSearchTargetSelector = (state: RootState) =>
  state.editor.searchTarget;

export const getEditorHighlitedSelector = (state: RootState) =>
  state.editor.highlighted;
