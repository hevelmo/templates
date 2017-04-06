/* ------------------------------------------------------ *\
    [Variables] var
\* ------------------------------------------------------ */
    var section;
    // Back to Top
    var offset, offset_opacity, scroll_top_duration;
    offset = 300;
    offset_opacity = 1200;
    scroll_top_duration = 700;
    // FAVICON
    var $favico;
/* ------------------------------------------------------ *\
    [functions] detectmobile
\* ------------------------------------------------------ */
    // http://jstricks.com/detect-mobile-devices-javascript-jquery/
    function detectmobile(){
        IS_MOBILE = false;
        if( isMobile.any() ){
            IS_MOBILE = true;
            //console.log(IS_MOBILE);
        } else {
            //console.log(IS_MOBILE);
        }
        return IS_MOBILE;
    };
/* ------------------------------------------------------ *\
    [Methods] isMobile
\* ------------------------------------------------------ */
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
/* ------------------------------------------------------ *\
    [Metodos] backToTopMethod
\* ------------------------------------------------------ */
    var backToTopMethod = {
        backToTop: function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
                }, scroll_top_duration
            );
        },
        windowScroll: function() {
            ( $(this).scrollTop() > offset ) ? $(domEl._back_to_top).addClass('cd-is-visible') : $(domEl._back_to_top).removeClass('cd-is-visible cd-fade-out');
            if ( $(this).scrollTop() > offset_opacity ) {
                $(domEl._back_to_top).addClass('cd-fade-out');
            }
        },
        init_window_scroll_top: function() {
            $(window).scroll(backToTopMethod.windowScroll);
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] favicon
\* ------------------------------------------------------ */
    var favicon = {
        load_favicon: function() {
            $favico = 'img/logo/ico/favico.ico';
            favicon.change($favico);
        },
        change: function(iconURL, optionalDocTitle) {
            if (arguments.length == 2) {
              document.title =  optionamDocTitle;
            }
            this.addLink(iconURL, "shortcut icon");
        },
        addLink: function(iconURL, relValue) {
            var link = document.createElement("link");
            link.type = "image/x-icon";
            link.rel = relValue;
            link.href = iconURL;
            this.removeLinkIfExists(relValue);
            this.docHead.appendChild(link);
        },
        removeLinkIfExists: function(relValue) {
            var links = this.docHead.getElementsByTagName("link");
            for (var i=0; i<links .length; i++) {
              var link = links[i];
              if (link.type=="image/x-icon" && link.rel==relValue) {
                this.docHead.removeChild(link);
                return; // Assuming only one match at most.
              }
            }
        },
        docHead:document.getElementsByTagName("head")[0]
    }
