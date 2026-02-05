/*
Exercício:
Crie uma função que determine se um ano é bissexto. Retorne true para anos bissextos e false caso contrário.
*/
function isALeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isALeapYear(2024), isALeapYear(2000), isALeapYear(1900));
