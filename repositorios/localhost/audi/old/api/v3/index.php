 <?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include_once '../../incorporate/db_connect.php';
include_once '../../incorporate/functions.php';
include_once '../../incorporate/queryintojson.php';
include_once '../../incorporate/json-file-decode.class.php';
include_once '../Mandrill.php';

date_default_timezone_set('America/Mexico_City');
setlocale(LC_MONETARY, 'en_US');

/**
 *
 * [Initial V 3.0]
 *
**/

require '../Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(array(
    'mode' => 'development',
    'cookies.httponly' => true
));

// Only invoked if mode is "production"
$app->configureMode('production', function () use ($app) {
    $app->config(array(
        'log.enable' => true,
        'debug' => false
    ));
});

// Only invoked if mode is "development"
$app->configureMode('development', function () use ($app) {
    $app->config(array(
        'log.enable' => false,
        'debug' => true
    ));
});

/**
 * [Routes Deep V 15.0]
**/
// POST route
// INSERT
// UPDATE
// GET route
// SELECT
    $app->get('/get/banner/modelo/jaguar', /*'mw1',*/ 'getBanner_model_jaguar');
    $app->get('/get/banner/modelo/land-rover', /*'mw1',*/ 'getBanner_model_land_rover');
    // app => Financing By Model
    $app->post('/post/servicio', 'getService');
    $app->post('/post/financing/:model', 'sendFinancingByModel');
// DELETE
//$app->get('/del/table/:idTable', /*'mw1',*/ 'delTable');
$app->run();

//Functions
/*
  ----------------------------------------------------------------------------
  General Helper Methods
  ----------------------------------------------------------------------------
*/
    function requestBody() {
        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        return json_decode($request->getBody());
    }
    function mw1() {
        $app = \Slim\Slim::getInstance();
        $db = getConnection_cam();
        if (login_check($db) == true) {
            return true;
        } else {
            $app->halt(401, 'Token Requerido');
        }
    }
/*
  ----------------------------------------------------------------------------
  General Post Methods
  ----------------------------------------------------------------------------
*/
    // INSERT
        function addTable() {
            $property = requestBody();
            $sql = "INSERT INTO camTable(TAB_Field)
                    VALUES(:field)";
            $structure = array();
            $params = array(
                'field' => trim($property->field),
            );
            echo changeQueryIntoJSON('ljldr', $structure, getConnection_cam(), $sql, $params, 1, PDO::FETCH_ASSOC);
        }
    // UPDATE
        function setTable($idTable) {
            $property = requestBody();
            $sql = "UPDATE camTable
                    SET TAB_Field = :field
                    WHERE TAB_Id = :tabId";
            $structure = array();
            $params = array(
                'tabId' => $idTable,
                'field' => trim($property->field)
            );
            echo changeQueryIntoJSON('ljldr', $structure, getConnection_cam(), $sql, $params, 2, PDO::FETCH_ASSOC);
        }
