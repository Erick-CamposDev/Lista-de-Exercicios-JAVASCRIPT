/*
Exercício:
Implemente funções que utilizam expressões regulares para validar se uma string contém apenas dígitos.
*/
function onlyDigits(str) {
  return /^\d+$/g.test(str);
}

