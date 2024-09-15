function initMap() {
    var myLatLng = { lat: 38.8710379, lng: -77.0561155 };

    var map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 17,
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Mi Marcador",
    });
}

function toggleStar(element) {
    if (element.classList.contains("icon-star-empty")) {
        element.classList.remove("icon-star-empty");
        element.classList.add("icon-star-full");
    } else {
        element.classList.remove("icon-star-full");
        element.classList.add("icon-star-empty");
    }
}

var onloadCallback = function() {
    alert("grecaptcha is ready!");
};

//------------------------------------------------------------------------------------------

const modal = document.getElementById('modal-newsletter');

const closeButton = document.querySelector('.close-newsletter');

window.onload = function() {
    modal.style.display = 'block';
};

closeButton.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

//------------------------------------------------------------------------------------------

function initMap() {
    var myLatLng = { lat: 38.8710379, lng: -77.0561155 };

    var map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 17,
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Mi Marcador",
    });
}

//------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');
    const enviarButton = document.getElementById('buttonEnviar');
    const nombreError = document.getElementById('nombre-error');
    const emailError = document.getElementById('email-error');
    const mensajeError = document.getElementById('mensaje-error');

    function validarNombre() {
        const nombrePattern = /(^[A-ZÁÉÍÓÚ]{1}[a-záéíóú]+)(\s[A-ZÁÉÍÓÚ]{1}[a-záéíóú]+)?$/;
        if (nombreInput.value.trim() === "") {
            nombreError.textContent = '';
            nombreInput.style.border = '';
            return false;
        } else if (!nombrePattern.test(nombreInput.value)) {
            nombreError.textContent = 'Formato incorrecto. Debe seguir el patrón especificado, Solo se admite nombre o nombre y apellido.';
            nombreInput.style.border = '3px solid red';
            return false;
        } else {
            nombreError.textContent = '';
            nombreInput.style.border = '';
            return true;
        }
    }

    function validarEmail() {
        const emailPattern = /(^\w+.?\w*)\@([a-z]+.?[a-z]*)\.([a-z]+)$/;
        if (emailInput.value.trim() === "") {
            emailError.textContent = '';
            emailInput.style.border = '';
            return false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Formato incorrecto. Debe seguir el patrón especificado: ejemplo@ejemplo.com';
            emailInput.style.border = '3px solid red';
            return false;
        } else {
            emailError.textContent = '';
            emailInput.style.border = '';
            return true;
        }
    }

    function validarMensaje() {
        const mensajePattern = /(.){20,200}/;
        if (mensajeInput.value.trim() === "") {
            mensajeError.textContent = '';
            mensajeInput.style.border = '';
            return false;
        } else if (!mensajePattern.test(mensajeInput.value)) {
            mensajeError.textContent = 'Debe rellenar este campo. Incluye mínimo 20 caracteres y 200 caracteres como máximo.';
            mensajeInput.style.border = '3px solid red';
            return false;
        } else {
            mensajeError.textContent = '';
            mensajeInput.style.border = '';
            return true;
        }
    }

    function validarInput(inputFunc, errorDiv) {
        inputFunc();
        habilitarBoton();
    }

    function habilitarBoton() {
        enviarButton = !(validarNombre() && validarEmail() && validarMensaje());
    }

    nombreInput.addEventListener('input', function () {
        validarInput(validarNombre, nombreError);
    });

    emailInput.addEventListener('input', function () {
        validarInput(validarEmail, emailError);
    });

    mensajeInput.addEventListener('input', function () {
        validarInput(validarMensaje, mensajeError);
    });

    enviarButton.addEventListener('click', function (event) {
        if (validarNombre() && validarEmail() && validarMensaje()) {
            event.preventDefault();
            //alert('Formulario enviado con éxito.');
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        } else {
            event.preventDefault();
            //alert('Por favor, complete correctamente todos los campos antes de enviar el formulario.');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
            });
        }
    });
});
