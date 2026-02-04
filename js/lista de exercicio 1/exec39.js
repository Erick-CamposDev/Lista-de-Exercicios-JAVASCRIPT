/*
Exercício:
Crie uma função que troca os valores de dois arrays de mesmo tamanho, posição a posição.
*/

const arr = [2, 4, 1, 6, 1, 3];
const arr2 = [6.9, 8, 7, 1, 2, 5];

function switchValues(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    [arr1[i], arr2[i]] = [arr2[i], arr1[i]];
  }

  return { arr1, arr2 };
}

console.log(switchValues(arr, arr2));
