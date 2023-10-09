/* Ejercicio 1: Eventos Básicos
1.1. Crea una página HTML con un botón. Agrega un escuchador de eventos para que cuando se haga clic en el botón, se muestre un mensaje en la consola del navegador.

1.2. Agrega otro elemento HTML (por ejemplo, un enlace) en la página y agrega un escuchador de eventos para que cuando se pase el mouse sobre el elemento, el color de fondo cambie.

1.3. Agrega un escuchador de eventos al elemento document.body para que cuando se mueva el ratón en cualquier punto de la ventana del navegador, muestre en algún elemento (puedes agregar un <div> o <p> al HTML) la posición del puntero respecto al navegador y respecto a la página.
*/
let boton = document.getElementById('miBoton');
boton.addEventListener("click", function () {
    console.log('Ola ke ase.');
});

let enlace = document.getElementById('enlace');
enlace.addEventListener("mousemove", function () {
    enlace.style.background='red';
}); 

document.body.addEventListener('mousemove', (event) => {
    document.body.appendChild(document.createElement('div').appendChild(document.createTextNode('Posicion X: '+event.clientX,' Posicion Y: '+event.clientY)))
});