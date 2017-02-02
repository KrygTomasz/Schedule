-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 02 Lut 2017, 01:00
-- Wersja serwera: 10.1.16-MariaDB
-- Wersja PHP: 5.5.38

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
(1, NULL, 'Schedule', 0),
(2, NULL, 'Plan 1', 0),
(3, NULL, 'Plan Zajec', 0);

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
(1, 1, '1', '07:00', '01:00', 'Task1', ''),
(2, 1, '2', '8:30', '01:00', 'Task2', ''),
(3, 1, '2', '10:30', '01:00', 'Task3', ''),
(4, 2, '3', '13:30', '01:00', 'Task Plan1', ''),
(5, 2, '4', '11:00', '01:00', 'Task Plan', ''),
(6, 3, '0', '10:30', '01:00', 'Task1 Title', 'Dets1'),
(7, 3, '1', '12:30', '02:00', 'Task2 Title', 'Dets2');

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
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT dla tabeli `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
