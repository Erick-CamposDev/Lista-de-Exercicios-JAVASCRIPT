/*
Exercício:
Implemente uma função que conte a quantidade de palavras em uma string recebida como parâmetro.
*/
function countWords(str) {
  const strSplited = str.trim().split(/\s+/);
  let count = 0;

  strSplited.forEach((_) => {
    count++;
  });

  return count;
}

console.log(countWords("Sou bem legal!"));
