function sumArr(arr) {
  return arr.reduce((acc, n) => {
    return (acc += n);
  }, 0);
}

const arr = [20, 20, 20, 20];

console.log(sumArr(arr));
