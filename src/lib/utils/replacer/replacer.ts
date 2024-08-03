import { ReplaceFunction, ReplacerOptions } from "./types";

export function replacer({
  wordsToReplace,
  updateFn,
  replacement = "",
}: ReplacerOptions): ReplaceFunction {
  const pattern = new RegExp(
    `(?:^|[^\\p{L}\\p{N}])(${wordsToReplace.join("|")})(?=[^\\p{L}\\p{N}]|$)`,
    "giu"
  );

  return (text) => {
    const updated = text
      .replace(pattern, (match, p1) => {
        const startIndex = match.indexOf(p1);
        return (
          match.slice(0, startIndex) +
          replacement +
          match.slice(startIndex + p1.length)
        );
      })
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\s([.,!?;:])/g, "$1");

    if (typeof updateFn === "function") {
      updateFn(updated);
    }

    return updated;
  };
}
