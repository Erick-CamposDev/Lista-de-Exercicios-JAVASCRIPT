/*
Exercício:
Crie uma função que analisa uma lista de pontuações, retornando quantas vezes o recorde foi quebrado e em qual jogo ocorreu o pior desempenho.
*/

function verifyPerfomance(list) {
  let brokeRecord = 0;
  let bestScore = list[0];
  let worstGame = list[0];
  let worstGameIndex = 0;

  for (let i = 1; i < list.length; i++) {
    if (bestScore < list[i]) {
      bestScore = list[i];
      brokeRecord++;
    }

    if (worstGame > list[i]) {
      worstGame = list[i];
      worstGameIndex = i + 1;
    }
  }

  return [brokeRecord, worstGameIndex];
}

console.log(verifyPerfomance([23, 21, 15, 8, 32, 41, 32, 4, 21, 7, 12, 21]));
