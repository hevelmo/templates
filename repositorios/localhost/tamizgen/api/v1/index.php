 <?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include '../../incorporate/db_connect.php';
include '../../incorporate/functions.php';
include '../../incorporate/queryintojson.php';
include '../../incorporate/json-file-decode.class.php';
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
    //$app->post('/get/table/:idTable', /*'mw1',*/ 'setTable');
// DELETE
    //$app->get('/del/table/:idTable', /*'mw1',*/ 'delTable');
//TEST
    $app->post('/post/contacto', /*'mw1',*/ 'sendContact');
$app->run();

//Functions
// Contacto
    function sendContact() {
        $property = requestBody();
        $send_ucd_contact_get_name = $property->send_ucd_contact_get_name;
        $send_ucd_contact_get_email = $property->send_ucd_contact_get_email;
        $send_ucd_contact_get_subject = $property->send_ucd_contact_get_subject;
        $send_ucd_contact_get_message = $property->send_ucd_contact_get_message;
        send_contacto($send_ucd_contact_get_name, $send_ucd_contact_get_email, $send_ucd_contact_get_subject, $send_ucd_contact_get_message);
        echo changeArrayIntoJSON("contacto", array('process'=>'ok'));
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
/*
  ----------------------------------------------------------------------------
  General Get Mandril
  ----------------------------------------------------------------------------
*/
  //info@tamizgen.com.mx
  function send_contacto($send_ucd_contact_get_name, $send_ucd_contact_get_email, $send_ucd_contact_get_subject, $send_ucd_contact_get_message) {
    try {
        $mandrill = new Mandrill('2Md4zqh0NKyZcS0weW5Vpg');
        $message = array(
            'html' => '
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#0093D7"style="background-color: rgba(0,147,215,0.9);">
                    <tr>
                        <td style="background-color: rgba(0,147,215,0.9); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -120px -15px; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                            <!-- Mobile Wrapper -->
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgba(0,147,215,0.9);">
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
                                                            <td width="100%"><span ><img src="http://www.tamizgen.medigraf.com.mx/img/logo/logo-tamizgen-hor.png" width="125" alt="" border="0" ></span></td>
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
                                                                <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Información Tamizgen. <!--[if !mso]><!--></span><!--<![endif]-->
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
                                                                    </span>
                                                                    <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-top: 0%;">
                                                                    <ol type="1">
                                                                        <li style="list-style-type: none; margin: 0 -30px; display: block;"></li>
                                                                        <li style="list-style-type: disc;">
                                                                            <b>Nombre</b>
                                                                            <ul>
                                                                                <li>
                                                                                     <i>' . $send_ucd_contact_get_name . '</i>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li style="list-style-type: disc;">
                                                                            <b>Correo:</b>
                                                                            <ul>
                                                                                <li>
                                                                                     <i>' . $send_ucd_contact_get_email . '</i>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li style="list-style-type: disc;">
                                                                            <b>Asunto:</b>
                                                                            <ul>
                                                                                <li>
                                                                                     <i>' . $send_ucd_contact_get_subject . '</i>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ol>
                                                                    <hr style="border: 0; border-top: 1px solid #00a1dc; display: block; width: 100%; margin-bottom: 0%;">
                                                                    <ol type="1">
                                                                        <li style="list-style-type: none; margin: 0 -30px; display: block;"><b>Comentarios</b></li>
                                                                        <li style="list-style-type: none; ">
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                                                                                <a href="mailto:' . $send_ucd_contact_get_email . '?subject=Información Tamizgen" style="color: rgba(255, 255, 255, 0.9); font-size: 15px; text-decoration: none; line-height: 34px; width: 100%;">Responder a ' . $send_ucd_contact_get_name . '</a>
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
                                                   <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2016 Tamizgen Una gota de sangre, un regalo de Vida.  <!--<![endif]--></span><!--[if !mso]><!-->
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
            'subject' => 'Información Tamizgen',
            'from_email' => $send_ucd_contact_get_email,
            'from_name' => $send_ucd_contact_get_name,
            'to' => array(
                array(
                    'email' => 'francisco.romano@ucd.com.mx',
                    //'email' => 'heriberto@medigraf.com.mx',
                    'name' => 'Tamizgen Una gota de sangre, un regalo de Vida',
                    'type' => 'to'
                )
            ),
            'headers' => array('Reply-To' => 'francisco.romano@ucd.com.mx'),
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

            'tags' => array('orden-new-notificacion'),
            'google_analytics_domains' => array('http://tamizgen.com.mx/'),
            'google_analytics_campaign' => 'francisco.romano@ucd.com.mx',
            'metadata' => array('website' => 'http://tamizgen.com.mx/'),
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
