function ageInDays(age) {
  if (!Number.isInteger(age)) {
    return "Não pode números racionais ou palavras";
  }

  if (age < 0) {
    return `Idade Inválida`;
  }

  return age * 365;
}

console.log(ageInDays());
