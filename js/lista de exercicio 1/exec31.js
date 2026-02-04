/*
Exercício:
Conte quantos números negativos existem em um array.
*/

const arr = [3, 5, 1, 2, 3, 6, -3, 1, -1, -121, 24, -4, 21, 2, 1, 4, -12];
let negativeNumberAmount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negativeNumberAmount++;
  }
}

console.log(negativeNumberAmount);
