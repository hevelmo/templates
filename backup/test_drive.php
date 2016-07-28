<?php
	$fecha = $_POST['htd_date'];
	$nombre = $_POST['htd_name'];
	$apellido = $_POST['htd_lastname'];
	$mail = $_POST['htd_email'];
	$telefono = $_POST['htd_tel'];
	$noticias = $_POST['chk-newsletter'];
	$concesionaria = $_POST['input_concessionaire_models'];

	if ($noticias == "on") {
		$suscripcion = "Si quiere";
	} else if ($noticias == "") {
		$suscripcion = "No quiere";
	}


// El mensaje
$from = $mail;

$mensaje = "Asunto: Solicitud de prueba de manejo\n\n";
	$mensaje .= "Nombre(s) : " .$nombre. "\n";
	$mensaje .= "Apellido(s) : " .$apellido. "\n";
	$mensaje .= "Correo Electrónico: " .$mail. "\n";
	$mensaje .= "Telefono : " .$telefono. "\n";
	$mensaje .= "Concesionaria: " .$concesionaria. "\n";
	$mensaje .= "Fecha para prueba : " .$fecha. "\n";
	$mensaje .= "Desea recibir noticias: " .$suscripcion. "\n";


$header = "From:".$nombre."<" . $from. ">\r\n" . "MIME-Version: 1.0\n" . "Content-type: text/plain; charset=iso-8859-1" ; //optional headerfields

// En caso de que cualquier línea tenga más de 70 caracteres, habría
// que usar wordwrap()
$mensaje = wordwrap($mensaje, 70);
//$correos = $mail."tianar1@hotmail.com";

// Enviar
mail("mercadotecnia@suzuki-lm.com.mx", 'Mensaje de la pagina de internet Suzuki GDL', $mensaje, $header) or die("¡Error!");
header ("location: index.html");
?>
