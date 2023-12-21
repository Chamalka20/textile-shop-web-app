-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: textile
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `adid` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`adid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'chamalka','12345'),(2,'isara','12345'),(3,'sithmini','12345');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `session_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `cart_itemscol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pro_id` (`product_id`),
  KEY `sess_id_idx` (`session_id`),
  CONSTRAINT `pro_id2` FOREIGN KEY (`product_id`) REFERENCES `product` (`pro_id`),
  CONSTRAINT `sess_id` FOREIGN KEY (`session_id`) REFERENCES `shopping_session` (`sess_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `inven_id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `inventorycol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`inven_id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (23,6777777,NULL),(24,233333,NULL),(25,222222,NULL),(26,787,NULL),(27,787,NULL),(28,343,NULL),(29,343,NULL),(30,67,NULL),(31,67,NULL),(32,78,NULL),(33,4546,NULL),(34,90,NULL),(35,78,NULL),(36,90,NULL),(37,67,NULL),(38,78,NULL),(39,90,NULL),(40,90,NULL),(41,90,NULL),(42,677,NULL),(43,4546,NULL),(44,890,NULL),(45,45665,NULL),(46,45665,NULL),(47,658,NULL),(48,0,NULL),(49,90,NULL),(50,226,NULL),(51,301,NULL),(52,165,NULL),(53,176,NULL),(54,811,NULL),(55,811,NULL),(56,213,NULL),(57,657,NULL),(58,281,NULL),(59,281,NULL),(60,569,NULL),(61,269,NULL),(62,738,NULL),(63,221,NULL),(64,244,NULL),(65,244,NULL),(66,244,NULL),(67,502,NULL),(68,254,NULL),(69,691,NULL),(70,691,NULL),(71,185,NULL),(72,185,NULL),(73,35,NULL),(74,46,NULL),(75,36,NULL),(76,36,NULL),(77,29,NULL),(78,30,NULL),(79,39,NULL),(80,37,NULL),(81,37,NULL),(82,34,NULL),(83,54,NULL),(84,38,NULL),(85,36,NULL),(86,35,NULL),(87,32,NULL),(88,37,NULL),(89,33,NULL),(90,42,NULL),(91,41,NULL),(92,46,NULL),(93,30,NULL),(94,19,NULL),(95,25,NULL),(96,19,NULL),(97,22,NULL),(98,20,NULL),(99,20,NULL),(100,20,NULL),(101,20,NULL),(102,20,NULL),(103,20,NULL),(104,22,NULL),(105,22,NULL);
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `ordd_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  `payment_id` int DEFAULT NULL,
  `order_date` varchar(10) DEFAULT NULL,
  `orderStatus` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ordd_id`),
  KEY `pay_id_idx` (`payment_id`),
  KEY `user_id2` (`user_id`),
  CONSTRAINT `payId1` FOREIGN KEY (`payment_id`) REFERENCES `user_payment` (`id`),
  CONSTRAINT `user_id1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (4,47,168,4,'2022-12-09','In progress'),(5,48,1005,5,'2022-12-09','In progress'),(6,49,30380,6,'2023-03-17','In progress'),(7,50,6270,7,'2023-03-17','In progress'),(8,55,3980,8,'2023-03-19','In progress'),(9,56,3980,9,'2023-03-19','In progress'),(10,57,6870,10,'2023-03-19','In progress'),(11,58,3380,11,'2023-03-20','In progress'),(12,59,3380,12,'2023-03-20','In progress');
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `pro_size` varchar(10) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ord_id_idx` (`order_id`),
  KEY `pro_id_idx` (`product_id`),
  CONSTRAINT `ord_id` FOREIGN KEY (`order_id`) REFERENCES `order_details` (`ordd_id`),
  CONSTRAINT `pro_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`pro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (2,6,127,'medium',4),(3,6,142,'medium',3),(4,6,148,'small',2),(5,7,147,'medium',2),(6,7,149,'medium',1),(7,8,151,'small',2),(8,9,151,'small',2),(9,10,150,'XL',3),(10,11,149,'small',2),(11,12,149,'small',2);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_details`
--

DROP TABLE IF EXISTS `payment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_details` (
  `pay_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `provider` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pay_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_details`
--

LOCK TABLES `payment_details` WRITE;
/*!40000 ALTER TABLE `payment_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pro_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `inventory_id` int DEFAULT NULL,
  `size_id` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `sale_id` int DEFAULT NULL,
  `in_stock` varchar(6) DEFAULT NULL,
  `salles` int DEFAULT NULL,
  `add_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pro_id`),
  KEY `cat2_idx` (`category_id`),
  KEY `inven_id_idx` (`inventory_id`),
  KEY `dis_id_idx` (`sale_id`),
  KEY `size_id_idx` (`size_id`),
  CONSTRAINT `cat_id` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`),
  CONSTRAINT `dis_id` FOREIGN KEY (`sale_id`) REFERENCES `sale` (`saleid`),
  CONSTRAINT `inven_id` FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`inven_id`),
  CONSTRAINT `size_id` FOREIGN KEY (`size_id`) REFERENCES `product_sizes` (`siz_id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (126,' Leopard Printed Velvet Maxi Dress','party',23,73,29,6900,'ytuiyiy.jpeg',0,'true',0,'2022-12-10'),(127,' Maxi Dress with Raffle Detail','party',23,74,30,4200,'rtyrty.jpeg',0,'true',32,'2022-12-10'),(128,'Maxi Dress Dazzling over coat','party',23,75,31,4500,'fghfgh.jpg',0,'true',0,'2022-12-10'),(130,' Bead Detailed Maxi Dress','party',23,77,33,5600,'gyug.jpeg',0,'true',27,'2022-12-10'),(131,' Tailed Maxi Dress','party',23,78,34,5400,'hujkhj.jpeg',0,'true',0,'2022-12-10'),(132,'Floral Maxi Dress','party',23,79,35,5400,'ihljui.jpeg',0,'true',0,'2022-12-10'),(133,' Off Shoulder Dress','party',23,80,36,5600,'tyuty.jpeg',0,'true',30,'2022-12-10'),(134,'Sequinned Lace Maxi Dress','party',23,81,37,5400,'ytuty.jpeg',0,'true',0,'2022-12-10'),(135,'Floral Printed Off Shoulder Dress','party',23,82,38,5600,'yuijgyj.jpeg',0,'true',0,'2022-12-10'),(136,' Beaded Maxi Dress','party',23,83,39,4500,'yuyi.jpg',0,'true',0,'2022-12-10'),(137,'Danica Printed Long Sleeve','Office',22,84,40,2200,'webpc-passthru.webp',0,'true',0,'2022-12-10'),(138,'Eugine Smocked Hem Crop','office',22,85,41,2200,'Ladies_Blouse_Fashion-Bug-Sri-Lanka.jpg',0,'true',0,'2022-12-10'),(139,'Siana Floral Printed Long Sleeve','office',22,86,42,2400,'iuiuLadies-Blouse_Fashion-Bug-Sri-Lanka.jpg',0,'true',0,'2022-12-10'),(140,' FLORAL PRINTED CROP','office',22,87,43,1600,'fashion-bug_sri-lanka_compressed.jpg',0,'true',0,'2022-12-10'),(141,'Charmaine Tie Up Neck Long Sleeve','office',22,88,44,2400,'jhkFASHION-BUG_-SRI-LANKA_compressed.jpg',0,'true',0,'2022-12-10'),(142,'Tory Long Sleeve Crinkle','office',22,89,45,2200,'tr7iuFASHION-BUG_-SRI-LANKA_compressed.jpg',0,'true',0,'2022-12-10'),(143,'CHANTRIA SLEEVELESS','office',22,90,46,1900,'uiyufashion-bug_sri-lanka_compressed.jpg',0,'true',29,'2022-12-10'),(144,'CHARMAINE TIE UP NECK LONG SLEEVE','office',22,91,47,2400,'gijguFASHION-BUG_-SRI-LANKA_compressed.jpg',0,'true',0,'2022-12-10'),(145,'Long Sleeve WW','office',22,92,48,2400,'fdhfgfghf.jpeg',0,'true',40,'2022-12-10'),(146,' Frilled Sleeve WW','office',22,93,49,2200,'uytyuyyy.jpeg',0,'true',0,'2022-12-10'),(147,'JACINTA FLORAL PRINTED MAXI SKIRT','fgrger',21,94,50,2290,'jhiopjhiji.jpg',0,'true',0,'2023-03-17'),(148,'GIVO OLIVIA LINEN BLEND MAXI SKIRT','skirt',21,95,51,3490,'yttyu.jpg',0,'true',0,'2023-03-17'),(149,'GIVO MAUDE WAIST TIE UP BUCKET DRESS SKIRT','skirt',21,96,52,1690,'tnhuuj.jpg',0,'true',2,'2023-03-17'),(150,'WOMENS ROSIE MIDI LENGTH LINEN SKIRT','skirt',21,97,53,2290,'dfdfgd.jpg',0,'true',1,'2023-03-17'),(151,'AZALEA FLORAL PRINTED MIDI LENGTH SKIRT','skirt',21,103,59,1990,'hugkjg.jpg',0,'true',1,'2023-03-17'),(152,'WOMENS JACINTA FLORAL PRINTED MAXI SKIRT','Skirt',21,105,61,1950,'ere.jpg',0,'true',0,'2023-10-10');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (20,'All',NULL),(21,'Skirt',NULL),(22,'OfficeWear',NULL),(23,'PartyWearDresses',NULL);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sizes`
--

DROP TABLE IF EXISTS `product_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_sizes` (
  `siz_id` int NOT NULL AUTO_INCREMENT,
  `small` int DEFAULT NULL,
  `medium` int DEFAULT NULL,
  `large` int DEFAULT NULL,
  `XL` int DEFAULT NULL,
  PRIMARY KEY (`siz_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sizes`
--

LOCK TABLES `product_sizes` WRITE;
/*!40000 ALTER TABLE `product_sizes` DISABLE KEYS */;
INSERT INTO `product_sizes` VALUES (1,45,267,89,12),(2,67,267,89,56),(3,456,56,56,90),(4,20,10,10,20),(5,20,30,20,20),(6,34,67,80,45),(7,133,34,78,56),(8,23,54,34,54),(9,23,54,45,54),(10,34,355,377,45),(11,34,355,377,45),(12,45,35,66,67),(13,56,343,234,24),(14,23,23,213,22),(15,23,23,213,22),(16,56,455,34,24),(17,46,78,89,56),(18,24,456,24,234),(19,34,32,112,43),(20,56,45,67,76),(21,56,45,67,76),(22,56,45,67,76),(23,67,40,35,355),(24,67,80,8,90),(25,456,78,67,90),(26,456,78,67,90),(27,45,70,40,30),(28,45,70,40,30),(29,12,8,10,5),(30,7,12,8,19),(31,6,11,7,12),(32,6,11,7,12),(33,8,10,4,7),(34,7,2,9,12),(35,14,6,12,7),(36,6,10,9,12),(37,7,12,9,9),(38,6,7,12,9),(39,23,10,12,9),(40,6,10,7,15),(41,5,8,16,7),(42,5,11,12,7),(43,6,10,7,9),(44,7,14,10,6),(45,7,12,9,5),(46,9,12,6,15),(47,5,10,12,14),(48,18,12,10,6),(49,12,6,9,3),(50,5,7,4,3),(51,6,3,7,9),(52,1,4,8,2),(53,6,3,6,4),(54,4,6,3,7),(55,4,6,3,7),(56,4,6,3,7),(57,4,6,3,7),(58,4,6,3,7),(59,2,6,3,7),(60,6,7,6,3),(61,6,7,6,3);
/*!40000 ALTER TABLE `product_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sale` (
  `saleid` int NOT NULL AUTO_INCREMENT,
  `saleName` varchar(45) DEFAULT NULL,
  `salePercentage` int DEFAULT NULL,
  `saleActive` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`saleid`)
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
INSERT INTO `sale` VALUES (0,'no sale',0,'false'),(85,'',50,'true'),(86,'',20,'true'),(87,'',30,'true'),(88,'',30,'true'),(89,'',40,'true'),(90,'',45,'true'),(91,'',60,'true'),(92,'',30,'true'),(93,'',45,'true'),(94,'',45,'true'),(95,'',20,'true'),(96,'',34,'true'),(97,'',20,'true'),(98,'',30,'true'),(99,'',32,'true'),(100,'',50,'true'),(101,'',40,'true'),(102,'',20,'true'),(103,'',50,'true'),(104,'',34342,'true'),(105,'',34342,'true'),(106,'',34,'true'),(107,'',23,'true'),(108,'',12,'true'),(109,'',23,'true'),(110,'',30,'true'),(111,'',30,'true'),(112,'',23456789,'true'),(113,'',23456789,'true'),(114,'',23456789,'true'),(115,'',12345678,'true'),(116,'',123456789,'true'),(117,'',2345678,'true'),(118,'',30,'true'),(119,'',40,'true'),(120,'',40,'true'),(121,'',40,'true'),(122,'',30,'true'),(123,'',34,'true'),(124,'',50,'true'),(125,'',50,'true'),(126,'',45,'true'),(127,'',23,'true'),(128,'',30,'true'),(129,'',20,'true'),(130,'',20,'true'),(131,'',40,'true'),(132,'',20,'true'),(133,'',20,'true'),(134,'',70,'true'),(135,'',70,'true'),(136,'',10,'true'),(137,'',20,'true'),(138,'',30,'true'),(139,'',50,'true'),(140,'',20,'true'),(141,'',90,'true'),(142,'',20,'true');
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_session`
--

