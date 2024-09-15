
function cargarAlbumes(pagina) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./modelo/productos.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var tiendaDiv = document.querySelector('.tiendaDentroo');
            tiendaDiv.innerHTML = ''; // Limpiar contenido existente
            response.albumes.forEach(function (album) {
                // Crear elementos para mostrar los detalles del álbum
                // Aquí debes insertar el código para crear los elementos
                // de cada álbum, similar al código que proporcionaste
            });
            // Crear botones de paginación si hay más páginas
            if (response.paginas > 1) {
                var paginacionDiv = document.createElement('div');
                for (var i = 1; i <= response.paginas; i++) {
                    var botonPagina = document.createElement('button');
                    botonPagina.textContent = i;
                    botonPagina.onclick = function() {
                        cargarAlbumes(this.textContent);
                    };
                    paginacionDiv.appendChild(botonPagina);
                }
                tiendaDiv.appendChild(paginacionDiv);
            }
        }
    };
    xhr.send();
}

window.onload = function () {
    cargarAlbumes(1); // Cargar la primera página al cargar la página
};