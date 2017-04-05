<?php
function domEl() {
    $start_header_wrapper = 'content-start-header-wrapper';
    $start_slider_wrapper = 'content-start-slider-wrapper';
    $start_header_bg_wrapper = 'content-start-header-bg-wrapper';
    // SECTION HOME FEATURES
    $start_section_home_features = 'content-start-section-home-features';
    // SECTION ABOUT US FEATURES
    $start_section_about_us_features = 'content-start-section-about-us-features';
    // SECTION SERVICES FEATURES
    $start_section_services_features = 'content-start-section-services-features';
    // SECTION OBJECTIVES FEATURES
    $start_section_objectives_features = 'content-start-section-objectives-features';
    // SECTION CONTACT FEATURES
    $start_section_contact_features = 'content-start-section-contact-features';
    return array(
        'head_recurrent' => 'head',
        'body_recurrent' => 'body',
        //GENERAL HI DIVS
        'div_hidden_inputs_session' => 'div#hidden-inputs-session',
        'div_hidden_inputs_temporal' => 'div#hidden-inputs-temporal',
        'div_header_nav_recurrent' => 'div#content-temporal-header-nav-wrapper',
        'div_slider_recurrent' => 'div#content-temporal-slider-wrapper',
        'div_header_bg_recurrent' => 'div#content-temporal-header-bg-wrapper',
        'div_recurrent' => 'div#content-temporal-interactive',
        // GO SECTION
        'nav_recurrent' => '.menu',
        'goSection_index' => '#go-index',
        'goSection_about_us' => '#go-about-us',
        'goSection_services' => '#go-services',
        'goSection_objectives' => '#go-objectives',
        'goSection_contact' => '#go-contact',
        'goSection_featuresServices' => '#go-features-services',
        //'finch_return_menu_index' => '#go-index',
        'finch_return_logo_index' => '#go-index-logo',
        'finch_return_footer_index' => '#go-index-logo-footer',
        //'finch_return_breadcumb_index' => '#go-breadcrumb-return-index',
        //'finch_footer_privacy_notice' => '#go-privacy-notice'
        // HEADER NAV WRAPER
        '_start_header_wrapper' => $start_header_wrapper,
        '_start_header_wrapper_name' => '#' . $start_header_wrapper,
        // SLIDER WRAPER
        '_start_slider_wrapper' => $start_slider_wrapper,
        '_start_slider_wrapper_name' => '#' . $start_slider_wrapper,
        // HEADER BG WRAPER
        '_start_header_bg_wrapper' => $start_header_bg_wrapper,
        '_start_header_bg_wrapper_name' => '#' . $start_header_bg_wrapper,
        // START SECTION HOME FEATURES
        '_start_section_home_features' => $start_section_home_features,
        '_start_section_home_features_name' => '#' . $start_section_home_features,
        // START SECTION ABOUT US FEATURES
        '_start_section_about_us_features' => $start_section_about_us_features,
        '_start_section_about_us_features_name' => '#' . $start_section_about_us_features,
        // START SECTION SERVICES FEATURES
        '_start_section_services_features' => $start_section_services_features,
        '_start_section_services_features_name' => '#' . $start_section_services_features,
        // START SECTION OBJECTIVES FEATURES
        '_start_section_objectives_features' => $start_section_objectives_features,
        '_start_section_objectives_features_name' => '#' . $start_section_objectives_features,
        // START SECTION CONTACT FEATURES
        '_start_section_contact_features' => $start_section_contact_features,
        '_start_section_contact_features_name' => '#' . $start_section_contact_features,
        // FORM CONTACT WRAPPER
        'div_recurrent_form_contact_wrapper' => '#content-temporal-form-wrapper',
    );
}
