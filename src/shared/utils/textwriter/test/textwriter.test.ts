import { textWriter } from "../textwriter";
import { duration1000, testValue } from "./mocks";

describe("TextWriter", () => {
  let text = "";

  beforeEach(async () => {
    await jest.advanceTimersByTimeAsync(100);
    text = "";
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("should output characters in a given time", async () => {
    textWriter(duration1000, testValue, (char) => {
      text += char;
    });
    expect(text).not.toBe(testValue);
    await jest.advanceTimersByTimeAsync(duration1000);

    expect(text).toBe(testValue);
  });

  test("should work as expected", async () => {
    const delay = duration1000 / testValue.length;
    const time = delay - delay / testValue.length;
    textWriter(duration1000, testValue, (char) => {
      text += char;
    });
    for (let i = 1; i < testValue.length; i++) {
      await jest.advanceTimersByTimeAsync(time);
      expect(text).toBe(testValue.slice(0, i));
    }
  });
});
