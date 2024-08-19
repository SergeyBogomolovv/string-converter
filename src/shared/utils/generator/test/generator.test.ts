import { generator } from "../generator";

describe("generator", () => {
  test("should return an empty string when characters is empty", () => {
    expect(generator("", 10)).toBe("");
  });

  test("should return an empty string when length is zero or less", () => {
    expect(generator("some chars", 0)).toBe("");
  });

  test("should return a string of the specified length when length is less than characters length", () => {
    expect(generator("abc", 10)).toHaveLength(10);
  });

  test("should return a string with the same length as characters when length is greater than characters length", () => {
    const result = generator("abc", 2);
    expect(result).toHaveLength(3);
  });

  test("should return a string containing only the characters from the input", () => {
    const chars = "abcd";
    const result = generator(chars, 10);
    for (const char of result) {
      expect(chars.includes(char)).toBe(true);
    }
  });

  test("should shuffle the characters randomly", () => {
    const chars = "ab";
    const result1 = generator(chars, 10);
    const result2 = generator(chars, 10);
    expect(result1).not.toBe(result2);
  });
});
