export function replacer(
  wordsToReplace: string[],
  text: string,
  replacement = ""
): string {
  const pattern = new RegExp(
    `(?<![\\p{L}\\p{N}_])(${wordsToReplace.join("|")})(?![\\p{L}\\p{N}_])`,
    "giu"
  );

  return text.replace(pattern, replacement);
}
