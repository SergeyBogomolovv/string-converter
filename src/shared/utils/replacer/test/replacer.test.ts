import { replacer } from "../replacer";

describe("replacer function", () => {
  it("should replace a single word in the text", () => {
    const result = replacer(["hello"], "hello world", "hi");
    expect(result).toBe("hi world");
  });

  it("should replace multiple words in the text", () => {
    const result = replacer(["hello", "world"], "hello world, hello!", "hi");
    expect(result).toBe("hi hi, hi!");
  });

  it("should handle words with different cases", () => {
    const result = replacer(["Hello"], "Hello world, hello!", "hi");
    expect(result).toBe("hi world, hi!");
  });

  it("should preserve spaces, tabs, and newlines in the text", () => {
    const text = `\thello\tworld\nhello   world!`;
    const expected = `\thi\tworld\nhi   world!`;
    const result = replacer(["hello"], text, "hi");
    expect(result).toBe(expected);
  });

  it("should correctly replace words in a text with mixed languages", () => {
    const result = replacer(
      ["hello", "мир"],
      "hello мир, hello world!",
      "привет"
    );
    expect(result).toBe("привет привет, привет world!");
  });

  it("should not replace substrings within words", () => {
    const result = replacer(["cat"], "concatenate category", "dog");
    expect(result).toBe("concatenate category");
  });

  it("should handle empty replacement string correctly", () => {
    const result = replacer(["hello"], "hello world, hello!", "");
    expect(result).toBe(" world, !");
  });

  it("should return the same text if no words are matched", () => {
    const result = replacer(["bye"], "hello world", "hi");
    expect(result).toBe("hello world");
  });

  it("should work with special characters in the text", () => {
    const result = replacer(["hello"], "hello-world, hello.world", "hi");
    expect(result).toBe("hi-world, hi.world");
  });

  it("should handle words with accents and diacritics", () => {
    const result = replacer(["café", "naïve"], "café and naïve", "restaurant");
    expect(result).toBe("restaurant and restaurant");
  });
});
