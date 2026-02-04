function getSmaller(arr) {
  let smaller = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (smaller > arr[i]) {
      smaller = arr[i];
    }
  }

  return smaller;
}

console.log(getSmaller([10, 15, 4, 45, 26]));
