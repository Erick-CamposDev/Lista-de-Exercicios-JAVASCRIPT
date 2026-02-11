/*
Exercício:
Dado um array de produtos, filtre apenas os que possuem preço acima de 100 e retorne a soma dos preços desses produtos.
*/
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 600 },
  { nome: "Teclado", preco: 150 },
];

function sumProductsAbove100(arr) {
  return arr
    .filter((n) => n.preco > 100)
    .reduce((acc, { preco }) => {
      return (acc += preco);
    }, 0);
}

console.log(sumProductsAbove100(produtos));
