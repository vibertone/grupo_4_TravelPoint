-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-01-2022 a las 05:09:01
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Integrador_g4_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `country` varchar(100) NOT NULL,
  `image` varchar(500) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `country`, `image`, `password`) VALUES
(12, 'Carla', 'Sanchez', 'carla@hotmail.com', 'Argentina', '/perfil-sin-foto.jpg', '$2a$10$qD0Qw2bS9FUw4rH/ZRW3u.2LOa5Ol.YnPjhVZtvvbJCtHskMwkWaS'),
(13, 'Federico', 'Mansilla', 'fede@hotmail.com', 'Argentina', 'bde4e168-74d7-4cbe-9bfa-6d58711c4683.valderrama.jpg', '$2a$10$1eProIidg2mV1U05bx6joOqjVaQwrZJzYftIjH2XnUr8zbTU1fu5K'),
(14, 'Marcos', 'Ramirez', 'marcos@hotmail.com', 'Uruguay', '/perfil-sin-foto.jpg', '$2a$10$mKKvQFW0L7O3T5jADGzOSeYNZRnxpM74rUsmo1dFuHKkqidHKZhpW'),
(15, 'Juana', 'Gomez', 'juana@hotmail.com', 'Chile', '/perfil-sin-foto.jpg', '$2a$10$TjgmwJ43FxMROltU2TKF3.hKcEKJV7sgypKA8Apd6lPOvYWCkAEdi'),
(16, 'Maria', 'Martinez', 'maria@hotmail.com', 'Venezuela', '/perfil-sin-foto.jpg', '$2a$10$apmBUpeGSY3zMdNCUa6wkutXAi8Wi2R3SORuTXPU.Ta1Wz.0dNbEy'),
(17, 'Lucas', 'Lopez', 'lucas@hotmail.com', 'Argentina', '/perfil-sin-foto.jpg', '$2a$10$xWr/Q2ldWaw9U6i4ky6L/.wfT71TcnFOrp53nU4ZZDIVxZSixM3A.'),
(18, 'Lucia', 'Rivas', 'lucia@hotmail.com', 'Chile', '/perfil-sin-foto.jpg', '$2a$10$vJdVZ5oGoVA887sMaUJF4udY9/q2KuZ/99dAWJn2l0UP6yO408yUS'),
(39, 'Jose', 'Gomez', 'jose@hotmail.com', 'Brasil', '/perfil-sin-foto.jpg', '$2a$10$1qaKlGclWTTEfr.JcNh6fe7SJ3jkcBwGZQbfjBIWGELr5pdH8yO2G'),
(43, 'Marcelo', 'Fontana', 'marcelo@hotmail.com', 'Venezuela', '/perfil-sin-foto.jpg', '$2a$10$VhQh0ASF9lLNTNFYtU7XdObD6LOlx7ykmBRCxEUhiJq6Jj/GvpPmW'),
(46, 'Julia', 'Sanchez', 'julia@hotmail.com', 'Brasil', '/perfil-sin-foto.jpg', '$2a$10$cAwrQxcnPYj30EcAecKeheVOJ7J5i2ro5gCYBTqUhHhVnnuIAW17.'),
(47, 'Carlos', 'Gutierrez', 'carlos@hotmail.com', 'Argentina', '/perfil-sin-foto.jpg', '$2a$10$KV8zmrPBMLmS8d6OA64blOJyf/fQEyuYfUqFjVuYc0y5ZKl4xuldW');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
