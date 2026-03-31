/*
Exercicio:
Crie uma função que remova duplicatas em um array sem usar Set
*/

const nums = [1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9];

function removeDuplicates(arr) {
  return arr.filter((n, i, arr) => n !== arr[i - 1]);
}

console.log(removeDuplicates(nums));
