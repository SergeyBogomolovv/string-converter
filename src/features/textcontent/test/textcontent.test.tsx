import { render } from "@testing-library/react";
import { Textcontent } from "../ui/textcontent";
import * as reduxHooks from "@/shared/store/hooks";

describe("TextContent component", () => {
  it("should render correctly", () => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue([]);

    const { getByTestId } = render(<Textcontent />);
    const textcontent = getByTestId("textcontendel");

    expect(textcontent).toBeInTheDocument();
  });

  it("should receive correct value", () => {
    const mockValue = [
      "mock",
      <mark style={{ backgroundColor: "yellow", color: "black" }} key={1}>
        return
      </mark>,
      "value",
    ];

    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue(mockValue);

    const { getByTestId } = render(<Textcontent />);
    const textcontent = getByTestId("textcontendel");

    expect(textcontent).toContainHTML(
      'mock<mark style="background-color: yellow; color: black;">return</mark>value'
    );
    expect(textcontent).toHaveTextContent("mockreturnvalue");
  });
});