/* ------------------------------------------------------ *\
    [Methods] wow_animated_methods
\* ------------------------------------------------------ */
    var wow_animated_methods = {
        wow_animated: function() {
            /*==WOW JS==*/
            var ww = $(window).width();

            /*==WOW JS==*/
            if(ww > 480){
                wow = new WOW({
                    animateClass: 'animated',
                    offset: 0
                });
                wow.init();
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] sticky_wrapper_methods
\* ------------------------------------------------------ */
    var sticky_wrapper_methods = {
        sticky_wrapper: function() {
            $('.navbar').waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: 'sticky'
            });
        },
        sticky_wrapper_action_bar: function() {
            $('.actions-bar').waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper-action-bar" />',
                stuckClass: 'tsticky'
            });
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] mobile_menu_methods
\* ------------------------------------------------------ */
    var mobile_menu_methods = {
        mobile_menu_toggle: function(event) {
            IS_MOBILE = detectmobile(navigator.userAgent||navigator.vendor||window.opera);
            mediaquery = window.matchMedia("(max-width: 768px)");
            if ( IS_MOBILE == true ) {
                $(this).toggleClass("opened");
                $(".toggle-menu").slideToggle();
                $(".site-header-wrapper").toggleClass("sticktr");
                $(".body").toggleClass("sticktr");
                var SHHH = $(".site-header").innerHeight();
                var NBHH = $(".navbar").innerHeight();
                var THHH = $(".top-header").innerHeight();
                $(".toggle-menu").css("top",NBHH);
                $(".header-v2 .toggle-menu").css("top",SHHH);
                $(".header-v3 .toggle-menu").css("top",SHHH + THHH);
                //console.log('open');
                return false;
            }
            if (mediaquery.matches) {
               // mediaquery es 768px
                $(this).toggleClass("opened");
                $(".toggle-menu").slideToggle();
                $(".site-header-wrapper").toggleClass("sticktr");
                $(".body").toggleClass("sticktr");
                var SHHH = $(".site-header").innerHeight();
                var NBHH = $(".navbar").innerHeight();
                var THHH = $(".top-header").innerHeight();
                $(".toggle-menu").css("top",NBHH);
                $(".header-v2 .toggle-menu").css("top",SHHH);
                $(".header-v3 .toggle-menu").css("top",SHHH + THHH);
                //console.log('open');
                //console.log('mediaquery es 768px');
                return false;
            } else {
              // mediaquery no es 768px
              //console.log('mediaquery no es 768px');
            }
        },
        close_menu_toggle: function(event) {
            IS_MOBILE = detectmobile(navigator.userAgent||navigator.vendor||window.opera);
            mediaquery = window.matchMedia("(max-width: 768px)");
            if ( IS_MOBILE == true ) {
                $("#menu-toggle").removeClass('opened');
                $(".toggle-menu").slideToggle();
                //console.log('responsive');
            }
            if (mediaquery.matches) {
               // mediaquery es 768px
               $("#menu-toggle").removeClass('opened');
                $(".toggle-menu").slideToggle();
               //console.log('mediaquery es 768px');
            } else {
              // mediaquery no es 768px
              //console.log('mediaquery no es 768px');
            }
        },
        has_menu_toggle: function() {
            if($("#menu-toggle").hasClass("opened")){
                $(".toggle-menu").css("display","block");
            } else {
                $("#menu-toggle").css("display","none");
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] windowWidthMethod
\* ------------------------------------------------------ */
    var windowWidthMethod = {
        windowWidth: function() {
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            if (windowWidth > 900) { // Medium breakpoint
                var heroCarousels = document.querySelectorAll(".HeroCarousel");
                var carousel, yOffset, element, carouselHeight;
                var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

                for (var i = 0; i < heroCarousels.length; i++) {
                    carousel = heroCarousels[i];
                    yOffset = 0;
                    element = carousel;

                    while (element) {
                        yOffset += (element.offsetTop - element.scrollTop + element.clientTop);
                        element = element.offsetParent;
                    }

                    carouselHeight = windowHeight - yOffset;

                    if (carouselHeight > 450) {
                        carousel.style.height = carouselHeight + "px";
                    }
                }
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] one_page_nav_methods
\* ------------------------------------------------------ */
    var one_page_nav_methods = {
        one_page_nav: function() {
            $('.navigation-bar').onePageNav({
                currentClass: false,
                changeHash: true,
                scrollSpeed: 750,
                scrollThreshold: 0.5,
                easing: 'swing'
            });
        },
        one_page_nav_scroll_down: function() {
            $('.scroll-down').smoothScroll({
                offset: -80,
                easing: 'easeInExpo',
                speed: 500,
                // $.fn.smoothScroll only: whether to prevent the default click action
                preventDefault: true
            });
        }
    }
/* ------------------------------------------------------ *\
    [Methods] INPUTS RADIO, CHECKBOX
\* ------------------------------------------------------ */
    var changeInputsMethods = {
        clickChangeCheckbox : function(event) {
            if ($(".label-checkbox").length) {
                $('.label-checkbox input:checked').each(function(){
                    $(this).parent('label').addClass('checkbox-checked');
                });
            }
            if ($(this).is(':checked')) {
                $(this).parent('.label-checkbox').find(':checkbox').attr('checked', true);
                $(this).parent('.label-checkbox').addClass('checkbox-checked');
                $(this).val('1');
                $('#contact_subscription').val('Activado');
                $('#test_drive_model_subscription').val('Activado');
            } else {
                $(this).parent('label').find(':checkbox').attr('checked', false);
                $(this).parent('label').removeClass('checkbox-checked');
                $(this).val('0');
                $('#contact_subscription').val('Desactivado');
                $('#test_drive_model_subscription').val('Desactivado');
            }
        },
        clcikChangeRadio : function(event) {
            if ($(".label-radio").length) {
                $('.label-radio input:checked').each(function(){
                    //$(this).parent('label').addClass('radio-checked');
                });
            }
            if ($(this).hasClass('radio-checked')) {
                $(this).find(':radio').attr('checked', true);
                $(this).addClass("radio-checked");
            } else {
                $(".label-radio").removeClass("radio-checked");
                $(".label-radio").find(':radio').attr('checked', false);
                $(this).find(':radio').attr('checked', true);
                $(this).addClass("radio-checked");
            }
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] click_go_method
\* ------------------------------------------------------ */
    var click_go_method = {
        click_go_home: function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            click_go_method.return_home();
            mobile_menu_methods.mobile_menu_toggle();
        },
        click_go_discovery_sport: function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            click_go_method.return_home();
            mobile_menu_methods.mobile_menu_toggle();
        },
        click_go_jaguar_xe: function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: "575" }, 999, 'easeOutExpo' );
            click_go_method.return_home();
            mobile_menu_methods.mobile_menu_toggle();
        },
        click_go_service: function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: "1150" }, 999, 'easeOutExpo' );
            click_go_method.return_home();
            mobile_menu_methods.mobile_menu_toggle();
        },
        click_go_contact: function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: "1730" }, 999, 'easeOutExpo' );
            click_go_method.return_home();
            mobile_menu_methods.mobile_menu_toggle();
        },
        return_home: function() {
            Finch.navigate('/');
        },
        clock_go_financing_by_model: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );

            var data_model_key, data_model_name, data_agencie_name, data_agencie_key;

            data_model_key = $(this).data('model-key');
            data_model_name = $(this).data('model-name');
            data_agencie_name = $(this).data('agencie-name');
            data_agencie_key = $(this).data('agencie-key');

            //ga('send', 'event', 'Cotización', 'Modelo: ' + $dataModelName, 'Financiamiento modelo: ' + $dataModelName);
            //console.log("ga('send', 'event', 'Cotización', 'Modelo: '" + $dataModelName + "', 'Financiamiento modelo: '" + $dataModelName + "');");

            AUD.setValue('#hidden-model-key', data_model_key);
            AUD.setValue('#hidden-model-name', data_model_name);
            AUD.setValue('#hidden-agencie-name', data_agencie_name);
            AUD.setValue('#hidden-agencie-key', data_agencie_key);

            Finch.navigate('/financiamiento/' + data_model_key);
            console.log(data_model_key);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] current_section_method
