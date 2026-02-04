function arithmeticProgression(term, firstTerm, commonDifference) {
  for (let i = 0; i < term; i++) {
    const finalTerm = firstTerm + i * commonDifference;
    console.log(finalTerm);
  }
}

arithmeticProgression(5, 2, 3);

function geometricProgression(term, firstTerm, commonDifference) {
  for (let i = 0; i < term; i++) {
    const finalTerm = firstTerm * commonDifference ** i;
    console.log(finalTerm);
  }
}

geometricProgression(5, 2, 3);
