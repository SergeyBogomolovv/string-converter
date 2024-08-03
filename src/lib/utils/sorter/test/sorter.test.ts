import { sorter } from "../sorter";
import { defaultCase, differentLangsCase, dirtyCase } from "./mocks";

describe("Sorter", () => {
  test("default", () => {
    expect(sorter(defaultCase.string)).toEqual(defaultCase.expected);
  });

  test("dirty", () => {
    expect(sorter(dirtyCase.string)).toEqual(dirtyCase.expected);
  });

  test("different langs", () => {
    expect(sorter(differentLangsCase.string)).toEqual(
      differentLangsCase.expected
    );
  });
});
