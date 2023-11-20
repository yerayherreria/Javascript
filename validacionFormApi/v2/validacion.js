const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');
let usersData = [];

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\].,;:\s@"]+(\.[()\[\\.,;:\s@"]+)*)|(".+"))@(([0−9]1,3\.[0−9]1,3\.[0−9]1,3\.[0−9]1,3 )|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    // Obtener el elemento form-field
    const formField = input.parentElement;
    // Agregar la clase de error
    formField.classList.remove('success');
    formField.classList.add('error');
    // Mostrar el mensaje de error
    const error = formField.querySelector('small');
    error.textContent = message;
  };

const showSuccess = (input) => {
    // Obtener el elemento form-field
    const formField = input.parentElement;
    // Eliminar la clase de error
    formField.classList.remove('error');
    formField.classList.add('success');
    // Ocultar el mensaje de error
    const error = formField.querySelector('small');
    error.textContent = '';
};

const checkUsername = () => {
    let valid = false;
    const min = 3, max = 25;
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
      showError(usernameEl, 'El nombre de usuario no puede estar en blanco.');
    } else if (!isBetween(username.length, min, max)) {
      showError(usernameEl, `El nombre de usuario debe tener entre ${min} y ${max} caracteres.`);
    } else {
      showSuccess(usernameEl);
      valid = true;
    }
    return valid;
};

const checkEmail = async () => {
  let valid = false;
  const email = emailEl.value.trim();
  
  const reponseComprobacion = await fetch(`http://localhost:3000/users?email=${emailEl.value}`);
  const responseComprobacionJson = await reponseComprobacion.json();
  
  if (!isRequired(email)) {
    showError(emailEl, 'El email no puede estar en blanco.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, `Introduce un email válido`);
  } else if(responseComprobacionJson.length != 0){
      showError(emailEl, `Este email ya está registrado en la base de datos.`);
  }else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
      showError(passwordEl, 'La contraseña no puede estar vacia.');
    } else if (!isPasswordSecure(password)) {
      showError(passwordEl, 'La contraseña debe tener el formato válido');
    } else {
      showSuccess(passwordEl);
      valid = true;
    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)) {
      showError(confirmPasswordEl, 'Por favor, ingrese la contraseña nuevamente.');
    } else if (password !== confirmPassword) {
      showError(confirmPasswordEl, 'La contraseña no coinciden.');
    } else {
      showSuccess(confirmPasswordEl);
      valid = true;
    }
    return valid;
  };
usernameEl.addEventListener("change",checkUsername);
emailEl.addEventListener("change",checkEmail);
passwordEl.addEventListener("change",checkPassword);
confirmPasswordEl.addEventListener("change",checkConfirmPassword);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = {name:usernameEl.value,email:emailEl.value,password:passwordEl.value}
    fetch("http://localhost:3000/users",{
        method : "POST",
        body : JSON.stringify(user),
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
    alert("Formulario enviado")
    
  });

