import { useEffect, useState } from "react";
import { textCounter, TextCounterResult } from "./lib/utils/textcounter";

const App = () => {
  const [val, setVal] = useState("");
  const [stats, setStats] = useState<TextCounterResult>({
    charsCount: 0,
    wordsCount: 0,
    mostUsedWords: [],
  });

  const count = textCounter({
    charsCount: true,
    wordsCount: true,
    mostUsedWords: true,
  });

  useEffect(() => {
    const stats = count(val);
    setStats(stats);
  }, [val]);

  return (
    <main>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <div>
        <p>Количество букв: {stats.charsCount}</p>
        <p>Количество слов: {stats.wordsCount}</p>
        <div>
          {stats.mostUsedWords.map((stat) => (
            <div key={stat.word}>
              <p>Слово: {stat.word}</p>
              <p>Использовано: {stat.count}</p>
              <h3>Вариации:</h3>
              <ul>
                {[...stat.variations].map((variation) => (
                  <li key={variation}>{variation}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
