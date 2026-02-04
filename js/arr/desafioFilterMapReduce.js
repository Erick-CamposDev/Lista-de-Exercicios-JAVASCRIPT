//prettier-ignoreS
const students = [
  { nome: "Victor", notaTotal: 68, curso: "Medicina", status: "Em andamento" },
  { nome: "Aline", notaTotal: 81, curso: "Enfermagem", status: "Concluído" },
  { nome: "Tamires", notaTotal: 54, curso: "Direito", status: "Em andamento" },
  {
    nome: "Rodrigo",
    notaTotal: 32,
    curso: "Ciência da Computação",
    status: "Em andamento",
  },
  { nome: "Daniel", notaTotal: 79, cursor: "Engenharia", status: "Concluído" },
  {
    nome: "Leandro",
    notaTotal: 45,
    curso: "Arquitetura",
    status: "Trancou o curso",
  },
  { nome: "Mariana", notaTotal: 88, curso: "Psicologia", status: "Concluído" },
  {
    nome: "Fernanda",
    notaTotal: 60,
    curso: "Administração",
    status: "Trancou o curso",
  },
  { nome: "Bruno", notaTotal: 73, curso: "Biologia", status: "Em andamento" },
  { nome: "Patrícia", notaTotal: 95, curso: "Física", status: "Concluído" },
];

const maxGrade = 100;

//Pega somente os alunos que terminaram os seus cursos
function getApprovedStudents(arr) {
  return arr.filter((student) => student.status === "Concluído");
}

//Transforma as notas em porcentagem

function transformGradesToPercent(arr) {
  return arr.map((student) => `${(student.notaTotal / maxGrade) * 100}%`);
}

//Pega as notas em porcentagem, converte para número e retorna a média dos alunos aprovados

function getAverage(arr) {
  const sum = arr.reduce((acc, n) => {
    const num = parseFloat(n);

    return acc + num;
  }, 0);

  const average = sum / arr.length;

  return `Media: ${average.toFixed(2)}`;
}

const approvedStudents = getApprovedStudents(students);
const approvedStudentsPercent = transformGradesToPercent(approvedStudents);

console.log(approvedStudents);

console.log(approvedStudentsPercent);

console.log(getAverage(approvedStudentsPercent));
