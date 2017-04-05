$(document).ready(function () {      
           
	//Preload Image
	$(function() {
		$(".preload-image").lazyload({
			threshold : 2000
		});
	});
	
	var isMobile = {
		Android: function() {return navigator.userAgent.match(/Android/i);},
		BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
		iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
		Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
		Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
		any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
	};
	
	if(isMobile.any() ){
		var getLink = $('.active-style').attr('href')
		console.log(getLink)	
		window.location.href = getLink
	}

    //Preload Frame
    $('.dev-frame').on('load', function () {
        $('.iframe-loader').addClass('loaded-iframe');
         setTimeout(function(){
          $('.iframe-loader').addClass('loaded-iframe');  
        },2500)

    });
    $('.dev-frame').on('unload', function () {
        $('.iframe-loader').removeClass('loaded-iframe');
    });
        
    setTimeout(function(){
        $('.latest').addClass('latest-active');
    },2500);
    
    $('body').on('click','.purchase-del',function(){
       $('.latest').removeClass('latest-active'); 
    });
	
	$('body').on('click','.subscribe',function(){
		$('.subscribe-form').toggleClass('show-form');
	});
	
	$('body').on('click','#dev-wrapper',function(){
		$('.subscribe-form').removeClass('show-form');
	});

    $('body').on('click','.style-options a',function(){
        $('.style-options a').removeClass('active-style');
        $(this).addClass('active-style'); 
        $('iframe').css({"opacity":"0"});
        $('.preload').hide(0);
        $('.iframe-loader').removeClass('loaded-iframe');
        setTimeout(function(){
            $('iframe').css({"opacity":"1"});
            $('.iframe-loader').addClass('loaded-iframe');

        },400);
    });
    
    /*$('.style-options a').hover(
        function() {
            var data_qr = $(this).attr('data-qr');
            $('#'+ data_qr).addClass("show-style");
        }, function() {
            $('.style-tutorial').removeClass("show-style");
        }
    );*/

    $('body').on('mouseenter','.style-options a',function() {
        var data_qr = $(this).attr('data-qr');
        $('#'+ data_qr).addClass("show-style");
    });
    $('body').on('mouseleave','.style-options a',function() {
        var data_qr = $(this).attr('data-qr');
        $('#'+ data_qr).removeClass("show-style");
    });

    
    $('.style-tutorial em').html('Choose a style option to view it in the preview frame or scan it from your mobile to see it live on your device.<br><br> Viewing our products on actual mobile devices will greatly enhance your browsing experience.');

    function decodeHTMLEntities(text) {

        if (text) {
            var entities = [
                ['amp', '&'],
                ['apos', '\''],
                ['#x27', '\''],
                ['#x2F', '/'],
                ['#39', '\''],
                ['#47', '/'],
                ['lt', '<'],
                ['gt', '>'],
                ['nbsp', ' '],
                ['quot', '"']
            ];

            for (var i = 0, max = entities.length; i < max; ++i) 
                text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

            return text;
        }
    }

    $('body').on('click','.swiper-slide',function(){
        $('.swiper-slide').removeClass('active-item-slide');
       $(this).addClass('active-item-slide'); 
        $('.delete-switcher').removeClass('activate-delete-switcher');
		$('.header').removeClass('plus-canvas');
		$('.item-boxes').addClass('off-canvas');
		$('.item-boxes').removeClass('on-canvas');
		$('.boxes-overlay').removeClass('show-box-overlay');

        $.ajax({
            url: 'ajax-themeinfo.php',
            type: 'POST',
            dataType: 'json',
            data: {theme: $(this).data('themeid')},
        })
        .done(function(data1,data2,data3) {

            if (data1.status == 'Success') {
                $('.style-options').html(decodeHTMLEntities(data1.style_options));
                $('.size-options').html(decodeHTMLEntities(data1.screen_sizes));
                $('.purchase-switcher').attr('href', data1.purchase_link);
                $('.iframe-loader').removeClass('loaded-iframe');
                $('.deploy-switcher em').text(data1.theme_name);
                $('.dev-frame').attr('src', data1.preview_url);
					
				$('.size-options, .style-options').css("display","none");
				setTimeout(function(){
					$('.size-options, .style-options').css("display","block");
				},100)
				
				setTimeout(function(){
				var options_size = -($('.style-options').height()) - 60
				var size_size = -($('.size-options').height()) - 60
				$('.style-options').css({
					"-webkit-transform":"translateY("+options_size+"px)",
					"-ms-transform":"translateY("+options_size+"px)",
					"-moz-transform":"translateY("+options_size+"px)",
					"transform":"translateY("+options_size+"px)"
				});
				$('.size-options').css({
					"-webkit-transform":"translateY("+size_size+"px)",
					"-ms-transform":"translateY("+size_size+"px)",
					"-moz-transform":"translateY("+size_size+"px)",
					"transform":"translateY("+size_size+"px)"
				});
				},50);
            }

            //Preload Image
            $(function() {
                $(".preload-image").lazyload({
                    threshold : 0
                });
            });

        })
        .fail(function() {
            //console.log("error");
        })
        .always(function() {
            setTimeout(function(){
              $('.iframe-loader').addClass('loaded-iframe');  
            },2500)
        });
        
    });

    
	
	setTimeout(function(){$('.facebook').removeClass('glow');},300);
	setTimeout(function(){$('.twitter').removeClass('glow');},600);
	setTimeout(function(){$('.google').removeClass('glow');},900);	
	setTimeout(function(){$('.support').removeClass('glow');},1200);	
	setTimeout(function(){$('.subscribe').removeClass('glow');},1500);	
	
	setTimeout(function(){$('.facebook').addClass('glow');},600);
	setTimeout(function(){$('.twitter').addClass('glow');},900);
	setTimeout(function(){$('.google').addClass('glow');},1200);
	setTimeout(function(){$('.support').addClass('glow');}, 1500);
	setTimeout(function(){$('.subscribe').addClass('glow');}, 1800);
	
	$(".twitter").hover(
		function(){$( '.twitter-message' ).addClass('show-message'); $(this).removeClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').addClass('hide-buttons');},
		function(){$( '.twitter-message' ).removeClass('show-message'); $(this).addClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').removeClass('hide-buttons');}
	);	
	
	$(".facebook").hover(
		function(){$( '.facebook-message' ).addClass('show-message'); $(this).removeClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').addClass('hide-buttons');},
		function(){$( '.facebook-message' ).removeClass('show-message'); $(this).addClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').removeClass('hide-buttons');}
	);	
	
	$(".google").hover(
		function(){$( '.google-message' ).addClass('show-message'); $(this).removeClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').addClass('hide-buttons');},
		function(){$( '.google-message' ).removeClass('show-message'); $(this).addClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').removeClass('hide-buttons');}
	);	
	
	$(".support").hover(
		function(){$( '.support-message' ).addClass('show-message'); $(this).removeClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').addClass('hide-buttons');},
		function(){$( '.support-message' ).removeClass('show-message'); $(this).addClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').removeClass('hide-buttons');}
	);
	
	$(".subscribe").hover(
		function(){$( '.subscribe-message' ).addClass('show-message'); $(this).removeClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').addClass('hide-buttons');},
		function(){$( '.subscribe-message' ).removeClass('show-message'); $(this).addClass('glow'); $('.deploy-size, .style-options, .size-options, .deploy-options').removeClass('hide-buttons');}
	);
	
	$('body').on('click','.subscribe',function(){
		$('.subscribe-overlay, .subscribe-box').addClass('show-subscribe')
	});	
	
	$('body').on('click','.sub-cancel',function(){
		$('.subscribe-overlay, .subscribe-box').removeClass('show-subscribe')
	});
		
	$('body').on('click','.deploy-switcher',function(){
        $('.delete-switcher').addClass('activate-delete-switcher');
		$('.header').toggleClass('plus-canvas');
		$('.item-boxes').toggleClass('off-canvas');
		$('.item-boxes').toggleClass('on-canvas');
		$('.boxes-overlay').toggleClass('show-box-overlay');
        
        var options_size = -($('.style-options').height()) - 60
        var size_size = -($('.size-options').height()) - 60
        
        $('.deploy-options').find('i').removeClass('rotate-switcher');
        $('.style-options').css({
            "-webkit-transform":"translateY("+options_size+"px)",
            "-ms-transform":"translateY("+options_size+"px)",
            "-moz-transform":"translateY("+options_size+"px)",
            "transform":"translateY("+options_size+"px)"
        });
        $('.deploy-size').find('i').removeClass('rotate-switcher');
        $('.size-options').css({
            "-webkit-transform":"translateY("+size_size+"px)",
            "-ms-transform":"translateY("+size_size+"px)",
            "-moz-transform":"translateY("+size_size+"px)",
            "transform":"translateY("+size_size+"px)"
        });
                var img = $('.swiper-slide img');
        var img_width = img.width();
        var img_height = img.height();
        var overlay = $('.overlay');
    
        $('.overlay, .details-overlay, .special-overlay').css({
            "width":img_width+2,
            "height":img_height,
            "left":"50%",
            "margin-left":((img_width/2)*(-1)-1),
            "top":"10px",
        })
	});
    
    $('body').on('click','.delete-switcher',function(){
        $('.delete-switcher').removeClass('activate-delete-switcher');
		$('.header').removeClass('plus-canvas');
		$('.item-boxes').addClass('off-canvas');
		$('.item-boxes').removeClass('on-canvas');
		$('.boxes-overlay').removeClass('show-box-overlay'); 
    });
	
    var options_size = -($('.style-options').height()) - 150
    $('.style-options').css({
        "-webkit-transform":"translateY("+options_size+"px)",
        "-ms-transform":"translateY("+options_size+"px)",
        "-moz-transform":"translateY("+options_size+"px)",
        "transform":"translateY("+options_size+"px)"
    });

    $('body').on('click','.deploy-options',function(){
		$('.delete-switcher').removeClass('activate-delete-switcher');
		$('.header').removeClass('plus-canvas');
		$('.item-boxes').addClass('off-canvas');
		$('.item-boxes').removeClass('on-canvas');
		$('.boxes-overlay').removeClass('show-box-overlay');
        
        var size_size = -($('.size-options').height()) - 60
        $('.deploy-size').find('i').removeClass('rotate-switcher');
        $('.size-options').css({
            "-webkit-transform":"translateY("+size_size+"px)",
            "-ms-transform":"translateY("+size_size+"px)",
            "-moz-transform":"translateY("+size_size+"px)",
            "transform":"translateY("+size_size+"px)"
        });
        
        var options_size = -($('.style-options').height()) - 60
        var options_loc = $('.style-options').position().top;
        if(options_loc < 0){
            $(this).find('i').toggleClass('rotate-switcher');
            $('.style-options').css({
                "-webkit-transform":"translateY(1px)",
                "-ms-transform":"translateY(1px)",
                "-moz-transform":"translateY(1px)",
                "transform":"translateY(1px)"
            });
        }
        
        if(options_loc > 0){
            $(this).find('i').toggleClass('rotate-switcher');
            $('.style-options').css({
                "-webkit-transform":"translateY("+options_size+"px)",
                "-ms-transform":"translateY("+options_size+"px)",
                "-moz-transform":"translateY("+options_size+"px)",
                "transform":"translateY("+options_size+"px)"
            });
        }
    });
    
    var size_size = -($('.size-options').height()) - 150
    $('.size-options').css({
        "-webkit-transform":"translateY("+size_size+"px)",
        "-ms-transform":"translateY("+size_size+"px)",
        "-moz-transform":"translateY("+size_size+"px)",
        "transform":"translateY("+size_size+"px)"
    });

    $('body').on('click','.deploy-size',function(){
		$('.delete-switcher').removeClass('activate-delete-switcher');
		$('.header').removeClass('plus-canvas');
		$('.item-boxes').addClass('off-canvas');
		$('.item-boxes').removeClass('on-canvas');
		$('.boxes-overlay').removeClass('show-box-overlay');
        
        var options_size = -($('.style-options').height()) - 60
        
        $('.deploy-options').find('i').removeClass('rotate-switcher');
        $('.style-options').css({
            "-webkit-transform":"translateY("+options_size+"px)",
            "-ms-transform":"translateY("+options_size+"px)",
            "-moz-transform":"translateY("+options_size+"px)",
            "transform":"translateY("+options_size+"px)"
        });
        
        var size_size = -($('.size-options').height()) - 60
        var size_loc = $('.size-options').position().top;
        if(size_loc < 0){
            $(this).find('i').toggleClass('rotate-switcher');
            $('.size-options').css({
                "-webkit-transform":"translateY(1px)",
                "-ms-transform":"translateY(1px)",
                "-moz-transform":"translateY(1px)",
                "transform":"translateY(1px)"
            });
        }
        
        if(size_loc > 0){
            $(this).find('i').toggleClass('rotate-switcher');
            $('.size-options').css({
                "-webkit-transform":"translateY("+size_size+"px)",
                "-ms-transform":"translateY("+size_size+"px)",
                "-moz-transform":"translateY("+size_size+"px)",
                "transform":"translateY("+size_size+"px)"
            });
        }
    });
    
	$('body').on('click','.boxes-overlay',function(){
		$('.header').removeClass('plus-canvas');
		$(this).find('i').removeClass('rotate-switcher');
		$('.item-boxes').addClass('off-canvas');
		$('.item-boxes').removeClass('on-canvas');
		$('.boxes-overlay').removeClass('show-box-overlay');
        $('.delete-switcher').removeClass('activate-delete-switcher');
	});
	
    $('body').on('click','.size-options a',function(){
        $('.size-options a').removeClass('active-style');
        $(this).addClass('active-style'); 
    });

    $('body').on('click','.small-screen',function(){
        $('iframe').css({"opacity":"0"});
        setTimeout(function(){
            $('iframe').css({"opacity":"1"});
        },400);
        $('#dev-wrapper').removeClass();
        $('#dev-wrapper').addClass('small-frame');
        $('.footer').removeClass('hide-footer');
    });
		
    $('body').on('click','.medium-screen',function(){
        $('iframe').css({"opacity":"0"});
        setTimeout(function(){
            $('iframe').css({"opacity":"1"});
        },400);
        $('#dev-wrapper').removeClass();
        $('#dev-wrapper').addClass('medium-frame');
        $('.footer').removeClass('hide-footer');
    });		
    
    $('body').on('click','.large-screen',function(){
        $('iframe').css({"opacity":"0"});
        setTimeout(function(){
            $('iframe').css({"opacity":"1"});
        },400);
        $('#dev-wrapper').removeClass();
        $('#dev-wrapper').addClass('large-frame');
        $('.footer').removeClass('hide-footer');
    });
	    
    $('body').on('click','.tablet-portrait-screen',function(){
        $('iframe').css({"opacity":"0"});
        setTimeout(function(){
            $('iframe').css({"opacity":"1"});
        },400);
        $('#dev-wrapper').removeClass();
        $('#dev-wrapper').addClass('tablet-portrait-frame');
        $('#dev-wrapper .dev-frame').css('display','block');
        $('.footer').removeClass('hide-footer');
    });	    
    
    $('body').on('click','.tablet-landscape-screen',function(){
        $('iframe').css({"opacity":"0"});
        setTimeout(function(){
            $('iframe').css({"opacity":"1"});
        },400);
        $('#dev-wrapper').removeClass();
        $('#dev-wrapper').addClass('tablet-landscape-frame');
        $('.footer').removeClass('hide-footer');
    });    
    
    $('body').on('click','.desktop-screen',function(){
        $('iframe').css({"opacity":"0"});
        setTimeout(function(){
            $('iframe').css({"opacity":"1"});
        },400);
        $('#dev-wrapper').removeClass();
        $('#dev-wrapper').addClass('desktop-frame');
        $('.footer').addClass('hide-footer');
    });
    
    $('body').on('click','.footer-text-close',function(){
       $('.footer').addClass('delete-footer'); 
    });
	
	/*setTimeout(function(){
		var img = $('.swiper-slide img');
		var img_width = img.width();
		var img_height = img.height();
		var overlay = $('.overlay');
	
		$('.overlay, .details-overlay, .special-overlay').css({
			"width":img_width+2,
			"height":img_height,
			"left":"50%",
			"margin-left":((img_width/2)*(-1)-1),
			"top":"10px",
		})
	},1500);*/

	$('.swiper-slide').hover(function(){
		$(this).find('.overlay').toggleClass('show-overlays');
		$(this).find('.details-overlay').toggleClass('show-overlays');
		//$(this).find('.special-overlay').addClass('hide-overlays');
	});

    $("#subsemail").on("click", function() {
    if ($(this).val() == "Enter your email address and click Subscribe")
            $(this).val("")
    });

		
    var swiper = new Swiper('.swiper-container', {
        //onSlideNextStart:check_class,
        preloadImages: true,
        slideToClickedSlide:true,
        lazyLoading: true,
		lazyLoadingInPrevNext:true,
		buttonDisabledClass:'testing_enabled',
        //nextButton: '.swiper-button-next',
        //prevButton: '.swiper-button-prev',
        slidesPerView: 5,
		lazyLoadingInPrevNextAmount:10,
        spaceBetween: 50,
        height:500,
        breakpoints: {
            7000: {
                slidesPerView: 13,
                spaceBetween: 20
            }, 
            3000: {
                slidesPerView: 10,
                spaceBetween: 20
            }, 
            2500: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            1900: {
                slidesPerView: 6,
                spaceBetween: 20
            },  
            1700: {
                slidesPerView: 5,
                spaceBetween: 20
            },  
            1500: {
                slidesPerView: 4,
                spaceBetween: 20
            },    
            1024: {
                centerSlides:true,
                slidesPerView: 3,
                spaceBetween: 20
            },
            760: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });
    
    $('body').on('click','.swiper-button-next',function(){
        var active_slide = swiper.activeIndex;
        var active_slide_val = active_slide + 3
        swiper.slideTo(active_slide_val,500);
    });
        
    $('body').on('click','.swiper-button-prev',function(){
        var active_slide = swiper.activeIndex;
        var active_slide_val = active_slide - 3
        swiper.slideTo(active_slide_val,500);
    });
	
	/*var dev_width = $(window).width();
	var dev_height = $(window).height();
	
	var dev_width_total = dev_width
	var dev_height_total = dev_height - 135
	
	$('#dev-frame').css({
		"width":dev_width_total,
		"height":dev_height
	});*/
        
    
    $('.sub-confirm').on('click', '', function(event) { 
        $.ajax({
            url: 'ajax-mailchimp.php',
            type: 'POST',
            dataType: 'html',
            data: {email: $('#subsemail').val()},
        })
        .done(function(data1,data2,data3) {
            
            if (data1 == 'success') {
                $('.sub-confirm').hide(0);
                $('.subscribe-box input').val('Thank you for subscribing! We added you to our newsletter!');     
                $('.subscribe-box input').css({"text-align":"center"});
                $('.subscribe-box p').html('<em style="display:block; text-align:center;">Returning you back to preview screen</em>');
                setTimeout(function(){
                    $('.subscribe-overlay, .subscribe-box').removeClass('show-subscribe')
                },1000);
            }else if (data1 == 'fail') {
                $('.subscribe-box p').html("<em style='color:#e74c3c; display:block; font-size:16px;'>We're sorry! The mail you've entered invalid. Please try again!</em>"); 
            }else{
                $('.subscribe-box p').html("<em style='color:#e74c3c; display:block; font-size:16px;'>We're sorry! The mail you've entered invalid. Please try again!</em>"); 
            }
        })
        .fail(function() {
            $('.subscribe-box p').html("<em style='color:#e74c3c; display:block; font-size:16px;'>We're sorry! The mail you've entered invalid. Please try again!</em>"); 
        })
        .always(function() {
            console.log("completed");
        });
        
        
    });

});