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

const prices = ["R$ 10", "R$ 250", "R$ 3"];

function formatPrices(arr) {
  return arr.map((p) => Number(p.replace(/R\$\s*/g, "")));
}

console.log(formatPrices(prices));

const countries = ["Brasil", "argentina", "Chile", "uruguai", "Peru"];

function filterStartsWithUpperCase(arr) {
  return arr.filter((c) => /^[A-Z]/.test(c));
}

console.log(filterStartsWithUpperCase(countries));

const words = ["avião", "carro", "feijão", "pão", "livro", "coração"];

function countWordsThatEndsWithAo(arr) {
  const filter = arr.filter((w) => /ão$/.test(w));
  const arrLength = filter.length;

  return { filter, arrLength };
}

console.log(countWordsThatEndsWithAo(words));

const cpfs = ["123.456.789-10", "987.654.321-00"];

function maskCpf(arr) {
  return arr.map((c) =>
    c.replace(/^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/, "$1.***.$3-**")
  );
}

console.log(maskCpf(cpfs));

function sumNumbersInsideStr(arr) {
  let match;

  return arr.reduce((acc, num) => {
    match = num.match(/\d+/g);

    if (match) {
      return (acc += Number(match));
    }

    return acc;
  }, 0);
}

const randomPrices = ["10 reais", "2 maçãs", "abc", "30 dias", "R$ 8"];

console.log(sumNumbersInsideStr(randomPrices));

const filterStrongPasswords = (arr) => {
  return arr.filter((pw) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(pw));
};

const senhas = ["abc123", "Senha123", "segura", "MuitoForte9", "12345678"];

console.log(filterStrongPasswords(senhas));

const phrases = [
  "Curso de JavaScript Avançado!",
  "Regex para Iniciantes",
  "Aprenda Node.js em 7 dias",
];

function convertToSlugUrl(arr) {
  return arr.map((p) => p.replace(/\s+/g, "-").toLowerCase());
}

console.log(convertToSlugUrl(phrases));

const randomWords = ["javascript", "regex", "funcional", "codigo"];

function countVowels(arr) {
  return arr.reduce((acc, str) => {
    let match = str.match(/[aeiou]+/gi);
    let length = match ? match.length : 0;

    return (acc += length);
  }, 0);
}

console.log(countVowels(randomWords));
