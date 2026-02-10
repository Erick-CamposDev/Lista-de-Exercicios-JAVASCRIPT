/*
Exercicio:
Implemente uma função que remove qualquer caractere que não seja letra.
*/

function removeExceptLetters(str) {
  return str.replace(/[^\sA-Za-z]/g, "");
}
