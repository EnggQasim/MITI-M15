-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2017 at 05:05 AM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miti`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `fatherName` varchar(255) NOT NULL,
  `course` varchar(255) NOT NULL,
  `timing` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `fee` int(255) NOT NULL,
  `cnic` varchar(15) NOT NULL,
  `dob` date NOT NULL,
  `doa` date NOT NULL,
  `cell` varchar(20) NOT NULL,
  `user` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `fatherName`, `course`, `timing`, `address`, `fee`, `cnic`, `dob`, `doa`, `cell`, `user`, `pass`, `time`) VALUES
(1, 'Hassan', 'Irfan', 'ADIT', '7 to 9', 'Korangi', 1200, '#####-#######-#', '1998-03-18', '2017-01-01', '031003523393', 'hassan', '146', '2017-10-04 02:59:48'),
(2, 'Usama Khan', 'Abdul hafiz', 'ADIT', '5 to 7', 'Korangi', 1300, '12345-1234567-3', '1997-06-13', '2017-01-01', '0302-7612011', 'usama', '123', '2017-10-04 02:59:48'),
(3, 'Shahzaib', 'Abdul Ghani', 'ADIT', '11 to 1', 'Korangi', 1200, '12345-1234567-1', '1999-11-17', '2017-01-01', '0301-2500511', 'shahzaib', '145', '2017-10-04 03:01:01'),
(4, 'Muhammad Qasim', 'Muhamamd Aslam', '', '', '', 1500, '', '0000-00-00', '0000-00-00', '', '', '', '2017-10-08 03:05:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
