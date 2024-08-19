import { Highlited } from "@/shared/utils/highliter";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  value: string;
  highlighted: Highlited;
  searchTarget: string;
  editMode: boolean;
}

const initialState: EditorState = {
  value: "",
  highlighted: [],
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
    setHighlighted: (state, action: PayloadAction<Highlited>) => {
      state.highlighted = action.payload;
    },
    setSearchTarget: (state, action: PayloadAction<string>) => {
      state.searchTarget = action.payload;
    },
    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.editMode = action.payload;
    },
  },
});

export const { setValue, setHighlighted, setSearchTarget, setEditMode } =
  editorSlice.actions;

export default editorSlice.reducer;
