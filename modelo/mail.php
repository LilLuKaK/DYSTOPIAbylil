<?php

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['emailNewsletter'])) {
    $email_to = $_POST['emailNewsletter'];
    $subject = "¡Bienvenido a DYSTOPIA!";
    $message = "¡Bienvenido a DYSTOPIA, tu destino para una revolución musical! Sumérgete en un universo donde la innovación se encuentra con la nostalgia: vinilos creados por la mente brillante de la inteligencia artificial. Explora nuestra exclusiva selección de obras maestras sonoras, cada una cuidadosamente diseñada por algoritmos avanzados para ofrecerte una experiencia única. Desde melodías envolventes hasta ritmos vanguardistas, nuestra colección fusiona la calidez icónica del vinilo con la vanguardia tecnológica, llevando la música a un territorio totalmente nuevo. Prepárate para descubrir y poseer la música del futuro, disponible ahora en DYSTOPIA.";
    $headers = "From: srbylukasmicz@gmail.com\r\n";
    $headers .= "Reply-To: srbylukasmicz@gmail.com\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    // Configuración del servidor SMTP externo
    ini_set("SMTP", "mail.smtp2go.com");
    ini_set("smtp_port", "2525"); // Puerto SMTP, puede variar dependiendo del proveedor

    if (mail($email_to, $subject, $message, $headers)) {
        echo "<p>Mensaje enviado con éxito a $email_to</p>";
    } else {
        echo "<p>Error al enviar el mensaje.</p>";
    }
}