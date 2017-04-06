# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 50.63.156.22 (MySQL 5.5.52-cll)
# Database: medigraf_audidb
# Generation Time: 2016-12-08 19:02:34 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table audFinanciamientos
# ------------------------------------------------------------

CREATE TABLE `audFinanciamientos` (
  `FIN_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `FIN_Nombre` varchar(300) NOT NULL DEFAULT '',
  `FIN_Apellido` varchar(300) NOT NULL DEFAULT '',
  `FIN_Correo` varchar(200) NOT NULL DEFAULT '',
  `FIN_Telefono` varchar(15) NOT NULL DEFAULT '',
  `FIN_Agencia` varchar(300) NOT NULL DEFAULT '',
  `FIN_Material` varchar(300) NOT NULL,
  `FIN_Mensaje` text NOT NULL,
  `FIN_Fecha` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `FIN_Status` int(11) NOT NULL,
  PRIMARY KEY (`FIN_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
