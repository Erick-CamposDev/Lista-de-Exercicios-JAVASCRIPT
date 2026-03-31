/*
Exercício:
Dado um array de preços em formato de string, retorne um novo array apenas com os valores numéricos.
*/
const prices = ["R$ 10", "R$ 250", "R$ 3"];

function formatPrices(arr) {
  return arr.map((p) => Number(p.replace(/R\$\s*/g, "")));
}

console.log(formatPrices(prices));
