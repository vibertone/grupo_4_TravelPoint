-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-02-2022 a las 04:48:43
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
-- Base de datos: `travelpoint_db2`
--
CREATE DATABASE IF NOT EXISTS `travelpoint_db2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `travelpoint_db2`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `airlines`
--

DROP TABLE IF EXISTS `airlines`;
CREATE TABLE `airlines` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `airlines`:
--

--
-- Volcado de datos para la tabla `airlines`
--

INSERT INTO `airlines` (`id`, `name`) VALUES
(1, 'LATAM'),
(2, 'American Airlines'),
(3, 'KLM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `airport`
--

DROP TABLE IF EXISTS `airport`;
CREATE TABLE `airport` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `code` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `airport`:
--

--
-- Volcado de datos para la tabla `airport`
--

INSERT INTO `airport` (`id`, `name`, `code`) VALUES
(1, 'Ezeiza', 'EZE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

DROP TABLE IF EXISTS `cities`;
CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `cities`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `countries`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinations`
--

DROP TABLE IF EXISTS `destinations`;
CREATE TABLE `destinations` (
  `id` int(11) NOT NULL,
  `city_code` varchar(20) NOT NULL,
  `airport_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `destinations`:
--   `airport_id`
--       `airport` -> `id`
--   `city_id`
--       `cities` -> `id`
--   `country_id`
--       `countries` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flights`
--

DROP TABLE IF EXISTS `flights`;
CREATE TABLE `flights` (
  `id` int(11) NOT NULL,
  `flight_number` varchar(50) NOT NULL,
  `duration` time NOT NULL,
  `airline_id` int(11) NOT NULL,
  `itinerary_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `flights`:
--   `airline_id`
--       `airlines` -> `id`
--   `itinerary_id`
--       `itineraries` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `itineraries`
--

DROP TABLE IF EXISTS `itineraries`;
CREATE TABLE `itineraries` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `origin_id` int(11) NOT NULL,
  `destiny_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `itineraries`:
--   `destiny_id`
--       `destinations` -> `id`
--   `origin_id`
--       `origins` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `origins`
--

DROP TABLE IF EXISTS `origins`;
CREATE TABLE `origins` (
  `id` int(11) NOT NULL,
  `city_code` varchar(20) NOT NULL,
  `airport_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `origins`:
--   `airport_id`
--       `airport` -> `id`
--   `city_id`
--       `cities` -> `id`
--   `country_id`
--       `countries` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `country_id` int(11) NOT NULL,
  `image` varchar(500) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `users`:
--   `country_id`
--       `countries` -> `id`
--

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `country_id`, `image`, `password`) VALUES
(12, 'Carla', 'Sanchez', 'carla@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$qD0Qw2bS9FUw4rH/ZRW3u.2LOa5Ol.YnPjhVZtvvbJCtHskMwkWaS'),
(13, 'Federico', 'Mansilla', 'fede@hotmail.com', 0, 'bde4e168-74d7-4cbe-9bfa-6d58711c4683.valderrama.jpg', '$2a$10$1eProIidg2mV1U05bx6joOqjVaQwrZJzYftIjH2XnUr8zbTU1fu5K'),
(14, 'Marcos', 'Ramirez', 'marcos@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$mKKvQFW0L7O3T5jADGzOSeYNZRnxpM74rUsmo1dFuHKkqidHKZhpW'),
(15, 'Juana', 'Gomez', 'juana@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$TjgmwJ43FxMROltU2TKF3.hKcEKJV7sgypKA8Apd6lPOvYWCkAEdi'),
(16, 'Maria', 'Martinez', 'maria@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$apmBUpeGSY3zMdNCUa6wkutXAi8Wi2R3SORuTXPU.Ta1Wz.0dNbEy'),
(17, 'Lucas', 'Lopez', 'lucas@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$xWr/Q2ldWaw9U6i4ky6L/.wfT71TcnFOrp53nU4ZZDIVxZSixM3A.'),
(18, 'Lucia', 'Rivas', 'lucia@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$vJdVZ5oGoVA887sMaUJF4udY9/q2KuZ/99dAWJn2l0UP6yO408yUS'),
(39, 'Jose', 'Gomez', 'jose@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$1qaKlGclWTTEfr.JcNh6fe7SJ3jkcBwGZQbfjBIWGELr5pdH8yO2G'),
(43, 'Marcelo', 'Fontana', 'marcelo@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$VhQh0ASF9lLNTNFYtU7XdObD6LOlx7ykmBRCxEUhiJq6Jj/GvpPmW'),
(46, 'Julia', 'Sanchez', 'julia@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$cAwrQxcnPYj30EcAecKeheVOJ7J5i2ro5gCYBTqUhHhVnnuIAW17.'),
(47, 'Carlos', 'Gutierrez', 'carlos@hotmail.com', 0, '/perfil-sin-foto.jpg', '$2a$10$KV8zmrPBMLmS8d6OA64blOJyf/fQEyuYfUqFjVuYc0y5ZKl4xuldW');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_itinerary`
--

DROP TABLE IF EXISTS `user_itinerary`;
CREATE TABLE `user_itinerary` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `itinerary_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `user_itinerary`:
--   `itinerary_id`
--       `itineraries` -> `id`
--   `user_id`
--       `users` -> `id`
--

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `airlines`
--
ALTER TABLE `airlines`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `airport`
--
ALTER TABLE `airport`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `itineraries`
--
ALTER TABLE `itineraries`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `origins`
--
ALTER TABLE `origins`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_itinerary`
--
ALTER TABLE `user_itinerary`
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
