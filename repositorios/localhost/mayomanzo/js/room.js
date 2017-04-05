/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            section = 'home';
            columns = 'long';
        },
        load: function(bindings) {
            views_section_home_method.views_section_home();
            // INIT FLEXSLIDER
            init_flex_method.init_flex();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] DR. MANZO -> CURRICULO
\* ----------------------------------- */
    Finch.route('/curriculum', {
        setup: function(bindings) {
            section = 'curriculum';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_cv_method.views_section_cv();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CONTORNO CORPORAL -> LIPOESCULTURA
\* ----------------------------------- */
    Finch.route('/lipoescultura', {
        setup: function(bindings) {
            section = 'lipoescultura';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_body_contour_lipoescultura_method.views_section_body_contour_lipoescultura();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CONTORNO CORPORAL -> LIPECTOMIA
\* ----------------------------------- */
    Finch.route('/lipectomia', {
        setup: function(bindings) {
            section = 'lipectomia';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_body_contour_lipectomia_method.views_section_body_contour_lipectomia();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CONTORNO CORPORAL -> LIPECTOMIA
\* ----------------------------------- */
    Finch.route('/aumento-gluteo', {
        setup: function(bindings) {
            section = 'aumento-gluteo';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_body_contour_aumento_gluteo_method.views_section_body_contour_aumento_gluteo();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CONTORNO CORPORAL -> MOMMY MAKEOVER
\* ----------------------------------- */
    Finch.route('/mommy-makeover', {
        setup: function(bindings) {
            section = 'mommy-makeover';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_body_contour_mommy_makeover_method.views_section_body_contour_mommy_makeover();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CONTORNO CORPORAL -> AUMENTO PANTORRILLA
\* ----------------------------------- */
    Finch.route('/aumento-pantorrilla', {
        setup: function(bindings) {
            section = 'aumento-pantorrilla';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_body_contour_increased_calf_method.views_section_body_contour_increased_calf();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CONTORNO CORPORAL -> BRAQUIOPLASTIA
\* ----------------------------------- */
    Finch.route('/braquioplastia', {
        setup: function(bindings) {
            section = 'braquioplastia';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_body_contour_brachioplasty_method.views_section_body_contour_brachioplasty();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA DE MAMAS -> AUMENTO MAMAS
\* ----------------------------------- */
    Finch.route('/aumento-mamas', {
        setup: function(bindings) {
            section = 'aumento-mamas';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_breast_surgery_breast_augmentation_method.views_section_breast_surgery_breast_augmentation();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA DE MAMAS -> LEVANTAMIENTO MAMAS
\* ----------------------------------- */
    Finch.route('/levantamiento-mamas', {
        setup: function(bindings) {
            section = 'levantamiento-mamas';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_breast_surgery_breast_lift_method.views_section_breast_surgery_breast_lift();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA DE MAMAS -> REDUCCION MAMAS
\* ----------------------------------- */
    Finch.route('/reduccion-mamas', {
        setup: function(bindings) {
            section = 'reduccion-mamas';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_breast_surgery_breast_reduction_method.views_section_breast_surgery_breast_reduction();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA FACIAL -> REJUVENICIMIENTO FACIAL
\* ----------------------------------- */
    Finch.route('/rejuvenicimiento-facial', {
        setup: function(bindings) {
            section = 'rejuvenicimiento-facial';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_facial_surgery_facelifts_method.views_section_facial_surgery_facelifts();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA FACIAL -> CIRUGIA PARPADOS
\* ----------------------------------- */
    Finch.route('/cirugia-parpados', {
        setup: function(bindings) {
            section = 'cirugia-parpados';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_facial_surgery_eyelid_surgery_method.views_section_facial_surgery_eyelid_surgery();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA FACIAL -> CIRUGIA NARIZ
\* ----------------------------------- */
    Finch.route('/cirugia-nariz', {
        setup: function(bindings) {
            section = 'cirugia-nariz';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_facial_surgery_nose_surgery_method.views_section_facial_surgery_nose_surgery();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA FACIAL -> POMULOS
\* ----------------------------------- */
    Finch.route('/cirugia-pomulos', {
        setup: function(bindings) {
            section = 'cirugia-pomulos';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_facial_surgery_cheek_method.views_section_facial_surgery_cheek();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA FACIAL -> CIRUGÍA DE MEJILLA
\* ----------------------------------- */
    Finch.route('/cirugia-mejilla', {
        setup: function(bindings) {
            section = 'cirugia-mejilla';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_facial_surgery_cheek_surgery_method.views_section_facial_surgery_cheek_surgery();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA FACIAL -> CIRUGIA DE OREJAS
\* ----------------------------------- */
    Finch.route('/cirugia-orejas', {
        setup: function(bindings) {
            section = 'cirugia-orejas';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_facial_surgery_ear_surgery_method.views_section_facial_surgery_ear_surgery();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA FACIAL -> AUMENTO DE LABIOS
\* ----------------------------------- */
    Finch.route('/aumento-labios', {
        setup: function(bindings) {
            section = 'aumento-labios';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_facial_surgery_lip_surgery_method.views_section_facial_surgery_lip_surgery();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] CIRUGIA FACIAL -> AUMENTO DE MENTON
\* ----------------------------------- */
    Finch.route('/aumento-menton', {
        setup: function(bindings) {
            section = 'aumento-menton';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_facial_surgery_chin_augmentation_method.views_section_facial_surgery_chin_augmentation();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });


/* ----------------------------------- *\
 [Route] NO QUIRURGICOS -> APLICACION DE TOXINA BOTULINICA (BOTOX)
\* ----------------------------------- */
    Finch.route('/toxina-botulinica-botox', {
        setup: function(bindings) {
            section = 'toxina-botulinica-botox';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_nonsurgical_botox_application_method.views_section_nonsurgical_botox_application();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
        }
    });         
/* ----------------------------------- *\
 [Route] NO QUIRURGICOS -> APLICACION DE RELLENOS EN LABIO, SURCOS DE EXPRESION
\* ----------------------------------- */
    Finch.route('/sudoracion-excesiva', {
        setup: function(bindings) {
            section = 'sudoracion-excesiva';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_nonsurgical_excessive_sweating_method.views_section_nonsurgical_excessive_sweating();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] NO QUIRURGICOS -> CIRUGÍA DE PARPADOS
\* ----------------------------------- */
    Finch.route('/surcos-expresion', {
        setup: function(bindings) {
            section = 'surcos-expresion';
            columns = 'short';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_nonsurgical_expression_furrows_method.views_section_nonsurgical_expression_furrows();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });

/* ----------------------------------- *\
 [Route] CONTACTO
\* ----------------------------------- */
    Finch.route('/contacto', {
        setup: function(bindings) {
            section = 'contact';
            columns = 'long';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_tp_contact_method.views_section_tp_contact();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
/* ----------------------------------- *\
 [Route] BLOG
\* ----------------------------------- */
    Finch.route('/blog', {
        setup: function(bindings) {
            section = 'blog';
            columns = 'long';
            ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            views_section_tp_aumento_gluteo_method.views_section_tp_aumento_gluteo();
            load_atributes_method.has_class_changes_columns();
            // BACK TO TOP
            backToTopMethod.init_window_scroll_top();
            $.material.init();
        },
        unload: function(bindings) {
            section = "";
            columns = '';
            MAM.setHTML(domEl.start_site_tp_header, '');
            MAM.setHTML(domEl.start_site_tp_navbar, '');
            MAM.setHTML(domEl.start_site_tp_slider, '');
            MAM.setHTML(domEl.start_site_tp_footer, '');
            MAM.setHTML(domEl.div_recurrent, '');
            load_atributes_method.remove_navbar_nav_active();
            recurrent_section_main_container_method.clear_recurrents_sections();
        }
    });
Finch.listen();
