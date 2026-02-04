function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Não é possivel dividir por 0";
      }

      return num1 / num2;
    default:
      throw new Error("OPERADOR INVALIDO");
  }
}

console.log(calculator(5, "/", 0));
