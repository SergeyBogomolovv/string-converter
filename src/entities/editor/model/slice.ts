import { Highlited } from "@/shared/utils/highliter";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  value: string;
  highlighted: Highlited;
  searchTarget: string;
}

const initialState: EditorState = {
  value: "",
  highlighted: [],
  searchTarget: "",
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
  },
});

export const { setValue, setHighlighted, setSearchTarget } =
  editorSlice.actions;

export default editorSlice.reducer;
