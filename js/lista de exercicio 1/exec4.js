function getRemainderAndQuotient(dividend, divisor) {
  if (divisor === 0) {
    return "Não é possivel dividir por 0";
  }

  return [dividend / divisor, dividend % divisor];
}

const [quotient, remainder] = getRemainderAndQuotient(6, 0);
