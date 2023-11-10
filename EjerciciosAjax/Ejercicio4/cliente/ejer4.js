let provincia = document.getElementById("provincias");
let municipio = document.getElementById("municipios");
const URL_PROVINCIAS="https://intranetjacaranda.es/Ejercicios/cargaProvinciasXML.php";
const URL_MUNICIPIOS="https://intranetjacaranda.es/Ejercicios/cargaMunicipiosXML.php";



function getApi(){
    fetch(URL_PROVINCIAS)
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "application/xml");
        
        let provincias = Array.from(xmlDoc.getElementsByTagName('provincia'));

        provincias.forEach(element => {
            let pro = new Option(element.querySelector('nombre').textContent,element.querySelector('codigo').textContent);
            provincia.appendChild(pro);
        });

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
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "application/xml");
        
        let municipios = Array.from(xmlDoc.getElementsByTagName('municipio'));
        console.log(municipios)
        municipios.forEach(element => {
            let mu = new Option(element.querySelector('nombre').textContent,element.querySelector('codigo').textContent);
            municipio.appendChild(mu);
        });

    })
    .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
    });
})
getApi();