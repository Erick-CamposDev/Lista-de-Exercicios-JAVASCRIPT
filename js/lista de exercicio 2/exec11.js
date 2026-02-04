function getFirstAndLastElement(arr) {
  return [arr[0], arr[arr.length - 1]];
}

const arr = ["batata", 3, 62, 6.3, true];

console.log(getFirstAndLastElement(arr));
