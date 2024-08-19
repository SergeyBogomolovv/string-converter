export type TextCounterOptions = {
  wordsCount: boolean;
  mostUsedWords: boolean | number;
  charsCount: boolean;
};

export type WordUsageStats = {
  variations: Set<string>;
  word: string;
  count: number;
};

export type TextCounterResult = {
  wordsCount?: number;
  mostUsedWords?: WordUsageStats[];
  charsCount?: number;
};

export type TextCounterFn = (text: string) => TextCounterResult;
