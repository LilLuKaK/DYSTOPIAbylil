<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="./assets/images/landingPage/dystopiaIcono.png" />
    <link rel="stylesheet" href="./assets/css/signIn/stylesLogIn.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In | DYSTOPIA</title>
</head>
<body>
    <section>
        <div class="contenedor">
            <div class="formulario">
                <form class="formulario" id="loginForm" >
                    <a id="icono" href="index.php">
                        <img src="./assets/images/landingPage/dystopiaRemastered3.png" alt="">
                    </a>
                    <h2>Iniciar Sesión</h2>

                    <div>
                        <div class="input-contenedor" id="contenedorEmail">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="text" name="email" id="email" required>
                            <label for="#">Email</label>
                        </div>
                        <div id="email-error"></div>
                    </div>

                    <div>
                        <div class="input-contenedor" id="contenedorClave">
                            <input type="password" name="clave" id="clave" onpaste="return false" required>
                            <label for="#">Contraseña</label>
                            <i id="togglePassword" class="fa-solid fa-eye-slash"></i>
                        </div>
                        <div id="clave-error"></div>
                    </div>
                    
                    <div class="olvidar">
                        <label for="#">
                            <input type="checkbox"> Recordar
                        </label>
                    </div>
                    <input type="hidden" name="login" value="login">
                    <input type="submit" class="button" value="Acceder" name="login" id="buttonEnviar">
                    <p id="loginResult" class="result-message"></p>
                </form>
                <div>
                    <div class="registrar">
                        <p>No tengo Cuenta <a href="index.php?pages=signin"> Crear una</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://kit.fontawesome.com/a2dd6045c4.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="./assets/js/signIn/scriptLogIn.js"></script>
</body>
</html>