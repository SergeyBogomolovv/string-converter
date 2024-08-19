import { wait } from "@/shared/helpers/wait";
import { textWriter } from "../textwriter";
import { duration1000, testValue } from "./mocks";

let text = "";

beforeEach(() => {
  text = "";
});
describe("TextWriter", () => {
  test("should output characters in a given time", async () => {
    textWriter(duration1000, testValue, (char) => {
      text += char;
    });
    expect(text).not.toBe(testValue);
    await wait(duration1000);
    expect(text).toBe(testValue);
  });

  test("should work as expected", async () => {
    const delay = duration1000 / testValue.length;
    const time = delay - delay / testValue.length;
    textWriter(duration1000, testValue, (char) => {
      text += char;
    });
    for (let i = 0; i < testValue.length; i++) {
      await wait(time);
      expect(text).toBe(testValue.slice(0, i));
    }
  });
});
