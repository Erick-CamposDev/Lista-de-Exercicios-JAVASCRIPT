/*
Exercício:
Utilize o método map para transformar um array de strings JSON em um array de preços formatados em reais (R$), extraindo e formatando o valor de cada objeto.
*/
const carrinho = [
  '{"nome": "Pincel", "preco": 5.74}',
  '{"nome": "Cola Super Bonder", "preco": 7.40}',
  '{"nome": "Estojo Metálico", "preco": 25.00}',
  '{"nome": "Borracha", "preco": 4.21}',
];

const preços = carrinho.map((json) => {
  const obj = JSON.parse(json);

  return `R$ ${parseFloat(obj.preco.toFixed(2).replace(".", ","))}`;
});

console.log(preços);
