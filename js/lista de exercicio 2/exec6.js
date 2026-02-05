/*
Exercício:
Crie uma função que receba um valor e retorne o seu oposto. Se for um número, retorne o negativo. Se for um booleano, retorne o inverso. Se for string, retorne uma mensagem de erro.
*/
function returnTheOpposite(value) {
  if (typeof value === "string") {
    return "Apenas booleanos ou numbers são usados mas o parâmetro veio em string";
  } else if (typeof value === "number") {
    return -value;
  } else if (value) {
    return false;
  } else {
    return true;
  }
}
