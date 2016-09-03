<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>iPad style 3D/360° html5 fullscreen example</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="iPad style 3D/360° html5 fullscreen example"/>
<meta property="og:description" content="html5 spin rotate tool for iPad example."/>
<meta name="description" content="html5 spin rotate tool for iPad example." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_28_fullscreen.jpg"/> 

<?php
// Set scale for iPhone and disable user scalability
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<link rel="stylesheet" type="text/css" href="../axZm/axZm.css" media="all" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="../axZm/plugins/ios6TimersFix.min.js"></script>
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0; height: 100%; overflow: hidden;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
</style>

</head>
<body>

<!-- Page navi, not needed -->
<div id="headerNavi" style="width: 320px; z-index: 2147483647; position: absolute; left: 50%; top: 0; margin-left: -160px;"><?php include ('navi.php');?></div>
 
<!--  Init AJAX-ZOOM player -->
<script type="text/javascript">
	// Create empty jQuery object
	var ajaxZoom = {}; 
	 
	// Define callbacks, for complete list check the docs
	ajaxZoom.opt = {
		onBeforeStart: function(){
			// Set backgrounf color, can also be done in css file
			jQuery('.axZm_zoomContainer').css({backgroundColor: '#FFFFFF'});	
			jQuery.axZm.fullScreenCornerButton = false;
			jQuery.axZm.fullScreenExitText = false;
		}
	};

	// Define the path to the axZm folder, adjust the path if needed!
	ajaxZoom.path = "../axZm/"; 

	// Define your custom parameter query string
	// example=spinIpad has many presets for 360 images
	// 3dDir - best of all absolute path to the folder with 360/3D images
	// ajaxZoom.parameter = "example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali"; 
	ajaxZoom.parameter = "example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali"; 

	// Init fullscreen
	jQuery.fn.axZm.openFullScreen(ajaxZoom.path, ajaxZoom.parameter, ajaxZoom.opt, 'window', false, true);
</script>

</body>
</html>