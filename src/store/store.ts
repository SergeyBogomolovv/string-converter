import editorReducer from "@/entities/editor";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
