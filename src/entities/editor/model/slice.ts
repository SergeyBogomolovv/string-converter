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
}

export const initialState: EditorState = {
  value: "",
  searchTarget: "",
  editMode: true,
  mode: Mode.none,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
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
  },
});

export const { setValue, setSearchTarget, setEditMode, setMode } =
  editorSlice.actions;

export default editorSlice.reducer;
