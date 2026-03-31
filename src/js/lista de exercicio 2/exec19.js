/*
Exercício:
Implemente uma função que calcule a média dos valores de um array de números.
*/
function calcAverage(arr) {
  const sum = arr.reduce((acc, n) => (acc += n), 0);

  const average = sum / arr.length;

  return average;
}

console.log(calcAverage([3, 5, 6, 1, 3, 8]));
