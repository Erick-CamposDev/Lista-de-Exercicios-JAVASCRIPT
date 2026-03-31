/*
Exercício:
Desenvolva funções para calcular juros simples e compostos, recebendo capital, taxa e tempo de aplicação.
*/

function calcSimpleInterest(capital, tax, appTime) {
  let decimalTax = tax / 100;

  return capital * (1 + decimalTax * appTime);
}

function calcCompoundInterest(capital, tax, appTime) {
  let decimalTax = tax / 100;

  return capital * (1 + decimalTax) ** appTime;
}

console.log(
  calcSimpleInterest(320, 12, 31).toFixed(2),
  calcCompoundInterest(212, 34, 25).toFixed(2),
);
