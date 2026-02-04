/*
Exercício:
Crie uma função que retorna mensagens diferentes para tipos de automóveis, conforme o modelo informado.
*/

function resaleCars(car) {
  switch (car) {
    case "hatch":
      return "A compra foi realizada com sucesso";
    case "sedan":
    case "motocicleta":
    case "caminhonete":
      return "Você tem certeza que não prefere esse modelo?";
    default:
      return "Não trabalhamos com esse tipo de automovel aqui";
  }
}

console.log(resaleCars("sedan"));
