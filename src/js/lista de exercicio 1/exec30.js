/*
Exercício:
Encontre o maior e o menor número de um array.
*/

const arr = [2, 5, 1, 1, 6, 3, 12, 24, 6, 13, 1, 51, 1, 3, 12, 4, 0];
let small = arr[0];
let big = arr[0];

for (const num of arr) {
  if (num < small) {
    small = num;
  }

  if (num > big) {
    big = num;
  }
}

console.log(`O maior número é ${big} e o menor é ${small}`);
