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
 * [Initial V 15.0]
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
    //$app->get('/get/agencia', /*'mw1',*/ 'getAgencie');
    $app->post('/post/financiamiento/jaguar-xe', 'sendFinancingJaguarXE');
    $app->post('/post/financiamiento/discovery-sport', 'sendFinancingDiscoverySport');
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
    // SAVE LEADS
    function saveLeads($property) {
        //$property = requestBody();
        $sql = 'INSERT INTO ldrLeads (
                    LDS_Nombre,
                    LDS_Apellidos,
                    LDS_Correo,
                    LDS_Telefono,
                    LDS_Modelo,
                    LDS_Mensaje,
                    LDS_Agencia,
                    LDS_Medio,
                    LDS_News,
                    LDS_TestDrive,
                    LDS_Fecha,
                    LDS_FechaFormato
                ) VALUES (
                    :ldrLeadsNombre,
                    :ldrLeadsApellidos,
                    :ldrLeadsCorreo,
                    :ldrLeadsTelefono,
                    :ldrLeadsModelo,
                    :ldrLeadsMensaje,
                    :ldrLeadsAgencia,
                    :ldrLeadsMedio,
                    :ldrLeadsNews,
                    :ldrLeadsTestDrive,
                    :ldrLeadsFecha,
                    :ldrLeadsFechaFormato
                )';
        $structure = array();
        $params = array(
            'ldrLeadsNombre' => trim(ucwords($property->leads_jag_ldr_country_financing_by_model_name)),
            'ldrLeadsApellidos' => trim(ucwords($property->leads_jag_ldr_country_financing_by_model_lastname)),
            'ldrLeadsCorreo' => trim($property->leads_jag_ldr_country_financing_by_model_email),
            'ldrLeadsTelefono' => trim($property->leads_jag_ldr_country_financing_by_model_tel),
            'ldrLeadsModelo' => trim(ucwords($property->leads_jag_ldr_country_financing_by_model_model_name)),
            'ldrLeadsMensaje' => trim($property->leads_jag_ldr_country_financing_by_model_message),
            'ldrLeadsAgencia' => trim(ucwords($property->leads_jag_ldr_country_financing_by_model_source)),
            'ldrLeadsMedio' => trim($property->leads_jag_ldr_country_financing_by_model_medio),
            'ldrLeadsNews' => trim($property->leads_jag_ldr_country_financing_by_model_subscription),
            'ldrLeadsTestDrive' => trim($property->leads_jag_ldr_country_financing_by_model_test_drive),
            'ldrLeadsFecha' => date('o-m-d H:i:s'),
            'ldrLeadsFechaFormato' => trim($property->leads_jag_ldr_country_financing_by_model_date_format),
        );
        //echo "<pre>", print_r($params), "</pre><br>";
        $result = generalQuery(getConnection_ldr(), $sql, $params, 1, PDO::FETCH_ASSOC);
        //echo "<pre>", print_r($result), "</pre><br>";
    }
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
    // NEW FORM FINACING BY MODELS
    // FINANCING BY MODEL JAGUAR XE
    function sendFinancingJaguarXE() {
        $property = requestBody();
        //saveLeads($property);

        $leads_model_name = $property->leads_jag_ldr_country_financing_by_model_name;
        $leads_model_lastname = $property->leads_jag_ldr_country_financing_by_model_lastname;
        $leads_model_email = $property->leads_jag_ldr_country_financing_by_model_email;
        $leads_model_tel = $property->leads_jag_ldr_country_financing_by_model_tel;
        $leads_model_model_name = $property->leads_jag_ldr_country_financing_by_model_model_name;
        $leads_model_message = $property->leads_jag_ldr_country_financing_by_model_message;
        $leads_model_test_drive = $property->leads_jag_ldr_country_financing_by_model_test_drive;
        $leads_model_date_format = $property->leads_jag_ldr_country_financing_by_model_date_format;
        //
        $leads_model_newsletter = $property->leads_jag_ldr_country_financing_by_model_newsletter;
        $leads_model_key = $property->leads_jag_ldr_country_financing_by_model_key;
        $leads_model_image_model = $property->leads_jag_ldr_country_financing_by_model_image_model;
        $leads_model_subscription = $property->leads_jag_ldr_country_financing_by_model_subscription;
        $leads_model_source = $property->leads_jag_ldr_country_financing_by_model_source;
        $leads_model_medio = $property->leads_jag_ldr_country_financing_by_model_medio;
        $leads_model_drive = $property->leads_jag_ldr_country_financing_by_model_drive;

        $leads_model_url = "http://eurocavsa.com.mx/country/";
        $leads_model_concesionaria = $leads_model_source;

        if (isset($leads_model_subscription) && $leads_model_subscription === "Activado") {
            send_news_financing_by_model($leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_concesionaria, $leads_model_url);
        }
        send_financing_by_model($leads_model_url, $leads_model_concesionaria, $leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_tel, $leads_model_message, $leads_model_test_drive, $leads_model_subscription, $leads_model_image_model);
        send_financing_by_model_confirm($leads_model_url, $leads_model_concesionaria, $leads_model_source, $leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_tel, $leads_model_message, $leads_model_test_drive, $leads_model_subscription, $leads_model_image_model);
        echo changeArrayIntoJSON("ljldr", array('process'=>'ok',$property));
    }
    // FINANCING BY MODEL JAGUAR XE
    function sendFinancingDiscoverySport() {
        $property = requestBody();
        //saveLeads($property);

        $leads_model_name = $property->leads_jag_ldr_country_financing_by_model_name;
        $leads_model_lastname = $property->leads_jag_ldr_country_financing_by_model_lastname;
        $leads_model_email = $property->leads_jag_ldr_country_financing_by_model_email;
        $leads_model_tel = $property->leads_jag_ldr_country_financing_by_model_tel;
        $leads_model_model_name = $property->leads_jag_ldr_country_financing_by_model_model_name;
        $leads_model_message = $property->leads_jag_ldr_country_financing_by_model_message;
        $leads_model_test_drive = $property->leads_jag_ldr_country_financing_by_model_test_drive;
        $leads_model_date_format = $property->leads_jag_ldr_country_financing_by_model_date_format;
        //
        $leads_model_newsletter = $property->leads_jag_ldr_country_financing_by_model_newsletter;
        $leads_model_key = $property->leads_jag_ldr_country_financing_by_model_key;
        $leads_model_image_model = $property->leads_jag_ldr_country_financing_by_model_image_model;
        $leads_model_subscription = $property->leads_jag_ldr_country_financing_by_model_subscription;
        $leads_model_source = $property->leads_jag_ldr_country_financing_by_model_source;
        $leads_model_medio = $property->leads_jag_ldr_country_financing_by_model_medio;
        $leads_model_drive = $property->leads_jag_ldr_country_financing_by_model_drive;

        $leads_model_url = "http://eurocavsa.com.mx/country/";
        $leads_model_concesionaria = $leads_model_source;

        if (isset($leads_model_subscription) && $leads_model_subscription === "Activado") {
            send_news_financing_by_model($leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_concesionaria, $leads_model_url);
        }
        send_financing_by_model($leads_model_url, $leads_model_concesionaria, $leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_tel, $leads_model_message, $leads_model_test_drive, $leads_model_subscription, $leads_model_image_model);
        send_financing_by_model_confirm($leads_model_url, $leads_model_concesionaria, $leads_model_source, $leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_tel, $leads_model_message, $leads_model_test_drive, $leads_model_subscription, $leads_model_image_model);
        echo changeArrayIntoJSON("ljldr", array('process'=>'ok',$property));
    }
