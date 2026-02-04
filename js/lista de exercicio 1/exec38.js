/*
Exercício:
Imprima todos os números ímpares entre dois valores informados, em ordem crescente ou decrescente.
*/

function printFrom0To100(start = 0, end = 0) {
  if (start > end) {
    for (let i = start; i > end; i--) {
      if (i % 2 !== 0) {
        console.log(i);
      } else {
        continue;
      }
    }
  }

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    } else {
      continue;
    }
  }
}
