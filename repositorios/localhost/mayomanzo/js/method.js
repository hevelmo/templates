/* ------------------------------------------------------ *\
    [Variables] 'Zone'
\* ------------------------------------------------------ */
	var section, columns;
    // BACK TO TOP BUTTON
    var offset, offset_opacity, scroll_top_duration, $back_to_top;
    offset = 300;
    offset_opacity = 1200;
    scroll_top_duration = 700;
/* ------------------------------------------------------ *\
    [Metodos] backToTopMethod
\* ------------------------------------------------------ */
    var backToTopMethod = {
        backToTop: function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
                }, scroll_top_duration
            );
        },
        windowScroll: function() {
            ( $(this).scrollTop() > offset ) ? $('.top').addClass('is-visible') : $('.top').removeClass('is-visible fade-out');
            if ( $(this).scrollTop() > offset_opacity ) {
                $('.top').addClass('fade-out');
            }
        },
        init_window_scroll_top: function() {
            $(window).scroll(backToTopMethod.windowScroll);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] navbar_collapse_on_scroll_method
\* ------------------------------------------------------ */
    var navbar_collapse_on_scroll_method = {
        navbar_collapse_on_scroll: function() {
            var b = $(window).scrollTop();
            if( b > 60 ){
                $(".navbar").addClass("top-nav-collapse");
            } else {
                $(".navbar").removeClass("top-nav-collapse");
            }

        }
    }
/* ------------------------------------------------------ *\
    [Methods] page_scrolling_feature_method
\* ------------------------------------------------------ */
    var page_scrolling_feature_method = {
        page_scrolling_feature: function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top + 20
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }
    }
/* ------------------------------------------------------ *\
    [Methods] navbar_top_bar_method
\* ------------------------------------------------------ */
    var navbar_top_bar_method = {
        views_top_bar: function() {
            navbar_top_bar_method.navbar_top_bar();
        },
        navbar_top_bar: function() {
            $('.nav-2').affix({
                offset: {
                    top: $('.top-bar').height()
                }
            });
        }
    }
/* ------------------------------------------------------ *\
    [Methods] isMobile
\* ------------------------------------------------------ */
	var isMobile = {
		Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
	}   
/* ------------------------------------------------------ *\
    [Methods] views_section_tp_header_method
\* ------------------------------------------------------ */
    var views_section_tp_header_method = {
        views_section_tp_header: function() {
            views_section_tp_header_method.recurrent_tp_header();
            views_section_tp_header_method.load_templates_to_header();
        },
        load_templates_to_header: function() {
            MAM.loadTemplate(tempsNames.start_site_tp_header, domEl._start_site_main_tp_header);
        },
        recurrent_tp_header: function() {
            data_tp_header = [
                ['div', {'id':'start-site-tp-header', 'class':'tp-header _content'}, '', 1]
            ];
            MAM.appendMulti(domEl.start_site_tp_header, data_tp_header);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] views_section_tp_navbar_method
\* ------------------------------------------------------ */
    var views_section_tp_navbar_method = {
        views_section_tp_navbar: function() {
            views_section_tp_navbar_method.recurrent_tp_navbar();
            views_section_tp_navbar_method.load_templates_to_navbar();
            sticky_wrapper_methods.sticky_wrapper();
        },
        load_templates_to_navbar: function() {
            MAM.loadTemplate(tempsNames.start_site_tp_navbar, domEl._start_site_main_tp_navbar);
        },
        recurrent_tp_navbar: function() {
            data_tp_navbar = [
                ['div', {'id':'start-site-tp-navbar', 'class':'tp-navbar _content'}, '', 1]
            ];
            MAM.appendMulti(domEl.start_site_tp_navbar, data_tp_navbar);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] sticky_wrapper_methods
\* ------------------------------------------------------ */
    var sticky_wrapper_methods = {
        sticky_wrapper: function() {
            $('.tp-navbar').waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: 'sticky'
            });
        }
    }
/* ------------------------------------------------------ *\
    [Methods] views_section_tp_slider_method
\* ------------------------------------------------------ */
    var views_section_tp_slider_method = {
        views_section_tp_slider: function() {
            views_section_tp_slider_method.recurrent_tp_slider();
            views_section_tp_slider_method.load_templates_to_slider();
        },
        load_templates_to_slider: function() {
            MAM.loadTemplate(tempsNames.start_site_tp_slider, domEl._start_site_main_tp_slider);
        },
        recurrent_tp_slider: function() {
            data_tp_slider = [
                ['div', {'id':'start-site-tp-slider', 'class':'tp-slider _content'}, '', 1]
            ];
            MAM.appendMulti(domEl.start_site_tp_slider, data_tp_slider);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] recurrent_section_main_container_method
\* ------------------------------------------------------ */
    var recurrent_section_main_container_method = {
        clear_recurrents_sections: function() {
            MAM.setHTML(domEl._inner_section_main_left_side, '');
            MAM.setHTML(domEl._inner_section_main_right_side, '');
            MAM.setHTML(domEl._inner_section_main_full, '');
        },
        load_main_templates: function() {
            MAM.loadTemplate(tempsNames.start_site_tp_breadcrumb, domEl._start_site_tp_breadcrumb);
            MAM.loadTemplate(tempsNames.start_site_tp_main_container, domEl._start_site_tp_main_container);
        },
        load_tp_right_side: function() {
            MAM.loadTemplate(tempsNames.start_site_tp_right_side, domEl._inner_section_main_right_side);
        },
        recurrent_section_main_container: function() {
            data = [
                ['div', {'id':'start-site-tp-breadcrumb', 'class':'tp-breadcrumb _content'}, '', 1],
                ['div', {'id':'start-site-tp-main-container', 'class':'tp-main-container _content'}, '', 1]
            ];
            MAM.appendMulti(domEl.div_recurrent, data);
        }
    }

/* -------------------------------- HOME -------------------------------- */
    /* ------------------------------------------------------ *\
        [Methods] views_section_home_method
    \* ------------------------------------------------------ */
        var views_section_home_method = {
            views_section_home: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // TP SLIDER
                views_section_tp_slider_method.views_section_tp_slider();
                // SECTION HOME
                views_section_home_method.recurrent_home();
                views_section_home_method.load_templates_to_section_home();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_cv_method.load_atributos();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            load_templates_to_section_home: function() {
                MAM.loadTemplate(tempsNames.section_presurgical_protocol, '#start-site-tp-section');
            },
            recurrent_home: function() {
                data_tp_section_home = [
                    ['div', {'id':'start-site-tp-section', 'class':'tp-section dc-section _content'}, '', 1]
                ];
                MAM.appendMulti(domEl.div_recurrent, data_tp_section_home);
            }
        }
/* ------------------------------ END HOME ------------------------------ */

/* ------------------------------- DOCTOR ------------------------------- */
    /* ------------------------------------------------------ *\
        DR. MANZO / CURRICULUM, ASOCIACIONES Y COLEGIO
        [Methods] views_section_cv_method
    \* ------------------------------------------------------ */
        var views_section_cv_method = {
            views_section_cv: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION DR. MANZO -> CURRICULO
                views_section_cv_method.recurrent_cv();
                views_section_cv_method.load_templates_section_cv();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_cv_method.load_atributos();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            load_templates_section_cv: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_curriculum, domEl._inner_section_main_left_side);
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            recurrent_cv: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }
        }
/* ----------------------------- END DOCTOR ----------------------------- */

