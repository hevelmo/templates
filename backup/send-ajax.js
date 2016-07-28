$(document).ready(function() {

	$('form').submit(function(e) {
		e.preventDefault();
		var data = $(this).serializeArray();
		$.ajax({
			url: 'test_drive2.php',
			type: 'post',
			data: data,
			beforeSend: function () {
				setTimeout(function() {
					$("#respuesta2").hide("");
				}, 3000);
				$("#respuesta").html("<img src='images/template/ajax-loader.gif' style='width: 20px; height: 20px;'>");
			},
			success: function () {
				setTimeout(function() {
					$('#respuesta2').html("<aside class='replyOk'><div class='ico_Ok'></div><p class='msndialog'>Tu prueba de manejo ha sido agendada.</p></aside>");
				}, 1000);
			},
			error: function () {
				setTimeout(function() {
					$('#respuesta2').html("<aside class='replyError'><div class='ico_Error'></div><p class='msndialog'>No se ha podido enviar el registro</p></aside>");
				}, 1000);
			}
		})
		.always(function() {
			setTimeout(function() {
				$("#respuesta").hide("");
			}, 3000);
		});
	});

});
