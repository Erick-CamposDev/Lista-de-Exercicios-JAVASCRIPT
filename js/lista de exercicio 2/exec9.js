function repeat(string, times) {
  const arr = [];

  for (let i = 0; i < times; i++) {
    arr.push(string);
  }

  return arr;
}

console.log(repeat("batata", 3));
