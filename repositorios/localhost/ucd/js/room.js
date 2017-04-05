/* ----------------------------------- *\
 [Route] The Highway
\* ----------------------------------- */

Finch.route('/', {
    setup: function(bindings) {
        section = 'home';
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.home_slider, domEl.div_recurrent_slider);
        UCD.loadTemplate(tempsNames.home_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
        carouselMethod.initCarousel();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
    	UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/ucd', {
    setup: function(bindings) {
        section = 'ucd';
        ga('send', 'pageview', '/ucd');
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.ucd_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/servicios', {
    setup: function(bindings) {
        section = 'services';
        ga('send', 'pageview', '/servicios');
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.services_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/consulta-tus-resultados', {
    setup: function(bindings) {
        section = 'view_results';
        ga('send', 'pageview', '/consulta-tus-resultados');
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.view_results_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/programa', {
    setup: function(bindings) {
        section = 'program';
        ga('send', 'pageview', '/programa');
    },
    load: function(bindings) {
        //UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.program_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/promociones', {
    setup: function(bindings) {
        section = 'promos';
        ga('send', 'pageview', '/promociones');
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.promos_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/reconocimientos', {
    setup: function(bindings) {
        section = 'recognitions';
        ga('send', 'pageview', '/reconocimientos');
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.recognitions_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/contacto', {
    setup: function(bindings) {
        section = 'contact';
        ga('send', 'pageview', '/contacto');
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.contact_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
        gmapMethod.gmap();
        gmapMethod.initmap();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/nueva-cita', {
    setup: function(bindings) {
        section = 'appointment';
        ga('send', 'pageview', '/nueva-cita');
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.appointment_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});
Finch.route('/aviso-de-privacidad', {
    setup: function(bindings) {
        section = 'privacy_notice';
        ga('send', 'pageview', '/aviso-de-privacidad');
    },
    load: function(bindings) {
        UCD.loadTemplate(tempsNames.header_background, domEl.div_recurrent_header_background);
        UCD.loadTemplate(tempsNames.privacy_notice_section_features, domEl.div_recurrent);
        changeStylesMethod.changeStyles();
        __sizeCheck($(window));
        menuResponsiveMethod.menuresponsive();
    },
    unload: function(bindings) {
        UCD.setHTML(domEl.div_recurrent_header_background, '');
        UCD.setHTML(domEl.div_recurrent_slider, '');
        UCD.setHTML(domEl.div_recurren, '');
    }
});

Finch.listen();
