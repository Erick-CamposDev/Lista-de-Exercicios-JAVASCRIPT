//*MAP EASY

function double(array) {
  return array.map((num) => num * 2);
}

console.log(double([3, 5, 231, 2.1, -1, 41]));

function toUpperCaseArr(array) {
  return array.map((str) => str.toUpperCase());
}

console.log(toUpperCaseArr(["ana", "joão", "maria"]));

function wordLengthArr(array) {
  return array.map((value) => value.length);
}

console.log(wordLengthArr(["casa", "computador", "sol"]));

//*FILTER EASY

function onlyBiggerThanTen(array) {
  return array.filter((num) => num > 10);
}

console.log(onlyBiggerThanTen([5, 12, 8, 20, 3]));

function moreThanFiveLetters(array) {
  return array.filter((word) => word.length > 5);
}

console.log(
  moreThanFiveLetters([
    "Arroz",
    "Danilo",
    "Vitor",
    "Dado",
    "Baunilha",
    "Cor",
    "Beringela",
  ])
);

function onlyEvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}

console.log(onlyEvenNumbers([12, 5, 2, 5, 1, 2, 3]));

//*REDUCE EASY

function sumArray(array) {
  return array.reduce((acc, num) => {
    return num + acc;
  }, 0);
}

console.log(sumArray([10, 20, 30]));

function findTheBiggestNumber(array) {
  return array.reduce((acc, num) => {
    return num > acc ? num : acc;
  }, array[0]);
}

console.log(
  findTheBiggestNumber([10, 10, 1, 21, 24, 71, 22, 3, 8, 100, 123, 28, 12])
);

function countWords(array) {
  return array.reduce((acc) => {
    return acc + 1;
  }, 0);
}

console.log(countWords(["Array", "Javascript", "Dado", "Valor"]));
