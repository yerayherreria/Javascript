// Parte 1: Manejo de strings
// Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.
// Por ejemplo la siguiente llamada a la función:
// longitud("Ana");
// Debería devolver 3.
let nombre = 'Manolo';
let apellido = "Martinez";
let apellido2 = "Martinez";
let num = 2;
let letra = 'o';

function contarLongitudPalabra(palabra) {
    return palabra.length;
}
console.log(contarLongitudPalabra(nombre));

// Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.
function devuelvePrimeraLetra(palabra) {
    return palabra.charAt(0);
}
console.log(devuelvePrimeraLetra(nombre));

// Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.
function devuelveUltimaLetra(palabra) {
    return palabra.charAt(palabra.length-1);
}
console.log(devuelveUltimaLetra(nombre));

// Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.
function devuelveEnesimaLetra(palabra,numero) {
    return palabra.charAt(numero-1);
}
console.log(devuelveEnesimaLetra(nombre,num));

// Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.
let frase = "wonderful day";
let fragmento = frase.substring(3,7);
console.log(fragmento);

// Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la mayor. En caso de que ambas cadenas sean iguales, devolveremos la correspondiente al primer parámetro de la función.
function devuelveMasLarga(palabra1,palabra2) {
    let resultado = "";
    if (palabra1.length == palabra2,length){
        resultado=palabra1;
    } else if (palabra1.length > palabra2,length) {
        resultado=palabra1;
    } else {
        resultado=palabra2;
    }
    return resultado;
}
console.log(devuelveMasLarga(nombre,apellido));

// Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la mayor. En caso de que al menos dos cadenas tengan igual longitud, devolveremos el texto Hay al menos dos cadenas iguales.
function devuelveMasLarga2(palabra1,palabra2,palabra3) {
    let resultado = palabra3;
    if (palabra1.length == palabra2,length || palabra1.length == palabra3,length || palabra3.length == palabra2,length){
        resultado="Hay al menos dos cadenas iguales";
    } else if (palabra1.length > palabra2,length) {
        resultado=palabra1;
    } else if (palabra1.length > palabra3,length) {
        resultado=palabra1;
    } else if (palabra2.length > palabra1,length) {
        resultado=palabra2;
    } else if (palabra2.length > palabra3,length) {
        resultado=palabra2;
    }
    return resultado;
}
console.log(devuelveMasLarga2(nombre,apellido,apellido2));

// Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.
function generarNombre(palabra1,palabra2,palabra3) {
    let resultado = palabra3;
    if (palabra1.length <5 || palabra2.length <5 || palabra3.length <5){
        resultado="Error";
    } 
    resultado = palabra1.substring(0,2)+palabra2.substring(0,2)+palabra3.substring(0,2);
    return resultado;
}
console.log(generarNombre(nombre,apellido,apellido2));

// Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.
function generarNombre2(palabra1,palabra2,palabra3) {
    let resultado = palabra3;
    if (palabra1.length <5 || palabra2.length <5 || palabra3.length <5){
        resultado="Error";
    } 
    resultado = palabra1.charAt(palabra1.length-1)+palabra2.charAt(palabra2.length-1)+palabra3.charAt(palabra3.length-1);
    return resultado;
}
console.log(generarNombre2(nombre,apellido,apellido2));

// Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.
function generarNombre3(palabra1,palabra2,palabra3) {
    let resultado = palabra3;
    if (palabra1.length <5 || palabra2.length <5 || palabra3.length <5){
        resultado="Error";
    } 
    resultado = palabra1.substring(palabra1.length-4,palabra1.length-1)+palabra2.substring(palabra2.length-4,palabra2.length-1)+palabra3.substring(palabra3.length-4,palabra3.length-1);
    return resultado;
}
console.log(generarNombre3(nombre,apellido,apellido2));

// Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.
function tieneLetra(palabra,letra2) {
    let resultado = false;
    if (palabra.indexOf(letra2) != -1){
        resultado=true;
    } 
    return resultado;
}
console.log(tieneLetra(nombre,letra));

//  Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas
function tieneLetra2(palabra,letra2) {
    let resultado = false;
    letra.toLocaleLowerCase;
    palabra
    if (palabra.indexOf(letra2) != -1){
        resultado=true;
    } 
    return resultado;
}
console.log(tieneLetra2(nombre,letra));

//  Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número.
function crearPalabra(num,letra2) {
    return letra2.repeat(num);
}
console.log(crearPalabra(num,letra));

// Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.
function crearPalabra2(num,letra2) {
    return letra2.repeat(num).toUpperCase();
}
console.log(crearPalabra2(num,letra));

// Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.
function addGuiones(palabra) {
    let resultado="";
    for (let i=0;i<palabra.length;i++){
        resultado += palabra.charAt(i) + "-";
    }
    return resultado;
}
console.log(addGuiones(nombre));

//  Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.
function contadorDeLetras(palabra,letra) {
    let cont=0;
    for (let i=0;i<palabra.length;i++){
        if (palabra.charAt(i)==letra){
            cont+=1;
        }
    }
    return cont;
}
console.log(contadorDeLetras(nombre,letra));

//  Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.
function contadorDeLetras2(palabra,letra) {
    let cont=0;
    for (let i=0;i<palabra.length;i++){
        if (!palabra.charAt(i).localeCompare(letra)){
            cont+=1;
        }
    }
    return cont;
}
console.log(contadorDeLetras2(nombre,letra));

//  Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.
// Por ejemplo, la siguiente llamada a la función:

// toCase("Pablo");

// Devería devolver: pablo-Pablo
function toCase(palabra) {
    return palabra.toLowerCase()+"-"+palabra.toUpperCase();
}
console.log(toCase(nombre));

//  Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.
// Por ejemplo, la llamada a la función:

// shortcut('Amnesty', 'International');
// Debería devolver «AI».
function shortcut(palabra1,palabra2) {
    return palabra1.charAt(0)+palabra2.charAt(0);
}
console.log(shortcut(nombre,apellido));

// 20. Escribe una función llamada firstChar, que devuelva la primera letra que no sea un espacio cuando una cadena de texto es pasada.

// Para ello, podemos eliminar los espacios en blanco que pudiera haber al principio y al final de la cadena de texto utilizando la el método trim(). Si no estás muy seguro de como funciona este método, consúltalo en internet, que no es tan difícil!.

// Por ejemplo, la llamada a la función:

// firstChar(" Rosa Parks ");
// Debería devolver R.
function firstChar(palabra1) {
    palabra1.trim();
    return palabra1.charAt(0);
}
console.log(firstChar(nombre));

// 21. Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la primera. La función no debería tener en cuenta mayúsculas y minúsculas.

// Por ejemplo:

// indexOfIgnoreCase("bit","it");
// y

// indexOfIgnoreCase("bit","IT");
// deberían devolver 1
function indexOfIgnoreCase(palabra,texto) {
    return palabra.indexOf(texto);
}
console.log(indexOfIgnoreCase("bit","it"));

// 22. Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.

// Por ejemplo:

// firstWord("see and stop");
// debería devolver «see».
function firstWord(palabra) {
    palabra.trim();
    return palabra.substring(0,palabra.indexOf(" "));
}
console.log(firstWord("see and stop"));

// Parte 2: Template Literals

// Crea una función llamada saludoPersonalizado que tome un nombre y una edad como argumentos y utilice un template literal para devolver un saludo personalizado que incluya el nombre y la edad.
function saludoPersonalizado(nombre,edad){
    return `Hola ${nombre} tienes ${edad} años`;
}

console.log(saludoPersonalizado(nombre,19));

// Utiliza un template literal para crear una cadena que muestre una lista de compras con varios elementos. Luego, muestra esa cadena en la consola.
// Escribe una función llamada informacionProducto que tome un objeto con información de un producto (nombre, precio, categoría, etc.) y utilice un template literal para generar una descripción del producto. Luego, muestra esa descripción en la consola.
function informacionProducto(nombre,precio,categoria){
    return `El producto ${nombre} cuesta ${precio} y pertenece a la categoria ${categoria}.`;
}

console.log(informacionProducto("Iphone","345€","Móviles"));
// Parte 3: DNI y Letra

// Implementa una función llamada validarDNI que tome un número de DNI (con o sin letra) como argumento y determine si es un DNI válido. La función debe calcular la letra correspondiente al número y compararla con la letra proporcionada (si se proporciona). Devuelve true si es válido y false si no lo es.

// Prueba la función validarDNI con varios números de DNI, incluyendo algunos con letra y otros sin ella.


function validarDNI(numero,letra){
    const LETRAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'Y', 'Z'];
    
    return (numero > 0 && numero < 99999999) && (LETRAS[numero%23]==letra);
}

console.log(validarDNI("28984753","S"));