/*
Exercício:
Crie uma função que realize a multiplicação de dois números inteiros sem usar o operador de multiplicação (*), apenas somas sucessivas.
*/
function multipliy(num, num2) {
  let cont = 0;
  let result = 0;

  while (cont < num2) {
    result += num;
    cont++;
  }

  return result;
}

console.log(multipliy(5, 0));
