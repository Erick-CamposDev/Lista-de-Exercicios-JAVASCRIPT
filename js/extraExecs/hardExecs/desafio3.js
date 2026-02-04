//!DESAFIOS DIFICEIS

const alunos = [
  { nome: "Ana", idade: "16", sala: 502, nota: 8.6 },
  { nome: "Gustavo", idade: "13", sala: 532, nota: 7.8 },
  { nome: "Marcelo", idade: "19", sala: 512, nota: 4.1 },
  { nome: "Naiara", idade: "17", sala: 505, nota: 5.7 },
];

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 600 },
  { nome: "Teclado", preco: 150 },
];

const usuarios = [
  { nome: "Ana", idade: 20, salario: 2000 },
  { nome: "João", idade: 17, salario: 1500 },
  { nome: "Carlos", idade: 30, salario: 4000 },
];

const carrinho = [
  { nome: "Celular", preco: 2000, categoria: "Eletrônicos" },
  { nome: "Camisa", preco: 100, categoria: "Roupas" },
  { nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
];

function getStudentsAbove7(arr) {
  return arr
    .filter((s) => s.nota > 7)
    .map((s) => `Nome: ${s.nome} Sala: ${s.sala}`);
}

console.log(getStudentsAbove7(alunos));

function powerArray(arr) {
  return arr.map((n) => n ** 2);
}

console.log(powerArray([4, 52, 5, 1, 2, 3]));

const sumOddNumbers = (arr) => {
  return arr
    .filter((n) => n % 2 !== 0)
    .reduce((acc, n) => {
      return (acc += n);
    }, 0);
};

console.log(sumOddNumbers([3, 5, 1, 2, 4, 6, 8, 88, 2, 3, 10, 1]));

function sumProductsAbove100(arr) {
  return arr
    .filter((n) => n.preco > 100)
    .reduce((acc, { preco }) => {
      return (acc += preco);
    }, 0);
}

console.log(sumProductsAbove100(produtos));

function filterSalaryAndCalcAverage(arr) {
  return (
    arr
      .filter((user) => user.idade > 17)
      .map((user) => user.salario)
      .reduce((acc, user) => acc + user, 0) / arr.length
  );
}

console.log(filterSalaryAndCalcAverage(usuarios));

function filterAndApply10PercentDiscount(arr) {
  return arr
    .filter((p) => p.categoria === "Eletrônicos")
    .map((e) => e.preco - e.preco * 0.1)
    .reduce((acc, e) => (acc += e), 0);
}

console.log(filterAndApply10PercentDiscount(carrinho));
