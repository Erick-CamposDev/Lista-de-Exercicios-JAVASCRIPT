function objectToArray(obj) {
  const mainArr = Object.entries(obj);

  return mainArr;
}

const obj = {
  nome: "Maria",
  profissao: "Desenvolvedora de Software",
};

console.log(objectToArray(obj));