/* ---------------------------- BODY CONTOUR ---------------------------- */
    /* ------------------------------------------------------ *\
        CONTORNO CORPORAL / LIPOESCULTURA
        [Methods] views_section_body_contour_lipoescultura_method
    \* ------------------------------------------------------ */
        var views_section_body_contour_lipoescultura_method = {
            views_section_body_contour_lipoescultura: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CONTORNO CORPORAL / LIPOESCULTURA
                views_section_body_contour_lipoescultura_method.recurrent_lipoescultura();
                views_section_body_contour_lipoescultura_method.load_templates_lipoescultura();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_body_contour_lipoescultura_method.load_atributos();
            },        
            load_templates_lipoescultura: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_body_contour_lipoescultura, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_lipoescultura: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        CONTORNO CORPORAL / LIPECTOMIA
        [Methods] views_section_body_contour_lipectomia_method
    \* ------------------------------------------------------ */
        var views_section_body_contour_lipectomia_method = {
            views_section_body_contour_lipectomia: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CONTORNO CORPORAL / LIPECTOMIA
                views_section_body_contour_lipectomia_method.recurrent_lipectomia();
                views_section_body_contour_lipectomia_method.load_templates_lipectomia();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_body_contour_lipectomia_method.load_atributos();
            },        
            load_templates_lipectomia: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_body_contour_lipectomia, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_lipectomia: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        CONTORNO CORPORAL / AUMENTO DE GLUTEO
        [Methods] views_section_body_contour_aumento_gluteo_method
    \* ------------------------------------------------------ */
        var views_section_body_contour_aumento_gluteo_method = {
            views_section_body_contour_aumento_gluteo: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CONTORNO CORPORAL / AUMENTO DE GLUTEO
                views_section_body_contour_aumento_gluteo_method.recurrent_aumento_gluteo();
                views_section_body_contour_aumento_gluteo_method.load_templates_aumento_gluteo();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_body_contour_aumento_gluteo_method.load_atributos();
            },        
            load_templates_aumento_gluteo: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_body_contour_aumento_gluteo, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_aumento_gluteo: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        CONTORNO CORPORAL / MOMMY MAKEOVER
        [Methods] views_section_body_contour_mommy_makeover_method
    \* ------------------------------------------------------ */
        var views_section_body_contour_mommy_makeover_method = {
            views_section_body_contour_mommy_makeover: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CONTORNO CORPORAL / MOMMY MAKEOVER
                views_section_body_contour_mommy_makeover_method.recurrent_mommy_makeover();
                views_section_body_contour_mommy_makeover_method.load_templates_mommy_makeover();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_body_contour_mommy_makeover_method.load_atributos();
            },        
            load_templates_mommy_makeover: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_body_contour_mommy_makeover, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_mommy_makeover: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        CONTORNO CORPORAL / AUMENTO DE PANTORRILLA
        [Methods] views_section_body_contour_increased_calf_method
    \* ------------------------------------------------------ */
        var views_section_body_contour_increased_calf_method = {
            views_section_body_contour_increased_calf: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CONTORNO CORPORAL / AUMENTO DE PANTORRILLA
                views_section_body_contour_increased_calf_method.recurrent_increased_calf();
                views_section_body_contour_increased_calf_method.load_templates_increased_calf();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_body_contour_increased_calf_method.load_atributos();
            },        
            load_templates_increased_calf: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_aumento_pantorrilla, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_increased_calf: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        CONTORNO CORPORAL / BRAQUIOPLASTIA
        [Methods] views_section_body_contour_brachioplasty_method
    \* ------------------------------------------------------ */
        var views_section_body_contour_brachioplasty_method = {
            views_section_body_contour_brachioplasty: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CONTORNO CORPORAL / BRAQUIOPLASTIA
                views_section_body_contour_brachioplasty_method.recurrent_brachioplasty();
                views_section_body_contour_brachioplasty_method.load_templates_brachioplasty();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_body_contour_brachioplasty_method.load_atributos();
            },        
            load_templates_brachioplasty: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_braquioplastia, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_brachioplasty: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
/* -------------------------- END BODY COUNTUR -------------------------- */

/* --------------------------- BREAST SURGERY --------------------------- */
    /* ------------------------------------------------------ *\
        CIRUGIA DE MAMAS / AUMENTO DE MAMAS
        [Methods] views_section_breast_surgery_breast_augmentation_method
    \* ------------------------------------------------------ */
        var views_section_breast_surgery_breast_augmentation_method = {
            views_section_breast_surgery_breast_augmentation: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA DE MAMAS / AUMENTO DE MAMAS
                views_section_breast_surgery_breast_augmentation_method.recurrent_breast_augmentation();
                views_section_breast_surgery_breast_augmentation_method.load_templates_breast_augmentation();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_breast_surgery_breast_augmentation_method.load_atributos();
            },        
            load_templates_breast_augmentation: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_aumento_mamas, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_breast_augmentation: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        CIRUGIA DE MAMAS / LEVANTAMIENTO DE MAMAS
        [Methods] views_section_breast_surgery_breast_lift_method
    \* ------------------------------------------------------ */
        var views_section_breast_surgery_breast_lift_method = {
            views_section_breast_surgery_breast_lift: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA DE MAMAS / LEVANTAMIENTO DE MAMAS
                views_section_breast_surgery_breast_lift_method.recurrent_breast_lift();
                views_section_breast_surgery_breast_lift_method.load_templates_breast_lift();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_breast_surgery_breast_lift_method.load_atributos();
            },        
            load_templates_breast_lift: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_levantamiento_mamas, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_breast_lift: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        CIRUGIA DE MAMAS / REDUCCION DE MAMAS
        [Methods] views_section_breast_surgery_breast_reduction_method
    \* ------------------------------------------------------ */
        var views_section_breast_surgery_breast_reduction_method = {
            views_section_breast_surgery_breast_reduction: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA DE MAMAS / REDUCCION DE MAMAS
                views_section_breast_surgery_breast_reduction_method.recurrent_breast_reduction();
                views_section_breast_surgery_breast_reduction_method.load_templates_breast_reduction();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_breast_surgery_breast_reduction_method.load_atributos();
            },        
            load_templates_breast_reduction: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_reduccion_mamas, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_breast_reduction: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
/* ------------------------- END BREAST SURGERY ------------------------- */

/* --------------------------- FACIAL SURGERY --------------------------- */
    /* ------------------------------------------------------ *\
        CIRUGIA FACIAL / REJUVENECIMIENTO FACIAL
        [Methods] views_section_facial_surgery_facelifts_method
    \* ------------------------------------------------------ */
        var views_section_facial_surgery_facelifts_method = {
            views_section_facial_surgery_facelifts: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA FACIAL / REJUVENECIMIENTO FACIAL
                views_section_facial_surgery_facelifts_method.recurrent_facelifts();
                views_section_facial_surgery_facelifts_method.load_templates_facelifts();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_facial_surgery_facelifts_method.load_atributos();
            },        
            load_templates_facelifts: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_rejuvenicimiento_facial, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_facelifts: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        CIRUGIA FACIAL / CIRUGÍA DE PARPADOS
        [Methods] views_section_facial_surgery_eyelid_surgery_method
    \* ------------------------------------------------------ */
        var views_section_facial_surgery_eyelid_surgery_method = {
            views_section_facial_surgery_eyelid_surgery: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA FACIAL / CIRUGÍA DE PARPADOS
                views_section_facial_surgery_eyelid_surgery_method.recurrent_eyelid_surgery();
                views_section_facial_surgery_eyelid_surgery_method.load_templates_eyelid_surgery();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_facial_surgery_eyelid_surgery_method.load_atributos();
            },
            load_templates_eyelid_surgery: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_cirugia_parpados, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_eyelid_surgery: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }  
        }
    /* ------------------------------------------------------ *\
        CIRUGIA FACIAL / CIRUGÍA DE NARIZ
        [Methods] views_section_facial_surgery_nose_surgery_method
    \* ------------------------------------------------------ */
        var views_section_facial_surgery_nose_surgery_method = {
            views_section_facial_surgery_nose_surgery: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA FACIAL / CIRUGÍA DE NARIZ
                views_section_facial_surgery_nose_surgery_method.recurrent_nose_surgery();
                views_section_facial_surgery_nose_surgery_method.load_templates_nose_surgery();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_facial_surgery_nose_surgery_method.load_atributos();
            },        
            load_templates_nose_surgery: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_cirugia_nariz, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_nose_surgery: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }
        }
    /* ------------------------------------------------------ *\
        CIRUGIA FACIAL / POMULOS
        [Methods] views_section_facial_surgery_cheek_method
    \* ------------------------------------------------------ */
        var views_section_facial_surgery_cheek_method = {
            views_section_facial_surgery_cheek: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA FACIAL / POMULOS
                views_section_facial_surgery_cheek_method.recurrent_cheek();
                views_section_facial_surgery_cheek_method.load_templates_cheek();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_facial_surgery_cheek_method.load_atributos();
            },        
            load_templates_cheek: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_cirugia_pomulos, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_cheek: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }
        }
    /* ------------------------------------------------------ *\
        CIRUGIA FACIAL / CIRUGÍA DE MEJILLA
        [Methods] views_section_facial_surgery_cheek_surgery_method
    \* ------------------------------------------------------ */
        var views_section_facial_surgery_cheek_surgery_method = {
            views_section_facial_surgery_cheek_surgery: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA FACIAL / POMULOS
                views_section_facial_surgery_cheek_surgery_method.recurrent_cheek_surgery();
                views_section_facial_surgery_cheek_surgery_method.load_templates_cheek_surgery();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_facial_surgery_cheek_surgery_method.load_atributos();
            },        
            load_templates_cheek_surgery: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_cirugia_mejilla, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_cheek_surgery: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }
        }
    /* ------------------------------------------------------ *\
        CIRUGIA FACIAL / CIRUGÍA DE OREJAS
        [Methods] views_section_facial_surgery_ear_surgery_method
    \* ------------------------------------------------------ */
        var views_section_facial_surgery_ear_surgery_method = {
            views_section_facial_surgery_ear_surgery: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA FACIAL / CIRUGÍA DE OREJAS
                views_section_facial_surgery_ear_surgery_method.recurrent_ear_surgery();
                views_section_facial_surgery_ear_surgery_method.load_templates_ear_surgery();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_facial_surgery_ear_surgery_method.load_atributos();
            },        
            load_templates_ear_surgery: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_cirugia_orejas, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_ear_surgery: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }
        }
    /* ------------------------------------------------------ *\
        CIRUGIA FACIAL / AUMENTO DE LABIOS
        [Methods] views_section_facial_surgery_lip_surgery_method
    \* ------------------------------------------------------ */
        var views_section_facial_surgery_lip_surgery_method = {
            views_section_facial_surgery_lip_surgery: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA FACIAL / CIRUGÍA DE OREJAS
                views_section_facial_surgery_lip_surgery_method.recurrent_lip_surgery();
                views_section_facial_surgery_lip_surgery_method.load_templates_lip_surgery();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_facial_surgery_lip_surgery_method.load_atributos();
            },        
            load_templates_lip_surgery: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_aumento_labios, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_lip_surgery: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }
        }
    /* ------------------------------------------------------ *\
        CIRUGIA FACIAL / AUMENTO DE MENTON
        [Methods] views_section_facial_surgery_chin_augmentation_method
    \* ------------------------------------------------------ */
        var views_section_facial_surgery_chin_augmentation_method = {
            views_section_facial_surgery_chin_augmentation: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION CIRUGIA FACIAL / AUMENTO DE MENTON
                views_section_facial_surgery_chin_augmentation_method.recurrent_chin_augmentation();
                views_section_facial_surgery_chin_augmentation_method.load_templates_chin_augmentation();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_facial_surgery_chin_augmentation_method.load_atributos();
            },        
            load_templates_chin_augmentation: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_aumento_menton, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_chin_augmentation: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }
        }
