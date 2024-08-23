export function sorter(text: string): string[] {
  const words = text.split(", ");
  words.sort((a, b) => a.localeCompare(b));
  return words;
}
