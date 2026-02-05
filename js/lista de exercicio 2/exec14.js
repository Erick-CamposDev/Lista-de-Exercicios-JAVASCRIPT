/*
Exercício:
Crie uma função que converta um objeto em um array de arrays, onde cada subarray representa um par chave-valor do objeto.
*/
function objectToArray(obj) {
  const mainArr = Object.entries(obj);

  return mainArr;
}

const obj = {
  nome: "Maria",
  profissao: "Desenvolvedora de Software",
};

console.log(objectToArray(obj));
