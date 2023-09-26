// Ejercicio 1: Funciones y Arrow Functions
// Crea una función llamada saludar que tome un nombre como argumento y muestre un mensaje de saludo en la consola. Luego, reescribe la misma función utilizando una arrow function.
function saludar(nombre){
    return "Hola "+nombre;
}
console.log(saludar("Manolo"));

let saludo = nombre => "Hola "+nombre;
console.log(saludo("Manolo"));

// Ejercicio 2: Parámetros y Valores por Defecto
// Crea una función llamada potencia que calcule la potencia de un número dado a un exponente dado. La función debe tener un valor por defecto de exponente igual a 2.
function potencia(base, exponente=2) {
    let resultado=1;
    for (let i=1; i<=exponente; i++) {
        resultado*=base;
    }
    return resultado;
}
console.log(potencia(2,2));

// Ejercicio 3: Funciones de Primera Clase
// Crea una función llamada aplica_fn que tome un número y una función como argumentos y aplique la función al número. Prueba la función con una función que devuelva el cuadrado del número.
const CUADRADO = function(valor) {
    return valor * valor
}
function aplica_fn(valor, otraFun) {
    return otraFun(valor);
}

console.log(aplica_fn(4, CUADRADO));

// Ejercicio 4: Métodos de Programación Funcional
// Dado el siguiente array de números [1, 2, 3, 4, 5, 6, 7, 8, 9], realiza las siguientes operaciones:
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Utiliza filter para crear un nuevo array con los números pares.
let pares = num.filter(function(numero) {
    if (numero%2==0) {
      return true;
    } else {
      return false;
    } 
}) 
console.log(pares);
// Utiliza map para crear un nuevo array con los cuadrados de los números.
let cuadrado = num.map(numeros => numeros * numeros);
console.log(cuadrado);
// Utiliza reduce para calcular la suma de todos los números.
let suma = num.reduce((total,numeros) => total+=numeros);
console.log(suma);
// Utiliza every para verificar si todos los números son mayores que 0.
let mayorCero = num.every(numeros => numeros>0);
console.log(mayorCero);
// Utiliza some para verificar si algún número es mayor que 10.
let mayorDiez = num.every(numeros => numeros>10);
console.log(mayorDiez);

// Ejercicio 5: Copia y Referencia
// Dado el siguiente objeto:
const PERSONA = {
    nombre: "Juan",
    edad: 30,
    direccion: {
        calle: "Calle Principal",
        ciudad: "Ciudad"
    }
};
// Crea una copia independiente del objeto persona utilizando spread ({...}).
let copia ={...PERSONA};
console.log(copia);
// Modifica la edad en la copia y verifica si la edad en el objeto original ha cambiado.
copia.edad=31;
console.log(copia);
// Modifica la calle en la copia y verifica si la dirección en el objeto original ha cambiado.
copia.direccion.calle="Santander";
console.log(copia);
console.log(PERSONA);

// Ejercicio 6: Desestructuración de Arrays y Objetos
// Dado el siguiente array [1, 2, 3, 4, 5]:
let array =  [1,2,3,4,5];
// Utiliza la desestructuración para asignar los valores a las variables a, b, c, d, y e.
let [a, b, c, d, e] = array;
console.log(array);
// Realiza la misma tarea para el objeto { nombre: "Alice", edad: 25 }.

// Ejercicio 7: Sets y Eliminación de Duplicados
// Dado el siguiente array con nombres repetidos:
const NOMBRES = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];
// Crea un set para eliminar los nombres duplicados.
let nombresNoDuplicados = new Set(NOMBRES);
// Convierte el set de nuevo en un array y muestra la lista de nombres únicos.
let nombreNoDuplicados = Array.from(new Set(NOMBRES));