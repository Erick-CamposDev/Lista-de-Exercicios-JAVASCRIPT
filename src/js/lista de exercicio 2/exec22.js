/*
Exercício:
Crie uma função que sorteie um número aleatório entre 1 e um valor máximo informado, e retorne uma mensagem indicando se o número sorteado foi igual ao valor máximo.
*/
function getRandomNumber(num) {
  const randomNum = Math.floor(Math.random() * num + 1);

  return randomNum === num
    ? `Parabéns! O número sorteado foi ${randomNum}!`
    : `Que pena! O número sorteado foi ${randomNum}!`;
}

console.log(getRandomNumber(7));
