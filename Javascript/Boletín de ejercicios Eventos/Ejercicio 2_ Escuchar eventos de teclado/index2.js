/* Ejercicio 2: Escuchar eventos de teclado
2.1 Agrega un escuchador de eventos al elemento document.body para que cuando se presione cualquier tecla, muestre un mensaje de alerta con el nombre de la tecla pulsada y su código.

2.2 Prueba el escuchador de eventos con diferentes teclas para verificar que muestra correctamente el nombre y el código de la tecla pulsada.*/


document.body.addEventListener('keydowm', (event) => {
   alert('Nombre: '+event.key+' ,Código: '+event.code);
   console.log("AA")
});