/* ------------------------- END FACIAL SURGERY ------------------------- */

/* ---------------------------- NONSURGICAL ----------------------------- */
    /* ------------------------------------------------------ *\
        NO QUIRURGICOS / APLICACION DE TOXINA BOTULINICA (BOTOX)
        [Methods] views_section_nonsurgical_botox_application_method
    \* ------------------------------------------------------ */
        var views_section_nonsurgical_botox_application_method = {
            views_section_nonsurgical_botox_application: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION NO QUIRURGICOS / REJUVENECIMIENTO FACIAL
                views_section_nonsurgical_botox_application_method.recurrent_botox_application();
                views_section_nonsurgical_botox_application_method.load_templates_botox_application();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_nonsurgical_botox_application_method.load_atributos();
            },        
            load_templates_botox_application: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_botox_application, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_botox_application: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        NO QUIRURGICOS / APLICACION DE RELLENOS EN LABIO, SURCOS DE EXPRESION
        [Methods] views_section_nonsurgical_excessive_sweating_method
    \* ------------------------------------------------------ */
        var views_section_nonsurgical_excessive_sweating_method = {
            views_section_nonsurgical_excessive_sweating: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION NO QUIRURGICOS / REJUVENECIMIENTO FACIAL
                views_section_nonsurgical_excessive_sweating_method.recurrent_excessive_sweating();
                views_section_nonsurgical_excessive_sweating_method.load_templates_excessive_sweating();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_nonsurgical_excessive_sweating_method.load_atributos();
            },        
            load_templates_excessive_sweating: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_sudoracion_excesiva, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_excessive_sweating: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }        
        }
    /* ------------------------------------------------------ *\
        NO QUIRURGICOS / APLICACION DE BOTOX PARA EVITAR LA SUDORACION EXCESIVA
        [Methods] views_section_nonsurgical_expression_furrows_method
    \* ------------------------------------------------------ */
        var views_section_nonsurgical_expression_furrows_method = {
            views_section_nonsurgical_expression_furrows: function() {
                // TP HEADER
                views_section_tp_header_method.views_section_tp_header();
                // TP NAVBAR
                views_section_tp_navbar_method.views_section_tp_navbar();
                // SECTION NO QUIRURGICOS / CIRUGÍA DE PARPADOS
                views_section_nonsurgical_expression_furrows_method.recurrent_expression_furrows();
                views_section_nonsurgical_expression_furrows_method.load_templates_expression_furrows();
                // TP FOOTER
                views_section_tp_footer_method.views_section_tp_footer();
                // ATRIBUTOS
                views_section_nonsurgical_expression_furrows_method.load_atributos();
            },
            load_templates_expression_furrows: function() {
                recurrent_section_main_container_method.load_main_templates();
                MAM.loadTemplate(tempsNames.section_surcos_expresion, domEl._inner_section_main_left_side);
                // RIGHT SIDE
                recurrent_section_main_container_method.load_tp_right_side();
                send_form_contact_method.refreshForm();

                //load_atributes_method.has_class_changes_columns();
            },
            load_atributos: function() {
                load_atributes_method.load_atributes();
            },
            recurrent_expression_furrows: function() {
                recurrent_section_main_container_method.recurrent_section_main_container();
            }  
        }
/* -------------------------- END NONSURGICAL --------------------------- */

/* ------------------------------------------------------ *\
    [Methods] views_section_tp_contact_method
\* ------------------------------------------------------ */
    var views_section_tp_contact_method = {
        views_section_tp_contact: function() {
            // TP HEADER
            views_section_tp_header_method.views_section_tp_header();
            // TP NAVBAR
            views_section_tp_navbar_method.views_section_tp_navbar();
            // SECTION CONTACT
            views_section_tp_contact_method.recurrent_contact();
            views_section_tp_contact_method.load_templates_contact();
            // TP FOOTER
            views_section_tp_footer_method.views_section_tp_footer();
            // ATRIBUTOS
            views_section_tp_contact_method.load_atributos();
        },
        load_atributos: function() {
            load_atributes_method.load_atributes();
        },
        load_templates_contact: function() {
            recurrent_section_main_container_method.load_main_templates();
            MAM.loadTemplate(tempsNames.section_contact, domEl._inner_section_main_full);   
            send_form_contact_method.refreshForm();

            //_gmap_contact.gmap();
            //_gmap_contact.init_gmaps();
            initMap();

            //load_atributes_method.has_class_changes_columns();
        },
        recurrent_contact: function() {
            recurrent_section_main_container_method.recurrent_section_main_container();
        }
    }
    var map;
    function initMap() {
        var mapOptions = {
            center: new google.maps.LatLng(20.6777642, -103.3766268),
            zoom: 16,
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            },
            styles: _gmap_contact.style_gmap()
        };
        map = new google.maps.Map(document.getElementById('gmap'),mapOptions);
        addMarkers();
    }
    function addMarkers(marker) {
        //var marker;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(20.6777642, -103.3766268),
            title: 'Mayo Manzo',
            icon: "img/pin.png", //custom pin icon
            map: map
        });
        infoWindow(marker);        
    }
    function infoWindow(marker) {
        var popup = new google.maps.InfoWindow({
            content:
                '<div class="marker-info-win" style="text-align: center;">'+
                '<div class="marker-inner-win">'+
                '<span class="info-content">'+
                '<img src="img/logo/skin-surgery.png" alt="Mayo Plastic" style="margin-botton: 10px;" width="250">'+
                //'<h5 class="marker-heading" style="color:#000; padding: 0px; margin: 0px;">Mayo Plastic</h5>'+
                //'<span>Justo Sierra No. 2372, Col. Ladrón de Guevara, Guadalajara, Jalisco.</span>'+
                '</span>'+
                '</div></div>'
        });
        attachInfoWindowToMarker(map, marker, popup);
        function attachInfoWindowToMarker( map, marker, infoWindow ) {
            infoWindow.open(map, marker, popup);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] _gmap_contact
\* ------------------------------------------------------ */
    var _gmap_contact = {
        style_gmap: function(style) {
            var main_color, saturation_value, brightness_value;
            main_color = '#2d313f';
            saturation_value = -20;
            brightness_value = 5;
            style = [
                { //set saturation for the labels on the map
                    elementType: "labels",
                    stylers: [ { saturation: saturation_value } ]
                },
                { //poi stands for point of interest - don't show these lables on the map
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [  { visibility: "off" } ]
                },
                { //don't show highways lables on the map
                    featureType: 'road.highway',
                    elementType: 'labels',
                    stylers: [ { visibility: "off" } ]
                },
                {  //don't show local road lables on the map
                    featureType: "road.local",
                    elementType: "labels.icon",
                    stylers: [ { visibility: "off" } ]
                },
                {  //don't show arterial road lables on the map
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [ { visibility: "off" } ]
                },
                { //don't show road lables on the map
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [ { visibility: "off" } ]
                },
                { //style different elements on the map
                    featureType: "transit",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi.government",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi.sport_complex",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi.attraction",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "poi.business",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "transit",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "landscape",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]

                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [
                        { hue: main_color },
                        { visibility: "on" },
                        { lightness: brightness_value },
                        { saturation: saturation_value }
                    ]
                }
            ];
        },
        gmap: function(style) {
            var main_color, saturation_value, brghtness_value,
                latitud, longitud, location_center, mapOpcNews, 
                map, marker2, popup;

            /*main_color = '#2d313f';
            saturation_value = -20;
            brightness_value = 5;*/

            latitud = 20.6777642;
            longitud = -103.3766268;

            location_center = new google.maps.LatLng(latitud,longitud);

            mapOpcNews = {
                zoom: 16,
                center: location_center,
                scrollwheel: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                },
                styles: _gmap_contact.style_gmap()
            }

            map = new google.maps.Map(document.getElementById('gmap'),mapOpcNews);

            marker2 = new google.maps.Marker({
                position: map.getCenter(),
                map: map,
                title: 'Mayo Manzo',
                icon: "img/pin.png" //custom pin icon
            });

            popup = new google.maps.InfoWindow({
                content:
                    '<div class="marker-info-win" style="text-align: center;">'+
                    '<div class="marker-inner-win">'+
                    '<span class="info-content">'+
                    '<img src="img/logo/skin-surgery.png" alt="Mayo Plastic" style="margin-botton: 10px;" width="250">'+
                    //'<h5 class="marker-heading" style="color:#000; padding: 0px; margin: 0px;">Mayo Plastic</h5>'+
                    //'<span>Justo Sierra No. 2372, Col. Ladrón de Guevara, Guadalajara, Jalisco.</span>' +
                    '</span>'+
                    '</div></div>'
            });

            attachInfoWindowToMarker(map, marker2, popup);

            function attachInfoWindowToMarker( map, marker, infoWindow ) {
                infoWindow.open(map, marker2, popup);
            }
        },
        init_gmaps: function() {
            google.maps.event.addDomListener(window, 'load', _gmap_contact.gmap());
        }
    }

