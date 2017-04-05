/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "home";
        },
        load: function(bindings) {
            viewSectionHeaderWrapperMethod.viewSectionHeaderWrapper();
            viewSectionSliderWrapperMethod.viewSectionSliderWrapper();
            menuResponsiveMethod.menuResponsive();
            __sizeCheck($(window));
            carouselMethod.initCarousel();
            currentSectionMethod.currentSection_home();

            viewSectionHomeMethod.viewSectionHome();
        },
        unload: function(bindings) {
            section = "";
            TAM.setHTML(domEl.div_recurren, '');
            currentSectionMethod.remove_currentSection();
            removeRecurrentsMethod.removeRecurrents();
        }
    });
/* ----------------------------------- *\
 [Route] ABOUT US
\* ----------------------------------- */
    Finch.route('/nosotros', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "about-us";
            ga('send', 'pageview', '/nosotros');
        },
        load: function(bindings) {
            viewSectionHeaderWrapperMethod.viewSectionHeaderWrapper();
            viewSectionHeaderBGWrapperMethod.viewSectionHeaderBGWrapper();
            menuResponsiveMethod.menuResponsive();
            __sizeCheck($(window));
            carouselMethod.initCarousel();
            currentSectionMethod.currentSection_about_us();

            viewSectionAboutUsMethod.viewSectionAboutUs();
            viewSectionServicesMethod.prependCaret();
        },
        unload: function(bindings) {
            section = "";
            TAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] SERVICES
\* ----------------------------------- */
    Finch.route('/servicios', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "services";
            ga('send', 'pageview', '/servicios');
        },
        load: function(bindings) {
            viewSectionHeaderWrapperMethod.viewSectionHeaderWrapper();
            viewSectionHeaderBGWrapperMethod.viewSectionHeaderBGWrapper();
            menuResponsiveMethod.menuResponsive();
            __sizeCheck($(window));
            carouselMethod.initCarousel();
            currentSectionMethod.currentSection_services();

            viewSectionServicesMethod.viewSectionServices();
            $('.venobox').venobox();
        },
        unload: function(bindings) {
            section = "";
            TAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] OBJECTIVES
\* ----------------------------------- */
    Finch.route('/objetivos', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "objectives";
            ga('send', 'pageview', '/objetivos');
        },
        load: function(bindings) {
            viewSectionHeaderWrapperMethod.viewSectionHeaderWrapper();
            viewSectionHeaderBGWrapperMethod.viewSectionHeaderBGWrapper();
            menuResponsiveMethod.menuResponsive();
            __sizeCheck($(window));
            carouselMethod.initCarousel();
            currentSectionMethod.currentSection_objectives();

            viewSectionObjectivesMethod.viewSectionObjectives();
        },
        unload: function(bindings) {
            section = "";
            TAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] CONTACT
\* ----------------------------------- */
    Finch.route('/contacto', {
        setup: function(bindings) {
            // Add favicon
            window.onload = favicon.load_favicon();
            section = "contact";
            ga('send', 'pageview', '/contacto');
        },
        load: function(bindings) {
            viewSectionHeaderWrapperMethod.viewSectionHeaderWrapper();
            viewSectionHeaderBGWrapperMethod.viewSectionHeaderBGWrapper();
            menuResponsiveMethod.menuResponsive();
            __sizeCheck($(window));
            carouselMethod.initCarousel();
            currentSectionMethod.currentSection_contact();

            viewSectionContactMethod.viewSectionContact();
            gmapMethod.gmap();
            gmapMethod.gmapInit();
            $(window).scroll(gmapMethod.gmapWindowScroll);
        },
        unload: function(bindings) {
            section = "";
            TAM.setHTML(domEl.div_recurren, '');
            removeRecurrentsMethod.removeRecurrents();
            currentSectionMethod.remove_currentSection();
        }
    });
Finch.listen();
