function calcAnnuity(value, month) {
  const fees = 0.05;
  const lateMonth = month - 1;

  if (month === 1) {
    return value;
  } else if (month > 1 && month < 13) {
    return value * Math.pow(1 + fees, lateMonth);
  } else {
    return "MES INVALIDO";
  }
}

console.log(calcAnnuity(1250, 2));
