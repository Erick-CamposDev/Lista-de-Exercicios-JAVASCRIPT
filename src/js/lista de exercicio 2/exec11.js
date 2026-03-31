/*
Exercício:
Implemente uma função que receba um array e retorne um novo array contendo apenas o primeiro e o último elemento do array original.
*/
function getFirstAndLastElement(arr) {
  return [arr[0], arr[arr.length - 1]];
}

const arr = ["batata", 3, 62, 6.3, true];

console.log(getFirstAndLastElement(arr));
