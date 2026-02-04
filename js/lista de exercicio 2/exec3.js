function calculateSalary(hours, amount) {
  const tot = hours * amount;

  return `O salário é igual a R$ ${parseFloat(tot).toFixed(2).replace(".", ",")}`;
}

console.log(calculateSalary(150, 40.5));
