'use strict';

$(document).ready(function() {

    $(document).on('click', '.js-cookie', function(ev) {
        Cookies.set($(this).attr('data-name'), $(this).attr('data-value'));
    });

    $(document).on('click', '.js-model', function(ev) {
        $('.model-selector--info').css('height', $('.model-selector--info').outerHeight() + 'px');
        $('.model-selector--info').html($('#' + $(this).attr('data-model')).html());
        initModel();
        $('.model-selector--info .model-selector--colours li.is-active button').click();

        $('.js-model').removeClass('is-active');
        $(this).addClass('is-active');
    });


// SVG External Content support
svg4everybody();


//lazyload bgset
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.customMedia = {
    '--small': '(max-width: 480px)',
    '--medium': '(max-width: 700px)'
};



// Reveal elements (WOW.js)
var wow = new WOW({
    mobile: false
});
wow.init();



/**
 * Sticky header
 */
var didScroll,
    scrollTop;

$(window).scroll(function() {
    didScroll = true;
});
 
setInterval(function() {
    if ( didScroll ) {
        didScroll = false;

        scrollTop = $(window).scrollTop();
        
        if ( scrollTop > 0) {
            $('body').addClass('scrolled');
        } else if ( scrollTop === 0) {
            $('body').removeClass('scrolled');
        };

    }
}, 250);



/**
 *  Dropnav widths
 */
$('.dropnav-vehicles').each(function() {
    var items = $(this).find('.item').length;
    if (items%2 == 0) { //if even number
        $(this).css('min-width', items * 75);
    }
});


/**
 * Site subnav
 */
if ( $('.site-subnav').length ) {
    $('body').addClass('layout-has-site-subnav');
};


/**
 * Site subnav active anchor tracking
 */

//Update nav based on scroll position
$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    $('a[data-anchor]').each(function () {
       var currentLink = $(this);
       var refElement = $(currentLink.attr("href"));
       if (refElement.position().top <= (scrollPosition + 125) && refElement.position().top + refElement.height() > (scrollPosition + 125)) {
         $('a[data-anchor]').parent().removeClass("is-active");
         currentLink.parent().addClass("is-active");
       }
       else{
         currentLink.parent().removeClass("is-active");
       }
    });
});



	
/**
 * Toggles
 */

$('.site-nav--toggle').on('click', function(e){
    $('body').toggleClass('site-nav-is-open');
});

$('.site-search--button').on('click', function(e){
    $('body').addClass('site-search-is-open');
    $('.site-search--field').focus();
});

$('.site-search--close').on('click', function(e){
    $('body').removeClass('site-search-is-open');
});


var $buyingTools = $('.buying-tools');
$buyingTools.on('click', '.buying-tools--toggle', function(e){
    $buyingTools.toggleClass('is-open');
});


$('.site-subnav--logo').on('click', function(e){
    $(this).toggleClass('active');
});



/**
 * Accordions (Specifications)
 */
$('.accordion-heading', '.accordion').on('click', function(e){
  $(this).next('.accordion-body').slideToggle(400, 'easeInOutCirc')
  $(this).toggleClass('is-collapsed');
});



/**
 * Tabs
 */

if ( $('.tabs').length ) {

  $('.tabs a').on('click', function(e){
      var $el = $(this);
      var $tabs = $(this).closest('.tabs');
      var tab_id = $el.attr('data-tab');

      $tabs.find('.active').removeClass('active');
      $tabs.find('.tab-panel').removeClass('active');

      $el.addClass('active');
      $("#" + tab_id).addClass('active');
  });

  // Update tab nav based on scroll position
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    $('.tabs a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
          $('.tabs a').removeClass("active");
          currentLink.addClass("active");
        }
        else{
          currentLink.removeClass("active");
        }
    });
  });

};





/**
 * Hero banner slides
 */
$('.hero-slides').slick({
    dots: false,
});



/**
 * Hero banner videos
 */

// Only play video above 700px
if( Modernizr.mq('only screen and (max-width: 43.75em)') ) {

    $('.video-hero--element').addClass('hidden');

} else {

    $('source', '.video-hero--element').each(function(){
        var src = $(this).attr('data-src');
        var type = $(this).attr('type');

        $(this).remove();
        $('.video-hero--element').append("<source src="+ src +" type="+ type +">");
    });
    
}



