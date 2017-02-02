/*-----------------------------------------------------------------------------------*/
/*	CUSTOM FUNCTIONS
/*-----------------------------------------------------------------------------------*/
jQuery.fn.setAllToMaxHeight = function(){
	return this.css({ 'height' : '' }).height( Math.max.apply(this, jQuery.map( this , function(e){ return jQuery(e).height() }) ) );
}
jQuery.fn.setAllToMaxMinHeight = function(){
	return this.css({ 'min-height' : '' }).css( 'min-height', Math.max.apply(this, jQuery.map( this , function(e){ return jQuery(e).height() }) ) );
}
/*-----------------------------------------------------------------------------------*/
/*	DOCUMENT READY STUFF
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
	"use strict"; 
	
	/**
	 * Select items
	 */
	jQuery('select').wrap('<div class="select-option" />').parent().prepend('<i class="pe-7s-angle-down"></i>');
	
	/**
	 * WordPress Stuff
	 */
	jQuery('.yamm-fw').parent().addClass('ebor-fw');
	jQuery('.add-text-right a').each(function(){
		jQuery(this).addClass('text-link');
	});
	jQuery('.text-link, .comment-reply-link').each(function(){
		jQuery(this).append(' <i class="icon arrow_right"></i>');
	});
	jQuery('p:empty').remove();
	jQuery('.fullwidth-feature').parents('section').addClass('fullwidth-features');
	jQuery('.ebor-checkboxes label').each(function(){
		jQuery(this).append('<i class="pe-7s-check"></i>');
	});
	jQuery('.ebor-checkboxes > span').click(function(){
		jQuery(this).toggleClass('active').find('input').prop('checked', function(index, attr){
		    return attr == true ? false : true;
		});
	});
	jQuery('.ebor-radio > span').prepend('<div class="mock-radio"><div class="radio-outer"><div class="radio-inner"></div></div></div>');
	jQuery('.mock-radio').click(function(){
		jQuery(this).parents('.ebor-radio').find('.mock-radio').removeClass('active');
		jQuery(this).toggleClass('active').next().trigger('click');
	});
	
	jQuery('.hover-state').on('touchstart', function(){
		jQuery(this).trigger('hover');
	});
	
	jQuery('input[type="number"]').each(function(){
		jQuery(this).wrap('<div class="quantity-controls"></div>').before('<div class="less">-</div>').after('<div class="more">+</div>');
	});
	jQuery('.quantity-controls .less').click(function(){
		var input = jQuery(this).next();
		input.val(parseInt(input.val()) - 1);
	});
	jQuery('.quantity-controls .more').click(function(){
		var input = jQuery(this).prev();
		input.val(parseInt(input.val()) + 1);
	});

	// Open responsive menu
	jQuery('.mobile-toggle').click(function(){
		jQuery('nav').toggleClass('open-menu');
	});
		
	// Append .background-image-holder <img>'s as CSS backgrounds
	jQuery('.background-image-holder').each(function(){
		var imgSrc= jQuery(this).children('img').attr('src');
		jQuery(this).css('background', 'url("' + imgSrc + '")');
    	jQuery(this).children('img').hide();
        jQuery(this).css('background-position', '50% 50%');
	});
	
	jQuery('.foreground-image-holder').each(function(){
		var imgSrc= jQuery(this).children('img').attr('src');
		jQuery(this).css('background', 'url("' + imgSrc + '")');
    	jQuery(this).children('img').hide();
        jQuery(this).css('background-position', '50% 50%');
	});
	
	// Background for nav-1 and nav-2 once scrolled
	jQuery(window).scroll(function(){
		if(jQuery(window).scrollTop() > 0){
			jQuery('nav').addClass('scrolled');
		}else{
			jQuery('nav').removeClass('scrolled');
		}
	});
	
	// Set the height of the nav container to avoid jank on relative nav
	if(jQuery('nav').hasClass('relative-nav')){
		jQuery('.nav-container').css('height', jQuery('nav').outerHeight());
	}
		
	// Trigger menu toggle on nav-2
	jQuery('.nav-2 .menu-toggle').click(function(){
		jQuery(this).toggleClass('form-cross');
		jQuery(this).closest('nav').find('.menu').toggleClass('expand');
	});

	// Nav Search input trigger
	jQuery('.search-bar i').click(function(){
		jQuery(this).closest('.search-bar').find('input[type="text"]').focus();
		if(jQuery(this).closest('.search-bar').find('input[type="text"]').val()){
			jQuery(this).closest('.search-bar').find('input[type="submit"]').trigger('click');
		}
	});
	
	// Expanding Lists
	
	jQuery('.expanding-list .title').click(function(){
		jQuery(this).closest('li').toggleClass('active');
	});
    
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        // Fixed header scrolling
		jQuery(window).scroll(function(){
			if(jQuery(window).scrollTop() < jQuery('.fixed-header').outerHeight()){
				var scroll = jQuery(window).scrollTop();
				jQuery('.fixed-header').css({transform: 'translateY('+scroll/1.2+'px)'});
				jQuery('.fixed-header .container').css('opacity',(1-(scroll/400)));
			}
		});
    }
   
    jQuery('.promo-1 .btn').mouseenter(function(){
    	jQuery(this).closest('.promo-1').find('.promo-image-holder').css('transform', 'scale(1.05)');
    }).mouseleave(function(){
    	jQuery(this).closest('.promo-1').find('.promo-image-holder').css('transform', 'scale(1)');
    });
    
    // Project hover effects
    jQuery('.hover-content').mouseenter(function(){
    	jQuery(this).closest('.project').find('.background-image-holder').addClass('zoom');
    }).mouseleave(function(){
    	jQuery(this).closest('.project').find('.background-image-holder').removeClass('zoom');
    });
    
    // Project filters
    jQuery('.filters li').click(function(){
    	var filter = jQuery(this).attr('data-filter');
    	jQuery(this).closest('.filters').find('li').removeClass('active');
    	jQuery(this).addClass('active');
    	
    	jQuery(this).closest('.contained-projects').find('.project').each(function(){
            var filters = jQuery(this).data('filter');
            
            if(filters.indexOf(filter) == -1){
                jQuery(this).addClass('inactive');
            }
            else{
                jQuery(this).removeClass('inactive');
            }
        });
    	
    	if(filter == 'all'){
    		jQuery(this).closest('.contained-projects').find('.project').removeClass('inactive');
    	}
    });
    
    // Iframe fade-in dividers
    jQuery('.video-strip .pre-video i').click(function(){
    	jQuery(this).closest('.pre-video').addClass('fade-off');
    	jQuery(this).closest('.video-strip').find('.iframe-holder').addClass('show-iframe');
    	var that = jQuery(this);
    	setTimeout(function(){
    		that.closest('.video-strip').find('.iframe-holder').addClass('fade-on');
    	},500);
    });
    
    jQuery('.video-strip .close-frame').click(function(){
    	jQuery(this).closest('.iframe-holder').removeClass('fade-on');
    	var that = jQuery(this);
    	setTimeout(function(){
    		that.closest('.video-strip').find('.iframe-holder').removeClass('show-iframe');
    		that.closest('.video-strip').find('.pre-video').removeClass('fade-off');
    	},500);
    });
    
    // Sliders
    jQuery('.hero-slider').flexslider({ directionNav: false });
    jQuery('.testimonials').flexslider({ directionNav: false });
    jQuery('.image-slider').flexslider({ directionNav: false });
    jQuery('.post-slider').flexslider({ directionNav: false, smoothHeight: true });
    
   // Twitter Feed
    jQuery('.tweets-feed').each(function(index) {
        jQuery(this).attr('id', 'tweets-' + index);
    }).each(function(index) {
		
		var TweetConfig = {
			"id": jQuery('#tweets-' + index).attr('data-widget-id'),
			"domId": '',
			"maxTweets": 5,
			"enableLinks": true,
			"showUser": true,
			"showTime": true,
			"dateFunction": '',
			"showRetweet": false,
			"customCallback": handleTweets
		};
		
        function handleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var element = document.getElementById('tweets-' + index);
            var html = '<ul class="slides">';
            while (n < x) {
                html += '<li>' + tweets[n] + '</li>';
                n++;
            }
            html += '</ul>';
            element.innerHTML = html;
            return html;
        }

        twitterFetcher.fetch(TweetConfig);

    });
    
    // Instagram Feed
    if( jQuery('.instafeed').length && wp_data.access_token && wp_data.client_id ){
    	jQuery.fn.spectragram.accessData = {
    		accessToken: wp_data.access_token,
    		clientID: wp_data.client_id
    	};	

	    jQuery('.instafeed').each(function() {
	        jQuery(this).children('ul').spectragram('getUserFeed', {
	            query: jQuery(this).attr('data-user-name')
	        });
	    });
    }
    
    // Countdown
	jQuery('.countdown').each(function(){
		jQuery(this).countdown({until: new Date(jQuery(this).attr('data-date'))});
	});
	
	jQuery(window).resize(function(){
		jQuery('.feature-box').setAllToMaxHeight();
		jQuery('.product.col-md-4').setAllToMaxHeight();
		jQuery('.col-md-4.col-sm-6.project').setAllToMaxMinHeight();
	});
	
	jQuery(document).on('click', '.yamm .dropdown-menu', function(e) {
	  e.stopPropagation()
	});
	
	jQuery('a.js-activated').not('a.js-activated[href^="#"]').click(function(){
		var url = jQuery(this).attr('href');
		window.location.href = url;
		return true;
	});
    
});
/*-----------------------------------------------------------------------------------*/
/*	WINDOW LOAD STUFF
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
	
	// Smooth scroll to inner links
	if(jQuery('nav').hasClass('nav-2')){
		
		var navHeight = 55;
		if(jQuery('body').hasClass('admin-bar'))
			navHeight = parseInt(navHeight + 32, 10);
			
		jQuery('a[href^="#"]').not('a[href="#"]').smoothScroll({
			offset: -navHeight,
			speed: 800
		});
		
	} else {
		
		var navHeight = jQuery('nav').outerHeight();
		if(jQuery('body').hasClass('admin-bar'))
			navHeight = parseInt(navHeight + 32, 10);
		
		jQuery('.menu a[href^="#"]').not('a[href="#"]').smoothScroll({
			offset: -navHeight,
			speed: 800
		});
		
    }
	
	// Initialize twitter feed
	var setUpTweets = setInterval(function(){
		if(jQuery('.tweets-slider').find('li.flex-active-slide').length){
			clearInterval(setUpTweets);
			return;
		}else{
			if(jQuery('.tweets-slider').length){
				jQuery('.tweets-slider').flexslider({
					directionNav: false,
					controlNav: false
				});
			}
		}
    },500);
    
    // Show Background Images for sliders and dividers
    jQuery('.background-image-holder').addClass('fadeIn');
    jQuery('.foreground-image-holder').addClass('fadeIn');
    
    // Append Instagram BGs
    var setUpInstagram = setInterval(function(){
    	if(jQuery('.instafeed li').hasClass('bg-added')){
    		clearInterval(setUpInstagram);
			return;	
    	}else{
    		jQuery('.instafeed li').each(function() {

				// Append background-image <img>'s as li item CSS background for better responsive performance
				var imgSrc = jQuery(this).find('img').attr('src');
				jQuery(this).css('background', 'url("' + imgSrc + '")');
				jQuery(this).find('img').css('opacity', 0);
				jQuery(this).css('background-position', '50% 0%');
				// Check if the slider has a color scheme attached, if so, apply it to the slider nav
				jQuery(this).addClass('bg-added');
			});
			jQuery('.instafeed').addClass('fadeIn');
    	}
    },500);
	
	jQuery(window).trigger('resize');
	
});