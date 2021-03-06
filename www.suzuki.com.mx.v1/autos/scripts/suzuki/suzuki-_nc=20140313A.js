var main_menu_available = false,
    preselected_click = null,
    menu_wait_section = null,
    header_section = '',
    menu_data = {
        models_menu: false,
        position: 'fixed'
    },
    html_sections_html = {},
    init_hash = window.location.hash,
    concessionaires_data = null,
    concessionaire_sorted = null,
    tdh_data = null,
    fuh_data = null,
    geo_options = null,
    HAS_GEOLOCATION = false,
    HAS_INSTANTDRIVE = false,
    geo_ll = null,
    geo_timeout = null,
    cars_prices = null,
    $body = $('body');

var cars_data = [{
    key: 'swift-sport',
    name: 'Swift Sport'
}, {
    key: 'swift',
    name: 'Swift'
}, {
    key: 'sx4-crossover',
    name: 'SX4 Crossover'
}, {
    key: 'sx4-sedan',
    name: 'SX4 Sedán'
}, {
    key: 'kizashi',
    name: 'Kizashi'
}, {
    key: 'grand-vitara',
    name: 'Grand Vitara'
}, {
    key: 's-cross',
    name: 'S-Cross'
}, {
    key: 'ciaz',
    name: 'Ciaz' 
}, {
    key: 'nueva-vitara',
    name: 'Nueva Vitara'
}];

var wonload = false,
    tdrive = false;

window.onload = function () {
    wonload = true;
    if (tdrive)
        alert("¡Listo! Carga completa \n__\nGracias por la espera. Ya puedes seleccionar la concesionaria de tu preferencia.");
}

var SuzukiWeb, $blockScreen, $alertMessage;
SuzukiWeb = {
    $disabled: null,
    errors_dictionary: null,
    init: function init() {
        $.ajax({
            'success': function success(json_data) {
                SuzukiWeb.errors_dictionary = json_data.errors_dictionary;
            },
            'url': '/autos/servicesv2/help'
        });
    },
    ErrorHandler: function ErrorHandler(error) {
        var html_msg = '',
            error_code, error_data;
        console.warn(error);
        if (error.responseJSON) {
            try {
                error_code = error.responseJSON.error;
                if (SuzukiWeb.errors_dictionary.hasOwnProperty(error_code)) {
                    error_data = {
                        'error_code': error_code,
                        'error_message': SuzukiWeb.errors_dictionary[error_code]
                    };
                    html_msg = Mustache.render('<p>Error código {{error_code}}:</p><p>{{error_message}}</p>', error_data);
                }
            } catch (catched) {

            }
            if (html_msg === '') {
                html_msg = '<p>Error no identificado.</p>';
            }

        } else if (error.status) {
            error_data = {
                'error_code': error.status,
                'error_message': error.responseText
            };
            //html_msg = html_msg = Mustache.render( '<p>Error de servidor {{error_code}}, más información:</p><div class="tech-details">{{error_message}}</div>', error_data );

        } else {
            html_msg = '<p>Error desconocido.</p>';
        }
        if (SuzukiWeb.$disabled) {
            SuzukiWeb.$disabled.prop({
                disabled: false
            });
            SuzukiWeb.$disabled = null;
        }
        SuzukiWeb.UnblockScreen();
        SuzukiWeb.AlertMessage({
            'title': 'Ocurrió un error',
            'message': html_msg
        });
    },
    BlockScreen: function BlockScreen() {
        if (!$blockScreen.hasClass('active')) {
            $blockScreen.addClass('active');
        }
    },
    UnblockScreen: function UnblockScreen() {
        if ($blockScreen.hasClass('active')) {
            $blockScreen.removeClass('active');
        }
    },
    AlertMessage: function AlertMessage(options) {
        if (!$alertMessage.hasClass('active')) {
            var opt = {
                'title': 'Alerta',
                'message': '<p>Ocurrió un error</p>',
                'type': 'error',
                'buttons': [{
                    'label': 'Cerrar',
                    //'class'     : 'red',
                    'callback': function callback(event) {
                        event.preventDefault();
                        SuzukiWeb.CloseAlert();
                    }
                }],
                'extra_buttons': []
            };
            opt = $.extend(true, opt, options);

            if (opt.extra_buttons.length > 0) {
                opt.buttons.concat(opt.extra_buttons);
                delete opt.extra_buttons;
            }
            var i0 = 0,
                i1 = opt.buttons.length,
                id,
                time = (new Date()).getTime();
            while (i0 < i1) {
                id = 'temp_' + time + i0;
                opt.buttons[i0].random_id = id;
                if (opt.buttons[i0].callback) {
                    $alertMessage.delegate('#' + id, 'click', opt.buttons[i0].callback);
                }
                i0++;
            }
            var body_mustache = '<h2 class="{{type}}">{{{title}}}</h2><div class="body">{{{message}}}</div>',
                buttons_mustache = '{{#buttons}}<a class="button {{class}}" id="{{random_id}}">{{label}}</a>{{/buttons}}',
                alert_mustache = '<div class="alert-wrapper "><div class="text-wrapper">{{{body_html}}}</div>{{#has_buttons}}<div class="buttons-wrapper">{{{buttons_html}}}</div>{{/has_buttons}}</div>',

                body_html = Mustache.render(body_mustache, opt),
                buttons_html = Mustache.render(buttons_mustache, opt),

                alert_vars = {
                    'body_html': body_html,
                    'buttons_html': buttons_html,
                    'has_buttons': opt.buttons.length > 0
                },
                alert_html = Mustache.render(alert_mustache, alert_vars);

            $alertMessage.html(alert_html);
            $alertMessage.addClass('active');
        }
    },
    CloseAlert: function CloseAlert() {
        if ($alertMessage.hasClass('active')) {
            $alertMessage.removeClass('active');
        }
    }
}


function instant_drive_available_time() {
    var time = new Date().getHours();
    return (time > 10 && time < 18);
}

function is_model_name(str) {
    var ii = cars_data.length;
    while (ii--) {
        if (cars_data[ii].key == str) {
            return true;
        }
    }
    return false;
}

function get_car_data(k) {
    var ii = cars_data.length;
    while (ii--) {
        if (cars_data[ii].key == k) {
            return cars_data[ii];
        }
    }
    return null;
}

function get_car_by_url() {
    var root = window.location.pathname.split('/');
   // console.log(root);
    return get_car_data(root[2]);
}

function get_car_by_hash() {
    var root = location.hash.slice(1);
    return get_car_data(root[1]);
}

function get_concessionaire_data_by_id(id) {
    var ii = concessionaires_data.length,
        concessionaire;
    id = parseInt(id, 10);
    while (ii--) {
        concessionaire = concessionaires_data[ii];
        if (parseInt(concessionaire.id, 10) === id) {
            return concessionaire;
        }
    }
    return false;
}

function get_concessionaire_data_by_key(key) {
    var ii = concessionaires_data.length,
        concessionaire;
    while (ii--) {
        concessionaire = concessionaires_data[ii];
        if (concessionaire.key === key) {

            return concessionaire;
        }
    }
    return false;
}

function concessionaires_order_nearest(latitude, longitude) {
    var ii = concessionaires_data.length,
        concessionaire, dx, dy;
    while (ii--) {
        concessionaire = concessionaires_data[ii];
        dx = parseFloat(concessionaire.lat) - latitude;
        dy = parseFloat(concessionaire.lon) - longitude;
        concessionaire.distance = Math.sqrt(dx * dx + dy * dy);
    }
    concessionaires_data.sort(function (a, b) {
        return a.distance - b.distance;
    });
}

function geo_select_concessionaire_callback() {
    if (geo_ll != null) {
        if (concessionaires_data) {
            if (window.location.pathname == '/concesionarias') {
                concessionaire_sorted = true;
                concessionaires_order_nearest(geo_ll.latitude, geo_ll.longitude);
                $.open_concessionaire_by_key(concessionaires_data[0].key, true);
            }
        }
    }
}

function get_location() {
    if (HAS_GEOLOCATION) {
        if (geo_ll != null) {
            return geo_ll;
        }
    }
    return null;
}

function funding_core(total_pay, months) {
    var atc = months < 54 ? .1560 : .1676;
    var atc_month = atc / 12;
    var form_partial_1 = 1 - (Math.pow((1 + atc_month), -months));
    var form_partial_2 = form_partial_1 / atc_month;
    var form_partial_3 = total_pay / form_partial_2;
    return form_partial_3.toFixed(2);
}

