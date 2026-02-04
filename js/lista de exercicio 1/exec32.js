const arr = [4, 6, 1, 6, 2, 1, 9, 7, 4];

function calcAverageArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;

  return average.toFixed(2);
}

console.log(calcAverageArr(arr));
