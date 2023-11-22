/*
document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userList = document.getElementById("userList");
    let usersData = [];
    const urlApi = "http://localhost:3000/users";
    

    function setUserApi(id,user){
        const peticion = new XMLHttpRequest();
        peticion.withCredentials=true;
        console.log(id);
        peticion.open('PUT',urlApi + "/" + id);
        peticion.setRequestHeader('Content-type', 'application/json');
        peticion.addEventListener("load",function(){
            if(peticion.status == 200){
                    console.log("dentro");
                }
            });
        peticion.send(JSON.stringify(user));
    }

    function getUsersApi(){
        const peticion = new XMLHttpRequest();

        peticion.open('GET',urlApi);
        peticion.setRequestHeader('Content-type', 'application/json');
        peticion.send();

        peticion.addEventListener("load",function(){
            if(peticion.status == 200){
                usersData = JSON.parse(peticion.responseText);
                usersData.forEach((user) => {
                    addUserToList(user.nombre,user.direccion,user.email,user.id);
                })
            }
        })
    }

    function addUserApi(user){
        const peticion = new XMLHttpRequest();
        peticion.withCredentials = true;
        peticion.open('POST',urlApi);
        peticion.setRequestHeader("Content-type", "application/json");
        peticion.addEventListener("load",function(){
            if(peticion.status == 201){
                    let newUser = JSON.parse(peticion.responseText);
                    addUserToList(newUser.nombre,newUser.direccion,newUser.email,newUser.id);
                }
            });
        peticion.send(JSON.stringify(user));

    }

    function deleteUserApi(id){
        const peticion = new XMLHttpRequest();
        peticion.open('DELETE',urlApi + "/" + id);
        peticion.setRequestHeader('Content-type', 'application/json');
        peticion.send();
    }
    
    getUsersApi();

    // Función para validar email
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    // Función para crear el nuevo item de la lista
    function createListItem(name, address, email,id) {
       
        // Crea nuevos elementos
        const listItem = document.createElement("li");
        const userInfo = document.createTextNode(`${name} : ${address} : ${email} : `);
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        // Establece atributos y contenido para los botones
        editButton.classList.add("edit");
        deleteButton.classList.add("delete");
        editButton.textContent = "Editar";
        deleteButton.textContent = "Borrar";
        deleteButton.setAttribute("data-id",id);
        editButton.setAttribute("data-id",id);
        
        // Agrega los elementos al elemento <li>
        listItem.appendChild(userInfo);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

    return listItem;
  }

    // Función para agregar un usuario a la lista
    function addUserToList(name, address, email,id) {
        const listItem = createListItem(name, address, email,id);
        userList.appendChild(listItem);
    }
    // Función para borrar un usuario de la lista y del localStorage
    function deleteUser(event) {
        if (event.target.classList.contains("delete")) {
            const listItem = event.target.parentElement;
            deleteUserApi(listItem.getElementsByClassName("delete")[0].dataset.id);
            listItem.remove();
        }
    }

    // Función para cargar los datos de un usuario en el formulario para editar
    function editUser(event) {
        if (event.target.classList.contains("edit")) {
            const listItem = event.target.parentElement;
            const userArray = listItem.textContent.split(" : ");
            const name = userArray[0];
            const address = userArray[1];
            const email = userArray[2].trim();
            userForm.elements.name.value = name;
            userForm.elements.address.value = address;
            userForm.elements.email.value = email;
            userForm.dataset.editing = email;
            userForm.querySelector("button[type='submit']").textContent = "Editar Usuario";
            //userForm.dataset.editingListItem = listItem; // Almacena el elemento de lista a editar
            userForm.dataset.editingIndex = [...userList.children].indexOf(listItem); // Almacena el índice del elemento en la lista
        }
    }

    // Manejar el envío del formulario (Agregar o Editar usuario)
    userForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = userForm.elements.name.value;
        const address = userForm.elements.address.value;
        const email = userForm.elements.email.value;
        const editingIndex = parseInt(userForm.dataset.editingIndex);
        if (name && address && validateEmail(email)) {
            const listItem = createListItem(name, address, email);
            if(userForm.dataset.editing) {
                const emailToEdit = userForm.dataset.editing;
                console.log(-1);
                usersData = usersData.map(user => {
                    console.log(1);
                    if (user.email === emailToEdit) {
                        
                        user.name = name;
                        user.address = address;
                        user.email = email;
                        console.log("Hiola")
                        console.log(user.id);
                        setUserApi(user.id,{name,address,email});
                    }
                    return user;
                });

                // Reemplaza el elemento existente en el índice con el nuevo elemento

                userList.replaceChild(listItem, userList.children[editingIndex]);
                userForm.removeAttribute("data-editing");
                userForm.querySelector("button[type='submit']").textContent = "Agregar Usuario";
                
            } else {
                if(usersData)
                if (usersData.some(user => user.email === email)) {
                    alert('El email especificado ya existe en la lista');
                    return;
                } else {
                    usersData.push(name,address,email);
                    const user = {"nombre":name, "direccion":address, "email":email};
                    addUserApi(user);
                }
            }
            userForm.reset();
        } else {
            alert('Alguno de los campos no es correcto');
        }
    });

    // Manejar clics en botones de borrar y editar
    userList.addEventListener("click", function (event) {
        deleteUser(event);
        editUser(event);
    });
});
*/
const userForm = document.getElementById("userForm");
const userList = document.getElementById("userList");
let usersData = [];
const urlApi = "http://localhost:3000/users";

