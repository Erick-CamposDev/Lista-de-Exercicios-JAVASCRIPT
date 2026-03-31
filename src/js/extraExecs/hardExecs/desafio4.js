/*
Exercício:
Dado um array de números, retorne um novo array com o quadrado de cada elemento.
*/
function powerArray(arr) {
  return arr.map((n) => n ** 2);
}

console.log(powerArray([4, 52, 5, 1, 2, 3]));
