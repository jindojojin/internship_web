CREATE TABLE `account` (
	`username` varchar(50) NOT NULL,
	`password` varchar(100) NOT NULL,
	`nickname` varchar(100) NOT NULL,
	`salt` varchar(50) NOT NULL,
	`permission` tinyint(1) NOT NULL DEFAULT '4',
	`userID` varchar(50) NOT NULL,
	PRIMARY KEY (`username`)
);

CREATE TABLE `student` (
	`studentID` varchar(50) NOT NULL,
	`lastName` varchar(10) NOT NULL,
	`firstName` varchar(20) NOT NULL,
	`class` varchar(50) NOT NULL,
	`grade` int(2) NOT NULL,
	`majors` varchar(50) NOT NULL,
	`address` varchar(50) NOT NULL,
	`dateOfBirth` DATE NOT NULL,
	`vnumail` varchar(20) NOT NULL,
	`cpa` int(2) NOT NULL,
	`graduationYear` year NOT NULL,
	`picture` TEXT,
	`email` varchar(20),
	`skypeID` varchar(20),
	`facebook` varchar(20),
	`phoneNumber` varchar(20),
	`position` varchar(50),
	`favorite` varchar(50),
	`orientation` varchar(50),
	`note` TEXT,
	PRIMARY KEY (`studentID`)
);

CREATE TABLE `lecturer` (
	`lecturerID` varchar(50) NOT NULL,
	`firstName` varchar(20) NOT NULL,
	`lastName` varchar(10) NOT NULL,
	`vnumail` varchar(20) NOT NULL,
	`gmail` varchar(20) NOT NULL,
	`phoneNumber` varchar(20) NOT NULL,
	`note` TEXT,
	PRIMARY KEY (`lecturerID`)
);

CREATE TABLE `admin` (
	`adminID` varchar(50) NOT NULL,
	`firtName` varchar(20) NOT NULL,
	`lastName` varchar(10) NOT NULL,
	`vnumail` varchar(20) NOT NULL,
	`phoneNumber` varchar(20) NOT NULL,
	`email` varchar(20) NOT NULL,
	PRIMARY KEY (`adminID`)
);

CREATE TABLE `partner` (
	`partnerID` varchar(50) NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	PRIMARY KEY (`partnerID`)
);

CREATE TABLE `internship_job` (
	`jobID` int(6) NOT NULL AUTO_INCREMENT,
	`partnerID` varchar(50) NOT NULL,
	`termID` bit(3) NOT NULL,
	PRIMARY KEY (`jobID`)
);

CREATE TABLE `message` (
	`senderID` varchar(50) NOT NULL,
	`receiverID` varchar(50) NOT NULL,
	`title` varchar(200) NOT NULL,
	`content` varchar(1000) NOT NULL,
	PRIMARY KEY (`senderID`,`receiverID`)
);

CREATE TABLE ` planReport` (
	`planReportID` bigint(10) NOT NULL AUTO_INCREMENT,
	`studentID` varchar(50) NOT NULL AUTO_INCREMENT,
	`jobID` int(6) NOT NULL AUTO_INCREMENT,
	`fileID` bigint(6) NOT NULL AUTO_INCREMENT,
	`title` varchar(200) NOT NULL,
	`content` varchar(1000) NOT NULL,
	PRIMARY KEY (`planReportID`)
);

CREATE TABLE `commentOfPartner` (
	`studentID` varchar(50) NOT NULL,
	`partnerID` varchar(50) NOT NULL,
	`jobID` int(6) NOT NULL,
	`title` varchar(200) NOT NULL,
	`content` varchar(1000) NOT NULL,
	PRIMARY KEY (`studentID`,`partnerID`,`jobID`)
);

CREATE TABLE `result_evaluation` (
	`studentID` varchar(50) NOT NULL,
	`fileID` bigint(6) NOT NULL AUTO_INCREMENT,
	`lecturerID` varchar(50) NOT NULL,
	`point` tinyint(2) NOT NULL,
	`comment` varchar(1000) NOT NULL,
	PRIMARY KEY (`studentID`,`fileID`,`lecturerID`)
);

CREATE TABLE `file` (
	`fileID` bigint(6) NOT NULL AUTO_INCREMENT,
	`fileName` varchar(1000) NOT NULL,
	`fileType` varchar(5) NOT NULL,
	`path` varchar(200) NOT NULL,
	PRIMARY KEY (`fileID`)
);

