/*
Exercício:
Dado um array de senhas, filtre apenas as senhas fortes (mínimo 8 caracteres, pelo menos uma letra maiúscula e um número).
*/
const filterStrongPasswords = (arr) => {
  return arr.filter((pw) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(pw));
};

const senhas = ["abc123", "Senha123", "segura", "MuitoForte9", "12345678"];

console.log(filterStrongPasswords(senhas));
