/*
Exercício:
Crie uma função que calcula o valor de uma anuidade com juros compostos, conforme o mês de pagamento.
*/

function calcAnnuity(value, month) {
  const fees = 0.05;
  const lateMonth = month - 1;

  if (month === 1) {
    return value;
  } else if (month > 1 && month < 13) {
    return value * Math.pow(1 + fees, lateMonth);
  } else {
    return "MES INVALIDO";
  }
}

console.log(calcAnnuity(1250, 2));
