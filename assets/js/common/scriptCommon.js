const menu = document.querySelector('.hamburger .menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
    }
});

//------------------------------------------------------------------------------------------

// Obtenemos todos los elementos de enlace que abren el modal
const modalLinks = document.querySelectorAll('.modal-link');

// Recorremos los enlaces y agregamos un evento de clic a cada uno
modalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(`modal-${modalId}`);

        // Mostramos el modal
        modal.style.display = 'block';

        // Cerrar el modal al hacer clic en la "X" de cerrar
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Cerrar el modal al hacer clic fuera del área del modal
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});

//------------------------------------------------------------------------------------------

// Pasa el cerrar sesion por aqui
document.getElementById('cerrarSesion').addEventListener('click', function() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión'
    }).then((result) => {
        if (result.isConfirmed) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', './controlador/userController.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var response = JSON.parse(xhr.responseText);
                    // SweetAlert para informar al usuario que la sesión se ha cerrado correctamente
                    Swal.fire(
                        '¡Sesión cerrada!',
                        'Tu sesión se ha cerrado correctamente.',
                        'success'
                    ).then(() => {
                        // Redirigir al usuario después de cerrar sesión si es necesario
                        window.location.href = 'index.php';
                    });
                } else {
                    console.error('Error al cerrar sesión: ' + xhr.statusText);
                    Swal.fire(
                        'Error',
                        'Hubo un error al intentar cerrar sesión. Por favor, inténtalo de nuevo más tarde.',
                        'error'
                    );
                }
            };
            xhr.onerror = function() {
                console.error('Error de red al cerrar sesión');
                Swal.fire(
                    'Error',
                    'Hubo un error de red al intentar cerrar sesión. Por favor, inténtalo de nuevo más tarde.',
                    'error'
                );
            };
            xhr.send('cerrarSesion=true');
        }
    });
});