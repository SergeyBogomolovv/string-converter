import { RootState } from "@/shared/store";

export const selectEditorValue = (state: RootState) => state.editor.value;

export const selectEditMode = (state: RootState) => state.editor.editMode;

export const selectSearchTarget = (state: RootState) =>
  state.editor.searchTarget;

export const selectHighlited = (state: RootState) => state.editor.highlighted;
