let login = document.getElementById("login");
let enlace = document.getElementById("comprobar");
let disponibilidad = document.getElementById("disponibilidad");
const URL="https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidadJSON.php";


enlace.addEventListener('click',function(){
    getApi();
})

function getApi(){
    fetch(URL)
    .then(response => response.json())
    .then(response => {
       console.log(response)
       
        if(response.disponible=="si"){
            crearMensaje("El usuario "+login.value+" esta disponible");
        } else {
            crearMensaje("El usuario "+login.value+" no esta disponible");
            let users = Array.from(response.alternativas);
            crearLista(users);
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

function crearLista(users){
    let ul=document.createElement("ul");
    users.forEach(user => {
        console.log(user)
        let li=document.createElement("li");        
        let a=document.createElement("a");
        a.href="#";
        a.textContent =login.value+ user;
        a.addEventListener("click", function() {
            login.value=a.textContent;
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
    disponibilidad.appendChild(ul);
}

