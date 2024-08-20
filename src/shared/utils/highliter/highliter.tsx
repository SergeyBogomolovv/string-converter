import { HighliterColors } from "./types";

const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export const highliter = (
  text: string,
  target: string,
  colors: HighliterColors
) => {
  if (!target) return [text];
  const escapedTarget = escapeRegExp(target);

  const parts = text.split(new RegExp(`(${escapedTarget})`, "gi"));

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
