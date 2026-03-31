/*
Exercicio:
Implemente uma função que verifique se a primeira letra de uma palavra é maiuscula.
*/

function verifyFirstUpperLetter(str) {
  return /^[A-Z]/g.test(str);
}
