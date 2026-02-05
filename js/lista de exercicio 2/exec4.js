/*
Exercício:
Crie uma função que, dado o número de um mês (1 a 12), retorne o nome correspondente desse mês em português. Caso o número seja inválido, retorne uma mensagem apropriada.
*/
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
