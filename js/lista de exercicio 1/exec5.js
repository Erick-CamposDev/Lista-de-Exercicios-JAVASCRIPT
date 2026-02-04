/*
Exercício:
Crie uma função que formata um valor numérico para o padrão monetário brasileiro (R$), com duas casas decimais.
*/

function formatMoney(value) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

console.log(formatMoney(0.233942491));
