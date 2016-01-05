$(document).ready(function(){

    if(IS_MOBILE){
        $('.moto-container-des').remove();
        $('.moto-container-mob.first').css('display', 'block');
        $('.model-section .specifications-wrapper .specifications .specification').css('min-width',screen.width);
        $('.specifications-wrapper .specifications .specification').css('min-width', screen.width);
        $('.specifications-wrapper').css('min-width', screen.width);
        $('.specifications-controls .arrows').css('min-width', screen.width);
        $('#sc-mob').css('display', 'block');
        $('#sc-des').addClass('sc_inactive');

        var versions = $('.versions_wrapper').length;
        $('.mobile_versions .model-versions').css('width', (screen.width * versions));
        $('.model-versions .versions_wrapper').css({
                                                       'width' : (screen.width-20),
                                                       'margin' : '10px'
                                                   });

        if(versions > 1){
            $('.mobile_arrows').css('display', 'block');
            $('.arrow-prices-right').css('display', 'block');
        }
        $.versions_slider = function(side){
            var pos = 0, arrow = '.arrow-prices-right';
            if(side==="right"){
                pos = '-100%';
                arrow = '.arrow-prices-left';
            }
            
            $('.model-versions').animate({
                left: pos
            }, 300, function() {});
            $('.arrow-prices-'+side).css('display', 'none');
            $(arrow).css('display', 'block');
        };
       
        var no_accessories = $('.no_accessories').parent('.galery-grid').children('.content').children('.box-ref-com');
        
        if(no_accessories.length > 0){
            no_accessories.css({
                'height': '350px',
                'top'   : '0'
            });
            no_accessories.children('.image').children('.info').css({
                'float': 'none',
                'margin': '0 auto',
                'right': '5%',
                'top': '0',
                'padding': '20px 0 0'
            }).children('.title').css('font-size', '36px');

            $('.no_accessories').children('.wrapper').children('a').children('.refreshment').css('margin', '-50px auto');
        }

        $('.model-section.video .galery-grid .content').css('min-height', '100');
    }
    else{
        $('.moto-container-mob').remove();
        $('.moto-container-des.first').css('display', 'block');
        $('#sc-des').css('display', 'block');
        $('#sc-mob').addClass('sc_inactive');
    }
    $('#model-section-features').css('display', 'block');

    //Define the 'next section', after Gallery section (based on video).
    if($('.model-section.video').length > 0)
        $('#video-scroll').css('display', 'block');
    else
        $('#precios-scroll').css('display', 'block');

    $('.arrow-prices-left').click(function(){
        $.versions_slider('left');
    });
    $('.arrow-prices-right').click(function(){
        $.versions_slider('right');
    });

    var current_menu = '',
        scroll_current_section = -1,
        sections_positions = [],
        yy = 0,
        // arrow_section = [ 0, -403, -239, -102, 53, 214 ],
        //hash_section = [ "", "1", "2", "3", "4", "5", "6" ],
        section_names = [ "", "home", "caracteristicas", "galeria", "versiones_precios", "accesorios", "prueba" ],
        section_timer,
        selected_concessionaire = -1;

    var video_section = $('.model-section.video').length, arrow_section;
    if(video_section > 0){
        arrow_section = [ 0, -452, -330, -165, -30, 78, 228 ];
    }
    else{
        $('li.video').remove();
        arrow_section = [ 0, -452, -330, -165, -30, 120 ];
    }

    // $('.home span').hover(        
    //     function() {
    //         // $(this).css('background-position', '-35px');
    //         // $(this).animate({ 'background-position': '-35px' }, 100, function() {});
    //       }, function() {
    //         // $(this).css('background-position', '0');
    //         // $(this).animate({ 'background-position': '0' }, 100, function() {});
    //       }
    // );

    function switch_menus( menu ){
        if( current_menu != menu ){
            current_menu = menu;
            var new_h = ( menu == 'cars')? 50 : 95;
            $('#header-zone').stop().animate({height:new_h });
            if( menu == 'cars'){
                $('#regular-header').stop().animate({marginTop: -95 });
                $('#logo-wrapper').stop().animate({top: -95 });
            }else{
                $('#regular-header').stop().animate({marginTop: 0 });
                $('#logo-wrapper').stop().animate({top: 0 });
            }
        }
    }

    function switch_arrow( ){
        var ii = 0, arrow_y = 49,
            i_m = sections_positions.length,
            gtx,
            yyy = get_scroll_top(),
            $cars_menu_li =  $('ul.models-menu li'),
            $arrow =  $('#model-section-arrow'),
            $td_flag =  $('#model-test-drive-flag'),
            $gotoup =   $('#back-to-top-button'),
            arrow_top = parseInt( $arrow.css('top') );

        if( yyy > 0 ){
            if( arrow_top != arrow_y ){
                $gotoup.stop().hide().fadeIn();
                $td_flag.stop().animate({top: 0});
            }

        }else{
            scroll_current_section = -1;
            $td_flag.stop().animate({top: -95});
            $gotoup.stop().show().fadeOut();
            $arrow.stop().css({top:0}).hide();
            return;
        }

        while( ii < i_m ){
            if( yyy < sections_positions[ ii ] ){
                break;
            }
            ii++;
        }

        if( ii != scroll_current_section ){
            scroll_current_section = ii;
            window.clearTimeout( section_timer );
            section_timer = setTimeout(function(){
                var url = document.location + '/' + section_names[ii];
                ga('send', 'pageview', url );
            }, 2000);

            $cars_menu_li.removeClass('current');
            $cars_menu_li.eq( ii - 1).addClass('current');

            if( arrow_section [ ii ] ){
                gtx = arrow_section [ ii ];
            }else{
                gtx = (video_section > 0) ? 380 : 280;
            }
            
            if( arrow_top != arrow_y ){
                $arrow.show();
                $arrow.stop().delay(100).css({marginLeft:gtx,top:arrow_y -10,opacity:0}).animate({top:arrow_y,opacity:1 },300);
            }else{
                $arrow.stop().animate({marginLeft:gtx});
            }
        }
    }

    $.adjust_spaces = function(){
        $('a.section-separator').each( function( ii ){
            yy =  $(this).offset().top - 200 ;
            yy = ( yy > 0 )? yy : 0;
            sections_positions[ ii ] = parseInt( yy );
        });
    }

    $('body').prepend( td_id_flag );
    $('#model-section-arrow').hide();
    $('#back-to-top-button').hide();

    //First Arrow animation
    $.animate_arrow = function( $arrow ){
        $arrow.css( { marginTop:-82,opacity:1}).animate({marginTop:-20,opacity:0}, 1000, function(){
            $.animate_arrow( $(this) );
        });
    }
    if( $('.car-next-step').length > 0 ){
        var $arrow1 = $('.car-next-step').children('a'),
            $arrow2 =$arrow1.clone();
        $('.car-next-step').append( $arrow2 ).delegate('a','mousedown mouseup click', function( e ){
            e.preventDefault();
            $.scroll_to('caracteristicas');
        });
        $.animate_arrow( $arrow2 )
    }

    $('.circle').click(function(e){
        var me = $(this),
            moto =  me.children('.half').data('moto');
        $('.cover .cover_wrapper .image').hide();        
        $('.circle.selected').children('.tick').addClass('unselected').removeClass('selected');
        $('.circle.selected').addClass('unselected').removeClass('selected');
        
        $('.'+moto+'.image').css('display','block');
        me.removeClass('unselected').addClass('selected');
        me.children('.tick').removeClass('unselected').addClass('selected');

        var content = $('.cover_content .info-box');
        if(me.hasClass('special')){            
            content.children('.slogan').css('display', 'none');
            content.children('.sp_slogan').css('display', 'block');
        }else{
            content.children('.slogan').css('display', 'block');
            content.children('.sp_slogan').css('display', 'none');
        }

    });

    // Arrow functionality
    if($('.specification').length>1){
        $('.specifications-controls').show();
    }
    if( $('.moto-next-step').length > 0 ){
        $('.moto-next-step').delegate('a','mousedown mouseup click', function( e ){
            e.preventDefault();
            $.scroll_to('caracteristicas');
        });
    }
    //Specifications Slider controls and functionality
    var specifications_i = 0;
    var specifications_total =  $('.specifications-wrapper .specification').length - 1;
    $('a.specifications-controls').on('click', function( e ){
        e.preventDefault();
        var direction, fake_div, copy_div;
        $('.specifications-wrapper .fake_div').remove();
        if( $(this).attr('href') == '#left' ){
            if( specifications_i > 0 ){
                specifications_i--;
            }else{
                specifications_i = specifications_total ;
                fake_div = true;
                copy_div = $('#features-wrapper .specification').eq( 0).clone();
                copy_div.addClass('fake_div');
                $('#features-wrapper').append( copy_div ).css({marginLeft: ( ( specifications_i + 1 ) * -100 )+'%' }).stop().animate({marginLeft: ( specifications_i * -100) + '%' });
            }
        }else{
            if( specifications_i < specifications_total ){
                specifications_i++;
            }else{
                fake_div = true;
                specifications_i = 0;
                copy_div = $('#features-wrapper .specification').eq( specifications_i -1  ).clone();
                $('#features-wrapper').prepend( copy_div ).css({marginLeft: '100%' }).stop();
                copy_div.addClass('fake_div').css({marginLeft:"-99%", position:"absolute", width: "100%"}).stop().animate({marginLeft:'-100%'} );
                $('#features-wrapper').animate({marginLeft: '0'});
            }
        }
        if( !fake_div ){
            $('.specifications-wrapper .specifications').stop().animate({marginLeft: ( specifications_i * -100) + '%' });
        }
    });

    //Fancybox Trigger in all gallery elements
    $('a.fancybox-thumbs').on('click mouseup', function( e ){
        e.preventDefault();
    }).fancybox({
        arrows    : true,
        autoSize    : false,
        closeBtn  : true,
        fitToView   : false,
        height      : '70%',
        helpers : {
            overlay: {
                locked: false
            },
            title : {
                type : 'over'
            },
            thumbs : {
                width  : 50,
                height : 50
            }
        },
        maxHeight   : 550,
        maxWidth    : 1200,
        nextEffect  : 'none',
        nextClick   : true,
        padding     : 0,
        prevEffect  : 'none',
        width       : '70%'
    });
    if(!IS_MOBILE){
        $(".gallery-box-link.html").on('click mouseup', function( e ){
            e.preventDefault();
        }).fancybox({
                'autoScale' : false,
                'href' : $('.gallery-box-link.html').data('link'),
                'type':'iframe',
                'padding' : 0,
                 maxWidth   : 1200,
                 minWidth   : 920
            });
    }
    $('a.gallery-box-link').on('click', function( e ){
        e.preventDefault();
        var url = $(this).attr('href').trim();
        $('a.fancybox-thumbs').each(function(){
            var u = $(this).attr('href');
            if( u.trim() == url ){
                $(this).trigger('click');
                return false;
            }
        });
    });
    
    $('.play-video-fancybox').fancybox({
        autoSize: false,
        autoplay: true,
        closeClick: false,
        closeEffect: 'none',
        fitToView: false,
        height: '70%',
        maxWidth: 800,
        maxHeight: 600,
        openEffect: 'none',
        padding: 0,
        width: '70%'
    });

    // if(!IS_MOBILE){
    //     if($('.video_image').length > 0){
    //         $('.galery-grid.gallery .content').css('min-height', '825px');
    //         $('.versions_section .section-title .title').css('margin', '0');
    //     }
    // }


    $('.ver_detalles').click(function(){
        var me = $(this),
            type = me.data('type'),
            active = (type === 'ver_mas') ? '.ver_menos' : '.ver_mas';

        $(active).addClass('active');
        me.removeClass('active');

        if(active === '.ver_mas'){
            $('.item.more').fadeOut('slow', function(){
                setTimeout(function(){                
                    $.scroll_to('precios');
                },  300);
            });
        }
        else{
            $('.item.more').fadeIn();
        }
    });

    var model_menu_scroll = false,
        models_header = $('.header-wrapper #header-zone #models-header'),
        models_menu = models_header.css('top');
    if(models_menu === '-50px'){
        model_menu_scroll = true;
        var top;  
    }

    $(window).resize(function() {
        $.adjust_spaces();
    });
    $(document).resize(function() {
        $.adjust_spaces();
    });

    $(window).scroll(function(){        
        if(model_menu_scroll){
            if( get_scroll_top() > 60 )
                top = 0;
            else
                top = -50;

            models_header.css('top', top);            
            setTimeout(function(){
                switch_arrow();
            }, 100);
        }else{
            if( header_section == '' ){
                switch_menus( get_scroll_top() < 10 ? 'regular' : 'cars'  );
                switch_arrow();
            } 
        }
        
        if(get_scroll_top() > 200) $('.top').fadeIn();
        else $('.top').fadeOut();
    });

    $.adjust_spaces();
    $(window).trigger('scroll');
});
