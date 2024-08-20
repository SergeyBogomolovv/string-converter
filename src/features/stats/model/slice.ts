import { TextCounterResult } from "@/shared/utils/textcounter";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StatsState {
  showWordsCount: number;
  stats: TextCounterResult;
}

const initialState: StatsState = {
  showWordsCount: 5,
  stats: { wordsCount: 0, charsCount: 0, mostUsedWords: [] },
};

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<TextCounterResult>) => {
      state.stats = action.payload;
    },
    increaseShowWordsCount: (state) => {
      if (state.showWordsCount === 15) return;
      state.showWordsCount++;
    },
    decreaseShowWordsCount: (state) => {
      if (state.showWordsCount < 1) return;
      state.showWordsCount--;
    },
  },
});

export const { setStats, increaseShowWordsCount, decreaseShowWordsCount } =
  statsSlice.actions;

export default statsSlice.reducer;
