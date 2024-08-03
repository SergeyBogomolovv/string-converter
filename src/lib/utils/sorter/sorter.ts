export function sorter(text: string): string[] {
  text = text.trim().replace(/\s+/g, "");
  const words = text.split(",");
  words.sort((a, b) => a.localeCompare(b));
  return words;
}
