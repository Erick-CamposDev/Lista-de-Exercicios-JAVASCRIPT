/*
Exercicio:
Faça uma função que conte quantas palavras há em um array.
*/

function countWords(array) {
  return array.reduce((acc) => {
    return acc + 1;
  }, 0);
}
