import editorReducer from "@/entities/editor";
import statsReducer from "@/features/stats";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    stats: statsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
