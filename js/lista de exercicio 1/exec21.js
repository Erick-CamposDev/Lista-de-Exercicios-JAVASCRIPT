function identifyHealthPlan(age) {
  if (age < 10) return `Você deve pagar ${100 + 80}R$`;
  else if (age >= 10 && age <= 30) return `Você deve pagar ${100 + 50}R$`;
  else if (age > 30 && age <= 60) return `Você deve pagar ${100 + 95}R$`;
  else if (age > 60) return `Você deve pagar ${100 + 130}R$`;
  else return "Idade Inválida";
}

console.log(identifyHealthPlan(60));
