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
