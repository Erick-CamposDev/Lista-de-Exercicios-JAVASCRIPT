/*
Exercício:
Implemente funções que utilizam expressões regulares para validar se uma string contém apenas dígitos, encontrar vogais, verificar se a primeira letra é maiúscula e remover caracteres que não sejam letras ou espaços.
*/
function onlyDigits(str) {
  return /^\d+$/g.test(str);
}

console.log(onlyDigits("asd123"));
console.log(onlyDigits("231123"));
console.log(onlyDigits("33123"));
console.log(onlyDigits("123sd123"));
console.log(onlyDigits("1sd12a"));
console.log(onlyDigits("123234"));

function findVowel(str) {
  return str.match(/[AEIOUaeiou]{1}/g);
}

console.log(findVowel("Eu sou fascinado por programaçao"));

function verifyFirstUpperLetter(str) {
  return /^[A-Z]/g.test(str);
}

console.log(verifyFirstUpperLetter("Tulio"));
console.log(verifyFirstUpperLetter("joao"));
console.log(verifyFirstUpperLetter("ALMEIDA"));

function removeExceptLetters(str) {
  return str.replace(/[^\sA-Za-z]/g, "");
}

console.log(removeExceptLetters("Ola tudo bem? !!13qeq Eu sou 1 gato!!"));
