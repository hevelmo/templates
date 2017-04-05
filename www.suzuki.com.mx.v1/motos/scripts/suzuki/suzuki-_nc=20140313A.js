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
}];

var SuzukiWeb, $blockScreen, $alertMessage;
SuzukiWeb = {
    $disabled: null,
    errors_dictionary: null,
    init: function init() {
        $.ajax({
            'success': function success(json_data) {
                SuzukiWeb.errors_dictionary = json_data.errors_dictionary;
            },
            'url': '/motos/servicesv2/help'
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
    concessionaires_data.sort(function(a, b) {
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
                    if (!validations_regexp.phone.exec(value)) {
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
function absoluteOffset(elem) {
    return elem.offsetParent && elem.offsetTop + absoluteOffset(elem.offsetParent);
}

function enviar_newsletter() {
    var target = $("#ft-noticias");
    var dest   = target.offset().top - 50;
    $('html,body').stop().animate({
            scrollTop: dest
        }, 800, 'easeOutSine');
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


$(document).ready(function() {
    var $header_panel = $('#header-panel'),
        $expanded_links = $('a.expand-header'),
        $header_wrapper = $('.header-wrapper'),
        $header_zone = $('#header-zone');

    $blockScreen = $('#block_screen');
    $alertMessage = $('#alert_message');
    SuzukiWeb.init();

    analytics_test_drive = function(title, value) {
        try {
            value = parseInt(value, 10);
            if (!value) {
                value = 0;
            }
            ga('send', 'event', 'Prueba de Manejo', 'Confirmacion', title, value);
        } catch (e) {
            console.log('Ocurrió un error con el evento de GA');
        }
        fb_pixel('6016795700971', '0.01');

    }


    //Validates an input with data-validation-data attribute and displays or hide bubble meesage
    $.validate_input = function($input) {
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
    $.adjust_menu_patch = function() {
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
    $.$header_panel_directives = function() {
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
                }, 300, 'easeOutSine', function() {
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
        $(window).trigger('scroll').scroll(function() {
            $.adjust_menu_patch();
        });
    };
    $(window).resize(function() {
        $.$header_panel_directives();

        // if($(window).width() > 1500){
        //     if($('#header-zone').hasClass('responsive')){
        //         $('#header-zone').removeClass('responsive');
        //         $('#models-header').removeClass('responsive');
        //         $('.menu-patch').removeClass('responsive');
        //     }
        // }else{
        //     if(!$('#header-zone').hasClass('responsive')){
        //         $('#header-zone').addClass('responsive');
        //         $('#models-header').addClass('responsive');
        //         $('.menu-patch').addClass('responsive');
        //     }
        // }
    });
    //Add action to all header's close butons
    $header_panel.delegate('.close-menu-box a', 'click', function(e) {
        e.preventDefault();
        $.openPanel('');
    });

    // This block causes the Tablet/m Chrome issue on Models (recursive bug)
    // //Adjust content to window height
    // if ($('.window-adaptable').length > 0) {
    //     $.adjust_auto_height = function() {
    //         var min_h, hh, h_w;
    //         if (get_car_by_url() == null) {
    //             h_w = $(window).height() - 95;
    //         } else {
    //             h_w = $(window).height() - 50;
    //         }
    //         $('.window-adaptable').each(function() {
    //             try {
    //                 min_h = parseInt($(this).attr("data-min-height"));
    //             } catch (e) {
    //                 min_h = 600;
    //             }
    //             hh = min_h;
    //             if (hh >= min_h) {
    //                 if (hh < h_w) {
    //                     hh = h_w;
    //                 }
    //             } else {
    //                 hh = min_h;
    //             }
    //             $(this).height(hh);
    //         });
    //     };
    //     $(window).resize(function() {
    //         $.adjust_auto_height();
    //     });
    //     $(document).resize(function() {
    //         $.adjust_auto_height();
    //     });
    //     $.adjust_auto_height();
    // }

    //animates all transitions (needs an "a" element whit "name attrubute")
    $.scroll_to = function(target_name) {
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
    $('a.scroll-in-site').on('click', function(e) {
        e.preventDefault();
        var target_name = $(this).attr("href").replace(/^#/, '');
        $.scroll_to(target_name);
    });

    $.show_motos = function(me){
        var category = me.parent('.moto-info').parent('div').parent('div');
            selected = category.data('category'),
            mw       = '.models-wrapper';
        $(mw+' .categoria').fadeOut();
        $(mw+' .active_moto').fadeOut().removeClass('active_moto');
        $(mw+' .cat_'+selected).addClass('active_moto').delay(500).fadeIn();

        setTimeout(function() {
            $('.models-wrapper .back').fadeIn();
        }, 800);
    };

    //Owners categories definition and events (MI Suzuki)

    $.category_event = function(scope, category_id, category_name, category_type){
        $('.header-column .'+category_type+'_categories .categories .active').removeClass('active');
        $('.header-column .'+category_type+'_categories .categories .category_' + category_id).addClass('active');
        $('.header-column .'+category_type+'_models .models .model_' + category_id).show();
        $('.'+category_type+'_models .selection-subtitle').html(category_name).show();
        $('.'+category_type+'_models .change-category').show();
    }

    var type = '';
    $.categories_loaded = function(type){
        $('.'+type+'_categories .categories .category').click(function(){
            var me = $(this),
                type = me.data('type'),
                model_items = $('.header-column .'+type+'_models .models .model');

            model_items.css('display','none');
            $.category_event(me, me.data('id'), me.data('name'), type);

            $('.owner_list.'+type+'_categories').fadeOut(100);
            setTimeout(function() { $('.owner_list.'+type+'_models').fadeIn(100); }, 100);
        });

        $('.'+type+'_models .change-category').click(function(){
            var type = $(this).data('type');
            $(this).hide();
            $('.'+type+'_models .selection-subtitle').hide();
            $('.header-column .'+type+'_models .models .model').hide();
            $('.owner_list.'+type+'_categories').show();
            $('.owner_list.'+type+'_models').hide();
        });
        return false;
    }

    $.categories_event = function(me, types){
        for(var i=0; i<types.length; i++){
            var categories = $('.header-column .'+types[i]+'_categories .categories'),
                category = categories.children('.category'),
                cat =  categories.children('li').first(),
                cat_id = cat.data('id'),
                cat_name = cat.data('name');

            if(category.length>0){
                $.category_event(me, cat_id, cat_name, types[i]);
                $.categories_loaded(types[i]);
            }else{
                setTimeout(function() {
                    $.categories_event(me, types);
                    return false;
                }, 1000);
            }
        }
    };

    //Open's header magic
    //Available section = 'test-drive' | 'models' | 'financing' | 'owners' | 'before-buy' | 'quote'

    var bar_offset = {
        marginLeft: 0,
        width: 0
    };
    $.openPanel = function(section, options) {
        //        Esconder placa azul de geolocalización
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
        }else{
            console.log('ready!');
            if(section==='owners')
                $.categories_event($('#header-owners-button'), ['maintenance', 'accessories']);
        }
        bar_offset = {
            marginLeft: 0,
            width: 0
        };
        var header_button = null,
            height = 0;


        //Quote validation stg vs. prod (10 14 2015)
        // quote_validation:update


        // This are the values for the patch menu with "Financiamiento"
         var quote_flag = true,
             m_margin = -330,
             m_width = 108,
             q_margin = 337,
             q_width = 142,
             o_margin = 37,
             o_width = 183;
         if (!quote_flag) {
             m_margin = -158;
             m_width = 119;
         }



//         var quote_flag = true,
//             m_margin, m_width,
//             q_margin, q_width,
//             o_margin, o_width;
//         if (quote_flag) {
//             m_margin = -158;
//             m_width = 120;
//             q_margin = 337;
//             q_width = 142;
//             o_margin = 37;
//         } else {
//             m_margin = -330;
//             m_width = 108;
//             q_margin = 337;
//             q_width = 142;
//             o_margin = 37;
//             o_width = 183;
//         }



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
                    marginLeft: m_margin,
                    width: m_width
                };
                break;
            case 'financing':
                header_button = $('#header-financing-button');
                height = 555;
                bar_offset = {
                    marginLeft: 64,
                    width: 135
                };
                break;
            case 'owners':
                header_button = $('#header-owners-button');
                height = 300;
                bar_offset = {
                    marginLeft: q_margin,
                    width: q_width
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
                    marginLeft: o_margin,
                    width: o_width
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
            $header_sections.each(function(i) {
                if (i != ii) {
                    $(this).remove();
                } else {
                    $(this).hide().delay(200).fadeIn(300);
                }
            });
            $.start_header_listeners(section, options);
            // $('#model-section-arrow').css('display', 'none');
        } else {
            header_section = '';
            height = 0;
            $header_panel.stop().animate({
                height: 'auto'
            }, 200, function() {
                $('#header-sections-wrapper .header-section').remove();
                $header_panel.hide();
            });
            $('.menu-patch').stop().show().fadeOut(function() {
                $(this).width(0);
            });
            setTimeout(function() {
                $(window).trigger('scroll')
            }, 500);
            //Mostrar la pleca azul de geolocalización
            if ($("#geolocation-fixed")) {
                if ($("#geolocation-fixed").hasClass("active")) {
                    $("#geolocation-fixed").stop().slideDown(300);
                }
            }
        }
        $('.header-links-list').delegate('a', 'click', function() {
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

        if(!IS_MOBILE){
            $('.categoria').delegate('.moto-info .title', 'click', function(){
                var me = $(this);
                $.show_motos(me);
                ga('send', 'event', 'Motos', 'clic_categoría', $(this).text());
            }).delegate('.moto-thumb', 'click', function(){
                var me = $(this),
                    category = me.parent('.category-wrapper').children('.moto-info').children('.title');
                $.show_motos(category);
                ga('send', 'event', 'Motos', 'clic_categoría', category.text());
            });
        }else{
            $('.category-wrapper').click(function(){
                var me = $(this);
                    var title = me.children('.moto-info').children('.title'),
                        t_length = title.length;
                    $.show_motos(title);
                    ga('send', 'event', 'Motos', 'clic_categoría', title.text());
            });
        }

        $('.moto').delegate('.moto-info .title', 'click', function(){
            var me = $(this);
            ga('send', 'event', 'Motos', 'clic_categoria_modelo', $(this).text());
        }).delegate('.moto-thumb', 'click', function(){
            var me = $(this),
                category = me.parent('a').children('.moto-info').children('.title');
            ga('send', 'event', 'Motos', 'clic_categoria_modelo', category.text());
        });

        $('.models-wrapper .back').click(function(){
            $('.model.moto').hide();
            $(this).hide();
            $('.model.categoria').show();
        });

    };



    $("#header-panel").resize(function() {
        var _this = $(this);
        $('#header-spacer').stop().animate({
            height: _this.height()
        }, 300);
    });

    $('a.expand-header').on('click', function(e) {
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
        $("#header-mobile i").click(function() {
            $(this).toggleClass(function(index, className, state) {
                var icon_id = $(this).attr('id');

                $(this).css('display', 'none');
                if(icon_id === 'menu_icon')
                    $('#close_icon').css('display','block');
                else
                    $('#menu_icon').css('display','block');
            });
            openCloseMenu();
        });

        $('#mobile-menu ul li a').click(function(){
            $('#close_icon').css('display','none');
            $('#menu_icon').css('display','block');
        });

        // $('#mobile-menu').css('height', screen.height);
        var sm_top = screen.height - 183;
        if(sm_top<340)
            $('#mobile-menu .header-submenu').css('top', 340);
        else
            $('#mobile-menu .header-submenu').css('top', sm_top);

        $( window ).scroll(function() {
              // $('#mobile-menu').css('top', $('body').scrollTop());
              // $('#header-wrapper').css('top', $('body').scrollTop());
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



        $("#mobile-menu .header-menu a").click(function(e) {
            var idx = $(this).parent().index();
            var link = "";
            switch (idx) {
                case 0:
                    link = "#header-models-button";
                    break;

                // quote_comment:update,
                // To hide 'quote' option on the menu: comment case 3 and change case 5 to 4;
                // To show 'quote' option, viceversa.

//                case 3:
//                    link = "#quote-button";
//                    break;
                case 4: // case 4:
                    link = "#header-owners-button";
                    break;
            }
            openCloseMenu();
            $(link).trigger("click");
            $("#header-mobile i").removeClass("header-mobile-icon-active");

        });

        // $("#mobile-menu .header-submenu a").click(function(e) {
        //     var idx = $(this).parent().index();
        //     var link = "";
        //     switch (idx) {
        //         // case 0:
        //         //     link = "#header-models-button";
        //         //     break;
        //     }
        //     openCloseMenu();
        //     $(link).trigger("click");
        //     $("#header-mobile i").removeClass("header-mobile-icon-active");

        // });

        $('body').on('click', '#fire-test', function(e) {
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

        $("#footer-content .row-1 .footer-column").click(function() {
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

        $('.mobile_newsletter').click(function(){
            openCloseMenu();
        });
    }

    //Returns HTML for each header's section and adds a Close button if is required
    $.get_header_html = function(section) {
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
            $panelTabsNav.each(function(i) {
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
    $.test_drive_form = function(data, callback) {
        //car_key         : ''
        //concessionaire  : ''
        //date            : ''
        //email           : ''
        //name            : ''
        //lastname        : ''
        //newsletter      : ''
        //phone           : ''
        //source          : ''
        var service_url = '/motos/services/request/test_drive';
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
            success: function(data) {

                if (data.status == 'ok') {
                    if (callback) {
                        callback();
                    }
                } else {
                    alert(data.message);
                }
                $("#header_send_td").removeAttr('disabled').css({
                    opacity: 1
                });
                $("#models_send_td").removeAttr('disabled');


            },
            url: service_url
        });
    }
    $.test_drive_header_form = function() {
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

                $.test_drive_form(data, function() {

                    var precio_actual = showMeTheMoney(tdh_data.key);
                    analytics_test_drive('Header_' + tdh_data.key, 0.071 * precio_actual);
                    $('#test_drive_form').hide();
                    $('#test_drive_resume').fadeIn();
                    $('html, body').animate({
                        scrollTop: '0px'
                    }, 400);
                });
                $('#tdr_email').html(data.email);
                $('#tdr_concessionaire').attr({
                    href: '/concesionarias/suzuki-' + tdh_data.concessionaire_key
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
    $.start_header_listeners = function(section, options) {
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

                $('li.td-nav-tabs a').on('click', function(e) {
                    e.preventDefault();
                    if (!$(this).parent().is('.disabled')) {
                        goto_step($(this).data('number'))
                    }
                });

                //Select car at first screen or auto select it
                $.test_drive_select_car = function(k) {
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

                $('#car_select_list').delegate('a', 'click', function(e) {
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
                $("#change-car-test").on('click', function(e) {
                    e.preventDefault();
                    $("#car_select_name, #car_select_preview").hide();
                    $("#car_select_list").fadeIn();
                });
                //Just go to other step when button was clicked
                $('a.test-drive-goto').on('click', function(e) {
                    e.preventDefault();
                    if (IS_MOBILE) {
                        if ($(this).data('step') == "1") {
                            $("#car_select_name, #car_select_preview").hide();
                            $("#car_select_list").fadeIn();
                        }
                    }
                    goto_step($(this).data('step'));
                });

                $('#concessionaires_list').delegate('.td-concessionaire-button', 'click', function(e) {
                    e.preventDefault();
                    ga('send', 'event', 'Prueba de Manejo', 'Paso_3', 'Header_Fecha_Datos');
                    td_select_concessionaire($(this).data('id'));
                    goto_step(3);
                });
                $('#resetConcessionaire').on('click', function(e) {
                    e.preventDefault();
                    $('#concessionaires_list .list').html('');
                    $('#input_concessionaire .input').hide().fadeIn();
                    $('#concessionaires_search').val('').focus();
                });
                $('#tdr_end').on('click', function(e) {
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
                $('#htd_date').on('focusout', function() {
                    clearTimeout(date_timeout);
                    date_timeout = setTimeout(function() {
                        var $input = $('#htd_date');
                        $.validate_input($input);
                    }, 250);
                });
                $('#htd_name').on('focusout', function() {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#htd_lastname').on('focusout', function() {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#htd_email').on('focusout', function() {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#htd_tel').on('focusout', function() {
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
                google.maps.event.addListener(autocomplete, 'place_changed', function() {
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

                $panelTabsNav.children('a').on('click', function(e) {
                    e.preventDefault();
                    if (!$(this).parent().is('.disabled')) {
                        goto_step($(this).data('number'))
                    }
                });
                $.funding_adjust_calc = function() {
                    var f_amount = funding_data.price * (funding_data.engagement / 100),
                        total_pay = funding_data.price - f_amount,
                        //                        total_pay       =  funding_data.price -  f_amount,
                        f_monthly_pay = funding_core(total_pay, funding_data.months);
                    $('#live-engagement,#funding_result_engagement,#funding_resume_engagement').html(moneyFormat(f_amount));
                    $('#live-months,#funding_result_months,#funding_resume_months').html(funding_data.months + ' meses');
                    $('#live-price,#funding_result_price,#funding_resume_price').html(moneyFormat(funding_data.price));
                    $('#funding_result_monthly_payment,#funding_resume_monthly_payment').html(moneyFormat(f_monthly_pay));
                }
                $.funding_select_version = function(ii) {
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
                $.funding_select_car = function(k) {
                    var car_data = get_car_data(k),
                        $icons = $('#car_select_preview .car_thumb_160 .car, #fu_adjust_car .car_thumb_60 .car, #funding_result_data .car_thumb_60 .car, #funding-resume-car .car_thumb_60 .car'),
                        $car_texts = $('#car_select_name h3, #step-nav-tab h3, #fu_adjust_car h3, #funding_result_data h3, #funding-resume-car h3');

                    fuh_data.key = k;


                    var anio = '2015';
                    //                    if(car_data.key == 'swift-sport'){
                    //                        anio = '2013';
                    //                    }

                    if(car_data.key == "ciaz"){
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


                $.send_funding = function() {
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
                    if (extended > 0) {

                        if (!$.validate_input($tel)) {
                            form_errors++;
                            $tel.focus();
                        }
                    } else {

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
                    }
                    if (form_errors == 0) {
                        var data = {
                            car_key: fuh_data.key,
                            car_version: fuh_data.car_version,
                            email: $email.val(),
                            engagement: funding_data.engagement,
                            months: funding_data.months,
                            name: $name.val(),
                            lastname: $lastname.val(),
                            newsletter: ('#funding-newsletter:checked').length,
                            source: 'Funding'
                        }

                        $('#funding_resume_email').html(data.email);
                        $('#header-financiamiento li.step-nav-tabs').addClass('disabled');
                        data.concessionaire_key = conce_d.key;

                        if (extended > 0) {
                            data.phone = $tel.val();
                            $('#funding_resume_concessionaire').text(conce_d.name).attr({
                                href: '/concesionarias/suzuki-' + conce_d.key
                            });
                            ga('send', 'event', 'Financiamiento', 'Confirmacion_Prueba', 'Header_' + fuh_data.key, 0.012 * funding_data.price);
                        } else {
                            ga('send', 'event', 'Financiamiento', 'Confirmacion_No_Prueba', 'Header_' + fuh_data.key, 0.012 * funding_data.price);
                        }
                        var service_url = '/services/request/financing';
                        $.ajax({
                            cache: false,
                            data: data,
                            dataType: 'json',
                            type: 'post',
                            success: function(data) {
                                if (data.status == 'ok') {
                                    $('#funding_form').hide();
                                    $('#funding_resume').fadeIn();

                                } else {
                                    alert(data.message);
                                }

                            },
                            url: service_url
                        });



                    }

                };


                $('#hfu_name').on('focusout', function() {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#hfu_lastname').on('focusout', function() {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#hfu_email').on('focusout', function() {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('#hfu_tel').on('focusout', function() {
                    var $input = $(this);
                    $.validate_input($input);
                });
                $('input[name="hfu_drive"]').on('change, click', function(e) {
                    if ($(this).val() > 0) {
                        $('.funding-hidden-inputs').show();
                    } else {
                        $('.funding-hidden-inputs').hide();
                    }
                });
                $('#drive_no').trigger('click');
                $('#tdr_end').on('click', function() {
                    $.openPanel('');
                });
                $('#tdcs').concessionaire_selector({
                    callback: function(data) {
                        conce_d = {
                            key: this.id,
                            name: this.name
                        };
                        $.error_bubble($('#tdcss'), false, 'Elije tu concesionaria');
                    }
                });
                $('#tdcs').delegate('select', 'change', function() {
                    if ($('#tdcs select').length > 0) {
                        if ($('#tdcs select').length > 1) {
                            $('#error_concessionaire').css({
                                marginLeft: 250
                            });
                        }
                    }

                })

                $("#car_engagement_slider").slider({
                    change: function(event, ui) {
                        funding_data.engagement = ui.value;
                        $.funding_adjust_calc();
                    },
                    max: 80,
                    min: 20,
                    slide: function(event, ui) {
                        funding_data.engagement = ui.value;
                        $.funding_adjust_calc();
                        $(this).parent().children(".star").html(ui.value + "%");
                    },
                    step: 5,
                    value: 20

                });
                $("#car_months_slider").slider({
                    change: function(event, ui) {
                        funding_data.months = ui.value;
                        $.funding_adjust_calc();
                    },
                    max: 60,
                    min: 6,
                    slide: function(event, ui) {
                        funding_data.months = ui.value;
                        $.funding_adjust_calc();
                        $(this).parent().children(".star").html(ui.value);
                    },
                    step: 6,
                    value: 6

                });


                current_tab = -1;
                $('#funding-versions-tabs').delegate('a', 'click', function(e) {
                    e.preventDefault();
                    $.funding_select_version(parseInt($(this).data('version')));
                });
                $('#car_select_list').delegate('a', 'click', function(e) {
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
                $("#change-car-test").on('click', function(e) {
                    e.preventDefault();
                    $("#car_select_name, #car_select_preview").hide();
                    $("#car_select_list").fadeIn();
                });
                $('a.funding-goto').on('click', function(e) {
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
                    $("#fake-calculate").on('click', function(e) {
                        e.preventDefault();
                        $("#header-financiamiento .option-2, #fake-calculate").hide();
                        $(".funding-live-results, #modify-calc, #header-financiamiento .funding-goto").css("display", "block");
                    });
                    $("#modify-calc").on('click', function(e) {
                        e.preventDefault();
                        $(".funding-live-results, #modify-calc, #header-financiamiento .funding-goto").hide();
                        $("#header-financiamiento .option-2, #fake-calculate").css("display", "block");
                    });
                }
                break;
            case 'quote':

                var service_url = '/motos/servicesv2/quote/get_cars_versions',
                    $content_main = $('.header-section-content.quote'),
                    //Variables que se utilizarán en el proceso de selección de versión.
                    selected_year, selected_model, selected_version, selected_engagement, models_data = [],
                    selected_state, selected_dealer;

                function quote_step_height(h) {
                    $('#header-spacer').css('height', h);
                    $('#header-panel').css('height',h);
                    $('#header-sections-wrapper').css('height', h);
                }

                function quote_show_step_index(step) {
                    var $steps = $content_main.children('.screen'),
                        $step = $steps.eq(step);
                    $steps.removeClass('active').hide();
                    $step.removeClass('active').fadeIn();

                    if(IS_MOBILE){
                        if(step==3){
                            quote_step_height('800px');
                        }else if(step==4){
                            quote_step_height('545px');
                        }
                    }
                }

                if(IS_MOBILE){
                    $('#back-to-step-1, .close-menu-box').click(function(){
                        quote_step_height('632px');
                    });
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
                            break;
                        case 4:
                            selected_state = $('#quote-states').val();
                            selected_dealer = $('#quote-dealers').val();
                            if (selected_state) {
                                /*if (selected_dealer) {
                                    quote_show_step_index(3);
                                } else {
                                    alert('Selecciona tu concesionaria');
                                    return;
                                }*/
                                quote_show_step_index(3);
                            } else {
                                alert('Selecciona tu estado');
                                return;
                            }
                            //quote_show_step_index(3);
                            break;
                        case 5:
                            var $v_inputs = $('input.validate'),
                                $q_name = $('#quote-name'),
                                $q_last_name = $('#quote-last-name'),
                                $q_phone = $('#quote-phone'),
                                $q_email = $('#quote-email'),
                                form_errors = false;
                            $v_inputs.each(function() {
                                if (!$.validate_input($(this))) {
                                    $(this).focus();
                                    form_errors = true;
                                    return false;
                                }
                            });
                            if (form_errors) {
                                return false;
                            }

                            var data = {
                                'year': selected_year,
                                'model': selected_model,
                                'version': selected_version.version,
                                'state': selected_state,
                                //'concessionaire': $('#quote-dealers').val(),
                                'engagement': selected_engagement,
                                'name': $q_name.val(),
                                'last-name': $q_last_name.val(),
                                'phone': $q_phone.val(),
                                'email': $q_email.val(),
                                'drive': $('#quote-drive:checked').length,

                                'newsletter': $('#quote-promo:checked').length,
                                'price' : $('#quote-price').val()
                                    //,'fake'          : 1

                            };

                            var precio_cotizado = Math.round( selected_version.precio * 0.01 );

                            ga('send', 'event', 'Cotizador', selected_model + '_' + selected_version.version , data.state, ''+precio_cotizado+'');

                            SuzukiWeb.BlockScreen();
                            var send_url = '/services/request/financing';
                            var checkeddrive = $('#quote-drive:checked').length;

                            $.ajax({
                                'data': data,
                                'dataType': 'json',
                                'error': SuzukiWeb.ErrorHandler,
                                'beforeSend': function(){
                                    $('.loader_send').show();
                                    $('#quote-continue-step-final').prop({'disabled': true});
                                },
                                'success': function success(json_data) {
                                    SuzukiWeb.UnblockScreen();
                                    $('.loader_send').hide();
                                    $('#quote-continue-step-final').prop({'disabled': false});

                                    var template,html;
                                    if(json_data.data.months==='null' || json_data.data.companies.length===0){
                                        template = '<div class="form-wrapper"><p>Conoce el desglose de planes de financiamiento de acuerdo con el número de meses cotizados y el tipo de seguro según la empresa que desees contratar (seguro para moto y seguro de vida).</p><p>Para tu comodidad, te hemos enviado esta tabla a tu correo electrónico.</p></div><div class="form-wrapper" id="bnp-error"> ¡Ups! Parece que el sistema de cotización no está disponible. Por favor, vuelve más tarde en lo que lo solucionamos. </div>';
                                    }else{
                                        var companies = json_data.data.companies;

                                        for(var i=0; i<companies.length; i++){
                                            var company = companies[i];

                                            if(i%2 === 0)
                                                company.clase = 'gray';
                                            else
                                                company.clase = 'white';
                                        }

                                        var aseg_name = (IS_MOBILE) ? 'ASEG.' : 'ASEGURADORA';
                                        template = '<div class="form-wrapper"><p>Conoce el desglose de planes de financiamiento de acuerdo con el número de meses cotizados y el tipo de seguro según la empresa que desees contratar (seguro para moto y seguro de vida).</p><p>Para tu comodidad, te hemos enviado esta tabla a tu correo electrónico.</p></div><div class="form-wrapper" style="height: 160px"><table class="final-quote" cellspacing="0" cellpadding="0" style="border-color: white;"><thead><tr><th>'+aseg_name+'</th>{{#months}}<th>{{.}} meses</th>{{/months}}</tr></thead><tbody>{{#companies}}<tr class="{{clase}}"><td class="name {{name}}">{{name}}</td>{{#options}}<td>{{price_money}}</td>{{/options}}</tr>{{/companies}}</tbody></table></div>';
                                    }
                                    html = Mustache.render(template, json_data.data);

                                    $('#quote_result_table').html(html);
                                    quote_show_step_index(4);
                                },
                                'type': 'post',
                                'url': '/motos/servicesv2/quote/save_quote'
                            });

                            break;
                        default:
                            return false;
                            break;

                    }

                }

                $content_main
                    .delegate('#quote-models', 'change', function() {
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
                .delegate('#quote-states', 'change', function() {
                    var data = {'key': $('#quote-states').val()},
                        service_url = '/motos/services/templates/get_concessionaires_quote_dropdown';
                    $.ajax({
                        cache       : false,
                        data        : data,
                        dataType    : 'json',
                        type        : 'post',
                        success     : function( data ){
                            if(data.status && data.message==='ok'){
                                $('#quote-dealers').html('').trigger("chosen:updated");
                                $('#quote-dealers').append(data.options).val(data.selected).trigger("chosen:updated");
                            }
                            else if(data.message==='no versions')
                                $('#quote-dealers').html('').val(data.selected).trigger("chosen:updated");
                            else
                                console.log('error');
                        },
                        url     : service_url
                    });
                })

                // .delegate('#quote-years', 'change', function(e) {
                //     var data = {'key': $('#quote-models').val()},
                //         service_url = '/motos/services/templates/get_version_quote_dropdown';
                //     $.ajax({
                //         cache       : false,
                //         data        : data,
                //         dataType    : 'json',
                //         type        : 'post',
                //         success     : function( data ){
                //             if(data.status && data.message==='ok')
                //                 $('#quote-versions').append(data.options).val(data.selected).trigger("chosen:updated");
                //             else if(data.message==='no versions')
                //                 $('#quote-versions').html('').val(data.selected).trigger("chosen:updated");
                //             else
                //                 console.log('error');
                //         },
                //         url     : service_url
                //     });
                // })

                .delegate('#quote-years', 'change', function() {
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
                .delegate('#quote-versions', 'change', function() {
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
                    if (v < 20 || v > 90) {
                        $quote_engagement_percentage.slider({
                            value: 20
                        });
                        v = 20;
                    }
                    $quote_engagement_percentage.slider({
                        disabled: false,
                        value: v
                    });
                })
                .delegate('button.go-to-step', 'click', function() {
                    var step = parseInt($(this).data('step'), 10);
                    quote_goto_step(step);
                })
                .delegate('input.validate', 'focusout', function() {
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
                                json_data.data[index1][index2].sort(function(a, b) {
                                    return b.precio - a.precio;
                                })
                            }

                        }



                        // Eliminar datos harcode del quote mustache
                        //
                        $('#quote-models').empty()
                            .append('<option value="" disabled selected>Elige una categoría</option>');

                        // Colocar modelos en select de la respuesta del servicio
                        //
                        for (m in quoteModelos) {

                            // Excluir los SX4
                            if(m.indexOf('SX4') < 0){
                                $('#quote-models').append('<option value="' + m + '">' + m + '</option>');
                            }

                        }

                        models_data = json_data.data;

                        $("#quote-engagement-percentage").slider({
                            change: function(event, ui) {
                                percentage_changed(ui.value);
                            },
                            max: 90,
                            min: 20,
                            slide: function(event, ui) {
                                percentage_changed(ui.value);
                            },
                            step: 1,
                            value: 20,
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
    $.error_bubble = function($label, show, message) {
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

    $newsletter_name.on('focusout', function() {
        $.validate_input($newsletter_name);
    });
    $newsletter_email.on('focusout', function() {
        $.validate_input($newsletter_email);
    });

    $.newsletter_join_form = function() {

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
                source: 'Footer'
            };
            var service_url = '/motos/services/request/newsletter';
            var btn_newsletter = $('.button.red');
            $.ajax({
                cache: false,
                data: data,
                url: service_url,
                dataType: 'json',
                type: 'post',
                beforeSend: function(){
                    btn_newsletter.attr('disabled', true);
                },
                success: function(data) {
                    btn_newsletter.removeAttr('disabled');
                    if (data.status == 'ok') {
                        $newsletter_email.val('');
                        $newsletter_name.val('');
                        ga('send', 'event', 'Newsletter', 'Confirmacion', 'Footer', 100);
                    }
                    alert(data.message);
                },
                error: function(){
                    btn_newsletter.removeAttr('disabled');
                    alert("No pudimos suscribirlo a nuestro newsletter, por favor, inténtelo nuevamente.");
                }
            });
        }

    }

    //Loads html_sections_html contents
    $.ajax({
        url: '/motos/services/templates/header_contents',
        success: function(data) {
            main_menu_available = true;
            html_sections_html = data.data;
            if (preselected_click != null) {
                $.openPanel(preselected_click[0], preselected_click[1]);
                preselected_click = null;
            }
        }
    });
    //Loads concessionaires data
    $.ajax({
        url: '/motos/services/concessionaires/all',
        success: function(data) {
            concessionaires_data = data.data;
            if (geo_select_concessionaire_callback) {
                geo_select_concessionaire_callback();
            }
        }
    });
    $.ajax({
        url: '/motos/services/financing/car_prices',
        success: function(data) {
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

            $body.prepend(geo_alert);

            // var geo_listener = function() {
            //     var top = get_scroll_top();
            //     if (top > 0) {
            //         $('#geolocation-fixed').removeClass('active');
            //     } else {
            //         $('#geolocation-fixed').addClass('active');
            //     }
            // }

            $body.on('click', '#geolocalization-button', function(e) {
                e.preventDefault();
                $('#geolocation-fixed').removeClass('active');
                var tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);
                var tomorrow_time = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0, 0).getTime();
                geo_data.time = tomorrow_time;
                $(window).off('scroll', geo_listener);
            })

            .on('click', '#test-drive-open', function(e) {
                e.preventDefault();
                $('#header-test-drive-button').trigger('click');
            });

            $(window).scroll(geo_listener);

            geo_timeout = setTimeout(function() {
                clearTimeout(geo_timeout);
                $('#geolocation-fixed').addClass('active');
            });



            navigator.geolocation.getCurrentPosition(function(position) {
                clearTimeout(geo_timeout);
                clearTimeout(geo_timeout);

                $.ajax({
                    url: 'http://api.instantdrive.com.mx/v2/dealers/53c5c78a90f498310c5b1a63',
                    success: function(data) {


                        // Area
                        //
                        var objectsArea = $.map(data.area, function(value) {
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


            }, function() {
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
            // console.warn('  No hay Instant Drive =( ');
        }


    }

    init_geo_core();

    $body.append(preload_header_assets).append(dummy_alerts);


    //Auto animates if a hash param exists
    if (init_hash) {
        init_hash = init_hash.split('#').join('');
        if ($('a[name="' + init_hash + '"]').length > 0) {

            setTimeout(function() {
                $.scroll_to(init_hash);
            }, 1000);
        } else if (init_hash == 'prueba-de-manejo') {
            $.openPanel('test-drive');
        } else if (init_hash == 'modelos') {
            $.openPanel('models');
        }
    }

    if (IS_MOBILE) {
        $("body").on("click", ".header-column", function() {
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

        $("body").on("click", ".back-list-arrow", function() {
            var header_column_open = $(".header-column-open");
            $(".header-links-list").removeClass("header-links-open");
            header_column_open.removeClass("header-column-open");
            $(".links-list").hide();
            $(".header-column").fadeIn();
        });
    }

    //hash para abrir el menu de mi suzuki automáticamente
    if (window.location.hash == '#mi-suzuki') {
        $('#header-owners-button').trigger('click');
    }
    //$('#header-owners-button').trigger('click');

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
    $body.append(html_messages).delegate('a.popoverbox', 'mouseover mouseout click', function(event) {
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
    }

    $('.category_link').click(function(){
        if(window.location.pathname === '/motos/catalogo')
            location.reload();
    });


    $('#cotizar_link').click(function(){
        $('#quote-button').trigger('click');
    });


});
