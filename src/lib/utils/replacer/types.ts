export type ReplacerOptions = {
  wordsToReplace: string[];
  updateFn?: (text: string, ...args: any) => any;
  replacement?: string;
};

export type ReplaceFunction = (text: string) => string;
