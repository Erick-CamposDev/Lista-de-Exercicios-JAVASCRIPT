function totalExpenses(arr) {
  const prices = arr.map((p) => p.preco);

  return prices.reduce((acc, p) => {
    return (acc += p);
  }, 0);
}

const expenses = [
  {
    nome: "Jornal Online",
    categoria: "Entretenimento",
    preco: 89.99,
  },
  {
    nome: "Consulta de Odontologia",
    categoria: "Saúde",
    preco: 150.0,
  },
];

console.log(totalExpenses(expenses));
