export { default, setValue, setEditMode, setSearchTarget } from "./model/slice";

export {
  selectEditMode,
  selectEditorValue,
  selectSearchTarget,
} from "./model/selectors";

export type { EditorState } from "./model/slice";
