/*Ejercicio 1: Introducción a localStorage
a) ¿Qué es localStorage y cuál es su propósito en el desarrollo web? 
Es un mecanismo para almacenar información en el navegador para un dominio específico.

b) Explica la diferencia clave entre localStorage y sessionStorage. 
La diferencia es que los datos de localStorage permanecen guardados pero los datos de sessionStorage se pierden una vez se cierra la conexion con el navegador.

Ejercicio 2: Almacenando Datos Primitivos

a) Utilizando localStorage, almacena tu nombre en el navegador bajo la clave "nombre". 
b) Recupera el nombre almacenado en localStorage y muestra su valor en la consola.

Ejercicio 3: Eliminando Datos Primitivos

a) Utilizando localStorage, almacena tu edad bajo la clave "edad". 
b) Utiliza la función adecuada para eliminar la clave "edad" de localStorage. 
c) Verifica si la clave "edad" aún existe en localStorage.

Ejercicio 4: Almacenando y Recuperando Objetos

a) Crea un objeto JavaScript que represente una persona con propiedades como "nombre", "edad" y "ciudad". 
b) Utiliza JSON.stringify para convertir este objeto en una cadena JSON. 
c) Almacena la cadena JSON en localStorage bajo la clave "persona". 
d) Recupera la cadena JSON de localStorage y utiliza JSON.parse para convertirla de nuevo en un objeto JavaScript. 
e) Muestra en la consola alguna propiedad del objeto recuperado.

Ejercicio 5: Eliminando Objetos

a) Utilizando localStorage, almacena un objeto cualquiera bajo una clave de tu elección. 
b) Utiliza la función adecuada para eliminar la clave que contiene el objeto. 
c) Verifica si la clave que contiene el objeto aún existe en localStorage.
*/

//Ejer2
localStorage.setItem("nombre",'Yeray Herrería');
console.log(localStorage.getItem("nombre"));

//Ejer3
localStorage.setItem("edad",'19');
localStorage.clear();
console.log(localStorage.getItem("edad"));

//Ejer4
let persona = [
    {
        nombre: 'Yeray',
        edad: 19,
        ciudad: 'Sevilla'
    }
]

localStorage.setItem('persona',JSON.stringify(persona));
console.log(JSON.parse(localStorage.getItem("persona")));

//Ejer 5
localStorage.setItem("edad",'19');
localStorage.removeItem("edad");
console.log(localStorage.getItem("edad"));