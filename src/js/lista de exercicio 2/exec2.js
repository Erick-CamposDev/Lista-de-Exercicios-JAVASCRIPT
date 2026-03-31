/*
Exercício:
Crie uma função que receba a idade de uma pessoa (em anos) e retorne a idade expressa em dias. Considere apenas anos completos.
*/
function ageInDays(age) {
  if (!Number.isInteger(age)) {
    return "Não pode números racionais ou palavras";
  }

  if (age < 0) {
    return `Idade Inválida`;
  }

  return age * 365;
}

console.log(ageInDays());
