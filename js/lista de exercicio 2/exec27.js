function invertObj(obj) {
  const invertedObj = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    invertedObj[values[i]] = keys[i];
  }

  return invertedObj;
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(invertObj(obj));
