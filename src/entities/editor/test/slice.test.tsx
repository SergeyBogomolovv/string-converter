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
    const action = setEditMode(true);
    const state = editorSlice.reducer(initialState, action);
    expect(state.editMode).toEqual(true);
  });

  it("should change value", () => {
    const action = setValue("новое значение");
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

    const action = setHighlighted(highlighted);
    const state = editorSlice.reducer(initialState, action);
    expect(state.highlighted).toEqual(highlighted);
  });

  it("should change searchTarget", () => {
    const action = setSearchTarget("поисковая фраза");
    const state = editorSlice.reducer(initialState, action);
    expect(state.searchTarget).toEqual("поисковая фраза");
  });
});
