/* ------------------------------------------------------ *\
    [Variables] var
\* ------------------------------------------------------ */
    var section;
    var IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // Back to Top
    var offset, offset_opacity, scroll_top_duration;
    offset = 300;
    offset_opacity = 1200;
    scroll_top_duration = 700;
    //Masters
    var GLOBALMasterMax = $("input#master-max").val();
    //var GLOBALRootApi = $("input#master-root-api").val();
    //var GLOBALMasterMax = "http://clicktolead.com.mx/api/v1/remote/action"; //Production
    //var GLOBALMasterMax = "http://localhost/maxleads/api/v1/remote/action"; //Development
/* ------------------------------------------------------ *\
    [functions] scroll_to
\* ------------------------------------------------------ */
    //animates all transitions (needs an "a" element whit "name attrubute")
    $.scroll_to = function( target_name ){
        var target, dest, header_height = $('#header-wrapper').height();
        if( target_name != 'top' ){
            target = $( 'a[name="' + target_name + '"]' );
            dest = target.offset().top - header_height - 35;
            if (IS_MOBILE) {
                dest += 75;
            }
            conole.log(target);
        } else {
            dest = 0;
        }
        //console.log(target);
        //console.log(dest);
        $('html,body').stop().animate({ scrollTop : dest}, 800 , 'easeOutSine');
    };
    var scrollContact = {
        initA3Sedan: function(event) {
            event.preventDefault();
            $.scroll_to('audi-a3-sedan');
        },
        initA6: function(event) {
            event.preventDefault();
            $.scroll_to('audi-a6');
        },
        initA7: function(event) {
            event.preventDefault();
            $.scroll_to('audi-a7');
        },
        initA8: function(event) {
            event.preventDefault();
            $.scroll_to('audi-a8');
        },
        initAccesorios: function(event) {
            event.preventDefault();
            $.scroll_to('audi-accesorios');
        }
    }
/* ------------------------------------------------------ *\
    [Methods] backToTopMethod
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
            ( $(this).scrollTop() > offset ) ? $('.back-to-top').addClass('cd-is-visible') : $('.back-to-top').removeClass('cd-is-visible cd-fade-out');
            if ( $(this).scrollTop() > offset_opacity ) {
                $('.back-to-top').addClass('cd-fade-out');
            }
        },
        init_window_scroll_top: function() {
            $(window).scroll(backToTopMethod.windowScroll);
        }
    }
    var showDetailCard = {
        clickShowDetails: function (event) {
            var clickGeneral, clickThis, currentDisplay, newDisplay;
            clickGeneral = $(".toogle-card").parents('.tools-card').children('.paner-card-body');
            clickThis = $(this).parents('.tools-card').children('.paner-card-body');
            currentDisplay = clickThis.css('display');
            newDisplay = (currentDisplay === 'none') ? 'block' : 'none';
            clickGeneral.css('display', 'none');
            clickThis.css('display', newDisplay);
        }
    }
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
    [function] resetAlert
\* ------------------------------------------------------ */
    function resetAlert() {
        alertify.set({
            labels : {
                ok     : "OK",
                cancel : "Cancel"
            },
            delay : 5000,
            buttonReverse : false,
            buttonFocus   : "ok"
        });
    }