/* ------------------------------------------------------ *\
    [Methods] views_section_tp_footer_method
\* ------------------------------------------------------ */
    var views_section_tp_footer_method = {
        views_section_tp_footer: function() {
            views_section_tp_footer_method.recurrent_tp_footer();
            views_section_tp_footer_method.load_templates_to_footer();
        },
        load_templates_to_footer: function() {
            MAM.loadTemplate(tempsNames.start_site_tp_footer, domEl._start_site_main_tp_footer);
        },
        recurrent_tp_footer: function() {
            data_tp_footer = [
                ['div', {'id':'start-site-tp-footer', 'class':'tp-footer _content'}, '', 1]
            ];
            MAM.appendMulti(domEl.start_site_tp_footer, data_tp_footer);
        }
    }
/* ------------------------------------------------------ *\
    [Methods] init_flex_method
\* ------------------------------------------------------ */
    var init_flex_method = {
        init_flex: function() {
            $('.flexslider').flexslider({
                animation: "slide",
            });
        }
    }
/* ------------------------------------------------------ *\
    [Methods] go_section_method
\* ------------------------------------------------------ */
    var go_section_method = {
        go_section_home: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
            //ga('send', 'event', 'navigation_bar', 'Menu_Inicio', 'go_index', 'Inicio');
            //console.log("ga('send', 'event', 'navigation_bar', 'Menu_Inicio', 'go_index', 'Inicio');");
            Finch.navigate('/');
        }
    }
