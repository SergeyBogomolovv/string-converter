import { textWriter } from "./textwriter";

describe("TextWriter", () => {
  test("should output characters in a given time", async () => {
    let text = "";
    const duration = 1000;
    const testValue = "ehal grekas cherez reku";
    textWriter(duration, testValue, (char) => {
      text += char;
    });
    expect(text).not.toBe(testValue);
    await new Promise((res) => setTimeout(res, duration));
    expect(text).toBe(testValue);
  });

  test("should work as expected", async () => {
    let text = "";
    const duration = 1000;
    const testValue = "ehal grekas cherez reku";
    const delay = duration / testValue.length;
    const time = delay - delay / testValue.length;
    textWriter(duration, testValue, (char) => {
      text += char;
    });
    for (let i = 0; i < testValue.length; i++) {
      await new Promise((res) => setTimeout(res, time));
      expect(text).toBe(testValue.slice(0, i));
    }
  });
});
