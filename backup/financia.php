<?php
	ob_start();
	$modelo=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["fr_model_car"]));
	$price=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["fr_car_price"]));
	$engagement=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["fr_car_engagement"]));
	$mensualidad=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["fr_car_monthly_payment"]));
	$plazos=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["fr_car_months"]));
	$nombre=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["hfu_name"]));
	$apellido=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["hfu_lastname"]));
	$mail=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["hfu_email"]));
	$telefono=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["hfu_tel"]));
	$noticias=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["funding-newsletter"]));
	$prueba=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["hfu_drive"]));
	$concesionaria=str_replace ( array("\n"), array("<br>"),trim($_REQUEST["porra"]));
	if ($modelo === "Swift Sport 2015") {
		$image_modelo = "suzuki_swift-sport.png";
	} elseif ($modelo === "Swift 2015") {
		$image_modelo = "suzuki_swift.png";
	} elseif ($modelo === "SX4 Crossover 2015") {
		$image_modelo = "suzuki_sx4-crossover.png";
	} elseif ($modelo === "SX4 Sedán 2015") {
		$image_modelo = "suzuki_sx4-sedan.png";
	} elseif ($modelo === "Kizashi 2015") {
		$image_modelo = "suzuki_kizashi.png";
	} elseif ($modelo === "Grand Vitara 2015") {
		$image_modelo = "suzuki_grand-vitara.png";
	} elseif ($modelo === "S-Cross 2015") {
		$image_modelo = "suzuki_s-cross.png";
	}
	/*if ($concesionaria === 'lopez-mateos') {
		$concesionaria = 'Suzuki López Mateos';
	} elseif ($concesionaria === 'vallarta') {
		$concesionaria = 'Suzuki Vallarta';
	} elseif ($concesionaria === 'colima') {
		$concesionaria = 'Suzuki Colima';
	} elseif ($concesionaria === 'morelia') {
		$concesionaria = 'Suzuki Morelia';
	}*/
	/*if ($prueba == "Sí deseas manejarlo") {
		$telefono;
	} elseif ($prueba == "No deseas manejarlo") {
		$telefono = "No se agrego telefono";
	}*/
	if (isset($noticias) && $noticias == "on") {
		$suscripcion = "Activado";
		$from2 = $mail;
		$encabezados2 = "From:". $nombre ."<". $from2 .">" . "\r\n" . "MIME-Version: 1.0" . "\r\n" . "Content-type: text/html; charset=UTF-8";
		$mensaje2 = stripslashes("
			<div>
				<table align='center' border='0' cellpadding='0' cellspacing='0'>
			 		<tbody>
			 			<tr>
			 				<td width='11'>
			 					<img src='http://suzukigdl.com.mx/images/spacer.png' style='display: block; border: 0' border='0'>
			 				</td>
			 				<td style='background-color: #fff; border: 1px solid #EBE9EA; border-bottom: 0px' width='576'>
				 				<table style='padding: 13px 17px 17px' border='0' cellpadding='0' cellspacing='0' width='576'>
				 					<tbody>
				 						<tr>
				 							<td height='52' width='102'>
				 								<a style='display: block; border: 0' href='http://suzukigdl.com.mx' target='_blank' rel='noreferrer'>
				 									<img style='display: block; border: 0' src='http://suzukigdl.com.mx/images/template/common/header/horizontal_logo.png' border='0'>
			 									</a>
				 							</td>
				 						</tr>
				 					</tbody>
				 				</table>
				 			</td>
							<td width='11'>
								<img src='http://suzukigdl.com.mx/images/spacer.png' style='display: block; border: 0' border='0'>
							</td>
						</tr>
						<tr>
							<td colspan='3' height='78' bgcolor='#CA272C' width='11'>
								<p style='color:#ffffff;font-family:Lato,Arial,sans-serif;font-size:24px;text-align:center;padding:0'>
									Solicitud de prueba de manejo - Newsletter
								</p>
							</td>
						</tr>
						<tr>
							<td height='11' valign='top' width='11'>
								<img style='display:block;border:0' src='http://suzukigdl.com.mx/images/shadow-left.png' border='0' class='CToWUd'>
							</td>
							<td rowspan='2' style='border:1px solid #ebe9ea;border-top:0' bgcolor='#ffffff'>
								<table style='padding:35px 60px 35px' border='0' cellpadding='0' cellspacing='0' width='600'>
									<tbody>
										<tr>
											<td height='11' valign='top' width='250'>
												<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
													Nombre(s):
												</strong>
											</td>
											<td height='11' valign='top'>
												<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; text-align: right; padding: 0'>$nombre $apellido</span><br>
											</td>
										</tr>
										<tr>
											<td height='11' valign='top' width='250'>
												<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
													Correo Electrónico:
												</strong>
											</td>
											<td height='11' valign='top'>
												<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; text-align: right; padding: 0'>$mail</span><br>
											</td>
										</tr>
										<tr>
											<td height='11' valign='top' width='250'>
												<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
													Concesionaria:
												</strong>
											</td>
											<td height='11' valign='top'>
												<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; text-align: right; padding: 0'>$concesionaria</span><br>
											</td>
										</tr>
									</tbody>
								</table>
								<table style='padding:20px 0 20px 0;border-top:1px solid #ccc' align='center' border='0' cellpadding='0' cellspacing='0' width='543'>
									<tbody>
										<tr>
											<td height='14' width='15'>
		 										<img style='display: block; border: 0' src='http://suzukigdl.com.mx/images/footer-logo.png' border='0'>
		 									</td>
		 									<td width='125px'>
		 										<p style='color: #ffffff; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 700; text-align: right; padding: 0'>
		 											<a style='color: #0059a9' href='http://suzukigdl.com.mx/' target='_blank' rel='noreferrer'>suzukigdl.com.mx</a>
		 										</p>

		 									</td>
		 									<td>
		 										<p style='color: #000000; font-family: Lato, Arial, sans-serif; font-size: 11px; text-align: right; padding: 0'>
		 											&nbsp;© 2015 Suzuki Motor de México / Guadalajara
		 										</p>
		 									</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td height='11' valign='top' width='11'>
								<img style='display:block;border:0' src='http://suzukigdl.com.mx/images/shadow-right.png' border='0' class='CToWUd'>
							</td>
						</tr>
						<tr>
							<td width='11'>
								<img src='http://suzukigdl.com.mx/images/spacer.png' style='display:block;border:0' border='0' class='CToWUd'>
							</td>
							<td width='11'>
								<img src='http://suzukigdl.com.mx/images/spacer.png' style='display:block;border:0' border='0' class='CToWUd'>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		");
		$respuesta2 = mail("webmaster@medigraf.com.mx", "Financiamiento Newsletter - Suzuki Guadalajara.", $mensaje2, $encabezados2);
		//$respuesta2 = mail("heriberto@medigraf.com.mx", "Financiamiento Newsletter - Suzuki Guadalajara.", $mensaje2, $encabezados2);
		if ( $respuesta2 == true) {
            echo 'El email se envió exitosamente -> 2 <br>';
        }
        else {
            echo 'Hubo un problema en el envío del mensaje -> 2 <br>';
        }
	} else {
		$suscripcion = "Desactivado";
	}
	//var_dump($_POST);
	// El mensaje
	$from = $mail;
	$encabezados = "From:". $nombre ."<". $from .">" . "\r\n" . "MIME-Version: 1.0" . "\r\n" . "Content-type: text/html; charset=UTF-8";
	$mensaje = stripslashes("
		<div>
			<table align='center' border='0' cellpadding='0' cellspacing='0'>
		 		<tbody>
		 			<tr>
		 				<td width='11'>
		 					<img src='http://suzukigdl.com.mx/images/spacer.png' style='display: block; border: 0' border='0'>
		 				</td>
		 				<td style='background-color: #fff; border: 1px solid #EBE9EA; border-bottom: 0px' width='576'>
			 				<table style='padding: 13px 17px 17px' border='0' cellpadding='0' cellspacing='0' width='576'>
			 					<tbody>
			 						<tr>
			 							<td height='52' width='102'>
			 								<a style='display: block; border: 0' href='http://suzukigdl.com.mx' target='_blank' rel='noreferrer'>
			 									<img style='display: block; border: 0' src='http://suzukigdl.com.mx/images/template/common/header/horizontal_logo.png' border='0'>
		 									</a>
			 							</td>
			 						</tr>
			 					</tbody>
			 				</table>
			 			</td>
						<td width='11'>
							<img src='http://suzukigdl.com.mx/images/spacer.png' style='display: block; border: 0' border='0'>
						</td>
					</tr>
					<tr>
						<td colspan='3' height='78' bgcolor='#CA272C' width='11'>
							<p style='color:#ffffff;font-family:Lato,Arial,sans-serif;font-size:24px;text-align:center;padding:0'>
								Solicitud de prueba de manejo
							</p>
						</td>
					</tr>
					<tr>
						<td height='11' valign='top' width='11'>
							<img style='display:block;border:0' src='http://suzukigdl.com.mx/images/shadow-left.png' border='0' class='CToWUd'>
						</td>
						<td rowspan='2' style='border:1px solid #ebe9ea;border-top:0' bgcolor='#ffffff'>
							<table style='padding:35px 60px 35px' border='0' cellpadding='0' cellspacing='0' width='600'>
								<tbody>
									<tr>
		 								<td height='20' valign='top'>
		 									<p style='color: #000000; font-family: Lato, Arial, sans-serif; font-size: 13px; text-align: left; padding: 0'></p>
		 								</td>
			 							<td height='20' valign='top'>
		 									<img src='http://suzukigdl.com.mx/images/template/common/header/$image_modelo' alt='Modelo'>
			 							</td>
		 							</tr>
	 								<tr>
	 									<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Modelo:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$modelo</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Precio:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$price</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Enganche:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$engagement</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Mensualidad:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$mensualidad</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Plazos:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$plazos</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Nombre(s):
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$nombre</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Apellido(s):
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$apellido</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Correo Electrónico:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$mail</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Concesionaria:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$concesionaria</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Telefono:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$telefono</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Desea realizar prueba de manejo:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$prueba</span><br>
										</td>
									</tr>
									<tr>
										<td height='20' valign='top' width='250'>
											<strong style='color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0'>
												Desea recibir noticias:
											</strong>
										</td>
										<td height='20' valign='top'>
											<span style='margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0'>$suscripcion</span>
	 									</td>
										<br>
										<br>
	 								</tr>
								</tbody>
							</table>
							<table style='padding:20px 0 20px 0;border-top:1px solid #ccc' align='center' border='0' cellpadding='0' cellspacing='0' width='543'>
								<tbody>
									<tr>
										<td height='14' width='15'>
	 										<img style='display: block; border: 0' src='http://suzukigdl.com.mx/images/footer-logo.png' border='0'>
	 									</td>
	 									<td width='125px'>
	 										<p style='color: #ffffff; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 700; text-align: right; padding: 0'>
	 											<a style='color: #0059a9' href='http://suzukigdl.com.mx/' target='_blank' rel='noreferrer'>suzukigdl.com.mx</a>
	 										</p>

	 									</td>
	 									<td>
	 										<p style='color: #000000; font-family: Lato, Arial, sans-serif; font-size: 11px; text-align: right; padding: 0'>
	 											&nbsp;© 2015 Suzuki Motor de México / Guadalajara
	 										</p>
	 									</td>
									</tr>
								</tbody>
							</table>
						</td>
						<td height='11' valign='top' width='11'>
							<img style='display:block;border:0' src='http://suzukigdl.com.mx/images/shadow-right.png' border='0' class='CToWUd'>
						</td>
					</tr>
					<tr>
						<td width='11'>
							<img src='http://suzukigdl.com.mx/images/spacer.png' style='display:block;border:0' border='0' class='CToWUd'>
						</td>
						<td width='11'>
							<img src='http://suzukigdl.com.mx/images/spacer.png' style='display:block;border:0' border='0' class='CToWUd'>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	");
	$respuesta = mail("mercadotecnia@suzuki-lm.com.mx", "Financiamiento - Solicitud de la pagina de internet Suzuki Guadalajara para cotizar.", $mensaje, $encabezados);
	//$respuesta = mail("cold_space@hotmail.com", "Financiamiento - Solicitud de la pagina de internet Suzuki Guadalajara para cotizar.", $mensaje, $encabezados);
	if ( $respuesta == true) {
        echo 'El email se envió exitosamente -> 1';
    }
    else {
        echo 'Hubo un problema en el envío del mensaje -> 1';
    }
    header ('Location: http://suzukigdl.com.mx/');
    exit();
?>
