function calculateSalary(plan, salary) {
  switch (plan) {
    case "a":
      return salary + salary * 0.1;
    case "b":
      return salary + salary * 0.15;
    case "c":
      return salary + salary * 0.2;
    default:
      return "Não possui esse plano";
  }
}

console.log(calculateSalary("d", 1345));
