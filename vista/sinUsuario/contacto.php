<!DOCTYPE html>
<html lang="es" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto | DYSTOPIA</title>
    <link rel="stylesheet" href="./assets/css/common/stylesCommon.css">
    <link rel="stylesheet" href="./assets/css/contacto/stylesContacto.css">
    <link rel="stylesheet" href="./assets/css/contacto/responsiveContacto.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div id="capsula">
        <?php include 'header.php'; ?>

        <div id="contenedorContacto">
            <div id="contenedorInfo">
                <div id="map"></div>
                <div id="listaRedes">
                    <ul>
                        <li>
                            <a id="mostrarNormal" class="icon-whatsapp" href="https://web.whatsapp.com/" target="_blank"><i class="fa fa-whatsapp"></i> +34 622534429</a>
                            <a id="mostrarResponsive" href="https://web.whatsapp.com/" target="_blank"><i class="fa fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a id="mostrarNormal" href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i> @MilfShakes_byLil</a>  
                            <a id="mostrarResponsive" href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a>  
                        </li>
                        <li>
                            <a id="mostrarNormal"  href="https://twitter.com/home" target="_blank"><i class="fa fa-twitter"></i> @MilfShakes_byLil</a> 
                            <a id="mostrarResponsive" href="https://twitter.com/home" target="_blank"><i class="fa fa-twitter"></i></a> 
                        </li>
                        <li>
                            <a id="mostrarNormal" href="https://github.com/" target="_blank"><i class="fa fa-github"></i> LilLuKaK</a>
                            <a id="mostrarResponsive" href="https://github.com/" target="_blank"><i class="fa fa-github"></i></a>
                        </li>
                    </ul> 
                </div>
                <h2>¡VALORANOS!</h2>
                <br>
                <div id="valoranos">
                    <div><i class="fa fa-star" id="estrella"></i></div>
                    <div><i class="fa fa-star" id="estrella"></i></div>
                    <div><i class="fa fa-star" id="estrella"></i></div>
                    <div><i class="fa fa-star" id="estrella"></i></div>
                    <div><i class="fa fa-star" id="estrella"></i></div>
                </div>
            </div>

            <div id="contenedorForm">
                <h2>Formulario de Contacto</h2>
                <form action="#" method="post">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="ej. John / John Doe" required>
                    <div id="nombre-error"></div>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="ejemplo@ejemplo.com" required>
                    <div id="email-error"></div>

                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" placeholder="Ejemplo..." required></textarea>
                    <div id="mensaje-error"></div>

                    <div id="captcha">
                        <button id="buttonEnviar" type="submit">Enviar</button>
                    </div>
                </form>
            </div>

            <div class="user-ratings">
                <ul id="ratings-list">
                </ul>
            </div>
        </div>

        <?php include 'footer.php'; ?>
    </div>
    <div id="modal-newsletter" class="modal-newsletter">
        <div class="modal-content">
            <span class="close-newsletter">&times;</span>
            <h2>Suscríbete a nuestro Newsletter</h2>
            <form id="newsletterForm" method="post" action="index.php?pages=mail">
                <input type="email" name="emailNewsletter" placeholder="Ingresa tu correo electrónico" required>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNQI3M7krrrGdpxfQB78ivpYdYGMAy7cY&callback=initMap"></script>
    <script src="./assets/js/common/scriptCommon.js"></script>
    <script src="./assets/js/contacto/scriptContacto.js"></script>
</body>
</html>