function triangleArea(base, height) {
  const area = (base * height) / 2;

  return Math.round(area).toFixed(2);
}

console.log(triangleArea(10, 15));
