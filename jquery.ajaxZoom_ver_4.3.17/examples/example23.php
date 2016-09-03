<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Fullscreen image zoom with pyramid tiles gigapix images on iPad</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Fullscreen image zoom with pyramid tiles gigapix images on iPad"/>
<meta property="og:description" content="AJAX-ZOOM is capeable of displaying gigapix images / panoramas even on iPad and other touch devices. "/>
<meta name="description" content="AJAX-ZOOM is capeable of displaying gigapix images / panoramas even on iPad and other touch devices. " />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_23.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0; overflow: hidden;}
	body {margin: 0; padding: 0; height: 100%; overflow: hidden;}
</style>


<!-- jQuery core, needed! -->
<script type="text/javascript" src="../axZm/plugins/jquery-1.8.3.min.js"></script>

<!-- AJAX-ZOOM core, needed! -->
<link rel="stylesheet" href="../axZm/axZm.css" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

</head>

<body>

<!-- Page navi, not needed -->
<div id="headerNavi" style="width: 320px; z-index: 2147483647; position: absolute; left: 50%; top: 0; margin-left: -160px;"><?php include ('navi.php');?></div>

<script type="text/javascript">
	jQuery(document).ready(function() {
		// IE Fix
		jQuery('body').css({
			height: jQuery(window).height()
		});

		// AJAX-ZOOM callbacks
		var callbacks = {
			onBeforeStart: function(){
				// Not all, but sime options from config file can be set with JS in onBeforeStart callback
				// With the following options we just disable animation while mousewheel scrolling
				// Ofcourse you can change these in the php config file too, 
				// in this particular example in /axZm/zoomConfigCustom.inc.php after elseif ($_GET['example'] == 24){
				
				$.axZm.scrollAnm = false;
				$.axZm.scrollZoom = 11;
				$.axZm.scrollAjax = 200;
				$.axZm.pyrTilesFadeInSpeed = 300;
				$.axZm.pyrTilesFadeLoad = 300;
				$.axZm.dragMap = false;
			}
		}
		
		// Init AJAX-ZOOM
		jQuery.fn.axZm.openFullScreen('../axZm/', 'zoomData=/pic/zoom/high_res/high_res_001.jpg&example=24', callbacks, 'window', false, true, true);
	});
</script>

</body>
</html>
 