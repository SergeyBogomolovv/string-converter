import { ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, RootState } from "../store";

interface RenderWithReduxOptions {
  preloadedState?: Partial<RootState>;
}

export const renderWithRedux = (
  component: ReactElement,
  { preloadedState }: RenderWithReduxOptions = {}
): RenderResult => {
  const store = createStore(preloadedState);

  return render(<Provider store={store}>{component}</Provider>);
};
