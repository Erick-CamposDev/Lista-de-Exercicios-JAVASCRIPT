function gradeSystem(grade) {
  if (grade < 38) {
    return "Aluno Reprovado sem arrendondamento";
  }

  const multipleOf5 = Math.ceil(grade / 5) * 5;

  if (multipleOf5 - grade < 3) {
    return multipleOf5;
  }

  return grade;
}

console.log(gradeSystem(63));
