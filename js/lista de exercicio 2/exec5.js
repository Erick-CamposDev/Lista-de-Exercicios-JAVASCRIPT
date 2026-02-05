/*
Exercício:
Implemente uma função que receba dois valores numéricos e retorne se o primeiro é maior ou igual ao segundo. Não considere valores do tipo string.
*/
function biggerOrEqual(num1, num2) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return false;
  }

  return num1 >= num2;
}

console.log(biggerOrEqual(5, 1));
