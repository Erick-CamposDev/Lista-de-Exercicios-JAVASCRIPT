/*
Exercício:
Dado um array de strings, some todos os números presentes nas strings e retorne o total.
*/
const randomPrices = ["10 reais", "2 maçãs", "abc", "30 dias", "R$ 8"];

function sumNumbersInsideStr(arr) {
  let match;

  return arr.reduce((acc, num) => {
    match = num.match(/\d+/g);

    if (match) {
      return (acc += Number(match));
    }

    return acc;
  }, 0);
}

console.log(sumNumbersInsideStr(randomPrices));
