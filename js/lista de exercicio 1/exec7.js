function calcBhaskaraFormula(ax2, bx, c) {
  const delta = bx ** 2 - 4 * ax2 * c;

  if (delta < 0) {
    return "Delta é negativo";
  }

  let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
  let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);

  return [x1, x2];
}

console.log(calcBhaskaraFormula(1, -5, 6));
console.log(calcBhaskaraFormula(2, 3, -2));
console.log(calcBhaskaraFormula(1, -4, 4));
console.log(calcBhaskaraFormula(3, -12, 9));
console.log(calcBhaskaraFormula(1, 2, 5));
