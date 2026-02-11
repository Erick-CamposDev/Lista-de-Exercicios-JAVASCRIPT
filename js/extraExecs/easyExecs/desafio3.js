/*
Exercicio:
Inverta as duas váriaveis sem usar destructuring
*/

let a = 94;
let b = 7;

let newA = a;

a = b;
b = newA;

console.log(`${a} e ${b}`);
