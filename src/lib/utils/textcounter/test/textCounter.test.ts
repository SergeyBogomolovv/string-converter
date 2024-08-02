import { textCounter } from "../textCounter";
import { simpleText, textWithReccurings, textWithSymbols } from "./mocks";

describe("TextCounter", () => {
  test("check with simpleText", () => {
    const stats = textCounter(simpleText.text, {
      charsCount: true,
      mostUsedWords: true,
    });
    expect(stats.charsCount).toEqual(simpleText.stats.charsCount);
    expect(stats.wordsCount).toEqual(simpleText.stats.wordsCount);
    expect(stats.mostUsedWords).toEqual(simpleText.stats.mostUsedWords);
  });

  test("check with lot of symbols", () => {
    const stats = textCounter(textWithSymbols.text, {
      charsCount: true,
      mostUsedWords: true,
    });
    expect(stats.charsCount).toEqual(textWithSymbols.stats.charsCount);
    expect(stats.wordsCount).toEqual(textWithSymbols.stats.wordsCount);
    expect(stats.mostUsedWords).toEqual(textWithSymbols.stats.mostUsedWords);
  });

  test("check with reccurings", () => {
    const stats = textCounter(textWithReccurings.text, {
      charsCount: true,
      mostUsedWords: true,
    });
    expect(stats.charsCount).toEqual(textWithReccurings.stats.charsCount);
    expect(stats.wordsCount).toEqual(textWithReccurings.stats.wordsCount);
    expect(stats.mostUsedWords).toEqual(textWithReccurings.stats.mostUsedWords);
  });

  test("check most used words as number", () => {
    const stats = textCounter(textWithReccurings.text, {
      charsCount: false,
      wordsCount: false,
      mostUsedWords: 3,
    });
    expect(stats.mostUsedWords).toEqual(
      textWithReccurings.stats.mostUsedWords.slice(0, 3)
    );
  });

  test("check most used words as zero", () => {
    const stats = textCounter(textWithReccurings.text, {
      charsCount: false,
      wordsCount: false,
      mostUsedWords: 0,
    });
    expect(stats.mostUsedWords).not.toBeDefined();
  });

  test("check with disabled params", () => {
    const stats = textCounter(textWithReccurings.text, {
      charsCount: false,
      wordsCount: false,
      mostUsedWords: false,
    });
    expect(stats.mostUsedWords).not.toBeDefined();
    expect(stats.charsCount).not.toBeDefined();
    expect(stats.wordsCount).not.toBeDefined();
  });
});
