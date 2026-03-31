/*
Exercício:
Dado um array de palavras, conte o total de grupos de vogais presentes em todas as palavras.
*/
const randomWords = ["javascript", "regex", "funcional", "codigo"];

function countVowels(arr) {
  return arr.reduce((acc, str) => {
    let match = str.match(/[aeiou]+/gi);
    let length = match ? match.length : 0;

    return (acc += length);
  }, 0);
}

console.log(countVowels(randomWords));
