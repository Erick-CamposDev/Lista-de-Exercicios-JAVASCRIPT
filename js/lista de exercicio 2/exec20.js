/*
Exercício:
Crie uma função que calcule a área de um triângulo, dados a base e a altura, e retorne o valor arredondado para duas casas decimais.
*/
function triangleArea(base, height) {
  const area = (base * height) / 2;

  return Math.round(area).toFixed(2);
}

console.log(triangleArea(10, 15));
