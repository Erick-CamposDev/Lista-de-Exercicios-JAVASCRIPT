/*
Exercício:
Crie uma função que determina o tipo de triângulo (equilátero, isósceles ou escaleno) com base nos valores dos lados, validando se é possível formar um triângulo.
*/

function verifyTriangleType(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return "Valores Invalidos";
  }

  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    return "Não é um triangulo";
  }

  if (side1 === side2 && side2 === side3) {
    return "Triangulo Equilatero";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "Triangulo Isoceles";
  } else {
    return "Triangulo Escaleno";
  }
}

console.log(verifyTriangleType(4.2, 4.2, 4.2));