/* ------------------------------------------------------ *\
    [Methods] load_atributes_method
\* ------------------------------------------------------ */
    var load_atributes_method = {
        load_atributes: function() {
            switch (section) {
                /* -------------------------------- HOME -------------------------------- */
                    case 'home':
                        load_atributes_method.current_navbar_nav_home();
                        break;
                /* ------------------------------ END HOME ------------------------------ */
                /* ------------------------------- DOCTOR ------------------------------- */
                    case 'curriculum':
                        load_atributes_method.current_navbar_nav_curriculum();
                        break;
                /* ----------------------------- END DOCTOR ----------------------------- */
                /* ---------------------------- BODY CONTOUR ---------------------------- */
                    case 'lipoescultura':
                        load_atributes_method.current_navbar_nav_lipoescultura();
                        break;
                    case 'lipectomia':
                        load_atributes_method.current_navbar_nav_lipectomia();
                        break;
                    case 'aumento-gluteo':
                        load_atributes_method.current_navbar_nav_increased_gluteo();
                        break;
                    case 'mommy-makeover':
                        load_atributes_method.current_navbar_nav_mommy_makeover();
                        break;
                    case 'aumento-pantorrilla':
                        load_atributes_method.current_navbar_nav_increased_calf();
                        break;
                    case 'braquioplastia':
                        load_atributes_method.current_navbar_nav_brachioplasty();
                        break;
                /* -------------------------- END BODY COUNTUR -------------------------- */
                /* --------------------------- BREAST SURGERY --------------------------- */
                    case 'aumento-mamas':
                        load_atributes_method.current_navbar_nav_breast_augmentation();
                        break;
                    case 'levantamiento-mamas':
                        load_atributes_method.current_navbar_nav_breast_lift();
                        break;
                    case 'reduccion-mamas':
                        load_atributes_method.current_navbar_nav_breast_reduction();
                        break;
                /* ------------------------- END BREAST SURGERY ------------------------- */
                /* --------------------------- FACIAL SURGERY --------------------------- */
                    case 'rejuvenicimiento-facial':
                        load_atributes_method.current_navbar_nav_facelifts();
                        break;
                    case 'cirugia-parpados':
                        load_atributes_method.current_navbar_nav_eyelid_surgery();
                        break;
                    case 'cirugia-nariz':
                        load_atributes_method.current_navbar_nav_nose_surgery();
                        break;
                    case 'cirugia-pomulos':
                        load_atributes_method.current_navbar_nav_cheek();
                        break;
                    case 'cirugia-mejilla':
                        load_atributes_method.current_navbar_nav_cheek_surgery();
                        break;
                    case 'cirugia-orejas':
                        load_atributes_method.current_navbar_nav_ear_surgery();
                        break;
                    case 'aumento-labios':
                        load_atributes_method.current_navbar_nav_neck_lip_surgery();
                        break;
                    case 'aumento-menton':
                        load_atributes_method.current_navbar_nav_chin_augmentation();
                        break;
                /* ------------------------- END FACIAL SURGERY ------------------------- */
                /* ---------------------------- NONSURGICAL ----------------------------- */
                    case 'toxina-botulinica-botox':
                        load_atributes_method.current_navbar_nav_botox_application();
                        break;
                    case 'sudoracion-excesiva':
                        load_atributes_method.current_navbar_nav_excessive_sweating();
                        break;
                    case 'surcos-expresion':
                        load_atributes_method.current_navbar_nav_expression_furrows();
                        break;
                /* -------------------------- END NONSURGICAL --------------------------- */
                case 'contact':
                    load_atributes_method.current_navbar_nav_contact();
                    break;
                case 'blog':
                    load_atributes_method.current_navbar_nav_blog();
                    break;
                default:
                    break;
            }
        },
        /* -------------------------------- HOME -------------------------------- */
            current_navbar_nav_home: function() {
                $('#navbar-nav-home').addClass('active');
            },
        /* ------------------------------ END HOME ------------------------------ */
        /* ------------------------------- DOCTOR ------------------------------- */
            current_navbar_nav_level_first_doctor: function() {
                $('#navbar-nav-doctor').addClass('active');
            },
            current_navbar_nav_curriculum: function() {
                $('#tp-section').html('Doctor Manzo');
                $('#tp-sub-section').html('Currículum');
                $('#views-other-section').hide();
                load_atributes_method.current_navbar_nav_level_first_doctor();
                $('#navbar-nav-curriculum').addClass('active');
            },
        /* ----------------------------- END DOCTOR ----------------------------- */
        /* ---------------------------- BODY CONTOUR ---------------------------- */
            current_navbar_nav_level_first_body_contour: function() {
                $('#navbar-nav-corporal-control').addClass('active');
            },        
            nav_card_panel_body_contour: function() {
                $('#card-panel-section-title').html('Contorno Corporal');
                MAM.loadTemplate(tempsNames.start_nav_card_panel_body_contour, '#nav-card-panel');
            },
            current_navbar_nav_lipoescultura: function() {
                $('#tp-section').html('Contorno Corporal');
                $('#tp-sub-section').html('Lipoescultura');
                load_atributes_method.nav_card_panel_body_contour();
                load_atributes_method.current_navbar_nav_level_first_body_contour();
                $('#navbar-nav-lipoescultura').addClass('active');
                $('#nav-card-panel-lipoescultura').addClass('active');
            },
            current_navbar_nav_lipectomia: function() {
                $('#tp-section').html('Contorno Corporal');
                $('#tp-sub-section').html('Lipectomía');
                load_atributes_method.nav_card_panel_body_contour();
                load_atributes_method.current_navbar_nav_level_first_body_contour();
                $('#navbar-nav-lipectomia').addClass('active');
                $('#nav-card-panel-lipectomia').addClass('active');
            },
            current_navbar_nav_increased_gluteo: function() {
                $('#tp-section').html('Contorno Corporal');
                $('#tp-sub-section').html('Aumento de gluteo, BBL');
                load_atributes_method.nav_card_panel_body_contour();
                load_atributes_method.current_navbar_nav_level_first_body_contour();
                $('#navbar-nav-increased-gluteo').addClass('active');
                $('#nav-card-panel-aumento-gluteo').addClass('active');
            },
            current_navbar_nav_mommy_makeover: function() {
                $('#tp-section').html('Contorno Corporal');
                $('#tp-sub-section').html('Mommy Makeover');
                load_atributes_method.nav_card_panel_body_contour();
                load_atributes_method.current_navbar_nav_level_first_body_contour();
                $('#navbar-nav-mommy-makeover').addClass('active');
                $('#nav-card-panel-mommy-makeover').addClass('active');
            },
            current_navbar_nav_increased_calf: function() {
                $('#tp-section').html('Contorno Corporal');
                $('#tp-sub-section').html('Aumento de Pantorrilla');
                load_atributes_method.nav_card_panel_body_contour();
                load_atributes_method.current_navbar_nav_level_first_body_contour();
                $('#navbar-nav-increased-calf').addClass('active');
                $('#nav-card-panel-aumento-pantorrilla').addClass('active');
            },
            current_navbar_nav_brachioplasty: function() {
                $('#tp-section').html('Contorno Corporal');
                $('#tp-sub-section').html('Braquioplastía');
                load_atributes_method.nav_card_panel_body_contour();
                load_atributes_method.current_navbar_nav_level_first_body_contour();
                $('#navbar-nav-increased-calf').addClass('active');
                $('#nav-card-panel-braquioplastia').addClass('active');
            },
        /* -------------------------- END BODY COUNTUR -------------------------- */
        /* --------------------------- BREAST SURGERY --------------------------- */
            current_navbar_nav_level_first_breast_surgery: function() {
                $('#navbar-nav-breast-surgery').addClass('active');
            },
            nav_card_panel_breast_surgery: function() {
                $('#card-panel-section-title').html('Cirugía de mamas');
                MAM.loadTemplate(tempsNames.start_nav_card_panel_breast_surgery, '#nav-card-panel');
            },
            current_navbar_nav_breast_augmentation: function() {
                $('#tp-section').html('Cirugía de mamas');
                $('#tp-sub-section').html('Aumento de mamas');
                load_atributes_method.nav_card_panel_breast_surgery();
                load_atributes_method.current_navbar_nav_level_first_breast_surgery();
                $('#navbar-nav-breast-augmentation').addClass('active');
                $('#nav-card-panel-aumento-mamas').addClass('active');
            },
            current_navbar_nav_breast_lift: function() {
                $('#tp-section').html('Cirugía de mamas');
                $('#tp-sub-section').html('Levantamiento de mamas');
                load_atributes_method.nav_card_panel_breast_surgery();
                load_atributes_method.current_navbar_nav_level_first_breast_surgery();
                $('#navbar-nav-breast-lift').addClass('active');
                $('#nav-card-panel-levantamiento-mamas').addClass('active');
            },
            current_navbar_nav_breast_reduction: function() {
                $('#tp-section').html('Cirugía de mamas');
                $('#tp-sub-section').html('Reducción de mamas');
                load_atributes_method.nav_card_panel_breast_surgery();
                load_atributes_method.current_navbar_nav_level_first_breast_surgery();
                $('#navbar-nav-breast-reduction').addClass('active');
                $('#nav-card-panel-reduccion-mamas').addClass('active');
            },
        /* ------------------------- END BREAST SURGERY ------------------------- */
        /* --------------------------- FACIAL SURGERY --------------------------- */
            current_navbar_nav_level_first_facial_surgery: function() {
                $('#navbar-nav-facial-surgery').addClass('active');
            },
            nav_card_panel_facial_surgery: function() {
                $('#card-panel-section-title').html('Cirugía facial');
                MAM.loadTemplate(tempsNames.start_nav_card_panel_cirugia_facial, '#nav-card-panel');
            },
            current_navbar_nav_facelifts: function() {
                $('#tp-section').html('Cirugía facial');
                $('#tp-sub-section').html('Rejuvenecimiento facial');
                load_atributes_method.nav_card_panel_facial_surgery();
                load_atributes_method.current_navbar_nav_level_first_facial_surgery();
                $('#navbar-nav-facelifts').addClass('active');
                $('#nav-card-panel-facelifts').addClass('active');
            },
            current_navbar_nav_eyelid_surgery: function() {
                $('#tp-section').html('Cirugía facial');
                $('#tp-sub-section').html('Cirugía de parpados');
                load_atributes_method.nav_card_panel_facial_surgery();
                load_atributes_method.current_navbar_nav_level_first_facial_surgery();
                $('#navbar-nav-eyelid-surgery').addClass('active');
                $('#nav-card-panel-eyelid-surgery').addClass('active');
            },
            current_navbar_nav_nose_surgery: function() {
                $('#tp-section').html('Cirugía facial');
                $('#tp-sub-section').html('Cirugía de nariz');
                load_atributes_method.nav_card_panel_facial_surgery();
                load_atributes_method.current_navbar_nav_level_first_facial_surgery();
                $('#navbar-nav-nose-surgery').addClass('active');
                $('#nav-card-panel-nose-surgery').addClass('active');
            },
            current_navbar_nav_cheek: function() {
                $('#tp-section').html('Cirugía facial');
                $('#tp-sub-section').html('Cirugía de pomulos');
                load_atributes_method.nav_card_panel_facial_surgery();
                load_atributes_method.current_navbar_nav_level_first_facial_surgery();
                $('#navbar-nav-cheek').addClass('active');
                $('#nav-card-panel-cheek').addClass('active');
            },
            current_navbar_nav_cheek_surgery: function() {
                $('#tp-section').html('Cirugía facial');
                $('#tp-sub-section').html('Cirugía de mejilla');
                load_atributes_method.nav_card_panel_facial_surgery();
                load_atributes_method.current_navbar_nav_level_first_facial_surgery();
                $('#navbar-nav-cheek-surgery').addClass('active');
                $('#nav-card-panel-cheek-surgery').addClass('active');
            },
            current_navbar_nav_ear_surgery: function() {
                $('#tp-section').html('Cirugía facial');
                $('#tp-sub-section').html('Cirugía de orejas');
                load_atributes_method.nav_card_panel_facial_surgery();
                load_atributes_method.current_navbar_nav_level_first_facial_surgery();
                $('#navbar-nav-ear-surgery').addClass('active');
                $('#nav-card-panel-ear-surgery').addClass('active');
            },
            current_navbar_nav_neck_lip_surgery: function() {
                $('#tp-section').html('Cirugía facial');
                $('#tp-sub-section').html('Amento de labios');
                load_atributes_method.nav_card_panel_facial_surgery();
                load_atributes_method.current_navbar_nav_level_first_facial_surgery();
                $('#navbar-nav-lip-surgery').addClass('active');
                $('#nav-card-panel-lip-surgery').addClass('active');
            },
            current_navbar_nav_chin_augmentation: function() {
                $('#tp-section').html('Cirugía facial');
                $('#tp-sub-section').html('Aumento de menton');
                load_atributes_method.nav_card_panel_facial_surgery();
                load_atributes_method.current_navbar_nav_level_first_facial_surgery();
                $('#navbar-nav-chin-augmentation').addClass('active');
                $('#nav-card-panel-chin-augmentation').addClass('active');
            },
        /* ------------------------- END FACIAL SURGERY ------------------------- */
        /* ---------------------------- NONSURGICAL ----------------------------- */
            current_navbar_nav_level_first_nonsurgical: function() {
                $('#navbar-nav-nonsurgical-procedures').addClass('active');
            },
            nav_card_panel_nonsurgical: function() {
                $('#card-panel-section-title').html('No Quirúrgicos');
                MAM.loadTemplate(tempsNames.start_nav_card_panel_no_quirurgicos, '#nav-card-panel');
            },
            current_navbar_nav_botox_application: function() {
                $('#tp-section').html('No Quirúrgicos');
                $('#tp-sub-section').html('Aplicación de botox en cara');
                load_atributes_method.nav_card_panel_nonsurgical();
                load_atributes_method.current_navbar_nav_level_first_nonsurgical();
                $('#navbar-nav-botox-application').addClass('active');
                $('#nav-card-panel-botox-application').addClass('active');
            },
            current_navbar_nav_excessive_sweating: function() {
                $('#tp-section').html('No Quirúrgicos');
                $('#tp-sub-section').html('Aplicación de botox para evitar sudoración excesiva');
                load_atributes_method.nav_card_panel_nonsurgical();
                load_atributes_method.current_navbar_nav_level_first_nonsurgical();
                $('#navbar-nav-excessive-sweating').addClass('active');
                $('#nav-card-panel-excessive-sweating').addClass('active');
            },
            current_navbar_nav_expression_furrows: function() {
                $('#tp-section').html('No Quirúrgicos');
                $('#tp-sub-section').html('Aplicación de rellenos en labio, surcos de expresión');
                load_atributes_method.nav_card_panel_nonsurgical();
                load_atributes_method.current_navbar_nav_level_first_nonsurgical();
                $('#navbar-nav-expression-furrows').addClass('active');
                $('#nav-card-panel-expression-furrows').addClass('active');
            },
        /* -------------------------- END NONSURGICAL --------------------------- */
        current_navbar_nav_contact: function() {
            $('#tp-section').html('Contacto');
            $('#tp-sub-section').hide();
            $('#navbar-nav-contact').addClass('active');
        },
        current_navbar_nav_blog: function() {
            $('#tp-section').html('Blog');
            $('#tp-sub-section').hide();
            $('#navbar-nav-blog').addClass('active');
        },
        remove_navbar_nav_active: function() {
            if ( $('li').hasClass('deactivated') ) {
                $(this).each(function(index) {
                    $(this).removeClass('active');
                });
            }
        },
        has_class_changes_columns: function() {
            if ( $('div.contact_element').hasClass('changes-columns') ) {
                switch (columns) {
                    case 'short':
                        $('.changes-columns').addClass('col-md-12');
                        $('.loader_send .msg').addClass('msg-short');
                        $('#loader_send_icon').addClass('loader-short');
                        $('.form-thanks').addClass('thanks-short');
                        break;
                    case 'long':
                        $('.changes-columns').addClass('col-md-9 col-md-offset-3');
                        $('.loader_send .msg').addClass('msg-long');
                        $('#loader_send_icon').addClass('loader-long');
                        $('.form-thanks').addClass('thanks-long');
                        break;
                    default:
                        break;
                }
            }
        }
    }
