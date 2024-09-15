//--------------------------------------------------------------------------
const parallax = document.getElementById('parallax');
let isParallaxEnabled = false;

window.addEventListener('DOMContentLoaded', () => {
    checkParallax();
    window.addEventListener('scroll', checkParallax);
    window.addEventListener('resize', checkParallax);
});

function checkParallax() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollPosition = window.scrollY;
    
    if (windowHeight === documentHeight || scrollPosition === 0) {
        enableParallax();
    } else {
        disableParallax();
    }
}

function disableParallax() {
    if (isParallaxEnabled) {
        isParallaxEnabled = false;
        parallax.removeEventListener('mousemove', parallaxEffect);
    }
}

function enableParallax() {
    if (!isParallaxEnabled) {
        isParallaxEnabled = true;
        parallax.addEventListener('mousemove', parallaxEffect);
    }
}

function parallaxEffect(e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 1;
    
    const img1 = parallax.querySelector('.img1');
    const img2 = parallax.querySelector('.img2');
    
    img1.style.transform = `translate(-50%, 0%) translateX(${-x * 0}px) translateY(${-y * 200}px)`;
    img2.style.transform = `translate(-50%, -10%) translateX(${x * 50}px) translateY(${y * 50}px) rotate(5deg)`;
}
//--------------------------------------------------------------------------
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('img').classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
};

const observer = new IntersectionObserver(handleIntersection, options);
const periodicoDiv = document.getElementById('periodico');
observer.observe(periodicoDiv);
//--------------------------------------------------------------------------
// Función para manejar la respuesta obtenida
/*function handleResponse(response) {
    var data = JSON.parse(response);
    
    // Acceder a los datos de los álbumes
    var albumesData = JSON.parse(data.albumes);
    
    // Crear un objeto para agrupar los álbumes por autor
    var albumsByAuthor = {};
    
    // Agrupar los álbumes por autor
    albumesData.forEach(function(album) {
        if (!albumsByAuthor.hasOwnProperty(album.autor_album)) {
            albumsByAuthor[album.autor_album] = [];
        }
        albumsByAuthor[album.autor_album].push(album);
    });
    
    // Obtener el contenedor donde se mostrarán las imágenes
    var albumImagesContainer = document.getElementById("albumImages");
    
    // Mostrar las imágenes de los álbumes agrupados por autor en diferentes divs
    for (var autor in albumsByAuthor) {
        if (albumsByAuthor.hasOwnProperty(autor)) {
            // Crear un div para cada autor
            var authorDiv = document.createElement("div");
            authorDiv.classList.add("author-div");
            
            // Agregar el nombre del autor como texto antes de las imágenes
            var authorName = document.createElement("div");
            authorName.classList.add("author-name");
            authorName.textContent = autor;
            authorDiv.appendChild(authorName);
            
            // Mostrar las imágenes de los álbumes del mismo autor
            albumsByAuthor[autor].forEach(function(album) {
                var albumContainer = document.createElement("div");
                albumContainer.classList.add("album-container");
                
                var img = document.createElement("img");
                img.src = album.imagen_album;
                img.alt = album.nombre_album;
                img.classList.add("album-img");
                albumContainer.appendChild(img);
                
                // Convertir valoración a estrellas
                var stars = '';
                for (var i = 0; i < album.valoracion_album; i++) {
                    stars += '★'; // Añadir estrella
                }
                
                // Mostrar detalles del álbum con estrellas para valoración
                var details = document.createElement("div");
                details.innerHTML = "<p class='nombreAlbum'>" + album.nombre_album + "</p>" + 
                "<br><p class='estrellas'><span class='stars'>" + stars + "</span></p>" + 
                "<br><p class='precioAlbum'>" + album.precio_album + ",99€</p>";
                albumContainer.appendChild(details);
                
                // Botón "Comprar"
                var buyButton = document.createElement("button");
                buyButton.classList.add("buy-button");
                buyButton.textContent = "Comprar";
                albumContainer.appendChild(buyButton);
                
                // Agregar el contenedor del álbum al div del autor
                authorDiv.appendChild(albumContainer);
            });
            
            // Agregar el div del autor al contenedor principal
            albumImagesContainer.appendChild(authorDiv);
            
            // Limpiar floats para el siguiente div
            var clearfix = document.createElement("div");
            clearfix.classList.add("clearfix");
            albumImagesContainer.appendChild(clearfix);
        }
    }
    
    // Mostrar los datos de los arrays por consola
    console.log("Datos de álbumes:");
    console.log(albumesData);
}

// Realizar la solicitud AJAX al archivo PHP
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        handleResponse(this.responseText);
    }
};
xhr.open("GET", "./assets/php/landingPage/phpLanding.php", true);
xhr.send();*/

