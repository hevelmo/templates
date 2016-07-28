<?php
/*
	$nombre = $_POST['name'];
	$movil = $_POST['tel'];
	$mail = $_POST['email'];

// El mensaje
$from = $mail;

$mensaje = "Asunto: Agendar prueba de manejo de Nuevo S-Cross\n\n";
	$mensaje .= "Nombre : " .$nombre. "\n";
	$mensaje .= "Número Celular: " .$movil. "\n";
	$mensaje .= "Correo Electrónico: " .$mail. "\n";


$header = "From:".$nombre."<" . $from. ">\r\n" . "MIME-Version: 1.0\n" . "Content-type: text/plain; charset=iso-8859-1" ; //optional headerfields

// En caso de que cualquier línea tenga más de 70 caracteres, habría
// que usar wordwrap()
$mensaje = wordwrap($mensaje, 70);
//$correos = $mail."tianar1@hotmail.com";

// Enviar
mail("webmaster@medigraf.com.mx, mercadotecnia@suzuki-lm.com.mx", 'Agendar prueba de manejo de Nuevo S-Cross', $mensaje, $header) or die("¡Error!");
header ("location: index.html");
*/
	// Guardar los datos recibidos en variables:
	ob_start();
	$concesionaria = $_POST['concesionaria'];
	$modelo = $_POST['modelo'];
	$nombre = ucwords($_POST['name']);
	$telefono = $_POST['tel'];
	$mail = $_POST['email'];

	$ruta = "http://suzukigdl.com.mx/images/template/common/header/";

	if ($modelo === "s-cross") {
		$auto = "S-Cross";
		$img_model = "suzuki_s-cross.png";
	}

	var_dump($img_model);
	$mail_origin = $mail;

	$to = 'heriberto@medigraf.com.mx';
	//$to = 'mercadotecnia@suzuki-lm.com.mx';
	$subject = "Agendar prueba de manejo de Nuevo S-Cross - Suzuki Guadalajara.";

	$message   .= '<html>
						<head>
						<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
						</head>

						<body>

							<div>
								<table align="center" border="0" cellpadding="0" cellspacing="0">
							 		<tbody>
							 			<tr>
							 				<td width="11">
							 					<img src="http://suzukigdl.com.mx/images/spacer.png" style="display: block; border: 0" border="0">
							 				</td>
							 				<td style="background-color: #fff; border: 1px solid #EBE9EA; border-bottom: 0px" width="576">
								 				<table style="padding: 13px 17px 17px" border="0" cellpadding="0" cellspacing="0" width="576">
								 					<tbody>
								 						<tr>
								 							<td height="52" width="102">
								 								<a style="display: block; border: 0" href="http://suzukigdl.com.mx" target="_blank" rel="noreferrer">
								 									<img style="display: block; border: 0" src="http://suzukigdl.com.mx/images/template/common/header/horizontal_logo.png" border="0">
							 									</a>
								 							</td>
								 						</tr>
								 					</tbody>
								 				</table>
								 			</td>
											<td width="11">
												<img src="http://suzukigdl.com.mx/images/spacer.png" style="display: block; border: 0" border="0">
											</td>
										</tr>
										<tr>
											<td colspan="3" height="78" bgcolor="#CA272C" width="11">
												<p style="color:#ffffff;font-family:Lato,Arial,sans-serif;font-size:24px;text-align:center;padding:0">
													Agendar prueba de manejo de Nuevo S-Cross
												</p>
											</td>
										</tr>
										<tr>
											<td height="11" valign="top" width="11">
												<img style="display:block;border:0" src="http://suzukigdl.com.mx/images/shadow-left.png" border="0" class="CToWUd">
											</td>
											<td rowspan="2" style="border:1px solid #ebe9ea;border-top:0" bgcolor="#ffffff">
												<table style="padding:15px 60px 15px" border="0" cellpadding="0" cellspacing="0" width="600">
													<tbody>
														<tr>
							 								<td height="0" valign="top">
							 									<p style="color: #000000; font-family: Lato, Arial, sans-serif; font-size: 13px; text-align: left; padding: 0"></p>
							 								</td>
								 							<td height="0" valign="top">
							 									<img src="'.$ruta.'/'.$img_model.'" alt="Modelo">
								 							</td>
							 							</tr>
						 								<tr>
						 									<td height="20" valign="top" width="250">
																<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																	Modelo:
																</strong>
															</td>
															<td height="20" valign="top">
																<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$auto.'</span><br>
															</td>
														</tr>
														<tr>
															<td height="20" valign="top" width="250">
																<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																	Nombre(s):
																</strong>
															</td>
															<td height="20" valign="top">
																<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$nombre.'</span><br>
															</td>
														</tr>
														<tr>
															<td height="20" valign="top" width="250">
																<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																	Número Celular:
																</strong>
															</td>
															<td height="20" valign="top">
																<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$telefono.'</span><br>
															</td>
														</tr>
														<tr>
															<td height="20" valign="top" width="250">
																<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																	Correo Electrónico:
																</strong>
															</td>
															<td height="20" valign="top">
																<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$mail.'</span><br>
															</td>
														</tr>
														<tr>
															<td height="20" valign="top" width="250">
																<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																	Concesionaria:
																</strong>
															</td>
															<td height="20" valign="top">
																<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$concesionaria.'</span><br>
															</td>
														</tr>
													</tbody>
												</table>
												<table style="padding:20px 0 20px 0;border-top:1px solid #ccc" align="center" border="0" cellpadding="0" cellspacing="0" width="543">
													<tbody>
														<tr>
															<td height="14" width="15">
						 										<img style="display: block; border: 0" src="http://suzukigdl.com.mx/images/footer-logo.png" border="0">
						 									</td>
						 									<td width="125px">
						 										<p style="color: #ffffff; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 700; text-align: right; padding: 0">
						 											<a style="color: #0059a9" href="http://suzukigdl.com.mx/" target="_blank" rel="noreferrer">suzukigdl.com.mx</a>
						 										</p>

						 									</td>
						 									<td>
						 										<p style="color: #000000; font-family: Lato, Arial, sans-serif; font-size: 11px; text-align: right; padding: 0">
						 											&nbsp;© 2015 Suzuki Motor de México / Guadalajara
						 										</p>
						 									</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td height="11" valign="top" width="11">
												<img style="display:block;border:0" src="http://suzukigdl.com.mx/images/shadow-right.png" border="0" class="CToWUd">
											</td>
										</tr>
										<tr>
											<td width="11">
												<img src="http://suzukigdl.com.mx/images/spacer.png" style="display:block;border:0" border="0" class="CToWUd">
											</td>
											<td width="11">
												<img src="http://suzukigdl.com.mx/images/spacer.png" style="display:block;border:0" border="0" class="CToWUd">
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</body>
					</html>';

	$headers = "From: ". $nombre ." ". $apellido ."<" . $mail_origin . ">"."\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=ISO-8859-1\r\n";
	$headers .= 'Bcc:  cold_space@hotmail.com' . "\r\n";
	//$headers .= 'Bcc:  mercadotecnia@suzuki-lm.com.mx' . "\r\n";

	$sent =  mail($to,$subject,$message,$headers);


	if($sent) {
		echo 'Envio Correcto';
	} else {
		echo 'Fallo el Envio';
	}
	//ob_end_flush();
	header ("location: http://suzukigdl.com.mx/");
	//exit();
?>

