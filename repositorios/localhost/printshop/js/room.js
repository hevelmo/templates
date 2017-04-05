/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            section = 'home';
            headers = 'is-slider';
            //ga('send', 'pageview', '/' + section);           
        },
        load: function(bindings) {
            _section_home_method.build_section_home();
        },
        unload: function(bindings) {
            section = "";
            headers = "";
            PSH.setHTML(domEl.div_loader, '');
            PSH.setHTML(domEl.div_topbar, '');
            PSH.setHTML(domEl.div_header_line, '');
            PSH.setHTML(domEl.div_menu_holder, '');
            PSH.setHTML(domEl.div_slider, '');
            PSH.setHTML(domEl.div_titlebar, '');
            PSH.setHTML(domEl.div_newsletter_subscrition, '');
            PSH.setHTML(domEl.div_footer, '');
            PSH.setHTML(domEl.div_recurrent, '');
            current_menu_holder_method.remove_menu_holder_active();
            current_menu_holder_method.remove_slicknav();
        }
    });
/* ----------------------------------- *\
 [Route] ABOUT US
\* ----------------------------------- */
    Finch.route('/quienes-somos', {
        setup: function(bindings) {
            section = 'about-us';
            headers = 'no-slider';
            //ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            _section_about_us_method.build_section_about_us();
        },
        unload: function(bindings) {
            section = "";
            headers = "";
            PSH.setHTML(domEl.div_loader, '');
            PSH.setHTML(domEl.div_topbar, '');
            PSH.setHTML(domEl.div_header_line, '');
            PSH.setHTML(domEl.div_menu_holder, '');
            PSH.setHTML(domEl.div_slider, '');
            PSH.setHTML(domEl.div_titlebar, '');
            PSH.setHTML(domEl.div_newsletter_subscrition, '');
            PSH.setHTML(domEl.div_footer, '');
            PSH.setHTML(domEl.div_recurrent, '');
            current_menu_holder_method.remove_menu_holder_active();
            current_menu_holder_method.remove_slicknav();
        }
    });
/* ----------------------------------- *\
 [Route] ABOUT US
\* ----------------------------------- */
    Finch.route('/servicios/:tab_service', {
        setup: function(bindings) {
            headers = 'no-slider';
        },
        load: function(bindings) {
            var $ts, change, $li_sidebar_menu, $li_submenu;
            $ts = bindings.tab_service;
            change = 'servicios';
            section = 'services';

            _section_services_method.build_section_services();

            if ( $ts === undefined ) {
                $('.change-sub-section').html(change);
                //ga('send', 'pageview', '/' + section);
                _section_services_method.load_templates_our_services();
            } else if ( $ts !== undefined ) {
                section = 'services-' + $ts;
                //ga('send', 'pageview', '/' + section + '/' + $ts);
                _section_services_method.load_templates_services();
                
                _section_services_method.load_templates_by_service();

                _section_services_method.data_services($ts);
                $li_sidebar_menu = $('li.sidebar-menu-'+ $ts);
                PSH.add_class($li_sidebar_menu);

                $li_submenu = $('.submenu #submenu-service-'+ $ts);
                PSH.add_class($li_submenu);

                _section_services_method.build_section_by_service();
            }
        },
        unload: function(bindings) {
            section = "";
            headers = '';
            PSH.setHTML(domEl.div_loader, '');
            PSH.setHTML(domEl.div_topbar, '');
            PSH.setHTML(domEl.div_header_line, '');
            PSH.setHTML(domEl.div_menu_holder, '');
            PSH.setHTML(domEl.div_slider, '');
            PSH.setHTML(domEl.div_titlebar, '');
            PSH.setHTML(domEl.div_newsletter_subscrition, '');
            PSH.setHTML(domEl.div_footer, '');
            PSH.setHTML(domEl.div_recurrent, '');
            current_menu_holder_method.remove_menu_holder_active();
            current_menu_holder_method.remove_slicknav();
        }
    });
/* ----------------------------------- *\
 [Route] ABOUT US
\* ----------------------------------- */
    Finch.route('/contacto', {
        setup: function(bindings) {
            section = 'contact';
            headers = 'no-slider';
            //ga('send', 'pageview', '/' + section);
        },
        load: function(bindings) {
            _section_contact_method.build_section_contact();
        },
        unload: function(bindings) {
            section = "";
            headers = "";
            PSH.setHTML(domEl.div_loader, '');
            PSH.setHTML(domEl.div_topbar, '');
            PSH.setHTML(domEl.div_header_line, '');
            PSH.setHTML(domEl.div_menu_holder, '');
            PSH.setHTML(domEl.div_slider, '');
            PSH.setHTML(domEl.div_titlebar, '');
            PSH.setHTML(domEl.div_newsletter_subscrition, '');
            PSH.setHTML(domEl.div_footer, '');
            PSH.setHTML(domEl.div_recurrent, '');
            current_menu_holder_method.remove_menu_holder_active();
            current_menu_holder_method.remove_slicknav();
        }
    });
Finch.listen();
