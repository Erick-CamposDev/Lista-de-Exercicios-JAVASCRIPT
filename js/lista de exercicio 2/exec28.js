/*
Exercício:
Crie uma função que filtre um array de números, retornando apenas os números que possuem uma quantidade específica de dígitos.
*/
function filterByDigits(arr, digit) {
  return arr.filter((n) => Math.abs(n).toString().length === digit);
}

console.log(
  filterByDigits(
    [42, 1452, 21, 1, 52, 2, 63, 1029, 402, 1, 55, 23, 2, 444, 123],
    2,
  ),
);