var validations_regexp = {
    address: new RegExp(/^[a-zá-úüñ,#0-9. -]{2,}$/i),
    date: new RegExp(/^(\d{4})-(\d{1,2})-(\d{1,2})$/),
    email: new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    name: new RegExp(/^[a-zá-úüñ. ]{2,}$/i),
    phone: new RegExp(/^[0-9\s\-]{7,13}$/)
};

var validation_messages = {
    date: 'Debe ser aaaa-mm-dd',
    date_tomorrow: 'Sólo a partir de mañana',
    email: 'Verifica tu correo',
    general: 'Campo no válido',
    not_config: 'Tipo desconocido',
    not_null: 'No puede ser nulo',
    phone: 'Verifica que tu número sea de 10 dígitos',
    required: 'Campo requerido'
};
/**
 * Compares a value with a rule and return a object
 * @param {String}  value           Value to compare.
 * @param {Array}   rules           Rules to validate.
 * @param {String}  required        Makes .
 * @param {String}  custom_message  Replaces output message just when is not valid.
 * @return {Object} Returns an object with: "valid" boolean  and "message": string
 */

function validate(value, rules, required, custom_message) {
    var r = {
            valid: false,
            message: ''
        },
        null_value = value == undefined || value === '',
        ii, rule;
    required = required === true ? true : false;
    if (required) {
        if (null_value) {
            r.message = validation_messages.required;
        }
    } else {
        if (null_value) {
            r.valid = true;
        }
    }
    if (!r.valid && r.message === '') {
        ii = rules.length;
        while (ii--) {
            rule = rules[ii];
            switch (rule) {
                case 'email':
                    if (!validations_regexp.email.test(value)) {
                        r.message = validation_messages.email;
                    }
                    break;
                case 'name':
                    if (!validations_regexp.name.exec(value)) {
                        r.message = validation_messages.general;
                    }
                    break;
                case 'address':
                    if (!validations_regexp.address.exec(value)) {
                        r.message = validation_messages.general;
                    }
                    break;
                case 'car_key':
                    if (!is_model_name(value)) {
                        r.message = validation_messages.general;
                    }
                    break;
                case 'date':
                    if (!validations_regexp.date.exec(value)) {
                        r.message = validation_messages.date;
                    }
                    break;
                case 'phone':
                    if (!validations_regexp.phone.exec(value) || value.length < 10 || value.length > 10) {
                        r.message = validation_messages.phone;
                    }
                    break;
                default:
                    r.message = validations_regexp.not_config;
                    break;
            }
        }
        if (r.message === '') {
            r.valid = true;
        }
    }
    if (custom_message && !r.valid) {
        r.message = custom_message;
    }
    return r;
}

function enviar_newsletter() {
    var target_offset = $("#newsletter-join-form").position();
    var target_top = target_offset.top;
    $('html, body').stop().animate({
        scrollTop: target_top
    }, 1000);
    $("#newsletter_name").focus();
}

function push_ficha(modelo) {
    alert(modelo);
    ga('send', 'event', 'Material de apoyo', 'Descarga', 'Ficha_' + modelo);
}

function push_social(red) {
    ga('send', 'event', 'Social', 'Liga_externa', 'Pestaña_' + red);
}

function fb_pixel(id, val) {
    var fb_param = {
        pixel_id: id,
        value: val,
        currency: 'USD'
    };
    var fpw = document.createElement('script');
    fpw.async = true;
    fpw.src = '//connect.facebook.net/en_US/fp.js';
    var ref = document.getElementsByTagName('script')[0];
    ref.parentNode.insertBefore(fpw, ref);
    var image = new Image(1, 1);
    image.src = "https://www.facebook.com/offsite_event.php?id=" + fb_param.pixel_id + "&amp;value=" + fb_param.value + "&amp;currency=" + fb_param.currency;

}

function showMeTheMoney(model_key) {
    var value = 0;
    switch (model_key) {
        case 'swift-sport':
            value = 259000.00;
            break;
        case 'swift':
            value = 169000.00;
            break;
        case 'sx4-crossover':
            value = 238000.00;
            break;
        case 'sx4-sedan':
            value = 219000.00;
            break;
        case 'kizashi':
            value = 319500.00;
            break;
        case 'grand-vitara':
            value = 322000.00;
            break;
        case 's-cross':
            value = 249900.00;
            break;
        case 'ciaz':
            value = 194900.00;
            break;
        default:
            break;
    }
    return value;
}
var analytics_test_drive;


//Detetar si es IE10
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.appVersion.match(/MSIE ([\d.]+)/));
if ($('html').attr('data-useragent') == 'MSIE 10.0,10.0') {
    $("body").addClass('IE10');
}


$(document).ready(function () {
    var $header_panel = $('#header-panel'),
        $expanded_links = $('a.expand-header'),
        $header_wrapper = $('.header-wrapper'),
        $header_zone = $('#header-zone');

    $blockScreen = $('#block_screen');
    $alertMessage = $('#alert_message');
    SuzukiWeb.init();

    analytics_test_drive = function (title, value, label, llave) {
        try {
            // value = parseInt(value, 10);
            if (!value) {
                value = 0;
            } else {
                value = parseInt(value * 0.066);
            }

            ga('send', 'event', 'Prueba de Manejo', 'Confirmacion', title, "" + value + "");

            if (title.indexOf('Header') >= 0) {
                ga('send', 'event', 'Prueba de Manejo', 'Confirmacion_Header', label, "" + value + "");
                console.log('header');
            } else {
                ga('send', 'event', 'Prueba de Manejo', 'Confirmacion_Modelos', label, "" + value + "");
                console.log('model');
            }

        } catch (e) {
            console.log('Ocurrió un error con el evento de GA');
            console.log(e);
        }
        // fb_pixel('6016795700971', '0.01');

        /*Facebook Conversion Code for Prueba de manejo*/
        (function () {
            var _fbq = window._fbq || (window._fbq = []);
            if (!_fbq.loaded) {
                var fbds = document.createElement('script');
                fbds.async = true;
                fbds.src = '//connect.facebook.net/en_US/fbds.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(fbds, s);
                _fbq.loaded = true;
            }
        })();
        window._fbq = window._fbq || [];
        if(llave == "ciaz"){
            window._fbq.push(['track', '6035846898952', {'value': '0.01', 'currency': 'MXN'}]);
        } else {
            window._fbq.push(['track', '6018816845952', {'value': '5', 'currency': 'MXN'}]);
        }
        /*<noscript><img height="1" width="1" alt="" style="display:none" src="www.facebook.com/tr…" /></noscript>*/
    }


    //Validates an input with data-validation-data attribute and displays or hide bubble meesage
    $.validate_input = function ($input) {
        if ($input.is('input') || $input.is('textarea')) {
            var val_data = $input.data('validation-data').split('|'),
                required = val_data.indexOf('required');
            if (required >= 0) {
                val_data.splice(required, 1);
            }
            var value = $input.val(),
                validation = validate(value, val_data, (required >= 0));
            $.error_bubble($input, !validation.valid, validation.message);
            return validation.valid;
        } else {
            var is_valid = !($input.val() === null);
            $.error_bubble($input, !is_valid, validation_messages.required);
            return is_valid;
        }
    };
    // Show or hide menu patch when scrolls
    $.adjust_menu_patch = function () {
        $('.menu-patch:hidden').show();
        if (!menu_data.models_menu) {
            if (header_section != '' && menu_data.position == 'absolute') {
                var pane_h = $header_panel.height();
                if ((get_scroll_top() - pane_h) > 0) {
                    $('.menu-patch').hide();
                }
            }
        }
    };
    //Sets menu position
    $.$header_panel_directives = function () {
        var min_h = $header_panel.height() + 100;
        var win_h = $(window).height();
        if (min_h < win_h) {
            menu_data.position = 'fixed';
        } else {
            menu_data.position = 'absolute';
            menu_wait_section = header_section;
            if (!IS_MOBILE) {
                $('html,body').stop().animate({
                    scrollTop: 0
                }, 300, 'easeOutSine', function () {
                    if (menu_wait_section) {
                        if (header_section == '') {
                            $.openPanel(menu_wait_section);
                            menu_wait_section = false;
                        }

                    }

                });
            }
        }
        $header_panel.css({
            position: menu_data.position,
            top: '0'
        });
        $(window).trigger('scroll').scroll(function () {
            $.adjust_menu_patch();
        });
    };
    $(window).resize(function () {
        $.$header_panel_directives();
    });
    //Add action to all header's close butons
    $header_panel.delegate('.close-menu-box a', 'click', function (e) {
        e.preventDefault();
        $.openPanel('');
    });

    //Adjust content to window height
    if ($('.window-adaptable').length > 0) {
        $.adjust_auto_height = function () {
            var min_h, hh, h_w;
            if (get_car_by_url() == null) {
                h_w = $(window).height() - 95;
            } else {
                h_w = $(window).height() - 50;
            }
            $('.window-adaptable').each(function () {
                try {
                    min_h = parseInt($(this).attr("data-min-height"));
                } catch (e) {
                    min_h = 600;
                }
                hh = min_h;
                if (hh >= min_h) {
                    if (hh < h_w) {
                        hh = h_w;
                    }
                } else {
                    hh = min_h;
                }
                $(this).height(hh);
            });
        };
        $(window).resize(function () {
            $.adjust_auto_height();
        });
        $(document).resize(function () {
            $.adjust_auto_height();
        });
        $.adjust_auto_height();
    }
    //animates all transitions (needs an "a" element whit "name attrubute")
    $.scroll_to = function (target_name) {
        var target, dest, header_height = $('#header-wrapper').height();
        if (target_name != 'top') {
            target = $('a[name="' + target_name + '"]');
            dest = target.offset().top - header_height - 35;
            if (IS_MOBILE) {
                dest += 75;
            }
        } else {
            dest = 0;
        }
        $('html,body').stop().animate({
            scrollTop: dest
        }, 800, 'easeOutSine');
    };
    //Auto asigns scroll_to functions to a.scroll-in-site elements
    $('a.scroll-in-site').on('click', function (e) {
        e.preventDefault();
        var target_name = $(this).attr("href").replace(/^#/, '');
        $.scroll_to(target_name);
    });

    //Open's header magic
    //Available section = 'test-drive' | 'models' | 'financing' | 'owners' | 'before-buy' | 'quote'

    var bar_offset = {
        marginLeft: 0,
        width: 0
    };
    $.openPanel = function (section, options) {

        //        Esconder pleca azul de geolocalización
        if ($("#geolocation-fixed")) {
            if ($("#geolocation-fixed").hasClass("active")) {
                $("#geolocation-fixed").slideUp(100);
            }
        }

        $('html, body').animate({
            scrollTop: '0px'
        }, 400);
        if ($('#geolocation-fixed.active').length > 0) {
            clearTimeout(geo_timeout);
            $('#geolocation-fixed').removeClass('active');
        }
        if (!main_menu_available) {
            if (section != 'loading') {
                preselected_click = [section, options];
                $.openPanel('loading');
                return false;
            }
        }
        bar_offset = {
            marginLeft: 0,
            width: 0
        };
        var header_button = null,
            height = 0;

        switch (section) {
            case 'test-drive':
                header_button = $('#header-test-drive-button');
                height = 700;
                bar_offset = {
                    marginLeft: 0,
                    width: 0
                };
                break;
            case 'models':
                header_button = $('#header-models-button');
                height = 325;
                bar_offset = {
                    marginLeft: -331,
                    width: 143
                };
                break;
            case 'financing':
                header_button = $('#header-financing-button');
                height = 555;
                bar_offset = {
                    marginLeft: -29,
                    width: 132
                };
                break;
            case 'owners':
                header_button = $('#header-owners-button');
                height = 300;
                bar_offset = {

                    marginLeft: 103,
                    width: 150
                };
                break;
            case 'before-buy':
                header_button = $('#header-before-buy-button');
                height = 300;
                bar_offset = {
                    marginLeft: 253,
                    width: 226
                };
                break;
            case 'quote':
                header_button = $('#quote-button');
                height = 300;
                bar_offset = {
                    marginLeft: -29,
                    width: 131
                };
                break;
            case 'loading':
                header_button = $('#loading');
                height = 150;
                bar_offset = {
                    marginLeft: 0,
                    width: 0
                };
                break;
            default:
                header_section = '';
                section = '';
                break;
        }

        $expanded_links.removeClass('active');
        $header_wrapper.removeClass('shadow');
        if (header_section != section) {
            $header_wrapper.removeClass('shadow');
            $header_zone.removeClass('opened');
            header_button.addClass('active');
            header_section = section;

            $header_panel.stop().hide().fadeIn();
            $.$header_panel_directives();

            var div_html, data, $header_sections, ii;
            data = {
                html: $.get_header_html(section)
            };
            div_html = Mustache.render(header_section_wrapper_template, data);

            $('#header-sections-wrapper').append(div_html);
            $('.menu-patch').css(bar_offset).stop().hide().delay(300).fadeIn();
            $header_sections = $('#header-sections-wrapper .header-section')
            ii = $header_sections.length;
            ii--;
            $header_sections.each(function (i) {
                if (i != ii) {
                    $(this).remove();
                } else {
                    $(this).hide().delay(200).fadeIn(300);
                }
            });
            $.start_header_listeners(section, options);
        } else {
            header_section = '';
            height = 0;
            $header_panel.stop().animate({
                height: 'auto'
            }, 200, function () {
                $('#header-sections-wrapper .header-section').remove();
                $header_panel.hide();
            });
            $('.menu-patch').stop().show().fadeOut(function () {
                $(this).width(0);
            });
            setTimeout(function () {
                $(window).trigger('scroll')
            }, 500);
            //Mostrar la pleca azul de geolocalización
            if ($("#geolocation-fixed")) {
                if ($("#geolocation-fixed").hasClass("active")) {
                    $("#geolocation-fixed").stop().slideDown(300);
                }
            }
        }
        $('.header-links-list').delegate('a', 'click', function () {
            $.openPanel('');
            var href_link_attr = $(this).attr("href").split("#")[1];
            var href_now = $(location).attr('href').split("#")[0];
            var href_link = "http://" + $(location).attr('host') + $(this).attr("href").split("#")[0];
            if (href_now == href_link) {
                if (href_link_attr == "ordinaria" || href_link_attr == "extendida") {
                    if (href_link_attr == "ordinaria") {
                        $('.main-buttons a').eq(0).trigger("click");
                    } else {
                        $('.main-buttons a').eq(1).trigger("click");
                    }
                }
                $.scroll_to(href_link_attr);
            }
        });
    };


    $("#header-panel").resize(function () {
        var _this = $(this);
        $('#header-spacer').stop().animate({
            height: _this.height()
        }, 300);
    });

    $('a.expand-header').on('click', function (e) {
        e.preventDefault();
        var section = $(this).attr('href').split('#').join('');
        var params = null;
        switch (section) {
            case 'prueba-de-manejo':
                section = 'test-drive';
                break;
            case 'modelos':
                section = 'models';
                break;
            case 'financiamiento':
                section = 'financing';
                break;
            case 'propietarios':
                section = 'owners';
                break;
            case 'antes-de-comprar':
                section = 'before-buy';
                break;
            case 'cotizar':
                section = 'quote';
                break;

            default:
                return;
                break;
        }
        if (section == 'test-drive' || section == 'financing') {
            var data = get_car_by_url();
            if (data) {
                params = data;
            } else {
                params = get_car_by_hash();
            }
        }
        $.openPanel(section, params);
    });
    $body.prepend(patch_bar);

    // Open / close the mobile menu
    if (IS_MOBILE) {
        $("#header-mobile i").click(function () {
            $(this).toggleClass("header-mobile-icon-active");
            openCloseMenu();
        });

        if (window.addEventListener) {
            window.addEventListener('orientationchange', checkMenu, false);
        } else if (window.attachEvent) {
            window.attachEvent('orientationchange', checkMenu);
        }


        //        if (!window.addEventListener) {
        //            window.attachEvent("orientationchange", function() {
        //                checkMenu();
        //            }, false);
        //        }
        //        else {
        //            window.addEventListener("orientationchange", function() {
        //                checkMenu();
        //            }, false);
        //        }


        $("#mobile-menu a").click(function (e) {
            var idx = $(this).parent().index();
            var link = "";
            switch (idx) {
                case 1:
                    link = "#header-models-button";
                    break;
                case 3:
                    link = "#quote-button";
                    break;
                case 4:
                    link = "#header-owners-button";
                    break;
                case 5:
                    link = "#header-before-buy-button";
                    break;
                case 6:
                    link = "#header-test-drive-button";
                    break;
            }
            openCloseMenu();
            $(link).trigger("click");
            $("#header-mobile i").removeClass("header-mobile-icon-active");

        });

        $('body').on('click', '#fire-test', function (e) {
            e.preventDefault();
            openCloseMenu();
            var data = get_car_by_url();
            if (data) {
                params = data;
            } else {
                params = get_car_by_hash();
            }

            $.openPanel('test-drive', data);
            openCloseMenu();
        });

        $("#footer-content .row-1 .footer-column").click(function () {
            $(".footer-column .links").slideUp();
            $(".footer-column i").text("+");
            if ($(this).find(".links").css("display") != "block") {
                $(this).find(".links").slideDown();
                $(this).find("i").text("-");
            }
        });

        function openCloseMenu() {
            $("body").toggleClass("open-body");
            $("#mobile-menu").toggleClass("open-mobile-menu");
            checkMenu();
        }

        function checkMenu() {
            if ($("#mobile-menu").hasClass("open-mobile-menu") && window.orientation == 0) {
                $("body").css("overflow", "hidden");
            } else {
                $("body").css("overflow", "visible");
            }
        }
    }

    //Returns HTML for each header's section and adds a Close button if is required
    $.get_header_html = function (section) {
        var html = '';
        switch (section) {
            case 'test-drive':
                html = header_close_button + html_sections_html.test_drive;
                break;
            case 'models':
                html = header_close_button + html_sections_html.models;
                break;
            case 'financing':
                html = header_close_button + html_sections_html.financing;
                break;
            case 'owners':
                html = (IS_MOBILE) ? header_close_button + html_sections_html.owners : html_sections_html.owners;
                break;
            case 'before-buy':
                html = (IS_MOBILE) ? header_close_button + html_sections_html.before_buy : html_sections_html.before_buy;
                break;
            case 'quote':
                html = header_close_button + html_sections_html.quote;

                break;
            case 'loading':
                html = header_loading_screen;
                break;
            default:
                break;
        }
        return html;
    };

    //Add change tabs controls for test drive and founding
    var $panelTabsNav = null,
        $panelTabs = null,
        current_tab = -1;

    function slide_tabs(ii, disable) {
        ii = parseInt(ii) - 1;
        if (ii != current_tab) {
            current_tab = ii;
            $panelTabsNav.removeClass('active');
            $panelTabsNav.each(function (i) {
                var $item = $(this);
                if (i < ii) {
                    $item.removeClass('disabled');
                }
                if (disable) {
                    if (i > ii) {
                        $item.addClass('disabled');
                    }
                }

            });
            $panelTabsNav.eq(ii).removeClass('disabled').addClass('active');
            $panelTabs.removeClass('active');
            $panelTabs.eq(ii).addClass('active').css({
                opacity: 0
            }).animate({
                opacity: 1
            });
        }
    }

    //Service to add test drives
    $.test_drive_form = function (data, callback) {
        //car_key         : ''
        //concessionaire  : ''
        //date            : ''
        //email           : ''
        //name            : ''
        //lastname        : ''
        //newsletter      : ''
        //phone           : ''
        //source          : ''
        var service_url = 'http://api-suzuki.ktcagency.com/testdrive';
        $("#header_send_td").attr('disabled', 'disabled').css({
            opacity: 0.3
        });
        $("#models_send_td").attr('disabled', 'disabled');

        // For facebook
        // Definition is in the website (head) template
        //
        /*window._fbq = window._fbq || [];
         window._fbq.push(['track', '6018816845952', {
         'value': '0.00',
         'currency': 'MXN'
         }]);
         twttr.conversion.trackPid('l5h3p');*/

        $.ajax({
            cache: false,
            data: data,
            dataType: 'json',
            type: 'post',
            success: function (data) {
                if (data.status == 'OK') {
                    if (callback) {
                        callback();
                    }
                } else {
                    alert("Ha ocurrido un error, por favor, inténtelo nuevamente.");
                }
                $("#header_send_td").removeAttr('disabled').css({
                    opacity: 1
                });
                $("#models_send_td").removeAttr('disabled');
            },
            error: function (x, t, m) {
                console.log(x);
                alert("Ha ocurrido un error, por favor, inténtelo nuevamente.");
                $("#header_send_td").removeAttr('disabled').css({
                    opacity: 1
                });
                $("#models_send_td").removeAttr('disabled');
            },
            url: service_url
        });
    }
    $.test_drive_header_form = function () {
        if (tdh_data) {
            var form_errors = 0;
            if (!$.validate_input($('#htd_tel'))) {
                form_errors++;
                $('#htd_tel').focus();
            }
            if (!$.validate_input($('#htd_email'))) {
                form_errors++;
                $('#htd_email').focus();
            }
            if (!$.validate_input($('#htd_name'))) {
                form_errors++;
                $('#htd_name').focus();
            }
            if (!$.validate_input($('#htd_lastname'))) {
                form_errors++;
                $('#htd_lastname').focus();
            }
            if (!$.validate_input($('#htd_date'))) {
                form_errors++;
                $('#htd_date').focus();
            }
            if (form_errors == 0) {
                var data = {
                    car_key: tdh_data.key,
                    concessionaire: tdh_data.concessionaire_id,
                    date: $('#htd_date').val(),
                    email: $('#htd_email').val(),
                    name: $('#htd_name').val(),
                    lastname: $('#htd_lastname').val(),
                    newsletter: $('#chk-newsletter:checked').length,
                    phone: $('#htd_tel').val(),
                    source: 'Header menu'
                };

                $.test_drive_form(data, function () {

                    var precio_actual = showMeTheMoney(tdh_data.key);

                    analytics_test_drive('Header_' + tdh_data.key, precio_actual, data.car_key + '_' + tdh_data.concessionaire_name, data.car_key);

                    $('#test_drive_form').hide();
                    $('#test_drive_resume').fadeIn();
                    $('html, body').animate({
                        scrollTop: '0px'
                    }, 400);
                });
                $('#tdr_email').html(data.email);
                $('#tdr_concessionaire').attr({
                    href: '/autos/concesionarias/suzuki-' + tdh_data.concessionaire_key
                }).text(tdh_data.concessionaire_name);
                $('#tdd_date').html();
                $('#tdd_name').html();
                $('#tdd_email').html();
                $('#tdd_tel').html();
                $('#').html();
                $('li.td-nav-tabs').addClass('disabled');
                $('#tdr_email').html(data.email);

            }
        }
    }

    //Adds javascript actions to header section
    $.start_header_listeners = function (section, options) {
        if (options === undefined || options === null) {
            options = {};
        }
        switch (section) {
            case 'test-drive':
                var default_data = {
                    concessionaire_id: 0,
                    key: ''
                };
                tdh_data = $.extend({}, default_data, options);

                //Adds concessionaires items
            function td_show_concessionaires(elements) {
                var i0 = 0,
                    i1 = elements.length;
                var html = '';
                if (i1 > 0) {
                    while (i0 < i1) {
                        html += Mustache.render(concessionaires_li_element, elements[i0]);
                        i0++;
                    }
                    html = '<ul>' + html + '</ul>';

                } else {
                    html = concessionaires_no_found;
                }
                $('#input_concessionaire .input').hide();
                $('#concessionaires_list .list').html(html);
                $('#concessionaires_list').hide().fadeIn();


            }

            function goto_step(step, disable) {
                var ii, $divinput;
                slide_tabs(step, disable);
                if (step == 2) {
                    if (tdh_data.concessionaire_id != 0) {
                        ii = concessionaires_data.length;
                        while (ii--) {
                            if (concessionaires_data[ii].id == tdh_data.concessionaire_id) {
                                td_show_concessionaires([concessionaires_data[ii]]);
                                break;
                            }
                        }
                        $('#input_concessionaire .input').hide();
                    } else {
                        $('#input_concessionaire .input').hide().fadeIn();
                        $('#concessionaires_search').val('').focus();
                    }

                }
            }

            function td_select_concessionaire(id) {
                var ii, html, concessionaire;
                tdh_data.concessionaire_id = id;
                ii = concessionaires_data.length;
                while (ii--) {
                    concessionaire = concessionaires_data[ii];
                    if (concessionaire.id == tdh_data.concessionaire_id) {
                        tdh_data.concessionaire_key = concessionaire.key;
                        tdh_data.concessionaire_name = concessionaire.name;
                        html = '<ul>' + Mustache.render(concessionaires_li_element, concessionaire) + '</ul>';
                        $('#form_concessionaire_selected .list').html(html);
                        break;
                    }
                }
            }

                //Tabs
                $panelTabsNav = $('li.td-nav-tabs');
                $panelTabs = $('.td-tab');

                $('li.td-nav-tabs a').on('click', function (e) {
                    e.preventDefault();
                    if (!$(this).parent().is('.disabled')) {
                        goto_step($(this).data('number'))
                    }
                });

                //Select car at first screen or auto select it
                $.test_drive_select_car = function (k) {
                    var car_data = get_car_data(k),
                        $icons = $('#car_select_preview .car_thumb_160 .car, #td_concessionaire_car .car_thumb_60 .car, #td_form_car .car_thumb_60 .car, #td_final_car .car_thumb_60 .car'),
                        $car_texts = $('#car_select_name h3, #td_concessionaire_car h3, #td_form_car h3, #td_final_car h3');


                    tdh_data.key = k;
                    tdh_data.name = car_data.name;
                    $car_texts.text(tdh_data.name);

                    $icons.removeClass();
                    $icons.addClass('car ' + tdh_data.key);

                    $('#car_select_list li').removeClass('active');
                    $('#car_select_list li.' + k).addClass('active');

                };
                current_tab = -1;

                $('#car_select_list').delegate('a', 'click', function (e) {
                    e.preventDefault();
                    $.test_drive_select_car($(this).data('key'));
                    if (IS_MOBILE) {
                        $("#car_select_list").hide();
                        $("#car_select_name, #car_select_preview").fadeIn();
                    }
                });
                if (tdh_data.key == '') {
                    $('#car_select_list a').eq(0).trigger('click');
                    if (IS_MOBILE) {
                        $("#car_select_name, #car_select_preview").hide();
                        $("#car_select_list").fadeIn();
                    }
                    goto_step(1, true);
                } else {
                    $.test_drive_select_car(tdh_data.key);
                    goto_step(2, true);
                }
                $("#change-car-test").on('click', function (e) {
                    e.preventDefault();
                    $("#car_select_name, #car_select_preview").hide();
                    $("#car_select_list").fadeIn();
                });
                //Just go to other step when button was clicked
                $('a.test-drive-goto').on('click', function (e) {
                    e.preventDefault();
                    if (IS_MOBILE) {
                        if ($(this).data('step') == "1") {
                            $("#car_select_name, #car_select_preview").hide();
                            $("#car_select_list").fadeIn();
                        }
                    }
                    goto_step($(this).data('step'));
                });

                $('#concessionaires_list').delegate('.td-concessionaire-button', 'click', function (e) {
                    e.preventDefault();
                    ga('send', 'event', 'Prueba de Manejo', 'Paso_3', 'Header_Fecha_Datos');
                    td_select_concessionaire($(this).data('id'));
                    goto_step(3);
                });
                $('#resetConcessionaire').on('click', function (e) {
                    e.preventDefault();
                    $('#concessionaires_list .list').html('');
                    $('#input_concessionaire .input').hide().fadeIn();
                    $('#concessionaires_search').val('').focus();
                });
                $('#tdr_end').on('click', function (e) {
                    e.preventDefault();
                    $.openPanel('');
                });
                $('#htd_date').datepicker({
                    minDate: '+1d',
                    maxDate: '+1m',
                    minLength: 0,
                    delay: 0,
                    dateFormat: 'yy-mm-dd'
                });
                var date_timeout;
                $('#htd_date').on('focusout', function () {
                    clearTimeout(date_timeout);
                    date_timeout = setTimeout(function () {
                        var $input = $('#htd_date');
                        $.validate_input($input);
                    }, 250);
                });
                $('#htd_name').on('focusout', function () {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#htd_lastname').on('focusout', function () {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#htd_email').on('focusout', function () {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#htd_tel').on('focusout', function () {
                    var $input = $(this);
                    $.validate_input($input);
                });

                var optionsAutocomplete = {
                    types: ['geocode'],
                    componentRestrictions: {
                        country: "MX"
                    }
                };
                var autocomplete = new google.maps.places.Autocomplete(document.getElementById('concessionaires_search'), optionsAutocomplete);

                // if(!autocomplete.types){
                //     console.log('autocomplete no loaded');
                //     alert('Lo siento, espere a que se carguen las concesionarias.');
                // }

                if (!wonload) {
                    alert('Espera un poco, un poquito más… \n__\nEspera a que la página cargue completamente todas nuestras concesionarias para que puedas seleccionar la tuya.');
                    tdrive = true;
                }

                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    var gp = autocomplete.getPlace(),
                        elements = [];

                    if ((gp).geometry) {
                        //                        var l = ( gp ).geometry.location;
                        var location = (gp).geometry.location;
                        var lat = location.lat();
                        var lng = location.lng();
                        //                        var ll = { latitude: l.ob, longitude: l.pb };
                        //                        var ll = { latitude: l.nb, longitude: l.ob };

                        var element, i0, i1;
                        concessionaires_order_nearest(lat, lng);
                        i0 = 0;
                        i1 = concessionaires_data.length;
                        while (i0 < i1) {
                            element = concessionaires_data[i0];
                            if (elements.length < 5) {
                                console.log(element.distance);
                                if (element.distance < 0.1) {
                                    elements.push(element);
                                } else {
                                    break;
                                }
                            } else {
                                break;
                            }
                            i0++;
                        }
                    }
                    td_show_concessionaires(elements);
                });
                break;
            case 'financing':
                var car_d = null,
                    funding_data = {
                        engagement: 0,
                        months: 0,
                        price: 0
                    };
                var conce_d = null;

                var default_data = {
                    car_version: 0,
                    key: ''

                };

                fuh_data = $.extend({}, default_data, options);

            function goto_step(step, disable) {
                var ii, $divinput;
                slide_tabs(step, disable);
                if (step == 3) {


                }
            }

                //Tabs
                $panelTabsNav = $('li.step-nav-tabs.funding');
                $panelTabs = $('.step-nav-tab.funding');

                $panelTabsNav.children('a').on('click', function (e) {
                    e.preventDefault();
                    if (!$(this).parent().is('.disabled')) {
                        goto_step($(this).data('number'))
                    }
                });
                $.funding_adjust_calc = function () {
                    var f_amount = funding_data.price * (funding_data.engagement / 100),
                        total_pay = funding_data.price - f_amount,
                    //                        total_pay       =  funding_data.price -  f_amount,
                        f_monthly_pay = funding_core(total_pay, funding_data.months);
                    $('#live-engagement,#funding_result_engagement,#funding_resume_engagement').html(moneyFormat(f_amount));
                    $('#live-months,#funding_result_months,#funding_resume_months').html(funding_data.months + ' meses');
                    $('#live-price,#funding_result_price,#funding_resume_price').html(moneyFormat(funding_data.price));
                    $('#funding_result_monthly_payment,#funding_resume_monthly_payment').html(moneyFormat(f_monthly_pay));
                }
                $.funding_select_version = function (ii) {
                    var $elements;
                    $elements = $('#funding-versions-tabs li a');
                    $elements.removeClass('active');
                    $elements.eq(ii).addClass('active');
                    funding_data.engagement = $("#car_engagement_slider").slider('value');
                    funding_data.months = $("#car_months_slider").slider('value');

                    funding_data.price = car_d.versions[ii].price;
                    fuh_data.car_version = car_d.versions[ii].key;
                    $.funding_adjust_calc();
                }
                $.funding_select_car = function (k) {
                    var car_data = get_car_data(k),
                        $icons = $('#car_select_preview .car_thumb_160 .car, #fu_adjust_car .car_thumb_60 .car, #funding_result_data .car_thumb_60 .car, #funding-resume-car .car_thumb_60 .car'),
                        $car_texts = $('#car_select_name h3, #step-nav-tab h3, #fu_adjust_car h3, #funding_result_data h3, #funding-resume-car h3');

                    fuh_data.key = k;


                    var anio = '2015';
                    //                    if(car_data.key == 'swift-sport'){
                    //                        anio = '2013';
                    //                    }

                    if (car_data.key == "ciaz") {
                        anio = '2016';
                    }

                    fuh_data.name = car_data.name + ' ' + anio;

                    $("#car_engagement_slider").slider({
                        value: 20
                    });
                    $("#car_months_slider").slider({
                        value: 6
                    });

                    $car_texts.text(fuh_data.name);
                    $icons.removeClass();
                    $icons.addClass('car ' + fuh_data.key);
                    var i0 = cars_prices.length,
                        versions = null,
                        i1, i2, tab_data;
                    while (i0--) {
                        if (cars_prices[i0].key == fuh_data.key) {
                            car_d = cars_prices[i0];
                            versions = car_d.versions;
                            var i1 = 0,
                                i2 = versions.length,
                                tabs_data = {
                                    versions: []
                                };
                            if (i2 > 1) {
                                $('#funding-versions').show();
                            } else {
                                $('#funding-versions').hide();
                            }
                            while (i1 < i2) {
                                tab_data = {
                                    i: i1,
                                    name: versions[i1].name
                                }
                                tabs_data.versions.push(tab_data);
                                i1++;
                            }
                            var html = Mustache.render(funding_tab, tabs_data);
                            $("#funding-versions-tabs").html(html);
                            $.funding_select_version(0);
                            break;
                        }
                    }
                };


                $.send_funding = function () {
                    var extended = $('input[name="hfu_drive"]:checked').val(),
                        $name = $('#hfu_name'),
                        $lastname = $('#hfu_lastname'),
                        $email = $('#hfu_email'),
                        $tel = $('#hfu_tel'),
                        form_errors = 0;
                    if (!$.validate_input($email)) {
                        form_errors++;
                        $name.focus();
                    }
                    if (!$.validate_input($name)) {
                        form_errors++;
                        $name.focus();
                    }
                    if (!$.validate_input($lastname)) {
                        form_errors++;
                        $name.focus();
                    }
                    if (!$.validate_input($tel)) {
                        form_errors++;
                        $tel.focus();
                    }
                    // if (extended > 0) {
                    // if (!$.validate_input($tel)) {
                    //     form_errors++;
                    //     $tel.focus();
                    // }
                    // } else {

                    if (conce_d == null) {

                        form_errors++;
                        $.error_bubble($('#tdcss'), true);
                        /*
                         if(  ){

                         chzn-container
                         $('#tdcss, #tdcss #tdcs').css({
                         width: 'auto!important'
                         });

                         }*/
                        $('#tdcs .chzn-container a').trigger('click').focus();
                    } else {
                        $.error_bubble($('#tdcss'), false);
                    }
                    $.error_bubble($tel, false);
                    //
                    // }

                    if (form_errors == 0) {
                        var data = {
                            car_key: fuh_data.key,
                            car_version: fuh_data.car_version,
                            email: $email.val(),
                            engagement: funding_data.engagement,
                            months: funding_data.months,
                            name: $name.val(),
                            lastname: $lastname.val(),
                            phone: $tel.val(),
                            newsletter: ('#funding-newsletter:checked').length,
                            source: 'Funding'
                        }

                        $('#funding_resume_email').html(data.email);
                        $('#header-financiamiento li.step-nav-tabs').addClass('disabled');
                        data.concessionaire_key = conce_d.key;

                        if (extended > 0) {
                            // data.phone = $tel.val();
                            $('#funding_resume_concessionaire').text(conce_d.name).attr({
                                href: '/concesionarias/suzuki-' + conce_d.key
                            });
                            ga('send', 'event', 'Financiamiento', 'Confirmacion_Prueba', 'Header_' + fuh_data.key, 0.012 * funding_data.price);
                        } else {
                            ga('send', 'event', 'Financiamiento', 'Confirmacion_No_Prueba', 'Header_' + fuh_data.key, 0.012 * funding_data.price);
                        }

                        var service_url = 'http://suzuki.api.dev.ktc.mx/financing';
                        $.ajax({
                            async: true,
                            cache: false,
                            data: data,
                            dataType: 'json',
                            type: 'POST',
                            success: function (data) {
                                if (data.status == 'OK') {
                                    $('#funding_form').hide();
                                    $('#funding_resume').fadeIn();
                                } else {
                                    alert("Ha ocurrido un error, por favor, inténtelo nuevamente.");
                                }
                            },
                            error: function (x, t, m) {
                                if (t === "timeout") {
                                    $('#funding_form').hide();
                                    $('#funding_resume').fadeIn();
                                }
                            },
                            url: service_url
                        });
                    }
                };
                $('#hfu_name').on('focusout', function () {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#hfu_lastname').on('focusout', function () {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#hfu_email').on('focusout', function () {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#hfu_tel').on('focusout', function () {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('input[name="hfu_drive"]').on('change, click', function (e) {
                    // if ($(this).val() > 0) {
                    //     $('.funding-hidden-inputs').show();
                    // } else {
                    //     $('.funding-hidden-inputs').hide();
                    // }
                });
                $('#drive_no').trigger('click');
                $('#tdr_end').on('click', function () {
                    $.openPanel('');
                });
                $('#tdcs').concessionaire_selector({
                    callback: function (data) {
                        conce_d = {
                            key: this.id,
                            name: this.name
                        };
                        $.error_bubble($('#tdcss'), false, 'Elije tu concesionaria');
                    }
                });
                $('#tdcs').delegate('select', 'change', function () {
                    if ($('#tdcs select').length > 0) {
                        if ($('#tdcs select').length > 1) {
                            $('#error_concessionaire').css({
                                marginLeft: 250
                            });
                        }
                    }

                })

                $("#car_engagement_slider").slider({
                    change: function (event, ui) {
                        funding_data.engagement = ui.value;
                        $.funding_adjust_calc();
                    },
                    max: 80,
                    min: 20,
                    slide: function (event, ui) {
                        funding_data.engagement = ui.value;
                        $.funding_adjust_calc();
                        $(this).parent().children(".star").html(ui.value + "%");
                    },
                    step: 5,
                    value: 20

                });
                $("#car_months_slider").slider({
                    change: function (event, ui) {
                        funding_data.months = ui.value;
                        $.funding_adjust_calc();
                    },
                    max: 60,
                    min: 6,
                    slide: function (event, ui) {
                        funding_data.months = ui.value;
                        $.funding_adjust_calc();
                        $(this).parent().children(".star").html(ui.value);
                    },
                    step: 6,
                    value: 6

                });


                current_tab = -1;
                $('#funding-versions-tabs').delegate('a', 'click', function (e) {
                    e.preventDefault();
                    $.funding_select_version(parseInt($(this).data('version')));
                });
                $('#car_select_list').delegate('a', 'click', function (e) {
                    e.preventDefault();
                    $.funding_select_car($(this).data('key'));
                    if (IS_MOBILE) {
                        $("#car_select_list").hide();
                        $("#car_select_name, #car_select_preview").fadeIn();
                    }
                });
                if (fuh_data.key == '') {
                    $('#car_select_list a').eq(0).trigger('click');
                    if (IS_MOBILE) {
                        $("#car_select_name, #car_select_preview").hide();
                        $("#car_select_list").fadeIn();
                    }
                    goto_step(1, true);
                } else {
                    $.funding_select_car(fuh_data.key);
                    goto_step(2, true);
                }
                $("#change-car-test").on('click', function (e) {
                    e.preventDefault();
                    $("#car_select_name, #car_select_preview").hide();
                    $("#car_select_list").fadeIn();
                });
                $('a.funding-goto').on('click', function (e) {
                    e.preventDefault();
                    if (IS_MOBILE) {
                        if ($(this).data('step') == "1") {
                            $("#car_select_name, #car_select_preview").hide();
                            $("#car_select_list").fadeIn();
                        }
                    }
                    goto_step($(this).data('step'));
                });
                if (IS_MOBILE) {
                    $("#fake-calculate").on('click', function (e) {
                        e.preventDefault();
                        $("#header-financiamiento .option-2, #fake-calculate").hide();
                        $(".funding-live-results, #modify-calc, #header-financiamiento .funding-goto").css("display", "block");
                    });
                    $("#modify-calc").on('click', function (e) {
                        e.preventDefault();
                        $(".funding-live-results, #modify-calc, #header-financiamiento .funding-goto").hide();
                        $("#header-financiamiento .option-2, #fake-calculate").css("display", "block");
                    });
                }
                break;
            case 'quote':

                var service_url = '/autos/servicesv2/quote/get_cars_versions',
                    $content_main = $('.header-section-content.quote'),
                //Variables que se utilizarán en el proceso de selección de versión.
                    selected_year, selected_model, selected_version, selected_engagement, models_data = [],
                    selected_state, selected_dealer;

            function quote_show_step_index(step) {
                var $steps = $content_main.children('.screen'),
                    $step = $steps.eq(step);
                $steps.removeClass('active').hide();
                $step.removeClass('active').fadeIn();

                if (IS_MOBILE) {
                    $('#quote-drive').change(function () {

                        var me = $(this),
                            checked = me.prop('checked'),
                            news = '', loader = '';
                        if (checked) {
                            news = '-385px';
                            loader = '-460px';
                        } else {
                            news = '-325px';
                            loader = '-395px';
                        }

                        $('.quote-promo').css('bottom', news);
                        $('.header-section-content.quote .loader_send').css('bottom', loader);
                        $('#error-date').focus();
                    });
                }
            }

            function percentage_changed(s_e) {
                selected_engagement = s_e;
                var out = selected_version.precio * selected_engagement * 0.01,
                    money_out = moneyFormat(out),
                    money_diference = selected_version.precio - out;
                $('span#quote-engagement-percentage-value').text(selected_engagement);
                $('#quote-engagement-money').val(money_out);
                $('#quote-result-engagement').text(money_out);
                $('#quote-result-diference').text(moneyFormat(money_diference));
                $('#quote-continue-step-4').prop({
                    'disabled': false
                });
            }

                //ESTO NO SE ESTÁ UTILIZANDO

                var combo_state_names = {
                    'agua': 'Aguascalientes',
                    'bjcl': 'Baja California',
                    'chia': 'Chiapas',
                    'chih': 'Chihuahua',
                    'coah': 'Coahuila',
                    'coli': 'Colima',
                    'dist': 'Distrito Federal',
                    'edom': 'Estado de México',
                    'guan': 'Guanajuato',
                    'guer': 'Guerrero',
                    'hdgo': 'Hidalgo',
                    'jali': 'Jalisco',
                    'mich': 'Michoacán',
                    'more': 'Morelos',
                    'nvln': 'Nuevo León',
                    'oaxa': 'Oaxaca',
                    'pueb': 'Puebla',
                    'quer': 'Querétaro',
                    'qroo': 'Quintana Roo',
                    'sanl': 'San Luis Potosí',
                    'sina': 'Sinaloa',
                    'sono': 'Sonora',
                    'vera': 'Veracruz',
                    'vill': 'Tabasco',
                    'yuca': 'Yucatán',

                };

                var resp = false;

            function quote_analytics_events(param) {
                if (resp === true) {
                    console.log('Test drive: ' + param.drive);

                    if (param.drive > 0) {
                        ga('send', 'event', 'Cotizacion con Prueba', 'Confirmacion', param.model + '_' + param.concessionaire, '' + param.version_price * 0.066 + '');
                        console.log('Con prueba');
                    } else {
                        ga('send', 'event', 'Cotizador', 'Confirmacion', param.model + '_' + param.concessionaire, '' + param.version_price * 0.0086 + '');
                        console.log('Sin prueba');
                    }

                    ga('send', 'event', 'Cotizador', param.model, param.combo_selected_state, param.version_price * 0.01);
                    console.log('Cotizador: event sent');
                    resp = false;
                } else {
                    setTimeout(function () {
                        quote_analytics_events(param);
                    }, 3000);

                }
            }

            function quote_goto_step(step) {
                step = parseInt(step, 10);
                switch (step) {
                    case 1:
                        quote_show_step_index(0);
                        break;
                    case 2:
                        quote_show_step_index(1);
                        break;
                    case 3:
                        quote_show_step_index(2);
                        setTimeout(function () {
                            // Select test-drive date functionality.
                            $('#htd_date').datepicker({
                                minDate: '+1d',
                                maxDate: '+1m',
                                minLength: 0,
                                delay: 0,
                                dateFormat: 'yy-mm-dd'
                            });
                            var date_timeout;
                            $('#htd_date').on('focusout', function () {
                                clearTimeout(date_timeout);
                                date_timeout = setTimeout(function () {
                                    var $input = $('#htd_date');
                                    $.validate_input($input);
                                }, 250);
                            });
                            // Menú Cotizar, Registro, Si el usuario selecciona el checkbox de prueba de manejo.
                            $('#quote-drive').change(function () {
                                if ($(this).prop('checked')) {
                                    $('fieldset.htd_date').css('display', 'block');
                                    $('#htd_date').addClass('validate');
                                }
                                else {
                                    $('fieldset.htd_date').css('display', 'none');
                                    $('#htd_date').removeClass('validate');
                                }
                            });
                        }, 500);
                        break;
                    case 4:
                        selected_state = $('#quote-states').val();
                        selected_dealer = $('#quote-dealers').val();
                        if (selected_state) {
                            if (selected_dealer) {
                                quote_show_step_index(3);
                            } else {
                                alert('Selecciona tu concesionaria');
                                return;
                            }
                        } else {
                            alert('Selecciona tu estado');
                            return;
                        }

                        break;
                    case 5:
                        var $v_inputs = $('input.validate'),
                            $q_name = $('#quote-name'),
                            $q_last_name = $('#quote-last-name'),
                            $q_phone = $('#quote-phone'),
                            $q_email = $('#quote-email'),
                            $q_result_price = $('#quote-result-price'),
                            $q_result_engagement = $('#quote-result-engagement');
                        form_errors = false;
                        $v_inputs.each(function () {
                            if (!$.validate_input($(this))) {
                                $(this).focus();
                                form_errors = true;
                                return false;
                            }
                        });
                        if (form_errors) {
                            return false;
                        }

                        var quote_drive = $('#quote-drive:checked').length,
                            quote_promo = $('#quote-promo:checked').length,
                            htd_date;

                        if (quote_drive > 0)
                            htd_date = $('#htd_date').val();
                        else
                            htd_date = '';

                        var data = {
                            'year': selected_year,
                            'model': selected_model,
                            'version': selected_version.version,
                            'state': selected_state,
                            'concessionaire': selected_dealer,
                            'engagement': selected_engagement,
                            'name': $q_name.val(),
                            'lastname': $q_last_name.val(),
                            'phone': $q_phone.val(),
                            'email': $q_email.val(),
                            'drive': quote_drive,
                            'date': htd_date,

                            'newsletter': quote_promo,
                            //,'fake'          : 1,

                            'r-price': $q_result_price.html(),
                            'r-engagement': $q_result_engagement.html()
                        };

                        // ga('send', 'event', 'Cotizador', selected_model, combo_state_names[selected_state + ''], selected_version.precio * 0.01);

                        SuzukiWeb.BlockScreen();
                        var send_url = 'http://api-suzuki.ktcagency.com/financing';
                        var checkeddrive = $('#quote-drive:checked').length;

                        $.ajax({
                            data: data,
                            dataType: 'json',
                            error: SuzukiWeb.ErrorHandler,
                            cache: false,
                            beforeSend: function () {
                                $('.loader_send').show();
                                $('#quote-continue-step-final').prop({'disabled': true});
                            },
                            success: function success(json_data) {
                                SuzukiWeb.UnblockScreen();
                                $('.loader_send').hide();
                                $('#quote-continue-step-final').prop({'disabled': false});
                                var template, html, custom;

                                template = '<div class="form-wrapper">' +
                                        '<p>Conoce el desglose de planes de financiamiento de acuerdo con el número de meses cotizados y el tipo de seguro según la empresa que desees contratar (seguro para auto y seguro de vida).</p>' +
                                        '<p>Para tu comodidad, te hemos enviado esta tabla a tu correo electrónico.</p>' +
                                        '</div>' +
                                    '<div class="form-wrapper" style="height: 180px;">' +
                                    '<table class="final-quote" cellspacing="0" cellpadding="0">' +
                                    '<thead><tr><th></th><th>12</th><th>24</th><th>36</th><th>48</th><th>60</th></tr></thead>' +
                                    '<tbody>';

                                for(var key1 in json_data.content.bnp_result){
                                    template += '<tr><td class="name '+json_data.content.bnp_result[key1][0]['Nombre']+'">'+json_data.content.bnp_result[key1][0]['Nombre']+'</td>';
                                    for( var key2 in json_data.content.bnp_result[key1][0]['Opciones']){
                                        var importe = json_data.content.bnp_result[key1][0]['Opciones'][key2]['Importe'];
                                        var formatted = importe.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                                        template += '<td>$ '+formatted+'</td>';
                                    }
                                    template += '</tr>';
                                }

                                template += '</tbody></table></div>';
                                resp = true;
                                /* Facebook Conversion Code for Cotizaciones Ediciones Especiales */
                                (function () {
                                    var _fbq = window._fbq || (window._fbq = []);
                                    if (!_fbq.loaded) {
                                        var fbds = document.createElement('script');
                                        fbds.async = true;
                                        fbds.src = '//connect.facebook.net/en_US/fbds.js';
                                        var s = document.getElementsByTagName('script')[0];
                                        s.parentNode.insertBefore(fbds, s);
                                        _fbq.loaded = true;
                                    }
                                })();
                                window._fbq = window._fbq || [];
                                window._fbq.push(['track', '6027345961752', {'value': '3', 'currency': 'MXN'}]);
                                //html = Mustache.render(template, json_data.data);
                                $('#quote_result_table').html(template);
                                quote_show_step_index(4);
                            },
                            error: function(){
                                SuzukiWeb.UnblockScreen();
                                $('.loader_send').hide();
                                var template = '<div class="form-wrapper"><p>Conoce el desglose de planes de financiamiento de acuerdo con el número de meses cotizados y el tipo de seguro según la empresa que desees contratar (seguro para auto y seguro de vida).</p><p>Para tu comodidad, te hemos enviado esta tabla a tu correo electrónico.</p></div><div class="form-wrapper" id="bnp-error"> ¡Ups! Parece que el sistema de cotización no está disponible. Por favor, vuelve más tarde en lo que lo solucionamos. </div>';
                                html = Mustache.render(template);
                                $('#quote_result_table').html(html);
                                $('#quote-continue-step-final').prop({'disabled': false});
                                quote_show_step_index(4);
                            },
                            type: 'POST',
                            url: 'http://api-suzuki.ktcagency.com/financing/website'
                        });

                        var param = {
                            'drive': quote_drive,
                            'model': selected_model,
                            'state_name': combo_state_names,
                            'state': selected_state,
                            'combo_selected_state': combo_state_names[selected_state + ''],
                            'concessionaire': $('#quote-dealers').val(),
                            'version': selected_version,
                            'version_price': selected_version.precio
                        };
                        quote_analytics_events(param);

                        break;
                    default:
                        return false;
                        break;

                }

            }


                $content_main
                    .delegate('#quote-models', 'change', function () {
                        var i0, item,
                            count = 0,
                            value = $(this).children(':selected').val(),
                            options_html = '',
                            disabled;
                        selected_model = value;
                        for (i0 in models_data) {
                            item = models_data[i0];
                            if (item.hasOwnProperty(value)) {
                                //Sobre escribimos los años por que vienen de menor a mayor
                                options_html = '<option value="' + i0 + '">' + i0 + '</option>' + options_html;
                                count++;
                            }
                        }
                        $('#quote-result-model').text(selected_model);
                        if (count < 2) {
                            disabled = true;
                        } else {
                            options_html = '<option value="" disabled>Año</option>' + options_html;
                            disabled = false;
                        }
                        $('#quote-years').html(options_html).prop({
                            disabled: disabled
                        }).trigger('chosen:updated').trigger('change');

                    })

                    // Cargar concesionarias al cambiar de estado
                    //
                    .delegate('#quote-states', 'change', function () {

                        var $this, $dealers;

                        $this = $(this);

                        $dealers = $('#quote-dealers');

                        // Pedir concesionarias para rellenar
                        // select
                        //
                        var data = {filter: true};
                        $.ajax({
                            url: '/autos/services/concessionaires/all',
                            data: data,
                            type: 'get',
                            dataType: 'json',
                            success: function (data, test) {
                                var selected;

                                selected = $this.find('option:selected').val();


                                $dealers.empty()
                                    .append('<option value="" disabled selected>Concesionaria</option>');


                                $.each(data.data, function (key, value) {


                                    if (selected === value.state_key) {

                                        $dealers.append('<option value="' + value.name + '">' + value.name + '</option>');
                                    }

                                });


                                $dealers.trigger("chosen:updated");


                            }
                        });
                    })

                    .delegate('#quote-years', 'change', function () {
                        var i0, item,
                            count = 0,
                            value = $(this).children(':selected').val(),
                            options_html = '',
                            disabled;
                        selected_year = value;
                        for (i0 in models_data[selected_year][selected_model]) {
                            item = models_data[selected_year][selected_model][i0];
                            options_html += '<option value="' + item.id + '">' + item.version + '</option>';
                            count++;
                        }
                        if (count < 2) {
                            disabled = true;
                        } else {
                            options_html = '<option value="" disabled>Versión</option>' + options_html;
                            disabled = false;
                        }
                        $('#quote-result-year').text(selected_year);
                        $('#quote-versions').html(options_html).prop({
                            disabled: disabled
                        }).trigger('chosen:updated').trigger('change');
                    })
                    .delegate('#quote-versions', 'change', function () {
                        var selected_version_index = $(this).children(':selected').index();
                        if (selected_version_index > 0) {
                            selected_version_index--;
                        }
                        selected_version = models_data[selected_year][selected_model][selected_version_index];
                        var money_out = moneyFormat(selected_version.precio),
                            $quote_engagement_percentage = $('#quote-engagement-percentage');
                        $('#quote-result-version').text(selected_version.version);
                        $('#quote-price').val(money_out);
                        $('#quote-result-price').text(money_out);

                        var v = $quote_engagement_percentage.slider('value');
                        if (v < 10 || v > 90) {
                            $quote_engagement_percentage.slider({
                                value: 10
                            });
                            v = 10;
                        }
                        $quote_engagement_percentage.slider({
                            disabled: false,
                            value: v
                        });
                    })
                    .delegate('button.go-to-step', 'click', function () {
                        var step = parseInt($(this).data('step'), 10);
                        quote_goto_step(step);
                    })
                    .delegate('input.validate', 'focusout', function () {
                        $.validate_input($(this));
                    });


                quote_goto_step(1);

                $.ajax({
                    type: 'get',
                    dataType: 'json',
                    success: function success(json_data) {
                        //El precio lo pasamos a enteros
                        var index1, index2, index3, quoteModelos;

                        // Modelos del servicio
                        quoteModelos = {};

                        for (index1 in json_data.data) { // Años

                            for (index2 in json_data.data[index1]) { // Modelos

                                quoteModelos[index2] = index2;

                                for (index3 in json_data.data[index1][index2]) { // Versiones

                                    json_data.data[index1][index2][index3].precio = parseInt(json_data.data[index1][index2][index3].precio);
                                }
                                json_data.data[index1][index2].sort(function (a, b) {
                                    return b.precio - a.precio;
                                })
                            }

                        }


                        // Eliminar datos harcode del quote mustache
                        //
                        $('#quote-models').empty()
                            .append('<option value="" disabled selected>Modelo</option>');

                        // Colocar modelos en select de la respuesta del servicio
                        //
                        for (m in quoteModelos) {

                            // Excluir los SX4
                            if (m.indexOf('SX4') < 0) {
                                $('#quote-models').append('<option value="' + m + '">' + m + '</option>');
                            }

                        }


                        models_data = json_data.data;
                        $("#quote-engagement-percentage").slider({
                            change: function (event, ui) {
                                percentage_changed(ui.value);
                            },
                            max: 90,
                            min: 10,
                            slide: function (event, ui) {
                                percentage_changed(ui.value);
                            },
                            step: 1,
                            value: 10,
                            disabled: true
                        });
                        $('#quote-models,#quote-years,#quote-versions').chosen({
                            width: '265px'
                        });
                        $('#quote-states').chosen({
                            width: '265px',
                            maxRows: 2
                        });
                        $('#quote-dealers').chosen({
                            width: '265px',
                            maxRows: 2
                        });
                        quote_goto_step(3);
                    },
                    error: function error(e) {
                        quote_goto_step(2);
                        SuzukiWeb.ErrorHandler(e);
                    },
                    url: service_url
                });

                break;
            default:
                break;
        }
    };
    //Display Input errors
    $.error_bubble = function ($label, show, message) {
        var $p = $label.parent().children('p.invalid-message');
        if (show) {
            if (message) {
                $p.html(message + '<span>&nbsp;</span>').stop().hide().fadeIn();
            } else {
                $p.stop().hide().fadeIn();
            }
        } else {
            $p.hide();
        }
    }
    ////Newsletter form
    var $newsletter_name = $('#newsletter_name');
    var $newsletter_email = $('#newsletter_email');

    $newsletter_name.on('focusout', function () {
        $.validate_input($newsletter_name);
    });
    $newsletter_email.on('focusout', function () {
        $.validate_input($newsletter_email);
    });

    $.newsletter_join_form = function () {

        var form_errors = 0;
        if (!$.validate_input($newsletter_email)) {
            form_errors++;
            $newsletter_email.focus();
        }
        if (!$.validate_input($newsletter_name)) {
            form_errors++;
            $newsletter_name.focus();
        }

        if (form_errors == 0) {
            var data = {
                email: $newsletter_email.val(),
                name: $newsletter_name.val(),
                source: 'Footer',
            };
            var service_url = 'http://api-suzuki.ktcagency.com/newsletter';
            $.ajax({
                cache: false,
                data: data,
                dataType: 'json',
                type: 'POST',
                success: function (data) {
                    if (data.status == 'OK') {
                        $newsletter_email.val('');
                        $newsletter_name.val('');
                        $newsletter_phone.val('');
                        ga('send', 'event', 'Newsletter', 'Confirmacion', 'Footer', 600);
                    }
                    alert("Su email ha sido registrado con éxito!");
                },
                error: function (x, t, m) {
                    alert("No se pudo suscribir a nuestro newsletter, inténtelo de nuevo");
                },
                url: service_url
            });
        }

    }

    //Loads html_sections_html contents
    $.ajax({
        url: '/autos/services/templates/header_contents',
        success: function (data) {
            main_menu_available = true;
            html_sections_html = data.data;
            if (preselected_click != null) {
                $.openPanel(preselected_click[0], preselected_click[1]);
                preselected_click = null;
            }
        }
    });
    //Loads concessionaires data
    var data = {filter: true};
    $.ajax({
        url: '/autos/services/concessionaires/all',
        data: data,
        success: function (data) {
            concessionaires_data = data.data;
            if (geo_select_concessionaire_callback) {
                geo_select_concessionaire_callback();
            }
        }
    });
    $.ajax({
        url: '/autos/services/financing/car_prices',
        success: function (data) {
            cars_prices = data.data;
        }
    });

    //Saves geo data preferences in local storage
    function init_geo_core() {

        try {
            // New instantdrive detection
            //

            if (IS_MOBILE) {
                return;
            }

            // $body.prepend(geo_alert);

            var geo_listener = function () {
                var top = get_scroll_top();
                if (top > 0) {
                    $('#geolocation-fixed').removeClass('active');
                } else {
                    $('#geolocation-fixed').addClass('active');
                }
            }


            $body.on('click', '#geolocalization-button', function (e) {
                e.preventDefault();
                $('#geolocation-fixed').removeClass('active');
                var tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);
                var tomorrow_time = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0, 0).getTime();
                geo_data.time = tomorrow_time;
                $(window).off('scroll', geo_listener);
            })

                .on('click', '#test-drive-open', function (e) {
                    e.preventDefault();
                    $('#header-test-drive-button').trigger('click');
                });

            $(window).scroll(geo_listener);

            geo_timeout = setTimeout(function () {
                clearTimeout(geo_timeout);
                $('#geolocation-fixed').addClass('active');
            });


            navigator.geolocation.getCurrentPosition(function (position) {
                clearTimeout(geo_timeout);
                clearTimeout(geo_timeout);

                $.ajax({
                    url: 'http://api.instantdrive.com.mx/v2/dealers/53c5c78a90f498310c5b1a63',
                    success: function (data) {


                        // Area
                        //
                        var objectsArea = $.map(data.area, function (value) {
                            return new google.maps.LatLng(value.latitude, value.longitude);
                        });

                        // Create polygon
                        //
                        var dealerAreaPolygon = new google.maps.Polygon({
                            paths: objectsArea
                        });

                        // Current
                        //
                        var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


                        // Current model
                        //
                        var path = window.location.pathname.slice(1);

                        // Available models
                        //
                        if (path === 'swift' || path === 's-cross') {

                            $('#instant-drive-section').toggle(google.maps.geometry.poly.containsLocation(currentLocation, dealerAreaPolygon));
                        }


                    }

                });


                if ($('#geolocation-fixed').length) {
                    $('#geolocation-fixed').remove();
                }


            }, function () {
                clearTimeout(geo_timeout);
                clearTimeout(geo_timeout);
                if ($('#geolocation-fixed').length) {
                    $('#geolocation-fixed').remove();
                }
            });


            var today = new Date(),
                geo_timeout,
                now_time = today.getTime(),
                geo_data = amplify.store("geodata");
            if (!geo_data) {
                geo_data = {
                    time: 0,
                    ll: null
                };
                amplify.store("geo_data", geo_data);
            }
        } catch (error) {
            console.warn('  No hay Instant Drive =(')
        }
    }

    init_geo_core();

    $body.append(preload_header_assets).append(dummy_alerts);


    //Auto animates if a hash param exists
    if (init_hash) {
        init_hash = init_hash.split('#').join('');
        if ($('a[name="' + init_hash + '"]').length > 0) {

            setTimeout(function () {
                $.scroll_to(init_hash);
            }, 1000);
        } else if (init_hash == 'prueba-de-manejo') {
            $.openPanel('test-drive');
        } else if (init_hash == 'modelos') {
            $.openPanel('models');
        }
    }

    if (IS_MOBILE) {
        $("body").on("click", ".header-column", function () {
            if (!$(this).hasClass("header-column-open")) {
                $('html, body').animate({
                    scrollTop: '0px'
                }, 400);
                $(".header-links-list").addClass("header-links-open");
                $(this).siblings().hide();
                $(this).addClass("header-column-open");
                $(this).find("ul").fadeIn();
            }
        });

        $("body").on("click", ".back-list-arrow", function () {
            var header_column_open = $(".header-column-open");
            $(".header-links-list").removeClass("header-links-open");
            header_column_open.removeClass("header-column-open");
            $(".links-list").hide();
            $(".header-column").fadeIn();
        });
    }

    /* Hash para abrir un elemento del menú automáticamente */
    var hashtag = window.location.hash;
    if (hashtag) {
        if (hashtag == '#mi-suzuki') {
            /* Mi Suzuki */
            $('#header-owners-button').trigger('click');
        } else if (hashtag === "#cotizar") {
            /* Cotizar */
            $('#quote-button').trigger('click');
        };
    }


    //Scross & Bage popover
    var pop_over_template = '<div id="{{id}}" class="dummy-alert badge"><p class="alert-message"><h2>{{title}}</h2>{{{message}}}</p></div>',
        messages_data = [{
            id: 'super_brands',
            title: 'SUPERBRANDS',
            message: '<p>Suzuki fue nombrado como una "Gran Marca de México"en base a los siguientes criterios: longevidad, presencia en el mercado y lealtad de sus consumidores.</p>'
        }, {
            id: 'auto_show_tv',
            title: 'AUTO SHOW TV',
            message: '<p>Este prestigiado programa de análisis automotriz nombra a S-CROSS como el mejor Crossover por sus cualidades dinámicas, eficiencia energética y alto nivel de equipamiento.</p>'
        }, {
            id: 'master_test',
            title: 'MASTER TEST',
            message: '<p>6 pruebas dinámicas donde se llevan al límite las cualidades del vehículo, en consecuencia S-CROSS el mejor Crossover en sentido dinámico y de seguridad.</p>'
        }],
        html_messages = '',
        i0;
    i0 = messages_data.length;

    while (i0--) {
        html_messages += Mustache.render(pop_over_template, messages_data[i0]);
    }
    $body.append(html_messages).delegate('a.popoverbox', 'mouseover mouseout click', function (event) {
        var $this = $(this),
            target = $this.data('target'),
            $target = $(target);
        if (event.type === 'mouseover') {
            $target.stop().addClass('show').hide().fadeIn(200);
        } else if (event.type === 'mouseout') {
            $target.stop().removeClass('show').show().fadeOut(200);
        } else {
            if ($this.attr('src').length <= 1) {
                event.preventDefault();
            }
        }
    });

    if (IS_MOBILE) {
        // Disparar
        if (window.location.hash === '#test-drive-section') {
            openCloseMenu();
            var data = get_car_by_url();
            if (data) {
                params = data;
            } else {
                params = get_car_by_hash();
            }

            $.openPanel('test-drive', data);
            openCloseMenu();
        }

        $('.ap_arrows').click(function () {
            var me = $(this),
                active = me.hasClass('active'),
                direction = me.data('direction'),
                table = me.parent('.ap_title').data('table'),
                slider = $('#' + table + ' .ap_tables_wrapper'),
                margin = '';

            if (!active) {
                if (direction === 'right')
                    margin = '-100%';
                else
                    margin = '0';

                slider.animate({marginLeft: margin}, 300, function () {
                });
            }
        });
    }

});