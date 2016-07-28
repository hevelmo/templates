/*$(document).ready(function() {

	$('.form_contact_gdl').submit(function(e) {
		e.preventDefault();
		var data = $(this).serializeArray();
		$.ajax({
			url: 'contacto.php',
			type: 'post',
			data: data,
			beforeSend: function () {
				setTimeout(function() {
					$("#reply_contacto").hide("");
				}, 3000);
				$("#respuesta").html("<img src='images/template/ajax-loader.gif' style='width: 20px; height: 20px; position: relative; top: 527px; left: -118px;'>");
			},
			success: function () {
				setTimeout(function() {
					$('#reply_contacto').html("<aside class='replyOk'><div class='ico_Ok'></div><p class='msndialog'>Tus se han enviado</p></aside>");
					setTimeout(function() {
						window.location.href = '/';
					}, 3000);
				}, 2000);
			},
			error: function () {
				setTimeout(function() {
					$('#reply_contacto').html("<aside class='replyError'><div class='ico_Error'></div><p class='msndialog'>No se ha podido enviar el registro</p></aside>");
				}, 3000);
			}
		})
		.always(function() {
			setTimeout(function() {
				$("#respuesta").hide("");
			}, 3000);
		});
	});

});*/

(function(){
    $(".form_contact_gdl").click(function() {

        var nombre = $("#c_name").val();
			apellidos = $("#c_lastname").val();
			email = $("#c_email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
			departamento = $("#c_department").val();
			modelo = $("#c_model").val();
			mensaje = $("#c_message").val();

        if (nombre == "") {
            $("#c_name").focus();
            $("#c_lastname").focus();
            return false;
        }else if (apellidos == "") {
            $("#c_name").focus();
            $("#c_lastname").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $("#c_email").focus();
            return false;
        }else if(departamento == "" || modelo == ""){
        	$("#c_department").focus();
        	$("#c_model").focus();
        	return false;
        }else if(mensaje == ""){
            $("#c_message").focus();
            return false;
        }else{
            // Si todo paso, aqui ira la llamada AJAX
            $('.ajaxgif').removeClass('hide');
            var datos = 'name='+ name + '&lastname='+ lastname + '&email=' + email + '&departamento='+ departamento + '&car='+ car + '&message=' + message;
            $.ajax({
                type: "post",
                url: "contacto.php",
                data: datos,
                success: function() {
                    setTimeout(function() {
                        $('.ajaxgif').hide();
                    }, 2000);
                    setTimeout(function() {
                        $('.msg').text('Mensaje enviado!').addClass('msg_ok').animate({ 'right' : '680px' }, 300);
                        setTimeout(function() {
                            $('.msg').text('').removeClass('msg_ok').animate({ 'right' : '650px' }, 300);
                            $("#c_name").val("");
                            $("#c_lastname").val("");
                            $("#c_email").val("");
                            $("#c_department").val("");
                            $("#c_model").val("");
                            $("#c_message").val("");
                        }, 2500);
                    }, 3000);
                },
                error: function() {
                    setTimeout(function() {
                        $('.ajaxgif').hide();
                    }, 2000);
                    setTimeout(function() {
                        $('.msg').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '680px' }, 300);
                        setTimeout(function() {
                            $('.msg').text('').removeClass('msg_error').animate({ 'right' : '650px' }, 300);
                        }, 2500);
                    }, 3000);
                }
            });
            return false;
        }

    });
})();

