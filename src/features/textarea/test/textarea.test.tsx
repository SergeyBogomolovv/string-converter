import { fireEvent } from "@testing-library/react";
import { Textarea } from "../ui/textarea";
import { renderWithRedux } from "@/store";

describe("Textarea Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = renderWithRedux(<Textarea />);
    expect(getByTestId("textareael")).toBeInTheDocument();
  });

  it("updates value on change", () => {
    const { getByTestId } = renderWithRedux(<Textarea />);
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "New text" } });
    expect(textarea).toHaveValue("New text");
  });

  it("handles Tab key correctly", () => {
    const { getByTestId } = renderWithRedux(<Textarea />);
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "Some text" } });
    textarea.selectionStart = 5;
    textarea.selectionEnd = 5;

    fireEvent.keyDown(textarea, {
      key: "Tab",
      code: "Tab",
      keyCode: 9,
      charCode: 9,
    });

    expect(textarea).toHaveValue("Some \ttext");
  });

  it("handles Ctrl+X key combination correctly", () => {
    const { getByTestId } = renderWithRedux(<Textarea />);
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "Line 1\nLine 2\nLine 3" } });
    textarea.selectionStart = 7;
    textarea.selectionEnd = 13;

    fireEvent.keyDown(textarea, {
      key: "x",
      code: "KeyX",
      keyCode: 88,
      charCode: 88,
      ctrlKey: true,
    });

    expect(textarea.value).toMatch(/^Line 1\s+Line 3$/);
  });

  it("adjusts height on change", () => {
    const { getByTestId } = renderWithRedux(<Textarea />);
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, {
      target: { value: "First line\nSecond line\nThird line\nFourth line" },
    });

    expect(textarea.style.height).toBe(`${textarea.scrollHeight}px`);
  });

  it("calls onChange prop", () => {
    const handleChange = jest.fn();
    const { getByTestId } = renderWithRedux(
      <Textarea onChange={handleChange} />
    );
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "Test" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