\* ------------------------------------------------------ */

/* ------------------------------------------------------ *\
    [Metodos] view_navbar_method
\* ------------------------------------------------------ */
    var view_navbar_method = {
        view_navbar: function() {
            view_navbar_method.recurrent_navbar();
            view_navbar_method.load_templates_navbar();
        },
        load_templates_navbar: function() {
            AUD.loadTemplate(tempsNames.tmp_start_site_navbar, domEl._start_site_navbar_name);
        },
        recurrent_navbar: function() {
            var data_navbar = [
                ['header', {'id':domEl._start_site_navbar, 'class':'navbar navigation-bar navigation-bar-header _content'}, '', 1]
            ];
            AUD.appendMulti(domEl._navbar_recurrent, data_navbar);
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] view_home_method
\* ------------------------------------------------------ */
    var view_home_method = {
        view_home: function() {
            view_home_method.recurrent_home();
            view_home_method.loadTemplatesBanner_audi_a1();
            view_home_method.loadTemplatesBanner_audi_a4();
            view_home_method.loadTemplatesBanner_audi_q3();
            view_home_method.load_templates_home();
            //mapsMethod.initMap();
            //mapsMethod.loadMap();
        },
        loadTemplatesBanner_audi_q3: function() {
            AUD.loadTemplate(tempsNames._audi_q3, domEl._audi_q3_name);
        },
        loadTemplatesBanner_audi_a4: function() {
            AUD.loadTemplate(tempsNames._audi_a4, domEl._audi_a4_name);
        },
        loadTemplatesBanner_audi_a1: function() {
           AUD.loadTemplate(tempsNames._audi_a1, domEl._audi_a1_name);
        },
        load_templates_home: function() {
            AUD.loadTemplate(tempsNames.tmp_start_site_agencie, domEl._start_site_agencie_name);
            AUD.loadTemplate(tempsNames.tmp_start_site_agencie_map, domEl.start_site_agencie_map);
        },
        recurrent_home: function() {
            var data_banners = [
                ['div', {'id':'audi-a1'}, '', 1],
                ['div', {'id':domEl._audi_a1, 'class':'_content'}, '', 1],
                //['div', {'id':'audi-a4'}, '', 1],
                //['div', {'id':domEl._audi_a4, 'class':'_content'}, '', 1],
                ['div', {'id':'audi-q3'}, '', 1],
                ['div', {'id':domEl._audi_q3, 'class':'_content'}, '', 1]
                //['div', {'id':'contacto'}, '', 1],
                //['div', {'id':domEl._start_site_agencie, 'class':'_content'}, '', 1]
            ];
            AUD.appendMulti(domEl.div_recurrent, data_banners);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] views_service_method
\* ------------------------------------------------------ */
    var views_service_method = {
        views_service: function() {
            views_service_method.recurrent_service();
            views_service_method.load_templates_service();
        },
        load_templates_service: function() {
            AUD.loadTemplate(tempsNames.tmp_start_site_service_page_header, domEl._start_site_page_header_name);
            AUD.loadTemplate(tempsNames.tmp_start_site_service_content_form, domEl._start_site_form_services_name);
            set_form_service_method.refreshForm();
        },
        recurrent_service: function() {
            var data_service = [
                ['div', {'id':domEl._start_site_page_header, 'class':'_content'}, '', 1],
                ['section', {'id':domEl._start_site_form_services, 'class':'large-pad _content', 'style':'padding: 45px 0 45px;'}, '', 1]
            ];
            AUD.appendMulti(domEl.div_recurrent, data_service);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] set_form_service_method
\* ------------------------------------------------------ */
    var set_form_service_method = {
        data_service: function() {
            var data, urlApi, postApi;
            data = $(domEl._service_form).serializeFormJSON();
            urlApi = urlsApi.getService;
            postApi = AUD.postalService(urlApi, data);
            return postApi;
        },
        fillingControl: function() {
            var validFieldName, dataApi, isFull, isNoEmpty;
            validFieldName = ['nombre', 'apellidos', 'correo', 'telefono', 'mensaje'];
            dataApi = $(domEl._service_form).serializeFormJSON();
            console.log(dataApi);
        },
        refreshForm: function() {
            var $btnSend;
            $btnSend = $('.send_contact_form');

            $('#loader_send_icon').css('display', 'none');

            AUD.loadTemplate(tempsNames.tmp_start_site_form_service, domEl.service_form);
            //$('.seleccionar').chosen();
            //set_form_leads_method.set_input_hidden();

            $btnSend.removeAttr('disabled');
        },
        resetForm: function() {
            var $btnSend;
            $btnSend = $('.send_contact_form');

            AUD.resetForm(domEl._service_form);

            $('#loader_send_icon').css('display', 'none');

            $btnSend.removeAttr('disabled');
        },
        keyInput: function() {
            set_form_service_method.fillingControl();
        },
        send_form_service: function() {
            var $name, $lastname, $email, $phone, $message, $btnSend, form_errors;
            $name = $('#service_name');
            $lastname = $('#service_lastname');
            $email = $('#service_email');
            $phone = $('#service_phone');
            $message = $('#service_message');

            $btnSend = $('.send_contact_form');
            form_errors = 0;

            $btnSend.removeAttr('disabled');
            if ( !$.validate_input( $message )) {
                form_errors++;
                $message.focus();
            }
            if ( !$.validate_input( $phone )) {
                form_errors++;
                $phone.focus();
            }
            if ( !$.validate_input( $email )) {
                form_errors++;
                $email.focus();
            }
            if ( !$.validate_input( $lastname )) {
                form_errors++;
                $lastname.focus();
            }
            if ( !$.validate_input( $name )) {
                form_errors++;
                $name.focus();
            }
            if ( form_errors == 0 ) {
                $btnSend.css('cursor', 'auto').prop('disabled', true);
                $('#loader_send_icon').css('display', 'block');

                senndServicePromise = set_form_service_method.data_service();
                senndServicePromise.success( function (data) {
                    //console.log('Entra promise success');
                    //console.log(data);
                    setTimeout(function () {
                        //console.log("Correo Enviado...");
                        setTimeout(function () {
                            $('#form-wrapper').fadeOut(1000);
                            var correo, agencie;
                            correo = $('#service_email').val();
                            $('#email-from').text(correo);
                            $('.form-thanks').fadeIn(1000);
                            setTimeout(function() {
                                set_form_service_method.fillingControl();
                                set_form_service_method.resetForm();
                                setTimeout(function() {
                                    $('#form-wrapper').fadeIn(1000);
                                    $('.form-thanks').fadeOut(1000);
                                }, 3400);
                            }, 1800);
                        }, 1800);
                    }, 1400);
                });
                senndServicePromise.error( function (data) {
                    //console.log('Entra promise error');
                    //console.log(data);
                    set_form_service_method.resetForm();
                });
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] mapsMethod
\* ------------------------------------------------------ */
    var mapsMethod = {
        initMap : function() {
            var mapOptions3 = {
                center: new google.maps.LatLng(20.701851,-103.366594),//Universidad
                zoom: 16,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                },
                scrollwheel: false
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions3);
            var marker2 = new google.maps.Marker({
                position: map.getCenter(),
                map: map,
                title: 'JAGUAR LAND ROVER COUNTRY',
                icon: "img/pin.png" //custom pin icon
            });
            var popup = new google.maps.InfoWindow({
                content:
                    '<div class="marker-info-win" style="text-align: center;">'+
                    '<div class="marker-inner-win"><span class="info-content">'+
                    '<img src="img/logo/logo-jaguar-land-rover-contry.png" alt="" style="margin-botton: 0px; margin: 0 auto; display: block;" width="100">'+
                    '<h5 class="marker-heading" style="color:#000; margin-botton: 0px; display: block;">JAGUAR LAND ROVER COUNTRY</h5>'+
                    '<span>Av. Circ. Jorge Álvarez del Castillo 1443 Jardines del Country 44610 Guadalajara, Jal. México</span>' +
                    '</span>'+
                    '</div></div>'
            });
            attachInfoWindowToMarker(map, marker2, popup);
            function attachInfoWindowToMarker( map, marker, infoWindow ){
                infoWindow.open(map, marker);
            }
        },
        loadMap : function() {
            google.maps.event.addDomListener(window, 'load', mapsMethod.initMap());
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] view_leads_financing_method
\* ------------------------------------------------------ */
    var view_leads_financing_method = {
        view_leads_financing: function() {
            view_leads_financing_method.recurrent_leads_financing();
            view_leads_financing_method.load_templates_leads_financing();
        },
        load_templates_leads_financing: function() {
            AUD.loadTemplate(tempsNames.tmp_start_site_financing_page_header, domEl._start_site_page_header_name);
            AUD.loadTemplate(tempsNames.tmp_start_site_financing_content_leads_form, domEl._start_site_content_leads_form_name);
        },
        recurrent_leads_financing: function() {
            var data_leads_financing = [
                ['div', {'id':domEl._start_site_page_header, 'class':'_content'}, '', 1],
                ['section', {'id':domEl._start_site_content_leads_form, 'class':'large-pad _content', 'style':'padding: 45px 0 45px;'}, '', 1]
            ];
            AUD.appendMulti(domEl.div_recurrent, data_leads_financing);
        }
    }
/* ------------------------------------------------------ *\
    [functions] getAbsolutePath
\* ------------------------------------------------------ */
    function getAbsolutePath() {
        var loc = window.location;
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
        return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    }
/* ------------------------------------------------------ *\
    [Methods] set_form_leads_method
\* ------------------------------------------------------ */
    var set_form_leads_method = {
        data_max_leads_api: function() {
            var dataApi, dataRenowned, $model, $url, day, f, month, dateFormat;
            day = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
            f = new Date();
            month = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

            dateFormat = month[f.getMonth()] + " " + f.getFullYear();

            dataApi = $(domEl._form_leads).serializeFormJSON();
            $model = AUD.getValue('#hidden_model_name');
            $model_key = AUD.getValue('#hidden_model_key');

            //console.log('Guarda datos MAX.');
            //console.log(dataApi);

            dataRenowned = AUD.renameArrayObjKeys([dataApi], {
                'name': 'nombre',
                'lastname': 'apellidos' ,
                'email': 'correo',
                'phone': 'telefono',
                'comment': 'mensaje',
                'news': 'newsletter'
            });
            dataRenowned = dataRenowned[0];

            $url = getAbsolutePath();
            //console.log($url);

            dataRenowned['product'] = $model;
            dataRenowned['web_max'] = $url + '#/financiamiento/'+ $model_key;
            dataRenowned['business_max'] = '21';
            dataRenowned['origen_type'] = '2';
            dataRenowned['campaign_max'] = 'Cotización ' + $model;
            //console.log(dataRenowned);

            return SUK.postalService('http://clicktolead.com.mx/api/v1/remote/action', dataRenowned);
        },
        data_fiancing_by_model: function() {
            var data, $model, urlApi, postApi;
            data = $(domEl._form_leads).serializeFormJSON();

            // CHECKBOX
            data['newsletter'] = (data['newsletter'] == '1') ? data['newsletter'] : '0';
            // RADIO
            data['test_drive'] = (data['test_drive'] == 'Sí deseas manejarlo') ? data['test_drive'] : 'No deseas manejarlo';
            //console.log(data);

            $model = AUD.getValue('#hidden_model_key');

            urlApi = urlsApi.getFinancingByModel + $model;
            postApi = AUD.postalService(urlApi, data);
            //console.log(postApi);
            return postApi;
        },
        fillingControl: function() {
            var validFieldName, dataApi, isFull, isNoEmpty;
            validFieldName = ['nombre', 'apellidos', 'correo', 'telefono', 'mensaje'];
            dataApi = $(domEl._form_leads).serializeFormJSON();
            //console.log(dataApi);
        },
        refreshForm: function() {
            var $btnSend;
            $btnSend = $('.send_contact_form');

            AUD.loadTemplate(tempsNames.start_site_form_leads, domEl.leads_financing_form);
            //$('.seleccionar').chosen();
            set_form_leads_method.set_input_hidden();

            $btnSend.removeAttr('disabled');
        },
        resetApi: function() {
            var $btnSend;
            $btnSend = $('.send_contact_form');

            AUD.resetForm(domEl._form_leads);

            $('#loader_send_icon').css('display', 'none');
            
            $('#fieldset-radio-checkbox-yes label').removeClass('radio-checked');
            $('#fieldset-radio-checkbox-yes label input').removeAttr('checked');

            $('#fieldset-radio-checkbox-no label').addClass('radio-checked');
            $('#fieldset-radio-checkbox-no label input').attr('checked');

            $('#checkbox-news label').removeClass('checkbox-checked');
            $('#checkbox-news label input').removeAttr('checked');
            
            $btnSend.removeAttr('disabled');
        },
        keyInput: function() {
            set_form_leads_method.fillingControl();
        },
        set_input_hidden: function() {
            var $model, $model_key, replace_model, new_model_name, $url;
            $model = AUD.getValue('#hidden_model_name');
            $model_key = AUD.getValue('#hidden_model_key');
            $agencie = AUD.getValue('#hidden_agencie_name');
            $agencie_key = AUD.getValue('#hidden_agencie_key');

            $url = getAbsolutePath();
            set_input_hidden = [
                ['input', {'id' : 'leads_image_model', 'class' : 'set_input_hidden', 'value' : 'thumb-' + $model_key + '.png', 'name' : 'image_model', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'leads_name_model', 'class' : 'set_input_hidden', 'value' : $model, 'name' : 'name_model', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'leads_concessionaire', 'class' : 'set_input_hidden', 'value' : $agencie_key, 'name' : 'concesionaria', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'leads_agencie', 'class' : 'set_input_hidden', 'value' : $agencie, 'name' : 'agencie', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'leads_url', 'class' : 'set_input_hidden', 'value' : $url, 'name' : 'url', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'leads_model_key', 'class' : 'set_input_hidden', 'value' : $model_key, 'name' : 'key_model', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'leads_subscription', 'class' : 'set_input_hidden', 'value' : '', 'name' : 'subscription', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'leads_testdrive', 'class' : 'set_input_hidden', 'value' : '', 'name' : 'testdrive', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'leads_campaign', 'class' : 'set_input_hidden', 'value' : 'Cotización ' + $model, 'name' : 'campaign_model', 'type' : 'hidden'}, '', 0]            
            ];
            AUD.appendMulti('#funding_fields_hidden', set_input_hidden);
        },
        send_form_leads: function() {
            var $concessionaire, $model, $name, $lastname, $email, $phone, $message, $test_drive, $news, $url, $btnSend, form_errors;

            $concessionaire = $('#leads_concessionaire');
            $model = $('#leads_model');
            $name = $('#leads_name');
            $lastname = $('#leads_lastname');
            $email = $('#leads_email');
            $phone = $('#leads_phone');
            $message = $('#leads_message');
            $test_drive = $('input[name="test_drive"]:checked');
            $news = $('#leads_newsletter');

            $url = getAbsolutePath();
            //console.log($url);

           // val_concessionaire = $concessionaire.val();
            //console.log(val_concessionaire);
            /*if ( val_concessionaire != null && val_concessionaire != '' ) {
                replace_concessionaire = AUD.replaceAll(val_concessionaire, '-', ' ');
                replace_concessionaire_acute = AUD.replaceAll(replace_concessionaire, 'lopez', 'lópez');
                new_concessionaire_name = AUD.ucWords(replace_concessionaire_acute);
                //console.log(new_concessionaire_name);

                AUD.setValue($('#leads_agencie'), new_concessionaire_name);
            }*/
            AUD.setValue($('#leads_url'), $url);
            
            $btnSend = $('.send_contact_form');
            form_errors = 0;

            val_test_drive = $test_drive.val();
            val_news = $news.val();
            //console.log(val_test_drive);
            //console.log(val_news);
            $btnSend.removeAttr('disabled');

            // VALIDATE TEST DRIVE
            if ( val_test_drive === '1' ) {
                    val_testdrive = 'Sí deseas manejarlo';
                    //console.log(val_testdrive);
                    AUD.setValue($('#leads_testdrive'), val_testdrive);
                    ga('send', 'event', 'Financiamiento', 'Confirmacion_Test_Drive', val_testdrive);
            } else {
                    val_testdrive = 'No deseas manejarlo';
                    //console.log(val_testdrive);
                    AUD.setValue($('#leads_testdrive'), val_testdrive);
                    ga('send', 'event', 'Financiamiento', 'Confirmacion_Test_Drive', val_testdrive);
            }
            // VALIDATE NEWSLETTER
            if ( val_news === '1' ) {
                    val_subscription = 'Activado';
                    //console.log(val_subscription);
                    AUD.setValue($('#leads_subscription'), val_subscription);
                    ga('send', 'event', 'Financiamiento', 'Confirmacion_Newsletter', val_subscription);
            } else {
                    val_subscription = 'Desactivado';
                    //console.log(val_subscription);
                    AUD.setValue($('#leads_subscription'), val_subscription);
                    ga('send', 'event', 'Financiamiento', 'Confirmacion_Newsletter', val_subscription);
            }
            if ( !$.validate_input( $message )) {
                form_errors++;
                $message.focus();
            }
            if ( !$.validate_input( $phone )) {
                form_errors++;
                $phone.focus();
            }
            if ( !$.validate_input( $email )) {
                form_errors++;
                $email.focus();
            }
            if ( !$.validate_input( $lastname )) {
                form_errors++;
                $lastname.focus();
            }
            if ( !$.validate_input( $name )) {
                form_errors++;
                $name.focus();
            }
            /*if ( !$.validate_input( $model )) {
                form_errors++;
                //$model.change();
                $model.focusout();
            }
            if ( !$.validate_input( $concessionaire )) {
                form_errors++;
                $concessionaire.change();
                //$concessionaire.focusout();
            }
            */
            if ( form_errors == 0 ) {
                $btnSend.css('cursor', 'auto').prop('disabled', true);
                $('#loader_send_icon').css('display', 'block');

                apiPromise = set_form_leads_method.data_max_leads_api();
                apiPromise.success( function (data) {
                    //console.log('guarda registro en max, promise success');
                    //console.log(data);

                    sendFundingPromise = set_form_leads_method.data_fiancing_by_model();
                    sendFundingPromise.success( function (data) {
                        //console.log('Entra promise success');
                        //console.log(data);
                        setTimeout(function () {
                            //console.log("Correo Enviado...");
                            setTimeout(function () {
                                $('#form-wrapper').fadeOut(1000);
                                var correo, agencie;
                                correo = $('#leads_email').val();
                                agencie = AUD.getValue('#leads_agencie');
                                $('#email-from').text(correo);
                                $('#concessionaire-from').text(agencie);
                                $('.form-thanks').fadeIn(1000);
                                setTimeout(function() {
                                    set_form_leads_method.fillingControl();
                                    set_form_leads_method.resetApi();
                                    setTimeout(function() {
                                        $('#form-wrapper').fadeIn(1000);
                                        $('.form-thanks').fadeOut(1000);
                                    }, 3400);
                                }, 1800);
                            }, 1800);
                        }, 1400);
                    });
                    sendFundingPromise.error( function (data) {
                        //console.log('Entra promise error');
                        //console.log(data);
                        set_form_leads_method.resetApi();
                    });
                });
                apiPromise.error( function (data) {
                    //console.log('no guarda registro en max, promise error');
                    //console.log(data);
                    set_form_leads_method.resetApi();
                });
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] inputVal
\* ------------------------------------------------------ */
    var inputValMetdods = {
        isIntegerKP: function (event) {
            var key, numeros, teclado, especiales, teclado_especial, i;

            key = event.keyCode || event.which;
            teclado = String.fromCharCode(key);
            numeros = '0123456789';
            especiales = [8,9,37,38,39,40,46]; // array
            teclado_especial = false;

            for ( i in especiales ) {
                if ( key == especiales[i] ) {
                    teclado_especial = true;
                }
            }
            if ( numeros.indexOf(teclado) == -1 && !teclado_especial ) {
                return false;
            }
        },
        //http://www.lawebdelprogramador.com/foros/JavaScript/1074741-introducir_solo_numero_dos_decimales.html
        isDecimalKP: function(event) {
            var key, value;
            value = $(this).val();
            key = event.keyCode ? event.keyCode : event.which;

            // backspace
            if(key == 8) {
                return true;
            }
            // 0-9
            if(key > 47 && key < 58) {
                if(value == '') {
                    return true;
                }
                regexp = /.[0-9]{15}$/;
                return !(regexp.test(value));
            }
            // .
            if(key == 46) {
                if(value == '') {
                    return false;
                }
                regexp = /^[0-9]+$/;
                return regexp.test(value);
            }
            // other key
            return false;
        },
        roundDecimalBlur: function(event) {
            var value;
            value = $(this).val();
            value = CAMAD.roundNDecimalFormat(value, 2);
            $(this).val(value);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] validations_regexp
\* ------------------------------------------------------ */
    var validations_regexp = {
        address : new RegExp( /^[a-zá-úüñ,#0-9. -]{2,}$/i ),
        date    : new RegExp( /^(\d{4})-(\d{1,2})-(\d{1,2})$/ ),
        email   : new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ),
        name    : new RegExp( /^[a-zá-úüñ. ]{2,}$/i ),
        phone   : new RegExp( /^[0-9\s\-]{7,13}$/ ),
        upload  : new RegExp( /^[\w+\/]+\.\w{3}$/ )
    }
/* ------------------------------------------------------ *\
    [Methods] validation_messages
\* ------------------------------------------------------ */
    var validation_messages = {
        date            : 'Debe ser aaaa-mm-dd',
        date_tomorrow   : 'Sólo a partir de mañana',
        email           : 'Verifica tu correo',
        general         : 'Campo no válido',
        not_config      : 'Tipo desconocido',
        not_null        : 'No puede ser nulo',
        phone           : 'Verifica que tu número sea de 10 dígitos',
        required        : 'Campo requerido',
        empty           : 'Campo vacío',
        upload          : 'Comprueba la extensión del archivo a subir'
    }
/* ------------------------------------------------------ *\
    [Methods] validate
\* ------------------------------------------------------ */
    var validateMethods = {
        validate : function(value, rules, required, custom_message, formulario, archivo) {
            var r = { valid : false, message : '' },
            null_value = value == undefined || value === '' || value === $("#user_profile_pic").val() ,
            ii, rule;
            required = required === true ? true: false;
            if( required ){
                if( null_value ){
                    r.message = validation_messages.required;
                }
            }else{
                if( null_value ){
                    r.valid = true;
                }
            }
            if( !r.valid && r.message === '' ){
                ii = rules.length;
                while( ii-- ){
                    rule = rules[ii];
                    switch( rule ){
                        case 'email':
                            if( !validations_regexp.email.test( value ) ){
                                r.message = validation_messages.email;
                            }
                            break;
                        case 'name':
                            if( !validations_regexp.name.exec( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'address':
                            if( !validations_regexp.address.exec( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'phone':
                            if( !validations_regexp.phone.exec( value ) ){
                                r.message = validation_messages.phone;
                            }
                            break;
                        /*case 'area':
                            if(  !is_model_name( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;*/
                        case 'upload':
                            if( !valid_extension_file( formulario, value ) ){
                                r.message = validation_messages.upload;
                                //console.log(r.message);
                            }
                            break;
                        default:
                            r.message = validations_regexp.not_config;
                            break;
                    }
                }
                if( r.message === '' ){
                    r.valid = true;
                }
            }
            if( custom_message && !r.valid ){
                r.message = custom_message;
            }
            return r;
        },
        //Display Input errors
        error_bubble : function( $label, show, message ){
            var $p = $label.parent().children('p.invalid-message');
            if( show ){
                if( message ){
                    $p.html( message + '<span>&nbsp;</span>' ).stop().hide().fadeIn();
                }else{
                    $p.stop().hide().fadeIn();
                }
            }else{
                $p.hide();
            }
        },
        validate_input : function(event) {
            var target, isInput, isTextarea, isInputFile;
            target = $(event.target);
            isInput = target.is('input');
            isTextarea = target.is('textarea');
            isInputFile = target.is('input[type="file"]');
            //console.log(target);
            if( isInput || isTextarea || isInputFile ){
                var valid_data, val_data, required, value, validation;
                valid_data = target.data('validation-data');
                val_data   = valid_data.split('|');
                required   = val_data.indexOf('required');
                if( required >= 0 ){
                    val_data.splice(required, 1);
                }
                value = target.val();
                validation = validateMethods.validate( value, val_data, ( required >= 0 )  );
                validateMethods.error_bubble( target, !validation.valid, validation.message );
                return validation.valid;
            }else{
                var is_valid;
                is_valid = !( target.val() === null );
                validateMethods.error_bubble( target, !is_valid, validation_messages.required );
                return is_valid;
            }
        }
    }