/**
 * Scroll to
 */

$('body').on("click.scrollTo", "a[href^='#']", function(e) {

    var t = $(this).attr('href');
    if ($(t).length > 0) {
        e.preventDefault();

        if ( $('.layout-has-site-subnav').length ) {
            var siteHeaderHeight = 120;
        } else {
            var siteHeaderHeight = 60;
        }

        var target = $(t).offset().top - siteHeaderHeight;
        if (target < 0) target = 1; 
        $("html, body").animate({ scrollTop: target+"px" }, 350);
    }
});




/**
 * Sticky elements
 */

if( Modernizr.mq('only screen and (min-width: 80em)') ) {
  $(".sidebar").stick_in_parent({
      offset_top: 150
  });

  $(".timeline-tabs").stick_in_parent({
      offset_top: 60
  });
  
};





/**
 * Hide buying tools on scroll / mobile
 */

$(window).bind('scroll', function () {
    $('.buying-tools', '.site-header').removeClass('is-open');
});


if( Modernizr.mq('only screen and (max-width: 68.75em)') ) {
    $('.buying-tools').removeClass('is-open');
};

/**
 * Model selector list
 */
var $list = $('.model-selector--list');
var listSlides = $list.slick({
    slidesToShow: 4,
    swipeToSlide: true,
    speed: 200,
    cssEase: 'cubic-bezier(0.55,0,.1,1)',
    infinite: false,
    dots: false,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ],
    prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/images/svg/symbol-defs.svg#icon-chevron"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/images/svg/symbol-defs.svg#icon-chevron"/></svg></button>'
});


$('.model-selector--info').html($('.model-template').first().html());
initModel();
$('.model-selector--info .model-selector--colours li.is-active button').click();
function initModel() {
    /**
     * Model selector - main image
     */
    var ModelSelector = (function() {

        var activeColour;

        var $activeSlides = $('.model-selector--slides', '.model-selector--info.is-active');

        var slides = $activeSlides
            .slick({
                lazyLoad: 'ondemand',
                fade: true,
                speed: 300,
                cssEase: 'cubic-bezier(0.55,0,.1,1)',
                dots: false,
                swipe: false,
                prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/images/svg/symbol-defs.svg#icon-arrow-rotate"/></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/images/svg/symbol-defs.svg#icon-arrow-rotate"/></svg></button>'
            });

        return {

            refreshColour: function() {
                $activeSlides.slick('slickUnfilter');
            },

            // Load first colour pair in the slides ('.initial-colour')
            loadInitialColours: function() {
                $activeSlides.slick('slickFilter', '.initial-colour');
            },

            changeColour: function() {
                this.refreshColour();
                $activeSlides.slick('slickFilter', '[data-colour="' + this.activeColour + '"]');
            },

            changeModel: function() {

            }

        }

    })();
    /* end of ModelSelector */

    ModelSelector.loadInitialColours();

    $('.model-selector--colours').on('click', 'button', function(e){
        ModelSelector.activeColour = $(e.target).data('colour');
        ModelSelector.changeColour();

        $(this).closest('.model-selector--gallery').find('.model-selector--colours li').removeClass('is-active');
        $(this).parent().addClass('is-active');
    });


    $('.model-selector--range').on('click', '.tile', function(e){
        $('.tile.is-active', '.model-selector--range').removeClass('is-active');
        $(this).addClass('is-active');
        ModelSelector.changeModel();
    });

}


/**
 * Handle image widths on hover for 3-image blocks (range overview page)
 */
$( '.image', '.range-features--images.layout-flex-three' ).hover(
  function() {
    $(this).siblings('.image').addClass("inactive");
  }, function() {
    $(this).siblings('.image').removeClass("inactive");
  }
);


/**
 * Convert row of range feature images to a swipeable slideshow on smaller screens
 */
var resizeWindowTimer;