/* ------------------------------------------------------ *\
    [Methods] send_form_contact_method
\* ------------------------------------------------------ */
    var send_form_contact_method = {
        addDataContactForm: function() {
            var data;
            data = $(domEl._form_contact).serializeFormJSON();
            console.log(data);
            return MAM.postalService(urlsApi.send_form_contact, data);
        },
        fillingControl: function() {
            var valid_items, data, isFull, isNoEmpty;
            valid_items = [
                'firstname', 'lastname', 'phone', 'email', 'message'
            ];
            data = $(domEl._form_contact).serializeFormJSON();
            isFull = MAM.validFormFull(data, valid_items);
            $('#submit').attr('disabled', !isFull);
        },
        refreshForm: function() {
            MAM.loadTemplate(tempsNames.start_site_form_contact, domEl._inner_form_contact);
            //$('#submit').attr('disabled', true);
        },
        resetForm: function() {
            MAM.resetForm(domEl._form_contact);
            $('#submit').attr('disabled', true);
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
        },
        validate_fields_keyup: function() {
            send_form_contact_method.fillingControl();
        },
        sen_fomr_contact: function() {
            send_form_contact_method.fillingControl();
            var mam_firstname, mam_lastname, mam_phone, mam_email, mam_message;
            mam_firstname = $('#firstname');
            mam_lastname = $('#lastname');
            mam_phone = $('#phone');
            mam_email = $('#email');
            mam_message = $('#message');

            form_errors = 0;
            if ( !validateMethods.validate_input( mam_firstname ) ) {
                form_errors++;
                mam_firstname.focusout();
            }
            if ( !validateMethods.validate_input( mam_lastname ) ) {
                form_errors++;
                mam_lastname.focusout();
            }
            if ( !validateMethods.validate_input( mam_phone ) ) {
                form_errors++;
                mam_phone.focusout();
            }
            if ( !validateMethods.validate_input( mam_email ) ) {
                form_errors++;
                mam_email.focusout();
            }
            if ( !validateMethods.validate_input( mam_message ) ) {
                form_errors++;
                mam_message.focusout();
            }
            if ( form_errors == 0 ) {
                form_contact_promise = send_form_contact_method.addDataContactForm();

                form_contact_promise.success(function() {
                    setTimeout(function() {
                        console.log('Espera');
                        //$("#form-wrapper").fadeOut(300, function() {
                            setTimeout(function() {
                                $(".form-loader").fadeIn();
                            }, 300);
                        //});
                        setTimeout(function() {
                            console.log("Correo Enviado...");
                            setTimeout(function() {
                                //$("#form-wrapper").fadeOut(300, function() {
                                    setTimeout(function() {
                                        $("#funding_resume").fadeIn();
                                    }, 1800);
                                //});
                                setTimeout(function () {
                                    $('.form-loader').fadeOut();
                                    send_form_contact_method.resetForm();
                                    setTimeout(function () {
                                        //$('#form-wrapper').fadeIn( 300 , function() {
                                            $('#funding_resume').fadeOut();
                                        //});
                                        setTimeout(function() {
                                            send_form_contact_method.finchNavigateReturn();
                                        }, 1000);
                                    }, 3400);
                                }, 1800);
                            }, 1800);
                        }, 1400);
                    }, 500)
                });
                form_contact_promise.error(function() {
                    setTimeout(function() {
                        console.log('Espera');
                        setTimeout(function () {
                            /*$('#form-wrapper').fadeOut( 300 , function() {
                                setTimeout(function () {
                                    $('.form-loader').fadeIn();
                                }, 900);
                            });*/
                            setTimeout(function () {
                                console.log("Correo no enviado...");
                                setTimeout(function () {
                                    /*$('#form-wrapper').fadeOut( 300 , function() {
                                        setTimeout(function () {
                                            $('.form-error').fadeIn();
                                        }, 300);
                                    });*/
                                    setTimeout(function () {
                                        //send_form_contact_method.resetForm();
                                        setTimeout(function () {
                                            /*$('#form-wrapper').fadeIn( 300 , function() {
                                                $('.form-error').fadeOut();
                                            });
                                            */
                                            setTimeout(function() {
                                                send_form_contact_method.resetForm();
                                            }, 1000);
                                        }, 1200);
                                    }, 800);
                                }, 900);
                            }, 400);
                        }, 800);
                    }, 500);
                });
            }
        }
    }

