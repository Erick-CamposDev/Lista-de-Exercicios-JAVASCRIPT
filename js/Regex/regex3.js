/*
Exercicio:
Crie uma função que retorne apenas as vogais de uma palavra, utilize regex
*/

function findVowel(str) {
  return str.match(/[AEIOUaeiou]{1}/g);
}
