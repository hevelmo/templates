<?php
/*
 * Copyright (C) 2015 CAMCAR
 *
 */

$devserverlist = array('127.0.0.1','::1','192.168.0.102','localhost');

if(!in_array($_SERVER['SERVER_NAME'], $devserverlist)){
    define("HOST_2", "localhost");
	define("USER_2", "medigraf_ljagldr");
	define("PASSWORD_2", "rGoxGGHF6&T.");
	define("DATABASE_2", "medigraf_landroverdb");
} else {
	define("HOST_2", "localhost");
	define("USER_2", "master");
	define("PASSWORD_2", "12345");
	define("DATABASE_2", "landroverdb");
}

define("SECURE", FALSE);//FOR DEVELOPMENT ONLY!!!!