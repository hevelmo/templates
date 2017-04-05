$( document ).ready( function(){
    var concessionaires;
    var map;
    var map_markers = [];
    var script_url = '/motos/services/concessionaires' ;
    var title_box = null;
    var concessionaire_preselected = 0;
    var concessionaire_detail_selected = false;
    var current_concessionaire = '', current_concessionaire_id = -1, concessionaire_open = false,
        concessionaire_template = '<div class="data-wrapper">' +
            '<h1 id="c-title">{{name}}</h1>'+
            '</div>';

    function imageExists(url, callback) {
      var img = new Image();
      img.onload = function() { callback(true); };
      img.onerror = function() { callback(false); };
      img.src = url;
    }

    var x = 0;
    function setImages(type, optional) {
        if(type === 'small'){
            if(x < $('.concessionaire .image').length){
                var image = $('#concessionaire_'+(x+1)),
                    small = image.data('image') + '-small.jpg';

                imageExists(small, function(exists) {
                    if(exists)
                        image.css('background-image', 'url("'+small+'")');
                    x++;
                    setImages('small');
                });
            }
        }else{
            var image = $('#concessionaire-image'),
                ipath = $('#concessionaire-image').data('cdn'),
                big = ipath +'motos/images/sections/concessionaires/previews/'+ optional +'-big.jpg',
                def = '/motos/images/sections/concessionaires/suzuki_default.png';

            imageExists(big, function(exists) {
                if(exists)
                    image.css('background-image', 'url("'+big+'")');
                else
                    image.css('background-image', 'url("'+def+'")');
                x++;
                setImages('small');
            });
        }

    }setImages('small');

    $.open_concessionaire_by_key = function( key , change ){
        if( current_concessionaire == key && concessionaire_open && !IS_MOBILE ){
            return;
        }
        $('html, body').animate({scrollTop: '0px'}, 400);
        current_concessionaire = key;
        var cc = null, ic = concessionaires.length, cm;
        while( ic-- ){
            if( concessionaires[ic].keyword == current_concessionaire ){
                cc = concessionaires[ic];
                current_concessionaire_id = cc.id;
                break;
            }
        }
        if( cc == null ){
            $("#concessionaires-data").removeClass('active');
            return;
        }
        ic = map_markers.length;
        while( ic-- ){
            cm = map_markers[ ic ];
            if( cm.custom_data.keyword ==  current_concessionaire  ){
                cm.select_me();
            }else{
                cm.reset_me();
            }
        }
        if( change ){
            try{
                window.history.pushState( null , cc.name, "/motos/concesionarias/suzuki-" + key );
            }catch( e ){ }
        }
        $("#concessionaires-data").addClass('active');
        concessionaire_open = true;
        $.adjust_map_width();

        var nw = new google.maps.LatLng(
            cc.lat,
            cc.lon
        );
        map.setCenter( nw );
        $('#concessionaires-dynamic-list li.concessionaire').removeClass('active');
        $('#concessionaires-dynamic-list li.concessionaire').each( function( ii ){
            if( $(this).attr('data-key') == current_concessionaire ){
                $(this).addClass('active');
                var st = $('.concessionaire-list').scrollTop();
                var gt = $(this).offset().top - 351 + st;
                $('.concessionaire-list').stop().delay( 100 ).animate( { scrollTop: gt }, 600 );
                return false;
            }
        });

        $('#concessionaire-title').text( cc.name );
        $('#concessionaire-address').text( cc.address );
        $('#concessionaire-zip').text( cc.zip );
        $('#concessionaire-phone').text( cc.phone );
        $('#concessionaire-phone').attr({href:'call:' +  cc.phone} );
        $('#concessionaire-phone').bind("click", function () {
            ga('send', 'event', 'Distribuidores', 'llamar', cc.name);
        });
        //Email patch  <a id="concessionaire-email" href="mailto:" target="_blank">prueba@prueba.com</a>
        $('#concessionaire-email').remove();
        $.each(cc.emails, function (key,value){
           var countEmpty = 0;
           if(value.email!="null"){
               var appendHtmlEmail = '<a id="concessionaire-email" href="mailto:'+value.email+'" target="_blank">'+value.email+'</a><br/>';
               $('#emailData').append(appendHtmlEmail);
           } else {
               countEmpty++;
           }
           if(countEmpty!=0){
               $('#emailData').hide();
           }
        });

        if( cc.website != 'No' ){
            $('#concessionaire-website-wrapper').show();
            $('#concessionaire-website').text( cc.website );
            $('#concessionaire-website').attr({href:  cc.website } );
            $('#concessionaire-website').bind("click", function () {
                ga('send', 'event', 'Distribuidores', 'outbound_clic_web', cc.name);
            });
        }else{
            $('#concessionaire-website-wrapper').hide();
        }

        if( parseInt(cc.authorized_workshop) === 1 ){
            $('.data.tipo').addClass('taller');
            $('#concessionaire-tipo').text( 'Taller Autorizado' );
        }else{
            $('.data.tipo').addClass('distribuidora');
            $('#concessionaire-tipo').text( 'Agencia' );
        }

        setImages('big', cc.keyword);

        if (IS_MOBILE) {
            $("#concessionaires-list").hide();
            $("#concessionaires-data").css({
                height: 'auto',
                paddingTop: '130px'
            });
            // $('#waze-wrapper').html('<a href="waze://?ll=' +cc.lat+','+cc.lon+'"><span>Llévame ahí</span></a>')
            $('#open-waze').attr('href', 'waze://?ll=' +cc.lat+','+cc.lon);
        }
    }
    $.set_concessionaire_by_url = function( url ){
        var d = url.split('/suzuki-');
        if( d.length > 1 ){
            $.open_concessionaire_by_key( d[1], false );
        }
    }
    function getCircle(magnitude) {
        return {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: 1,
            scale: 1,
            strokeColor: 'white',
            strokeWeight: .5
        };
    }
    $.get_map_data = function( ){
        $.ajax({
            success: function( data ){
                concessionaires = data.data;

                //setup all markers
                var i1;
                var icon_latLon, conce, conce_select_html,
                    icon_base   = 'http://' + location.host +'/motos/images/sections/concessionaires/',
                    icon_url    = icon_base + 'marker-regular.png';
                if( BrowserDetect.browser == 'Explorer' ){
                    if( Number( BrowserDetect.version ) < 9 ){
                        icon_url = icon_base + 'marker-regular-old-ie.png';
                    }
                }
                var icon_options = {
                    boxStyle: {
                        background  : "url('/motos/images/sections/concessionaires/marker-active-bg.png') no-repeat",
                        height      : "67px",
                        width       : "250px"
                    },
                    closeBoxURL: '',
                    content: '',
                    disableAutoPan: false,
                    enableEventPropagation: false,
                    infoBoxClearance: new google.maps.Size(0, 0),
                    maxWidth: 0,
                    pane: 'floatPane',
                    pixelOffset: new google.maps.Size( -25, -71),
                    zIndex: null
                };
                conce_select_html = '';


                for( i1 in concessionaires ){
                    conce =  concessionaires[i1];
                    conce_select_html += '<option value="' + conce.keyword + '" data-metadata="'+ conce.address+'">' + conce.name + ", " + conce.state+ '</option>';
                    icon_latLon = new google.maps.LatLng( conce.lat , conce.lon );

                    var marker = new google.maps.Marker({
                        custom_data : conce,
                        position    : icon_latLon,
                        map         : map,
                        icon        : icon_url,

                        reset_me    : function(){

                        },
                        select_me   : function(){
                            if( title_box != null ){
                                title_box.close();
                            }
                            var html= '<div class="map-concessionaire-name"><span>' + this.custom_data.name +'</span></div>';
                            icon_options.content = html;
                            title_box  = new InfoBox( icon_options );
                            title_box.open( map, this );
                        },
                        shadow      : icon_base + 'marker-shadow.png'
                    });
                    google.maps.event.addListener( marker, 'click', function() {
                        $.open_concessionaire_by_key( this.custom_data.keyword , true )
                    });
                    map_markers.push( marker );
                }

                $("#concessionaire-select").html( conce_select_html );
                $("#concessionaire-select").chosen();
                $("#concessionaire-select").on('change', function( e ){
                    var val = $(this).val();
                    $.open_concessionaire_by_key( val, true );
                });
                $.set_concessionaire_by_url( window.location.pathname, false );
                $('#concessionaires-dynamic-list li.concessionaire, #concessionaires-dynamic-list a').on('click', function( e ){
                    e.preventDefault();
                    if( $(this).is('a') ){
                        //$.set_concessionaire_by_url( $(this).attr('href') );
                    }else{
                        $.open_concessionaire_by_key( $(this).attr('data-key'), true );
                        ga('send', 'event', 'Concesionarias', 'Clic', $(this).find(".address h3 a").text());
                    }
                });
                try{
                    window.addEventListener('popstate', function( e ) {
                        $.set_concessionaire_by_url( window.location.pathname  );
                    });
                }catch( e ){ }
                $('a.concessionaire-close').on('click',function( e ){
                    e.preventDefault();
                    $("#concessionaires-data").removeClass('active');
                    concessionaire_open = false;
                    $.adjust_map_width();
                });
            },
            url: script_url + '/all'
        });
    }

    $('#open-test-drive').on('click',function( e ){
        e.preventDefault();
        var params = {
            concessionaire_id  : current_concessionaire_id,
            concessionaire_key : current_concessionaire,
            force_open         : true
        };

        if(typeof already_panel_open === 'undefined' ){
            $.openPanel( 'test-drive', params );
        }
        else {
            $.scroll_to('top');
            html = $.get_header_html( 'test-drive', params );
            data = {
                html : html
            };
            div_html = Mustache.render( section_wrapper_template , data );
            $('#header-sections-wrapper').html( div_html );
            $.start_header_listeners( 'test-drive', params );
        }

    });

    if ( IS_MOBILE ) {
        $("#see-all").click(function (e) {
            e.preventDefault();
            $(".concessionaire-search").hide();
            $(".concessionaire-list").fadeIn();
        });

        $("#back-list-concessionaires, .concessionaire-close-box, .view-all").click(function (e) {
            e.preventDefault();
            concessionaire_preselected = 0;
            concessionaire_detail_selected = true;
            $("#concessionaires-data").css({
                height: '0',
                paddingTop: '0'
            });
            $(".concessionaire-search").hide();
            $("#concessionaires-list, .concessionaire-list").fadeIn();
            $(".concessionaire").removeClass("active");
            initialize_map();
        }).after('');

        // $('.concessionaire-close-box').click(function(){
        //     window.location = 'http://'+window.location.hostname+'/motos/concesionarias/';
        // });
    }
    function initialize_map(){
        var c_preselected, map_latLon, map_center;
        try{
            c_preselected = parseInt( $("#map_canvas").attr("data-concessionaire-preselected-id") );
            if( isNaN(c_preselected) ){
                c_preselected = 0;
            }
        }catch( e ){
            c_preselected = 0;
        }
        if( c_preselected > 0 ){
            concessionaire_preselected = c_preselected;
            map_latLon = ( $("#map_canvas").attr("data-lat-lon") ).split(',');
            map_center = new google.maps.LatLng( map_latLon[0] , map_latLon[1] );
        }else{



            map_center = new google.maps.LatLng( 19.43259 , -99.133329 );
        }


        // Create an array of styles.
        var styles = [
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                  { "visibility": "off" }
                ]
            },{
                "featureType": "poi",
                "stylers": [
                  { "visibility": "off" }
                ]              
            }
        ];

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map_options = {
            center: map_center,
            panControl: !IS_MOBILE,
            zoomControl: !IS_MOBILE,
            mapTypeControl: false,
            streetViewControl: !IS_MOBILE,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 13,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
        };
        map = new google.maps.Map( document.getElementById("map_canvas"), map_options );

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        if (!concessionaire_detail_selected)
            $.get_map_data();
    }
    google.maps.event.addDomListener( window, "load", initialize_map);
    $.adjust_map_width = function( redo ){

        $('.concessionaire-list').height(
            $('#concessionaires-map').height() - 256
        );
        $('#concessionaires-data .content').height(
            $('#concessionaires-map').height()
        );
        var ls_w = $("#concessionaires-list").width() + 1;
        var da_w = 0;
        if( $("#concessionaires-data").is('.active') ){
            $("#concessionaires-data:hidden").css({width:1}).show();
            da_w = 330;
        }
        var wi_w = $("#concessionaires" ).width();
        var ma_w = wi_w - ls_w - da_w;
        $("#concessionaires-data").width( da_w );
        $("#concessionaires-map" ).width( ma_w );
    }
    $(window).resize(function() {
        $.adjust_map_width();
    });
    $(document).resize(function() {
        $.adjust_map_width();
    });
    $.adjust_map_width();

    if(!IS_MOBILE){
        $('#concessionaire-select').on('change', function(evt, params) {
            console.log(params);
            ga('send', 'event', 'Distribuidores', 'Ubicar', params.selected);        
        });
    }
});