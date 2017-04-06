<?php
function domEl() {
    // NAVBAR
    $start_site_navbar = 'content-start-site-navbar';
    // HERO SLIDER
    $start_site_heroslider = 'content-start-site-heroslider';
    // SLOGAN
    $start_site_slogan = 'content-start-site-slogan';
    //
    $section_large_pad = 'content-large-pad';
    $section_large_pad_content_form = 'content-large-pad-content-form';
    //
    $start_site_hero_project = 'content-hero-project';
    //
    $start_site_feature_list = 'content-feature-list';
    $start_site_feature_list_second = 'content-feature-list-second';
    //
    $start_site_image_block = 'content-image-block';
    //
    $start_site_page_header = 'content-page-header';
    $start_site_page_header_catalog = 'content-page-header-catalog';
    $start_site_page_header_about = 'content-page-header-about';
    $start_site_page_header_second = 'content-page-header-second';
    // SCROLL DOWN
    $start_site_top_scroll_bar = 'content-page-top-scroll-bar';
    $start_site_scroll_down = 'content-page-scroll-down';

    // LANDING
    $_audi_a1 = 'content-page-banner-audi-a1';
    $_audi_a4 = 'content-page-banner-audi-a4';
    $_audi_q3 = 'content-page-banner-audi-q3';
    $start_site_agencie = 'content-page-agencie';

    $start_site_form_services = 'content-service-form';

    $start_site_content_leads_form = 'content-leads-form';
    return array(
        //LANDING
        '_audi_a1' => $_audi_a1,
        '_audi_a1_name' => '#' . $_audi_a1,

        '_audi_a4' => $_audi_a4,
        '_audi_a4_name' => '#' . $_audi_a4,
        
        '_audi_q3' => $_audi_q3,
        '_audi_q3_name' => '#' . $_audi_q3,
        
        '_start_site_agencie' => $start_site_agencie,
        '_start_site_agencie_name' => '#' . $start_site_agencie,

        'start_site_agencie_map' => '#content-agencies-map',

        // SCROLL DOWN
        '_start_site_top_scroll_bar' => $start_site_top_scroll_bar,
        '_start_site_top_scroll_bar_name' => '#' . $start_site_top_scroll_bar,
        //
        '_start_site_scroll_down' => $start_site_scroll_down,
        '_start_site_scroll_down_name' => '#' . $start_site_scroll_down,
        // NAVBAR WRAPPER
        '_navbar_recurrent' => '#content-temporal-site-header',
        // BACK TO TOP
        '_back_to_top' => '.back-to-top',
        'ide_return_button' => '#back',
        // MOBILE MENU TOGGLE
        '_menu_toogle' => '#menu-toggle',
        '_menu_toogle_close' => '.menu-toggle-close',
        // MAIN NAVIGATION
        '_start_site_navbar' => $start_site_navbar,
        '_start_site_navbar_name' => '#' . $start_site_navbar,

        // SERVICE
        '_start_site_form_services' => $start_site_form_services,
        '_start_site_form_services_name' => '#' . $start_site_form_services,
        // FORM SERVICE
        'service_form' => '#content-form-service',
        '_service_form' => '#form_service',


        // FINANCING 
        '_start_site_page_header' => $start_site_page_header,
        '_start_site_page_header_name' => '#' . $start_site_page_header,
        // CONTENT LEADS FORM
        '_start_site_content_leads_form' => $start_site_content_leads_form,
        '_start_site_content_leads_form_name' => '#' . $start_site_content_leads_form,

        // LEADS CONTENT FINANCING FORM
        'leads_financing_form' => '#content-leads-financing-form',

        // FORM
        '_form_leads' => '#form_leads',
        /*
        // HERO SLIDER
        '_start_site_heroslider' => $start_site_heroslider,
        '_start_site_heroslider_name' => '#' . $start_site_heroslider,
        // SLOGAN
        '_start_site_slogan' => $start_site_slogan,
        '_start_site_slogan_name' => '#' . $start_site_slogan,

        // ABOUT 
        '_start_site_hero_project' => $start_site_hero_project,
        '_start_site_hero_project_name' => '#' . $start_site_hero_project,
        //
        '_start_site_feature_list' => $start_site_feature_list,
        '_start_site_feature_list_name' => '#' . $start_site_feature_list,
        //
        '_start_site_feature_list_second' => $start_site_feature_list_second,
        '_start_site_feature_list_second_name' => '#' . $start_site_feature_list_second,
        //
        '_start_site_image_block' => $start_site_image_block,
        '_start_site_image_block_name' => '#' . $start_site_image_block,

        // CABLECRAFT
        '_start_site_page_header' => $start_site_page_header,
        '_start_site_page_header_name' => '#' . $start_site_page_header,

        '_start_site_page_header_catalog' => $start_site_page_header_catalog,
        '_start_site_page_header_catalog_name' => '#' . $start_site_page_header_catalog,

        '_start_site_page_header_about' => $start_site_page_header_about,
        '_start_site_page_header_about_name' => '#' . $start_site_page_header_about,

        '_start_site_page_header_second' => $start_site_page_header_second,
        '_start_site_page_header_second_name' => '#' . $start_site_page_header_second,
        */
        //GENERAL HI DIVS
        'div_hidden_inputs_session' => 'div#hidden-inputs-session',
        'div_hidden_inputs_temporal' => 'div#hidden-inputs-temporal',
        'div_recurrent' => 'div#content-temporal-interactive',

        /*
        // SECTION CLIENTS LARGE PAD
        '_section_large_pad' => '#' . $section_large_pad,
        '_section_large_pad_name' => $section_large_pad,

        'content_clients_nav_agencies' => '#content-nav-agencies',
        'content_clients_tabs' => '#content-clients-tabs',
        'content_clients_map' => '#content-clients-map',

        // FORM CONTAC
        'content_contact_section_form' => '#content-contact-section-form',
        // CONTENT FORM
        '_section_large_pad_content_form' => '#' . $section_large_pad_content_form,
        '_section_large_pad_content_form_name' => $section_large_pad_content_form,

        // FORM 
        '_form_contact' => '#form-contact',
        // SUBMIT
        '_send_contact' => '#contact-main-send',*/

        'validate_required' => '.validate-required',
    );
}
