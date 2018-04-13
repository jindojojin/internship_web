-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 13, 2018 at 07:17 AM
-- Server version: 5.7.18
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `internship_web`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `userID` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `userID` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `company` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `vnumail` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `phoneNumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lecturers`
--

CREATE TABLE `lecturers` (
  `userID` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `dob` int(11) NOT NULL,
  `vnumail` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `gmail` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `phoneNumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `userID` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `userID` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `studentID` int(8) NOT NULL,
  `class` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `grade` tinyint(2) NOT NULL,
  `majors` varchar(20) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `dob` date NOT NULL,
  `vnumail` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `gpa` tinyint(4) NOT NULL,
  `graduationYear` year(4) NOT NULL,
  `picture` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `studentEmail` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `skypeID` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `facebook` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `phoneNumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `position` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `languageSkill` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `certificate` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `workExperience` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `favorite` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `orientation` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `lecturers`
--
ALTER TABLE `lecturers`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `studentID` (`studentID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
