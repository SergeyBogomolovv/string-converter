import {
  editorSlice,
  setValue,
  setHighlighted,
  setSearchTarget,
  setEditMode,
  initialState,
} from "../model/slice";
import { Highlited } from "@/shared/utils/highliter";

describe("editorSlice", () => {
  it("should return default state", () => {
    const state = editorSlice.reducer(undefined, { type: undefined });
    expect(state).toEqual(initialState);
  });

  it("should toggle editMode", () => {
    const action = { type: setEditMode.type, payload: true };
    const state = editorSlice.reducer(initialState, action);
    expect(state.editMode).toEqual(true);
  });

  it("should change value", () => {
    const action = { type: setValue.type, payload: "новое значение" };
    const state = editorSlice.reducer(initialState, action);
    expect(state.value).toEqual("новое значение");
  });

  it("should change highlighted", () => {
    const highlighted: Highlited = [
      "часть текста",
      <mark key={1} style={{ backgroundColor: "yellow", color: "black" }}>
        цель
      </mark>,
      "другая часть текста",
    ];

    const action = { type: setHighlighted.type, payload: highlighted };
    const state = editorSlice.reducer(initialState, action);
    expect(state.highlighted).toEqual(highlighted);
  });

  it("should change searchTarget", () => {
    const action = { type: setSearchTarget.type, payload: "поисковая фраза" };
    const state = editorSlice.reducer(initialState, action);
    expect(state.searchTarget).toEqual("поисковая фраза");
  });
});
