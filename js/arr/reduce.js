const students = [
  { aluno: "Fernando", nota: 9.4, bolsista: true },
  { aluno: "Vitor", nota: 9.4, bolsista: false },
  { aluno: "Samara", nota: 9.4, bolsista: false },
  { aluno: "Tamires", nota: 9.4, bolsista: true },
  { aluno: "Olavo", nota: 9.4, bolsista: true },
  { aluno: "Leandro", nota: 9.4, bolsista: false },
];

const everyoneHasScholarship = students
  .map((s) => s.bolsista)
  .reduce((has, value) => has && value, true);

const itHasScholarship = students
  .map((s) => s.bolsista)
  .reduce((has, value) => has || value, true);

console.log(everyoneHasScholarship, itHasScholarship);
