function getMonthByNumber(num) {
  if (!Number.isInteger(num)) {
    return "Não aceita números decimais";
  }

  if (num < 1 || num > 12) {
    return "Mês não correspondente!";
  }

  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return months[num - 1];
}

console.log(getMonthByNumber(0));
