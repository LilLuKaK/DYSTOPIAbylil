<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="./assets/images/landingPage/dystopiaIcono.png" />
    <script src="https://kit.fontawesome.com/a2dd6045c4.js"></script>
    <link rel="stylesheet" href="./assets/css/signIn/stylesLogIn.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In | DYSTOPIA</title>
</head>
<body>
    <section>
        <div class="contenedor" id="contenedor">
            <div class="formulario">
                <form class="formulario" id="registroForm">
                    <a id="icono" href="index.php">
                        <img src="./assets/images/landingPage/dystopiaRemastered3.png" alt="">
                    </a>
                    <h2>Crear Cuenta</h2>

                    <div>
                        <div class="input-contenedor" id="contenedorNombre">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" name="nombre" id="nombre" required>
                            <label for="#">Nombre</label>
                        </div>
                        <div id="nombre-error"></div>
                    </div>

                    <div>
                        <div class="input-contenedor" id="contenedorApellidos">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" name="apellidos" id="apellidos" required>
                            <label for="#">Apellidos</label>
                        </div>
                        <div id="apellidos-error"></div>
                    </div>

                    <div>
                        <div class="input-contenedor" id="contenedorDireccion">
                            <i class="fa-solid fa-map-location"></i>
                            <input type="text" name="direccion" id="direccion" required>
                            <label for="#">Dirección</label>
                        </div>
                        <div id="direccion-error"></div>
                    </div>

                    <div>
                        <div class="input-contenedor" id="contenedorEmail">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="text" name="email" id="email" required>
                            <label for="#">Email</label>
                        </div>
                        <div id="email-error"></div>
                    </div>

                    <div>
                        <div class="input-contenedor" id="contenedorTelefono">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                            <input type="text" name="telefono" id="telefono" required>
                            <label for="#">Teléfono</label>
                        </div>
                        <div id="telefono-error"></div>
                    </div>

                    <div>
                        <div class="input-contenedor" id="contenedorCPostal">
                            <i class="fa-solid fa-location-pin"></i>
                            <input type="text" name="cpostal" id="cpostal" required>
                            <label for="#">Código Postal</label>
                        </div>
                        <div id="cpostal-error"></div>
                    </div>

                    <div>
                        <div class="input-contenedor" id="contenedorClave">
                            <input type="password" name="clave" id="clave" onpaste="return false" required>
                            <label for="#">Contraseña</label>
                            <i id="togglePassword" class="fa-solid fa-eye-slash"></i>
                        </div>
                        <div id="clave-error"></div>
                    </div>

                    <div>
                        <div class="input-contenedor" id="contenedorClaveRepetida">
                            <i class="fa-solid fa-unlock-keyhole"></i>
                            <input type="password" name="claveRepetida" onpaste="return false" id="claveRepetida" required>
                            <label for="#">Repetir contraseña</label>
                        </div>
                        <div id="claveRepetida-error"></div>
                    </div>
                    
                    <div class="olvidar">
                        <label for="#">
                            <input type="checkbox"> Recordar
                        </label>
                    </div>
                    <input type="hidden" name="registrar" value="registrar">
                    <input type="submit" class="button" value="Regístrate" name="registrar" id="buttonEnviar">
                </form>
                <div>
                    <div class="registrar">
                        <p>Ya tengo Cuenta <a href="index.php?pages=login"> Iniciar sesión</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="./assets/js/register/scriptRegister.js"></script>
</body>
</html>