CREATE TABLE `student_skill` (
	`studentID` varchar(50) NOT NULL,
	`skillID` tinyint(3) NOT NULL AUTO_INCREMENT,
	`level` tinyint(1) NOT NULL,
	PRIMARY KEY (`studentID`,`skillID`)
);

CREATE TABLE `skill` (
	`skillID` tinyint(3) NOT NULL,
	`skillName` varchar(20) NOT NULL,
	`detail` varchar(200) NOT NULL,
	PRIMARY KEY (`skillID`)
);

CREATE TABLE `internship_term` (
	`termID` int(3) NOT NULL AUTO_INCREMENT,
	`termName` varchar(20) NOT NULL,
	`termInfor` varchar(300) NOT NULL,
	`startDate` DATE NOT NULL,
	`endDate` DATE NOT NULL,
	PRIMARY KEY (`termID`)
);

CREATE TABLE `comment` (
	`commentID` bigint(18) NOT NULL AUTO_INCREMENT,
	`content` varchar(500) NOT NULL,
	`userID` varchar(50) NOT NULL,
	PRIMARY KEY (`commentID`)
);

CREATE TABLE `commentReport` (
	`commentID` bigint(18) NOT NULL,
	`planReportID` bigint(10) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`commentID`,`planReportID`)
);

ALTER TABLE `internship_job` ADD CONSTRAINT `internship_job_fk0` FOREIGN KEY (`partnerID`) REFERENCES `partner`(`partnerID`);

ALTER TABLE `internship_job` ADD CONSTRAINT `internship_job_fk1` FOREIGN KEY (`termID`) REFERENCES `internship_term`(`termID`);

ALTER TABLE `message` ADD CONSTRAINT `message_fk0` FOREIGN KEY (`senderID`) REFERENCES `account`(`userID`);

ALTER TABLE `message` ADD CONSTRAINT `message_fk1` FOREIGN KEY (`receiverID`) REFERENCES `account`(`userID`);

ALTER TABLE ` planReport` ADD CONSTRAINT ` planReport_fk0` FOREIGN KEY (`studentID`) REFERENCES `student`(`studentID`);

ALTER TABLE ` planReport` ADD CONSTRAINT ` planReport_fk1` FOREIGN KEY (`jobID`) REFERENCES `internship_job`(`jobID`);

ALTER TABLE ` planReport` ADD CONSTRAINT ` planReport_fk2` FOREIGN KEY (`fileID`) REFERENCES `file`(`fileID`);

ALTER TABLE `commentOfPartner` ADD CONSTRAINT `commentOfPartner_fk0` FOREIGN KEY (`studentID`) REFERENCES `student`(`studentID`);

ALTER TABLE `commentOfPartner` ADD CONSTRAINT `commentOfPartner_fk1` FOREIGN KEY (`partnerID`) REFERENCES `partner`(`partnerID`);

ALTER TABLE `commentOfPartner` ADD CONSTRAINT `commentOfPartner_fk2` FOREIGN KEY (`jobID`) REFERENCES `internship_job`(`jobID`);

ALTER TABLE `result_evaluation` ADD CONSTRAINT `result_evaluation_fk0` FOREIGN KEY (`studentID`) REFERENCES `student`(`studentID`);

ALTER TABLE `result_evaluation` ADD CONSTRAINT `result_evaluation_fk1` FOREIGN KEY (`fileID`) REFERENCES `file`(`fileID`);

ALTER TABLE `result_evaluation` ADD CONSTRAINT `result_evaluation_fk2` FOREIGN KEY (`lecturerID`) REFERENCES `lecturer`(`lecturerID`);

ALTER TABLE `student_skill` ADD CONSTRAINT `student_skill_fk0` FOREIGN KEY (`studentID`) REFERENCES `student`(`studentID`);

ALTER TABLE `student_skill` ADD CONSTRAINT `student_skill_fk1` FOREIGN KEY (`skillID`) REFERENCES `skill`(`skillID`);

ALTER TABLE `comment` ADD CONSTRAINT `comment_fk0` FOREIGN KEY (`userID`) REFERENCES `account`(`userID`);

ALTER TABLE `commentReport` ADD CONSTRAINT `commentReport_fk0` FOREIGN KEY (`commentID`) REFERENCES `comment`(`commentID`);

ALTER TABLE `commentReport` ADD CONSTRAINT `commentReport_fk1` FOREIGN KEY (`planReportID`) REFERENCES ` planReport`(`planReportID`);

