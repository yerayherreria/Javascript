/* Ejercicio 4: Eventos de formulario
4.1. Crea un formulario HTML con campos de entrada para el nombre y el correo electrónico. Agrega un botón "Enviar" al formulario. Cuando se haga clic en el botón, valida que los campos de entrada no estén vacíos y muestra un mensaje de éxito o error en la página en función de la validación.

4.2. Agrega una función que dispare un evento personalizado "formularioEnviado" cuando se envíe el formulario con éxito. Escucha este evento y muestra un mensaje personalizado en la consola cuando se dispare. */

let enviar = document.querySelector('button');

enviar.addEventListener('click',function(){
  let nombre=document.getElementById('.nombre');
  let email=document.getElementById('.email');
  if(nombre!="" && email!=""){
    console.log("Correcto");
  } else {
    console.log("Error");
  }
})


