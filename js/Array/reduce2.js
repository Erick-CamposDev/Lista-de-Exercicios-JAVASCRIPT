/*
Exercício:
Implemente o método personalizado "reduza" no protótipo de Array, que funciona como o método reduce, acumulando valores de um array conforme uma função callback e um valor inicial.
*/
Array.prototype.reduza = function (callback, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

const arr = [5, 1, 6, 2, 3, 5];

const result = arr.reduza((acc, n) => {
  return (acc += n);
}, 0);

console.log(result);
