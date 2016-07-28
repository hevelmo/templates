<?php
	// Guardar los datos recibidos en variables:
	ob_start();
	$concesionaria = $_POST['step-2-concesionaria'];
	$modelo = $_POST['step-2-modelo'];
	$fecha = $_POST['step-2-date'];
	$nombre = ucwords($_POST['step-2-name']);
	$apellido = ucwords($_POST['step-2-lastname']);
	$mail = $_POST['step-2-email'];
	$telefono = $_POST['step-2-tel'];
	$noticias = $_POST['chk-newsletter'];

	$ruta = "http://suzukigdl.com.mx/images/template/common/header/";

	if ($modelo === "swift-sport") {
		$auto = "Swift Sport";
		$img_model = "suzuki_swift-sport.png";
	} else if ($modelo === "swift") {
		$auto = "Swift";
		$img_model = "suzuki_swift.png";
	} else if ($modelo === "sx4-crossover") {
		$auto = "Sx4 Crossover";
		$img_model = "suzuki_sx4-crossover.png";
	} else if ($modelo === "sx4-sedan") {
		$auto = "SX4 Sedán";
		$img_model = "suzuki_sx4-sedan.png";
	} else if ($modelo === "kizashi") {
		$auto = "kizashi";
		$img_model = "suzuki_kizashi.png";
	} else if ($modelo === "grand-vitara") {
		$auto = "Grand Vitara";
		$img_model = "suzuki_grand-vitara.png";
	} else if ($modelo === "s-cross") {
		$auto = "S-Cross";
		$img_model = "suzuki_s-cross.png";
	}
	if (isset($noticias) && $noticias == "on") {
		$suscripcion = "Activado";

		$mail_origin = $mail;

		//$to = 'hevelmo060683@gmial.com';
		$to = 'webmaster@medigraf.com.mx';
		$subject = "Agenda Newsletter - Suzuki Guadalajara.";

		$mensaje   .= '<html>
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
														Noticias y promociones
													</p>
												</td>
											</tr>
											<tr>
												<td height="11" valign="top" width="11">
													<img style="display:block;border:0" src="http://suzukigdl.com.mx/images/shadow-left.png" border="0" class="CToWUd">
												</td>
												<td rowspan="2" style="border:1px solid #ebe9ea;border-top:0" bgcolor="#ffffff">
													<table style="padding:35px 60px 35px" border="0" cellpadding="0" cellspacing="0" width="600">
														<tbody>
															<tr>
								 								<td height="0" valign="top">
								 									<p style="color: #000000; font-family: Lato, Arial, sans-serif; font-size: 13px; text-align: left; padding: 0"></p>
								 								</td>
								 							</tr>
															<tr>
																<td height="11" valign="top" width="250">
																	<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																		Nombre(s):
																	</strong>
																</td>
																<td height="11" valign="top">
																	<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; text-align: right; padding: 0">'.$nombre.' '.$apellido.'</span><br>
																</td>
															</tr>
															<tr>
																<td height="11" valign="top" width="250">
																	<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																		Correo Electrónico:
																	</strong>
																</td>
																<td height="11" valign="top">
																	<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; text-align: right; padding: 0">'.$mail.'</span><br>
																</td>
															</tr>
															<tr>
																<td height="11" valign="top" width="250">
																	<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																		Concesionaria:
																	</strong>
																</td>
																<td height="11" valign="top">
																	<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; text-align: right; padding: 0">'.$concesionaria.'</span><br>
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
		//$headers .= 'Bcc:  carbon@com.com' . "\r\n";

		$sent =  mail($to,$subject,$mensaje,$headers);


		if($sent) {
			echo 'Envio Correcto';
		} else {
			echo 'Fallo el Envio';
		}
	} else {
		$suscripcion = "Desactivado";
	}

	var_dump($img_model);
	$mail_origin = $mail;

	//$to = 'hevelmo060683@gmial.com';
	$to = 'mercadotecnia@suzuki-lm.com.mx';
	$subject = "Agenda Prueba de Manejo - Suzuki Guadalajara.";

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
													Agenda <br> Prueba de Manejo
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
																	Apellido(s):
																</strong>
															</td>
															<td height="20" valign="top">
																<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$apellido.'</span><br>
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
														<tr>
															<td height="20" valign="top" width="250">
																<strong style="color: #0059a9; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
																	Desea recibir noticias:
																</strong>
															</td>
															<td height="20" valign="top">
																<span style="margin-left: 15px; font-family: Lato, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$suscripcion.'</span>
						 									</td>
															<br>
															<br>
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
	//$headers .= 'Bcc:  carbon@com.com' . "\r\n";

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
