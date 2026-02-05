/*
Exercício:
Crie uma função que receba um número e retorne uma string formada por esse número de símbolos "+".
*/
function plusSymbol(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    str += "+";
  }

  return str;
}

console.log(plusSymbol(3));
