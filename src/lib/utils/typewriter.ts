export function typeWriter(delay: number, outputChar: (char: string) => void) {
  let queue = Promise.resolve();
  return (text: string) => {
    for (const char of text) {
      queue = queue.then(
        () =>
          new Promise((res) => {
            setTimeout(() => {
              outputChar(char);
              res();
            }, delay);
          })
      );
    }
  };
}
