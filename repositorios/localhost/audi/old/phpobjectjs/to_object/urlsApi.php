<?php

function urlsApi() {
    //Especial Actions
    $new = 'new';
    $del = 'del';
    $set = 'set';
    $get = 'get';
    $search = 'search';
    $post = 'post';

    //
    $det = 'detail';

    //Tables
    //$tab = 'table';
    $model = 'modelo';
    $agencie = 'agencia';
    $contact = 'contacto';

    //Root Api url
    $root = 'api/v3';

    return array(
        // INSERT
        // UPDATE
        // SELECT
        // DELETE
        'getBanner_model_jaguar' => $root . '/' . $get . '/banner/' . $model . '/jaguar',
        'getBanner_model_land_rover' => $root . '/' . $get  . '/banner/' . $model . '/land-rover',
        //'getAgencie' => $root . '/' . $get . '/' . $agencie,
        // LEADS FINANCING FORM BY MODEL
        //'send_form_funding_jaguar_xe' => $root . '/post/financiamiento/jaguar-xe',
        //'send_form_funding_discovery_sport' => $root . '/post/financiamiento/discovery-sport',
        /*
        'getAgencies' => $root . '/' . $get . '/' . $agencie,
        'getAgenciesByMap' => $root . '/' . $get . '/' . $agencie . '/mapas/',
        'getAgenciesByAgencie' => $root . '/' . $get . '/' . $agencie . '/',

        // Form CONTACT
        'post_form_contact' => $root . '/' . $contact ,
        */

        // LEADS FINANCING 
        'getService' => $root . '/post/servicio',
        'getFinancingByModel' => $root . '/post/financing/',
    );
}
