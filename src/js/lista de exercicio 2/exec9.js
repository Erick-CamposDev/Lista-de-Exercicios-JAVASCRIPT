/*
Exercício:
Implemente uma função que receba uma string e um número, retornando um array com a string repetida a quantidade de vezes indicada.
*/
function repeat(string, times) {
  const arr = [];

  for (let i = 0; i < times; i++) {
    arr.push(string);
  }

  return arr;
}

console.log(repeat("batata", 3));
