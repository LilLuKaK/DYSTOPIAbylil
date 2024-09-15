<?php
class ConexionBD {
    public static function conectar() {
        $servername = "192.168.1.150";
        $username = "myuser";
        $password = "myuser";
        $dbname = "dystopia";

        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            echo "Error de conexión: " . $e->getMessage();
            return null;
        }
    }
}