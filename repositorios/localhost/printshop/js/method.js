/* ------------------------------------------------------ *\
    [Variables] 'Zone'
\* ------------------------------------------------------ */
	var section, columns, headers;
    // BACK TO TOP BUTTON
    var offset, offset_opacity, scroll_top_duration, $back_to_top;
    offset = 300;
    offset_opacity = 1200;
    scroll_top_duration = 700;
    // val service
    var serv_data = [
        {   key: 'promocionales',        name: 'Promocionales'          },
        {   key: 'todo-en-vinil',        name: 'Todo en Vinyl'          },
        {   key: 'pop',                  name: 'P.O.P.'                 },
        {   key: 'impresos',             name: 'Impresos'               },
        {   key: 'proyectos-especiales', name: 'Proyectos Especiales'   },
        {   key: 'instalaciones',        name: 'Instalaciones'          }
    ];
/* ------------------------------------------------------ *\
    [function] get_serv_data
\* ------------------------------------------------------ */
    function get_serv_data(k) {
        var ii = serv_data.length;
        while (ii--) {
            if(serv_data[ii].key == k) {
                return serv_data[ii];
            }
        }
        return null;
    }
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
            ( $(this).scrollTop() > offset ) ? $('.top').addClass('is-visible') : $('.top').removeClass('is-visible fade-out');
            if ( $(this).scrollTop() > offset_opacity ) {
                $('.top').addClass('fade-out');
            }
        },
        init_window_scroll_top: function() {
            $(window).scroll(backToTopMethod.windowScroll);
        }
    }
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
	}
/* ------------------------------------------------------ *\
    [function] getCurrentScroll
\* ------------------------------------------------------ */
    function getCurrentScroll() {
        var offsetY, scrolltop;
        offsetY = window.pageYOffset;
        scrolltop = document.documentElement.scrollTop;
        //console.log(offsetY, scrolltop);
        return offsetY || scrolltop;
    }
