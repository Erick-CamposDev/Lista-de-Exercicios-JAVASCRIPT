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
