/*
Exercicio:
Implemente uma função que some todos os preços em um array
*/

const sumPrices = function (arr) {
  return arr.reduce((acc, price) => {
    return (acc += price);
  }, 0);
};
