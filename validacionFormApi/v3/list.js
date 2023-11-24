const listSong = document.getElementById("listSong");

function getApi(){
    const options = {method: 'GET'};
    
    fetch('http://localhost:3000/songs', options)
      .then(response => response.json())
      .then(response => {
  
        response.forEach(element => {
            let li = document.createElement("li");
            li.classList.add("list-group-item");
            let a = document.createElement("a");
            a.setAttribute("href",`index.html?id=${element.id}`);
            li.appendChild(document.createTextNode(`Name: ${element.name} ,Category: ${element.category} ,Duration: ${element.duration} ,Date: ${element.date}`));
            a.appendChild(li);
            listSong.appendChild(a);
        });
    })
      .catch(err => console.error(err));
}
getApi();