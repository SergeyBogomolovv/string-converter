import { wait } from "@/lib/helpers/wait";
import { typeWriter } from "../typewriter";
import {
  baseWord1,
  baseWord2,
  delay10,
  delay20,
  expectedBaseWord,
  expectedSecondWord,
  secondWord1,
  secondWord2,
  secondWord3,
} from "./mocks";

describe("Typewriter", () => {
  test("base usage", async () => {
    let word = "";
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay10, outputChar);
    write(baseWord1);
    write(baseWord2);

    for (let i = 0; i < expectedBaseWord.length; i++) {
      await wait(delay10);
      expect(word).toBe(expectedBaseWord.slice(0, i));
    }
  });

  test("usage after time reached", async () => {
    let word = "";
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay10, outputChar);
    write(baseWord1);
    await wait(baseWord1.length * delay10 + delay20);
    expect(word).toBe(baseWord1);
    write(baseWord2);
    await wait((baseWord2.length + 1) * delay10);
    expect(word).toBe(expectedBaseWord);
  });

  test("different time calls", async () => {
    let word = "";
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay10, outputChar);
    write(secondWord1);
    await wait(50);
    write(secondWord2);
    await wait(270);
    write(secondWord3);
    await wait(expectedSecondWord.length * delay10);
    expect(word).toBe(expectedSecondWord);
  });

  test("should handle zero delay correctly", async () => {
    let word = "";
    const write = typeWriter(0, (char) => {
      word += char;
    });
    write(baseWord1);
    await wait(10);
    expect(word).toBe(baseWord1);
  });
});
