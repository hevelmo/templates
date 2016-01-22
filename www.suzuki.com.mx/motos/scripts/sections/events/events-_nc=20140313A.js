$(document).ready(function() {
    SHOW_BY_TYPE = 'event_all';

    // MOTOS SLIDER INITIALIZATION
    $("div[data-slide='1']").addClass('events-active-slide');
    $("div[data-slide-dot='1']").addClass('events-active-slide-dot');
    if($(".events-slider-wrapper").find(".events-slide").length > 1){
        $(".events-slider-dots").css('display', 'inline-block');
    }

    // MOTOS SLIDER
	$.active_slider_dots = function(slide_dots){
		var sd = slide_dots,
			current_active_slide_number = parseInt(sd.current_active_slide.attr('data-slide')),
			next_active_slide_number = parseInt(sd.next_active_slide.attr('data-slide')),
			slides_number = parseInt($('.events-slider-wrapper').attr('data-slides'));

  		if((current_active_slide_number >= 1) && (current_active_slide_number <= slides_number)){
			var hide_arrows = (next_active_slide_number===1 || next_active_slide_number===slides_number) ? true : false;

			sd.current_active_dot.removeClass('events-active-slide-dot');
	        sd.current_active_slide.removeClass('events-active-slide');
	        sd.next_active_dot.addClass('events-active-slide-dot');
	        sd.next_active_slide.addClass('events-active-slide');
	        sd.slider.animate({ left: sd.left_animation+'%' }, 500, function(){});

	        $('.events-slider-arrow').show().attr('data-slide-arrow', sd.data_slide_arrow);
        	if(hide_arrows){
        		if(sd.direction==='left' || next_active_slide_number===1 )
        			$('.events-slider-left-arrow').fadeOut();
        		else
        			$('.events-slider-right-arrow').fadeOut();
        	}
        }
	}

    $('.events-slider-dot').click(function(){
        var me = $(this),
            slide_dot_number = parseInt(me.attr('data-slide-dot')),
            slide = $("div[data-slide='"+slide_dot_number+"']"),
            is_active_slide = slide.hasClass('events-active-slide'),
            slide_dots = {
            	slider: $('.events-slider-wrapper'),
            	current_active_dot: $('.events-active-slide-dot'),
            	current_active_slide: $('.events-active-slide'),
            	next_active_dot: me,
            	next_active_slide: slide,
            	left_animation: '-'+((slide_dot_number-1)*100),
            	data_slide_arrow: slide_dot_number,
            	direction: null
            };

        if (!is_active_slide)
        	$.active_slider_dots(slide_dots);
    });

    $('.events-slider-left-arrow').click(function(){
        var me = $(this),
        	direction = 'left',
			slide_arrow_number = parseInt(me.attr('data-slide-arrow')),
			slide_dots = {
	        	slider: $('.events-slider-wrapper'),
	        	current_active_slide: $('.events-active-slide'),
	        	current_active_dot: $('.events-active-slide-dot'),
	        	next_active_dot: $("div[data-slide-dot='" + (slide_arrow_number-1) +"']"),
	        	next_active_slide: $("div[data-slide='" + (slide_arrow_number-1) +"']"),
	        	left_animation: "-"+((slide_arrow_number-2)*100),
	        	data_slide_arrow: slide_arrow_number-1,
	        	direction: direction
	        };

    	$.active_slider_dots(slide_dots);
		me.attr('data-slide-arrow', slide_arrow_number-1);
    });


    $('.events-slider-right-arrow').click(function(){
    	var me = $(this),
        	direction = 'right',
			slide_arrow_number = parseInt(me.attr('data-slide-arrow')),
			slide_dots = {
	        	slider: $('.events-slider-wrapper'),
	        	current_active_slide: $('.events-active-slide'),
	        	current_active_dot: $('.events-active-slide-dot'),
	        	next_active_dot: $("div[data-slide-dot='" + (slide_arrow_number+1) +"']"),
	        	next_active_slide: $("div[data-slide='" + (slide_arrow_number+1) +"']"),
	        	left_animation: "-"+((slide_arrow_number)*100),
	        	data_slide_arrow: slide_arrow_number+1,
	        	direction: direction
	        };

        $.active_slider_dots(slide_dots);
		me.attr('data-slide-arrow', slide_arrow_number+1);
    });

    var slides = $('.events-slide').length;
    if(slides > 1){ $('.events-slider-right-arrow').show(); }

    //MOTOS EVENTS GALLERY

    //See more
    var page = 1;

    $.show_see_more = function(){
        var see_more_button = $(".see_more");
        setTimeout(function(){
            if(see_more_button.length>0){
                var show_button = parseInt($(".see_more").attr('data-last-sections'));
                if(show_button>4)
                    see_more_button.css({'opacity':'1', 'display':'table'});
            }else{
                $.show_see_more();
            }
        }, 200);
    }
    $.show_see_more();

    $.see_more_events = function(me){
        page++;
        var data = {  pagination : page },
            service_url = '/motos/noticias/see_more';

        $.ajax({
            cache    : false,
            data     : data,
            dataType : 'json',
            type     : 'post',
            success  : function(data) {
                $('.events_gallery_content').prepend(data.html);

                if(IS_MOBILE)
                    $('.events_gallery_content .section_wrapper').css('height', section_height);

                setTimeout(function(){
                    $.show_event_by_type(SHOW_BY_TYPE, true);
                    setTimeout(function(){
                        if(!data.button)
                            $('.see_more').fadeOut(1000);
                    }, 200);
                }, 200);
            },
            error    : function (e) {
                console.log(e);
            },
            url      : service_url
        });
    }

    $('.see_more').bind("click", function(){
        $.see_more_events($(this));
    });

    $.show_event_by_type = function(element_id, more_events){
        if(!more_events)
            $('.event_all').fadeOut();
        setTimeout(function(){
            $('.'+element_id).fadeIn();
        }, 500);
    }
    $.show_event_by_type(SHOW_BY_TYPE, false);

    if(!IS_MOBILE){
        // Modal box
        /* This is basic - uses default settings */
        $("a.section_link").fancybox();
        /* Using custom settings */
        $("a.section_link").fancybox({
            'hideOnContentClick': true
        });
        /* Apply fancybox to multiple items */
        $("a.section_link").fancybox({
            'transitionIn'  :   'elastic',
            'transitionOut' :   'elastic',
            'speedIn'       :   600,
            'speedOut'      :   200,
            'overlayShow'   :   false
        });
        $('.fancybox-skin').attr('style', 'padding: 0px; width: auto; height: auto;');
    }

    // Hover effect for category tabs && Select category
    var path = '/motos/images/sections/events/gallery/',
        white_path = '/motos/images/sections/events/gallery/white_';

    //Hover
    $.type_hover_effect = function(params){
        if(!params.me.hasClass('active'))
            params.me.children('.tab_image').attr('src', params.image);
        params.me.children('.tab_name').css('color', params.color);
    }
    $('.tab').hover(function(e){
        var me = $(this),
            params = {  me: me,
                        image: white_path + me.data('image') +'.png',
                        color: '#ffffff'
                     };
        $.type_hover_effect(params);
    }, function(e){
        var me = $(this),
            params = {  me: me,
                        image: path + me.data('image') +'.png',
                        color: '#9f9f9f'
                     };
        $.type_hover_effect(params);
    });

    //Selected
        // Select a tab
    // See/show by type
    $('.tab').click(function(){
        var me = $(this),
            id = me.attr('id');
            image = me.children('.tab_image'),
            active = $('.tab.active'),
            active_image = active.children('.tab_image'),

            tab = me.attr('id'),
            see_more = $('.see_more'),
            promotion_all = $('#event_all'),
            gallery_content = $('.events_gallery_content');

            SHOW_BY_TYPE = id;
            $.show_event_by_type(id, false);

            see_more.hide();
            if(IS_MOBILE)
                gallery_content.css('min-height', section_height);

            if($('.'+tab).length>=5){
                var counter=0;
                for(var i=0; i<5; i++){
                    if(i===0){
                        if(promotion_all.hasClass('see-more-hidden'))
                            counter++;
                    }
                    else{
                        if($('#event_'+i).hasClass('see-more-hidden'))
                            counter++;
                    }
                }
                if(counter<5 && !promotion_all.hasClass('see-more-hidden') && !me.hasClass('see-more-hidden')){
                    if(see_more.css('display')==='none'){
                        setTimeout(function(){
                            see_more.show();
                        }, 800);
                    }
                }
            }

            active.removeClass('active');
            active_image.attr('src', path + active.data('image') +'.png');
            me.addClass('active');
            image.attr('src', white_path + me.data('image') +'.png');
    });
    // See/show by type

    // $('.tab').click(function(){
    //     var me = $(this),
    //         id = me.attr('id');
    //     SHOW_BY_TYPE = id;
    //     $.show_event_by_type(id, false);
    // });
    // $('.tab').click(function(){
    //     var me = $(this),
    //         image = me.children('.tab_image'),
    //         active = $('.tab.active'),
    //         active_image = active.children('.tab_image');

    //         active.removeClass('active');
    //         active_image.attr('src', path + active.data('image') +'.png');
    //         me.addClass('active');
    //         image.attr('src', white_path + me.data('image') +'.png');
    // });

    var default_category = $('.tabs_wrapper').children('.tab').first();
    default_category.addClass('active').children('.tab_image').attr('src', white_path+'all.png');

    $('.tab, .section_wrapper').click(function(){
        var me = $(this),
            name = me.data('name'),
            type = me.data('type');
        if(name)
            ga('send', 'event', 'Events', type, name.replace(/\s+/g,""));
    });


    if(IS_MOBILE){
        var grid_width = parseInt($('.events_gallery_content').css('width'));
        section_height= ((grid_width / 2) / 100) * 90;

        $('.events_gallery_content .section_wrapper').css('height', section_height);

        var section_num = $('.section_wrapper.gallery-box-link').length,
            section_row = section_num % 2;

        if(section_row != 0){
            section_row = parseInt((section_num / 2) + 1);
        }else
            section_row = section_num / 2;

        var grid_min_height = section_height * section_row;
        $('.events_gallery_content').css('min-height', section_height); // grid_min_height

        var info_margin = (((grid_width / 2) / 100) * 40) + 'px 10px 0';
        $('.events_gallery_content .section_wrapper .hover .icon').css('margin', info_margin);

        $('.events_gallery_header .tabs_wrapper .tab').css('width', '6%');
    }
    else{
        $('.events_gallery_content').css('min-height', '290px');
        $('.section_wrapper a .hover').css('display', 'block');
    }

    // $.set_see_more_hidden(false);
});
function goBack() {
    window.history.back();
    // window.location = window.location.protocol + '//' + window.location.hostname + '/motos/noticias';
}