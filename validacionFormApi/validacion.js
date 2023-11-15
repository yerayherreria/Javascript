const password1 = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
const form = document.getElementById("registration-form");

const validation=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
/*customField.addEventListener('input', function () {
    if (!/^[A-Za-z]+$/.test(customField.value)) {
        customField.setCustomValidity('Solo se permiten letras.');
    } else 
        customField.setCustomValidity('');
    }
});*/

form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
        e.preventDefault();
        alert('El formulario contiene errores.');
    } else if (!validation.exec(password1.value)){
        alert('Formato no valido');
    } else if(password1.value!=password2.value){
        alert('Contraseñas diferentes');
    }
});