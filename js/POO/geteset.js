/*
Exercício:
Implemente um objeto de conta bancária com propriedades privadas e utilize getters e setters para controlar o acesso e validação do saldo.
*/
const bankAccount = {
  holder: "Matheus",
  _balance: 1823,

  get balance() {
    return this._balance;
  },

  set balance(balance) {
    if (balance < 0) {
      throw new Error("Saldo abaixo de zero!");
    } else {
      this._balance = balance;
    }
  },
};

try {
  bankAccount.balance = -20;
} catch (e) {
  console.log(`ERRO: ${e.message}`);
}
