import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import editorReducer, { EditorState } from "@/entities/editor";

export interface RootState {
  editor: EditorState;
}

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: EnhancedStore<RootState>;
}

export const renderWithRedux = (
  children: ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { editor: editorReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );

  return { store, ...render(children, { wrapper: Wrapper, ...renderOptions }) };
};
