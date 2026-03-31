/*
Exercicio:
Crie uma função que retorne um objeto com as chaves sendo os números do array e os valores sendo quantas vezes eles apareceram.
*/

const countNumbers = (arr) => {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
};
