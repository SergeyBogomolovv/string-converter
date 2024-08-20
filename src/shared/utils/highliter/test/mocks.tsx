import { HighliterColors } from "../types";

export const colors: HighliterColors = {
  highlight: "yellow",
  text: "black",
};

export const textExamples = {
  simpleText: "This is a simple text for testing",
  caseInsensitiveText: "This is a Simple text for testing",
  multipleOccurrencesText: "This simple text has simple words",
  russianText: "Это простой текст для тестирования",
  russianMultipleOccurrencesText: "Этот текст простой, но простой текст важен",
  withSpecialSymbols: "console.log()",
};

export const targets = {
  simple: "simple",
  absent: "absent",
  empty: "",
  russian: "простой",
  special: "log()",
};

export const highlighterResults = {
  withSpecialSymbols: [
    "console.",
    <mark style={{ backgroundColor: "yellow", color: "black" }} key={1}>
      log()
    </mark>,
    "",
  ],
  singleHighlight: [
    "This is a ",
    <mark style={{ backgroundColor: "yellow", color: "black" }} key={1}>
      simple
    </mark>,
    " text for testing",
  ],
  caseInsensitiveHighlight: [
    "This is a ",
    <mark style={{ backgroundColor: "yellow", color: "black" }} key={1}>
      Simple
    </mark>,
    " text for testing",
  ],
  noHighlight: ["This is a simple text for testing"],
  multipleHighlights: [
    "This ",
    <mark style={{ backgroundColor: "yellow", color: "black" }} key={1}>
      simple
    </mark>,
    " text has ",
    <mark style={{ backgroundColor: "yellow", color: "black" }} key={3}>
      simple
    </mark>,
    " words",
  ],
  russianHighlight: [
    "Это ",
    <mark style={{ backgroundColor: "yellow", color: "black" }} key={1}>
      простой
    </mark>,
    " текст для тестирования",
  ],
  russianMultipleHighlights: [
    "Этот текст ",
    <mark style={{ backgroundColor: "yellow", color: "black" }} key={1}>
      простой
    </mark>,
    ", но ",
    <mark style={{ backgroundColor: "yellow", color: "black" }} key={3}>
      простой
    </mark>,
    " текст важен",
  ],
};
