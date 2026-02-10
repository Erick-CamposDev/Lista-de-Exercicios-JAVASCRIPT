/*
Exercicio:
Crie uma função que some os valores de um array SE os números forem pares
*/

const sumOnlyEven = (arr) =>
  arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc += num;
    }
    return acc;
  }, 0);
