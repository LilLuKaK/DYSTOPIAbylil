document.addEventListener('DOMContentLoaded', function () {

    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const direccionInput = document.getElementById('direccion');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const cpostalInput = document.getElementById('cpostal');
    const claveInput = document.getElementById('clave');
    const claveRepetidaInput = document.getElementById('claveRepetida');

    const nombreError = document.getElementById('nombre-error');
    const apellidosError = document.getElementById('apellidos-error');
    const direccionError = document.getElementById('direccion-error');
    const emailError = document.getElementById('email-error');
    const telefonoError = document.getElementById('telefono-error');
    const cpostalError = document.getElementById('cpostal-error');
    const claveError = document.getElementById('clave-error');
    const claveRepetidaError = document.getElementById('claveRepetida-error');

    const enviarButton = document.getElementById('buttonEnviar');
    
    

    function validarNombre() {
        const contenedorNombre = document.getElementById('contenedorNombre');
        const nombrePattern = /(^[A-ZÁÉÍÓÚ]{1}[a-záéíóú]+)(\s[A-ZÁÉÍÓÚ]{1}[a-záéíóú]+)?$/;
        if (nombreInput.value.trim() === "") {
            nombreError.textContent = '';
            contenedorNombre.style.borderBottom = '';
            return false;
        } else if (!nombrePattern.test(nombreInput.value)) {
            nombreError.textContent = 'Formato incorrecto. Debe seguir el patrón Ej. John';
            nombreError.style.color ='red';
            nombreError.style.fontSize ='20px';
            contenedorNombre.style.borderBottom = '2px solid red';
            return false;
        } else {
            nombreError.textContent = '';
            contenedorNombre.style.borderBottom = '2px solid white';
            return true;
        }
    }

    function validarApellidos() {
        const contenedorApellidos = document.getElementById('contenedorApellidos');
        const apellidosPattern = /(^[A-ZÁÉÍÓÚ]{1}[a-záéíóú]+)(\s[A-ZÁÉÍÓÚ]{1}[a-záéíóú]+)?$/;
        if (apellidosInput.value.trim() === "") {
            apellidosError.textContent = '';
            contenedorApellidos.style.borderBottom = '';
            return false;
        } else if (!apellidosPattern.test(apellidosInput.value)) {
            apellidosError.textContent = 'Formato incorrecto. Debe seguir el patrón Ej. Doe';
            apellidosError.style.color ='red';
            apellidosError.style.fontSize ='20px';
            contenedorApellidos.style.borderBottom = '2px solid red';
            return false;
        } else {
            apellidosError.textContent = '';
            contenedorApellidos.style.borderBottom = '2px solid white';
            return true;
        }
    }

    function validarDireccion() {
        const contenedorDireccion = document.getElementById('contenedorDireccion');
        const direccionPattern = /^(.){5,100}?$/;
        if (direccionInput.value.trim() === "") {
            direccionError.textContent = '';
            contenedorDireccion.style.borderBottom = '';
            return false;
        } else if (!direccionPattern.test(direccionInput.value)) {
            direccionError.textContent = 'Debe rellenar este campo. Incluye mínimo 5 caracteres y 100 caracteres como máximo.';
            direccionError.style.color ='red';
            direccionError.style.fontSize ='20px';
            contenedorDireccion.style.borderBottom = '2px solid red';
            return false;
        } else {
            direccionError.textContent = '';
            contenedorDireccion.style.borderBottom = '2px solid white';
            return true;
        }
    }

    function validarEmail() {
        const contenedorEmail = document.getElementById('contenedorEmail');
        const emailPattern = /(^\w+.?\w*)\@([a-z]+.?[a-z]*)\.([a-z]+)?$/;
        if (emailInput.value.trim() === "") {
            emailError.textContent = '';
            contenedorEmail.style.borderBottom = '';
            return false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Formato incorrecto. Debe seguir el patrón especificado: ejemplo@ejemplo.com';
            emailError.style.color ='red';
            emailError.style.fontSize ='20px';
            contenedorEmail.style.borderBottom = '2px solid red';
            return false;
        } else {
            emailError.textContent = '';
            contenedorEmail.style.borderBottom = '2px solid white';
            return true;
        }
    }

    function validarTelefono() {
        const contenedorTelefono = document.getElementById('contenedorTelefono');
        const telefonoPattern = /^([0-9]{9})?$/;
        if (telefonoInput.value.trim() === "") {
            telefonoError.textContent = '';
            contenedorTelefono.style.borderBottom = '';
            return false;
        } else if (!telefonoPattern.test(telefonoInput.value)) {
            telefonoError.textContent = 'Formato incorrecto. Debe ser un numero de teléfono válido.';
            telefonoError.style.color ='red';
            telefonoError.style.fontSize ='20px';
            contenedorTelefono.style.borderBottom = '2px solid red';
            return false;
        } else {
            telefonoError.textContent = '';
            contenedorTelefono.style.borderBottom = '2px solid white';
            return true;
        }
    }

    function validarCPostal() {
        const contenedorCPostal = document.getElementById('contenedorCPostal');
        const cpostalPattern = /^(28[0-9]{3})?$/;
        if (cpostalInput.value.trim() === "") {
            cpostalError.textContent = '';
            contenedorCPostal.style.borderBottom = '';
            return false;
        } else if (!cpostalPattern.test(cpostalInput.value)) {
            cpostalError.textContent = 'Formato incorrecto. Debe seguir el patrón de códidigo postal 28000.';
            cpostalError.style.color ='red';
            cpostalError.style.fontSize ='20px';
            contenedorCPostal.style.borderBottom = '2px solid red';
            return false;
        } else {
            cpostalError.textContent = '';
            contenedorCPostal.style.borderBottom = '2px solid white';
            return true;
        }
    }

    function validarClave() {
        const contenedorClave = document.getElementById('contenedorClave');
        const clavePattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){1,16}$/;
        if (claveInput.value.trim() === "") {
            claveError.textContent = '';
            contenedorClave.style.borderBottom = '';
            return false;
        } else if (!clavePattern.test(claveInput.value)) {
            claveError.textContent = 'Debe tener mayúsculas, minúsculas, números y caracteres especiales';
            claveError.style.color ='red';
            claveError.style.fontSize ='20px';
            contenedorClave.style.borderBottom = '2px solid red';
            return false;
        } else {
            claveError.textContent = '';
            contenedorClave.style.borderBottom = '2px solid white';
            return true;
        }
    }

    function validarClaveRepetida() {
        const contenedorClaveRepetida = document.getElementById('contenedorClaveRepetida');
        const claveRepetidaPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){1,16}$/;
        if (claveRepetidaInput.value.trim() === "") {
            claveRepetidaError.textContent = '';
            contenedorClaveRepetida.style.borderBottom = '';
            return false;
        } else if (claveRepetidaInput.value != claveInput.value){
            claveRepetidaError.textContent = 'Las contraseñas no coinciden, deben ser iguales.';
            claveRepetidaError.style.color ='red';
            claveRepetidaError.style.fontSize ='20px';
            contenedorClaveRepetida.style.borderBottom = '2px solid red';
            return false;
        } else if (!claveRepetidaPattern.test(claveRepetidaInput.value)) {
            claveRepetidaError.textContent = 'Debe tener mayúsculas, minúsculas, números y caracteres especiales.';
            claveRepetidaError.style.color ='red';
            claveRepetidaError.style.fontSize ='20px';
            contenedorClaveRepetida.style.borderBottom = '2px solid red';
            return false;
        }else {
            claveRepetidaError.textContent = '';
            contenedorClaveRepetida.style.borderBottom = '2px solid white';
            return true;
        }
    }

    function validarInput(inputFunc, errorDiv) {
        inputFunc();
        habilitarBoton();
    }

    function habilitarBoton() {
        enviarButton.disabled = !(validarNombre() && validarApellidos() && validarDireccion() && validarEmail() && validarTelefono() && validarCPostal() && validarClave() && validarClaveRepetida());
    }

    nombreInput.addEventListener('input', function () {
        validarInput(validarNombre, nombreError);
    });

    apellidosInput.addEventListener('input', function () {
        validarInput(validarApellidos, apellidosError);
    });

    direccionInput.addEventListener('input', function () {
        validarInput(validarDireccion, direccionError);
    });

    emailInput.addEventListener('input', function () {
        validarInput(validarEmail, emailError);
    });

    telefonoInput.addEventListener('input', function () {
        validarInput(validarTelefono, telefonoError);
    });

    cpostalInput.addEventListener('input', function () {
        validarInput(validarCPostal, cpostalError);
    });

    claveInput.addEventListener('input', function () {
        validarInput(validarClave, claveError);
    });

    claveRepetidaInput.addEventListener('input', function () {
        validarInput(validarClaveRepetida, claveRepetidaError);
    });

    enviarButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (validarNombre() && validarApellidos() && validarDireccion() && validarEmail() && validarTelefono() && validarCPostal() && validarClave() && validarClaveRepetida()) {
            const formData = new FormData(document.getElementById('registroForm'));

            fetch('./controlador/userController.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.error);
                if (data.error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: data.error
                    });
                } else if (data.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Todo a funcionado!",
                        text: data.success
                    }).then(() => {
                        window.location.href = 'index.php?action=login';
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Alguno de los campos no ha sido llenado correctamente o están vacíos."
            });
        }
    });
});

//------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const claveInput = document.getElementById('clave');
    const togglePasswordIcon = document.getElementById('togglePassword');

    togglePasswordIcon.addEventListener('click', function () {
        if (claveInput.type === 'password') {
            claveInput.type = 'text';
            togglePasswordIcon.classList.remove('fa-eye-slash');
            togglePasswordIcon.classList.add('fa-eye');
        } else {
            claveInput.type = 'password';
            togglePasswordIcon.classList.remove('fa-eye');
            togglePasswordIcon.classList.add('fa-eye-slash');
        }
    });
});