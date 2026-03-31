/*
Exercício:
Implemente uma função que, dado um prefixo e um array de palavras, retorne apenas as palavras que começam com esse prefixo.
*/
function searchSimiliarWords(start, arr) {
  return arr.filter((w) => w.startsWith(start));
}

const arr = ["programação", "profissional", "progama", "junior", "dev"];

console.log(searchSimiliarWords("pro", arr));
