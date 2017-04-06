 <?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include '../../incorporate/db_connect.php';
include '../../incorporate/functions.php';
include '../../incorporate/queryintojson.php';
include '../Mandrill.php';

date_default_timezone_set('America/Mexico_City');
setlocale(LC_MONETARY, 'en_US');

/**
 *
 * [Initial V 1.0]
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
 * [Routes Deep V 1.0]
**/
// POST route
    //$app->post('/post/table', /*'mw1',*/ 'addTable');
// INSERT
    //$app->post('/new/table', /*'mw1',*/ 'addTable');
// UPDATE
    //$app->post('/set/table/:idTable', /*'mw1',*/ 'setTable');
// GET route
// SELECT
    $app->get('/get/banner/modelo/jaguar', /*'mw1',*/ 'getBanner_model_jaguar');
    $app->get('/get/banner/modelo/land-rover', /*'mw1',*/ 'getBanner_model_land_rover');
// DELETE
    //$app->get('/del/table/:idTable', /*'mw1',*/ 'delTable');
//FINANCING
    $app->post('/post/financiamiento/modelo', /*'mw1',*/ 'sendFinancingByModel');
$app->run();

//Functions
//TEST
    function getTest() {
        $today = date('o-m-d H:i:s');
        $array = array('date' => $today);
        echo changeArrayIntoJSON('propa', $array);
    }
    function postTest() {
        $array = array('process' => 'ok');
        //echo changeArrayIntoJSON('propa', $array);
        echo "string";
    }
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
        $db = getConnection();
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
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 1, PDO::FETCH_ASSOC);
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
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 2, PDO::FETCH_ASSOC);
    }
/*
  ----------------------------------------------------------------------------
  General Get Methods
  ----------------------------------------------------------------------------
*/
// SELECT
    function getTable() {
        $sql = "SELECT * FROM proTable tab";
        $structure = array(
            'alias' => 'TAB_Field'
        );
        $params = array();
        echo changeQueryIntoJSON('propa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
    }
// DELETE
    function delTable($idTable) {
        $sql = "DELETE FROM camTable WHERE TAB_Id = :tabId";
        $structure = array();
        $params = array(
            'tabId' => $idTable
        );
        echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 3, PDO::FETCH_ASSOC);
    }

    // GET HOME SECTION BANNERS JSON
    function getBannersJSON ($sql) {
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
            'primaryLinkTitle' => 'BAN_PrimaryLinkSub'
        );
        $params = array();
        $result_link_container = restructureQuery($structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
        for ($idx=0; $idx < count($result_link_container); $idx++) {
            $ban_target = $agn_type = $result_link_container[$idx]['banner_tipo'];
            $result_link_container[$idx]['target_noticia'] = ($agn_type != 'noticia' ) ? '' : '_self';
            $result_link_container[$idx]['target_sitio'] = ($agn_type != 'sitio' ) ? '' : '_blank';
            $result_link_container[$idx]['target_agencia'] = ($agn_type != 'agencia' ) ? '' : '_self';
            $result_link_container[$idx]['target_agencias'] = ($agn_type != 'agencias' ) ? '' : '_self';
            $result_link_container[$idx]['target_promo'] = ($agn_type != 'promo' ) ? '' : '_blank';
        }
        $json = changeArrayIntoJSON('campa', $result_link_container);
        echo $json;
        //echo changeQueryIntoJSON('campa', $structure, getConnection(), $sql, $params, 0, PDO::FETCH_ASSOC);
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
        getBannersJSON($sql);
    }
    function getBanner_model_land_rover() {
        $sql = "SELECT *
                FROM camBanners
                WHERE BAN_Status = 1
                AND BAN_LandingJLDR = 1
                AND BAN_Id = 10
                ORDER BY BAN_Id DESC
                ";
        getBannersJSON($sql);
    }

