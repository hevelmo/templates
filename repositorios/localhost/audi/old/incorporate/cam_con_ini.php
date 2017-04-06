<?php
/*
 * Copyright (C) 2016 JAGUAR LAND ROVER COUNTRY
 *
 */
$hostdb = '50.63.156.22';
$devserverlist = array('127.0.0.1','::1','192.168.0.102','localhost',$hostdb);

if(!in_array($_SERVER['SERVER_NAME'], $devserverlist)){
    define("HOST", '50.63.156.22');
    //define("HOST", "localhost");
	define("USER", "medigraf_semcar");
	define("PASSWORD", "@irBus2013-Lop2014");
	define("DATABASE", "medigraf_camcardb");
} else {
	define("HOST", "localhost");
	define("USER", "master");
	define("PASSWORD", "12345");
	define("DATABASE", "camcardb");
}

/*if(!in_array($_SERVER['SERVER_NAME'], $devserverlist)){
    define("HOST2", '50.63.156.22');
	define("USER2", "medigraf_ljagldr");
	define("PASSWORD2", "rGoxGGHF6&T.");
	define("DATABASE2", "medigraf_landroverdb");
} else {
	define("HOST2", "localhost");
	define("USER2", "master");
	define("PASSWORD2", "12345");
	define("DATABASE2", "landroverdb");
}*/

define("SECURE", FALSE);//FOR DEVELOPMENT ONLY!!!!