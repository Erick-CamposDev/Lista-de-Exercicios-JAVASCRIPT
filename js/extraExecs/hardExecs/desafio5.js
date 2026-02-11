/*
Exercício:
Dado um array de números, some apenas os valores ímpares presentes no array.
*/
const sumOddNumbers = (arr) => {
  return arr
    .filter((n) => n % 2 !== 0)
    .reduce((acc, n) => {
      return (acc += n);
    }, 0);
};

console.log(sumOddNumbers([3, 5, 1, 2, 4, 6, 8, 88, 2, 3, 10, 1]));
