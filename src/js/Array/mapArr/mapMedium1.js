/*
Exercicio:
Faça uma função que retorne apenas os nomes em um objeto com varias outras propriedades.
*/

const transformNamesArray = function (arr) {
  return arr.map((obj) => obj.nome);
};
