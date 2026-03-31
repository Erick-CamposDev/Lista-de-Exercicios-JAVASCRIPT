/*
Exercício:
Crie uma função que verifica se duas strings possuem os mesmos caracteres.
*/

function itContainsAllCharacters(str, str2) {
  for (let i = 0; i < str.length; i++) {
    if (!str2.includes(str[i])) {
      return false;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!str.includes(str2[i])) {
      return false;
    }
  }

  return true;
}

console.log(itContainsAllCharacters("alo", "ola"));
