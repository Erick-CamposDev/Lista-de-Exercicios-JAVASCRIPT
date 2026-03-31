/*
Exercicio:
Faça uma função que encontre o maior número em um array sem usar estruturas de repetição.
*/

function findTheBiggestNumber(array) {
  return array.reduce((acc, num) => {
    return num > acc ? num : acc;
  }, array[0]);
}