/*
  ----------------------------------------------------------------------------
  General Get Mandril
  ----------------------------------------------------------------------------
*/
/*
  ----------------------------------------------------------------------------
  FINANCING BY MODELS
  ----------------------------------------------------------------------------
*/
    // SEND FINANCING BY MODEL NEWSLETTER
        function send_news_financing_by_model($leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_concesionaria, $leads_model_url) {
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
                                                                            <img src="http://eurocavsa.com.mx/country/img/logo/logo-jaguar-land-rover-contry.png" width="250" alt="" border="0" style="display: inline-block; vertical-align: middle;"> 
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
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Financiamiento ' . $leads_model_model_name . ' .<!--[if !mso]><!--></span><!--<![endif]-->
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
                                                                                             <i>' . $leads_model_name . ' ' . $leads_model_lastname . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Correo:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $leads_model_email . '</i>
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
                                                            <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2016 ' . $leads_model_concesionaria . ' <!--<![endif]--></span><!--[if !mso]><!-->
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
                    'subject' => 'Financiamiento Newsletter - '.$leads_model_concesionaria.'.',
                    'from_email' => 'noreply@max-app.net',
                    'from_name' => $leads_model_name . ' ' . $leads_model_lastname,
                    'to' => array(
                        /*
                        array(
                            'email' => 'hevelmo060683@gmail.com',
                            'name' => $leads_model_name . ' ' . $leads_model_lastname,
                            'type' => 'to'
                        )
                        */
                        array(
                            'email' => 'webmaster@medigraf.com.mx',
                            'name' => $leads_model_name . ' ' . $leads_model_lastname,
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

                    'tags' => array('orden-new-notificacion-jaguarl-land-rover-country', 'Financiamiento Newsletter - '.$leads_model_concesionaria.'.'),
                    'google_analytics_domains' => array($leads_model_url),
                    'google_analytics_campaign' => 'webmaster@medigraf.com.mx',
                    'metadata' => array('website' => $leads_model_url),

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
        function send_financing_by_model($leads_model_url, $leads_model_concesionaria, $leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_tel, $leads_model_message, $leads_model_test_drive, $leads_model_subscription, $leads_model_image_model) {
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
                                                                            <img src="http://eurocavsa.com.mx/country/img/logo/logo-jaguar-land-rover-contry.png" width="250" alt="" border="0" style="display: inline-block; vertical-align: middle;"> 
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
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Cotización de  ' . $leads_model_model_name . '<!--[if !mso]><!--></span><!--<![endif]-->
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
                                                                            <img src="http://eurocavsa.com.mx/country/img/financing/thumbs/' . $leads_model_image_model . '" alt="" width="45%" style="margin: 0 auto; display: block;">
                                                                            <span style="font-family: Helvetica; font-weight: normal; display: block; text-align: center;">
                                                                                <h4 style="margin-top: 0; margin-bottom: 5px;">Modelo: ' . $leads_model_model_name . '</h4>
                                                                            </span>
                                                                            <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-bottom: 0%;">
                                                                            <ol type="1">
                                                                                <li style="list-style-type: none; margin: 0 -30px; display: block;"><b>Usuario</b></li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Nombre (s) y Apellidos:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $leads_model_name . ' ' . $leads_model_lastname . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Correo:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $leads_model_email . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Teléfono:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $leads_model_tel . '</i>
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
                                                                                             <i>' . $leads_model_concesionaria . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Prueba de manejo:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $leads_model_test_drive . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Subscripción:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $leads_model_subscription . '</i>
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
                                                                                ' . $leads_model_message . '
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
                                                                                        <a href="mailto:' . $leads_model_email . '?subject=Cotización de Financiamiento Jaguar Land Rover Country" style="color: rgba(255, 255, 255, 0.9); font-size: 15px; text-decoration: none; line-height: 34px; width: 100%;">Responder a ' . $leads_model_name . ' ' . $leads_model_lastname . '</a>
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
                                                            <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2016 ' . $leads_model_concesionaria . ' <!--<![endif]--></span><!--[if !mso]><!-->
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
                    'subject' => 'Financiamiento - Solicitud de la pagina de internet '.$leads_model_concesionaria.' para cotizar.',
                    'from_email' => 'noreply@max-app.net',
                    'from_name' => $leads_model_name . ' ' . $leads_model_lastname,
                    'to' => array(
                        /*
                        array(
                            'email' => 'hevelmo060683@gmail.com',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$leads_model_concesionaria.' para cotizar.',
                            'type' => 'to'
                        )
                        */
                        array(
                            'email' => 'j.guerrero@country.jlr.com.mx',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$leads_model_concesionaria.' para cotizar.',
                            'type' => 'to'
                        ),
                        array(
                            'email' => 'arivera@guadalajara.jlr.com.mx',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$leads_model_concesionaria.' para cotizar.',
                            'type' => 'to'
                        ),
                        array(
                            'email' => 'ayerimriveraq@gmail.com',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$leads_model_concesionaria.' para cotizar.',
                            'type' => 'to'
                        ),
                        array(
                            'email' => 'jc@medigraf.com.mx',
                            'name' => 'Financiamiento - Solicitud de la pagina de internet '.$leads_model_concesionaria.' para cotizar.',
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

                    'tags' => array('orden-new-notificacion-jaguarl-land-rover-country', 'Financiamiento - Solicitud de la pagina de internet '.$leads_model_concesionaria.' para cotizar.', 'Modelo '.$leads_model_model_name),
                    'google_analytics_domains' => array($leads_model_url),
                    'google_analytics_campaign' => 'j.guerrero@country.jlr.com.mx',
                    'metadata' => array('website' => $leads_model_url),
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
        function send_financing_by_model_confirm($leads_model_url, $leads_model_concesionaria, $leads_model_source, $leads_model_model_name, $leads_model_name, $leads_model_lastname, $leads_model_email, $leads_model_tel, $leads_model_test_drive, $leads_model_subscription, $leads_model_image_model) {
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
                                                                            <img src="http://eurocavsa.com.mx/country/img/logo/logo-jaguar-land-rover-contry.png" width="250" alt="" border="0" style="display: inline-block; vertical-align: middle;"> 
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
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Cotización de  ' . $leads_model_model_name . '<!--[if !mso]><!--></span><!--<![endif]-->
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
                                                                        Te hemos asignado un asesor Jaguar Land Rover de la concesionaria ' . $leads_model_source . ' quien se pondrá en contacto contigo para confirmar tus datos y resolver cualquier duda que puedas tener.
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
                                                            <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2016 ' . $leads_model_concesionaria . ' <!--<![endif]--></span><!--[if !mso]><!-->
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
                    'subject' => 'Financiamiento - Solicitud de cotización '.$leads_model_model_name,
                    'from_email' => 'noreply@max-app.net',
                    'from_name' => $leads_model_name . ' ' . $leads_model_lastname,
                    'to' => array(
                        array(
                            'email' => $leads_model_email,
                            //'email' => 'her6_gem@hotmail.com',
                            'name' => $leads_model_name . ' ' . $leads_model_lastname,
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

                    'tags' => array('orden-new-notificacion-jaguarl-land-rover-country', 'Financiamiento mensaje de confirmación'),
                    'google_analytics_domains' => array($leads_model_url),
                    'google_analytics_campaign' => 'j.guerrero@country.jlr.com.mx',
                    'metadata' => array('website' => $leads_model_url),

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
