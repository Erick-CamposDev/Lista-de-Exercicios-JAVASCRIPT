/*
Exercício:
Utilize o método concat para unir diferentes arrays e exiba os resultados.
*/

const intArr = [2, 6, 1, 3, 7, 1, 2, -2, 6, -12, 812, 13];
const strArr = ["Pão", "Naruto", "Caju", "Rato", "Prato", "Copo"];
const doubleArr = [1.23, 6.12, 4.36, 9.12, 52.12, 52.61, 94.12];

const result = intArr.concat(doubleArr);
const result2 = intArr.concat(strArr);
const result3 = doubleArr.concat(strArr);

console.log(result);
console.log(result2);
console.log(result3);
