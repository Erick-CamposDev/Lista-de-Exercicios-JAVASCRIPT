function formatMoney(value) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

console.log(formatMoney(0.233942491));
