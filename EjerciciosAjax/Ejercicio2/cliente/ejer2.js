let login = document.getElementById("login");
let enlace = document.getElementById("comprobar");
let disponibilidad = document.getElementById("disponibilidad");
const URL="https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidadXML.php";


enlace.addEventListener('click',function(){
    getApi();
})

function getApi(){
    fetch(URL)
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "text/xml");
       
        if(xmlDoc.querySelector('disponible').textContent=="si"){
            crearMensaje("El usuario "+login.value+" esta disponible");
        } else {
            crearMensaje("El usuario "+login.value+" no esta disponible");
            crearLista(xmlDoc.querySelectorAll("alternativas login"));
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
        let li=document.createElement("li");        
        let a=document.createElement("a");
        a.href="#";
        a.textContent =login.value+ user.textContent;
        a.addEventListener("click", function() {
            login.value=a.textContent;
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
    disponibilidad.appendChild(ul);
}