/* ------------------------------------------------------ *\
    [Methods] _container_principal_method
\* ------------------------------------------------------ */
    var _container_principal_method = {
        _init: false,
        init: function() {
            if ( this._init ) return;
            this._init = false;

            $('body').delay(350).css({'overflow':'visible'});

            this.build_header();
            // Mobile Menu
            //jQuery('#jx-main-menu,#jx-main-menu-2').slicknav();
            this.mobileMenu();
            // Nav Menu
            this.stickyMenu();
            this.show_navbar_side();
        },
        build_header: function() {
            this.recurrent_data();
            this.load_templates_header();
            this.load_templates_header_menu_holder();
            //this.load_templates_newsletter();
            this.load_templates_footer();
        },
        ifHeaders: function() {
            switch (headers) {
                case 'is-slider':
                    this.load_templates_header_slider();
                    break;
                case 'no-slider':
                    this.load_templates_header_titlebar();
                    _block_header_method.recurrent_data();                    
                    break;                    
                default:
                    break;
            }
        },
        load_templates_header: function() {
            // HEADER -> TOPBAR
            //PSH.loadTemplate(tempsNames.start_site_jx_topbar, domEl._start_site_jx_topbar);
            // HEADER -> HEADER LINE
            PSH.loadTemplate(tempsNames.start_site_jx_header_line, domEl._start_site_jx_header_line);
        },
        build_header_menu_holder: function() {
            var MQL, headerHeight, currentTop;
            headerHeight = $('header').height()
            //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
            MQL = 1170;     
            //primary navigation slide-in effect
            if($(window).width() > MQL) {
                headerHeight = $('header').height();
                $(window).on('scroll', {
                    previousTop: 0
                }, 
                function () {
                    currentTop = $(window).scrollTop();
                    //check if user is scrolling up
                    if (currentTop < this.previousTop ) {
                        //if scrolling up...
                        if (currentTop > 0 && $('header').hasClass('is-fixed')) {
                            $('header').addClass('is-visible');
                        } else {
                            $('header').removeClass('is-visible is-fixed');
                        }
                    } else {
                        //if scrolling down...
                        $('header').removeClass('is-visible');
                        if( currentTop > headerHeight && !$('header').hasClass('is-fixed')) $('header').addClass('is-fixed');
                    }
                    this.previousTop = currentTop;
                });
            }       
        },
        stickyMenu: function() {
            //Menu
            var s, pos, top, home_slider, count_down, page_titlebar, page_titlebar_title, count_down_margintop, nav_height, scroll;
            s = jQuery(".jx-sticky");
            pos = s.position();  
            top = s.css('top');
            home_slider = jQuery('.jx-slider');
            count_down = jQuery('.jx-counting-down');        
            page_titlebar = jQuery('.jx-page-titlebar');
            page_titlebar_title = jQuery('.jx-page-titlebar .jx-titlebar');
            count_down_margintop= count_down.css('marginTop');
            //Page Header
            nav_height = s.height();             
            jQuery(window).on("scroll",function() {
                scroll = getCurrentScroll();
                if ((s.length >0)){
                    if ( scroll >= pos.top+1){
                        s.addClass('fixed');                        
                        //Home slider
                        if (home_slider.length > 0){
                            //home_slider.css({'marginTop':nav_height});
                            count_down.css({'marginTop':count_down_margintop+nav_height});
                        }                       
                        //Page titlebar
                        if (page_titlebar.length > 0){
                            //page_titlebar.css({'marginTop':nav_height});
                            //page_titlebar_title.css({'paddingTop':'29px'});
                        }                       
                    }else{
                        s.removeClass('fixed');
                        //Home slider
                        if (home_slider.length > 0){
                            //home_slider.css({'marginTop':0});
                            count_down.css({'marginTop':count_down_margintop+0});
                        }                       
                        //Page titlebar
                        if (page_titlebar.length > 0){
                            //page_titlebar.css({'marginTop':0});
                            //page_titlebar_title.css({'paddingTop':'29px'});
                        }
                    }                 
                }
            });
        },
        mobileMenu: function() {
            if( isMobile.any() ) {
               jQuery('.jx-rev-slider-holder').removeClass('jx-animate-header');
            }           
        },
        load_templates_header_menu_holder: function() {
            // HEADER -> MENU HOLDER
            PSH.loadTemplate(tempsNames.start_site_jx_menu_holder, domEl._start_site_jx_menu_holder);
            this.build_header_menu_holder();
            this.load_templates_header_submenu_services();
        },
        load_templates_header_submenu_services: function() {
            var urlApi;
            urlApi = PSH.getInternalJSON(urlsApi.get_service);
            PSH.loadTemplate(tempsNames.start_site_jx_menu_holder_submenu_services, '#inner-submenu-services', urlApi);
        },
        build_header_slider: function(options) {
            // Home Slider#1
            // Revolution Slider Initialize         
            $(".home-slider-1 .tp-banner").each(function() {
                var slider, defaults, config, sliderApi;
                slider = $(this);
                defaults = {
                    delay: 9000,
                    startheight: 600,
                    startwidth: 960,

                    hideThumbs: 10,

                    thumbWidth: 100,
                    thumbHeight: 50,
                    thumbAmount: 5,

                    navigationType: "both",
                    navigationArrows: "verticalcentered",
                    navigationStyle: "preview1",

                    touchenabled: "on",
                    onHoverStop: "on",

                    navOffsetHorizontal: 0,
                    navOffsetVertical: 20,

                    stopAtSlide: 0,
                    stopAfterLoops: -1,

                    shadow: 0,
                    fullWidth:"on",
                    //forceFullWidth:"off",
                    videoJsPath: "vendor/rs-plugin/videojs/"
                }
                config = $.extend({}, defaults, options, slider.data("plugin-options"));
                // Initialize Slider
                sliderApi = slider.revolution(config).addClass("slider-init");
            }); 
        },
        load_templates_header_slider: function() {
            // HEADER -> SLIDER
            PSH.loadTemplate(tempsNames.start_site_jx_slider, domEl._start_site_jx_slider);
            this.build_header_slider();
        },
        load_templates_header_titlebar: function() {
            // HEADER -> TITLE BAR
            PSH.loadTemplate(tempsNames.start_site_jx_titlebar, domEl._start_site_jx_titlebar);
        },
        load_templates_newsletter: function() {
            // MAIN -> NEWSLETTER SUBSCRIPTION
            PSH.loadTemplate(tempsNames.start_site_jx_newsletter, domEl._start_site_jx_newsletter);
        },
        load_templates_footer: function() {
            // FOOTER
            PSH.loadTemplate(tempsNames.start_site_jx_footer, domEl._start_site_jx_footer);
        },
        recurrent_data: function() {
            // HEADER -> TOPBAR
            //data_jx_topbar = {'id': 'start-site-jx-topbar', 'class': 'jx-topbar _content'}
            //PSH.appendOne(domEl.div_topbar, 'div', data_jx_topbar, '', 1);
            // HEADER -> HEADER LINE
            data_jx_header_line = {'id': 'start-site-jx-header-line', 'class': 'jx-header header-line'}
            PSH.appendOne(domEl.div_header_line, 'div', data_jx_header_line, '', 1);
            // HEADER -> MENU HOLDER
            data_jx_menu_holder = {'id': 'start-site-jx-menu-holder', 'class': 'jx-menu-holder jx-sticky'}
            PSH.appendOne(domEl.div_menu_holder, 'div', data_jx_menu_holder, '', 1);
            // HEADER -> SLIDER
            data_jx_slider = {'id': 'start-site-jx-slider', 'class': 'jx-slider'}
            PSH.appendOne(domEl.div_slider, 'div', data_jx_slider, '', 1);
            // HEADER -> TITLE BAR
            data_jx_title_bar = {'id': 'start-site-jx-titlebar', 'class': 'jx-title-bar'}
            PSH.appendOne(domEl.div_titlebar, 'div', data_jx_title_bar, '', 1);
            // MAIN -> NEWSLETTER SUBSCRIPTION
            //data_jx_newsletter = {'id': 'start-site-jx-newsletter', 'class': 'jx-container'}
            //PSH.appendOne(domEl.div_newsletter_subscrition, 'div', data_jx_newsletter, '', 1);
            // FOOTER
            data_footer = {'id': 'start-site-jx-footer', 'class': 'jx-footer-1'}
            PSH.appendOne(domEl.div_footer, 'div', data_footer, '', 1);
        },
        hide_navbar_side: function() {
            if (window.matchMedia("(max-width:479px)").matches) {
                $('#init-navbar-side-mobile').hide();
            } else {
            }
        },
        show_navbar_side: function() {
            if( isMobile.any() ) {
                $('#init-navbar-side-mobile').show();
            }
            if (window.matchMedia("(max-width:479px)").matches) {
                $('#init-navbar-side-mobile').show();
            } else {
            }
        },
        toggle_mob_navbar_side: function(event) {
            if( isMobile.any() ) {
                $('.mob-sidebar-nav').addClass("mob-sidebar-nav-fadeIn");
                $(".fading-overlay").addClass("fading-overlay-trigger");
            }
        },
        close_mob_navbar_side: function(event) {
            _container_principal_method.is_close_navbar_side();
        },
        close_panel: function(event) {
            _container_principal_method.is_close_navbar_side();
        },
        is_close_navbar_side: function() {
            if( isMobile.any() ) {
                $('.mob-sidebar-nav').removeClass("mob-sidebar-nav-fadeIn");
                $(".fading-overlay").removeClass("fading-overlay-trigger");
            }
            if (window.matchMedia("(max-width:479px)").matches) {
                $('.mob-sidebar-nav').removeClass("mob-sidebar-nav-fadeIn");
                $(".fading-overlay").removeClass("fading-overlay-trigger");
            } else {
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] _block_header_method
\* ------------------------------------------------------ */
    var _block_header_method = {
        build_block_header: function() {
            _container_principal_method.init();
            _container_principal_method.ifHeaders();
            current_menu_holder_method.build_menu_holder_active();
        },
        recurrent_data: function() {
            data = [
                ['div', {'id':'start-site-jx-container', 'class':'jx-container jx-padding'}, '', 1],
            ];
            PSH.appendMulti(domEl.div_recurrent, data);
        }       
    }
/* ------------------------------------------------------ *\
    [Methods] current_menu_holder_method
\* ------------------------------------------------------ */
    var current_menu_holder_method = {
        build_menu_holder_active: function() {
            switch (section) {
                case 'home':
                    current_menu_holder_method.current_menu_holder_active_home();
                    //current_menu_holder_method.addIdSlicknav_menu();
                    break;
                case 'about-us':
                    current_menu_holder_method.current_menu_holder_active_about_us();
                    //current_menu_holder_method.addIdSlicknav_menu();
                    break;
                case 'services':
                    current_menu_holder_method.current_menu_holder_active_services();
                    //current_menu_holder_method.addIdSlicknav_menu();
                    break;
                case 'contact':
                    current_menu_holder_method.current_menu_holder_active_contact();
                    //current_menu_holder_method.addIdSlicknav_menu();
                    break;
                default:
                    break;
            }
        },
        current_menu_holder_active_home: function() {
            $('head title').html('Print Shop');
            $('#menu-holder-home').addClass('current');
            $('#menu-holder-home a').addClass('current');
        },
        current_menu_holder_active_about_us: function() {
            $('head title').html('Print Shop | ¿Quiénes somos?');
            $('#menu-holder-about-us').addClass('current');
            $('#menu-holder-about-us a').addClass('current');
            $('.change-sub-section').html('¿Quiénes somos?');
            $('.bg-pos-middle').attr('style', 'background-image:url("img/servicios/headers/header-about-us.jpg");');
        },
        current_menu_holder_active_services: function() {
            $('head title').html('Print Shop | Servicios');
            $('#menu-holder-services').addClass('current');
            $('#menu-holder-services a').addClass('current');
            $('.change-sub-section').html('Servicios');
            $('.bg-pos-middle').attr('style', 'background-image:url("img/servicios/headers/header-services.jpg");');
        },
        current_menu_holder_active_by_service: function() {
            //$('head title').html('Print Shop | Servicios');
            //$('#menu-holder-services').addClass('current');
            //$('#menu-holder-services a').addClass('current');
            //$('.change-sub-section').html('Servicios');
            //$('.submenu .submenu-service-promocionales ')
        },
        current_menu_holder_active_contact: function() {
            $('head title').html('Print Shop | Contacto');
            $('#menu-holder-contact').addClass('current');
            $('#menu-holder-contact a').addClass('current');
            $('.change-sub-section').html('Contacto');
            $('.bg-pos-middle').attr('style', 'background-image:url("img/servicios/headers/header-contact.jpg");');
        },
        addIdSlicknav_menu: function() {
            if ( $('body div').hasClass('slicknav_menu') ) {
                $('.deactivated').attr('id', 'menu-holder-' + section);
                //console.log(section)
            }
        },
        remove_menu_holder_active: function() {
            if ( $('li').hasClass('deactivated') ) {
                $(this).each(function(index) {
                    $(this).removeClass('current');
                });
            }
        },
        remove_slicknav: function() {
            if ( $('body div').hasClass('slicknav_menu') ) {
                $('.slicknav_menu').remove();
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] views_section_home_method
\* ------------------------------------------------------ */
    var _section_home_method = {
        build_section_home: function() {
            _block_header_method.build_block_header();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] views_section_about_us_method
\* ------------------------------------------------------ */
    var _section_about_us_method = {
        build_section_about_us: function() {
            _block_header_method.build_block_header();            
            _section_about_us_method.load_templates();
        },
        load_templates: function() {
            PSH.loadTemplate(tempsNames.start_site_about_us, domEl._start_site_jx_container);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] views_section_services_method
\* ------------------------------------------------------ */
    var _section_services_method = {
        build_section_services: function(i) {
            _block_header_method.build_block_header();
        },
        build_section_our_services: function() {
        },
        build_section_by_service: function() {
            /*Service Flexslider*/
            $('.jx-service-flexslider .flexslider').flexslider({
                animation: "slide",
                directionNav:false,
                slideshowSpeed:"8000"
            });
        },
        load_templates_services: function() {
            PSH.loadTemplate(tempsNames.start_site_services, domEl._start_site_jx_container);
        },
        data_services: function(k) {
            var serv_data, hk, hn;
            serv_data = get_serv_data(k);

            PSH.setValue('#hidden_key', serv_data['key']);
            PSH.setValue('#hidden_name', serv_data['name']);

            hk = PSH.getValue('#hidden_key');
            hn = PSH.getValue('#hidden_name');

            switch (hk) {
                case hk:
                    var $change;

                    $change = $('.change-sub-section');
                    $change.html(hn);
                    //console.log($change);
                    if ( hk === 'promocionales') {
                        PSH.loadTemplate(tempsNames.start_site_by_service_promocionales, domEl._start_site_jx_service_content);
                    } else if ( hk === 'todo-en-vinil' ) {
                        PSH.loadTemplate(tempsNames.start_site_by_service_vinyl, domEl._start_site_jx_service_content);
                    } else if ( hk === 'pop') {
                        PSH.loadTemplate(tempsNames.start_site_by_service_pop, domEl._start_site_jx_service_content);
                    } else if ( hk === 'impresos') {
                        PSH.loadTemplate(tempsNames.start_site_by_service_impresos, domEl._start_site_jx_service_content);
                    } else if ( hk === 'proyectos-especiales') {
                        PSH.loadTemplate(tempsNames.start_site_by_service_especiales, domEl._start_site_jx_service_content);
                    } else if ( hk === 'instalaciones') {
                        PSH.loadTemplate(tempsNames.start_site_by_service_instalaciones, domEl._start_site_jx_service_content);
                    }
                break;
            }
        },
        load_templates_our_services: function() {
            var urlApi;
            urlApi = PSH.getInternalJSON(urlsApi.get_service);
            PSH.loadTemplate(tempsNames.start_site_our_services, domEl._start_site_jx_container, urlApi);
        },
        load_templates_by_service: function() {
            PSH.loadTemplate(tempsNames.start_site_by_service, domEl._start_site_jx_service_content);
            
            _section_services_method.load_templates_sidebar_menu();
        },
        load_templates_sidebar_menu: function() {
            var urlApi;
            urlApi = PSH.getInternalJSON(urlsApi.get_service);
            PSH.loadTemplate(tempsNames.start_site_jx_sidebar_menu, domEl.div_sidebar_menu, urlApi);
        },
        get_service: function(event) {
            var key, name;
            key = $(this).data('serv-key');
            name = $(this).data('serv-name');
            //console.log(key, name);

            PSH.setValue('#hidden_key', key);
            PSH.setValue('#hidden_name', name);
            //console.log('/servicios/' + key);

            _section_services_method.finch_services(key);
        },  
        finch_services: function(key) {
            $('body,html').animate({ scrollTop: "340" }, 999, 'easeOutExpo' );
            Finch.navigate('/servicios/' + key);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] views_section_contact_method
\* ------------------------------------------------------ */
    var _section_contact_method = {
        build_section_contact: function() {
            _block_header_method.build_block_header();
            _section_contact_method.load_templates();
            $(domEl._start_site_jx_container).attr('style', 'padding-top: 0;');
        },
        load_templates: function() {
            PSH.loadTemplate(tempsNames.start_site_contact, domEl._start_site_jx_container);

            // ADD GMAP
            _section_contact_method._gmap();
            _section_contact_method.init_gmap();

            // ADD FORM CONTACT
            _section_contact_method.load_form_contact();
        },
        load_form_contact: function() {
            send_form_contact_method.refreshForm();
        },
        _gmap: function() {
            var mapOptions, mapElement, map, marker, popup;
            mapOptions = {
                scrollwheel: false,
                zoom: 16,
                center: new google.maps.LatLng(20.684591, -103.385857),
                styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
            };
            mapElement = document.getElementById('map');
            map = new google.maps.Map(mapElement, mapOptions);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(20.684591, -103.385857),
                map: map,
                title: 'PRINT SHOP MKT'
            });
            popup = new google.maps.InfoWindow({
                content:
                    '<div class="marker-info-win" style="text-align: center;">'+
                    '<div class="marker-inner-win"><span class="info-content">'+
                    '<img src="img/logo/logo-print-shop.png" alt="PRINTSHOP MKT" style="margin-botton: 10px;" width="150">'+
                    '<h5 class="marker-heading" style="color:#000; padding: 0px; margin: 0px; opacity: 0;">PRINT SHOP MKT</h5>'+
                    '<span>Manuel Acuña #2791, Col. Providencia. Guadalajara, Jalisco C.P. 44630</span>' +
                    '</span>'+
                    '</div></div>'
            });
            attachInfoWindowToMarker(map, marker, popup);

            function attachInfoWindowToMarker( map, marker, infoWindow ) {
                infoWindow.open(map, marker, popup);
            }
        },
        init_gmap: function() {
            google.maps.event.addDomListener(window, 'load', _section_contact_method._gmap);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] send_form_contact_method
\* ------------------------------------------------------ */
    var send_form_contact_method = {
        addDataFromContact: function() {
            var data, data_url, data_post;
            data = $('#contactFrom').serializeFormJSON();
            console.log(data);

            data_url = urlsApi.send_form_contact;
            data_post = PSH.postalService(data_url, data);
            console.log(data_post);
            return data_post;
        },
        fillingControl: function() {
            var valid_items, data, isFull, isNoEmpty;
            valid_items = [
                'fullname', 'email', 'phone', 'subject', 'message'
            ];
            data = $('#contactFrom').serializeFormJSON();
            console.log(data);
        },
        refreshForm: function() {
            var $btnSend;
            $btnSend = $('.send_contact_form');

            PSH.loadTemplate(tempsNames.start_site_form_contact, domEl._inner_form_contact);
            //$('#send_submit').attr('disabled', true);

            $btnSend.removeAttr('disabled');
        },
        resetForm: function() {
            var $btnSend;
            $btnSend = $('.send_contact_form');
            //$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );

            PSH.resetForm('#contactFrom');

            $('#loader_send_icon').css('display', 'none');

            $btnSend.removeAttr('disabled');
        },
        validate_fields_keyup: function() {
            send_form_contact_method.fillingControl();
        },
        sen_fomr_contact: function() {
            var psh_full_name, psh_email, psh_phone, psh_subject, psh_message, $btnSend, form_errors;
            
            psh_full_name = $('#full-name-contact');
            psh_email = $('#email-contact');
            psh_phone = $('#phone-contact');
            psh_subject = $('#subject-contact');
            psh_message = $('#message-contact');
            
            $btnSend = $('.send_contact_form');

            form_errors = 0;
            if ( !$.validate_input( psh_full_name ) ) {
                form_errors++;
                psh_full_name.focus();
            }
            if ( !$.validate_input( psh_email ) ) {
                form_errors++;
                psh_email.focus();
            }
            if ( !$.validate_input( psh_phone ) ) {
                form_errors++;
                psh_phone.focus();
            }
            if ( !$.validate_input( psh_subject ) ) {
                form_errors++;
                psh_subject.focus();
            }
            if ( !$.validate_input( psh_message ) ) {
                form_errors++;
                psh_message.focus();
            }
            if ( form_errors == 0 ) {
                send_form_contact_method.fillingControl();

                $btnSend.css('cursor', 'auto').prop('disabled', true);
                $('#loader_send_icon').css('display', 'block');

                form_contact_promise = send_form_contact_method.addDataFromContact();
                form_contact_promise.success(function() {
                    console.log('Entra promise success');
                    console.log(data);
                    setTimeout(function () {
                        console.log("Correo Enviado...");
                        setTimeout(function () {
                            $('#form-wrapper').fadeOut(1000);
                            var correo, agencie;
                            correo = $('#email-contact').val();
                            //agencie = SUK.getValue('#leads_agencie');
                            $('#email-from').text(correo);
                            //$('#concessionaire-from').text(agencie);
                            $('.form-thanks').fadeIn(1000);
                            setTimeout(function() {
                                send_form_contact_method.fillingControl();
                                send_form_contact_method.resetForm();
                                setTimeout(function() {
                                    $('#form-wrapper').fadeIn(1000);
                                    $('.form-thanks').fadeOut(1000);
                                }, 3400);
                            }, 1800);
                        }, 1800);
                    }, 1400);
                });
                form_contact_promise.error(function() {
                    console.log('Entra promise error');
                    console.log(data);
                    send_form_contact_method.resetForm();
                });
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] go_section_method
\* ------------------------------------------------------ */
    var go_section_method = {
        go_section_home: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            //ga('send', 'event', 'navigation_bar', 'Menu_Inicio', 'go_index', 'Inicio');
            //console.log("ga('send', 'event', 'navigation_bar', 'Menu_Inicio', 'go_index', 'Inicio');");
            Finch.navigate('/');
        },
        go_section_services: function(event) {
            Finch.navigate('/servicios');
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
        phone   : new RegExp( /^[0-9\s\-]{7,13}$/ )
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
        empty           : 'Campo vacío'
    }
/* ------------------------------------------------------ *\
    [Methods] validate
\* ------------------------------------------------------ */
    var validateMethods = {
        validate : function(value, rules, required, custom_message) {
            var r = { valid : false, message : '' },
            null_value = value == undefined || value === '' ,
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
                        case 'car_key':
                            if(  !is_model_name( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'date':
                            if( !validations_regexp.date.exec( value ) ){
                                r.message = validation_messages.date;
                            }
                            break;
                        case 'phone':
                            if( !validations_regexp.phone.exec( value ) ){
                                r.message = validation_messages.phone;
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
            var target = $(event.target);
            //console.log(target);
            if( target.is('input') || target.is('textarea') ){
                var valid_data = target.data('validation-data');
                var val_data    = valid_data.split('|'),
                    required    = val_data.indexOf('required');
                if( required >= 0 ){
                    val_data.splice(required, 1);
                }
                var value = target.val(),
                    validation = validateMethods.validate( value, val_data, ( required >= 0 )  );
                validateMethods.error_bubble( target, !validation.valid, validation.message );
                return validation.valid;
            }else{
                var is_valid = !( target.val() === null );
                validateMethods.error_bubble( target, !is_valid, validation_messages.required );
                return is_valid;
            }
        }
    }