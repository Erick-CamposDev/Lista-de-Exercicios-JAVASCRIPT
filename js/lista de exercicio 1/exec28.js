const arr = [2, 5, 3, 1, 3, 6, 4, 10, 22, 11, 2];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  } else {
    continue;
  }
}
