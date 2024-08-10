export function generator(characters: string, length: number): string {
  if (characters.length === 0 || length <= 0) return "";
  if (characters.length > length) length = characters.length;

  const shuffled = characters
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  let result = shuffled.slice(0, Math.min(length, characters.length));

  while (result.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
}
