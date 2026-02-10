/*
Exercício:
Implemente uma função que simula o comportamento do método forEach, executando uma ação para cada elemento de um array e exibindo o índice, valor e o array completo.
*/
const arr = [2, 5, 2, 5, 1, 3, 6, 7];

function paraCada(arr, action) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const index = i;

    action(value, index, arr);
  }
}

paraCada(arr, (valor, indice, array) => {
  console.log(`INDEX: ${indice}, VALOR: ${valor}`);
  console.log(array);
});
