$(document).ready(function() {
    /* ------------------------------------------------------ *\
     [METHOS Control] Serialize Form
    \* ------------------------------------------------------ */
        //This method change a form into a JSON
        $.fn.serializeFormJSON = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
    /* ------------------------------------------------------ *\
     [METHOS Control] Currency Format
    \* ------------------------------------------------------ */
        Number.prototype.format = function(n, x) {
            var re = '(\\d)(?=(\\d{' + (x || 3) + '}) + ' + (n > 0 ? '\\.' : '$') + ')';
            return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
        };
    /* ------------------------------------------------------ *\
        EVENT CONTROL
    \* ------------------------------------------------------ */
    // BACK TO TOP
    //$(domEl.body_recurrent).on('click', domEl._back_to_top, backToTopMethod.backToTop);
    // GENERAL CLICK RADIO & CHECKBOX
    $(domEl.div_recurrent).on('change', ":checkbox", changeInputsMethods.clickChangeCheckbox);
    $(domEl.div_recurrent).on('click', ".label-radio", changeInputsMethods.clcikChangeRadio);
    // NAVBAR
    $(domEl._navbar_recurrent).on('click', domEl._menu_toogle, mobile_menu_methods.mobile_menu_toggle);
    // MOBILE MENU TOGGLE
    $(domEl._navbar_recurrent).on('click', domEl._menu_toogle_close, mobile_menu_methods.close_menu_toggle);

    $(domEl._navbar_recurrent).on('click', '#go_home', click_go_method.click_go_home);
    $(domEl._navbar_recurrent).on('click', '#go_home_logo', click_go_method.return_home);
    $(domEl._navbar_recurrent).on('click', '#go_home_logo_resp', click_go_method.return_home);
    
    $(domEl._navbar_recurrent).on('click', '#go_jaguar_xe', click_go_method.click_go_jaguar_xe);
    $(domEl._navbar_recurrent).on('click', '#go_discovery_sport', click_go_method.click_go_discovery_sport);
    /*
    $(domEl._navbar_recurrent).on('click', '#go_service', click_go_method.click_go_service);
    $(domEl._navbar_recurrent).on('click', '#go_contact', click_go_method.click_go_contact);
    */

    // FINANCING
    $(domEl.div_recurrent).on('click', '.go-financing', click_go_method.clock_go_financing_by_model);
    $(domEl.div_recurrent).on('click', '#primaryLinkWithStyle', click_go_method.return_home);

    // VALIDATEION MESSAGE
    $(domEl.div_recurrent).on('focusout', domEl.validate_required, validateMethods.validate_input);
    // INPUTS ENVENTS
    $(domEl.div_recurrent).on('keyup', '.lead-api-input', set_form_leads_method.keyInput);

    // FINANCING BY MODEL
    // BUTTON FORM LEADS
    $(domEl.div_recurrent).on('click', "#leads_api_save", set_form_leads_method.send_form_leads);

    //$(domEl.div_recurrent).on('keyup', '.lead-api-input', set_form_service_method.keyInput);
    // SERVICE
    $(domEl.div_recurrent).on('click', "#send_form_service_submit", set_form_service_method.send_form_service);

    /* JAGUAR XE */
    /*
    $(domEl.div_recurrent).on('keyup', '.fbm_validate_input', form_leads_financing_jaguar_xe_method.validate_fields_keyup);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_name', validateMethods.validate_input);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_lastname', validateMethods.validate_input);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_email', validateMethods.validate_input);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_tel', validateMethods.validate_input);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_message', validateMethods.validate_input);
    //$(domEl.div_recurrent).on('change', '#financing_by_model_concessionaire', validateMethods.validate_input);
    
    $(domEl.div_recurrent).on('click', '#send_leads_financing_by_model_submit_jaguar_xe', form_leads_financing_jaguar_xe_method.send_set_funding);
    */
    /**/
    /* DISCOVERY SPORT */
    /*
    $(domEl.div_recurrent).on('keyup', '.fbm_validate_input', form_leads_financing_discovery_sport_method.validate_fields_keyup);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_name', validateMethods.validate_input);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_lastname', validateMethods.validate_input);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_email', validateMethods.validate_input);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_tel', validateMethods.validate_input);
    $(domEl.div_recurrent).on('focusout', '#financing_by_model_message', validateMethods.validate_input);
    //$(domEl.div_recurrent).on('change', '#financing_by_model_concessionaire', validateMethods.validate_input);
    
    $(domEl.div_recurrent).on('click', '#send_leads_financing_by_model_submit_discovery_sport', form_leads_financing_discovery_sport_method.send_set_funding);
    */
    /**/
    // CLICK GO METHOD
    /*$(domEl._navbar_recurrent).on('click', '#go_home_logo_resp', click_go_method.click_go_home);        
    $(domEl._navbar_recurrent).on('click', '#go_home_logo', click_go_method.click_go_home);        
    $(domEl._navbar_recurrent).on('click', '#go_home', click_go_method.click_go_home);
    $(domEl._navbar_recurrent).on('click', '#go_catalog', click_go_method.click_go_catalog);
    $(domEl._navbar_recurrent).on('click', '#go_cablecraft', click_go_method.click_go_cablecraft);
    $(domEl._navbar_recurrent).on('click', '#go_about_us', click_go_method.click_go_about_us);
    $(domEl._navbar_recurrent).on('click', '#go_contact', click_go_method.click_go_contact);*/

    // CONTACT BY AGENCIE
    /*$(domEl._navbar_recurrent).on('click', '.go-action-nav-contact-by-agencie', click_go_method.click_go_nav_contact_by_agencie);
    $(domEl.div_recurrent).on('click', '.action-agn', click_go_method.click_go_contact_by_agencie);

    $(domEl.div_recurrent).on('keyup', '#chi-contact-main-name', form_contact_method.validate_fields_keyup);
    $(domEl.div_recurrent).on('keyup', '#chi-contact-main-lastname', form_contact_method.validate_fields_keyup);
    $(domEl.div_recurrent).on('keyup', '#chi-contact-main-email', form_contact_method.validate_fields_keyup);
    $(domEl.div_recurrent).on('keyup', '#chi-contact-main-message', form_contact_method.validate_fields_keyup);
    // SEND CONTACT MAIN
    $(domEl.div_recurrent).on('click', domEl._send_contact, form_contact_method.send_contact_main);

    $(domEl.div_recurrent).on('focusout', domEl.validate_required, validateMethods.validate_input);*/
});