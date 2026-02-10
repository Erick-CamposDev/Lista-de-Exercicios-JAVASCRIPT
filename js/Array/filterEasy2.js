/*
Exercicio:
Implemente uma função que filtre as palavras com mais de 5 letras em um array.
*/

function moreThanFiveLetters(array) {
  return array.filter((word) => word.length > 5);
}
