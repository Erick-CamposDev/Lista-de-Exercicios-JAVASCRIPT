Array.prototype.mapear = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
};

const arr = [32, 52, 52, 3, 14, 5];

const mapeado = arr.mapear((a) => a * 2);

console.log(mapeado);
