export const simpleText = {
  text: "Привет! Это пример текста, который будет использоваться для тестирования функции подсчета слов. Здесь много разных слов и предложений, чтобы проверить, как функция справляется с обычным текстом.",
  stats: {
    charsCount: 163,
    wordsCount: 26,
    mostUsedWords: [{ count: 2, variations: new Set(["слов"]), word: "Слов" }],
  },
};

export const textWithSymbols = {
  text: "Привет@@@! Это $$пример текста, который #будет **использоваться%% для %%тестирования функции+ подсчета слов%%. Здесь^^ много: разных~ слов &и предложений, чтобы// проверить, как функция справляется с $обычным текстом!",
  stats: {
    charsCount: 163,
    wordsCount: 26,
    mostUsedWords: [{ count: 2, variations: new Set(["слов"]), word: "Слов" }],
  },
};

export const textWithReccurings = {
  text: "Привет! Это пример текста, который используется для тестирования. Привет всем! Этот пример текста используется для тестирования функции. Функция должна считать слова в тексте. Текст должен быть разнообразным. Функция подсчета слов должна работать правильно. Привет ещё раз! Этот текст служит примером для функции. Пример текста содержит повторяющиеся слова, такие как текст, функция и пример. Текст должен быть обработан правильно, чтобы подсчет был точным. Привет снова! Функция работает, если текст правильно обработан.",
  stats: {
    charsCount: 434,
    wordsCount: 70,
    mostUsedWords: [
      { word: "Текст", variations: new Set(["Текст", "текст"]), count: 5 },
      { word: "Привет", variations: new Set(["Привет"]), count: 4 },
      { word: "Пример", variations: new Set(["пример", "Пример"]), count: 4 },
      {
        word: "Функция",
        variations: new Set(["Функция", "функция"]),
        count: 4,
      },
      { word: "Текста", variations: new Set(["текста"]), count: 3 },
      { word: "Для", variations: new Set(["для"]), count: 3 },
      { word: "Правильно", variations: new Set(["правильно"]), count: 3 },
      { word: "Используется", variations: new Set(["используется"]), count: 2 },
      { word: "Тестирования", variations: new Set(["тестирования"]), count: 2 },
      { word: "Этот", variations: new Set(["Этот"]), count: 2 },
      { word: "Функции", variations: new Set(["функции"]), count: 2 },
      { word: "Должна", variations: new Set(["должна"]), count: 2 },
      { word: "Слова", variations: new Set(["слова"]), count: 2 },
      { word: "Должен", variations: new Set(["должен"]), count: 2 },
      { word: "Быть", variations: new Set(["быть"]), count: 2 },
      { word: "Обработан", variations: new Set(["обработан"]), count: 2 },
    ],
  },
};
