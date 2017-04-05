<?php
//include_once '';

$contact_firstname = $_POST["firstname"];
$contact_lastname = $_POST["lastname"];
$contact_phone = $_POST["phone"];
$contact_email = $_POST["email"];
$contact_message = $_POST["message"];

if (mail($contact_firstname, $contact_lastname, $contact_phone, $contact_email, $contact_message)) {
    $devserverlist = array('127.0.0.1','::1','192.168.0.102','localhost');
    $server = (!in_array($_SERVER['SERVER_NAME'], $devserverlist))
        ? "mayomanzo.medigraf.com.mx"
        : "http://localhost:8033/mayomanzo/";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://$server/api/v1/post/contact");
    $package_geo = curl_exec($ch);
    curl_close($ch);
    echo "El mail ha sido enviado";
}else{
    echo "Error de envio " . mysql_error();
}
