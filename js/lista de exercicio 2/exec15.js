function evenArr(arr) {
  const evenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }

  return evenArr;
}

const arr = [2, 3, 7, 1, 3, 2, 8, 9, 12, 3];

console.log(evenArr(arr));
