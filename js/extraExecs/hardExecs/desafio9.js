/*
Exercício:
Dado um array de e-mails, filtre apenas os e-mails válidos que terminam com ".com".
*/
const emails = [
  "joao@gmail.com",
  "maria@gmail",
  "pedro@outlook.com",
  "ana@.com",
  "teste@yahoo.com",
];

function filterValidsEmails(arr) {
  return arr.filter((e) => /^[^\s@]+@[^\s@]+\.com$/.test(e));
}

console.log(filterValidsEmails(emails));