// POST
    function sendFinancingByModel () {
        $property = requestBody();
        $lnc_financing_by_model_name = $property->lnc_financing_by_model_name;
        $lnc_financing_by_model_lastname = $property->lnc_financing_by_model_lastname;
        $lnc_financing_by_model_email = $property->lnc_financing_by_model_email;
        $lnc_financing_by_model_tel = $property->lnc_financing_by_model_tel;

        $lnc_financing_by_model_concesionarie = $property->lnc_financing_by_model_concesionarie;

        $lnc_financing_by_model_car = $property->lnc_financing_by_model_car;
        $lnc_financing_by_model_key = $property->lnc_financing_by_model_key;

        $lnc_financing_by_model_newsletter = $property->lnc_financing_by_model_newsletter;
        $lnc_financing_by_model_subscription = $property->lnc_financing_by_model_subscription;

        $lnc_financing_by_model_drive = $property->lnc_financing_by_model_drive;

        $lnc_financing_by_model_image_model = $property->lnc_financing_by_model_image_model;

        if (isset($lnc_financing_by_model_newsletter) && $lnc_financing_by_model_newsletter === "on") {
            $lnc_financing_by_model_subscription = "Activado";
            send_financing_newsletter($lnc_financing_by_model_name, $lnc_financing_by_model_lastname, $lnc_financing_by_model_email, $lnc_financing_by_model_tel, $lnc_financing_by_model_car, $lnc_financing_by_model_concesionarie);
        } else {
            $lnc_financing_by_model_subscription = "Desactivado";
        }
        send_financing_confirm($lnc_financing_by_model_name, $lnc_financing_by_model_lastname, $lnc_financing_by_model_email, $lnc_financing_by_model_tel, $lnc_financing_by_model_car, $lnc_financing_by_model_concesionarie, $lnc_financing_by_model_newsletter, $lnc_financing_by_model_subscription, $lnc_financing_by_model_drive, $lnc_financing_by_model_image_model);
        send_financing($lnc_financing_by_model_name, $lnc_financing_by_model_lastname, $lnc_financing_by_model_email, $lnc_financing_by_model_tel, $lnc_financing_by_model_car, $lnc_financing_by_model_key, $lnc_financing_by_model_concesionarie, $lnc_financing_by_model_newsletter, $lnc_financing_by_model_subscription, $lnc_financing_by_model_drive, $lnc_financing_by_model_image_model);
        echo changeArrayIntoJSON("lncpa", array('process'=>'ok', $property));
    }
