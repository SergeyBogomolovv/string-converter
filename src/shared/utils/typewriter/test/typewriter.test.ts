import { typeWriter } from "../typewriter";
import {
  baseWord1,
  baseWord2,
  delay10,
  expectedBaseWord,
  expectedSecondWord,
  secondWord1,
  secondWord2,
  secondWord3,
} from "./mocks";

describe("Typewriter", () => {
  let word = "";
  beforeEach(async () => {
    await jest.advanceTimersByTimeAsync(100);
    word = "";
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should handle base usage", async () => {
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay10, outputChar);
    write(baseWord1);
    write(baseWord2);

    for (let i = 1; i < expectedBaseWord.length; i++) {
      await jest.advanceTimersByTimeAsync(delay10);
      expect(word).toBe(expectedBaseWord.slice(0, i));
    }
  });

  it("should handle usage after time reached", async () => {
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay10, outputChar);
    write(baseWord1);
    await jest.advanceTimersByTimeAsync(baseWord1.length * delay10);
    expect(word).toBe(baseWord1);
    write(baseWord2);
    await jest.advanceTimersByTimeAsync(baseWord2.length * delay10);
    expect(word).toBe(expectedBaseWord);
  });

  it("should handle different time calls", async () => {
    function outputChar(char: string) {
      word += char;
    }
    const write = typeWriter(delay10, outputChar);
    write(secondWord1);
    await jest.advanceTimersByTimeAsync(50);
    write(secondWord2);
    await jest.advanceTimersByTimeAsync(270);
    write(secondWord3);
    await jest.advanceTimersByTimeAsync(expectedSecondWord.length * delay10);
    expect(word).toBe(expectedSecondWord);
  });

  it("should handle zero delay correctly", async () => {
    const write = typeWriter(0, (char) => {
      word += char;
    });
    write(baseWord1);
    await jest.runAllTimersAsync();
    expect(word).toBe(baseWord1);
  });
});
