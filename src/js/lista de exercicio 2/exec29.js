/*
Exercício:
Implemente uma função que retorne o terceiro maior valor de um array de números.
*/
function getTheThirdBigger(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr[2];
}

console.log(getTheSecondBigger([43, 72, 123, 2, 852, 94, 52, 12, 34]));
