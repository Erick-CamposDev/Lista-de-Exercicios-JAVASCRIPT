/*
Exercício:
Dado um array de alunos, filtre apenas os que possuem nota acima de 7 e retorne uma lista com o nome e a sala de cada um.
*/
const alunos = [
  { nome: "Ana", idade: "16", sala: 502, nota: 8.6 },
  { nome: "Gustavo", idade: "13", sala: 532, nota: 7.8 },
  { nome: "Marcelo", idade: "19", sala: 512, nota: 4.1 },
  { nome: "Naiara", idade: "17", sala: 505, nota: 5.7 },
];

function getStudentsAbove7(arr) {
  return arr
    .filter((s) => s.nota > 7)
    .map((s) => `Nome: ${s.nome} Sala: ${s.sala}`);
}

console.log(getStudentsAbove7(alunos));
