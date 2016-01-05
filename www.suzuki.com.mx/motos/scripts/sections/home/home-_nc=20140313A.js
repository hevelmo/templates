//HTMLInspector.inspect();
function getPos(name) {
    var offsets = document.getElementById(name).getBoundingClientRect();
    return {
        x: offsets.left,
        y: offsets.top
    }
}

var fancyB;

$(window).load(function(){ });

$(document).ready(function() {

    if(IS_MOBILE){
        $('.slide-mobile').css('display', 'block');
        $('.home-slider-wrapper').on("swipe",function(event){            
        })
    }
    else{
        $('.slide-desktop').css('display', 'block');
    }

    // MOTOS SLIDER INITIALIZATION
    $("div[data-slide='1']").addClass('home-active-slide');
    $("div[data-slide-dot='1']").addClass('home-active-slide-dot');
    if($(".home-slider-wrapper").find(".home-slide").length > 1){
        $(".home-slider-dots").css('display', 'inline-block');
    }

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

    var $sxc_name = $('#sxc_name'),
        $sxc_tel = $('#sxc_tel'),
        $sxc_email = $('#sxc_email');


    // Prevenir que la imagen no se vea en ocasiones
    // 
    var $img = $('<img />');
    $img.load(function() {})
    $img.attr('src', '/motos/images/sections/home/ciaz/pop-up.png');



    $sxc_name.on('focusout', function() {
        $.validate_input($sxc_name);
    });
    $sxc_tel.on('focusout', function() {
        $.validate_input($sxc_tel);
    });
    $sxc_email.on('focusout', function() {
        $.validate_input($sxc_email);
    });
    $.test_drive_promo_s_cross = function(form) {
        var form_errors = 0;

        if (!$.validate_input($sxc_email)) {
            form_errors++;
            $sxc_email.focus();
        }
        if (!$.validate_input($sxc_tel)) {
            form_errors++;
            $sxc_tel.focus();
        }
        if (!$.validate_input($sxc_name)) {
            form_errors++;
            $sxc_name.focus();
        }
        if (form_errors === 0) {
            var data = {
                email: $sxc_email.val(),
                name: $sxc_name.val(),
                phone: $sxc_tel.val(),
                source: 's_cross-promo-home'
            };
            var precio_actual = showMeTheMoney('s-cross');
            analytics_test_drive('S-Cross_home', 0.071 * precio_actual);

            $('#sxc_send').attr({
                disabled: 'disabled'
            }).animate({
                opacity: '0.5'
            });
            var service_url = '/services/request/test_drive';


            $.ajax({
                cache: false,
                data: data,
                dataType: 'json',
                type: 'post',
                success: function(data) {
                    if (data.status == 'ok') {
                        $('#sxc_email_review').text($sxc_email.val());
                        $('.first-step').fadeOut(300, function() {
                            $('.second-step').removeClass('hidden').hide().fadeIn();
                        });
                    } else {
                        $('#sxc_send').removeAttr(disabled).animate({
                            opacity: '1'
                        });
                        alert(data.message);
                    }
                },
                url: service_url
            });
        }
    }
    $('.car-map').on('mouseover mouseout', function(e) {
        $('#menu-cars-home .item a').removeClass('over');
        if (e.type == 'mouseover') {
            $('#menu-cars-home a').eq($(this).index()).addClass('over');
        }
    });
    $('.get-more a').on('click', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        if (url != '') {
            $(this).attr({
                href: ''
            }).fadeOut(300);
            $.ajax({
                url: url,
                type: 'get',
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {
                    console.log(data);
                    if (data.status == 'ok') {
                        var h1 = $("#way-of-life-content").height();
                        $("#way-of-life-content .item").addClass('old');
                        $("#way-of-life-content").append(data.data.html);
                        $("#way-of-life-content .item:not(.old)").each(function(i) {
                            $(this).css({
                                opacity: 0
                            }).delay(i * 100).animate({
                                opacity: 1
                            })
                        });
                        if (data.data.index > 1) {
                            $('.get-more a').attr({
                                href: '/services/way_of_life/get/' + data.data.index
                            }).stop().hide().delay(1500).fadeIn(300);
                        }
                    }
                }
            });
        }
    });

    var flash = $("#home-scross .full_width .flash");

    flash.css({
        opacity: 0,
        display: 'block'
    });

    $("#home-scross").on('click', function() {
        document.location = "/ciaz"
    });

    /*$("#home-scross").hover(function(){
        flash.stop().animate({opacity:1},300);
    }, function(){
        flash.stop().animate({opacity:0},2000,function(){
            run_faros();
        });
    });*/

    function run_faros() {
            flash.stop().animate({
                opacity: 1
            }, 2000, function() {
                $(this).animate({
                    opacity: 0
                }, 2000, function() {
                    run_faros();
                });
            });
        }
        /*run_faros();*/

    var scross_opened = false,
        $video_home_cross = $('#video-home-scross');

    if (!checkVideoSupport()) {
        $video_home_cross.remove();
        $('.promo-video-bg').html('&nbsp;');
    }

    $.scross_video_resize = function() {
        // Acomodar el video al centro
        //width
        var w = $(window).width();
        w = (w > 1280) ? w : 1280;
        var //height
            h = w * 0.5625,
            //Margin top
            mt = (h - 700) * -0.5;

        $video_home_cross
            .width(w)
            .height(h)
            .css({
                marginTop: mt
            });
    }

    $.scross_form_open = function() {
        if (!scross_opened) {
            ga('send', 'event', 'S-Cross home', 'Clic', 'Ver_detalles');
            $(".hide_s-cross").slideUp();
            $('body').animate({
                scrollTop: 0
            }, '300', 'swing');
            $(".full_width").fadeOut();
            $('.s-cross_form').hide().removeClass('hidden').fadeIn(3000);
            $("#home-scross").delay(300).animate({
                height: 700
            }, 500);
            if (checkVideoSupport()) {
                $(window).resize(function() {
                    $.scross_video_resize();
                });
                $.scross_video_resize();
                var video = $video_home_cross.get(0);
                video.play();
            }
            $("#home-scross").toggleClass('cursor-click');
            scross_opened = true;
        }
    }
    $.scross_form_close = function() {
            if (scross_opened) {
                ga('send', 'event', 'S-Cross home', 'Clic', 'Cerrar');
                $('.s-cross_form').fadeOut(300);
                $("#home-scross").animate({
                    height: 230
                }, 500);
                $('body').animate({
                    scrollTop: 0
                }, '300', 'swing');
                $(".full_width").delay(500).fadeIn();
                $(".hide_s-cross").delay(500).slideDown();
                $('body').delay(800).animate({
                    scrollTop: 470
                }, '600', function() {
                    $("#home-scross").toggleClass('cursor-click');
                    scross_opened = false;
                });
            }
        }
        /*$("#home-scross").click(function(){
            $.scross_form_open();
        });
        $(".s-cross_close,#s-cross_finish").click(function(){
            $.scross_form_close();
        });*/

    $("#way-of-life-content").delegate('section.wol-content.photo, section.wol-content.quote', 'click', function() {
        var regexp, url, bg_url = $(this).find('.content').css('background-image');
        bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);
        bg_url = bg_url ? bg_url[2] : "";
        regexp = new RegExp("http:\/\/" + document.domain);
        bg_url = bg_url.replace(regexp, '');
        $('.fancybox-thumbs').each(function() {
            url = $(this).attr('href');
            if (url == bg_url) {
                $(this).trigger('click');
                return false;

            }
            //console.info(url,bg_url);
        });
    });
    $("#way-of-life-content").delegate('section.wol-content.photo.instafeed-thumb', 'click', function() {
        var regexp, url, bg_url = $(this).find('.content').css('background-image');
        bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);
        bg_url = bg_url ? bg_url[2] : "";
        regexp = new RegExp("http:\/\/" + document.domain);
        bg_url = bg_url.replace(regexp, '');
        $('.fancybox-thumbs-instafeed').each(function() {
            url = $(this).attr('href');
            if (url == bg_url) {
                $(this).trigger('click');
                return false;
            }
            console.info( bg_url);
        });
    });
    $('a.fancybox-thumbs').fancybox({
        arrows: true,
        autoSize: false,
        closeBtn: true,
        fitToView: true,
        height: '70%',
        helpers: {
            title: {
                type: 'over'
            },
            thumbs: {
                width: 50,
                height: 50
            }
        },
        maxHeight: 600,
        maxWidth: 800,
        nextEffect: 'none',
        nextClick: true,
        padding: 0,
        prevEffect: 'none',
        width: '70%'
    });
    $('a.fancybox-thumbs-instafeed').fancybox({
        arrows: true,
        autoSize: false,
        closeBtn: true,
        fitToView: true,
        height: '70%',
        helpers: {
            title: {
                type: 'over'
            },
            thumbs: {
                width: 50,
                height: 50
            }
        },
        maxHeight: 600,
        maxWidth: 800,
        nextEffect: 'none',
        nextClick: true,
        padding: 0,
        prevEffect: 'none',
        width: '70%'
    });
    $('.play-video-fancybox').fancybox({
        autoSize: false,
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
    if (IS_MOBILE) {

        var margin = 0;
        var menu_cars = $("#menu-cars-home");
        var num_slides = menu_cars.find(".item").length;
        var width_slider_fake = menu_cars.find(".item").width() * (num_slides - 1);
        var arrow_left = $(".slider-arrow-left");
        var arrow_right = $(".slider-arrow-right");
        $('.slider-home-arrow').on('click', function() {
            if (menu_cars.is(':animated'))
                return 0;
            var direction = $(this).attr("class").split(" ")[1];
            if (direction == "slider-arrow-left") {
                margin += 100;
            } else
                margin -= 100;
            menu_cars.stop().animate({
                marginLeft: margin + "%"
            }, 200, function() {
                if (parseInt(menu_cars.css("margin-left")) >= 0)
                    arrow_left.addClass("slider-arrow-hidden");
                else
                    arrow_left.removeClass("slider-arrow-hidden");
                if (parseInt(menu_cars.css("margin-left").replace("-", "")) >= width_slider_fake)
                    arrow_right.addClass("slider-arrow-hidden");
                else
                    arrow_right.removeClass("slider-arrow-hidden");
            });
        });

        // Move background image for ciaz temp
        //
        $('.scross_bg[alt="Ciaz"]').attr('src', '/motos/images/sections/home/s-cross/car-mobile.jpg').width($(window).width());


        $video_home_cross.remove();
        //$("#slider-car4, #home-scross, .section-title.hide_s-cross").remove();
        //$("#menu-cars-home").prepend('<div id="slider-car4" class="item car-4"><div class="slider-car-sprite"></div><a href="/motos/s-cross"><h3>S-Cross</h3></a></div>');
    }
    var extra, loadButton = document.getElementById('load-more');

    var counter_number = 0;
    var top_one = 0;
    var top_two = 320;
    var height_grid = 640;
    var array_classes_one = ['grid-1a', 'grid-1b', 'grid-1c', 'grid-1d', 'grid-1e'];
    var array_classes_two = ['grid-2a', 'grid-2b', 'grid-2c', 'grid-2d', 'grid-2e'];

    var limit = (IS_MOBILE) ? 4 : 5;

    var feed = new Instafeed({
        get: 'user',
        userId: 1413921844,
        links: false,
        accessToken: '1413921844.799964c.5b6d2d6e98ef4e55a53cca0ae4937dee',
        resolution: 'standard_resolution',
        limit: limit,
        //template: '',
        success: function(data) {
            var pagination = $('.see-more-content').length,
                photos = data.data.length,
                photo_url, photo_text, photo_text_length, 
                gallery_arrow,
                counter = 0;

            var $grid = $('<div class="home-grid-instagram"></div>');
            var $more_button = $("<div class='see-more-button'><div><img src='/motos/images/sections/home/gallery/see-more-image.png' /><p class='see-more-label'>Ver más</p></div></div>");

            $(".home-gallery-wrapper").append($grid);

            if(photos===limit) //If the number of gotten photos are the same as defined limit
                $grid.append($more_button);

            if (photos > 0 && photos <= limit){
                counter_number++;

                if(photos===limit){  //If the number of gotten photos are the same as defined limit
                    if(counter_number>1)
                        $('.see-more-button').hide().last().show(); //Hide the current 'see-more-button' and show the next one.
                }else{
                    $('.see-more-button').hide(); //Only hide the current 'see-more-button'
                }

                $.each(data.data, function(index, value) {
                    photo_url = value.images ? value.images.standard_resolution.url : '';
                    photo_text = value.caption ? value.caption.text : '';

                    var class_name;

                    if(counter_number % 2 === 0){
                        class_name = array_classes_two[index];
                    } else {
                        class_name = array_classes_one[index];
                    }

                    $grid.append("<a class='fancybox-thumbs-instafeed' data-fancybox-group='instaFeed' href='" + photo_url + "' alt='suzuki_mex' title='" + photo_text + "'><div class='grid-square ie-8-fallback " + class_name + "' style='background-image: url("+ photo_url +");'><div class='photo-mask'><p class='photo-title'><b> SUZUKI_MOTOS </b><br/>"+ photo_text +"</p></div></div></a>");                    
                });
            }

            if(IS_MOBILE){
                var gridInstagram = parseInt($('.home-grid-instagram').css('width'));
                
                if(gridInstagram){
                    var gSquareInstagram = gridInstagram / 2;
                    
                    $('.grid-square').css('width', gSquareInstagram).css('height', gSquareInstagram);
                    
                    $('.see-more-button').css('width', gridInstagram);
                    $('.see-more-button').css('top', gridInstagram);
                    $('.see-more-button > div > img').hide();
                    $('.see-more-button > div > p').hide();

                    $('.home-grid-instagram').css('height', gridInstagram);                
                }                
            }
        },
        after: function() {            
            $('.see-more-button').click(function(){ 
                feed.next();                
            });
        },
    });
    feed.run();

    // MOTOS SLIDER
    $('.home-slider-dot').click(function(){
        
        var me = $(this),
            slider = $('.home-slider-wrapper'),            
            slide_dot_number = me.attr('data-slide-dot'),
            slide = $("div[data-slide='"+slide_dot_number+"']"),
            left_animation = (slide_dot_number-1)*100,
            is_active_slide = slide.hasClass('home-active-slide'),
            slide_active = $('.home-active-slide'),
            slide_dot_active = $('.home-active-slide-dot');
        
        if (!is_active_slide){
            slide_dot_active.removeClass('home-active-slide-dot');
            me.addClass('home-active-slide-dot');
            slide_active.removeClass('home-active-slide');
            slide.addClass('home-active-slide');
            slider.animate({ left: "-"+left_animation+"%" }, 500, function() { /* Animation complete. */ });
        }

    });

    // MORE TIPS
    var tips_json;

    $.ajax({
        url: '/motos/data/tips.json',
        cache: false,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tips_json = data.tips;
            getRandomTip(false);        
        },
        error: function(e){
            console.log(e);
        }
    });

    function showTip(tip, effect){
        if(effect){
            $('.home-tip-text').fadeOut(300)
            setTimeout(function(){
              $(".home-tip-text").html(tips_json[tip].html).fadeIn(500);
            }, 500);
        }else{
            $(".home-tip-text").html(tips_json[tip].html);
        }        
    }

    function getRandomTip(effect) {
        var min = 0, max = tips_json.length,
            unread_tips = false,
            number = Math.floor(Math.random() * (max - min)) + min;

            for(var i=0; i<tips_json.length;i++){
                if(!tips_json[i].shown)
                    unread_tips = true;                
            }

            if(unread_tips){
                if(!tips_json[number].shown){
                    tips_json[number].shown=true;
                    showTip(number, effect);
                    return number;
                }else{ getRandomTip(true); }
            }else{
                for(var j=0; j<tips_json.length;j++){ tips_json[j].shown=false; }
                getRandomTip(true);
            }
    }

    $('.more-tips-text').click(function(){
        getRandomTip(true);        
    });

    $('.more-tips-image').click(function(){
        getRandomTip(true);        
    });

    $('#mi_suzuki_link').click(function(){
        $('#header-owners-button').trigger('click');
    });   

});