/* ------------------------------------------------------ *\
    [Methods] 'PAGE SCROLLIN FEATURE'
\* ------------------------------------------------------ */
	var smooth_scroll = {
		feature_scrolling: function(event) {
		    var $anchor = $(this);
		    $('html, body').stop().animate({
		        scrollTop: $($anchor.attr('href')).offset().top + 20
		    }, 1500, 'easeInOutExpo');
		    event.preventDefault();
		}
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
    [Methods] fixed_header
\* ------------------------------------------------------ */
	var fixed_header = {
		fixed_scroll: function() {
		    if ($(this).scrollTop() > 30) $('#header').addClass("fixed").fadeIn();
			else $('#header').removeClass("fixed");
		}
	}
/* ------------------------------------------------------ *\
    [Methods] owl_team
\* ------------------------------------------------------ */
    var owl_team = {
        init: function() {
            if( $("#owl-team").length ) {
                $("#owl-team").owlCarousel({
                    autoPlay: 6000, //Set AutoPlay to 5 seconds
                    items : 4,
                    itemsDesktop : [1199,3],
                    itemsDesktopSmall : [979,3]
                });
            }
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
    [Methods] event_to_material
\* ------------------------------------------------------ */
    var set_data = {
        set_product: function(event) {
            get_data = AUD.getValue('#master-product');
            AUD.setValue('#aud_producto', get_data);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] financingForm
\* ------------------------------------------------------ */
    var financingForm = {
        sendButtons: "",
        contactForm: "",
        loaderIcon: "",
        sendLeads: function() {
            var data, dataRenamed;
            data = $(financingForm.contactForm).serializeFormJSON();
            dataRenamed = AUD.renameArrayObjKeys([data], {
                "name": "nombre",
                "lastname": "apellidos",
                "email": "correo",
                "phone": "telefono",
                "agencie": "agencia",
                "product": "producto",
                "comment": "mensaje"
            });
            dataRenamed = dataRenamed[0];
            dataRenamed["business_max"] = $('#aud_agn').find(":selected").data("max-id"); //Max Id;            
            dataRenamed["news"] = "0";
            dataRenamed["origen_type"] = "2";
            dataRenamed["campaign_max"] = "Promo Audi";
            dataRenamed["web_max"] = window.location.href;
            dataRenamed["exit_web"] = window.location.href;
            return AUD.postalService(GLOBALMasterMax, dataRenamed);
        },
        handlerPromiseSend: function (data1) {
            var financingSendPromise, aud_agn, rootApi;

            rootApi = AUD.getValue('#master-host');
            url_location = rootApi;
            
            aud_agn = AUD.getValue('#aud_agn');
            aud_product = AUD.getValue('#aud_producto');
            console.log(aud_agn, aud_product);

            resetAlert();
            alertify.set({
                labels: {
                    ok: 'Aceptar',
                    cancel: 'Cancelar'
                }
            });
            data = $(financingForm.contactForm).serializeFormJSON();
            financingSendPromise = financingForm.sendContacto();
            financingSendPromise.success( function (data2) {
                ga('send', 'event', 'button-send-form-financing-contact', 'Promo Audi '+ aud_product, 'form-financing-contact');
                setTimeout(function () {
                    setTimeout(function () {
                        //$('#form-wrapper').fadeOut(1000);
                        $('.form-thanks').fadeIn(1000);
                        setTimeout(function() {
                            financingForm.resetContact();
                            alertify.alert("¡Muchas gracias!<br>" + 
                                           "Hemos enviado su formulario exitosamente a un representante de la concesionaria " + aud_agn + ", " +
                                           "pronto se pondrá en contacto con usted para enviarle su cotización.", function(e) {
                                                $(location).attr('href', url_location); 
                                           });
                            alertify.success("Datos enviados.");
                        }, 1800);
                    }, 1800);
                }, 1400);
            });
            financingSendPromise.error( function (data2) {
                financingForm.resetContact();
                alertify.error("No se han podido enviar los datos <br /> Inténtelo más tarde.");
            });
        },
        handlerPromiseLeads: function (data) {
            var contactSndPromise;
            contactSndPromise = financingForm.sendContacto();
            contactSndPromise.success(financingForm.handlerPromiseSend);
            contactSndPromise.error(financingForm.handlerPromiseSend);
        },
        sendContacto: function () {
            var rootApi, data;
            data = $(financingForm.contactForm).serializeFormJSON();
            rootApi = AUD.getValue('#master-host');
            return AUD.postalService(rootApi + urlsApi.snd_fin, data);
        },
        resetContact: function () {
            var $btnSend;
            $btnSend = $(".send_contact_form");
            AUD.resetForm(financingForm.contactForm);
            $(financingForm.loaderIcon).css("display", "none");
            $btnSend.removeAttr("disabled");
        },
        clickSend: function(event) {
            // Loader Icon
            financingForm.loaderIcon = "#loader_send_icon";
            // Get and save current button id
            financingForm.sendButton = "#" + $(this).attr('id');
            // Get the current form id, find the form with the same data-scope value
            financingForm.contactForm = "form#" + $(domEl.div_recurrent).find("form").attr("id");

            formErrors = formValidation.required(financingForm.contactForm, '.validate-required', financingForm.sendButton);
            if (formErrors) {
                $(financingForm.contactForm).css("cursor", "auto").prop("disabled", true);
                $(financingForm.loaderIcon).css("display", "block");
                leadsPromise = financingForm.sendLeads();
                leadsPromise.success(financingForm.handlerPromiseLeads);
                leadsPromise.error(financingForm.handlerPromiseLeads);
                /*
                financingForm.sendLeads();
                financingForm.sendContacto();
                financingForm.addContacto();
                */
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] registryForm
\* ------------------------------------------------------ */
    var registryForm = {
        sendButtons: "",
        contactForm: "",
        loaderIcon: "",
        sendLeads: function() {
            var data, dataRenamed;
            data = $(registryForm.contactForm).serializeFormJSON();
            dataRenamed = AUD.renameArrayObjKeys([data], {
                "name": "nombre",
                "lastname": "apellidos",
                "email": "correo",
                "phone": "telefono",
                "agencie": "agencia",
                "product": "producto",
                "comment": "mensaje"
            });
            dataRenamed = dataRenamed[0];
            dataRenamed["business_max"] = $('#aud_agn').find(":selected").data("max-id"); //Max Id;            
            dataRenamed["news"] = "0";
            dataRenamed["origen_type"] = "2";
            dataRenamed["campaign_max"] = "Invitación Audi";
            dataRenamed["web_max"] = window.location.href;
            dataRenamed["exit_web"] = window.location.href;
            return AUD.postalService(GLOBALMasterMax, dataRenamed);
        },
        handlerPromiseSend: function (data1) {
            var financingSendPromise, aud_agn, rootApi;

            rootApi = AUD.getValue('#master-host');
            url_location = rootApi;
            
            aud_agn = AUD.getValue('#aud_agn');
            aud_product = AUD.getValue('#aud_producto');
            console.log(aud_agn, aud_product);

            resetAlert();
            alertify.set({
                labels: {
                    ok: 'Aceptar',
                    cancel: 'Cancelar'
                }
            });
            data = $(registryForm.contactForm).serializeFormJSON();
            financingSendPromise = registryForm.sendContacto();
            financingSendPromise.success( function (data2) {
                ga('send', 'event', 'button-send-form-registry-contact', aud_product, 'form-registry-contact');
                setTimeout(function () {
                    setTimeout(function () {
                        //$('#form-wrapper').fadeOut(1000);
                        $('.form-thanks').fadeIn(1000);
                        setTimeout(function() {
                            registryForm.resetContact();
                            alertify.alert("¡Muchas gracias!<br>" + 
                                           "Hemos enviado su formulario exitosamente a un representante de la concesionaria " + aud_agn + ", " +
                                           "un asesor se comunicara contigo para enviarte tu invitación al evento.", function(e) {
                                                $(location).attr('href', url_location); 
                                           });
                            alertify.success("Datos enviados.");
                        }, 1800);
                    }, 1800);
                }, 1400);
            });
            financingSendPromise.error( function (data2) {
                registryForm.resetContact();
                alertify.error("No se han podido enviar los datos <br /> Inténtelo más tarde.");
            });
        },
        handlerPromiseLeads: function (data) {
            var contactSndPromise;
            contactSndPromise = registryForm.sendContacto();
            contactSndPromise.success(registryForm.handlerPromiseSend);
            contactSndPromise.error(registryForm.handlerPromiseSend);
        },
        sendContacto: function () {
            var rootApi, data;
            data = $(registryForm.contactForm).serializeFormJSON();
            rootApi = AUD.getValue('#master-host');
            return AUD.postalService(rootApi + urlsApi.snd_reg, data);
        },
        resetContact: function () {
            var $btnSend;
            $btnSend = $(".send_contact_form");
            AUD.resetForm(registryForm.contactForm);
            $(registryForm.loaderIcon).css("display", "none");
            $btnSend.removeAttr("disabled");
        },
        clickSend: function(event) {
            // Loader Icon
            registryForm.loaderIcon = "#loader_send_icon";
            // Get and save current button id
            registryForm.sendButton = "#" + $(this).attr('id');
            // Get the current form id, find the form with the same data-scope value
            registryForm.contactForm = "form#" + $(domEl.div_recurrent).find("form").attr("id");

            formErrors = formValidation.required(registryForm.contactForm, '.validate-required', registryForm.sendButton);
            if (formErrors) {
                $(registryForm.contactForm).css("cursor", "auto").prop("disabled", true);
                $(registryForm.loaderIcon).css("display", "block");
                leadsPromise = registryForm.sendLeads();
                leadsPromise.success(registryForm.handlerPromiseLeads);
                leadsPromise.error(registryForm.handlerPromiseLeads);
                /*
                registryForm.sendLeads();
                registryForm.sendContacto();
                registryForm.addContacto();
                */
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] financingAccesoriesForm
\* ------------------------------------------------------ */
    var financingAccesoriesForm = {
        sendButtons: "",
        contactForm: "",
        loaderIcon: "",
        sendLeads: function() {
            var data, dataRenamed;
            data = $(financingAccesoriesForm.contactForm).serializeFormJSON();
            dataRenamed = AUD.renameArrayObjKeys([data], {
                "name": "nombre",
                "lastname": "apellidos",
                "email": "correo",
                "phone": "telefono",
                "agencie": "agencia",
                "comment": "mensaje"
            });
            dataRenamed = dataRenamed[0];
            dataRenamed["business_max"] = "11"; //Max Id;
            dataRenamed["news"] = "0";
            dataRenamed["origen_type"] = "2";
            dataRenamed["campaign_max"] = "Accesorios Audi";
            dataRenamed["web_max"] = window.location.href;
            dataRenamed["exit_web"] = window.location.href;
            dataRenamed["product"] = $('#aud_producto').find(":selected").val() + " - " + $('#aud_accesories').find(":selected").val();
            dataRenamed["comment"] = AUD.linealString(dataRenamed["comment"]);
            return AUD.postalService(GLOBALMasterMax, dataRenamed);
        },
        handlerPromiseSend: function (data1) {
            var financingSendPromise, aud_agn, aud_product, aud_accesories, rootApi;

            rootApi = AUD.getValue('#master-host');
            url_location = rootApi;
            
            aud_agn = AUD.getValue('#aud_agn');
            aud_product = AUD.getValue('#aud_producto');
            aud_accesories = AUD.getValue('#aud_accesorieso');

            resetAlert();
            alertify.set({
                labels: {
                    ok: 'Aceptar',
                    cancel: 'Cancelar'
                }
            });
            data = $(financingAccesoriesForm.contactForm).serializeFormJSON();
            financingSendPromise = financingAccesoriesForm.sendContacto();
            financingSendPromise.success( function (data2) {
                ga('send', 'event', 'button-send-form-financing-accesories-contact', 'Accesorios Originales Audi '+ aud_product + ' - ' + aud_accesories, 'form-financing-accesories-contact');
                setTimeout(function () {
                    setTimeout(function () {
                        //$('#form-wrapper').fadeOut(1000);
                        $('.form-thanks').fadeIn(1000);
                        setTimeout(function() {
                            financingAccesoriesForm.resetContact();
                            alertify.alert("¡Muchas gracias!<br>" + 
                                           "Hemos enviado su formulario exitosamente a un representante de la concesionaria " + aud_agn + ", " +
                                           "pronto se pondrá en contacto con usted para enviarle su cotización.", function(e) {
                                                //$(location).attr('href', url_location); 
                                           });
                            alertify.success("Datos enviados.");
                        }, 1800);
                    }, 1800);
                }, 1400);
            });
            financingSendPromise.error( function (data2) {
                financingAccesoriesForm.resetContact();
                alertify.error("No se han podido enviar los datos <br /> Inténtelo más tarde.");
            });
        },
        handlerPromiseLeads: function (data) {
            var contactSndPromise;
            contactSndPromise = financingAccesoriesForm.sendContacto();
            contactSndPromise.success(financingAccesoriesForm.handlerPromiseSend);
            contactSndPromise.error(financingAccesoriesForm.handlerPromiseSend);
        },
        sendContacto: function () {
            var rootApi, data;
            data = $(financingAccesoriesForm.contactForm).serializeFormJSON();
            rootApi = AUD.getValue('#master-host');
            return AUD.postalService(rootApi + urlsApi.snd_fin_acs, data);
        },
        resetContact: function () {
            var $btnSend;
            $btnSend = $(".send_contact_form");
            AUD.resetForm(financingAccesoriesForm.contactForm);
            $(financingAccesoriesForm.loaderIcon).css("display", "none");
            $btnSend.removeAttr("disabled");
        },
        clickSend: function(event) {
            // Loader Icon
            financingAccesoriesForm.loaderIcon = "#loader_send_icon";
            // Get and save current button id
            financingAccesoriesForm.sendButton = "#" + $(this).attr('id');
            // Get the current form id, find the form with the same data-scope value
            financingAccesoriesForm.contactForm = "form#" + $(domEl.div_recurrent).find("form").attr("id");

            formErrors = formValidation.required(financingAccesoriesForm.contactForm, '.validate-required', financingAccesoriesForm.sendButton);
            if (formErrors) {
                $(financingAccesoriesForm.contactForm).css("cursor", "auto").prop("disabled", true);
                $(financingAccesoriesForm.loaderIcon).css("display", "block");
                leadsPromise = financingAccesoriesForm.sendLeads();
                leadsPromise.success(financingAccesoriesForm.handlerPromiseLeads);
                leadsPromise.error(financingAccesoriesForm.handlerPromiseLeads);
                /*
                financingAccesoriesForm.sendLeads();
                financingAccesoriesForm.sendContacto();
                financingAccesoriesForm.addContacto();
                */
            }
        }
    }