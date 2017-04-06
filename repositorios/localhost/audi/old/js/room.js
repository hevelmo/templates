/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/:recurrent_section', {
        setup: function(bindings) {
            section = "home";
        },
        load: function(bindings) {
        	view_navbar_method.view_navbar();
        	sticky_wrapper_methods.sticky_wrapper();

        	view_home_method.view_home();
            windowWidthMethod.windowWidth();
        },
        unload: function(bindings) {
            section = "";
            AUD.setHTML(domEl.div_recurrent, '');
            AUD.setHTML(domEl._navbar_recurrent, '');
            //current_section_method.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] SERVICIO
\* ----------------------------------- */
    Finch.route('/servicio', {
        setup: function(bindings) {
            section = "service";
        },
        load: function(bindings) {
            view_navbar_method.view_navbar();
            sticky_wrapper_methods.sticky_wrapper();

            views_service_method.views_service();
            $('header#set-banner').attr('style','background-image: url(img/service/banner-superior-formulario-servicio-1500x200.jpg); padding: 0 0;');
            //windowWidthMethod.windowWidth();
        },
        unload: function(bindings) {
            section = "";
            AUD.setHTML(domEl.div_recurrent, '');
            AUD.setHTML(domEl._navbar_recurrent, '');
            //current_section_method.remove_currentSection();
        }
    });
/* ----------------------------------- *\
 [Route] FINANCING
\* ----------------------------------- */
    Finch.route('/financiamiento/:modelo', {
        setup: function(bindings) {
            var $ga_model;
            $ga_model = bindings.modelo;
            if ( $ga_model !== undefined ) {
                ga('send', 'pageview', '/financiamiento/' + $ga_model );
            }
        },
        load: function(bindings) {
            var $model;
            $model = bindings.modelo;

            view_navbar_method.view_navbar();
            sticky_wrapper_methods.sticky_wrapper();
            //current_section_method.current_section_home();

            if ( $model !== undefined ) {
                section = "financing" + $model;
                view_leads_financing_method.view_leads_financing();


                switch ($model) {
                    case 'audi-a1':
                        AUD.setValue('#hidden_model_name', 'Audi A1');
                        AUD.setValue('#hidden_model_key', 'audi-a1');
                        AUD.setValue('#hidden_agencie_name', 'Audi Guadalajara');
                        AUD.setValue('#hidden_agencie_key', 'audi-guadalajara');
                        
                        getModelKey = AUD.getValue('#hidden_model_key');
                        getModelName = AUD.getValue('#hidden_model_name');
                        
                        $('header#set-banner').attr('style','background-image: url(img/financing/banner/a1-cotizacion.jpg); padding: 0 0;');
                        //addImgAttributes = {'id': getModelKey, 'class': 'thumb-model thumb-model-' + getModelKey, 'src' : 'img/financing/thumbs/thumb-' + getModelKey + '.png', 'alt' : '...'};
                        //AUD.appendOne('#model_select_preview', 'img', addImgAttributes, '', 0);
                        //$('#model_select_title').html(getModelName);
                        //form_leads_financing_jaguar_xe_method.refreshFrom();
                        set_form_leads_method.refreshForm();
                        break;
                    case 'audi-a4':
                        AUD.setValue('#hidden_model_name', 'Audi A4');
                        AUD.setValue('#hidden_model_key', 'audi-a4');
                        AUD.setValue('#hidden_agencie_name', 'Audi Guadalajara');
                        AUD.setValue('#hidden_agencie_key', 'audi-guadalajara');

                        getModelKey = AUD.getValue('#hidden_model_key');
                        getModelName = AUD.getValue('#hidden_model_name');

                        $('header#set-banner').attr('style','background-image: url(img/financing/banner/discovery-sport-1500x200.jpg); padding: 0 0;');
                        //addImgAttributes = {'id': getModelKey, 'class': 'thumb-model thumb-model-' + getModelKey, 'src' : 'img/financing/thumbs/thumb-' + getModelKey + '.png', 'alt' : '...'};
                        //AUD.appendOne('#model_select_preview', 'img', addImgAttributes, '', 0);
                        //$('#model_select_title').html(getModelName);
                        //form_leads_financing_discovery_sport_method.refreshFrom();
                        set_form_leads_method.refreshForm();
                        break;
                    case 'audi-q3':
                        AUD.setValue('#hidden_model_name', 'Audi Q3');
                        AUD.setValue('#hidden_model_key', 'audi-q3');
                        AUD.setValue('#hidden_agencie_name', 'Audi Guadalajara');
                        AUD.setValue('#hidden_agencie_key', 'audi-guadalajara');

                        getModelKey = AUD.getValue('#hidden_model_key');
                        getModelName = AUD.getValue('#hidden_model_name');

                        $('header#set-banner').attr('style','background-image: url(img/financing/banner/q3-cotizacion.jpg); padding: 0 0;');
                        //addImgAttributes = {'id': getModelKey, 'class': 'thumb-model thumb-model-' + getModelKey, 'src' : 'img/financing/thumbs/thumb-' + getModelKey + '.png', 'alt' : '...'};
                        //AUD.appendOne('#model_select_preview', 'img', addImgAttributes, '', 0);
                        //$('#model_select_title').html(getModelName);
                        //form_leads_financing_discovery_sport_method.refreshFrom();
                        set_form_leads_method.refreshForm();
                        break;
                    default:
                        break;
                }
            }
        },
        unload: function(bindings) {
            section = "";
            AUD.setHTML(domEl.div_recurrent, '');
            AUD.setHTML(domEl._navbar_recurrent, '');
            //current_section_method.remove_currentSection();
        }
    });
Finch.listen();