/*
Exercício:
Crie uma função que calcula o fatorial de um número.
*/

function calcFactorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(calcFactorial(4));
