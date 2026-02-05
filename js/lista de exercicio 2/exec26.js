/*
Exercício:
Crie uma função que remova todas as vogais de uma palavra recebida como parâmetro.
*/
function returnWordWithoutVowels(word) {
  const withoutVowel = word.replace(/[aeiou]/gi, "");

  return withoutVowel;
}

console.log(returnWordWithoutVowels("Cachorro"));
