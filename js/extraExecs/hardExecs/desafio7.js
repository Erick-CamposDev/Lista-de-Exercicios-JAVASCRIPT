/*
Exercício:
Dado um array de usuários, filtre apenas os maiores de 17 anos, calcule a soma dos salários desses usuários e divida pelo tamanho total do array para obter a média salarial geral.
*/
const usuarios = [
  { nome: "Ana", idade: 20, salario: 2000 },
  { nome: "João", idade: 17, salario: 1500 },
  { nome: "Carlos", idade: 30, salario: 4000 },
];

function filterSalaryAndCalcAverage(arr) {
  return (
    arr
      .filter((user) => user.idade > 17)
      .map((user) => user.salario)
      .reduce((acc, user) => acc + user, 0) / arr.length
  );
}

console.log(filterSalaryAndCalcAverage(usuarios));
