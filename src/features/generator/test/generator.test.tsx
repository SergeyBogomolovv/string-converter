import { renderWithRedux } from "@/shared/store";
import Generator from "../ui/generator";
import { fireEvent } from "@testing-library/react";
import { act } from "react";

describe("Generator component", () => {
  it("should render correctly", () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<Generator />);
    const charsField = getByTestId("charsField");
    const countField = getByTestId("countField");
    const generateBtn = getByTestId("generateBtn");
    const generatorResult = queryByTestId("generatorResult");

    expect(generatorResult).not.toBeInTheDocument();
    expect(countField).toBeInTheDocument();
    expect(generateBtn).toBeInTheDocument();
    expect(charsField).toBeInTheDocument();
  });

  it("should generate correctly", async () => {
    const { getByTestId, findByTestId } = renderWithRedux(<Generator />);
    const charsField = getByTestId("charsField");
    const countField = getByTestId("countField");
    const generateBtn = getByTestId("generateBtn");

    await act(async () => {
      fireEvent.change(charsField, { target: { value: "abce" } });
      fireEvent.change(countField, { target: { value: "12" } });

      fireEvent.click(generateBtn);
    });

    const generatorResult = await findByTestId("generatorResult");

    expect(generatorResult.textContent).toHaveLength(12);
  });

  it("should handle max count", async () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<Generator />);
    const charsField = getByTestId("charsField");
    const countField = getByTestId("countField");
    const generateBtn = getByTestId("generateBtn");

    await act(async () => {
      fireEvent.change(charsField, { target: { value: "abce" } });
      fireEvent.change(countField, { target: { value: "301" } });

      fireEvent.click(generateBtn);
    });

    const generatorResult = queryByTestId("generatorResult");

    expect(generatorResult).not.toBeInTheDocument();
  });

  it("should handle min length", async () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<Generator />);
    const charsField = getByTestId("charsField");
    const countField = getByTestId("countField");
    const generateBtn = getByTestId("generateBtn");

    await act(async () => {
      fireEvent.change(charsField, { target: { value: "" } });
      fireEvent.change(countField, { target: { value: "12" } });

      fireEvent.click(generateBtn);
    });

    const generatorResult = queryByTestId("generatorResult");

    expect(generatorResult).not.toBeInTheDocument();
  });
});
