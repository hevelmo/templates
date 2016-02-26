"use strict";

$(function ()
{
    $.validator.setDefaults({
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function (error, element)
        {
            if (element.parent('.input-group').length)
            {
                error.insertAfter(element.parent());
            } else
            {
                error.insertAfter(element);
            }
        },
        highlight: function (element)
        {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element)
        {
            $(element).closest('.form-group').removeClass('has-error');
        }
    });

    $(".selectpicker").selectpicker();

    var validator = $("#raqform").validate({
        onfocusout: false,
        onkeydown: false,
        onclick: false,
        rules: {
            customer_firstname: {
                required: true,
                alpha: true
            },
            customer_lastname: {
                required: true,
                alpha: true
            },
            customer_email: {
                required: true,
                email: true
            },
            customer_phone: {
				required: true,
                digits: true,
				minlength: 10,
				maxlength: 10
            },

            vehicle_model: {
                required: true
            }
        },
        messages: {
            customer_firstname: {
                required: "Por favor proporciona tu nombre.",
                alpha: "Tu nombre puede constar sólo de caracteres alfanuméricos y espacios únicamente."
            },
            customer_lastname: {
                required: "Por favor proporciona tu apellido.",
                alpha: "Tus apellidos pueden constar sólo de caracteres alfanuméricos y espacios únicamente."
            },
            customer_email: {
                required: "Por favor proporciona un correo electrónico.",
                email: "Por favor proporciona un correo electrónico válido."
            },
            customer_phone: {
                required: "Por favor introduce tu número de teléfono.",
				digits: "Introduce sólo números en este campo",
                minlength: "El número de télefono debe ser a 10 digitos, por favor omite el 044,045 o 01 de ser necesario.",
                maxlength: "El número de télefono debe ser a 10 digitos, por favor omite el 044,045 o 01 de ser necesario."
            },

            vehicle_model: {
                required: "Por favor elige un vehículo."
            }
        },
        ignore: ".ignore"
    });

    $(".checkboxcontainer").on('click', function ()
    {
        if ($(".checkboximg").hasClass('unchecked'))
        {
            $("#checkboximg-desktop").attr('src', 'assets/base-ui/land-rover/img/checked.png').toggleClass('unchecked');
            $("#keepinformed").val('true');
        }
        else
        {
            $("#checkboximg-desktop").attr('src', 'assets/base-ui/land-rover/img/unchecked.png').toggleClass('unchecked');
            $("#keepinformed").val('false');
        }
    });


    $("#email-desktop,#email-desktoplabel").on('click', function ()
    {
        if ($("#email-desktop").hasClass('unchecked'))
        {
            $("#email-desktop").attr('src', "assets/base-ui/land-rover/img/radio-checked.png").toggleClass('unchecked');
            $("#phone-desktop").attr('src', "assets/base-ui/land-rover/img/radio-unchecked.png").toggleClass('unchecked');
            $("#customer_preferredcontact").val('email').trigger('change');
        }
        else
        {
            $("#email-desktop").attr('src', "assets/base-ui/land-rover/img/radio-unchecked.png").toggleClass('unchecked');
            $("#phone-desktop").attr('src', "assets/base-ui/land-rover/img/radio-checked.png").toggleClass('unchecked');
            $("#customer_preferredcontact").val('phone').trigger('change');
        }

    });

    $("#phone-desktop,#phone-desktoplabel").on('click', function ()
    {
        if ($("#phone-desktop").hasClass('unchecked'))
        {
            $("#email-desktop").attr('src', "assets/base-ui/land-rover/img/radio-unchecked.png").toggleClass('unchecked');
            $("#phone-desktop").attr('src', "assets/base-ui/land-rover/img/radio-checked.png").toggleClass('unchecked');
            $("#customer_preferredcontact").val('phone').trigger('change');
        }
        else
        {
            $("#email-desktop").attr('src', "base-ui/land-rover/img/radio-checked.png").toggleClass('unchecked');
            $("#phone-desktop").attr('src', "base-ui/land-rover/img/radio-unchecked.png").toggleClass('unchecked');
            $("#customer_preferredcontact").val('email').trigger('change');
        }

    });
});


