let provincia = document.getElementById("provincias");
let municipio = document.getElementById("municipios");
const URL_PROVINCIAS="https://intranetjacaranda.es/Ejercicios/cargaProvinciasJSON.php";
const URL_MUNICIPIOS="https://intranetjacaranda.es/Ejercicios/cargaMunicipiosJSON.php";

function getApi(){
    fetch(URL_PROVINCIAS)
    .then(response => response.json())
    .then(data => {
        for(let element in data){
            let pro = new Option(data[element],element);
            provincia.appendChild(pro);
        }
    })
    .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
    });
}

provincia.addEventListener("change",function(){
    for (let i=municipio.length;i>=0;i--) {
        municipio.remove(i);
      }
    
    let formData = new FormData();
    formData.append("provincia",provincia.value);
    fetch(URL_MUNICIPIOS,{
        method:'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        for(let element in data){
            let mu = new Option(data[element],element);
            municipio.appendChild(mu);
        }
        
    })
    .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
    });
})
getApi();