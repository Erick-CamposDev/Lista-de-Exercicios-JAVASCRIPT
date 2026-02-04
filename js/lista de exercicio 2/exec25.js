function searchSimiliarWords(start, arr) {
  return arr.filter((w) => w.startsWith(start));
}

const arr = ["programação", "profissional", "progama", "junior", "dev"];

console.log(searchSimiliarWords("pro", arr));
