import { HighliterColors } from "./types";

export const highliter = (
  text: string,
  target: string,
  colors: HighliterColors
) => {
  if (!target) return [text];
  const parts = text.split(new RegExp(`(${target})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === target.toLowerCase() ? (
      <mark
        style={{ backgroundColor: colors.highlight, color: colors.text }}
        key={index}
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
};

export type Highlited = ReturnType<typeof highliter>;
