export const simpleText = {
  text: "Привет, я пользователь",
  wordsToReplace: ["Я"],
  expected: "Привет, пользователь",
};

export const textWithReccurents = {
  text: "Сегодня хороший день, и я рад быть здесь и еще я тестер Я",
  wordsToReplace: ["я", "и"],
  replacement: "б",
  expected: "Сегодня хороший день, б б рад быть здесь б еще б тестер б",
};

export const differentRegisters = {
  text: "Привет, привет ПриВет.",
  wordsToReplace: ["привет"],
  replacement: "Хелло",
  expected: "Хелло, Хелло Хелло.",
};

export const lastWord = {
  text: "Привет, друг",
  wordsToReplace: ["друг"],
  expected: "Привет,",
};

export const replacementWithSpace = {
  text: "Привет, дорогой друг, ты дорогой",
  wordsToReplace: ["Дорогой"],
  replacement: "дешевый ",
  expected: "Привет, дешевый друг, ты дешевый",
};

export const differentLanguages = {
  text: "Привет, dear друг, ты дорогой",
  wordsToReplace: ["Дорогой", "dear"],
  replacement: "дешевый ",
  expected: "Привет, дешевый друг, ты дешевый",
};

export const doubleUsage = {
  text: "Привет, Hello, dear друг, ты дорогой",
  wordsToReplace: [
    ["Дорогой", "dear"],
    ["Привет", "hello"],
  ],
  replacements: ["дешевый ", " Здравствуй "],
  expected: "Здравствуй, Здравствуй, дешевый друг, ты дешевый",
};
