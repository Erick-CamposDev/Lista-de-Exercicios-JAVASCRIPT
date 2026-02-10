/*
Exercicio:
Implemente uma função que some todos os valores em um array
*/

function sumArray(array) {
  return array.reduce((acc, num) => {
    return num + acc;
  }, 0);
}
