/*
Exercicio:
Crie uma função que filtre apenas pessoas com idade maior que 18 anos em um objeto.
*/

const filterOnlyAboveEighteenYearsOld = function (arr) {
  return arr.filter((user) => user.idade > 18);
};
