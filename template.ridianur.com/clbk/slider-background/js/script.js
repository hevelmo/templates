(function($) {
    "use strict";
	
	// makes sure the whole site is loaded
    $(window).on("load", function() {
        //preloader
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
        //move to hash after loading
        if (window.location.hash) {
            $('html, body').stop().animate({
                scrollTop: $(window.location.hash).offset().top - 82
            }, 300, 'linear');
        }
        //google map load after all page finish
        $('#map_canvas').gmap({
            'center': '-6.94010,107.62575',

            'zoom': 15,
            scrollwheel: false,
            'disableDefaultUI': false,
            'styles': [{
                stylers: [{
                    lightness: 7
                }, {
                    saturation: -100
                }]
            }],
            'callback': function() {
                var self = this;
                self.addMarker({
                    'position': this.get('map').getCenter(),
                    icon: 'images/office-building.png',
                }).click(function() {
                    self.openInfoWindow({
                        'content': $('.map-content').html()
                    }, this);
                });
            }
        });
    });

    //sticky navigation
    $(".header").sticky({
        topSpacing: 0,
        className: 'sticky-header'
    });
    //Page scrolling
    $('.home-nav').onePageNav({
        filter: ':not(.external)',
        scrollThreshold: 0.25,
        scrollOffset: 82
    });

    //script for navigation(superfish)
    $('.menu-box ul').superfish({
        delay: 400, //delay on mouseout
        animation: {
            opacity: 'show',
            height: 'show'
        }, // fade-in and slide-down animation
        animationOut: {
            opacity: 'hide',
            height: 'hide'
        },
        speed: 200, //  animation speed
        speedOut: 200,
        autoArrows: false // disable generation of arrow mark-up
    });

    //create menu for tablet/mobile
    $(".menu-box .navigation").clone(false).find("ul,li").removeAttr("id").remove(".sub-menu").appendTo($(".mobile-menu"));
    $(".mobile-menu .sub-menu").remove();
    $('.mobile-menu').on('show.bs.collapse', function() {
        $('body').on('click', function() {
            $('.mobile-menu').collapse('hide');
        })
    })

    //toggle menu
    $('.menu-btn').on('click', function() {
            $('.mobile-menu').collapse({
                toggle: false
            });
        })
        //menu for tablet/mobile scrolling
    $('.mobile-menu a').on('click', function(event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 90
        }, 800, 'linear');
        event.preventDefault();
    });


    //parallax setting
    $.stellar.positionProperty.position = {

        setTop: function($element, newTop, originalTop) {
            $element.css('top', newTop);
            if ($element.hasClass("para-opacity")) {
                var rate = $(window).height() / 1.5;
                $element.css('opacity', 1 - (newTop / rate));
            }
        },
        setLeft: function($element, newLeft, originalLeft) {
            $element.css('left', newLeft);
        }

    }

    //running only in desktop
    if (Modernizr.touch) {
        //home slider setting on touch device
        $(".home-slider").owlCarousel({
            navigation: false, // Hide next and prev buttons
            slideSpeed: 400,
            autoplay: false,
            pagination: true,
            paginationSpeed: 400,
            autoHeight: false,
            singleItem: true
        });
        //add class no-para for body in touch device
        $("body").addClass('no-para');
    } else {
        $(window).stellar({
            horizontalScrolling: false,
            hideDistantElements: false,
            responsive: true
        });
        //slider homepage setting
        $(".home-slider").owlCarousel({
            navigation: false, // Hide next and prev buttons
            slideSpeed: 300,
            autoplay: true,
            pagination: true,
            paginationSpeed: 300,
            singleItem: true,
            transitionStyle: "fade"
        });
    }

    // script prettyphoto
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        social_tools: false,
        hook: 'data-rel',
        deeplinking: false
    });

    // Video responsive
    $("body").fitVids();

    //replace the data-background into background image
    $(".img-bg").each(function() {
        var imG = $(this).data('background');
        $(this).css('background-image', "url('" + imG + "') "
        );
    });

})(jQuery);