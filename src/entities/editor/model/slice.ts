import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Mode {
  stats = "stats",
  replace = "replace",
  generate = "generate",
  sort = "sort",
  none = "none",
}

export interface EditorState {
  value: string;
  searchTarget: string;
  editMode: boolean;
  mode: Mode;
  undoList: string[];
}

export const initialState: EditorState = {
  value: "",
  searchTarget: "",
  editMode: true,
  mode: Mode.none,
  undoList: [],
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.undoList.push(state.value);
      state.value = action.payload;
    },

    setSearchTarget: (state, action: PayloadAction<string>) => {
      state.searchTarget = action.payload;
    },

    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.editMode = action.payload;
    },

    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload ? action.payload : Mode.none;
    },

    undo: (state) => {
      if (!state.undoList.length) return;
      if (state.undoList.length > 150) {
        state.undoList = state.undoList.slice(state.undoList.length - 150);
      }
      state.value = state.undoList.pop();
    },
  },
});

export const { setValue, setSearchTarget, setEditMode, setMode, undo } =
  editorSlice.actions;

export default editorSlice.reducer;
