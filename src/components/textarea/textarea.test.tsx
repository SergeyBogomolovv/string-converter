import { render, fireEvent, waitFor } from "@testing-library/react";
import { Textarea } from "./textarea";

describe("Textarea component", () => {
  it("should insert a tab character when Tab is pressed", () => {
    const { getByTestId } = render(<Textarea />);
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "Hello" } });
    textarea.setSelectionRange(5, 5);
    fireEvent.keyDown(textarea, { key: "Tab", code: "Tab", keyCode: 9 });

    fireEvent.change(textarea, { target: { value: "Hello\t" } });

    expect(textarea.value).toBe("Hello\t");
  });

  it("should delete the current line when Ctrl+X or Cmd+X is pressed without selection", async () => {
    const { getByTestId } = render(<Textarea />);
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, {
      target: {
        value: "Line 1\nLine 2\nLine 3",
      },
    });

    textarea.setSelectionRange(8, 8);
    fireEvent.keyDown(textarea, { key: "x", code: "KeyX", ctrlKey: true });

    fireEvent.change(textarea, { target: { value: "Line 1\nLine 3" } });

    await waitFor(() => {
      expect(textarea.value).toBe("Line 1\nLine 3");
      expect(textarea.selectionStart).toBe(6);
    });
  });

  it("should delete the selected text when Ctrl+X or Cmd+X is pressed with selection", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Textarea onChange={handleChange} />);
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, {
      target: {
        value: "Line 1\nLine 2\nLine 3",
      },
    });

    textarea.setSelectionRange(7, 14);
    fireEvent.keyDown(textarea, { key: "x", code: "KeyX", ctrlKey: true });

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 3" },
    });

    expect(textarea.value).toBe("Line 1\nLine 3");

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "Line 1\nLine 3",
        }),
      })
    );
  });

  it("should handle the onChange event", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Textarea onChange={handleChange} />);
    const textarea = getByTestId("textareael") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "New text" } });

    expect(handleChange).toHaveBeenCalledTimes(1);

    expect(handleChange.mock.calls[0][0].target.value).toBe("New text");
  });
});
