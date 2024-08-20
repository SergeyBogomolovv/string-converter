export {
  default,
  setValue,
  setHighlighted,
  setEditMode,
  setSearchTarget,
} from "./model/slice";

export {
  selectEditMode,
  selectEditorValue,
  selectHighlited,
  selectSearchTarget,
} from "./model/selectors";

export type { EditorState } from "./model/slice";
