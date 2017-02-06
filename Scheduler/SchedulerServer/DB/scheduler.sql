-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 06 Lut 2017, 23:01
-- Wersja serwera: 10.1.16-MariaDB
-- Wersja PHP: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `scheduler`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `schedules`
--

CREATE TABLE `schedules` (
  `schedule_id` int(11) NOT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `name` varchar(22) NOT NULL,
  `private` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `schedules`
--

INSERT INTO `schedules` (`schedule_id`, `owner_id`, `name`, `private`) VALUES
(1, NULL, 'Plan 1A', 0),
(2, NULL, 'Schedule2', 0),
(3, NULL, 'Schedule3', 0),
(4, NULL, 'Zajecia grupy 4b', 0),
(5, NULL, 'Kolo Szachowe', 0),
(6, NULL, 'Hala sportowa', 0),
(7, NULL, 'Sala 38', 0),
(8, NULL, 'Sala 48', 0),
(9, NULL, 'Plan 3B', 0),
(10, NULL, 'Plan 4B', 0),
(11, NULL, 'Plan 6B', 0),
(12, NULL, 'Plan 1c', 0),
(13, NULL, 'Plan 2c', 0),
(14, NULL, 'Plan grupy C', 0),
(15, NULL, 'Plan grupy A', 0),
(16, NULL, 'Plan pracy', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tasks`
--

CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL,
  `schedule_id` int(11) NOT NULL,
  `day` char(1) NOT NULL,
  `timeStart` char(5) NOT NULL,
  `timeSpan` char(5) NOT NULL DEFAULT '01:00',
  `title` varchar(11) NOT NULL DEFAULT 'Task Title',
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `tasks`
--

INSERT INTO `tasks` (`task_id`, `schedule_id`, `day`, `timeStart`, `timeSpan`, `title`, `details`) VALUES
(1, 1, '1', '07:00', '01:00', 'Historia', 's. 432'),
(2, 1, '2', '8:30', '01:00', 'WOS', 's. 269'),
(3, 1, '2', '10:30', '01:00', 'Matematyka', 's. 419'),
(4, 2, '3', '13:30', '01:00', 'Task Plan1', ''),
(5, 2, '4', '11:00', '01:00', 'Task Plan', ''),
(6, 3, '0', '10:30', '01:00', 'Task1 Title', 'Dets1'),
(7, 3, '1', '7:30', '02:00', 'Task2 Title', 'Dets2'),
(8, 1, '0', '07:00', '02:00', 'Polski', 's. 340'),
(9, 1, '0', '09:15', '01:00', 'Polski', 's. 340'),
(10, 1, '1', '08:15', '01:30', 'Matematyka', 's. 120'),
(11, 1, '2', '7:13', '01:00', 'Przyroda', 's. 321'),
(12, 1, '3', '08:30', '01:15', 'WF', 's. 001'),
(13, 1, '3', '10:00', '01:15', 'WF', 's. 001'),
(14, 1, '4', '08:03', '01:00', 'Geografia', 's. 749'),
(15, 1, '4', '7:00', '00:45', 'Szachy', 's. 002'),
(16, 1, '3', '7:00', '00:45', 'Szachy', 's. 002'),
(17, 5, '0', '13:45', '01:00', 'Szachy', 'Klub olimpia\ns.48'),
(18, 5, '4', '10:15', '03:00', 'Eliminacje', 'Klub olimpia\r\ns. 48'),
(19, 5, '2', '07:00', '01:00', 'Szachy', 'Klub studencki'),
(21, 4, '1', '07:00', '01:00', 'Historia', 's. 432'),
(22, 4, '2', '8:30', '01:00', 'WOS', 's. 269'),
(23, 4, '2', '10:30', '01:00', 'Matematyka', 's. 419'),
(24, 4, '0', '07:00', '02:00', 'Polski', 's. 340'),
(25, 4, '0', '09:15', '01:00', 'Polski', 's. 340'),
(26, 4, '1', '08:15', '01:30', 'Matematyka', 's. 120'),
(27, 4, '2', '7:13', '01:00', 'Przyroda', 's. 321'),
(28, 4, '3', '08:30', '01:15', 'WF', 's. 001'),
(29, 4, '3', '10:00', '01:15', 'WF', 's. 001'),
(30, 4, '4', '08:03', '01:00', 'Geografia', 's. 749'),
(31, 4, '4', '7:00', '00:45', 'Szachy', 's. 002'),
(32, 4, '3', '7:00', '00:45', 'Szachy', 's. 002');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`schedule_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `schedules`
--
ALTER TABLE `schedules`
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT dla tabeli `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
