<?php
/*
 * Copyright (C) 2016 LANDING SUZUKI
 *
 */
$hostdb = '50.63.156.22';
$devserverlist = array('127.0.0.1','::1','192.168.0.102',$hostdb);

//$devserverlist = array('127.0.0.1','::1','192.168.0.102','localhost');

if(!in_array($_SERVER['SERVER_NAME'], $devserverlist)){
	define("SUKHOST", '50.63.156.22');
    //define("SUKHOST", "localhost");
	define("SUKUSER", "medigraf_suzuki");
	define("SUKPASSWORD", "7tv.=R),sy8_");
	define("SUKDATABASE", "medigraf_suzukidb");
} else {
	define("SUKHOST", "localhost");
	define("SUKUSER", "master");
	define("SUKPASSWORD", "12345");
	define("SUKDATABASE", "suzukidb");
}
define("SECURE", FALSE);    // FOR DEVELOPMENT ONLY!!!!

