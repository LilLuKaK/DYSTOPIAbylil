<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="./assets/images/landingPage/dystopiaIcono.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio | DYSTOPIA</title>
    <link rel="stylesheet" href="./assets/css/common/stylesCommon.css">
    <link rel="stylesheet" href="./assets/css/landingPage/stylesLanding.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

    <?php include 'header.php'; ?>

    <div class="imagen-fondo" id="parallax">
        <img src="./assets/images/landingPage/catedral-copia.png" alt="" class="img1">
        <img src="./assets/images/landingPage/dystopiaRemastered3.png" alt="" class="img2">
    </div>
    <main>
        <div class="periodico" id="periodico">
            <img src="./assets/images/landingPage/dystopiaNewspaper2.png" alt="">
        </div>

        <div class="tienda">
            <p>TIENDA</p>
            <div class="tiendaDentro">
                
            </div>
            <button class="botonTienda">
                <span class="text">VER TODO</span>
                <span class="shimmer"></span>
            </button>
        </div>
    </main>
    
    <?php include 'footer.php'; ?>

    <script src="https://kit.fontawesome.com/3177400c07.js" crossorigin="anonymous"></script>
    <script src="./assets/js/common/scriptCommon.js"></script>
    <script src="./assets/js/landingPage/scriptLanding.js"></script>
</body>
</html>