$( document ).ready( function(){
    var concessionaires;
    var map;
    var map_markers = [];
    var script_url = '/services/concessionaires' ;
    var title_box = null;
    var concessionaire_preselected = 0;
    var concessionaire_preselected_n = 0;
    var concessionaire_detail_selected = false;
    var concessionaire_detail_selected_n = false;
    var current_concessionaire = '', current_concessionaire_id = -1, concessionaire_open = false,
        concessionaire_template = '<div class="data-wrapper">' +
            '<h1 id="c-title">{{name}}</h1>'+
            '</div>';

    $.open_concessionaire_by_key = function( key , change ){
        if( current_concessionaire == key && concessionaire_open && !IS_MOBILE ){
            return;
        }
        console.log('1: current_concessionaire');
        console.log(current_concessionaire);
        console.log('2: concessionaire_open');
        console.log(concessionaire_open);
        $('html, body').animate({scrollTop: '0px'}, 400);
        current_concessionaire = key;
        var cc = null, ic = concessionaires.length, cm;
        console.log(ic);
        while( ic-- ){
            if( concessionaires[ic].key == current_concessionaire ){
                cc = concessionaires[ic];
                current_concessionaire_id = cc.id;
                console.log('3: click -> cc');
                console.log(cc);
                break;
            }
        }
        if( cc == null ){
            $("#concessionaires-data").removeClass('active');
            console.log('remove class: ' + cc);
            return;
        }
        ic = map_markers.length;
        console.log(ic);
        console.log(map_markers);
        console.log(map_markers.length);
        while( ic-- ){
            cm = map_markers[ ic ];
            console.log(map_markers[ ic ]);
            if( cm.custom_data.key ==  current_concessionaire  ){
                console.log(ic);
                cm.select_me();
                console.log(cm.reset_me());
                console.log('while if');
                console.log(cm);
                console.log(cm.custom_data);
                console.log(cm.custom_data.key);
                console.log(current_concessionaire);
            }else{
                console.log(ic);
                cm.reset_me();
                console.log(cm.reset_me());
                console.log('while else');
                console.log(cm);
                console.log(cm.custom_data);
                console.log(cm.custom_data.key);
                console.log(current_concessionaire);
            }
        }
        if( change ){
            try{
                window.history.pushState( null , cc.name, "/concesionarias/suzuki-" + key + ".html");
            }catch( e ){ }
            console.log(change);
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
                var gt = $(this).offset().top - 291 + st;
                $('.concessionaire-list').stop().delay( 100 ).animate( { scrollTop: gt }, 600 );
                return false;
            }
        });
        $('#concessionaire-title').text( cc.name );
        console.log(cc.name);
        $('#concessionaire-address').text( cc.address );
        console.log(cc.address);
        $('#concessionaire-zip').text( cc.zip );
        console.log(cc.zip);
        $('#concessionaire-phone').text( cc.phone );
        console.log(cc.phone);
        $('#concessionaire-phone').attr({href:'call:' +  cc.phone} );
        if( cc.website != '' ){
            $('#concessionaire-website-wrapper').show();
            //$('#concessionaire-website').text( cc.website );
            $('#concessionaire-website').attr({href:  cc.website } );
        }/*else{
            $('#concessionaire-website-wrapper').hide();
        }*/
        $('#concessionaire-image').attr({
            alt     : cc.name,
            src     : '../images/sections/concessionaires/previews/' + cc.key + '-big.jpg',
            title   : cc.name
        });
        if (IS_MOBILE) {
            $("#concessionaires-list").hide();
            $("#concessionaires-data").css({
                //height: 'auto',
                paddingTop: '130px'
            });
        }
    }
    $.set_concessionaire_by_url = function( url ){
        var d = url.split('/suzuki-');
        if( d.length > 1 ){
            $.open_concessionaire_by_key( d[1], false );
            console.log('4: d');
            console.log(d);
            console.log(url);
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
                console.log('5: concessionaires');
                console.log(concessionaires);
                //setup all markers
                var i1;
                var icon_latLon, conce, conce_select_html,
                    icon_base   = 'http://' + location.host +'/images/sections/concessionaires/',
                    icon_url    = icon_base + 'marker-regular.png';
                if( BrowserDetect.browser == 'Explorer' ){
                    if( Number( BrowserDetect.version ) < 9 ){
                        icon_url = icon_base + 'marker-regular-old-ie.png';
                    }
                }
                var icon_options = {
                    boxStyle: {
                        background  : "url('/images/sections/concessionaires/marker-active-bg.png') no-repeat",
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
                    console.log('6: conce');
                    console.log(conce);
                    conce_select_html += '<option value="' + conce.key + '">' + conce.name + '</option>';
                    console.log('7: conce_select_html');
                    console.log(conce_select_html);
                    icon_latLon = new google.maps.LatLng( conce.lat , conce.lon );
                    console.log('8: icon_latLon');
                    console.log(icon_latLon);


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
                            console.log('10: click -> this.custom_data.name');
                            console.log(this.custom_data.name);
                            icon_options.content = html;
                            console.log('11: click -> html');
                            console.log(html);
                            title_box  = new InfoBox( icon_options );
                            title_box.open( map, this );
                        },
                        shadow      : icon_base + 'marker-shadow.png'
                    });
                    google.maps.event.addListener( marker, 'click', function() {
                        $.open_concessionaire_by_key( this.custom_data.key , true )
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

    if (IS_MOBILE) {
        $("#see-all").click(function (e) {
            e.preventDefault();
            $(".concessionaire-search").hide();
            $(".concessionaire-list").fadeIn();
        });

        $("#back-list-concessionaires").click(function (e) {
            e.preventDefault();
            concessionaire_preselected = 0;
            concessionaire_detail_selected = false;
            $("#concessionaires-data").css({
                //height: '0',
                paddingTop: '0'
            });
            $(".concessionaire-search").hide();
            $("#concessionaires-list, .concessionaire-list").fadeIn();
            $(".concessionaire").removeClass("active");
            initialize_map();
        });
    }

    function initialize_map(){
        var c_preselected, map_latLon, map_center;
        try{
            c_preselected = parseInt( $("#map_canvas").attr("data-concessionaire-preselected-id") );
            if( isNaN(c_preselected) ){
                c_preselected = 16;
            }
        }catch( e ){
            c_preselected = 0;
        }
        if( c_preselected > 0 ){
            concessionaire_preselected = c_preselected;
            map_latLon = ( $("#map_canvas").attr("data-lat-lon") ).split(',');
            map_center = new google.maps.LatLng( map_latLon[0] , map_latLon[1] );
        }else{



            map_center = new google.maps.LatLng( 20.6244, -103.421 );
        }
        var map_options = {
            center: map_center,
            panControl: !IS_MOBILE,
            zoomControl: !IS_MOBILE,
            mapTypeControl: false,
            streetViewControl: !IS_MOBILE,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 13
        };
        map = new google.maps.Map( document.getElementById("map_canvas"), map_options );
        if (!concessionaire_detail_selected)
            $.get_map_data();
    }
    google.maps.event.addDomListener( window, "load", initialize_map);
    $.adjust_map_width = function( redo ){
        console.log(redo);

        $('.concessionaire-list').height(
            $('#concessionaires-map').height() - 196
        );
        $('#concessionaires-data .content').height(
            $('#concessionaires-map').height()
        );
        var ls_w = $("#concessionaires-list").width() + 1;
        console.log(ls_w);
        var da_w = 0;
        console.log(da_w)
        if( $("#concessionaires-data").is('.active') ){
            $("#concessionaires-data:hidden").css({width:1}).show();
            da_w = 330;
            console.log(da_w);
        }
        var wi_w = $("#concessionaires" ).width();
        console.log(wi_w);
        var ma_w = wi_w - ls_w - da_w;
        console.log(ma_w);
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
});
