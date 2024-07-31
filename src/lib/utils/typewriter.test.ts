import { typeWriter } from "./typewriter";

jest.setTimeout(10000);

describe("Typewriter", () => {
  test("base usage", async () => {
    const delay = 200;
    let word = "";
    const testWord1 = "gerax";
    const testWord2 = "fn";
    const expectedWord = testWord1 + testWord2;
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay, outputChar);
    write(testWord1);
    write(testWord2);

    for (let i = 0; i < expectedWord.length; i++) {
      await new Promise((res) => setTimeout(res, delay));
      expect(word).toBe(expectedWord.slice(0, i));
    }
  });

  test("usage after time reached", async () => {
    const delay = 200;
    let word = "";
    const testWord1 = "ge";
    const testWord2 = "nom";
    const expectedWord = testWord1 + testWord2;
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay, outputChar);
    write(testWord1);
    await new Promise((res) => setTimeout(res, testWord1.length * delay + 200));
    expect(word).toBe(testWord1);
    write(testWord2);
    await new Promise((res) => setTimeout(res, testWord2.length * delay + 5));
    expect(word).toBe(expectedWord);
  });

  test("different time calls", async () => {
    const delay = 100;
    let word = "";
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay, outputChar);
    const testWord1 = "ger";
    const testWord2 = "grom";
    const testWord3 = "vad";
    const expectedWord = testWord1 + testWord2 + testWord3;
    write(testWord1);
    await new Promise((res) => setTimeout(res, 50));
    write(testWord2);
    await new Promise((res) => setTimeout(res, 270));
    write(testWord3);
    await new Promise((res) => setTimeout(res, expectedWord.length * delay));
    expect(word).toBe(expectedWord);
  });
});
