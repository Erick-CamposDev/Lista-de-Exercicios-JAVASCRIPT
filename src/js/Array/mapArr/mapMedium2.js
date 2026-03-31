/*
Exercicio:
Faça uma função que retorne um array de preços descontados em 10%
*/

const convertPricesToTenDiscount = (arr) => {
  return arr.map((price) => price - price * 0.1);
};
