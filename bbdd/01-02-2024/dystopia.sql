-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-01-2024 a las 18:53:21
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dystopia`
--
CREATE DATABASE IF NOT EXISTS `dystopia` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci;
USE `dystopia`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albumes`
--

CREATE TABLE `albumes` (
  `id_album` int(20) NOT NULL,
  `nombre_album` varchar(50) NOT NULL,
  `autor_album` varchar(50) NOT NULL,
  `valoracion_album` int(3) NOT NULL,
  `precio_album` int(3) NOT NULL,
  `imagen_album` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `albumes`
--

INSERT INTO `albumes` (`id_album`, `nombre_album`, `autor_album`, `valoracion_album`, `precio_album`, `imagen_album`) VALUES
(1, 'Redemption', 'Travis Scott', 5, 19, 'https://i.imgur.com/PLzj5Uk.jpg'),
(2, 'DYSTOPAI', 'Travis Scott', 4, 25, 'https://i1.sndcdn.com/artworks-C9bhc3k7WvHumtev-BbbK7A-t500x500.jpg'),
(3, 'DONDA 2', 'Kanye West', 5, 19, 'https://lastfm.freetls.fastly.net/i/u/500x500/cee50b7f4762d19b6df5f6a62920dc85.jpg'),
(4, 'Can U Be', 'Kanye West', 5, 10, 'https://i.imgur.com/pTewN9J.png'),
(5, 'Yandhi', 'Kanye West', 5, 19, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Yandhi_Cover_Art_%28Free_License%29.jpg/1200px-Yandhi_Cover_Art_%28Free_License%29.jpg'),
(6, 'Better Late Than Never', 'Drake', 4, 14, 'https://i.imgur.com/pGTNAbL.jpg'),
(7, 'MUSIC™', 'Playboi Carti', 5, 14, 'https://i.imgur.com/bBGP6h7.jpg'),
(8, 'The Boy', 'Drake', 5, 19, 'https://i.imgur.com/NV42tot.jpg'),
(9, 'Tales from Toronto', 'Drake', 4, 14, 'https://i.imgur.com/NV42tot.jpg'),
(10, 'Opium', 'Playboi Carti', 5, 16, 'https://i.imgur.com/bBGP6h7.jpg'),
(11, 'Echoes In The Sky', 'Travis Scott', 3, 18, 'https://i.imgur.com/PLzj5Uk.jpg'),
(12, '999 4EVER', 'Juice Wrld', 5, 25, 'https://i.imgur.com/NV42tot.jpg'),
(13, 'Toronto Love', 'Drake', 5, 14, 'https://i.imgur.com/NV42tot.jpg'),
(14, 'Toronto Love', 'Travis Scott', 5, 14, 'https://i.imgur.com/PLzj5Uk.jpg'),
(15, 'Take Me To Pluto', 'Lil Uzi Vert', 4, 16, 'https://i.imgur.com/NV42tot.jpg'),
(16, 'Take Me Back To Earth', 'Lil Uzi Vert', 5, 20, 'https://i.imgur.com/NV42tot.jpg'),
(17, 'My Everlasting Burning Heart', 'Juice Wrld', 4, 17, 'https://i.imgur.com/NV42tot.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id_cancion` int(100) NOT NULL,
  `id_album` int(100) NOT NULL,
  `nombre_cancion` varchar(50) NOT NULL,
  `colab_cancion` varchar(50) NOT NULL,
  `cancion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id_cancion`, `id_album`, `nombre_cancion`, `colab_cancion`, `cancion`) VALUES
(1, 1, 'Nova', '', 'https://www.youtube.com/watch?v=mo0y5doDeXA'),
(2, 1, 'The One', '', 'https://www.youtube.com/watch?v=RVxn5o-FlVQ'),
(3, 1, 'Look Mom I Can Fly', '', 'https://www.youtube.com/watch?v=6dbhZkFU_XI'),
(4, 1, 'Trees', '', 'https://www.youtube.com/watch?v=jTvFw3nPXpY'),
(5, 1, 'Skeleton', 'ft. Playboi Carti', 'https://www.youtube.com/watch?v=E_Rx2yYb83E'),
(6, 1, 'Top Two', '', 'https://www.youtube.com/watch?v=MSeoeVU02Rk'),
(7, 1, 'Cold As Ice', 'ft. Don Toliver', 'https://www.youtube.com/watch?v=TwPvCn3TDWo'),
(8, 1, 'My Brothers', 'ft. Drake & The Weeknd', 'https://www.youtube.com/watch?v=O4YOGwihj0g'),
(9, 1, 'Fly', '', 'https://www.youtube.com/watch?v=qeV79Q8RpWA'),
(10, 1, 'So High', '', 'https://www.youtube.com/watch?v=G9IWRk0fU0E'),
(11, 1, 'RIP', '', 'https://www.youtube.com/watch?v=XSpVA9h6-GU'),
(12, 1, 'No Smoke', 'ft. Drake', 'https://www.youtube.com/watch?v=OAPl-pgtxa8'),
(13, 1, 'N 2 Deep', '', 'https://www.youtube.com/watch?v=2VxDPgthDKM'),
(14, 1, 'Gang Gang', 'ft. Drake & Don Toliver', 'https://www.youtube.com/watch?v=RQO0icJWNY4'),
(15, 1, 'Hypocrite', '', 'https://www.youtube.com/watch?v=vbNTcwk7YsI'),
(16, 1, 'What For?', 'ft. Ariana Grande', 'https://www.youtube.com/watch?v=Q-v5rJNTfjI'),
(17, 4, 'Can U Be', '', 'https://www.youtube.com/watch?v=9IOllEkhTMQ'),
(18, 2, 'BAD WEATHER', '', 'https://www.youtube.com/watch?v=harUob8S5Xo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `id_cuenta` int(50) NOT NULL,
  `nombre_cuenta` varchar(50) NOT NULL,
  `apellidos_cuenta` varchar(100) NOT NULL,
  `direccion_cuenta` varchar(100) NOT NULL,
  `email_cuenta` varchar(100) NOT NULL,
  `telefono_cuenta` int(9) NOT NULL,
  `cpostal_cuenta` int(5) NOT NULL,
  `clave_cuenta` varchar(100) NOT NULL,
  `rol_cuenta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`id_cuenta`, `nombre_cuenta`, `apellidos_cuenta`, `direccion_cuenta`, `email_cuenta`, `telefono_cuenta`, `cpostal_cuenta`, `clave_cuenta`, `rol_cuenta`) VALUES
(21, 'Lucas', 'Bravo Parra', 'Calle Derechos Civiles 2, 46', 'lucas.bravo@juanxxiii.net', 611425518, 28922, '$2y$10$c81paF4QH0DypzSgzQ7GPeTaLBPUst67DWqvo5CVmpQ.36UTwovCS', 'usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albumes`
--
ALTER TABLE `albumes`
  ADD PRIMARY KEY (`id_album`);

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id_cancion`);

--
-- Indices de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD PRIMARY KEY (`id_cuenta`),
  ADD UNIQUE KEY `email_cuenta` (`email_cuenta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `albumes`
--
ALTER TABLE `albumes`
  MODIFY `id_album` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id_cancion` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  MODIFY `id_cuenta` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
