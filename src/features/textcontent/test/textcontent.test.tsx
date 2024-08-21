import { EditorState } from "@/entities/editor";
import { Textcontent } from "../ui/textcontent";
import { renderWithRedux } from "@/shared/store";

describe("TextContent component", () => {
  it("should render correctly", () => {
    const { getByTestId } = renderWithRedux(<Textcontent />);
    const textcontent = getByTestId("textcontendel");
    expect(textcontent).toBeInTheDocument();
  });

  it("should highlight correctly", () => {
    const preloadedState: { editor: EditorState } = {
      editor: {
        searchTarget: "return",
        value: "mockreturnvalue",
        editMode: false,
      },
    };

    const { getByTestId } = renderWithRedux(<Textcontent />, {
      preloadedState,
    });

    const textcontent = getByTestId("textcontendel");

    expect(textcontent).toContainHTML(
      'mock<mark style="background-color: yellow; color: black;">return</mark>value'
    );
    expect(textcontent).toHaveTextContent("mockreturnvalue");
  });
});