DROP TABLE IF EXISTS `shopping_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_session` (
  `sess_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  PRIMARY KEY (`sess_id`),
  KEY `user_id` (`user_id`),
  KEY `user_id_id` (`user_id`),
  CONSTRAINT `user_id2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_session`
--

LOCK TABLES `shopping_session` WRITE;
/*!40000 ALTER TABLE `shopping_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telephone` int DEFAULT NULL,
  `isTemporaty` varchar(10) DEFAULT NULL,
  `ceated_at` datetime(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (42,'jaya','mac','123465','edr',44545,'false','2022-10-04 14:04:44.5'),(43,'cam','rtw','wwww','dfggg',34645,'false','2022-10-04 17:14:46.9'),(44,'chamalka','erfrfw','43121','werwse',3423423,'false','2022-12-09 00:00:00.0'),(45,'jayashan','gfhfgh','121231','sdfsdfsdf',234232,'false','2022-12-09 00:00:00.0'),(46,'cat','sgsdg','12124','afasfa',1414,'false','2022-12-09 00:00:00.0'),(47,'van','ewrwer','21241','asasf',23123,'false','2022-12-09 00:00:00.0'),(48,'sdfsd','sfsdfads','443242','fsdfs',1232,'false','2022-12-09 00:00:00.0'),(49,'nimal','weerawansha','5645',' mac@gmail.com',2342334,'true','2023-03-17 00:00:00.0'),(50,'nimal','weerawansha','6456','mac@gmail.com',2342334,'true','2023-03-17 00:00:00.0'),(51,'kamal','goonawa','','moon@gmail.com',67576555,'true','2023-03-19 00:00:00.0'),(52,'kamal','goonawa','','moon@gmail.com',234234,'true','2023-03-19 00:00:00.0'),(53,'kamal','goonawa','','moon@gmail.com',245444435,'true','2023-03-19 00:00:00.0'),(54,'kamal','goonawa','','moon@gmail.com',245444435,'true','2023-03-19 00:00:00.0'),(55,'kamal','goonawa','','moon@gmail.com',245444435,'true','2023-03-19 00:00:00.0'),(56,'dasun','raja','','doc@gmail.com',4352,'true','2023-03-19 00:00:00.0'),(57,'namal','weerawasha','','doc@gmail.com',23424,'true','2023-03-19 00:00:00.0'),(58,'kalani','sithmini','','doc@gmail.com',414124,'true','2023-03-20 00:00:00.0'),(59,'kalani','sithmini','','doc@gmail.com',414124,'true','2023-03-20 00:00:00.0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `ZIP` varchar(10) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `address_line1` varchar(45) DEFAULT NULL,
  `address_line2` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id3_idx` (`user_id`),
  CONSTRAINT `user_id3` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
INSERT INTO `user_address` VALUES (25,45,'w2342','rgerg','gjgjfg','rtyrtyrtrgdfhd','sfgdfgdfg'),(26,46,'43423','dgdgsd','vsdgsd','vfsfasfzx','zdvzds'),(27,47,'dasda','wqweq','asdasd','eefsdf','31'),(28,48,'drgdfg','dfgdfg','srgdrgt','fgdgsd','dfsdfs'),(29,49,'564','Sri Lanka','sdfdf','tyyu','Hikkaduwa'),(30,50,'564','Sri Lanka','weqw','tyyu','Hikkaduwa'),(31,51,'67','Sri Lanka','weqw','tyyu','galle'),(32,52,'67','Sri Lanka','weqw','tyyu','galle'),(33,53,'67','Sri Lanka','weqw','tyyu','galle'),(34,54,'67','Sri Lanka','weqw','tyyu','galle'),(35,55,'67','Sri Lanka','weqw','tyyu','galle'),(36,56,'322','Sri Lanka','aaaaaa','nugegoda','colombu'),(37,57,'322','Sri Lanka','aaaaaa','nugegoda','colombu'),(38,58,'82100','Sri Lanka','aaaaaa','beligalgoda','ambalanthota'),(39,59,'82100','Sri Lanka','aaaaaa','beligalgoda','ambalanthota');
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_payment`
--

DROP TABLE IF EXISTS `user_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `payment_type` varchar(45) DEFAULT NULL,
  `provider` varchar(45) DEFAULT NULL,
  `account_no` int DEFAULT NULL,
  `expiry` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id4_idx` (`user_id`),
  CONSTRAINT `user_id4` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_payment`
--

LOCK TABLES `user_payment` WRITE;
/*!40000 ALTER TABLE `user_payment` DISABLE KEYS */;
INSERT INTO `user_payment` VALUES (1,44,'CashOnDelivery','no',88,'null'),(2,45,'CashOnDelivery','57',56,'null'),(3,46,'CashOnDelivery','7',56,'null'),(4,47,'CashOnDelivery','56',67,'null'),(5,48,'CashOnDelivery','78',676,'null'),(6,49,'CashOnDelivery','67',56,'null'),(7,50,'CashOnDelivery','7',67,'null'),(8,55,'CashOnDelivery','null',0,'null'),(9,56,'CashOnDelivery','null',0,'null'),(10,57,'CashOnDelivery','null',0,'null'),(11,58,'CashOnDelivery','null',0,'null'),(12,59,'CashOnDelivery','null',0,'null');
/*!40000 ALTER TABLE `user_payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-21 11:22:56
