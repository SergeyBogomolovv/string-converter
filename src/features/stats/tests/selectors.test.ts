import { selectCharsCount, selectWordsCount } from "../model/selectors";

describe("Stats selectors", () => {
  it("should select wordsCount", () => {
    const wordsCount = 12;
    expect(selectWordsCount({ editor: { wordsCount } })).toEqual(wordsCount);
  });
  it("should select charsCount", () => {
    const charsCount = 12;
    expect(selectCharsCount({ editor: { charsCount } })).toEqual(charsCount);
  });
  it("should select mostUsedWords", () => {});
  it("should select showMostUsedWordsCount", () => {});
});
