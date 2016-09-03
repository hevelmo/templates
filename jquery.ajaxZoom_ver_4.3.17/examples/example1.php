<?php
if(!session_id()){session_start();}

unset ($_SESSION['imageZoom']);
$_SESSION['imageZoom']=array();

if (!isset($_GET['example'])){
	$_GET['example'] = 10;
}

if (!isset($_GET['zoomID']) && !isset($_GET['zoomDir']) && !isset($_GET['zoomData']) && !isset($_GET['3dDir'])){
	$_GET['zoomID'] = 1;
}

if (!isset($_GET['zoomDir']) && !isset($_GET['zoomData']) && !isset($_GET['3dDir'])){
	$_GET['zoomDir'] = 'animals';
}

// This will read the directory structure of $zoom['config']['pic'] 
// and make it available in $zoomTmp['folderArray'] / $zoom['config']['folderArray'] (see /axZm/zoomObjects.inc.php)
// and as jQuery.axZm.folderArray
if (!isset($_GET['iframe'])){
	$axZmScanDir = true;
}	

require ('../axZm/zoomInc.inc.php');

if (!isset($_GET['iframe'])){
	$zoom['config']['visualConf'] = true;
}

// For iframe
$bodyStyle='';
if (isset($_GET['iframe'])){$bodyStyle = " style='background-image: none'";}

// Doctype, only for demo
echo $axZmH->setDoctype($zoom['config']['doctype']);
 
echo "
<head>
<title>JavaScript image deep ZOOM gallery PHP / ASP.NET visual configurator</title>
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
<meta http-equiv=\"imagetoolbar\" content=\"no\">

<meta property=\"og:type\" content=\"article\"/>
<meta property=\"og:title\" content=\"JavaScript image deep ZOOM gallery PHP / ASP.NET visual configurator\"/>
<meta property=\"og:description\" content=\"Embeded example of JavaScript zoom gallery with a possibility to visually change some options such as gallery types, motions, positions, colors, watermarking, image quality, sizes and many others. \"/>
<meta name=\"description\" content=\"Embeded example of JavaScript zoom gallery with a possibility to visually change some options such as gallery types, motions, positions, colors, watermarking, image quality, sizes and many others. \" />
<meta property=\"og:image\" content=\"http://www.ajax-zoom.com/pic/layout/image-zoom_1.jpg\"/> 
";
 
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
}

echo '
<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 10px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {margin-left: 10px;}
</style>
';

// Returns all needed css stylesheets
echo $axZmH->drawZoomStyle($zoom);

/* Returns all needed js files
First parameter $zoom is the config array, 
with the second parameter $exclude you can exclude certain javascripts, 
e.g. if already jquery core library is included, write $exclude = array('jquery');
if jqzery ui is also already present on your page, write $exclude = array('jquery', 'ui.core')
*/
echo $axZmH->drawZoomJs($zoom, $exclude = array()); 

/* Returns all needed js configuration parameters
Second parameter $rn - linebreak
Third parameter will "pack" and obfuscate javascript
*/
echo $axZmH->drawZoomJsConf($zoom, $rn = false, $pack = true);

#############################
## Returns jquery "onLoad" ##
#############################
// Returns window onload javascript (the init function of ajax zoom)
echo $axZmH->drawZoomJsLoad($zoom, $pack = true, $windowLoad = true, $jsObject = false);

echo"
</head>
<body$bodyStyle>
";

if (!isset($_GET['iframe'])){
	include ('navi.php');
	echo "<h2>Special image zoom</h2>";
	echo "<p style='width: 745px;'><span style='color: red'>!important</span> most likely, to 99.5% 
	particularly this is <b>not</b> what you are looking for! 
	<b>Do not use this example unless you understand why it is different</b> and decide that you need it: 
	in this example AJAX-ZOOM crops a portion of the image directly from the original image or 
	it stitches image tiles and crops them before sending the zoom as one image to the browser; 
	in all other examples only the image tiles are loaded and the server does not have to perform this \"heavy\" work. 
	</p>";
}

// Rerurn AJAX-ZOOM html
echo "<div style='".(isset($_GET['iframe']) ? 'padding: 0' : 'padding: 10px')."'>"; 
	echo $axZmH->drawZoomBox($zoom, $zoomTmp);
echo "</div>";


if (!isset($_GET['iframe'])){
	echo "<p style='width: 745px;'>With some additional configurations 
	this example offers probably the best protection of your original image 
	available on the market, even suitable for stock image companies aiming 
	to sell their images. It is however not the best solution for online shops, 
	companies which just want to present some high resolution images and the like. 
	For these purposes please use any other examples / options sets.
	</p>";
	
	echo "<p style='width: 745px;'>If you need to crop out of the source image 
		or just get the coordinates to crop it manually e.g. from gigapix image 
		for printing later, please see <a href='example10.php'>example10.php</a>; 
		anyway, if you are not sure which example is suitable for you, 
		please ask AJAX-ZOOM team. We will be glad to give you an advice and 
		point you into the right direction...
	</p>";
	
	echo "<div style='width: 745px; margin-left: 10px;'>";
	include ('footer.php');
	echo "</div>";
}
echo '</body></html>';
?>