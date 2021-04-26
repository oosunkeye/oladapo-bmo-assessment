-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 26, 2021 at 06:38 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bmo_assessment`
--

-- --------------------------------------------------------

--
-- Table structure for table `cuisines`
--

CREATE TABLE `cuisines` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(255) NOT NULL,
  `cuisine` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `time` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cuisines`
--

INSERT INTO `cuisines` (`id`, `name`, `address`, `cuisine`, `city`, `time`) VALUES
(1, 'Gusto 101', '101 Portland Street, Toronto, M5V 2N3', 'Pizza, Italian', 'toronto', 'Breakfast'),
(2, 'Pai', '18 Duncan Street, Toronto, M5V 2N3', 'Thai, Asian', 'toronto', 'Dinner'),
(3, 'Banh Mi Boys', '392 Queen Street West, Toronto, M5V 2N3', 'Sandwich', 'toronto', 'Breakfast'),
(4, 'Pizzeria Libretto', '221 Ossington Avenue, Toronto M6J 2Z8', 'Pizza, Italian', 'toronto', 'Dinner'),
(5, 'Olivers Of Oakville', '4757 Ford Road, Oakville, L9V 2N3', 'Sandwich', 'oakville', 'Breakfast'),
(6, 'Trattoria Timone', '141 Lakeshore Road East, Oakville L6J 1H3', 'Pizza, Italian', 'oakville', 'Dinner');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cuisines`
--
ALTER TABLE `cuisines`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cuisines`
--
ALTER TABLE `cuisines`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
