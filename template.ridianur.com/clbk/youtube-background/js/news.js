(function($) {
    "use strict";

    // makes sure the whole site is loaded
    $(window).on("load", function() {
        //preloader
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
    });

    //sticky navigation
    $(".header").sticky({
        topSpacing: 0,
        className: 'sticky-header'
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
    });


    //running only in desktop
    if (Modernizr.touch) {
        //news slider setting on touch device
        $(".news-slider").owlCarousel({
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
        //slider news setting
        $(".news-slider").owlCarousel({
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
        $(this).css('background-image', "url('" + imG + "') ");
    });

})(jQuery);