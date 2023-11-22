const urlParams = new URLSearchParams(window.location.search);
const nameURL = urlParams.get("name");
const categoryURL = urlParams.get("category");
const durationURL = urlParams.get("duration");
const dateURL = urlParams.get("date");


const artistname = document.getElementById('artistname');
const category = document.getElementById('category');
const duration = document.getElementById('duration');
const premieredate = document.getElementById('premieredate');
const form = document.getElementById('form');

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

function validarFormatoFecha(campo) {
  var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
  if ((campo.match(RegExPattern)) && (campo!='')) {
        return true;
  } else {
        return false;
  }
}

function existeFecha (fecha) {
  var fechaf = fecha.split("/");
  var d = fechaf[0];
  var m = fechaf[1];
  var y = fechaf[2];
  return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length<min || length>max ? false:true;
const isCategoryValid = (category) => {
    const categorys=["CUMBIA","BOLERO","REGGAE","ROCK","TANGO","ROCK","SALSA"]
    let result=false;
    categorys.forEach(element => {
      if(element==category){
        result=true;
      }
    });
    return result;
}

const checkNameArtist = () => {
  let valid = false;
  const min = 3, max = 25;
  const username = artistname.value.trim();
  if (!isRequired(username)) {
    showError(artistname, 'El nombre de usuario no puede estar en blanco.');
  } else if (!isBetween(username.length, min, max)) {
    showError(artistname, `El nombre de usuario debe tener entre ${min} y ${max} caracteres.`);
  } else {
    showSuccess(artistname);
    valid = true;
  }
  return valid;
};
artistname.addEventListener("change",checkNameArtist);

const checkCategory = () => {
  let valid = false;
  const categoryy = category.value.trim();
  if (!isRequired(categoryy)) {
    showError(category, 'El nombre de categoria no puede estar en blanco.');
  } else if (isCategoryValid(categoryy)) {
    showError(category, `Categoría no válida`);
  } else {
    showSuccess(category);
    valid = true;
  }
  return valid;
};
category.addEventListener("change",checkCategory);

const checkDuration = () => {
  let valid = false;
  const durationn = duration.value.trim();
  if (!isRequired(durationn)) {
    showError(duration, 'La duracion no puede estar en blanco.');
  } else if ( Number(durationn)>0 &&  Number(durationn)<30) {
    showError(duration, `La duracion debe estar entre 0 y 30`);
  } else {
    showSuccess(duration);
    valid = true;
  }
  return valid;
};
duration.addEventListener("change",checkDuration);

const checkDate = () => {
  let valid = false;
  const date = premieredate.value.trim();
  if (!isRequired(date)) {
    showError(premieredate, 'La fecha no puede estar en blanco.');
  } else if (!validarFormatoFecha(date)) {
    showError(premieredate, `El formato de la fecha no es valido`);
  } else if (!existeFecha(date)) {
    showError(premieredate, `La fecha no es valida`);
  } else {
    showSuccess(premieredate);
    valid = true;
  }
  return valid;
};
premieredate.addEventListener("change",checkDate);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const song = {name:artistname.value,category:category.value,duration:duration.value,date:premieredate.value}
  fetch("http://localhost:3000/songs",{
      method : "POST",
      body : JSON.stringify(song),
      headers : {
          "Content-type" : "application/json"
      }
  })
  .then(response => {
      if(response.ok){
          return response.json();
      }
      return Promise.reject(response)
  })
  .catch(err => alert(err));
  alert("Formulario enviado");
  
});