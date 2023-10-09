/*Ejercicio 3: Captura y Propagación
3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. Agrega un escuchador de eventos al elemento <ul> para que cuando se haga clic en cualquier elemento de la lista, se muestre un mensaje en la consola indicando el texto del elemento clickeado.

3.2. Modifica el ejercicio anterior para que el mensaje en la consola muestre el nivel de jerarquía en el DOM del elemento clickeado. Por ejemplo, si se hace clic en un <li>, el mensaje podría decir "Clickeaste en un elemento de nivel 2". */


let lista = document.querySelector('ul');

lista.addEventListener('click',function(event){
   console.log("Has clicado en: "+event.target.innerText);
})