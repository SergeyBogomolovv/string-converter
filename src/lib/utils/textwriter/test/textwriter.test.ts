import { textWriter } from "../textwriter";
import { duration1000, testValue } from "./mocks";

describe("TextWriter", () => {
  test("should output characters in a given time", async () => {
    let text = "";
    textWriter(duration1000, testValue, (char) => {
      text += char;
    });
    expect(text).not.toBe(testValue);
    await new Promise((res) => setTimeout(res, duration1000));
    expect(text).toBe(testValue);
  });

  test("should work as expected", async () => {
    let text = "";
    const delay = duration1000 / testValue.length;
    const time = delay - delay / testValue.length;
    textWriter(duration1000, testValue, (char) => {
      text += char;
    });
    for (let i = 0; i < testValue.length; i++) {
      await new Promise((res) => setTimeout(res, time));
      expect(text).toBe(testValue.slice(0, i));
    }
  });
});
