<?php
/*
 * Copyright (C) 2016 JAGUAR LAND ROVER COUNTRY
 *
 */
$hostdb = '50.63.156.22';
$devserverlist = array('127.0.0.1','::1','192.168.0.102','localhost',$hostdb);

if(!in_array($_SERVER['SERVER_NAME'], $devserverlist)){
    define("CAMHOST", '50.63.156.22');
    //define("CAMHOST", "localhost");
	define("CAMUSER", "medigraf_semcar");
	define("CAMPASSWORD", "@irBus2013-Lop2014");
	define("CAMDATABASE", "medigraf_camcardb");
} else {
	define("CAMHOST", "localhost");
	define("CAMUSER", "master");
	define("CAMPASSWORD", "12345");
	define("CAMDATABASE", "camcardb");
}

define("SECURE", FALSE);//FOR DEVELOPMENT ONLY!!!!