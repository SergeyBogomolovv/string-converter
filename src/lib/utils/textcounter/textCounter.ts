import { TextCounterOptions, TextCounterResult, WordUsageStats } from "./types";

export function textCounter(
  text: string,
  options: Partial<TextCounterOptions> = {
    wordsCount: true,
    mostUsedWords: true,
    charsCount: false,
  }
): TextCounterResult {
  if (options.charsCount || options.mostUsedWords || options.wordsCount) {
    text = text
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
      .trim()
      .replace(/\s+/g, " ");
  }

  const words = text.split(" ");

  const result: TextCounterResult = {};

  if (options.charsCount) {
    result.charsCount = text.split("").filter((char) => char !== " ").length;
  }

  if (options.wordsCount) {
    result.wordsCount = words.length;
  }

  if (options.mostUsedWords) {
    const wordsUsage = words.reduce((wordsUsage, word) => {
      const key = word.toLowerCase();

      const variations = wordsUsage.get(key)?.variations || [];
      if (!variations.includes(word)) variations.push(word);

      const newValue = {
        word,
        variations,
        count: (wordsUsage.get(key)?.count || 0) + 1,
      };
      wordsUsage.set(key, newValue);

      return wordsUsage;
    }, new Map<string, WordUsageStats>());

    const stats: WordUsageStats[] = [];

    for (const stat of wordsUsage.values()) {
      stats.push(stat);
    }

    stats.sort((statA, statB) => statB.count - statA.count);

    if (
      typeof options.mostUsedWords === "number" &&
      options.mostUsedWords > 0
    ) {
      result.mostUsedWords = stats.slice(0, options.mostUsedWords);
    } else {
      result.mostUsedWords = stats;
    }
  }

  return result;
}
