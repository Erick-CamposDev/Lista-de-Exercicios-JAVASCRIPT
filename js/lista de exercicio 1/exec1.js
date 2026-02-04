/*
Exercício:
Implemente uma função que realiza operações matemáticas básicas (+, -, *, /) entre dois números, tratando divisão por zero e operadores desconhecidos.
*/

function calculateNums(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Não é possivel dividir número por 0";
      } else {
        return num1 / num2;
      }
    default:
      return "Operador desconhecido";
  }
}

console.log(calculateNums(0, 2, "/"));
