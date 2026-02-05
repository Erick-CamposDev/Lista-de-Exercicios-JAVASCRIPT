/*
Exercício:
Implemente uma função que calcule o salário mensal de um funcionário, dado o número de horas trabalhadas e o valor da hora, retornando o valor no formato "O salário é igual a R$ X,XX".
*/
function calculateSalary(hours, amount) {
  const tot = hours * amount;

  return `O salário é igual a R$ ${parseFloat(tot).toFixed(2).replace(".", ",")}`;
}

console.log(calculateSalary(150, 40.5));