//--------------------------------------------------------------------------

function cargarAlbumes() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./modelo/productos.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var tiendaDiv = document.querySelector('.tiendaDentro');
            var autoresMostrados = 0;
            var ultimoAutor = null;
            var autorDiv = null; // Variable para almacenar el div del autor actual
            
            response.forEach(function (album) {
                // Verificar si es un nuevo autor y aún no hemos mostrado tres
                if (album.is_new_author && autoresMostrados < 3) {
                    autoresMostrados++;
                    ultimoAutor = album.autor_album;
                    // Crear un nuevo div para el autor
                    autorDiv = document.createElement('div');
                    autorDiv.className = 'author-div';
                    var autorAlbum = document.createElement('p');
                    autorAlbum.id = 'autor-album';
                    autorAlbum.textContent = album.autor_album;
                    autorDiv.appendChild(autorAlbum);
                    var hrDiv = document.createElement('div');
                    hrDiv.className = 'hr';
                    autorDiv.appendChild(hrDiv);
                    tiendaDiv.appendChild(autorDiv);
                }
                
                // Verificar si el álbum pertenece al último autor mostrado
                if (album.autor_album === ultimoAutor && autorDiv !== null) {
                    // Crear contenedor para el álbum
                    var contenedorAlbum = document.createElement('div');
                    contenedorAlbum.className = 'contenedor-album';
                    // Crear elementos del álbum
                    var albumDiv = document.createElement('div');
                    var imagen = document.createElement('img');
                    imagen.src = album.imagen_album;
                    imagen.alt = album.nombre_album;
                    imagen.className = 'album-img';
                    var nombreAlbum = document.createElement('p');
                    nombreAlbum.className = 'nombreAlbum';
                    nombreAlbum.textContent = album.nombre_album;
                    var estrellas = document.createElement('p');
                    estrellas.className = 'estrellas1';
                    var precioAlbum = document.createElement('p');
                    precioAlbum.className = 'precioAlbum';
                    precioAlbum.textContent = album.precio_album + '€';
                    // Añadir estrellas
                    var numEstrellas = Math.floor(album.valoracion_album);
                    var decimalEstrellas = album.valoracion_album % 1;
                    for (var i = 0; i < 5; i++) {
                        var iconoEstrella = document.createElement('i');
                        if (i < numEstrellas) {
                            iconoEstrella.className = 'fa-solid fa-star';
                        } else if (i == numEstrellas && decimalEstrellas > 0) {
                            iconoEstrella.className = 'fa-regular fa-star-half-stroke';
                        } else {
                            iconoEstrella.className = 'fa-regular fa-star';
                        }
                        estrellas.appendChild(iconoEstrella);
                    }
                    // Añadir elementos al contenedor del álbum
                    albumDiv.appendChild(imagen);
                    albumDiv.appendChild(nombreAlbum);
                    albumDiv.appendChild(estrellas);
                    albumDiv.appendChild(precioAlbum);
                    var comprarButton = document.createElement('button');
                    comprarButton.className = 'buy-button';
                    comprarButton.textContent = 'Comprar';
                    albumDiv.appendChild(comprarButton);
                    contenedorAlbum.appendChild(albumDiv);
                    // Añadir contenedor del álbum al div del autor actual
                    autorDiv.appendChild(contenedorAlbum);
                }
            });
            
            // Agregar botón "Ver más" solo si hay más artistas para mostrar
            if (autoresMostrados < 3 && ultimoAutor !== null) {
                var verMasButton = document.createElement('button');
                verMasButton.textContent = 'VER MÁS';
                verMasButton.className = 'ver-mas-button';
                verMasButton.addEventListener('click', function () {
                    // Aquí puedes implementar la lógica para mostrar más autores si lo deseas
                    alert('Implementa la lógica para mostrar más autores');
                });
                tiendaDiv.appendChild(verMasButton);
            }
        }
    };
    xhr.send();
}

window.onload = function () {
    cargarAlbumes();
};