function toggleRangeFeaturesImages() {
    if( Modernizr.mq('only screen and (max-width: 56.25em') ) {
        $('.range-features--images').slick({
             slidesToShow: 1,
             swipeToSlide: true,
             speed: 200,
             cssEase: 'cubic-bezier(0.55,0,.1,1)',
             infinite: false,
             dots: false,
             prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/images/svg/symbol-defs.svg#icon-chevron"/></svg></button>',
             nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/images/svg/symbol-defs.svg#icon-chevron"/></svg></button>'
         });
    } else {
        $('.range-features--images.slick-initialized').slick('unslick');
    }
}

// On window resize, run the function and reset the timeout
$(window).resize(function() {
    clearTimeout(resizeWindowTimer);
    resizeWindowTimer = setTimeout(toggleRangeFeaturesImages, 250);
});

toggleRangeFeaturesImages();








/**
 * Reviews slideshow
 */
$('.reviews').slick({
    variableWidth: true,
    slidesToShow: 1,
    centerMode: true,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                variableWidth: false,
                centerMode: false
            }
        }
    ]
});



/**
 * Specs fixed headers
 */


if( Modernizr.mq('only screen and (min-width: 80em)') ) {

  $('.specs-models', '.page-specs').stick_in_parent({
      offset_top: 120,
      bottoming: false
  });

} else {

  $('.specs-models', '.page-specs').stick_in_parent({
      offset_top: 0,
      bottoming: false
  });
  
}




/**
 * Accessories
 */

// Custom appearance
$('select', '.acc-global--filter').chosen();

// Sticky filter bar
if( Modernizr.mq('only screen and (min-width: 80em)') ) {
    $('.acc-global--filter.compact').stick_in_parent({
        offset_top: 60,
        bottoming: false
    });
}

// Show search results
$(document).on('click', '.search.button', function(e){
    e.preventDefault();
    e.stopPropagation();
    var form = $(this).closest('form');
    var url = $(form).attr('action');
    var range = $(form).find('.js-range-val').val();
    var model = $(form).find('.js-model-val').val() ? $(form).find('.js-model-val').val() : 'All';
    var type = $(form).find('.js-type-val').val() ? $(form).find('.js-type-val').val() : 'All';
    url = url + '/' +  range + '/' + model + '/' + type;
    window.location = url + '#acc-global--results';
});

//$('.range-filter').on('change', function () {
//    var url = $(this).closest('form').attr('action'), val = $(':selected', this).val();
//    if (val)
//        window.location.pathname = url + '/' +  val;
//});
//
//$('.model-filter').on('change', function () {
//    var url = $(this).closest('form').attr('action'), val = $(':selected', this).val();
//    if (val)
//        window.location.pathname = url + '/' +  $('#range :selected').val() + '/' + val;
//});



/**
 * Book test drive / ride
 */
$("#testDriveDealers").chosen({ width: '100%' });
$("#testDriveModel").chosen({ width: '100%' });



/**
 * Landing page forms
 */
$(".landing-page-form select").chosen({ width: '100%', placeholder_text_single: "Please select..." });


/**
 * Fancybox
 */

	$(".modal").fancybox({
		padding: 0,
		helpers: {
			title : {
				type : 'outside'
			},
			overlay : {
			    css : {
			        'background' : 'rgba(0,0,0, 0.5)'
			    }
			}
		}
	});

    // Fancybox image
    $(".modal-img").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        
        type : 'image',
        padding: 0,
        maxHeight: '95%',
        maxWidth: '95%',
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                css : {
                    'background' : 'rgba(0,0,0, 0.5)'
                }
            }
        }
    });

    //Fancybox YouTube
    $("a[href*='youtube.com'], a[href*='youtu.be']").addClass('youtube-popup');
    $(".youtube-popup").fancybox({
      padding: 0,
      width: '80%',
      height: '80%',
      helpers: {
        media: {},
        overlay : {
            css : {
                'background' : 'rgba(0,0,0, 0.5)'
            }
        }
      }
    });




});


// Gravitate Namespace, this can be changed to a site specific namespace
// Rev1: not 100% on this, maybe the common features should be in a GRV.core anyway

