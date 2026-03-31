/*
Exercício:
Conte quantos números de um array estão no intervalo de 10 a 20.
*/

const numArr = [2, 5, 12, 73, 15, 18, 2, 34, 21, 20, 8, 11, 16, 4];
let cont = 0;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] >= 10 && numArr[i] <= 20) {
    cont++;
  }
}

console.log(cont);
