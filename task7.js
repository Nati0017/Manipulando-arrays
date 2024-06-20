const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
function agregarNumeroAFila(numero, indiceFila) {
  arr[indiceFila].push(numero);
}

function agregarNuevaFila(nuevaFila) {
 arr.push(nuevaFila);
}

function eliminarNumeroDeFila(indiceFila, indiceColumna) {
 arr[indiceFila].splice(indiceColumna, 1);
}

function revertirFila(indiceFila) {
  arr[indiceFila].reverse();
}

console.log("Matriz original:");
console.log(arr);

agregarNumeroAFila(10, 1);

agregarNuevaFila([11, 12, 13]);

eliminarNumeroDeFila(1, 2);

revertirFila(0);

console.log("Matriz después de los cambios:");
console.log(arr);

  
  // Type your code above this line!