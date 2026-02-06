const sells = [
  "João - R$ 120",
  "Maria - R$ 80",
  "Pedro - R$ 200",
  "Ana - R$ 50",
  "Vanessa - R$ 250",
  "Augusto - R$ 175",
  "Caroline - R$ 350",
  "Eduardo - R$ 120",
  "Natália - R$ 55 e R$ 40",
];

function extractNumbers(arr) {
  return arr.map((sell) => {
    const match = sell.match(/\d+/g);

    if (match) {
      return match.reduce((acc, n) => acc + Number(n), 0);
    }

    return 0;
  });
}

function filterSellsLower100(arr) {
  return arr.filter((sell) => sell >= 100);
}

function sumValidSells(arr, sells) {
  return sells.reduce(
    (acc, sell, i) => {
      acc.total += sell;

      const sellerName = arr[i].match(/^[A-ZÀ-ÿ]+/i)[0];
      acc.sellers.push(sellerName);

      return acc;
    },
    { total: 0, sellers: [] },
  );
}
const sellerValues = extractNumbers(sells);
const valuesFiltered = filterSellsLower100(sellerValues);

console.log(sumValidSells(sells, valuesFiltered));
