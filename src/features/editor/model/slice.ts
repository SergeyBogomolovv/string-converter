import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  value: string;
  editMode: boolean;
  height: string;
}

const initialState: EditorState = {
  value: "",
  editMode: true,
  height: "auto",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setHeight: (state, action: PayloadAction<string>) => {
      state.height = action.payload;
    },
    enableEditMode: (state) => {
      state.editMode = true;
    },
    disableEditMode: (state) => {
      state.editMode = true;
    },
  },
});

export const { setValue, enableEditMode, disableEditMode, setHeight } =
  editorSlice.actions;

export default editorSlice.reducer;
