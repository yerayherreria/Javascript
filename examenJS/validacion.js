const urlParams = new URLSearchParams(window.location.search);
let idURL = urlParams.get("id");

const cargarDatos = async()=>{
  if(idURL!=null){
    const response = await fetch("http://localhost:3000/incidencias/"+idURL);
    if(response.ok){
      const responseJson = await response.json();

      date.value=responseJson.fecha_incidente;
      email.value=responseJson.id_reportante;
      username.value=responseJson.id_reportante;
      numberPhone.value=responseJson.telefono_contacto;
      hour.value=responseJson.hora_incidente;
      classs.value=responseJson.id_aula;
      description.value=responseJson.descripcion;

      h1.innerHTML="Editar incidencia"
      form.value="Editar"
    }
  }
  
}
cargarDatos();
//--------------------------------------------------

const date = document.getElementById("dateIn");
const email = document.getElementById("emailIn");
const username = document.getElementById("username");
const numberPhone = document.getElementById("phoneNumber");
const hour = document.getElementById("hour");
const classs = document.getElementById("class");
const description = document.getElementById("description");
const form = document.getElementById("form");
const h1 = document.getElementById("h1");
//--------------------------------------------------

const cargarAula = async() => {
  let valid = false;
  try{
    const response = await fetch("http://localhost:3000/aulas");

    if(response.ok){
      const responseJson = await response.json();
      data = Array.from(responseJson);
      data.forEach(element => {
        classs.appendChild(new Option(element.nombre,element.id));
      });
    }
  } catch (err){
    console.log(err);
  } 
  return valid;
}
cargarAula();
const isRequired = value => value === '' ? false : true;

const validEmail = async (emailValue) => {
  let valid = false;
  try{
    const response = await fetch("http://localhost:3000/usuarios");

    if(response.ok){
      const responseJson = await response.json();
      data = Array.from(responseJson);
      console.log(data);
      data.forEach(element => {
        if(emailValue==element.email){
            valid=true;
            username.value=element.nombre;
        }
      });
    }
  } catch (err){
    console.log(err);
  } 
  return valid;
}

const validDate = (date) => {
    let dateD = new Date();
    let day = dateD.getDate();
    let month = dateD.getMonth();
    let year = dateD.getFullYear();
    
}

const validNumber = (number) => {

}

const validHour = (hour) => {

}

const validDescription = (description) => {

}

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

//----------------------------------------------------
const checkDate = () => {
  let valid = false;
  let dateValue = date.value.trim();
  if(!isRequired(dateValue)){
    showError(date,"Fecha no puede estar vacía.")
  } else {
    showSuccess(date);
    valid = true;
  }
  return valid;
}
const checkEmail = async() => {
  let valid = false;
  let emailValue = email.value.trim();
  if(!isRequired(emailValue)){
    showError(email,"Email no puede estar vacía.")
  } else if( await validEmail(emailValue)) {
    showError(email,"Email tiene que ser uno existente.")
  }else {
    showSuccess(email);
    valid = true;
  }
  return valid;
}
const checkNumber = () => {
  
}
const checkHour = () => {
  let valid = false;
  let hourValue = hour.value.trim();
  if(!isRequired(hourValue)){
    showError(hour,"Hora no puede estar vacía.")
  } else if(hourValue!="1" ||hourValue!="2" ||hourValue!="3" ||hourValue!="4" ||hourValue!="5" ||hourValue!="6" ||hourValue!="R") {
    showError(hour,"Hora tiene que se 1-6 o R")
  }else {
    showSuccess(hour);
    valid = true;
  }
  return valid;
}
const checkDescription = () => {
  let valid=false;
  let descriptionValue = description.value.trim();
  if(!isRequired(descriptionValue)){
    showError(description,"La descripcion no puede estar vacia.")
  } else if(descriptionValue.length<30) {
    showError(description,"La descripcion no puede ser menor de 30")
  }else {
    showSuccess(description);
    valid = true;
  }
  return valid
}
//----------------------------------------------------
date.addEventListener("change",checkDate);
email.addEventListener("change",checkEmail);
description.addEventListener("change",checkDescription);
hour.addEventListener("change",checkHour);
//----------------------------------------------------
form.addEventListener("click",()=>{
  let inci = {fecha_incidente:date.value,id_reportante:username.value,telefono_contacto:numberPhone.value,hora_incidente:hour.value,id_aula:classs.value,descripcion:description.value,estado:"Abierta"}
  if(idURL!=null){
    fetch("http://localhost:3000/incidencias/"+idURL,{
      method : "PUT",
      body : JSON.stringify(inci),
      headers : {
          "Content-type" : "application/json"
      }
    })
    .catch(err => alert(err));
  
  }else {
    fetch("http://localhost:3000/incidencias",{
          method : "POST",
          body : JSON.stringify(inci),
          headers : {
              "Content-type" : "application/json"
          }
      })
      
      .catch(err => alert(err));

  }
  
  
})
//----------------------------------------------------

//----------------------------------------------------