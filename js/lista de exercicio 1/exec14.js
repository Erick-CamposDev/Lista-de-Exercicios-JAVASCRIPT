function fruitStore(fruit) {
  switch (fruit) {
    case "Maçã":
      return "Não vendemos essa fruta";
    case "Kiwi":
      return "Estamos com escassez de Kiwi";
    case "Melancia":
      return "Aqui está, 3 reais o quilo";
    default:
      throw new Error("Fruta Desconhecida");
  }
}

console.log(fruitStore("Maçã"));
