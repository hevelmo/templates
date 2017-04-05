/* ------------------------------------------------------ *\
    [Variables] 'Zone'
\* ------------------------------------------------------ */
    var section;
    var $element;
    $element = $(this);
    var IS_MOBILE, mediaquery;
    mediaquery = window.matchMedia("(max-width: 768px)");
    // Browser supports HTML5 multiple file?
    var multipleSupport, isIE;
    multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
    isIE = /msie/i.test( navigator.userAgent );
/* ------------------------------------------------------ *\
    [functions] DETEC MOBILE
\* ------------------------------------------------------ */
    /* Detect Mobile Browser : http://detectmobilebrowsers.com/ */
    function detectmobile(a){
        IS_MOBILE = false;
        if(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){
            IS_MOBILE = true;
        }
        return IS_MOBILE;
    };
/* ------------------------------------------------------ *\
    [functions] Alert Custom
\* ------------------------------------------------------ */
    function resetAlert () {
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
    [functions] __sizeCheck
\* ------------------------------------------------------ */
    function __sizeCheck(element) {
        var _cWidth;

        // current width
        _cWidth = element.width();

        // update text
        _cText = 'desktop screens > 1200px';
        $('#change-legend').html('Ver <i class="fa fa-plus"></i>');
        //console.log(_cText);

        // check block
        if(_cWidth == 1680) {
          _cText = 'desktop computer ' + _cWidth + 'px';
          //console.log(_cText);
        }
        if(_cWidth < 1680) {
            _cText = 'desktop computer ' + _cWidth + 'px';
            //console.log(_cText);
        }
        if(_cWidth <= 1280) {
          _cText = 'desktop computer ' + _cWidth + 'px';
            //console.log(_cText);
        }
        if(_cWidth < 1280) {
            _cText = 'desktop computer ' + _cWidth + 'px';
            //console.log(_cText);
        }
        if(_cWidth <= 1024) {
          _cText = 'ipad landscape ' + _cWidth + 'px';
            //console.log(_cText);
        }
        if(_cWidth < 1024) {
            _cText = 'ipad landscape ' + _cWidth + 'px';
            //console.log(_cText);
        }
        if(_cWidth == 767) {
          _cText = 'ipad portrait ' + _cWidth + 'px';
          $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','55px');
          $('#wrapper #footer #section-footer .logo .img-responsive').css({
              'margin':'0 auto',
              'width':'100%'
            });
          //console.log(_cText);
        }
        if(_cWidth <= 768) {
          _cText = 'ipad portrait ' + _cWidth + 'px';
          $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','55px');
          $('#wrapper #footer #section-footer .logo .img-responsive').css({
              'margin':'0 auto',
              'width':'100%'
            });
          //console.log(_cText);
        }
        if(_cWidth < 768) {
            _cText = 'ipad portrait ' + _cWidth + 'px';
            $('#wrapper #footer #section-footer .logo .img-responsive').css({
              'margin':'0 auto',
              'width':'100%'
            });
            //console.log(_cText);
        }
        if(_cWidth <= 640) {
          _cText = 'ipad portrait ' + _cWidth + 'px';
          $('#change-legend').html('ver <i class="fa fa-plus"></i>');
          $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
          //console.log(_cText);
        }
        if(_cWidth < 640) {
            _cText = 'ipad portrait ' + _cWidth + 'px';
            $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
            $('#footer #section-footer .newsletter').css('text-align','center');
            $('#wrapper #footer #section-footer .logo .img-responsive').css({
              'margin':'0 auto',
              'width':'60%'
            });
            //console.log(_cText);
        }
        if(_cWidth = 400) {
            _cText = 'iphone landscape ' + _cWidth + 'px';
            $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
            $('#footer #section-footer .newsletter').css('text-align','center');
            $('#wrapper #footer #section-footer .logo .img-responsive').css({
              'margin':'0 auto',
              'width':'60%'
            });
            //console.log(_cText);
        }
        if(_cWidth <= 480) {
            _cText = 'iphone landscape ' + _cWidth + 'px';
            $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
            $('#footer #section-footer .newsletter').css('text-align','center');
            $('#wrapper #footer #section-footer .logo .img-responsive').css({
              'margin':'0 auto',
              'width':'60%'
            });
            //console.log(_cText);
        }
        if(_cWidth < 480) {
            _cText = 'iphone landscape ' + _cWidth + 'px';
            $('#change-legend').html('consulta tus resultados <i class="fa fa-plus"></i>');
            $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
            $('#footer #section-footer .newsletter').css('text-align','center');
            $('#wrapper #footer #section-footer .logo .img-responsive').css({
              'margin':'0 auto',
              'width':'60%'
            });
            //console.log(_cText);
        }
        if(_cWidth < 320) {
            _cText = 'iphone portrait ' + _cWidth + 'px';
            $('#change-legend').html('consulta tus resultados <i class="fa fa-plus"></i>');
            //console.log(_cText);
        }
        if(_cWidth < 240) {
            _cText = 'so small phones ' + _cWidth + 'px';
            $('#change-legend').html('consulta tus resultados <i class="fa fa-plus"></i>');
            //console.log(_cText);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] MATCHMEDIA
\* ------------------------------------------------------ */
    var matchMediaMethod = {
        mediaquery: function() {
            if (mediaquery.matches) {
                // mediaquery es 768px
            } else {
                // mediaquery no es 768px
            }
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] scrollHeaderMethods
\* ------------------------------------------------------ */
    var scrollHeaderMethods = {
        toTopScroll : function() {
            if ($element.scrollTop() < 200) {
                $('#totop').fadeOut();
            } else {
                $('#totop').fadeIn();
            }
        },
        clickToTopScroll : function(event) {
            $('html, body').animate({scrollTop:0}, 'fast');
            return false;
        },
        pageHeaderScroll : function() {
            if ($element.scrollTop() > 50) {
                $("body").addClass("page-header-scroll");
            } else {
                $("body").removeClass("page-header-scroll");
            }
        }
    }
/* ------------------------------------------------------ *\
    [Metodos] Favicon
\* ------------------------------------------------------ */
    var favicon = {
        load_favicon: function() {
            favicon.change("img/ico/tamizgenico.ico");
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
    [Metodos] menuResponsiveMethod
\* ------------------------------------------------------ */
    var menuResponsiveMethod = {
        menuResponsive: function() {
            $(".menu-responsive").toggle(function(){
                $('.menu-responsive span.fa').addClass('active');
                $('.menu').addClass('active');
                //console.log('menu add active');
            },function() {
                $('.menu-responsive span.fa').removeClass('active');
                $('.menu').removeClass('active');
                //console.log('menu remove active disabled');
            });
        },
        clickMenuResponsive: function(event) {
            $('.menu-responsive span.fa').removeClass('active');
            $('.menu').removeClass('active');
            //console.log('click remove active');
        },
        stopPropagation: function(event) {
            event.stopPropagation();
            //console.log('menu stop');
        }
    }
/* ------------------------------------------------------ *\
    [functions] setWidthme
\* ------------------------------------------------------ */
    var setWidthMethod = {
        setWidth: function() {
            var arrayText, arrayText2;

            arrayText=Array();
            arrayText2=Array();

            $('.grid-content').each( function () {
                var firstDiv, secondDiv;

                firstDiv = $(this).find("#content-title");
                secondDiv = $(this).find("#container-paragraph");

                if( firstDiv.html().length > 115 ) {
                    arrayText.push( firstDiv.html() );

                    firstDiv.html( firstDiv.html().substr( 0,115 ) + "<i style='color: #000; font-size: 14px;'>...</i>" );

                    //$(this).append( "<h3 class='mas cortado' id='"+(arrayText.length-1)+"'>(más)</h3>" );
                }
                if( secondDiv.html().length > 220 ) {
                    arrayText2.push( secondDiv.html() );

                    secondDiv.html( secondDiv.html().substr( 0,220 ) + "<i style='color: #000; font-size: 14px;'>...</i>" );

                    //$(this).append("<h3 class='mas cortado' id='"+(arrayText2.length-1)+"'>(más)</h3>");
                }
                $(this).show();
            });
        }
    }
/* ------------------------------------------------------ *\
    [Methods] equalHeightsMethods
\* ------------------------------------------------------ */
    var equalHeightsMethods = {
        equalHeightsLoad : function() {
            var altomax = 0;
            $('.equal-height').each(function(){
                if( $(this).height() > altomax ){
                    altomax = $(this).height();
                }
            });
            $('.equal-height').height( altomax );
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
                $(this).val('on');
                $('#contact_subscription').val('Activado');
                $('#test_drive_model_subscription').val('Activado');
            } else {
                $(this).parent('label').find(':checkbox').attr('checked', false);
                $(this).parent('label').removeClass('checkbox-checked');
                $(this).val('off');
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
    [Methods] carouselMethod
\* ------------------------------------------------------ */
    var carouselMethod = {
        initCarousel : function () {
            $('.carousel').carousel();
            //console.log('entra carousel');
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionHeaderWrapperMethod
\* ------------------------------------------------------ */
    var viewSectionHeaderWrapperMethod = {
        recurrentSectionHeaderWrapper: function() {
            dataStartHeaderNavAttributes = [
                ['header', {'id':domEl._start_header_wrapper, 'class':'header-wrapper'}, '', 1],
            ];
            TAM.appendMulti(domEl.div_header_nav_recurrent, dataStartHeaderNavAttributes);
        },
        loadTemplatesSectionHeaderWrapper: function() {
            TAM.loadTemplate(tempsNames.recurrent_start_header_nav, domEl._start_header_wrapper_name);
        },
        viewSectionHeaderWrapper: function() {
            viewSectionHeaderWrapperMethod.recurrentSectionHeaderWrapper();
            viewSectionHeaderWrapperMethod.loadTemplatesSectionHeaderWrapper();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionSliderWrapperMethod
\* ------------------------------------------------------ */
    var viewSectionSliderWrapperMethod = {
        recurrentSectionSliderWrapper: function() {
            dataStartSliderWrapperAttributes = [
                ['div', {'id':domEl._start_slider_wrapper, 'class':'slider-wrapper'}, '', 1],
            ];
            TAM.appendMulti(domEl.div_slider_recurrent, dataStartSliderWrapperAttributes);
        },
        loadTemplatesSectionSliderWrapper: function() {
            TAM.loadTemplate(tempsNames.recurrent_start_banner_slider, domEl._start_slider_wrapper_name);
        },
        viewSectionSliderWrapper: function() {
            viewSectionSliderWrapperMethod.recurrentSectionSliderWrapper();
            viewSectionSliderWrapperMethod.loadTemplatesSectionSliderWrapper();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionHeaderBGWrapperMethod
\* ------------------------------------------------------ */
    var viewSectionHeaderBGWrapperMethod = {
        recurrentSectionHeaderBGWrapperSection: function() {
            dataStartHeaderBGWrapperAttributes = [
                ['div', {'id':domEl._start_header_bg_wrapper, 'class':'header-bg-wrapper'}, '', 1],
            ];
            TAM.appendMulti(domEl.div_header_bg_recurrent, dataStartHeaderBGWrapperAttributes);
        },
        loadTemplatesSectionHeaderBGWrapper: function() {
            TAM.loadTemplate(tempsNames.recurrent_start_header_bg, domEl._start_header_bg_wrapper_name);
        },
        viewSectionHeaderBGWrapper: function() {
            viewSectionHeaderBGWrapperMethod.recurrentSectionHeaderBGWrapperSection();
            viewSectionHeaderBGWrapperMethod.loadTemplatesSectionHeaderBGWrapper();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionHomeMethod
\* ------------------------------------------------------ */
    var viewSectionHomeMethod = {
        loadTemplatesSectionHome: function() {
            TAM.loadTemplate(tempsNames.recurrent_home_start_features, domEl._start_section_home_features_name);
        },
        recurrentSectionHome: function() {
            dataStartSectionHomeFeaturesAttributes = [
                ['div', {'id':domEl._start_section_home_features, 'class':''}, '', 1]
            ];
            TAM.appendMulti(domEl.div_recurrent, dataStartSectionHomeFeaturesAttributes);
        },
        viewSectionHome: function() {
            viewSectionHomeMethod.recurrentSectionHome();
            viewSectionHomeMethod.loadTemplatesSectionHome();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionAboutUsMethod
\* ------------------------------------------------------ */
    var viewSectionAboutUsMethod = {
        loadTemplatesSectionAboutUs: function() {
            TAM.loadTemplate(tempsNames.recurrent_about_us_start_features, domEl._start_section_about_us_features_name);
        },
        recurrentSectionAboutUs: function() {
            dataStartSectionAboutUsFeaturesAttributes = [
                ['div', {'id':domEl._start_section_about_us_features, 'class':''}, '', 1]
            ];
            TAM.appendMulti(domEl.div_recurrent, dataStartSectionAboutUsFeaturesAttributes);
        },
        viewSectionAboutUs: function() {
            viewSectionAboutUsMethod.recurrentSectionAboutUs();
            viewSectionAboutUsMethod.loadTemplatesSectionAboutUs();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionServicesMethod
\* ------------------------------------------------------ */
    var viewSectionServicesMethod = {
        loadTemplatesSectionServices: function() {
            TAM.loadTemplate(tempsNames.recurrent_services_start_features, domEl._start_section_services_features_name);
        },
        recurrentSectionServices: function() {
            addStyleGallery = [
                ['link', {'id':'content-add-style-services-plugins', 'rel':'stylesheet', 'class':'style-link-services', 'href':'css/styles/pages/style.pages.gallery.css'}, '', 1],
                ['link', {'id':'content-add-style-services-plugins', 'rel':'stylesheet', 'class':'style-link-services', 'href':'css/styles/pages/style.pages.venobox.css'}, '', 1]
            ];
            TAM.appendMulti(domEl.head_recurrent, addStyleGallery);
            dataStartSectionServicesFeaturesAttributes = [
                ['div', {'id':domEl._start_section_services_features, 'class':''}, '', 1]
            ];
            TAM.appendMulti(domEl.div_recurrent, dataStartSectionServicesFeaturesAttributes);
        },
        prependCaret: function() {
            carretInlineAttributes = {'class': 'fa fa-caret-right'}
            TAM.prependOne('.list-parrafo > span', 'i', carretInlineAttributes, '', 0);
        },
        viewSectionServices: function() {
            viewSectionServicesMethod.recurrentSectionServices();
            viewSectionServicesMethod.loadTemplatesSectionServices();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionObjectivesMethod
\* ------------------------------------------------------ */
    var viewSectionObjectivesMethod = {
        loadTemplatesSectionObjectives: function() {
            TAM.loadTemplate(tempsNames.recurrent_objectives_start_features, domEl._start_section_objectives_features_name);
        },
        recurrentSectionObjectives: function() {
            dataStartSectionObjectivesFeaturesAttributes = [
                ['div', {'id':domEl._start_section_objectives_features, 'class':''}, '', 1]
            ];
            TAM.appendMulti(domEl.div_recurrent, dataStartSectionObjectivesFeaturesAttributes);
        },
        viewSectionObjectives: function() {
            viewSectionObjectivesMethod.recurrentSectionObjectives();
            viewSectionObjectivesMethod.loadTemplatesSectionObjectives();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] viewSectionContactMethod
\* ------------------------------------------------------ */
    var viewSectionContactMethod = {
        loadTemplatesSectionContact: function() {
            TAM.loadTemplate(tempsNames.recurrent_contact_start_features, domEl._start_section_contact_features_name);
        },
        recurrentSecionContact: function() {
            dataStartSectionContactFeaturesAttributes = [
                ['div', {'id':domEl._start_section_contact_features, 'class':''}, '', 1]
            ];
            TAM.appendMulti(domEl.div_recurrent, dataStartSectionContactFeaturesAttributes);
        },
        viewSectionContact: function() {
            viewSectionContactMethod.recurrentSecionContact();
            viewSectionContactMethod.loadTemplatesSectionContact();
            contactFormMethods.refreshForm();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] gmapMethod
\* ------------------------------------------------------ */
    var gmapMethod = {
        gmap: function() {
            var myOptions, map, marker, content_infoWindow, infowindow;
            myOptions = {
                zoom: 16,
                scrollwheel: false,
                center: new google.maps.LatLng(20.676602, -103.375033),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(20.676602, -103.375033)
            });
            content_infoWindow = '<div class="marker-info-win" style="text-align: center;">'+
                                 '<div class="marker-inner-win"><span class="info-content">'+
                                 '<img src="img/ucd-corp-maps.png" alt="logo ucd" style="margin-botton: 10px;" width="80">'+
                                 '<h5 class="marker-heading" style="color:#000; padding: 0px; margin: 0px;">UNIDAD CLÍNICA DIAGNÓSTICA</h5>'+
                                 '<span>Av Hidalgo, Ladrón de Guevara, 44680 Guadalajara, Jal.</span>' +
                                 '</span>'+
                                 '</div></div>';
            infowindow = new google.maps.InfoWindow({
                content: content_infoWindow
            });
            google.maps.event.addListener(marker, "click", function () {
                infowindow.open(map, marker);
            });
            infowindow.open(map, marker);
        },
        gmapHolder: function() {
            $(this).addClass('disable-overlay');
        },
        gmapWindowScroll: function() {
            $('.map-holder').removeClass('disable-overlay');
        },
        gmapInit: function() {
            google.maps.event.addDomListener(window, 'load', gmapMethod.gmap);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] contactFormMethods
\* ------------------------------------------------------ */
    var contactFormMethods = {
        addDataFormContact: function() {
            var dataFormContact;
            dataFormContact = $('#send_ucd_form_contact').serializeFormJSON();
            return TAM.postalService(urlsApi.send_form_contact, dataFormContact);
        },
        fillingControl: function() {
            var validFieldItems, dataFormContact, isFull, isNoEmpty;
            validFieldItems = [
                'ucd_contact_get_name', 'ucd_contact_get_email', 'ucd_contact_get_subject', 'ucd_contact_get_message'
            ];
            dataFormContact = $('#send_ucd_form_contact').serializeFormJSON();
            isFull = TAM.validFormFull(dataFormContact, validFieldItems);
            $('#ucd_send_contact_submit').attr('disabled', !isFull);
            //console.log($('#send_ucd_form_contact').serializeFormJSON());
        },
        refreshForm : function() {
            TAM.loadTemplate(tempsNames.recurrent_contact_start_form_wrapper, domEl.div_recurrent_form_contact_wrapper);
        },
        resetForm : function() {
            TAM.resetForm('#send_ucd_form_contact');
            $('#ucd_send_contact_submit').attr('disabled', true);
        },
        reset_pre_loader_in: function() {
            $('#send_message_form_loader').fadeIn();
        },
        reset_pre_loader_out: function() {
            $('#send_message_form_loader').fadeOut();
        },
        finchNavigateReturn: function() {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            Finch.navigate('/');
        },
        sendContactForm : function(event) {
            ga('send', 'event', 'ucd_send_contact_submit', 'click', 'enviar-contacto');
            contactFormMethods.fillingControl();
            var contactPromise = contactFormMethods.addDataFormContact();
            contactPromise.success(function(data){
                setTimeout(function () {
                    setTimeout(function () {
                        contactFormMethods.reset_pre_loader_in();
                    }, 1800);
                    setTimeout(function () {
                        setTimeout(function () {
                            contactFormMethods.reset_pre_loader_out();
                        }, 1800);
                        setTimeout(function () {
                            var correo = $("#contact-get-email").val();
                            $('#email-from').text(correo);
                            setTimeout(function () {
                                $('#send_message_form_thanks').fadeIn();
                            }, 1800);
                            setTimeout(function () {
                                setTimeout(function () {
                                    $('#send_message_form_thanks').fadeOut();
                                    contactFormMethods.resetForm();
                                    setTimeout(function () {
                                        contactFormMethods.finchNavigateReturn();
                                    }, 2600);
                                }, 1800);
                            }, 4500);
                        }, 3500);
                    }, 2000);
                }, 500);
            });
            contactPromise.error(function(data){
                setTimeout(function () {
                    setTimeout(function () {
                        contactFormMethods.reset_pre_loader_in();
                    }, 1800);
                    setTimeout(function () {
                        setTimeout(function () {
                            contactFormMethods.reset_pre_loader_out();
                        }, 1800);
                        setTimeout(function () {
                            setTimeout(function () {
                                var correo = $("#contact-get-email").val();
                                $('#email-from').text('El '+ correo +' que ingresaste no es valido.');
                                setTimeout(function () {
                                    $('#send_message_form_error').fadeIn();
                                    setTimeout(function () {
                                        $('#send_message_form_error').fadeOut();
                                        contactFormMethods.resetForm();
                                    }, 1800);
                                }, 2900);
                            }, 1500);
                        }, 900);
                    }, 2000);
                }, 500);
            });
        }
    }
/* ------------------------------------------------------ *\
    [Methods] clikGoMethods
\* ------------------------------------------------------ */
    var clikGoMethods = {
        clickGo_home: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            menuResponsiveMethod.menuResponsive();
            ga('send', 'event', 'Menu Inicio', 'Sección Inicio');
            Finch.navigate('/');
        },
        clickGo_about_us: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            menuResponsiveMethod.menuResponsive();
            ga('send', 'event', 'Menu Nosotros', 'Sección Nosotros');
            Finch.navigate('/nosotros');
        },
        clickGo_services: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            menuResponsiveMethod.menuResponsive();
            ga('send', 'event', 'Menu Servicios', 'Sección Servicios');
            Finch.navigate('/servicios');
        },
        clickGo_objectives: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            menuResponsiveMethod.menuResponsive();
            ga('send', 'event', 'Menu Objetivos', 'Sección Objetivos');
            Finch.navigate('/objetivos');
        },
        clickGo_contact: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            ga('send', 'event', 'Menu Contacto', 'Sección Contacto');
            menuResponsiveMethod.menuResponsive();
            Finch.navigate('/contacto');
        }
    }
/* ------------------------------------------------------ *\
[Methods] removeRecurrentsMethod
\* ------------------------------------------------------ */
var removeRecurrentsMethod = {
    removeRecurrents: function() {
        removeRecurrentsMethod.removeRecurrent_header_nav();
        removeRecurrentsMethod.removeRecurrent_slider();
        removeRecurrentsMethod.removeRecurrent_header_bg();
        removeRecurrentsMethod.removeRecurrent_start_home();
        removeRecurrentsMethod.removeRecurrent_start_about_us();
        removeRecurrentsMethod.removeRecurrent_start_services();
        removeRecurrentsMethod.removeRecurrent_start_objectives();
        removeRecurrentsMethod.removeRecurrent_start_contact();
    },
    removeRecurrent_header_nav: function() {
        $(domEl._start_header_wrapper_name).remove();
    },
    removeRecurrent_slider: function() {
        $(domEl._start_slider_wrapper_name).remove();
    },
    removeRecurrent_header_bg: function() {
        $(domEl._start_header_bg_wrapper_name).remove();
    },
    removeRecurrent_start_home: function() {
        $(domEl._start_section_home_features_name).remove();
    },
    removeRecurrent_start_about_us: function() {
        $(domEl._start_section_about_us_features_name).remove();
    },
    removeRecurrent_start_services: function() {
        $(domEl._start_section_services_features_name).remove();
        $('.style-link-services').remove();
    },
    removeRecurrent_start_objectives: function() {
        $(domEl._start_section_objectives_features_name).remove();
    },
    removeRecurrent_start_contact: function() {
        $(domEl._start_section_contact_features_name).remove();
    }
}
/* ------------------------------------------------------ *\
    [Methods] currentSectionMethod
\* ------------------------------------------------------ */
    var currentSectionMethod = {
        currentSection_home: function() {
            $('head title#head-change-section-title').html('Tamizgen | Una gota de sangre, un regalo de Vida');
            $('.list-unstyled .list-inline-home').addClass('active');
        },
        currentSection_about_us: function() {
            $('head title#head-change-section-title').html('Tamizgen | Nosotros');
            $('.list-unstyled .list-inline-about-us').addClass('active');
            $('#header-bg').addClass('header-bg-about-us');
            currentSectionMethod.currentHeaderBGWrapper();
            //$('h2.title').prepend('Nosotros');
            $('h2.title').html('<img src="img/logo/logo-tamizgen-hor.png" alt="" />');
        },
        currentSection_services: function() {
            $('head title#head-change-section-title').html('Tamizgen | Servicios');
            $('.list-unstyled .list-inline-services').addClass('active');
            $('#header-bg').addClass('header-bg-services');
            currentSectionMethod.currentHeaderBGWrapper();
            $('h2.title').prepend('Servicios');
        },
        currentSection_objectives: function() {
            $('head title#head-change-section-title').html('Tamizgen | Objetivos');
            $('.list-unstyled .list-inline-objectives').addClass('active');
            $('#header-bg').addClass('header-bg-objectives');
            currentSectionMethod.currentHeaderBGWrapper();
            $('h2.title').prepend('Objetivos');
        },
        currentSection_contact: function() {
            $('head title#head-change-section-title').html('Tamizgen | Contacto');
            $('.list-unstyled .list-inline-contact').addClass('active');
            $('#header-bg').addClass('header-bg-contact');
            currentSectionMethod.currentHeaderBGWrapper();
            $('h2.title').prepend('Contacto');
        },
        currentHeaderBGWrapper: function() {
            $('#header-bg').addClass('header-bg');
            if (mediaquery.matches) {
                $('.header-bg-wrapper-position').css('padding-top', '0');
                $('.header-bg').attr('style','background-size: 100% 75% !important; height: 155px !important; background-position: 0px 40px;');
                //console.log('mediaquery es 768px');
            } else {
                $('.header-bg-wrapper-position').css('padding-top', '65px');
                $('.header-bg').attr('style', '');
                //console.log('mediaquery no es 768px');
            }
        },
        remove_currentSection: function() {
            $('.list-inline-home').removeClass('active');
            $('.list-inline-about-us').removeClass('active');
            $('.list-inline-services').removeClass('active');
            $('.list-inline-objectives').removeClass('active');
            $('.list-inline-contact').removeClass('active');
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
            value = TAM.roundNDecimalFormat(value, 2);
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
        upload          : 'Archivos validos: PDF, DOC, DOCX'
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
                        case 'area':
                            if(  !is_model_name( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
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
            var target = $(event.target);
            //console.log(target);
            if( target.is('input') || target.is('textarea') || target.is('input[type="file"]') ){
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
