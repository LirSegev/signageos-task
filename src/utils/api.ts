export function fetchHeroes(searchQuery: string): Promise<string[]> {
  const allHeroes = [
    "Iron-Man",
    "Spider-Man",
    "Thor",
    "Wonder Woman",
    "Captain America",
    "Black Widow",
    "Hulk"
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        reject(new Error("Network error"));
      } else {
        resolve(
          allHeroes.filter(
            hero => !searchQuery || hero.indexOf(searchQuery) > -1
          )
        );
      }
    }, 1e3 * Math.random());
  });
}
