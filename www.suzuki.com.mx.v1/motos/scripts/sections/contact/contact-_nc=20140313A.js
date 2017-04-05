$(document).ready(function(){
    var $contact_message    = $('#contact_message'),
        $contact_car_key    = $('#contact_car_key '),
        $contact_department = $('#contact_department'),
        $contact_delegation = $('#contact_delegation'),
        $contact_city       = $('#contact_city '),
        $contact_email      = $('#contact_email'),
        $contact_phone      = $('#contact_phone'),
        $contact_name       = $('#contact_name '),
        $contact_lastname   = $('#contact_lastname '),
        $contact_newsletter = $('#contact-newsletter');
    $contact_department.chosen();
    $contact_car_key.chosen();
    $contact_message.on('focusout', function(){
        $.validate_input( $contact_message );
    });
    $contact_car_key.on('change', function(){
        $.validate_input( $contact_car_key );
    });
    $contact_department.on('change', function(){
        $.validate_input( $contact_department );
    });
    $contact_delegation.on('focusout', function(){
        $.validate_input( $contact_delegation );
    });
    $contact_city.on('focusout', function(){
        $.validate_input( $contact_city );
    });
    $contact_email.on('focusout', function(){
        $.validate_input( $contact_email );
    });
    $contact_phone.on('focusout', function(){
        $.validate_input( $contact_phone );
    });
    $contact_name.on('focusout', function(){
        $.validate_input( $contact_name );
    });
    $contact_lastname.on('focusout', function(){
        $.validate_input( $contact_lastname );
    });

    var $btnSend = $('.enviar.button.blue'); 
    $btnSend.removeAttr('disabled');

    $.submit_contact_form = function(){
        var form_errors = 0;
        if( !$.validate_input( $contact_message ) ){
            form_errors++;
            $contact_message.focus();
        }
        if( !$.validate_input( $contact_car_key ) ){
            form_errors++;
            $contact_car_key.focus();
        }
        if( !$.validate_input( $contact_phone ) ){
            form_errors++;
            $contact_phone.focus();
        }
        if( !$.validate_input( $contact_department ) ){
            form_errors++;
            $contact_department.focus();
        }
        if( !$.validate_input( $contact_delegation ) ){
            form_errors++;
            $contact_delegation.focus();
        }
        if( !$.validate_input( $contact_city ) ){
            form_errors++;
            $contact_city.focus();
        }
        if( !$.validate_input( $contact_email ) ){
            form_errors++;
            $contact_email.focus();
        }
        if( !$.validate_input( $contact_name ) ){
            form_errors++;
            $contact_name.focus();
        }
        if( !$.validate_input( $contact_lastname ) ){
            form_errors++;
            $contact_lastname.focus();
        }

        if( form_errors == 0 ){
            $btnSend.css('cursor','auto').prop('disabled', true);
            $btnSend.parent('#loader_send_icon').css('display', 'block');

            var data = {
                car_key     : $contact_car_key.val(),
                city        : $contact_city.val(),
                delegation  : $contact_delegation.val(),
                department  : $contact_department.val(),
                email       : $contact_email.val(),
                message     : $contact_message.val(),
                name        : $contact_name.val(),
                phone       : $contact_phone.val(),
                lastname    : $contact_lastname.val(),
                newsletter  : $('#contact-newsletter:checked').length,
                source      : 'Contact'
            };
            var service_url = '/motos/services/request/contact';
            var btn_send = $('.enviar.button.blue');
            $.ajax({
                cache       : false,
                data        : data,
                dataType    : 'json',
                type        : 'post',
                url : service_url,
                beforeSend: function(){
                    btn_send.attr('disabled', true);
                },
                success     : function( data ){
                    console.log(data);
                    // btn_send.removeAttr('disabled');
                    if( data.status == 'ok' ){
                        var con_news = $('#contact-newsletter:checked').length;
                        var departamento = $contact_department.val();
                        var precio_actual = showMeTheMoney($contact_car_key.val());
                        var news_srt    = con_news ? 'Envio_con_Newsletter' : 'Envio_Sin_Newsletter';
                        var news_val    = con_news ? 100 : 0;
                        var car_val     = departamento === 'ventas' ? precio_actual * 0.03 : 0;
                        ga('send', 'event', 'Formulario', news_srt, $("#contact_car_key_chosen .chosen-single span").text() + "_" + departamento, news_val);
                        $('#form-wrapper').fadeOut( 300 , function(){
                            var correo = $("#contact_email").val();
                            $('#email-from').text(correo);
                            $('.form-thanks').fadeIn();
                        });
                    } else {
                        alert( data.message );
                    }
                },
                error: function(e){
                    console.log(e);
                    btn_send.removeAttr('disabled');
                    alert("No pudimos recibir su registro de contacto, por favor, inténtelo nuevamente");
                }
            });
        }
    };

    $('.chosen-search > input').focus(function(e){
        $(this).parent('.chosen-search').parent('.chosen-drop').parent('.chosen-container').children('.chosen-single').css('color', '#0051ad');
    }).blur(function(e){
        $(this).parent('.chosen-search').parent('.chosen-drop').parent('.chosen-container').children('.chosen-single').css('color', '#444');
    });

});
