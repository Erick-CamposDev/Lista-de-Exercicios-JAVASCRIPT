/*
Exercício:
Crie uma função que remova uma propriedade de um objeto, dado o nome da propriedade, e retorne o objeto modificado.
*/
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
