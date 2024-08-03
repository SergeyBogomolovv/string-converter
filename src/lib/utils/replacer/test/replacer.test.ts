import { replacer } from "../replacer";
import {
  differentLanguages,
  differentRegisters,
  doubleUsage,
  lastWord,
  replacementWithSpace,
  simpleText,
  textWithReccurents,
} from "./mocks";

describe("Replacer", () => {
  test("simple", () => {
    const replace = replacer({ wordsToReplace: simpleText.wordsToReplace });
    expect(replace(simpleText.text)).toEqual(simpleText.expected);
  });

  test("with reccurents", () => {
    const replace = replacer({
      wordsToReplace: textWithReccurents.wordsToReplace,
      replacement: textWithReccurents.replacement,
    });
    expect(replace(textWithReccurents.text)).toEqual(
      textWithReccurents.expected
    );
  });

  test("different registers", () => {
    const replace = replacer({
      wordsToReplace: differentRegisters.wordsToReplace,
      replacement: differentRegisters.replacement,
    });
    expect(replace(differentRegisters.text)).toEqual(
      differentRegisters.expected
    );
  });

  test("last word", () => {
    const replace = replacer({ wordsToReplace: lastWord.wordsToReplace });
    expect(replace(lastWord.text)).toEqual(lastWord.expected);
  });

  test("replacement with space", () => {
    const replace = replacer({
      wordsToReplace: replacementWithSpace.wordsToReplace,
      replacement: replacementWithSpace.replacement,
    });
    expect(replace(replacementWithSpace.text)).toEqual(
      replacementWithSpace.expected
    );
  });

  test("different languages", () => {
    const replace = replacer({
      wordsToReplace: differentLanguages.wordsToReplace,
      replacement: differentLanguages.replacement,
    });
    expect(replace(differentLanguages.text)).toEqual(
      differentLanguages.expected
    );
  });

  test("double usage", () => {
    let text = "";

    function updateFn(txt: string) {
      text = txt;
    }

    const replace1 = replacer({
      wordsToReplace: doubleUsage.wordsToReplace[0],
      replacement: doubleUsage.replacements[0],
      updateFn,
    });
    const replace2 = replacer({
      wordsToReplace: doubleUsage.wordsToReplace[1],
      replacement: doubleUsage.replacements[1],
      updateFn,
    });

    replace1(doubleUsage.text);
    replace2(text);

    expect(text).toEqual(doubleUsage.expected);
  });
});
