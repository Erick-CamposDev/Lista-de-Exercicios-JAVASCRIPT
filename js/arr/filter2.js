Array.prototype.filtrar = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

const arr = [1, 6, 2, 3, 8, 2, 5, 9, 10, 4, 2, 4];

const result = arr.filtrar((p) => p > 4);
const result2 = arr.filter((p) => p > 4);

console.log(result, result2);