/*
  ----------------------------------------------------------------------------
  General Get Methods
  ----------------------------------------------------------------------------
*/
    // GET HOME SECTION BANNERS JSON
    function getBanner_model_jaguarJSON ($sql) {
        $structure = array(
            'banId' => 'BAN_Id',
            'agnNombre' => 'BAN_AGN_Nombre',
            'banSrc650' => 'BAN_SRC650x277',
            'banSrc900' => 'BAN_SRC900x586',
            'banSrc1600' => 'BAN_SRC1600x900',
            'banTitle' => 'BAN_Title',
            'headingTextSub' => array(
                'subtitle01' => 'BAN_Subtitle01',
                'subtitle02' => 'BAN_Subtitle02',
                'subtitle03' => 'BAN_Subtitle03',
                'subtitle04' => 'BAN_Subtitle04',
            ),
            'banner_tipo' => 'BAN_Tipo',
            'primaryLinkurl' => 'BAN_PrimaryLinkUrl',
            'primaryLinkTitle' => 'BAN_PrimaryLinkSub',
            'banner_leads_tipo' => 'BAN_LeadsTipo',
            'primaryLinkLeadsTitle' => 'BAN_LeadsLinkSub',
            'primaryLinkLeadsId' => 'BAN_LeadsLinkId',
            'banner_landing_country_tipo' => 'BAN_LandingCountryTipo',
            'primaryLinkLandingCountryTitle' => 'BAN_LandingCountrySub',
            'primaryLinkLandingCountryId' => 'BAN_LandingCountryId',
            'data_model_key' => 'BAN_DataModelKey',
            'data_model_name' => 'BAN_DataMoldeName',
            'data_agencie_key' => 'BAN_DataAgencieKey',
            'data_agencie_name' => 'BAN_DataAgencieName'
        );
        $params = array();
        $result_link_container = restructureQuery($structure, getConnection_cam(), $sql, $params, 0, PDO::FETCH_ASSOC);
        for ($idx=0; $idx < count($result_link_container); $idx++) {
            //$ban_target = $agn_type = $result_link_container[$idx]['banner_tipo'];
            /*$result_link_container[$idx]['target_noticia'] = ($agn_type != 'noticia' ) ? '' : '_self';
            $result_link_container[$idx]['target_sitio'] = ($agn_type != 'sitio' ) ? '' : '_blank';
            $result_link_container[$idx]['target_agencia'] = ($agn_type != 'agencia' ) ? '' : '_self';
            $result_link_container[$idx]['target_agencias'] = ($agn_type != 'agencias' ) ? '' : '_self';
            $result_link_container[$idx]['target_promo'] = ($agn_type != 'promo' ) ? '' : '_blank';
            $ban_landing_country_target = $agn_landing_country_type = $result_link_container[$idx]['banner_landing_country_tipo'];
            $result_link_container[$idx]['target_visitanos'] = ($agn_landing_country_type != 'visitanos' ) ? '' : '_blank';
            */
            $ban_leads_target = $agn_leads_type = $result_link_container[$idx]['banner_leads_tipo'];
            $result_link_container[$idx]['target_cotizar'] = ($agn_leads_type != 'cotizar' ) ? '' : 'no_target';
        }
        $json = changeArrayIntoJSON('ljldr', $result_link_container);
        echo $json;
        //echo changeQueryIntoJSON('ljldr', $structure, getConnection_cam(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    function getBanner_model_land_roverJSON ($sql) {
        $structure = array(
            'banId' => 'BAN_Id',
            'agnNombre' => 'BAN_AGN_Nombre',
            'banSrc650' => 'BAN_SRC650x277',
            'banSrc900' => 'BAN_SRC900x586',
            'banSrc1600' => 'BAN_SRC1600x900',
            'banTitle' => 'BAN_Title',
            'headingTextSub' => array(
                'subtitle01' => 'BAN_Subtitle01',
                'subtitle02' => 'BAN_Subtitle02',
                'subtitle03' => 'BAN_Subtitle03',
                'subtitle04' => 'BAN_Subtitle04',
            ),
            'banner_tipo' => 'BAN_Tipo',
            'primaryLinkurl' => 'BAN_PrimaryLinkUrl',
            'primaryLinkTitle' => 'BAN_PrimaryLinkSub',
            'banner_leads_tipo' => 'BAN_LeadsTipo',
            'primaryLinkLeadsTitle' => 'BAN_LeadsLinkSub',
            'primaryLinkLeadsId' => 'BAN_LeadsLinkId',
            'banner_landing_country_tipo' => 'BAN_LandingCountryTipo',
            'primaryLinkLandingCountryTitle' => 'BAN_LandingCountrySub',
            'primaryLinkLandingCountryId' => 'BAN_LandingCountryId',
            'data_model_key' => 'BAN_DataModelKey',
            'data_model_name' => 'BAN_DataMoldeName',
            'data_agencie_key' => 'BAN_DataAgencieKey',
            'data_agencie_name' => 'BAN_DataAgencieName'
        );
        $params = array();
        $result_link_container = restructureQuery($structure, getConnection_cam(), $sql, $params, 0, PDO::FETCH_ASSOC);
        for ($idx=0; $idx < count($result_link_container); $idx++) {
            //$ban_target = $agn_type = $result_link_container[$idx]['banner_tipo'];
            /*$result_link_container[$idx]['target_noticia'] = ($agn_type != 'noticia' ) ? '' : '_self';
            $result_link_container[$idx]['target_sitio'] = ($agn_type != 'sitio' ) ? '' : '_blank';
            $result_link_container[$idx]['target_agencia'] = ($agn_type != 'agencia' ) ? '' : '_self';
            $result_link_container[$idx]['target_agencias'] = ($agn_type != 'agencias' ) ? '' : '_self';
            $result_link_container[$idx]['target_promo'] = ($agn_type != 'promo' ) ? '' : '_blank';
            $ban_landing_country_target = $agn_landing_country_type = $result_link_container[$idx]['banner_landing_country_tipo'];
            $result_link_container[$idx]['target_visitanos'] = ($agn_landing_country_type != 'visitanos' ) ? '' : 'no_target';
            */
            $ban_leads_target = $agn_leads_type = $result_link_container[$idx]['banner_leads_tipo'];
            $result_link_container[$idx]['target_cotizar'] = ($agn_leads_type != 'cotizar' ) ? '' : 'no_target';
        }
        $json = changeArrayIntoJSON('ljldr', $result_link_container);
        echo $json;
        //echo changeQueryIntoJSON('ljldr', $structure, getConnection_cam(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
    // GET HOME SECTION BANNERS
    function getBanner_model_jaguar() {
        $sql = "SELECT *
                FROM camBanners
                WHERE BAN_Status = 1
                AND BAN_LandingJLDR = 1
                AND BAN_Id = 9
                ORDER BY BAN_Id DESC
                ";
        getBanner_model_jaguarJSON($sql);
    }
    function getBanner_model_land_rover() {
        $sql = "SELECT *
                FROM camBanners
                WHERE BAN_Status = 1
                AND BAN_LandingJLDR = 1
                AND BAN_Id = 10
                ORDER BY BAN_Id DESC
                ";
        getBanner_model_land_roverJSON($sql);
    }
    // FINANCING BY MODELS
    function sendFinancingByModel() {
        $property = requestBody();

        $test_drive = $property->test_drive;
        $testdrive = $property->testdrive;

        $newsletter = $property->newsletter;
        $subscription = $property->subscription;
        
        $concesionaria = $property->concesionaria;

        $nombre = $property->nombre;
        $apellidos = $property->apellidos;
        $correo = $property->correo;
        $telefono = $property->telefono;
        $mensaje = $property->mensaje;
        
        $agencie = $property->agencie;
        $campaign_model = $property->campaign_model;
        $url = $property->url;

        $name_model = $property->name_model;
        $image_model = $property->image_model;
        $key_model = $property->key_model;

        if (isset($newsletter) && $newsletter === "1") {
            $subscription = "Activado";
            send_news_financing_by_model($url, $nombre, $apellidos, $correo, $newsletter, $agencie, $subscription, $name_model, $concesionaria);
        } else {
            $subscription = "Desactivado";
        }

        send_financing_by_model($url, $concesionaria, $name_model, $nombre, $apellidos, $correo, $telefono, $mensaje, $testdrive, $subscription, $image_model, $agencie);
        send_financing_by_model_confirm($url, $concesionaria, $campaign_model, $name_model, $nombre, $apellidos, $correo, $telefono, $mensaje, $testdrive, $subscription, $image_model, $agencie);

        echo changeArrayIntoJSON("leads", array('process'=>'ok', $property));
    }
/*
  ----------------------------------------------------------------------------
  General Get Mandril
  ----------------------------------------------------------------------------
*/
/*
  ----------------------------------------------------------------------------
  SERVICE
  ----------------------------------------------------------------------------
*/
    // Servicio Conuntry Jaguar
    function getService() {
        $property = requestBody();
        $nombre = $property->nombre;
        $apellidos = $property->apellidos;
        $email = $property->correo;
        $telefono = $property->telefono;
        $mensaje = $property->mensaje;
        //$jag_sercountryconcesionarie = $property->jag_sertact_country_concessionary;

        _servicio_country($nombre, $apellidos, $email, $telefono, $mensaje);

        echo changeArrayIntoJSON("servicio", array('process'=>'ok', $property));
    }
        // SERVICE JAGUAR COUNTRY
        function _servicio_country($nombre, $apellidos, $email, $telefono, $mensaje) {
            try {
                $mandrill = new Mandrill('IJKuV2iqtHNLdnn1DCSxxQ');
                $message = array(
                    'html' => '
                        <html>
                            <head>
                            <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
                            <link type="text/css" rel="stylesheet" href="http://jaguargdl.com/css/webfont/font-jaguar.css" />
                            <link type="text/css" rel="stylesheet" href="http://jaguargdl.com/css/webfont/font-ProximaNova.css" />
                            <link type="text/css" rel="stylesheet" href="http://jaguargdl.com/css/webfont/font-avenir.css" />
                            <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                            <style>
                                html{width: 100%;}
                                * {
                                    margin: 0 auto;
                                    padding: 0;
                                }
                                body{
                                    font-family: "ProximaNovaRegular","Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
                                    background: rgba(225, 223, 223, 1) !important;
                                    -moz-osx-font-smoothing: grayscale;
                                    -webkit-font-smoothing: antialiased;
                                    color: #777;
                                    font-size: 14px;
                                    line-height: 24px;
                                    text-transform: uppercase;
                                }
                                .ExternalClass {
                                    font-family: "ProximaNovaRegular","Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
                                    background: rgba(225, 223, 223, 1) !important;
                                    color: #777;
                                    font-size: 14px;
                                    line-height: 24px;
                                    text-transform: uppercase;
                                }
                                *:before, *:after {
                                    -webkit-box-sizing: border-box;
                                    -moz-box-sizing: border-box;
                                    box-sizing: border-box;
                                }
                            </style>
                            </head>

                            <body>

                                <div style="background-color: rgba(12, 18, 28, 0.2); padding: 20px;border-bottom: 0px" width="600">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td width="11">
                                                    <img src="http://jaguargdl.com/img/spacer.png" style="display: block; border: 0" border="0">
                                                </td>
                                                <td style="background-color: rgba(255, 255, 255, 1); border: 1px solid rgba(255, 255, 255, 1); border-bottom: 0px" width="600">
                                                    <table style="padding: 13px 17px 17px" border="0" cellpadding="0" cellspacing="0" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td height="15" width="100">
                                                                    <a style="display: inline-block; vertical-align: middle; border: 0; padding-right: 15px;" href="http://jaguargdl.com/ target="_blank" rel="noreferrer">
                                                                        <img src="http://jaguargdl.com/img/logo_jaguar.png" style="display: block; border: 0"  border="0" width="75">
                                                                    </a>
                                                                    <p style="display: inline-block; vertical-align: middle; color:#0000;font-family: jaguarbold,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:24px;text-align:center;padding:0;text-transform: uppercase;">
                                                                        Jaguar Land Rover Country
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td width="11">
                                                    <img src="http://jaguargdl.com/img/spacer.png" style="display: block; border: 0" border="0">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" height="78" width="11" style="background-color: rgba(72, 72, 72, 0.6)">
                                                    <p style="display: block; color:#ffffff;font-family: ProximaNovaRegular,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:24px;text-align:center;padding:0;text-transform: uppercase;">
                                                        Servicio de Mantenimiento
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="11" valign="top" width="11">
                                                    <img style="display:block;border:0" src="http://jaguargdl.com/img/shadow-left.png" border="0" class="CToWUd">
                                                </td>
                                                <td rowspan="2" style="border:1px solid #ebe9ea;border-top:0" bgcolor="#ffffff">
                                                    <table style="padding:15px 60px 15px" border="0" cellpadding="0" cellspacing="0" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td height="20" valign="top" width="150">
                                                                    <strong style="color: #0059a9; font-family: ProximaNovaSemibold,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
                                                                        Nombre(s):
                                                                    </strong>
                                                                </td>
                                                                <td height="20" valign="top">
                                                                    <span style="margin-left: 15px; font-family: ProximaNovaRegular,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$nombre.' '.$apellidos.'</span><br>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="20" valign="top" width="150">
                                                                    <strong style="color: #0059a9; font-family: ProximaNovaSemibold,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
                                                                        Correo Electrónico:
                                                                    </strong>
                                                                </td>
                                                                <td height="20" valign="top">
                                                                    <span style="margin-left: 15px; font-family: ProximaNovaRegular,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: right; padding: 0">'.$email.'</span><br>
                                                                </td>
                                                                <br>
                                                                <br>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table style="padding:20px 15px 20px 15px;border-top:1px solid #ccc" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td height="20" width="600" valign="top">
                                                                    <span style="font-family: ProximaNovaRegular,Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 12px; padding: 15px; text-align: justify; display: block; word-break: break-all;">'.$mensaje.'</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table style="padding:20px 15px 20px 15px;border-top:1px solid #ccc" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <p style="color: #000000; font-family: jaguarbold,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 11px; text-align: right; padding: 0">
                                                                        &nbsp;© 2016 / Jaguar Land Rover Country
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td height="11" valign="top" width="11">
                                                    <img style="display:block;border:0" src="http://jaguargdl.com/img/shadow-right.png" border="0" class="CToWUd">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="11">
                                                    <img src="http://jaguargdl.com/img/spacer.png" style="display:block;border:0" border="0" class="CToWUd">
                                                </td>
                                                <td width="11">
                                                    <img src="http://jaguargdl.com/img/spacer.png" style="display:block;border:0" border="0" class="CToWUd">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </body>
                        </html>
                    ',
                    'subject' => 'Land Rover Country',
                    'from_email' => $email,
                    'from_name' => $nombre,
                    'to' => array(
                        array(
                            'email' => 'arivera@jaguargdl.com',
                            //'email' => 'hevelmo060683@gmail.com',
                            'name' => 'Land Rover Country',
                            'type' => 'cc'
                        ),
                        array(
                            'email' => 'arivera@guadalajara.jlr.com.mx',
                            //'email' => 'cold_space@hotmail.com',
                            'name' => 'Land Rover Country',
                            'type' => 'bcc'
                        )
                    ),
                    'headers' => array('Reply-To' => 'arivera@jaguargdl.com'),
                    //'headers' => array('Reply-To' => 'arivera@guadalajara.jlr.com.mx'),
                    'important' => false,
                    'track_opens' => true,
                    'track_clicks' => true,
                    'auto_text' => null,
                    'auto_html' => null,
                    'inline_css' => null,
                    'url_strip_qs' => null,
                    'preserve_recipients' => null,
                    'view_content_link' => null,
                    'bcc_address' => null,
                    'tracking_domain' => null,
                    'signing_domain' => null,
                    'return_path_domain' => null,
                    'merge' => true,

                    'tags' => array('orden-new-notificacion', 'jaguar-land-rover-country'),
                    'google_analytics_domains' => array('http://eurocavsa.com.mx/country/'),
                    'google_analytics_campaign' => 'arivera@jaguargdl.com',
                    'metadata' => array('website' => 'http://eurocavsa.com.mx/country/'),

                );
                $async = false;
                $ip_pool = 'Main Pool';
                $send_at = '';
                $result = $mandrill->messages->send($message, $async, $ip_pool, $send_at);
                //print_r($result);

            } catch(Mandrill_Error $e) {
                // Mandrill errors are thrown as exceptions
                echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
                // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
                throw $e;
            }
        }
/*
  ----------------------------------------------------------------------------
  FINANCING BY MODELS
  ----------------------------------------------------------------------------
*/
    // SEND FINANCING BY MODEL NEWSLETTER
        function send_news_financing_by_model($url, $nombre, $apellidos, $correo, $newsletter, $agencie, $subscription, $name_model, $concesionaria) {
            try {
                $mandrill = new Mandrill('IJKuV2iqtHNLdnn1DCSxxQ');
                $message = array(
                    'html' => '
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#303030"style="background-color: rgb(48, 48, 48);">
                            <tr>
                                <td style="background-color: rgba(221, 221, 221, 0.5); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -120px -15px; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                                        <!-- Mobile Wrapper -->
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgba(221, 221, 221, 0.5);">
                                        <tr>
                                            <td width="100%" align="center">

                                                <div class="sortable_inner ui-sortable">
                                                <!-- Space -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="50"></td>
                                                    </tr>
                                                </table><!-- End Space -->

                                                <!-- Space -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="50"></td>
                                                    </tr>
                                                </table><!-- End Space -->

                                                <!-- Start Top -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: rgba(255, 255, 255, 0.7);" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center" class="logo">

                                                            <!-- Header Text -->
                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="100%">
                                                                        <span>
                                                                            <img src="'.$url.'img/logo/logo-jaguar-land-rover-contry.png" width="250" alt="" border="0" style="display: inline-block; vertical-align: middle;"> 
                                                                            <span style="font-family: Helvetica; text-align: center; display: inline-block; font-weight: bold; vertical-align: middle;">
                                                                                COUNTRY
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 23px; color: rgb(63, 67, 69); line-height: 30px; font-weight: 100;">
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Registro Newsletter.<!--[if !mso]><!--></span><!--<![endif]-->
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 17px; color: rgb(63, 67, 69); line-height: 30px; font-weight: 100;">
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Financiamiento ' . $name_model . ' .<!--[if !mso]><!--></span><!--<![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(63, 67, 69); line-height: 24px;">
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->
                                                                            <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-top: 2%;">
                                                                            <ol type="1">
                                                                                <li style="list-style-type: none; margin: 0 -30px; display: block;"><b>Usuario</b></li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Nombre (s) y Apellidos:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $nombre . ' ' . $apellidos . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Correo:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $correo . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ol>
                                                                            <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-bottom: 2%;">

                                                                    <!--[if !mso]><!--></span><!--<![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="0"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background-color: rgba(255, 255, 255, 0.9);" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="10"></td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="10"></td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgba(255, 255, 255, 0.9); line-height: 24px; text-align: center">
                                                            <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2016 ' . $agencie . ' <!--<![endif]--></span><!--[if !mso]><!-->
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="50"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="100%" height="1"></td>
                                                    </tr>
                                                </table>
                                                </div>

                                            </td>
                                        </tr>
                                    </table>

                                </div>
                                </td>
                            </tr>
                        </table>
                    ',
                    'subject' => 'Financiamiento Newsletter - '.$agencie.'.',
                    'from_email' => 'noreply@max-app.net',
                    'from_name' => $nombre . ' ' . $apellidos,
                    'to' => array(
                        /*
                        array(
                            'email' => 'hevelmo060683@gmail.com',
                            'name' => $nombre . ' ' . $apellidos,
                            'type' => 'to'
                        )
                        */
                        array(
                            'email' => 'webmaster@medigraf.com.mx',
                            'name' => $nombre . ' ' . $apellidos,
                            'type' => 'to'
                        )
                    ),
                    'headers' => array('Reply-To' => 'webmaster@medigraf.com.mx'),
                    'important' => false,
                    'track_opens' => true,
                    'track_clicks' => true,
                    'auto_text' => null,
                    'auto_html' => null,
                    'inline_css' => null,
                    'url_strip_qs' => null,
                    'preserve_recipients' => null,
                    'view_content_link' => null,
                    'bcc_address' => null,
                    'tracking_domain' => null,
                    'signing_domain' => null,
                    'return_path_domain' => null,
                    'merge' => true,

                    'tags' => array('orden-new-notificacion-jaguarl-land-rover-country', 'financiamiento-newsletter-'.$agencie, 'max-app-financing-model-'.$name_model),
                    'google_analytics_domains' => array($url),
                    'google_analytics_campaign' => 'webmaster@medigraf.com.mx',
                    'metadata' => array('website' => $url),

                );
                $async = false;
                $ip_pool = 'Main Pool';
                $send_at = '';
                $result = $mandrill->messages->send($message, $async, $ip_pool, $send_at);
                //print_r($result);

            } catch(Mandrill_Error $e) {
                // Mandrill errors are thrown as exceptions
                echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
                // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
                throw $e;
            }
        }
    // SEND FINANCING BY MODEL
        function send_financing_by_model($url, $concesionaria, $name_model, $nombre, $apellidos, $correo, $telefono, $mensaje, $testdrive, $subscription, $image_model, $agencie) {
            try {
                $mandrill = new Mandrill('IJKuV2iqtHNLdnn1DCSxxQ');
                $message = array(
                    'html' => '
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#303030"style="background-color: rgb(48, 48, 48);">
                            <tr>
                                <td style="background-color: rgba(221, 221, 221, 0.5); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -120px -15px; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                                        <!-- Mobile Wrapper -->
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgba(221, 221, 221, 0.5);">
                                        <tr>
                                            <td width="100%" align="center">

                                                <div class="sortable_inner ui-sortable">
                                                <!-- Space -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="50"></td>
                                                    </tr>
                                                </table><!-- End Space -->

                                                <!-- Space -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="50"></td>
                                                    </tr>
                                                </table><!-- End Space -->

                                                <!-- Start Top -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: rgba(255,255,255,0.7);" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center" class="logo">

                                                            <!-- Header Text -->
                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="100%">
                                                                        <span>
                                                                            <img src="'.$url.'img/logo/logo-jaguar-land-rover-contry.png" width="250" alt="" border="0" style="display: inline-block; vertical-align: middle;"> 
                                                                            <span style="font-family: Helvetica; text-align: center; display: inline-block; font-weight: bold; vertical-align: middle;">
                                                                                COUNTRY
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 23px; color: rgb(63, 67, 69); line-height: 30px; font-weight: 100;">
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Cotización de  ' . $name_model . '<!--[if !mso]><!--></span><!--<![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(63, 67, 69); line-height: 24px;">
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->
                                                                            <img src="'.$url.'img/financing/thumbs/' . $image_model . '" alt="" width="45%" style="margin: 0 auto; display: block;">
                                                                            <span style="font-family: Helvetica; font-weight: normal; display: block; text-align: center;">
                                                                                <h4 style="margin-top: 0; margin-bottom: 5px;">Modelo: ' . $name_model . '</h4>
                                                                            </span>
                                                                            <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-bottom: 0%;">
                                                                            <ol type="1">
                                                                                <li style="list-style-type: none; margin: 0 -30px; display: block;"><b>Usuario</b></li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Nombre (s) y Apellidos:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $nombre . ' ' . $apellidos . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Correo:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $correo . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Teléfono:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $telefono . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ol>
                                                                            <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-bottom: 0%;">
                                                                            <ol type="1">
                                                                                <li style="list-style-type: none; margin: 0 -30px; display: block;"><b>Datos adicionales</b></li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Concesionaria:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $agencie . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Prueba de manejo:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $testdrive . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Subscripción:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $subscription . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ol>
                                                                            <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-bottom: 2%;">

                                                                    <!--[if !mso]><!--></span><!--<![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(63, 67, 69); line-height: 30px; font-weight: 100;">
                                                                        <!--[if !mso]><!-->
                                                                            <span style="font-family: Helvetica; font-weight: normal; text-align: left; display: block; word-break: break-all; padding: 0 20px;">
                                                                                <!--<![endif]-->
                                                                                ' . $mensaje . '
                                                                                <!--[if !mso]><!-->
                                                                            </span>
                                                                        <!--<![endif]-->
                                                                        <hr style="border: 0; border-bottom: 1px solid #00a1dc; display: block; width: 100%; margin-top: 2%;">
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                
                                                <!-- Button Center -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td>
                                                                        <table border="0" cellpadding="0" cellspacing="0" align="left" width="100%">
                                                                            <tr>
                                                                                <td align="center" height="45" bgcolor="#fff" style="padding-left: 30px; padding-right: 30px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; background: #02260a;">
                                                                                    <!--[if !mso]><!-->
                                                                                    <span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->
                                                                                        <a href="mailto:' . $correo . '?subject=Cotización de Financiamiento Jaguar Land Rover Country" style="color: rgba(255, 255, 255, 0.9); font-size: 15px; text-decoration: none; line-height: 34px; width: 100%;">Responder a ' . $nombre . ' ' . $apellidos . '</a>
                                                                                        <br>
                                                                                    <!--[if !mso]><!--></span><!--<![endif]-->
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!-- End Button Center -->

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background-color: rgba(255, 255, 255, 0.9);" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="30"></td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgba(255, 255, 255, 0.9); line-height: 24px; text-align: center">
                                                            <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2016 ' . $agencie . ' <!--<![endif]--></span><!--[if !mso]><!-->
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="30"></td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="29"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="100%" height="1"></td>
                                                    </tr>
                                                </table>
                                                </div>

                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    ',
                    'subject' => 'Financiamiento - Solicitud de la pagina de internet '.$agencie.' para cotizar.',
                    'from_email' => 'noreply@max-app.net',
                    'from_name' => $nombre . ' ' . $apellidos,
                    'to' => array(
                        /*
                        array(
                            'email' => 'hevelmo060683@gmail.com',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$agencie.' para cotizar.',
                            'type' => 'to'
                        )
                        */
                        array(
                            'email' => 'j.guerrero@country.jlr.com.mx',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$agencie.' para cotizar.',
                            'type' => 'to'
                        ),
                        array(
                            'email' => 'arivera@guadalajara.jlr.com.mx',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$agencie.' para cotizar.',
                            'type' => 'to'
                        ),
                        array(
                            'email' => 'ayerimriveraq@gmail.com',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$agencie.' para cotizar.',
                            'type' => 'to'
                        ),
                        array(
                            'email' => 'jc@medigraf.com.mx',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$agencie.' para cotizar.',
                            'type' => 'to'
                        )
                    ),
                    'headers' => array('Reply-To' => 'j.guerrero@country.jlr.com.mx'),
                    'important' => false,
                    'track_opens' => true,
                    'track_clicks' => true,
                    'auto_text' => null,
                    'auto_html' => null,
                    'inline_css' => null,
                    'url_strip_qs' => null,
                    'preserve_recipients' => null,
                    'view_content_link' => null,
                    'bcc_address' => null,
                    'tracking_domain' => null,
                    'signing_domain' => null,
                    'return_path_domain' => null,
                    'merge' => true,

                    'tags' => array('orden-new-notificacion-jaguarl-land-rover-country', 'financiamiento-solicitud-de-la-pagina-de-internet-'.$agencie.'-para-cotizar.', 'max-app-financing-model-'.$name_model),
                    'google_analytics_domains' => array($url),
                    'google_analytics_campaign' => 'j.guerrero@country.jlr.com.mx',
                    'metadata' => array('website' => $url),
                );
                $async = false;
                $ip_pool = 'Main Pool';
                $send_at = '';
                $result = $mandrill->messages->send($message, $async, $ip_pool, $send_at);
                //print_r($result);
            } catch(Mandrill_Error $e) {
                // Mandrill errors are thrown as exceptions
                echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
                // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
                throw $e;
            }
        }
    // SEND FINANCING BY MODEL CONFIRM
        function send_financing_by_model_confirm($url, $concesionaria, $campaign_model, $name_model, $nombre, $apellidos, $correo, $telefono, $mensaje, $testdrive, $subscription, $image_model, $agencie) {
            try {
                $mandrill = new Mandrill('IJKuV2iqtHNLdnn1DCSxxQ');
                $message = array(
                    'html' => '
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#303030"style="background-color: rgb(48, 48, 48);">
                            <tr>
                                <td style="background-color: rgba(221, 221, 221, 0.5); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -120px -15px; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                                        <!-- Mobile Wrapper -->
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgba(221, 221, 221, 0.5);">
                                        <tr>
                                            <td width="100%" align="center">

                                                <div class="sortable_inner ui-sortable">
                                                <!-- Space -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="50"></td>
                                                    </tr>
                                                </table><!-- End Space -->

                                                <!-- Space -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="50"></td>
                                                    </tr>
                                                </table><!-- End Space -->

                                                <!-- Start Top -->
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: rgba(255,255,255,0.7);" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center" class="logo">

                                                            <!-- Header Text -->
                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="100%">
                                                                        <span>
                                                                            <img src="'.$url.'img/logo/logo-jaguar-land-rover-contry.png" width="250" alt="" border="0" style="display: inline-block; vertical-align: middle;"> 
                                                                            <span style="font-family: Helvetica; text-align: center; display: inline-block; font-weight: bold; vertical-align: middle;">
                                                                                COUNTRY
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 23px; color: rgb(63, 67, 69); line-height: 30px; font-weight: 100;">
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Cotización de  ' . $name_model . '<!--[if !mso]><!--></span><!--<![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(63, 67, 69); line-height: 24px;">
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; word-break: break-all; padding: 0 20px;""><!--<![endif]-->
                                                                        Te hemos asignado un asesor de la concesionaria ' . $agencie . ' quien se pondrá en contacto contigo para confirmar tus datos y resolver cualquier duda que puedas tener.
                                                                        <br><br>
                                                                        <!--[if !mso]><!--></span><!--<![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>



                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; background-color: rgba(255, 255, 255, 0.9);" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center">

                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="10"></td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="30"></td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgba(255, 255, 255, 0.9); line-height: 24px; text-align: center">
                                                            <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2016 ' . $agencie . ' <!--<![endif]--></span><!--[if !mso]><!-->
                                                        </td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="30"></td>
                                                    </tr>
                                                </table>

                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" height="29"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="100%" height="1"></td>
                                                    </tr>
                                                </table>
                                                </div>

                                            </td>
                                        </tr>
                                    </table>

                                </div>
                                </td>
                            </tr>
                        </table>
                    ',
                    'subject' => 'Financiamiento - Solicitud de cotización '.$name_model,
                    'from_email' => 'noreply@max-app.net',
                    'from_name' => $nombre . ' ' . $apellidos,
                    'to' => array(
                        array(
                            'email' => $correo,
                            //'email' => 'hevelmo060683@gmail.com',
                            'name' => $nombre . ' ' . $apellidos,
                            'type' => 'to'
                        )
                    ),
                    'headers' => array('Reply-To' => 'j.guerrero@country.jlr.com.mx'),
                    'important' => false,
                    'track_opens' => true,
                    'track_clicks' => true,
                    'auto_text' => null,
                    'auto_html' => null,
                    'inline_css' => null,
                    'url_strip_qs' => null,
                    'preserve_recipients' => null,
                    'view_content_link' => null,
                    'bcc_address' => null,
                    'tracking_domain' => null,
                    'signing_domain' => null,
                    'return_path_domain' => null,
                    'merge' => true,

                    'tags' => array('orden-new-notificacion-jaguarl-land-rover-country', 'financiamiento-mensaje-de-confirmación', 'max-app-financing-model-'.$name_model),
                    'google_analytics_domains' => array($url),
                    'google_analytics_campaign' => 'j.guerrero@country.jlr.com.mx',
                    'metadata' => array('website' => $url),

                );
                $async = false;
                $ip_pool = 'Main Pool';
                $send_at = '';
                $result = $mandrill->messages->send($message, $async, $ip_pool, $send_at);
                //print_r($result);

            } catch(Mandrill_Error $e) {
                // Mandrill errors are thrown as exceptions
                echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
                // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
                throw $e;
            }
        }
