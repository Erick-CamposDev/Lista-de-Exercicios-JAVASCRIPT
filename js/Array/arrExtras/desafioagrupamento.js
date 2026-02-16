/*
Exercicio:
Dado um array com objetos, agrupe esses objetos em um objeto com a cidades com os nomes das pessoas que
pertencem aquela cidade
*/

const people = [
  { name: "Ana", city: "BH" },
  { name: "Fernando", city: "BH" },
  { name: "Luíz", city: "RS" },
  { name: "Gabriela", city: "SP" },
  { name: "Laura", city: "RJ" },
  { name: "Paulo", city: "RJ" },
  { name: "Alan", city: "SP" },
  { name: "Carolina", city: "BH" },
  { name: "Marcos", city: "SP" },
  { name: "Yasmin", city: "RS" },
];

function groupPeople(arr) {
  const obj = arr.reduce((acc, p) => {
    if (!acc[p.city]) {
      acc[p.city] = [];
    }

    acc[p.city].push(p.name);

    return acc;
  }, {});

  return obj;
}

console.log(groupPeople(people));
