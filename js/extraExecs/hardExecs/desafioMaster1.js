const produtos = [
  { nome: "Teclado", preco: 120, categoria: "Periféricos" },
  { nome: "Mouse", preco: 60, categoria: "Periféricos" },
  { nome: "Monitor", preco: 900, categoria: "Tela" },
  { nome: "Notebook", preco: 3500, categoria: "Computador" },
  { nome: "Headset", preco: 200, categoria: "Periféricos" },
];

function sumFilteredPrices(arr) {
  return arr
    .filter(({ categoria }) => categoria === "Periféricos")
    .reduce((acc, { preco }) => {
      return (acc += preco);
    }, 0);
}

function mapPeripherals(arr) {
  return arr.map((p) => `${p.nome} - R$${p.preco}`);
}

function sumPrices(arr) {
  return arr.reduce((acc, { preco }) => {
    return acc + preco;
  }, 0);
}

console.log(sumFilteredPrices(produtos));
