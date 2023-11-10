let login = document.getElementById("login");
let enlace = document.getElementById("comprobar");
let disponibilidad = document.getElementById("disponibilidad");
const URL="https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidad.php";



enlace.addEventListener('click',function(){
    getApi();
})

function getApi(){
    fetch(URL)
    .then(response => response.text())
    .then(data => {
        if(data=="si"){
            crearMensaje("El usuario "+login.value+" esta disponible");
        } else {
            crearMensaje("El usuario "+login.value+" no esta disponible");
        }
    })

    .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
    });
}

function crearMensaje(text){
    let texto = document.createTextNode(text);
    let area=document.createElement("textarea");
    area.appendChild(texto);
    disponibilidad.appendChild(area);
}