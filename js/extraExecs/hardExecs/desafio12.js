/*
Exercício:
Dado um array de palavras, filtre as que terminam com "ão" e retorne também a quantidade dessas palavras.
*/
const words = ["avião", "carro", "feijão", "pão", "livro", "coração"];

function countWordsThatEndsWithAo(arr) {
  const filter = arr.filter((w) => /ão$/.test(w));
  const arrLength = filter.length;

  return { filter, arrLength };
}

console.log(countWordsThatEndsWithAo(words));
