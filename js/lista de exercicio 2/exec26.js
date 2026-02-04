function returnWordWithoutVowels(word) {
  const withoutVowel = word.replace(/[aeiou]/gi, "");

  return withoutVowel;
}

console.log(returnWordWithoutVowels("Cachorro"));
