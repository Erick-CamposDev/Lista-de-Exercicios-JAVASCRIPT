/*
Exercício:
Dado um array de CPFs, oculte parte dos dígitos de cada CPF utilizando máscara.
*/
const cpfs = ["123.456.789-10", "987.654.321-00"];

function maskCpf(arr) {
  return arr.map((c) =>
    c.replace(/^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/, "$1.***.$3-**"),
  );
}

console.log(maskCpf(cpfs));