var namespace = 'GRV';
(function (ns){
    
    /**
     * Google Analytics tracking
     * 
     * This helper sets up a delegate that responds to on click events for 
     * all elements (a's, inputs, etc) that have a data-gcat (GA category)
     * attribute and initializes a click or submit track event (submit for input[type=submit])
     * and also sends the data-galabel label.
     * 
     * Usage:  
     *   1. Add to the page footer       
        <script>
            $(document).ready(function() {
                GRM.setupAnalyticsTracking();
            });
        </script>
     *   
     *   2. Add data-gacat adn data-galabel to links and inputs
     *   <a href="mailto:tom@example.com" data-gacat="Email" data-galabel="Tom_contact">tom@example.com</a>
     *   
     */
    ns = window[ns] = window[ns] || {};

    var setupAnalyticsTracking = function () {
       $('body').on('click', '[data-gacat]', function () {
           var node = $(this);
           var gaMethod = '_trackEvent';
           var category = node.data('gacat');
           var action = (String(node.attr('type')).toLowerCase() == 'submit') ? 'Submit' : 'Click';
           var label = node.data('galabel');
           var value = null;
           var noninteraction =false;
            if (_gaq && _gaq.push && category && action && label) {
                //console.log(" _gaq.push(["+gaMethod+", "+category+", "+action+", "+label+", , "+noninteraction+"]); ");
                _gaq.push([gaMethod, category, action, label, , noninteraction]);
            }
       });
    };




    /**
     * Google map
     * 
     * Usage: Add <script>window.onload=GRV.initialize();</script> to the contact footer
     *       Do not use the <body onload="" ...
     */

    var initializeOnLoad = function() {
        // set the target address    
	var address = "238 Karangahape Road, Auckland, New Zealand";
	geocoder = new google.maps.Geocoder();
	
	geocoder.geocode( { 'address': address}, function(results, status) {
	   if (status == google.maps.GeocoderStatus.OK) {
	  	var myLatlng = results[0].geometry.location;
	  	ll = myLatlng;
	  	var myOptions = {
			   zoom: 16,
			   scrollwheel: false,
			   center: myLatlng,
	 		   mapTypeId: google.maps.MapTypeId.ROADMAP
	 		   
	  	}
			var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
				//map.setUIToDefault();
				//map.setMapType(G_HYBRID_MAP);
			map.setOptions({
				// mapTypeId: google.maps.MapTypeId.SATELLITE
			});
			
		    var image = '/images/map-marker.png';
		    var beachMarker = new google.maps.Marker({
		    	position: myLatlng,
		        map: map,
		        icon: image
	  	});    	 
	   } else {
	      document.getElementById('map_canvas').innerHTML='Map currently not available.';
	   }
	});			
    };
    
    ns.setupAnalyticsTracking = setupAnalyticsTracking;
    ns.initializeOnLoad = initializeOnLoad;
    
    })(namespace);





/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var _OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
            window.Cookies = _OldCookies;
            return api;
        };
    }
}(function () {
    function extend () {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[ i ];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function init (converter) {
        function api (key, value, attributes) {
            var result;

            // Write

            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);

                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }

                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {}

                if (!converter.write) {
                    value = encodeURIComponent(String(value))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                } else {
                    value = converter.write(value, key);
                }

                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);

                return (document.cookie = [
                    key, '=', value,
                    attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
                    attributes.path    && '; path=' + attributes.path,
                    attributes.domain  && '; domain=' + attributes.domain,
                    attributes.secure ? '; secure' : ''
                ].join(''));
            }

            // Read

            if (!key) {
                result = {};
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var name = parts[0].replace(rdecode, decodeURIComponent);
                var cookie = parts.slice(1).join('=');

                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    cookie = converter.read ?
                        converter.read(cookie, name) : converter(cookie, name) ||
                    cookie.replace(rdecode, decodeURIComponent);

                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {}
                    }

                    if (key === name) {
                        result = cookie;
                        break;
                    }

                    if (!key) {
                        result[name] = cookie;
                    }
                } catch (e) {}
            }

            return result;
        }

        api.get = api.set = api;
        api.getJSON = function () {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};

        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.withConverter = init;

        return api;
    }

    return init(function () {});
}));
