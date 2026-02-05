/*
Exercício:
Implemente uma função que receba um array de números e retorne a soma de todos os elementos.
*/
function sumArr(arr) {
  return arr.reduce((acc, n) => {
    return (acc += n);
  }, 0);
}

const arr = [20, 20, 20, 20];

console.log(sumArr(arr));
