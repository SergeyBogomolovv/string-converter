import {
  editorSlice,
  setValue,
  setHighlighted,
  setSearchTarget,
  setEditMode,
} from "../model/slice";
import type { EditorState } from "../model/slice";
import { Highlited } from "@/shared/utils/highliter";

describe("editorSlice", () => {
  const initialState: EditorState = {
    value: "",
    highlighted: [],
    searchTarget: "",
    editMode: true,
  };

  it("должен вернуть начальное состояние", () => {
    const state = editorSlice.reducer(undefined, { type: undefined });
    expect(state).toEqual(initialState);
  });

  it("должен установить editMode при вызове setEditMode", () => {
    const action = setEditMode(true);
    const state = editorSlice.reducer(initialState, action);
    expect(state.editMode).toEqual(true);
  });

  it("должен установить value при вызове setValue", () => {
    const action = setValue("новое значение");
    const state = editorSlice.reducer(initialState, action);
    expect(state.value).toEqual("новое значение");
  });

  it("должен установить highlighted при вызове setHighlighted", () => {
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

  it("должен установить searchTarget при вызове setSearchTarget", () => {
    const action = setSearchTarget("поисковая фраза");
    const state = editorSlice.reducer(initialState, action);
    expect(state.searchTarget).toEqual("поисковая фраза");
  });
});
