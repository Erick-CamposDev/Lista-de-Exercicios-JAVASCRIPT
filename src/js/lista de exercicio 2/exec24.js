/*
Exercício:
Crie uma função que conte quantas vezes um caractere específico aparece em uma frase.
*/
function countChracter(char, phrase) {
  let count = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (char === phrase[i]) {
      count++;
    } else continue;
  }

  return count;
}

console.log(countChracter("a", "Eu amo ficar jogando!"));
