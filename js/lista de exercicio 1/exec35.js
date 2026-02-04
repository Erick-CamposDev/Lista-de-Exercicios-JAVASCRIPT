const arrPile = [1, 2, 3, 4, 5];
const arrAdd = [6, 7, 8, 9, 10];

function addValues(arr) {
  for (let value of arr) {
    arrPile.push(value);
  }

  return arrPile;
}

console.log(addValues(arrAdd));
