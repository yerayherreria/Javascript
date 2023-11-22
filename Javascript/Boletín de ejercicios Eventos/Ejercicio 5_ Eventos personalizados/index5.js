/*
Ejercicio 5: Eventos personalizados
5.1. Crea un nuevo evento personalizado llamado "miEvento" utilizando new CustomEvent().

5.2. Agrega un escuchador de eventos a un elemento HTML (puedes usar un botón) para escuchar el evento "miEvento" y mostrar un mensaje de alerta cuando ocurra.

5.3. Dispara manualmente el evento "miEvento" en el elemento y verifica que se muestra el mensaje de alerta.
*/


const miEvento = new CustomEvent('miEvento');

let enviar = document.querySelector('button');

enviar.addEventListener('miEvento',() => {
  alert('Esta ocurriendo');
});

enviar.dispatchEvent(miEvento);