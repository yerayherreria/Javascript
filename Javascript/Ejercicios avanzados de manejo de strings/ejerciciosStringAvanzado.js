// Parte 1: Manipulación de Cadenas
// Escribe una función llamada capitalizarPalabras que tome una cadena de texto y devuelva la misma cadena con la primera letra de cada palabra en mayúscula. Por ejemplo, si la entrada es "hola mundo", la función debería devolver "Hola Mundo".
function capitalizarPalabras(texto){
    return texto.substring(0,1).toUpperCase() + texto.substring(1);
}
console.log(capitalizarPalabras("hola mundo"));
// Crea una función llamada invertirCadena que tome una cadena y la invierta. Por ejemplo, si la entrada es "JavaScript", la función debería devolver "tpircSavaJ".
function invertirCadena(texto){
    let textoAlReves="";
    for(let i=texto.length;i>=0;i--){
        textoAlReves+=texto.charAt(i);
    }
    return textoAlReves;
}
console.log(invertirCadena("JavaScript"));
// Implementa una función llamada contarVocales que tome una cadena y devuelva el número de vocales que contiene. Considera tanto vocales mayúsculas como minúsculas.
function contarVocales(texto){
    const VOCALES="AEIOU";
    let numVocales=0;
    for(let i=0;i<texto.length;i++){
        if(VOCALES.includes(texto.charAt(i).toUpperCase())){
            numVocales++;
        }
    }
    return numVocales;
}
console.log(contarVocales("JAvaScript"));
// Escribe una función llamada eliminarDuplicados que tome una cadena y elimine cualquier carácter duplicado, dejando solo una aparición de cada carácter en la cadena resultante. Por ejemplo, si la entrada es "programming", la función debería devolver "progamin".
function eliminarDuplicados(texto){
    let textoSinDuplicado='';
    for(let i=0;i<texto.length;i++){
        if(!textoSinDuplicado.includes(texto.charAt(i).toLowerCase())){
            textoSinDuplicado+=texto.charAt(i);
        }
    }
    return textoSinDuplicado;
}
console.log(eliminarDuplicados("programming"));

// Parte 2: Validación de Formatos
// Crea una función llamada validarEmail que tome una cadena y determine si es una dirección de correo electrónico válida. Debe verificar si la cadena tiene el formato adecuado de una dirección de correo electrónico.

// Implementa una función llamada esTelefono que tome una cadena y determine si representa un número de teléfono válido. Debe tener en cuenta diferentes formatos de números de teléfono, como "(123) 456-7890" o "1234567890".

// Parte 4: Análisis de Palíndromos
// Crea una función llamada esPalindromoFrase que tome una cadena de texto y determine si es un palíndromo de frase. Debe ignorar espacios, puntuación y diferenciar mayúsculas de minúsculas. Por ejemplo, "Anita lava la tina" debería considerarse un palíndromo de frase.
function esPalindromoFrase(frase){
    let textoAlReves="";
    let textosinEspacios="";
    for(let i=frase.length;i>=0;i--){
        if(frase.charAt(i)!=" ")
        textoAlReves+=frase.charAt(i);
    }
    for(let i=0;i<frase.length;i++){
        if(frase.charAt(i)!=" "){
            textosinEspacios+=frase.charAt(i);
        }
    }
    return textosinEspacios.toLowerCase()==textoAlReves.toLowerCase();
}
console.log(esPalindromoFrase("Anita lava la tina"));
// Implementa una función llamada encontrarPalindromos que tome una cadena de texto y devuelva una lista de todas las palabras que son palíndromos. Por ejemplo, si la entrada es "radar nivel hola mundo", la función debería devolver ["radar", "nivel"].
function encontrarPalindromos(frase){
    let tmpPalabra="";
    let palabrasPalindromas=[];
    for(let i=0;i<frase.length;i++){
        if(frase.charAt(i)==" "){
            if(esPalindromoFrase(tmpPalabra)){
                palabrasPalindromas.push(tmpPalabra);
            }
            tmpPalabra="";
        }
        tmpPalabra+=frase.charAt(i);
    }
    return palabrasPalindromas;
}
console.log(encontrarPalindromos("radar nivel oso hola mundo"))