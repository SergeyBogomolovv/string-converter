import {
  TextCounterFn,
  TextCounterOptions,
  TextCounterResult,
  WordUsageStats,
} from "./types";

export function textCounter(
  {
    wordsCount = true,
    mostUsedWords = false,
    charsCount = true,
  }: Partial<TextCounterOptions> = {
    wordsCount: true,
    mostUsedWords: true,
    charsCount: true,
  }
): TextCounterFn {
  return (text: string) => {
    if (charsCount || mostUsedWords || wordsCount) {
      text = text
        .replace(/[.,/#!$%^&*;:{}=\-_`~+"'@()]/g, "")
        .trim()
        .replace(/\s+/g, " ");
    }
    const words = text.length > 0 ? text.split(" ") : [];
    const result: TextCounterResult = {};

    if (charsCount) {
      result.charsCount = text.split("").filter((char) => char !== " ").length;
    }

    if (wordsCount) {
      result.wordsCount = words.length;
    }

    if (mostUsedWords) {
      const wordsUsage = words.reduce((wordsUsage, word) => {
        const key = word.toLowerCase();

        const variations = wordsUsage.get(key)?.variations || new Set();
        variations.add(word);

        const newValue = {
          word: word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          variations,
          count: (wordsUsage.get(key)?.count || 0) + 1,
        };
        wordsUsage.set(key, newValue);

        return wordsUsage;
      }, new Map<string, WordUsageStats>());

      const stats: WordUsageStats[] = [];

      for (const stat of wordsUsage.values()) {
        if (stat.count > 1) stats.push(stat);
      }

      stats.sort((statA, statB) => statB.count - statA.count);

      if (typeof mostUsedWords === "number" && mostUsedWords > 0) {
        result.mostUsedWords = stats.slice(0, mostUsedWords);
      } else {
        result.mostUsedWords = stats;
      }
    }

    return result;
  };
}
