/*
Exercício:
Dado um array de nomes de países, filtre apenas os que começam com letra maiúscula.
*/
const countries = ["Brasil", "argentina", "Chile", "uruguai", "Peru"];

function filterStartsWithUpperCase(arr) {
  return arr.filter((c) => /^[A-Z]/.test(c));
}

console.log(filterStartsWithUpperCase(countries));
