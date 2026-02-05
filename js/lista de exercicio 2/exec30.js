/*
Exercício:
Crie uma função que, dado um objeto com nomes de alunos e arrays de notas, retorne o nome e a média do aluno com a maior média.
*/
function getBestStudent(obj) {
  let bestStudent = "";
  let bestAverage = 0;

  for (const [name, grade] of Object.entries(obj)) {
    const sum = grade.reduce((acc, s) => (acc += s), 0);
    const average = sum / grade.length;

    if (average > bestAverage) {
      bestStudent = name;
      bestAverage = average;
    }
  }

  return { nome: bestStudent, media: bestAverage };
}

console.log(
  getBestStudent({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  }),
);
