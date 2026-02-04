//*MAP MEDIUM

const transformNamesArray = function (arr) {
  return arr.map((obj) => obj.nome);
};

console.log(
  transformNamesArray([
    { nome: "Ana", idade: 22 },
    { nome: "Carlos", idade: 30 },
  ])
);

const convertPricesToTenDiscount = (arr) => {
  return arr.map((price) => price - price * 0.1);
};

console.log(convertPricesToTenDiscount([50, 100, 200]));

const convertCelsiusToFahrenheit = (arr) => arr.map((temp) => 1.8 * temp + 32);

console.log(convertCelsiusToFahrenheit([0, 10, 30]));

//*FILTER MEDIUM

const filterOnlyAboveEighteenYearsOld = function (arr) {
  return arr.filter((user) => user.idade > 18);
};

console.log(
  filterOnlyAboveEighteenYearsOld([
    { nome: "Lucas", idade: 17 },
    { nome: "Ana", idade: 22 },
  ])
);

const filterOnlyNegativeNumbers = (arr) => {
  return arr.filter((num) => num < 0);
};

console.log(filterOnlyNegativeNumbers([10, -5, 3, -2, 0]));

const filterProductsAboveOneHundred = (arr) =>
  arr.filter((prod) => prod.preco > 100);

console.log(
  filterProductsAboveOneHundred([
    { nome: "Teclado", preco: 80 },
    { nome: "Monitor", preco: 450 },
  ])
);

//*REDUCE MEDIUM

const sumPrices = function (arr) {
  return arr.reduce((acc, price) => {
    return (acc += price);
  }, 0);
};

console.log(sumPrices([29.9, 49.9, 10]));

const countNumbers = (arr) => {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
};

console.log(countNumbers([1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]));

const sumOnlyEven = (arr) =>
  arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc += num;
    }
    return acc;
  }, 0);

console.log(sumOnlyEven([1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]));
