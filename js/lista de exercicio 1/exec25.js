/*
Exercício:
Imprima todos os números pares de 0 a 100 usando estrutura de repetição.
*/

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}
