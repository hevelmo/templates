<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>3D Spin Rotate & Zoom Clean Example</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="AJAX-ZOOM 360° clean example" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_15_clean.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
}
?>
 
<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript && CSS -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<style type="text/css">
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
</style>
</head>
<body>
<?php
// This include is just for the demo, you should remove it
include ('navi.php');
?>
	<h2 style="margin-left: 10px">Clean 360 example, no PHP needed at frontend</h2>

	<!--  Placeholder for AJAX-ZOOM player -->
	<DIV id="AZplayerParentContainer" style='margin: 5px 0px 0px 10px; width: 602px; min-height: 400px; color: gray;'>
		<DIV style="margin: 0; padding-top: 175px; padding-left: 200px; min-height: 225px; background: url(../axZm/icons/ajax-loader-bar.gif) center center no-repeat;">
		Loading, please wait...
		</DIV>
	</DIV>

	<!--  Init AJAX-ZOOM player and make some checks -->
	<script type="text/javascript">

	// Create empty jQuery object which is interpreted in axZm/jquery.axZm.loader.js
	var ajaxZoom = {}; 
	
	// Define callbacks, for complete list check the docs
	// http://www.ajax-zoom.com/index.php?cid=docs#API_CALLBACKS
	ajaxZoom.opt = {
		onBeforeStart: function(){
			// Some of the options can be set directly as js var in this callback
			jQuery.axZm.spinReverse = false;
			// jQuery.axZm.spinReverseZ = true;
			
			// Optionally perform some DOM manipulations
			jQuery('.axZm_zoomContainer').css({backgroundColor: '#FFFFFF'});
		}
	};
	
	// Define the path to the axZm folder, adjust the path if needed!
	ajaxZoom.path = "../axZm/"; 
	
	// Define your custom parameter query string
	// example=17 has many presets for 360 images*
	// 3dDir - best of all absolute path to the folder with 360/3D images
	
	
	// *By defining the query string parameter in ajaxZoom.parameter example=17 
	// some default settings from /axZm/zoomConfig.inc.php are overridden in 
	// /axZm/zoomConfigCustom.inc.php after elseif ($_GET['example'] == 17){. 
	// So if changes in /axZm/zoomConfig.inc.php have no effect - 
	// look for the same options /axZm/zoomConfigCustom.inc.php; 
	ajaxZoom.parameter = "example=17&3dDir=/pic/zoom3d/Uvex_Occhiali"; 
	
	// The ID of the element (placeholder) where AJAX-ZOOM has to be inserted into
	ajaxZoom.divID = "AZplayerParentContainer";
	
	 
	
	// Instead of using the loader file jquery.axZm.loader.js (see below)
	// you can use http://www.ajax-zoom.com/index.php?cid=docs#api_load
	// Following files need to be loaded before jQuery.fn.axZm.load is triggered:
	// 1. jQuery core (e.g. http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js), 
	// 2. /axZm/jquery.axZm.js (AJAX-ZOOM core file) 
	// 3. /axZm/axZm.css (AJAX-ZOOM css)
	// Do not use jQuery.fn.axZm.load and /axZm/jquery.axZm.loader.js together!

	jQuery(document).ready(function(){
		jQuery.fn.axZm.load({
			opt: ajaxZoom.opt,
			path: ajaxZoom.path,
			parameter: ajaxZoom.parameter,
			divID: ajaxZoom.divID
		});			
	});
 
	</script>

</body>
</html>