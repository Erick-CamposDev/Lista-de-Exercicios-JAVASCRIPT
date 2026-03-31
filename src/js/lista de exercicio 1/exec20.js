/*
Exercício:
Implemente uma função que simula um caixa eletrônico, mostrando a quantidade de notas necessárias para um determinado valor.
*/

function atm(money) {
  const ballots = [100, 50, 20, 10, 5, 1];

  for (let i = 0; i < ballots.length; i++) {
    let amount = Math.floor(money / ballots[i]);

    if (amount > 0) {
      console.log(`${amount} notas de ${ballots[i]}`);

      money -= amount * ballots[i];
    }
  }
}

atm(12010);
