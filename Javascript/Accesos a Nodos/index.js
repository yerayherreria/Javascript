// Ejercicio 1: Acceso a Elementos del DOM
// 1.1. Utiliza document.getElementById() para obtener el nodo con el id "main" de tu página web de ejemplo. Imprime el nodo en la consola.
console.log(document.getElementById("main"));
// 1.2. Usa document.getElementsByClassName() para obtener todos los elementos con la clase "error" en tu página web de ejemplo. Imprime la colección en la consola.
console.log(document.getElementsByClassName("error"));
// 1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos <p> de tu página web de ejemplo. Imprime la colección en la consola.
console.log(document.getElementsByTagName("p"));
// 1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase "error" en tu página. Imprime el nodo en la consola.
console.log(document.querySelector("p.error"));
// 1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase "error" en tu página. Imprime la colección en la consola.
console.log(document.querySelectorAll("p.error"));
// 1.6. Obtén por consola, al menos de 2 formas diferentes:
// El elemento con id ‘input2’
console.log(document.getElementById("input2"));
console.log(document.querySelector("input.input2"));
// La colección de párrafos
console.log(document.getElementsByTagName("p"));
console.log(document.querySelector("p"));
// Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
console.log(document.querySelectorAll("div>p"));
console.log(document.getElementById("lipsum"));
// El formulario (ojo, no la colección con el formulario sino sólo el formulario)
console.log(document.querySelector("form"));
console.log(document.getElementsByTagName("form"));
// Todos los inputs
console.log(document.getElementsByTagName("input"));
console.log(document.querySelectorAll("input"));
// Sólo los inputs con nombre ‘sexo’
console.log(document.getElementsByName('input[name="sexo"]'));
console.log(document.querySelectorAll('input[name="sexo"]'));
// Los items de lista de la clase ‘important’ (sólo los LI)
console.log(document.getElementsByClassName("important"));
console.log(document.getElementsByName("important"));

// Ejercicio 2: Acceso a Nodos Relacionados
// 2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola.
let p=document.querySelector("#lipsum p");
console.log(document.querySelector("#lipsum p"));
// 2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del párrafo obtenido en el ejercicio 2.1. Imprime el nodo en la consola.
let p2=p.nextElementSibling;
console.log(p2);
// 2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo obtenido en el ejercicio 2.2. Imprime el nodo en la consola.
let padre=p2.parentElement;
console.log(padre);
// 2.4. Obtén por consola, al menos de 2 formas diferentes:
// El primér párrafo que hay dentro del div ‘lipsum’
console.log(document.querySelector("#lipsum p"));
// El segundo párrafo de ‘lipsum’
let pp = document.querySelectorAll("#lipsum p");
let pp2=p.nextElementSibling;
console.log(pp2);
// El último item de la lista
let lista=document.querySelectorAll("li");
let ultimo=lista[lista.length-1];
console.log(ultimo);
// La label de ‘Escoge sexo’
let labels= document.querySelectorAll("label")
let ultLabel= labels[labels.length-1];
console.log(ultLabel);

// Ejercicio 3: Propiedades de Nodos
// 3.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable.
let parrafo1=document.querySelector("#lipsum p");
// 3.2. Utiliza la propiedad innerHTML para obtener el contenido HTML completo del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.
console.log(parrafo1.innerHTML);
// 3.3. Emplea la propiedad textContent para obtener el contenido de texto del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.
console.log(parrafo1.textContent);
// 3.4. Utiliza document.querySelector() para obtener el primer input de tipo "text" en tu página web de ejemplo. Almacena este nodo en una variable.
let input = document.querySelector("input[type=text]");
// 3.5. Usa la propiedad value para obtener el valor del input obtenido en el ejercicio 3.5. Imprime el valor en la consola, al menos de 2 formas:

// El innerHTML de la etiqueta de ‘Escoge sexo’
console.log(document.querySelector("label:last-of-type").innerHTML);
// El textContent de esa etiqueta
console.log(document.querySelector("label:last-of-type").textContent);
// El valor del primer input de sexo
console.log(document.querySelector('input[name="sexo"]').value);
// El valor del sexo que esté seleccionado (difícil, búscalo por Internet)
console.log(document.querySelector('input[name="sexo"]:checked').value);
