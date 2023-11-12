let municipio = document.getElementById("municipio");
let divMunicipio = document.getElementById("municipios");
const teclasPermitidas = ["Enter","ArrowUp","ArrowDown"]
let liSelect = document.getElementsByClassName("select");
let index=0;
let cache={};

function autoCompletar(letras,event){
    if(!teclasPermitidas.includes(event)){
        if(document.querySelector("#listMunicipio") != null){
            document.querySelector("#listMunicipio").remove();
        }

        let ul = document.createElement("ul");
        ul.setAttribute("id","listMunicipio");
        divMunicipio.appendChild(ul);

        if(!cache[letras]){
            const formData = new FormData();
            formData.append("municipio",letras);
            
            fetch('https://intranetjacaranda.es/Ejercicios/autocompletaMunicipios.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(response => { 
                cache[letras]=response;
                addList(response,ul)
            })
            .catch(err => console.error(err));

        } else {
            cache[letras].forEach(element => {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(element));
                ul.appendChild(li);
            });
        }
    }else if(teclasPermitidas.includes(event)){
        let listMunicipio = document.getElementById("listMunicipio");
        let municipios = Array.from(listMunicipio.childNodes);
        console.log(municipios);

        if(event=="ArrowDown"){
            listMunicipio.children[index].classList.remove("select");
            municipios[++index%municipios.length].className="select";
            liSelect = document.getElementsByClassName("select")[0];
        } else if(event=="ArrowUp"){
            listMunicipio.children[index].classList.remove("select");
            municipios[--index%municipios.length].className="select";
            liSelect = document.getElementsByClassName("select")[0];
        } else if(event=="Enter"){
            municipio.value = liSelect.textContent;
            document.querySelector("#listMunicipio").remove();
        }
    }
}

function addList(municipios,ul){
    municipios.forEach(municipio => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(municipio));
        ul.appendChild(li);
    });
}

municipio.addEventListener("keyup",(event)=>{
    if(municipio.value){
        autoCompletar(municipio.value,event.key);
    }
})
