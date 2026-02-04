function getRandomNumber(num) {
  const randomNum = Math.floor(Math.random() * num + 1);

  return randomNum === num
    ? `Parabéns! O número sorteado foi ${randomNum}!`
    : `Que pena! O número sorteado foi ${randomNum}!`;
}

console.log(getRandomNumber(7));
