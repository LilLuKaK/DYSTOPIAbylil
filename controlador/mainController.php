<?php
if(isset($_GET['pages'])) {
    $pages = $_GET['pages'];
    
    switch($pages) {
        case 'header':
            require_once 'vista/sinUsuario/header.php';
            break;
        case 'footer':
            require_once 'vista/sinUsuario/footer.php';
            break;
        case 'login':
            require_once 'vista/sinUsuario/logIn.php';
            break;
        case 'signin':
            require_once 'vista/sinUsuario/register.php';
            break;
        case 'contacto':
            require_once 'vista/sinUsuario/contacto.php';
            break;
        case 'landingPageUsuario':
            require_once 'vista/conUsuario/landingPage.php';
            break;
        case 'contactoUsuario':
            require_once 'vista/conUsuario/contacto.php';
            break;
        case 'tienda':
            require_once 'vista/sinUsuario/tienda.php';
            break;
        default:
            require_once 'vista/sinUsuario/landingPage.php';
            break;
    }
} else {
    require_once 'vista/sinUsuario/landingPage.php';
}
