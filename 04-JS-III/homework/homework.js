// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

    return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
   var ultimo = ''
    ultimo = array
   return ultimo [ultimo.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largo=''
  largo = array
  return largo.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
    var arrayInt=''
    arrayInt=array

    longitud= arrayInt.length 
    for (i=0; i<longitud; i++){
      arrayInt[i]=arrayInt[i] + 1
    }

return arrayInt

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var arrayInt1=''
  arrayInt1 = array
  arrayInt1.push(elemento)

  return  arrayInt1

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var arrayInt2=''
  arrayInt2 = array
  arrayInt2.unshift (elemento)

  return  arrayInt2
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var arrayInt3 = ''
  var cadena = ''
  arrayInt3 = palabras
  var longitud2 = arrayInt3.length

    for (i=0; i<longitud2; i++){

      if (i===longitud2-1) {cadena = cadena + arrayInt3 [i]; return cadena}
      cadena= cadena + arrayInt3[i] + ' '
    }
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    var arrayInt4= ''
    arrayInt4= array
    var longitud3 = arrayInt4.length

    for (i=0; i<longitud3; i++){

      if(arrayInt4[i] === elemento) {return true}
    }

    return false

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
    var arrayInt5= ''
    arrayInt5= numeros
    var longitud4 = arrayInt5.length
    var sumaInt=0

    for (i=0; i<longitud4; i++){

      sumaInt = sumaInt + arrayInt5[i]
    }

    return sumaInt

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var arrayInt6= ''
    arrayInt6= resultadosTest
    var longitud5 = arrayInt6.length
    var sumaInt2=0

    for (i=0; i<longitud5; i++){

      sumaInt2 = sumaInt2 + arrayInt6[i]
    }
      sumaInt2 = sumaInt2/ (longitud5)
    return sumaInt2
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

    var arrayInt7= ''
    arrayInt7= numeros
    var longitud6 = arrayInt7.length
    var compara= arrayInt7[0]

    for (i=1; i<longitud6; i++){

      if(arrayInt7[i]> compara ) {compara = arrayInt7[i]}
      
    }
      
    return compara
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
    
    var arrayInt8= ''
    arrayInt8 = arguments
    var longitud7 = arrayInt8.length
    var multi= 1

    if(longitud7 === 0){return 0}

      for (i=0; i<longitud7; i++){
        multi = multi * arrayInt8[i]
    }
      
    return multi

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
      var arregloInt = arreglo

      function cantidadElementos (arregloInt){

        var arrayInt9= ''
        arrayInt9 = arregloInt
        var longitud8 = arrayInt9.length

        var cuenta=0

          for (i=0; i<longitud8; i++){

            if(arrayInt9[i] > 18 ){ cuenta = cuenta + 1}

          }
        return cuenta
      }

    return cantidadElementos(arregloInt)
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
     
  var numeroInt= numeroDeDia

  function saberDia (numeroInt){

    if (numeroInt === 1 || numeroInt === 7) {return 'Es fin de semana'}

    return 'Es dia Laboral'

  }

  return saberDia (numeroInt)

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  comparaInt = n

  function compara9 (comparaInt){

    var convierteInt = ''
    convierteInt = convierteInt + comparaInt

    if (convierteInt[0] === '9') {return true}

    return false

  }

  return compara9(comparaInt)
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  var igulalesInt = ''
      igulalesInt = arreglo
      longitudIgula = igulalesInt.length
  var contadorInt=0
  
      for (i=1; i<longitudIgula; i++){

        if (igulalesInt[0] === igulalesInt[i]) {contadorInt= contadorInt + 1}

      }
  if (contadorInt === longitudIgula - 1) {return true}
  return false

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
   var mesInt= ''
   mesInt=array
   var cuentaMes = mesInt.length
   var arrayNuevo=[]
   var contadorMes = 0

   for (i=0; i<cuentaMes; i++){

    if(mesInt[i] === 'Enero') {arrayNuevo.push (mesInt[i]); contadorMes = contadorMes +1}
    if(mesInt[i] === 'Marzo') {arrayNuevo.push (mesInt[i]); contadorMes = contadorMes +1}
    if(mesInt[i] === 'Noviembre') {arrayNuevo.push (mesInt[i]); contadorMes = contadorMes +1}

   }

   if (contadorMes === 3) {return arrayNuevo}
   return 'No se encontraron los meses pedidos'
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arrayInt10= ''
  arrayInt10 = array
  var longitud10 = arrayInt10.length
  var nuevoArray2 =[]

  for (i=0; i<longitud10; i++){
     if (arrayInt10[i] > 100) {nuevoArray2.push (arrayInt10[i]) }
  }
      return nuevoArray2
 
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var arrayNuevo3 = []
  arrayNuevo3[0]= numero
  var bandera =0
  arrayNuevo3 [0]= arrayNuevo3[0] + 2

   for (i=1; i<10; i++){
    arrayNuevo3[i]=arrayNuevo3[i-1] + 2
    if (arrayNuevo3[i] === i){ bandera =1; break}
   }

    if(bandera === 1){return 'Se interrumpió la ejecución'}

    return arrayNuevo3
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var arrayNuevo4 = []
  arrayNuevo4[0]= numero + 2
  var a=1

   for (i=1; i<10; i++){

    if (i===4) {continue}
    arrayNuevo4[a]=arrayNuevo4[a-1] + 2 
    a = a+1
    
   }

    return arrayNuevo4
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
