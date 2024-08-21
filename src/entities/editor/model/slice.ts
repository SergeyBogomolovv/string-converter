import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  value: string;
  searchTarget: string;
  editMode: boolean;
}

export const initialState: EditorState = {
  value: "",
  searchTarget: "",
  editMode: true,
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
  },
});

export const { setValue, setSearchTarget, setEditMode } = editorSlice.actions;

export default editorSlice.reducer;
