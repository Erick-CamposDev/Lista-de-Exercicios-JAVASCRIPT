const products = [
  { name: "Mesa Gamer", price: 850, fragil: false },
  { name: "Processador Ryzen", price: 750, fragil: true },
  { name: "Placa de Video RTX", price: 2100, fragil: true },
  { name: "Cadeira Gamer", price: 550, fragil: false },
  { name: "SSD 512 GB", price: 500, fragil: true },
  { name: "Gabinete", price: 350, fragil: false },
  { name: "Placa Mae", price: 800, fragil: true },
];

const result = products.filter((p) => p.price > 700 && p.fragil === true);

console.log(result);
