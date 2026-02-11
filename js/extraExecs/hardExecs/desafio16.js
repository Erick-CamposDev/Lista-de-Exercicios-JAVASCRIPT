/*
Exercício:
Dado um array de frases, converta cada frase para o formato slug (todas minúsculas e palavras separadas por hífen).
*/
const phrases = [
  "Curso de JavaScript Avançado!",
  "Regex para Iniciantes",
  "Aprenda Node.js em 7 dias",
];

function convertToSlugUrl(arr) {
  return arr.map((p) => p.replace(/\s+/g, "-").toLowerCase());
}

console.log(convertToSlugUrl(phrases));
