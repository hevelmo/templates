<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>AJAX-ZOOM 360 Fullscreen clean example</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="AJAX-ZOOM 360° initialized at fullscreen" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_15_fullscreen.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
}
?>
 
<style type="text/css">
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
</style>
 
<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript && CSS -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

</head>
<body>

<!-- Page navi, not needed -->
<div id="headerNavi" style="width: 320px; z-index: 2147483647; position: absolute; left: 50%; top: 0; margin-left: -160px;"><?php include ('navi.php');?></div>

<!-- No HTML required -->
<script type="text/javascript">
	jQuery(document).ready(function() {
		// IE Fix
		jQuery('body').css({
			height: (window.innerHeight ? window.innerHeight : $(window).height())
		});
		
		//define some callbacks
		var callbacks = {
			onBeforeStart: function(){
				// Some of the options can be set directly as js var in this callback
				jQuery.axZm.spinReverse = true;
				// jQuery.axZm.spinReverseZ = true;
				jQuery.axZm.fullScreenCornerButton = false;
				jQuery.axZm.fullScreenExitText = false;
			}
		};
		
		// Documentation - http://www.ajax-zoom.com/index.php?cid=docs#api_openFullScreen
		jQuery.fn.axZm.openFullScreen('../axZm/', '3dDir=/pic/zoom3d/Uvex_Occhiali&example=17', callbacks, 'window', false, true);
	});
</script>

</body>
</html>