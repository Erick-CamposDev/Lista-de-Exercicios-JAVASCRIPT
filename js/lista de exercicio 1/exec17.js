/*
Exercício:
Implemente uma função que calcula o salário reajustado conforme o plano informado ('a', 'b' ou 'c'), aplicando o percentual correto.
*/

function calculateSalary(plan, salary) {
  switch (plan) {
    case "a":
      return salary + salary * 0.1;
    case "b":
      return salary + salary * 0.15;
    case "c":
      return salary + salary * 0.2;
    default:
      return "Não possui esse plano";
  }
}

console.log(calculateSalary("d", 1345));
