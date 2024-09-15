<!-------------------------------------------------------------------------------------------------------------------------HEADER-->
<header id="site-header">
    <nav>
        <li class="hamburger">
            <a href="#">
                <div class="bar"></div>
            </a>
            <div class="menu">
                <ul>
                    <li><a href="#">PRODUCTOS</a></li>
                    <li><a href="#">VISITANOS</a></li>
                    <li><a href="#">QUIENES SOMOS</a></li>
                    <li><a href="index.php?pages=contactoUsuario">CONTACTANOS</a></li>
                    <li><a href="https://open.spotify.com/playlist/2WMgL8tPbbAQUgBxMMwJPE?si=91ecfbed4b3042ea" target="_blank"><img src="./assets/images/landingPage/spotify.png" alt=""></a></li>
                </ul>
            </div>
        </li>
        <a href="index.php?pages=landingPageUsuario"><img src="./assets/images/landingPage/dystopiaLogoRemastered2.gif" alt="DYSTOPIA" class="logo"></a>
        <ul>
            <?php
            echo '<li><a href="#">'.$_SESSION['nombre'].'</a></li>';
            echo '<li><a id="cerrarSesion" style="cursor: pointer;">Cerrar sesión</a></li>';
            ?>
        </ul>
    </nav>
</header>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<!--------------------------------------------------------------------------------------------------------------------------------->