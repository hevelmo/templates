<?php

//include_once '../../incorporate/db_connect.php';
include_once '../../incorporate/functions.php';
include_once '../../incorporate/queryintojson.php';
include_once '../Mandrill.php';

/**
 *
 * [Initial V 2.0]
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
//$app->get('/get_test', 'get_hi');
// POST route
    $app->post('/post/contact', /*'mw1',*/ 'send_form_contact');
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
    // NEW FORM FINNACING BY MODELS
    function send_form_contact() {
        $property = requestBody();
        $devserverlist = array('127.0.0.1','::1','192.168.0.102','localhost');
        $server = 'mayomanzo.medigraf.com.mx';
        $local = 'localhost:8033/mayomanzo';
        $medio = (!in_array($_SERVER['SERVER_NAME'], $devserverlist)) ? $server : $local;

        $contact_firstname = $property->firstname;
        $contact_lastname = $property->lastname;
        $contact_phone = $property->phone;
        $contact_email = $property->email;
        $contact_message = $property->message;

        contact_main($contact_firstname, $contact_lastname, $contact_phone, $contact_email, $contact_message, $medio);
        echo changeArrayIntoJSON("mampa", array('process'=>'ok', $property));
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
        Notification Methods
  ----------------------------------------------------------------------------
*/
/*
  ----------------------------------------------------------------------------
  FINANCING BY MODELS
  ----------------------------------------------------------------------------
*/
    // SEND FINANCING BY MODEL
        function contact_main($contact_firstname, $contact_lastname, $contact_phone, $contact_email, $contact_message, $medio) {
            try {
                $mandrill = new Mandrill('UruJXTW6BPsaxh14Q2nmyA');
                $message = array(
                    'html' => '
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#f3efeb"style="background-color: rgb(48, 48, 48);">
                            <tr>
                                <td style="background-color: #f3efeb; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -120px -15px; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                    <!-- Mobile Wrapper -->
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: #f3efeb;">
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
                                                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" bgcolor="#4edeb5" style="border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: #3FA7D6;" object="drag-module-small">
                                                    <tr>
                                                        <td width="100%" valign="middle" align="center" class="logo">

                                                            <!-- Header Text -->
                                                            <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter2">
                                                                <tr>
                                                                    <td width="100%" height="30"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="100%"><span ><img src="http://'. $medio . '/img/logo/skin-surgery-white.png" width="250" alt="" border="0" ></span></td>
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
                                                                        <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal; text-align: center; display: block;"><!--<![endif]-->Contacto Mayo Manzo<!--[if !mso]><!--></span><!--<![endif]-->
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
                                                                            <ol type="1">
                                                                                <li style="list-style-type: none; margin: 0 -30px; display: block;"><b>Usuario</b></li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Nombre (s) y Apellidos:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $contact_firstname . ' ' . $contact_lastname . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Correo:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $contact_email . '</i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li style="list-style-type: disc;">
                                                                                    <b>Teléfono:</b>
                                                                                    <ul>
                                                                                        <li>
                                                                                             <i>' . $contact_phone . '</i>
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
                                                                                ' . $contact_message . '
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
                                                                                <td align="center" height="45" bgcolor="#EE6352" style="border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; padding-left: 30px; padding-right: 30px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; color: rgba(255, 255, 255, 0.9); background-color: #EE6352;">
                                                                                    <!--[if !mso]><!-->
                                                                                    <span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->
                                                                                        <a href="mailto:' . $contact_email . '?subject=Contact Mayo Manzo" style="color: rgba(255, 255, 255, 0.9); font-size: 15px; text-decoration: none; line-height: 34px; width: 100%;">Responder a ' . $contact_firstname . ' ' . $contact_lastname . '</a>
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
                                                        <td valign="middle" width="100%" style="text-align: left; font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgba(0, 0, 0, 0.9); line-height: 24px; text-align: center">
                                                            <!--[if !mso]><!--><span style="font-family: Helvetica; font-weight: normal;"><!--<![endif]-->&copy; 2016 Mayo Manzo <!--<![endif]--></span><!--[if !mso]><!-->
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
                    'subject' => 'Contact Mayo Manzo.',
                    'from_email' => 'noreply@max-app.net',
                    'from_name' => $contact_firstname . ' ' . $contact_lastname,
                    'to' => array(
                        /*
                        array(
                            'email' => 'hevelmo060683@gmail.com',
                            'name' => 'Contacto Mayo Manzo.',
                            'type' => 'to'
                        )
                        */
                        array(
                            'email' => 'drmayomanzo@gmail.com',
                            'name' => 'Contacto Mayo Manzo.',
                            'type' => 'to'
                        )
                    ),
                    'headers' => array('Reply-To' => 'drmayomanzo@gmail.com'),
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

                    'tags' => array('orden-new-notificacion', 'contacto-mayo-manzo'),
                    'google_analytics_domains' => array('http://'.$medio),
                    'google_analytics_campaign' => 'drmayomanzo@gmail.com',
                    'metadata' => array('website' => 'http://'.$medio),
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
        function send_financing_by_model_confirm($leads_model_concesionaria, $model_name, $name, $lastname, $email, $tel, $message, $image_model, $name_model, $date_format, $source, $medio, $leads_model_url, $send_email_concessionaire) {
            try {
                $mandrill = new Mandrill('-M2qid9ztNaYfJvoZWPOHQ');
                $message = array(
                    'html' => '
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full2"  bgcolor="#303030"style="background-color: rgb(48, 48, 48);">
                            <tr>
                                <td style="background-color: rgba(0,161,220,0.3); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: -120px -15px; background-attachment: fixed; background-repeat: no-repeat;" id="not6">

                                                        <!-- Mobile Wrapper -->
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile2" style="background: rgba(0, 161, 220, 0.3);">
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
                                                                    <td width="100%"><span ><img src="http://suzukigdl.com.mx/img/template/common/header/horizontal_logo.png" width="125" alt="" border="0" ></span></td>
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
                                                                        Te hemos asignado un asesor Suzuki de la concesionaria ' . $source . ' quien se pondrá en contacto contigo para confirmar tus datos y resolver cualquier duda que puedas tener.
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
                    'subject' => 'Financiamiento - Solicitud de cotización '.$name_model,
                    'from_email' => 'noreply@max-app.net',
                    'from_name' => $name . ' ' . $lastname,
                    'to' => array(
                        array(
                            'email' => $email,
                            //'email' => 'hevelmo060683@gmail.com',
                            'name' => $name . ' ' . $lastname,
                            'type' => 'to'
                        )
                    ),
                    'headers' => array('Reply-To' => $send_email_concessionaire),
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

                    'tags' => array('orden-new-notificacion-suzuki-gdl', 'Financiamiento mensaje de confirmación'),
                    'google_analytics_domains' => array('http://'.$leads_model_url),
                    'google_analytics_campaign' => $send_email_concessionaire,
                    'metadata' => array('website' => 'http://'.$leads_model_url),

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