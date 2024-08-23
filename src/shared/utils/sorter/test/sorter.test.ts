import { sorter } from "../sorter";
import { defaultCase, differentLangsCase } from "./mocks";

describe("Sorter", () => {
  test("default", () => {
    expect(sorter(defaultCase.string)).toEqual(defaultCase.expected);
  });

  test("different langs", () => {
    expect(sorter(differentLangsCase.string)).toEqual(
      differentLangsCase.expected
    );
  });
});
