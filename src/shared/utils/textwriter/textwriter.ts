import { typeWriter } from "../typewriter";

export function textWriter(
  duration: number,
  text: string,
  outputChar: (char: string) => any
): void {
  const delay = duration / text.length;
  typeWriter(delay - delay / text.length, outputChar)(text);
}
