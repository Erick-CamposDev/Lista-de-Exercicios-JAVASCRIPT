/*
Exercício:
Implemente uma função que receba um array e retorne um novo array contendo apenas os números presentes no array original.
*/
function filterNumbers(arr) {
  return arr.filter((n) => typeof n === "number");
}

const arr = [
  3,
  6,
  8,
  1.5,
  -64,
  true,
  "vaca",
  12,
  "Pão",
  false,
  undefined,
  null,
  76,
];

console.log(filterNumbers(arr));
