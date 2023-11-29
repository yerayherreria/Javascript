const list = document.getElementById("list");

const getApi = async() => {
    const response = await fetch('http://localhost:3000/incidencias')
    if(response.ok){
        const responseJson = await response.json();

        responseJson.forEach(element => {
            let li = document.createElement("li");
            let button = document.createElement("button");
            button.textContent="Editar";
            let a = document.createElement("a");
            a.setAttribute("href",`index.html?id=${element.id}`);
            a.appendChild(button);
            li.appendChild(document.createTextNode(`Id:${element.id},Fecha:${element.fecha_incidente},Aula:${element.id_aula},Nombre:${element.id_reportante}`))
            li.appendChild(a);
            list.appendChild(li);
        });
    }
}

getApi();