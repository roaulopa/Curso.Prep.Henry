// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

    var srt1 = nombre
    var str2 = ' '
    
    str2=srt1[0].toUpperCase ()
    return str2 + srt1.slice(1)

  
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

    return cb()

}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.


  //Tu código:

   return cb(n1,n2)


}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  
  var SumaNumero=numeros
  var resul= SumaNumero.reduce (function (acumulador, elemento) { return acumulador + elemento}, 0)
  cb (resul)

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
   
  //var ArrayRecib = array

  array.forEach( function (elemento, indice) { cb (elemento)})


}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  let nuevoarray =[]
  let long=''
  long = array

  for (i=0; i<=long.length-1; i++) {
     cb (array [i])
     nuevoarray [i]= cb (array [i])
  }
  return nuevoarray

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let nuevoarray=[]
  let cont=0

  array.forEach( function (elemento, indice) { if (elemento[0]=== 'a'){nuevoarray[cont]=elemento;cont= cont +1}})

  return nuevoarray

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
