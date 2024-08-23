import {
  editorSlice,
  setValue,
  setSearchTarget,
  setEditMode,
  initialState,
  Mode,
} from "../model/slice";

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

  it("should change searchTarget", () => {
    const action = { type: setSearchTarget.type, payload: "поисковая фраза" };
    const state = editorSlice.reducer(initialState, action);
    expect(state.searchTarget).toEqual("поисковая фраза");
  });

  it("should change mode", () => {
    const action = { type: setSearchTarget.type, payload: Mode.replace };
    const state = editorSlice.reducer(initialState, action);
    expect(state.searchTarget).toEqual(Mode.replace);
  });
});
