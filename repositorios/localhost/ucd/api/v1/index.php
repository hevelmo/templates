<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include '../../incorporate/db_connect.php';
include '../../incorporate/functions.php';
include '../../incorporate/queryintojson.php';
include '../Mandrill.php';
//sec_session_start();
date_default_timezone_set('America/Mexico_City');
setlocale(LC_MONETARY, 'en_US');

/**
 *
 * [Initial V 1.0]
 *
*/
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
*/
// POST route
$app->post('/post/contacto', /*'mw1',*/ 'sendContact');
// INSERT
//$app->post('/new/table', /*'mw1',*/ 'addTable');
// UPDATE
//$app->post('/set/table/:idTable', /*'mw1',*/ 'setTable');
// GET route
// SELECT
//$app->get('/get/table', /*'mw1',*/ 'getTable');
// DELETE
//$app->get('/del/table/:idTable', /*'mw1',*/ 'delTable');
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
        $sql = "INSERT INTO proTable(TAB_Field)
                VALUES(:field)";
        $structure = array();
        $params = array(
            'field' => trim($property->field),
        );
        echo changeQueryIntoJSON('propa', $structure, getConnection(), $sql, $params, 1, PDO::FETCH_ASSOC);
    }
    // UPDATE
    function setTable($idTable) {
        $property = requestBody();
        $sql = "UPDATE proTable
                SET TAB_Field = :field
                WHERE TAB_Id = :tabId";
        $structure = array();
        $params = array(
            'tabId' => $idTable,
            'field' => trim($property->field)
        );
        echo changeQueryIntoJSON('propa', $structure, getConnection(), $sql, $params, 2, PDO::FETCH_ASSOC);
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
        $sql = "DELETE FROM proTable WHERE TAB_Id = :tabId";
        $structure = array();
        $params = array(
            'tabId' => $idTable
        );
        echo changeQueryIntoJSON('propa', $structure, getConnection(), $sql, $params, 3, PDO::FETCH_ASSOC);
    }
/*
  ----------------------------------------------------------------------------
  General Get Mandril
  ----------------------------------------------------------------------------
*/
function send_contacto($send_ucd_contact_get_name, $send_ucd_contact_get_email, $send_ucd_contact_get_subject, $send_ucd_contact_get_message) {
    try {
        $mandrill = new Mandrill('ZdaUllX_VFw7DWFyZXcTqg');
        $message = array(
            'html' => '
                <html>
                    <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
                    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                    <style>
                        html{width: 100%;}
                        * {
                            margin: 0 auto;
                            padding: 0;
                        }
                        body{
                            font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
                            background: rgba(225, 222, 223, 1) !important;
                            -moz-osx-font-smoothing: grayscale;
                            -webkit-font-smoothing: antialiased;
                            color: #777;
                            font-size: 14px;
                            line-height: 24px;
                            text-transform: uppercase;
                        }
                        .ExternalClass {
                            font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
                            background: rgba(225, 222, 223, 1) !important;
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

                        <div style="background-color: rgba(36, 102, 175, 1); padding: 20px;border-bottom: 0px" width="600">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="background-color: rgba(255,255,255, 1); border-radius: 5px;">
                                <tbody>
                                    <tr>
                                        <td width="11"></td>
                                        <td style="background-color: rgba(255, 255, 255, 1); border: 1px solid rgba(255, 255, 255, 1); border-bottom: 0px" width="600">
                                            <table style="padding: 13px 17px 17px" border="0" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td height="15" width="100">
                                                            <p style="display: block; color:#ffffff;font-family: ProximaNovaRegular,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:24px;text-align:center;padding:0;text-transform: uppercase;">
                                                                <img src="http://www.ucd.medigraf.com.mx/img/ucd-corp.png" alt="Modelo" width="150">
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td width="11"></td>
                                    </tr>
                                    <tr>
                                        <td height="11" valign="top" width="11"></td>
                                        <td rowspan="2" style="border:1px solid #fff;border-top:0" bgcolor="#ffffff">
                                            <table style="padding:15px 5px 15px;" border="0" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td height="20" valign="top" width="150">
                                                            <strong style="color: #2466AF; font-family: ProximaNovaSemibold,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
                                                                Nombre(s):
                                                            </strong>
                                                        </td>
                                                        <td height="20" valign="top">
                                                            <span style="font-family: ProximaNovaRegular,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: left; padding: 0">'
                                                                .$send_ucd_contact_get_name.'
                                                            </span><br>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="20" valign="top" width="150">
                                                            <strong style="color: #2466AF; font-family: ProximaNovaSemibold,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
                                                                Asunto:
                                                            </strong>
                                                        </td>
                                                        <td height="20" valign="top">
                                                            <span style="font-family: ProximaNovaRegular,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: left; padding: 0">'
                                                                .$send_ucd_contact_get_subject.'
                                                            </span><br>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="20" valign="top" width="150">
                                                            <strong style="color: #2466AF; font-family: ProximaNovaSemibold,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 900; text-align: right; padding: 0">
                                                                Correo Electrónico:
                                                            </strong>
                                                        </td>
                                                        <td height="20" valign="top">
                                                            <span style="font-family: ProximaNovaRegular,Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: left; padding: 0">
                                                                '.$send_ucd_contact_get_email.'
                                                            </span><br>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table style="padding:20px 15px 20px 15px;border-top:1px solid #058CCD" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td height="20" width="400" valign="top">
                                                            <span style="font-family: ProximaNovaRegular,Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 12px; padding: 15px; text-align: justify; display: block; word-break: break-all;">
                                                                '.$send_ucd_contact_get_message.'
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table style="padding:20px 15px 20px 15px;border-top:1px solid #058CCD" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p style="color: #2466AF; font-family: Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 11px; text-align: center; padding: 0">
                                                                &nbsp;© 2015 / UCD Unidad Clínica Diagnóstica
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td height="11" valign="top" width="11"></td>
                                    </tr>
                                    <tr>
                                        <td width="11"></td>
                                        <td width="11"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </body>
                </html>
            ',
            'subject' => 'Contacto',
            'from_email' => $send_ucd_contact_get_email,
            'from_name' => $send_ucd_contact_get_name,
            'to' => array(
                array(
                    'email' => 'francisco.romano@ucd.com.mx',
                    //'email' => 'heriberto@medigraf.com.mx',
                    'name' => 'UCD Unidad Clínica Diagnóstica',
                    'type' => 'to'
                )
            ),
            'headers' => array('Reply-To' => 'ucd_info@ucd.mx'),
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
            'google_analytics_domains' => array('http://camcar.mx/'),
            'google_analytics_campaign' => 'marina.reyes@camcar.mx',
            'metadata' => array('website' => 'http://camcar.mx/'),

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
