import { debouncer } from "../debouncer";

describe("Debouncer", () => {
  test("should debounce function", async () => {
    let expectedWord = "";
    function testFn(txt: string) {
      expectedWord = txt;
    }
    const debouncedTest = debouncer(testFn, 100);
    debouncedTest("test1");
    await new Promise((res) => setTimeout(res, 10));
    debouncedTest("test2");
    debouncedTest("test3");
    await new Promise((res) => setTimeout(res, 100));
    expect(expectedWord).toEqual("test3");
  });

  test("should not change value", async () => {
    let expectedWord = "";
    function testFn(txt: string) {
      expectedWord = txt;
    }
    const debouncedTest = debouncer(testFn, 100);
    debouncedTest("test");
    await new Promise((res) => setTimeout(res, 90));
    expect(expectedWord).toEqual("");
  });
});
