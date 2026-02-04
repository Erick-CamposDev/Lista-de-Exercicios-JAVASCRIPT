function childrenGrowth(height1, height2, hgRate, hgRate2) {
  let taller, shorter;
  let shortRate, tallRate;

  if (height1 === height2) {
    return "As duas crianças tem alturas iguais";
  }

  if (height1 < height2) {
    taller = height2;
    shorter = height1;
    tallRate = hgRate2;
    shortRate = hgRate;
  } else {
    taller = height1;
    shorter = height2;
    tallRate = hgRate;
    shortRate = hgRate2;
  }

  if (shortRate <= tallRate) {
    return `Não ultrapassará`;
  }

  let years = 0;

  while (shorter < taller) {
    shorter += shortRate;
    taller += tallRate;
    years++;
  }

  return `A criança menor ultrapassará a maior em ${years} anos.`;
}

console.log(childrenGrowth(145, 124, 6, 8));