/* ------------------------------------------------------ *\
    [Methods] setFinancingNewFormMethod
\* ------------------------------------------------------ */
	var financing_form_leads = {
		addDataFinancingForm: function() {
			var data;
			data = $('#leads_lp_suzuki_financing_by_model').serializeFormJSON();
			console.log(data);
			return LSUK.postalService(urlsApi.send_form_leads_funding, data);
		},
		fillingControl: function() {
			var valid_items, data, isFull, isNoEmpty;
			valid_items = [
				'leads_lp_suk_financing_by_model_name',
				'leads_lp_suk_financing_by_model_lastname',
				'leads_lp_suk_financing_by_model_email',
				'leads_lp_suk_financing_by_model_tel',
				'leads_lp_suk_financing_by_model_message'
			];
			data = $('#leads_lp_suzuki_financing_by_model').serializeFormJSON();
			isFull = LSUK.validFormFull(data, valid_items);
            $('#send_leads_financing_by_model_submit').attr('disabled', !isFull);
            console.log(data);
		},
		refreshForm: function() {
			LSUK.loadTemplate(tempsNames.start_site_form_leads, domEl._start_site_form_leads);
            $('#financing_by_model_concessionaire').chosen();
            $('#financing_by_model_model_name').chosen();
            financing_form_leads.set_input_hidden();
            $('#send_leads_financing_by_model_submit').attr('disabled', true);
            console.log('Refresh Form');
		},
		resetForm: function() {
            LSUK.resetForm('#leads_lp_suzuki_financing_by_model');
            $('#financing_by_model_concessionaire_chosen a.chosen-single span').text('Selecciona Concesionaria');
            $('#financing_by_model_model_name_chosen a.chosen-single span').text('Selecciona Modelo');
            $('#send_leads_financing_by_model_submit').attr('disabled', true);
            console.log('Reset Form');
        },
        finchNavigateReturn: function(event) {
            $('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
        },
        validate_fields_keyup: function() {
            financing_form_leads.fillingControl();
        },
        fbm_validate_select: function() {
            financing_form_leads.fillingControl();
        },
        set_input_hidden: function() {
        	set_input_hidden = [
        		['input', {'id' : 'financing_by_model_image_model', 'class' : 'set_input_hidden', 'value' : '', 'name' : 'leads_lp_suk_financing_by_model_image_model', 'type' : 'hidden'}, '', 0],
        		['input', {'id' : 'financing_by_model_name_model', 'class' : 'set_input_hidden', 'value' : '', 'name' : 'leads_lp_suk_financing_by_model_name_model', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'financing_by_model_date_format', 'class' : 'set_input_hidden', 'value' : '', 'name' : 'leads_lp_suk_financing_by_model_date_format', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'financing_by_model_source', 'class' : 'set_input_hidden', 'value' : '', 'name' : 'leads_lp_suk_financing_by_model_source', 'type' : 'hidden'}, '', 0],
                ['input', {'id' : 'financing_by_model_medio', 'class' : 'set_input_hidden', 'value' : '', 'name' : 'leads_lp_suk_financing_by_model_medio', 'type' : 'hidden'}, '', 0]
            ];
            LSUK.appendMulti('#funding_fields_hidden', set_input_hidden);
        },
        send_set_funding: function() {
        	financing_form_leads.fillingControl();
        	var concessionaire, model_name,
        		name, lastname, email,
        		phone, message, model_picture,
        		date_format, source, url_medio,
        		val_concessionaire_key, replace_concessionaire_acute,
        		val_model_key, val_url_medio,
        		new_model_name, form_errors, replace_model, 
                day, f, month, financing_leads_promise;

            concessionaire = $('#financing_by_model_concessionaire');
			model_name = $('#financing_by_model_model_name');
			name = $('#financing_by_model_name');
			lastname = $('#financing_by_model_lastname');
			email = $('#financing_by_model_email');
			phone = $('#financing_by_model_tel');
			message = $('#financing_by_model_message');
            model_picture = $('#financing_by_model_image_model');
            date_format = $('#financing_by_model_date_format');
            source = $('#financing_by_model_source');
            name_model = $('#financing_by_model_name_model');
            url_medio = $('#financing_by_model_medio');

            val_concessionaire_key = concessionaire.val();
			val_model_key = model_name.val();

			console.log(val_concessionaire_key);
			console.log(val_model_key);

			val_url_medio = 'http://localhost:8030/landings/lp_suzuki/';
			LSUK.setValue(url_medio, val_url_medio);

			if ( val_concessionaire_key != null && val_concessionaire_key != '' ) {
				replace_concessionaire = LSUK.replaceAll(val_concessionaire_key, '-', ' ');
				replace_concessionaire_acute = LSUK.replaceAll(replace_concessionaire, 'lopez', 'lópez');
				concessionaire_name = LSUK.ucWords(replace_concessionaire_acute);
				LSUK.setValue(source, concessionaire_name);
				console.log(concessionaire_name);
			}

			if ( val_model_key != null && val_model_key != '' ) {
				replace_model = LSUK.replaceAll(val_model_key, '-', ' ');
				new_model_name = LSUK.ucWords(replace_model);
				LSUK.setValue(model_picture, 'thumb-'+val_model_key+'.png');
				LSUK.setValue(name_model, new_model_name);
				console.log(model_picture.val());
				console.log(name_model.val());
			}

			day = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
            f = new Date();
            month = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

            dateFormat = day[f.getDay()] + ", " + f.getDate() + " de " + month[f.getMonth()] + " de " + f.getFullYear();
            LSUK.setValue(date_format, dateFormat);
            console.log(dateFormat);

            form_errors = 0;
            if ( !validateMethods.validate_input( concessionaire ) ) {
                form_errors++;
                concessionaire.change();
            }
            if ( !validateMethods.validate_input( model_name ) ) {
                form_errors++;
                model_name.change();
            }
            if ( !validateMethods.validate_input( name ) ) {
                form_errors++;
                name.focusout();
            }
            if ( !validateMethods.validate_input( lastname ) ) {
                form_errors++;
                lastname.focusout();
            }
            if ( !validateMethods.validate_input( email ) ) {
                form_errors++;
                email.focusout();
            }
            if ( !validateMethods.validate_input( phone ) ) {
                form_errors++;
                phone.focusout();
            }
            if ( !validateMethods.validate_input( message ) ) {
                form_errors++;
                message.focusout();
            }
            if ( form_errors == 0 ) {
            	$('#funding_resume_email').html( email.val() );
                $('#funding_resume_concessionaire').text( source.val() );

                financing_leads_promise = financing_form_leads.addDataFinancingForm();

                financing_leads_promise.success(function() {
                	setTimeout(function() {
                		console.log('Espera');
                		//$("#form-wrapper").fadeOut(300, function() {
                			setTimeout(function() {
                				$(".form-loader").fadeIn();
                			}, 300);
                		//});
                		setTimeout(function() {
                            console.log("Correo Enviado...");
                            setTimeout(function() {
                                //$("#form-wrapper").fadeOut(300, function() {
                                    setTimeout(function() {
                                        $("#funding_resume").fadeIn();
                                    }, 1800);
                                //});
                                setTimeout(function () {
                                    $('.form-loader').fadeOut();
                                    financing_form_leads.resetForm();
                                    setTimeout(function () {
                                        //$('#form-wrapper').fadeIn( 300 , function() {
                                            $('#funding_resume').fadeOut();
                                        //});
                                        setTimeout(function() {
                                            financing_form_leads.finchNavigateReturn();
                                        }, 1000);
                                    }, 3400);
                                }, 1800);
                            }, 1800);
                        }, 1400);
                	}, 500)
                });
                financing_leads_promise.error(function() {
                	setTimeout(function() {
                        console.log('Espera');
                        setTimeout(function () {
                            /*$('#form-wrapper').fadeOut( 300 , function() {
                                setTimeout(function () {
                                    $('.form-loader').fadeIn();
                                }, 900);
                            });*/
                            setTimeout(function () {
                                console.log("Correo no enviado...");
                                setTimeout(function () {
                                    /*$('#form-wrapper').fadeOut( 300 , function() {
                                        setTimeout(function () {
                                            $('.form-error').fadeIn();
                                        }, 300);
                                    });*/
                                    setTimeout(function () {
                                        //financing_form_leads.resetForm();
                                        setTimeout(function () {
                                            /*$('#form-wrapper').fadeIn( 300 , function() {
                                                $('.form-error').fadeOut();
                                            });
                                            */
                                            setTimeout(function() {
                                                financing_form_leads.resetForm();
                                            }, 1000);
                                        }, 1200);
                                    }, 800);
                                }, 900);
                            }, 400);
                        }, 800);
                    }, 500);
                });
            }
        }
	}


/* ------------------------------------------------------ *\
    [Methods] validate
\* ------------------------------------------------------ */
    var validateMethods = {
        validate : function(value, rules, required, custom_message) {
            var r = { valid : false, message : '' },
            null_value = value == undefined || value === '' ,
            ii, rule;
            required = required === true ? true: false;
            if( required ){
                if( null_value ){
                    r.message = validation_messages.required;
                }
            }else{
                if( null_value ){
                    r.valid = true;
                }
            }
            if( !r.valid && r.message === '' ){
                ii = rules.length;
                while( ii-- ){
                    rule = rules[ii];
                    switch( rule ){
                        case 'email':
                            if( !validations_regexp.email.test( value ) ){
                                r.message = validation_messages.email;
                            }
                            break;
                        case 'name':
                            if( !validations_regexp.name.exec( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'address':
                            if( !validations_regexp.address.exec( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'car_key':
                            if(  !is_model_name( value ) ){
                                r.message = validation_messages.general;
                            }
                            break;
                        case 'date':
                            if( !validations_regexp.date.exec( value ) ){
                                r.message = validation_messages.date;
                            }
                            break;
                        case 'phone':
                            if( !validations_regexp.phone.exec( value ) ){
                                r.message = validation_messages.phone;
                            }
                            break;
                        default:
                            r.message = validations_regexp.not_config;
                            break;
                    }
                }
                if( r.message === '' ){
                    r.valid = true;
                }
            }
            if( custom_message && !r.valid ){
                r.message = custom_message;
            }
            return r;
        },
        //Display Input errors
        error_bubble : function( $label, show, message ){
            var $p = $label.parent().children('p.invalid-message');
            if( show ){
                if( message ){
                    $p.html( message + '<span>&nbsp;</span>' ).stop().hide().fadeIn();
                }else{
                    $p.stop().hide().fadeIn();
                }
            }else{
                $p.hide();
            }
        },
        validate_input : function(event) {
            var target = $(event.target);
            //console.log(target);
            if( target.is('input') || target.is('textarea') ){
                var valid_data = target.data('validation-data');
                var val_data    = valid_data.split('|'),
                    required    = val_data.indexOf('required');
                if( required >= 0 ){
                    val_data.splice(required, 1);
                }
                var value = target.val(),
                    validation = validateMethods.validate( value, val_data, ( required >= 0 )  );
                validateMethods.error_bubble( target, !validation.valid, validation.message );
                return validation.valid;
            }else{
                var is_valid = !( target.val() === null );
                validateMethods.error_bubble( target, !is_valid, validation_messages.required );
                return is_valid;
            }
        }
    }
/* ------------------------------------------------------ *\
    [function] material ripples
\* ------------------------------------------------------ */
    $.material =  {
        "options": {
          // These options set what will be started by $.material.init()
          "input": true,
          "ripples": true,
          "checkbox": true,
          "togglebutton": true,
          "radio": true,
          "arrive": true,
          "autofill": false,

          "withRipples": [
            ".btn:not(.btn-link)",
            ".card-image",
            ".navbar a:not(.withoutripple)",
            ".dropdown-menu a",
            ".nav-tabs a:not(.withoutripple)",
            ".withripple"
          ].join(","),
          "inputElements": "input.form-control, textarea.form-control, select.form-control",
          "checkboxElements": ".checkbox > label > input[type=checkbox]",
          "togglebuttonElements": ".togglebutton > label > input[type=checkbox]",
          "radioElements": ".radio > label > input[type=radio]"
        },
        "checkbox": function(selector) {
          // Add fake-checkbox to material checkboxes
          $((selector) ? selector : this.options.checkboxElements)
          .filter(":notmdproc")
          .data("mdproc", true)
          .after("<span class=ripple></span><span class=check></span>");
        },
        "togglebutton": function(selector) {
          // Add fake-checkbox to material checkboxes
          $((selector) ? selector : this.options.togglebuttonElements)
          .filter(":notmdproc")
          .data("mdproc", true)
          .after("<span class=toggle></span>");
        },
        "radio": function(selector) {
          // Add fake-radio to material radios
          $((selector) ? selector : this.options.radioElements)
          .filter(":notmdproc")
          .data("mdproc", true)
          .after("<span class=circle></span><span class=check></span>");
        },
        "input": function(selector) {
          $((selector) ? selector : this.options.inputElements)
          .filter(":notmdproc")
          .data("mdproc", true)
          .each( function() {
            var $this = $(this);

            if (!$(this).attr("data-hint") && !$this.hasClass("floating-label")) {
              return;
            }
            $this.wrap("<div class=form-control-wrapper></div>");
            $this.after("<span class=material-input></span>");

            // Add floating label if required
            if ($this.hasClass("floating-label")) {
              var placeholder = $this.attr("placeholder");
              $this.attr("placeholder", null).removeClass("floating-label");
              $this.after("<div class=floating-label>" + placeholder + "</div>");
            }

            // Add hint label if required
            if ($this.attr("data-hint")) {
              $this.after("<div class=hint>" + $this.attr("data-hint") + "</div>");
            }

            // Set as empty if is empty (damn I must improve this...)
            if ($this.val() === null || $this.val() == "undefined" || $this.val() === "") {
              $this.addClass("empty");
            }

            // Support for file input
            if ($this.parent().next().is("[type=file]")) {
              $this.parent().addClass("fileinput");
              var $input = $this.parent().next().detach();
              $this.after($input);
            }
          });

          /*$(document)
          .on("change", ".checkbox input[type=checkbox]", function() { $(this).blur(); })
          .on("keydown paste", ".form-control", function(e) {
            if(_isChar(e)) {
              $(this).removeClass("empty");
            }
          })
          .on("keyup change", ".form-control", function() {
            var $this = $(this);
            if($this.val() === "" && $this[0].checkValidity()) {
              $this.addClass("empty");
            } else {
              $this.removeClass("empty");
            }
          })
          .on("focus", ".form-control-wrapper.fileinput", function() {
            $(this).find("input").addClass("focus");
          })
          .on("blur", ".form-control-wrapper.fileinput", function() {
            $(this).find("input").removeClass("focus");
          })
          .on("change", ".form-control-wrapper.fileinput [type=file]", function() {
            var value = "";
            $.each($(this)[0].files, function(i, file) {
              value += file.name + ", ";
            });
            value = value.substring(0, value.length - 2);
            if (value) {
              $(this).prev().removeClass("empty");
            } else {
              $(this).prev().addClass("empty");
            }
            $(this).prev().val(value);
          });*/
        },
        "ripples": function(selector) {
          $((selector) ? selector : this.options.withRipples).ripples();
        },
        "autofill": function() {

          // This part of code will detect autofill when the page is loading (username and password inputs for example)
          var loading = setInterval(function() {
            $("input[type!=checkbox]").each(function() {
              if ($(this).val() && $(this).val() !== $(this).attr("value")) {
                $(this).trigger("change");
              }
            });
          }, 100);

          // After 10 seconds we are quite sure all the needed inputs are autofilled then we can stop checking them
          setTimeout(function() {
            clearInterval(loading);
          }, 10000);
          // Now we just listen on inputs of the focused form (because user can select from the autofill dropdown only when the input has focus)
          var focused;
          $(document)
          .on("focus", "input", function() {
            var $inputs = $(this).parents("form").find("input").not("[type=file]");
            focused = setInterval(function() {
              $inputs.each(function() {
                if ($(this).val() !== $(this).attr("value")) {
                  $(this).trigger("change");
                }
              });
            }, 100);
          })
          .on("blur", "input", function() {
            clearInterval(focused);
          });
        },
        "init": function() {
          if ($.fn.ripples && this.options.ripples) {
            this.ripples();
          }
          if (this.options.input) {
            this.input();
          }
          if (this.options.checkbox) {
            this.checkbox();
          }
          if (this.options.togglebutton) {
            this.togglebutton();
          }
          if (this.options.radio) {
            this.radio();
          }
          if (this.options.autofill) {
            this.autofill();
          }

          if (document.arrive && this.options.arrive) {
            if ($.fn.ripples && this.options.ripples) {
              $(document).arrive(this.options.withRipples, function() {
                $.material.ripples($(this));
              });
            }
            if (this.options.input) {
              $(document).arrive(this.options.inputElements, function() {
                $.material.input($(this));
              });
            }
            if (this.options.checkbox) {
              $(document).arrive(this.options.checkboxElements, function() {
                $.material.checkbox($(this));
              });
            }
            if (this.options.radio) {
              $(document).arrive(this.options.radioElements, function() {
                $.material.radio($(this));
              });
            }
            if (this.options.togglebutton) {
              $(document).arrive(this.options.togglebuttonElements, function() {
                $.material.togglebutton($(this));
              });
            }

          }
        }
    };