/*
  ----------------------------------------------------------------------------
  General Get Mandril
  ----------------------------------------------------------------------------
*/
    // SEND MAIL FINANCING NEWSLETTER
    function send_financing_newsletter($lnc_financing_by_model_name, $lnc_financing_by_model_lastname, $lnc_financing_by_model_email, $lnc_financing_by_model_tel, $lnc_financing_by_model_car, $lnc_financing_by_model_concesionarie) {
        try {
            $mandrill = new Mandrill('-M2qid9ztNaYfJvoZWPOHQ');
            $message = array(
                'html' => '
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#303030"style="background-color: rgb(48, 48, 48);">
                        <tr>
                            <td style="background-color: rgba(33, 156, 229, 0.76); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -185px 75%; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                <!-- Mobile Wrapper -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgba(255, 255, 255, 0.5);">
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
                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: rgba(0, 0, 0, 1);" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center" class="logo">

                                                        <!-- Header Text -->
                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="30"></td>
                                                            </tr>
                                                            <tr>
                                                                <td width="300"><span style="float: left; clear: both;"></span></td>
                                                                <td width="50%"><span ></span></td>
                                                                <td width="300"><span style="float: right; clear: both;"><img src="http://lincolngdl.com.mx/img/logo/logo_lincoln_white.png" width="200" alt="" border="0" ></span></td>
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
                                                                    <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Financiamiento ' . $lnc_financing_by_model_car . ' .<!--[if !mso]><!--></span><!--<![endif]-->
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
                                                                                         <i>' . $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Correo:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_email . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Teléfono:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_tel . '</i>
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
                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2015 ' . $lnc_financing_by_model_concesionarie . ' <!--<![endif]--></span><!--[if !mso]><!-->
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
                'subject' => 'Registro newsletter - Financiamiento Lincoln Guadalajara',
                'from_email' => $lnc_financing_by_model_email,
                'from_name' => $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname,
                'to' => array(
                    array(
                        'email' => 'webmaster@medigraf.com.mx',
                        //'email' => 'hevelmo060683@gmail.com',
                        'name' => $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname,
                        'type' => 'to'
                    )
                ),
                'headers' => array('Reply-To' => ''),
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

                'tags' => array('orden-new-notificacion-lincoln-gdl'),
                'google_analytics_domains' => array('http://lincolngdl.com.mx'),
                'google_analytics_campaign' => 'webmaster@medigraf.com.mx',
                'metadata' => array('website' => 'http://lincolngdl.com.mx'),
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
    // SEND MAIL FINANCING
    function send_financing($lnc_financing_by_model_name, $lnc_financing_by_model_lastname, $lnc_financing_by_model_email, $lnc_financing_by_model_tel, $lnc_financing_by_model_car, $lnc_financing_by_model_key, $lnc_financing_by_model_concesionarie, $lnc_financing_by_model_newsletter, $lnc_financing_by_model_subscription, $lnc_financing_by_model_drive, $lnc_financing_by_model_image_model) {
        try {
            $mandrill = new Mandrill('-M2qid9ztNaYfJvoZWPOHQ');
            $message = array(
                'html' => '
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#303030"style="background-color: rgb(48, 48, 48);">
                        <tr>
                            <td style="background-color: rgba(33, 156, 229, 0.76); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -185px 75%; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                <!-- Mobile Wrapper -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgba(255, 255, 255, 0.5);">
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
                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: rgba(0, 0, 0, 1);" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center" class="logo">

                                                        <!-- Header Text -->
                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="30"></td>
                                                            </tr>
                                                            <tr>
                                                                <td width="300"><span style="float: left; clear: both;"></span></td>
                                                                <td width="50%"><span ></span></td>
                                                                <td width="300"><span style="float: right; clear: both;"><img src="http://lincolngdl.com.mx/img/logo/logo_lincoln_white.png" width="200" alt="" border="0" ></span></td>
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
                                                                    <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Financiamiento ' . $lnc_financing_by_model_concesionarie . '. <!--[if !mso]><!--></span><!--<![endif]-->
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
                                                                        <img src="http://lincolngdl.com.mx/img/financing/thumbs/' . $lnc_financing_by_model_image_model . '" alt="" width="45%" style="margin: 0 auto; display: block;">
                                                                        <span style="font-family: Helvetica; font-weight: normal; display: block; text-align: center;">
                                                                            <h4 style="margin-top: 0; margin-bottom: 5px;">Modelo: ' . $lnc_financing_by_model_car . '</h4>
                                                                        </span>
                                                                        <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-top: 5%;">
                                                                        <ol type="1">
                                                                            <li style="list-style-type: none; margin: 0 -30px; display: block;"><b>Usuario</b></li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Nombre (s) y Apellidos:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Correo:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_email . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Teléfono:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_tel . '</i>
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
                                                                                         <i>' . $lnc_financing_by_model_concesionarie . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Prueba de manejo:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_drive . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Subscripción:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_subscription . '</i>
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

                                            <!-- Button Center -->
                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#ffffff"object="drag-module-small" style="background-color: rgba(255, 255, 255, 0.9);">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center">

                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td>
                                                                    <table border="0" cellpadding="0" cellspacing="0" align="left" width="100%">
                                                                        <tr>
                                                                            <td align="center" height="45"bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding-left: 30px; padding-right: 30px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; color: rgba(255, 255, 255, 0.9); background-color: #00a1dc;">
                                                                                <!--[if !mso]><!-->
                                                                                <span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->
                                                                                    <a href="mailto:' . $lnc_financing_by_model_email . '?subject=Cotización de Financiamiento de ' . $lnc_financing_by_model_car . '" style="color: rgba(255, 255, 255, 0.9); font-size: 15px; text-decoration: none; line-height: 34px; width: 100%;">Responder a ' . $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname . '</a>
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
                                                       <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2015 ' . $lnc_financing_by_model_concesionarie . ' <!--<![endif]--></span><!--[if !mso]><!-->
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
                'subject' => 'Financiamiento ' . $lnc_financing_by_model_concesionarie,
                'from_email' => $lnc_financing_by_model_email,
                'from_name' => $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname,
                'to' => array(
                    array(
                        'email' => 'georgina.ramirez@lincolngdl.com.mx',
                        //'email' => 'hevelmo060683@gmail.com',
                        'name' => $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname,
                        'type' => 'to'
                    )
                ),
                'headers' => array('Reply-To' => ''),
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

                'tags' => array('orden-new-notificacion-lincoln-gdl'),
                'google_analytics_domains' => array('http://lincolngdl.com.mx'),
                'google_analytics_campaign' => 'georgina.ramirez@lincolngdl.com.mx',
                'metadata' => array('website' => 'http://lincolngdl.com.mx'),
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
    // SEND MAIL FINANCING CONFIRM
    function send_financing_confirm($lnc_financing_by_model_name, $lnc_financing_by_model_lastname, $lnc_financing_by_model_email, $lnc_financing_by_model_tel, $lnc_financing_by_model_car, $lnc_financing_by_model_concesionarie, $lnc_financing_by_model_newsletter, $lnc_financing_by_model_subscription, $lnc_financing_by_model_drive, $lnc_financing_by_model_image_model) {
        try {
            $mandrill = new Mandrill('-M2qid9ztNaYfJvoZWPOHQ');
            $message = array(
                'html' => '
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#303030"style="background-color: rgb(48, 48, 48);">
                        <tr>
                            <td style="background-color: rgba(33, 156, 229, 0.76); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -185px 75%; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                <!-- Mobile Wrapper -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgba(255, 255, 255, 0.5);">
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
                                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: rgba(0, 0, 0, 1);" object="drag-module-small">
                                                <tr>
                                                    <td width="100%" valign="middle" align="center" class="logo">

                                                        <!-- Header Text -->
                                                        <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                            <tr>
                                                                <td width="100%" height="30"></td>
                                                            </tr>
                                                            <tr>
                                                                <td width="300"><span style="float: left; clear: both;"></span></td>
                                                                <td width="50%"><span ></span></td>
                                                                <td width="300"><span style="float: right; clear: both;"><img src="http://lincolngdl.com.mx/img/logo/logo_lincoln_white.png" width="200" alt="" border="0" ></span></td>
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
                                                                    <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Financiamiento ' . $lnc_financing_by_model_concesionarie . '. <!--[if !mso]><!--></span><!--<![endif]-->
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
                                                                        <img src="http://lincolngdl.com.mx/img/financing/thumbs/' . $lnc_financing_by_model_image_model . '" alt="" width="45%" style="margin: 0 auto; display: block;">
                                                                        <span style="font-family: Helvetica; font-weight: normal; display: block; text-align: center;">
                                                                            <h4 style="margin-top: 0; margin-bottom: 5px;">Modelo: ' . $lnc_financing_by_model_car . '</h4>
                                                                        </span>
                                                                        <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-top: 5%;">
                                                                        <ol type="1">
                                                                            <li style="list-style-type: none; margin: 0 -30px; display: block;"><b>Datos personales</b></li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Nombre (s) y Apellidos:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Correo:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_email . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Teléfono:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_tel . '</i>
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
                                                                                         <i>' . $lnc_financing_by_model_concesionarie . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Prueba de manejo:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_drive . '</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li style="list-style-type: disc;">
                                                                                <b>Subscripción newsletter:</b>
                                                                                <ul>
                                                                                    <li>
                                                                                         <i>' . $lnc_financing_by_model_subscription . '</i>
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
                                                                <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(63, 67, 69); line-height: 24px;">
                                                                    <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->
                                                                    Te hemos asignado un asesor de la concesionaria ' . $lnc_financing_by_model_concesionarie . ' quien se pondrá en contacto contigo para confirmar tus datos y resolver cualquier duda que puedas tener.
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
                                                       <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2015 ' . $lnc_financing_by_model_concesionarie . ' <!--<![endif]--></span><!--[if !mso]><!-->
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
                'subject' => 'Cotización de financiamiento ' . $lnc_financing_by_model_concesionarie,
                'from_email' => $lnc_financing_by_model_email,
                'from_name' => $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname,
                'to' => array(
                    array(
                        'email' => $lnc_financing_by_model_email,
                        //'email' => 'hevelmo060683@gmail.com',
                        'name' => $lnc_financing_by_model_name . ' ' . $lnc_financing_by_model_lastname,
                        'type' => 'to'
                    )
                ),
                'headers' => array('Reply-To' => ''),
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

                'tags' => array('orden-new-notificacion-lincoln-gdl'),
                'google_analytics_domains' => array('http://lincolngdl.com.mx'),
                'google_analytics_campaign' => 'georgina.ramirez@lincolngdl.com.mx',
                'metadata' => array('website' => 'http://lincolngdl.com.mx'),
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
