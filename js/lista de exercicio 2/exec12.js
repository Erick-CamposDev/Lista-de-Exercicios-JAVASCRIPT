function removeProperty(obj, property) {
  delete obj[property];

  return obj;
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.is(removeProperty(obj, "a"), obj));
