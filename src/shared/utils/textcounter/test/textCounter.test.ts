import { textCounter } from "../textCounter";
import { simpleText, textWithReccurings, textWithSymbols } from "./mocks";

describe("TextCounter", () => {
  test("check with simpleText", () => {
    const count = textCounter({
      charsCount: true,
      mostUsedWords: true,
    });
    expect(count(simpleText.text).charsCount).toEqual(
      simpleText.stats.charsCount
    );
    expect(count(simpleText.text).wordsCount).toEqual(
      simpleText.stats.wordsCount
    );
    expect(count(simpleText.text).mostUsedWords).toEqual(
      simpleText.stats.mostUsedWords
    );
  });

  test("check with lot of symbols", () => {
    const count = textCounter({
      charsCount: true,
      mostUsedWords: true,
    });
    expect(count(textWithSymbols.text).charsCount).toEqual(
      textWithSymbols.stats.charsCount
    );
    expect(count(textWithSymbols.text).wordsCount).toEqual(
      textWithSymbols.stats.wordsCount
    );
    expect(count(textWithSymbols.text).mostUsedWords).toEqual(
      textWithSymbols.stats.mostUsedWords
    );
  });

  test("check with reccurings", () => {
    const count = textCounter({
      charsCount: true,
      mostUsedWords: true,
    });
    expect(count(textWithReccurings.text).charsCount).toEqual(
      textWithReccurings.stats.charsCount
    );
    expect(count(textWithReccurings.text).wordsCount).toEqual(
      textWithReccurings.stats.wordsCount
    );
    expect(count(textWithReccurings.text).mostUsedWords).toEqual(
      textWithReccurings.stats.mostUsedWords
    );
  });

  test("check most used words as number", () => {
    const count = textCounter({
      charsCount: false,
      wordsCount: false,
      mostUsedWords: 3,
    });
    expect(count(textWithReccurings.text).mostUsedWords).toEqual(
      textWithReccurings.stats.mostUsedWords.slice(0, 3)
    );
  });

  test("check most used words as zero", () => {
    const count = textCounter({
      charsCount: false,
      wordsCount: false,
      mostUsedWords: 0,
    });
    expect(count(textWithReccurings.text).mostUsedWords).not.toBeDefined();
  });

  test("check with disabled params", () => {
    const count = textCounter({
      charsCount: false,
      wordsCount: false,
      mostUsedWords: false,
    });
    expect(count(textWithReccurings.text).mostUsedWords).not.toBeDefined();
    expect(count(textWithReccurings.text).charsCount).not.toBeDefined();
    expect(count(textWithReccurings.text).wordsCount).not.toBeDefined();
  });
});
