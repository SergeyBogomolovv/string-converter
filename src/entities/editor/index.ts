export {
  default,
  setValue,
  setHighlighted,
  setEditMode,
  setSearchTarget,
} from "./model/slice";

export {
  getEditorEditModeSelector,
  getEditorHighlitedSelector,
  getEditorSearchTargetSelector,
  getEditorValueSelector,
} from "./model/selectors";

export type { EditorState } from "./model/slice";
