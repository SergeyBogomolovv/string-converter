import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, RootState } from "../store";

interface RenderWithReduxOptions {
  preloadedState?: Partial<RootState>;
}

export const renderWithRedux = (
  component: ReactElement,
  { preloadedState }: RenderWithReduxOptions = {}
) => {
  const store = createStore(preloadedState);

  return { store, ...render(<Provider store={store}>{component}</Provider>) };
};
