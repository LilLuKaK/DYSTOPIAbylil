<?php
require 'conexion.php';

$conn = ConexionBD::conectar();

if ($conn) {
    $stmt = $conn->prepare("SELECT * FROM albumes ORDER BY autor_album");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $albums = array();
    $currentAuthor = null;
    foreach ($result as $row) {
        $album = array(
            "nombre_album" => $row['nombre_album'],
            "autor_album" => $row['autor_album'],
            "valoracion_album" => $row['valoracion_album'],
            "precio_album" => $row['precio_album'],
            "imagen_album" => $row['imagen_album']
        );
        // Verificar si es un nuevo autor
        if ($currentAuthor != $album['autor_album']) {
            $album['is_new_author'] = true;
            $currentAuthor = $album['autor_album'];
        } else {
            $album['is_new_author'] = false;
        }
        $albums[] = $album;
    }
    echo json_encode($albums);
} else {
    // Error de conexión a la base de datos
    echo json_encode(array());
}