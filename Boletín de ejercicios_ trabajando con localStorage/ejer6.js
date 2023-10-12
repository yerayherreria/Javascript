//localStorage.removeItem('users');
/*
let anadir = document.querySelector('button');
let lista=document.getElementById('userList');

anadir.addEventListener('click',function(){
    let nombre = document.getElementById('name');
    let direccion = document.getElementById('address');
    let email = document.getElementById('email');
    let usuario = {nombre: nombre.value,direccion: direccion.value,email: email.value};
    console.log(exiteRepetido(usuario));
    if(nombre!=null && direccion!=null && email!=null && !exiteRepetido(usuario)){
        if(localStorage.getItem('users')==null){
            localStorage.setItem('users',[JSON.stringify({nombre: nombre.value,direccion: direccion.value,email: email.value})].join('|'));
        } else {
            let users = Array.from(localStorage.getItem('users').split('|'));
            users.push(JSON.stringify({nombre: nombre.value,direccion: direccion.value,email: email.value}));
            localStorage.setItem('users',users.join('|'));
        }
        
    }
    
})

function exiteRepetido(usuario){
    let repetido=false;
    let lineas = document.getElementsByTagName('li');
    console.log(lineas);
    for(let i=0;i<lineas.length;i++){
        let linea = Array.from(lineas[i].textContent.split(":"));
        console.log(linea[0]+" 22 2");
        console.log(usuario.nombre);
        if(linea[0].trim()==usuario.nombre && linea[1].trim()==usuario.direccion && linea[2].trim()==usuario.email){
            repetido=true;
        } 
    }
    return repetido;
}

function verUsers(usuario){//ARREGLAR REPETIDO
    let usuarios= usuario.split('|');
    for(let i=0;i<usuarios.length;i++){
        let user = JSON.parse(usuarios[i]);
        console.log(user);
        anniadirUser(user.nombre,user.direccion,user.email)

    }
    
}

function anniadirUser(nombre,direccion,email){
    let nuevaP= document.createElement('li');
    nuevaP.textContent =`${nombre}:${direccion}:${email}`;  
    
    botonBorrar = document.createElement('button');
    botonBorrar.textContent='Borrar';
    botonBorrar.setAttribute('id','botonBorrar')

    botonBorrar.addEventListener('click',function(event) {
        lista.removeChild(nuevaP);
        event.target.parentNode.remove();
        let users = Array.from(localStorage.getItem('users').split('|'));
        localStorage.setItem('users',users.join('|'));
    })
    nuevaP.appendChild(botonBorrar);
    lista.appendChild(nuevaP);
}
verUsers(localStorage.getItem('users'));*/
/*
//Eliminar Usuarios
let borrar = document.querySelectorAll('#borrar');

for(let i=0;i<borrar.length;i++){
    borrar[i].addEventListener('click',function(event){
        
    })
}*/

let anadir = document.querySelector("button[type='submit']");
let lista=document.getElementById('userList');

let nombre = document.getElementById('name');
let direccion = document.getElementById('address');
let email = document.getElementById('email');

//Para almacenar en el localStorage
let usuarios = localStorage.getItem("users") == null ? [] :JSON.parse(localStorage.getItem("users")); 
let copiaUsuariosString = localStorage.getItem("users") == null ? [] : localStorage.getItem("users"); 

anadir.addEventListener(`click`,function(){ 
    if(nombre.value != "" && direccion.value != "" && email.value != ""){ 
        let usuario = {nombre:nombre.value, direccion:direccion.value, email:email.value}; 
    
        usuarios.push(usuario); 
        localStorage.setItem("users",JSON.stringify(usuarios)); 
        
    }
});

mostrarUsuarios();
borrar();
modificar();

function mostrarUsuarios(){ 
    usuarios.forEach(usuario => { 
        let li = document.createElement("li"); 
        li.appendChild(document.createTextNode(`${usuario.nombre} : ${usuario.direccion} : ${usuario.email} : `));

        let editar = document.createElement("button"); 
        editar.textContent = "Editar"; 
        editar.setAttribute("id","mod"); 

        let br = document.createElement("br"); 

        let borrar = document.createElement("button"); 
        borrar.textContent = "Borrar"; 
        borrar.setAttribute("id","del"); 

        li.appendChild(editar); 
        li.appendChild(br); 
        li.appendChild(borrar); 
        lista.appendChild(li); 
    });
}

function borrar(){
    let borrar = document.querySelectorAll("#del"); 
    for(let i = 0; i < borrar.length; i++){ 
        borrar[i].addEventListener(`click`,function(event){ 
            event.target.parentNode.remove();
            usuarios.splice(i,1); 
            localStorage.setItem("users",JSON.stringify(usuarios));
        });
    }
}

function modificar(){
    let editar = document.querySelectorAll("#mod"); 
    for(let o = 0; o < editar.length ; o++){ 
        editar[o].addEventListener(`click`,function(event){ 
        let usuarioRecuperado = usuarios[o]; 
        event.target.parentNode.remove();  
        usuarios.splice(o,1); 
    
        nombre.value = usuarioRecuperado.nombre;
        direccion.value = usuarioRecuperado.direccion; 
        email.value = usuarioRecuperado.email; 
    
        enviar.textContent = "Editar usuario"; 
        })
    }
}