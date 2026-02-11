/*
Exercício:
Dado um array de produtos no carrinho, filtre apenas os da categoria "Eletrônicos", aplique 10% de desconto em cada um e retorne a soma total dos valores com desconto.
*/
const carrinho = [
  { nome: "Celular", preco: 2000, categoria: "Eletrônicos" },
  { nome: "Camisa", preco: 100, categoria: "Roupas" },
  { nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
];

function filterAndApply10PercentDiscount(arr) {
  return arr
    .filter((p) => p.categoria === "Eletrônicos")
    .map((e) => e.preco - e.preco * 0.1)
    .reduce((acc, e) => (acc += e), 0);
}

console.log(filterAndApply10PercentDiscount(carrinho));
