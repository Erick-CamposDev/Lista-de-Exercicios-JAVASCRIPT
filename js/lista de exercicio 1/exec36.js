const arr = [4, 1, 5, 7, 1, 39, 21, 3];
const int = 7;

function mutipliyArr(arr, int) {
  for (let num in arr) {
    arr[num] *= int;
  }

  return arr;
}

function mutipliyArrHigherThanFive(arr, int) {
  if (int < 5) {
    return "Somente Multiplica maior ou igual a 5";
  }

  for (let num in arr) {
    arr[num] *= int;
  }

  return arr;
}

console.log(mutipliyArr(arr, int));
console.log(mutipliyArrHigherThanFive(arr, int));
