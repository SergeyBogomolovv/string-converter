import { highliter } from "../highliter";
import { colors, textExamples, targets, highlighterResults } from "./mocks";

describe("Highliter", () => {
  test("should highlight the target text in the input string", () => {
    const result = highliter(textExamples.simpleText, targets.simple, colors);
    expect(result).toEqual(highlighterResults.singleHighlight);
  });

  test("should work with regex symbols", () => {
    const result = highliter(
      textExamples.withSpecialSymbols,
      targets.special,
      colors
    );
    expect(result).toEqual(highlighterResults.withSpecialSymbols);
  });

  test("should be case insensitive when highlighting the target", () => {
    const result = highliter(
      textExamples.caseInsensitiveText,
      targets.simple,
      colors
    );
    expect(result).toEqual(highlighterResults.caseInsensitiveHighlight);
  });

  test("should not highlight if target is not found", () => {
    const result = highliter(textExamples.simpleText, targets.absent, colors);
    expect(result).toEqual(highlighterResults.noHighlight);
  });

  test("should highlight multiple occurrences of the target text", () => {
    const result = highliter(
      textExamples.multipleOccurrencesText,
      targets.simple,
      colors
    );
    expect(result).toEqual(highlighterResults.multipleHighlights);
  });

  test("should handle an empty target gracefully", () => {
    const result = highliter(textExamples.simpleText, targets.empty, colors);
    expect(result).toEqual(highlighterResults.noHighlight);
  });

  test("should return the original text if target is undefined or null", () => {
    expect(highliter(textExamples.simpleText, undefined, colors)).toEqual(
      highlighterResults.noHighlight
    );
    expect(highliter(textExamples.simpleText, null, colors)).toEqual(
      highlighterResults.noHighlight
    );
  });

  test("should highlight the target text in the Russian input string", () => {
    const result = highliter(textExamples.russianText, targets.russian, colors);
    expect(result).toEqual(highlighterResults.russianHighlight);
  });

  test("should highlight multiple occurrences of the Russian target text", () => {
    const result = highliter(
      textExamples.russianMultipleOccurrencesText,
      targets.russian,
      colors
    );
    expect(result).toEqual(highlighterResults.russianMultipleHighlights);
  });
});