function addUserToList(name,address,email,id){
    let li = document.createElement("li");
    let deleteB = document.createElement("button");
    let editB = document.createElement("button");
    let user = document.createTextNode(`${name} : ${address} : ${email} : `);

    li.appendChild(user);
    deleteB.classList.add("delete");
    deleteB.textContent=("Borrar");
    deleteB.setAttribute("data-id",id);
    
    editB.classList.add("edit");
    editB.textContent=("Editar");
    editB.setAttribute("data-id",id);
    
    li.appendChild(editB);
    li.appendChild(deleteB);

    userList.appendChild(li);
}

function deleteUser(event){
    if(event.target.classList.contains("delete")){
        let li = event.target.parentElement;
        deleteUserApi(li.getElementsByClassName("delete")[0].dataset.id);
    }
}

function modifyUser(usuario) {
    document.getElementById("edit").addEventListener("click", function () {
        usuario.name = userForm.elements.name.value;
        usuario.address = userForm.elements.address.value;
        usuario.email = userForm.elements.email.value;

        editUserApi(usuario.id, usuario);
        userForm.reset();
    });
}

function editUser(event){
    if(event.target.classList.contains("edit")){
        let li = event.target.parentElement;
        let userList = li.textContent.split(" : ");
        let email = userList[2].trim();

        usersData.map((usuario)=>{
            if(email==usuario.email){
                userForm.elements.name.value = userList[0];
                userForm.elements.address.value = userList[1];
                userForm.elements.email.value = userList[2].trim();

                userForm.dataset.editing = userList[2].trim();
                userForm.querySelector("button[type='submit']").setAttribute("disabled","true");

                let edit = document.createElement("button");
                edit.textContent=("Editar");
                edit.setAttribute("id","edit");
                userForm.appendChild(edit);

            
                modifyUser(usuario);
                
            }
        })

    }

}

//---------------------------------------------------------------------------------------


userList.addEventListener('click',function(event){
    deleteUser(event);
    editUser(event);
})

userForm.querySelector("button[type='submit']").addEventListener("click",function(){
   
    const name = userForm.elements.name.value;
    const address = userForm.elements.address.value;
    const email = userForm.elements.email.value;

    if(name && address && email){

        let user={name:name,address:address,email:email};
        addUserApi(user);
    }
})


//---------------------------------------------------------------------------------------
getUserApi();


async function addUserApi(user){
    try{
        const response = await fetch(urlApi,{
            method : "POST",
            body : JSON.stringify(user),
            headers : {
                "Content-type" : "application/json"
            }
        });
        const jsonResponse = await response.json();
        if(response.ok){
            addUserToList(jsonResponse.name,jsonResponse.address,jsonResponse.email,jsonResponse.id);
        }
    } catch(error){
        console.log(error);
    }

}

async function getUserApi(){
    try{
        const response = await fetch(urlApi + "?_sort=name&_order=asc");
       
        const jsonResponse = await response.json();
        jsonResponse.forEach((element) => {
            addUserToList(element.name,element.address,element.email,element.id);
        });
        
    } catch(error){
        console.log(error);
    }
}

async function deleteUserApi(id){
    try{
        const response = await fetch(urlApi+"/"+id,{
            method : "DELETE",
            headers : {
                "Content-type" : "application/json"
            }
        });
        if(response.ok){
            li.remove();
        }
    } catch(error){
        console.log(error);
    }
}

async function editUserApi(id,user){
    peticion.send(JSON.stringify(user));
    try{
        const response = await fetch(urlApi + "?email="+user.email);
        const jsonResponse = await response.json();

        if(jsonResponse.some(email => email.id!=user.id)){
            alert("Email existente");
            userForm.reset();
        } else {
            const responsee = await fetch(urlApi+"/"+user.id,{
                method : "PUT",
                body : JSON.stringify(user),
                headers : {
                    "Content-type" : "application/json"
                }
            });
            if(response.ok){
                location.reload();
            }
        }
    }catch(error){
        console.log(error);
    }
}
