const listSong = document.getElementById("listSong");
/*
function getApi(){
    fetch("http://localhost:3000/songs")
    .then((respose) => respose.json())
    .then(data => {
        data.forEach((song) => {
            addSongToList(song.name,song.category,song.duration,song.date);
        })
    })
    .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
    });
  }

function addSongToList(name, category, duration,date) {
    const listItem = createListItem(name, category, duration,date);
    listSong.appendChild(listItem);
}

function createListItem(name, category, duration,date) {
     
    // Crea nuevos elementos
    const listItem = document.createElement("li");
    const songInfo = document.createTextNode(`${name} : ${category} : ${duration} : ${date} :`);
    const editButton = document.createElement("button");

    listItem.classList.add("list-group-item");
    // Establece atributos y contenido para los botones
    editButton.classList.add("edit");
    editButton.textContent = "Editar";
    
    editButton.setAttribute("data-id",name);
    // Agrega los elementos al elemento <li>
    listItem.appendChild(songInfo);
    listItem.appendChild(editButton);

return listItem;
}
getApi();*/

function getApi(){
    const options = {method: 'GET'};
    
    fetch('http://localhost:3000/songs', options)
      .then(response => response.json())
      .then(response => {
  
        response.forEach(element => {
            let li = document.createElement("li");
            li.classList.add("list-group-item");
            let a = document.createElement("a");
            a.setAttribute("href",`index.html?name=${element.name}&category=${element.category}&duration=${element.duration}&date=${element.date}`);
            li.appendChild(document.createTextNode(`Name: ${element.name} ,Category: ${element.category} ,Duration: ${element.duration} ,Date: ${element.date}`));
            a.appendChild(li);
            listSong.appendChild(a);
        });
    })
      .catch(err => console.error(err));
}
getApi();