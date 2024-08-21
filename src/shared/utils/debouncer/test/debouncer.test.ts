import { debouncer } from "../debouncer";

describe("Debouncer", () => {
  let expectedWord = "";

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(async () => {
    await jest.advanceTimersByTimeAsync(100);
    expectedWord = "";
  });

  test("should debounce function", async () => {
    function testFn(txt: string) {
      expectedWord = txt;
    }
    const debouncedTest = debouncer(testFn, 100);
    debouncedTest("test1");
    await jest.advanceTimersByTimeAsync(10);
    debouncedTest("test2");
    debouncedTest("test3");
    await jest.advanceTimersByTimeAsync(100);
    expect(expectedWord).toEqual("test3");
  });

  test("should not change value", async () => {
    function testFn(txt: string) {
      expectedWord = txt;
    }
    const debouncedTest = debouncer(testFn, 100);
    debouncedTest("test");
    await jest.advanceTimersByTimeAsync(90);
    expect(expectedWord).toEqual("");
  });
});
