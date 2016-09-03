<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>AJAX-ZOOM 360/3D Responsive example</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="AJAX-ZOOM 360° responsive implementation" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_15_responsive.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
}
?>
 
<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
    .switchNumber {width: 30px; height: 30px; padding: 5px; cursor: pointer; border-radius: 50%; display: inline-block; margin: 0 10px 10px 0; text-align: center; line-height: 100%; font-size: 20px; background-color: #267cb8; color: white;}
</style>
 
<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript && CSS -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

</head>
<body>
<?php
// This include is just for the demo, you should remove it
include ('navi.php');
?>
<div style="height: 110px; background-color: #B9CC52">
	<h2 style="margin: 0; padding: 25px 10px 0 10px;">AJAX-ZOOM 360/3D responsive example, no PHP code in this file. 
	Integration can be done on the template level.
	</h2>	
</div>

<div style="position: relative;">
	<!-- Basically only an element with any certain ID is needed, we call it AZplayerParentContainer here -->
	<div id="AZplayerParentContainer" style="height: 400px; float: left; width: 80%;"></div>

	<!-- We have made this right element with buttons absolute because while animating jQuery not always makes the best job when animating %, which might break the layout -->
	<div id="naviToTheRight" style="height: 400px; position: absolute; z-index: 1; top: 0px; right: 0px; width: 20%; background-color: #CECECE">
		<div style="padding: 10px">
			Some Javascript driven resizing examples without browser window being resized:<br><br>
			<input type="button" style="width: 170px; text-align: left;" value="Resize to 50% width" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#AZplayerParentContainer, #naviToTheRight').stop(true, false).css('width', '50%'); setTimeout(function(){jQuery.fn.axZm.resizeStart(1)})"><br>
			<input type="button" style="width: 170px; text-align: left;" value="Resize to 500px height" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#AZplayerParentContainer, #naviToTheRight').stop(true, false).css('height', '500px'); setTimeout(function(){jQuery.fn.axZm.resizeStart(1)})"><br>
			<input type="button" style="width: 170px; text-align: left;" value="Resize with animation" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#AZplayerParentContainer').stop(true, false).animate({height: '700px', width: '70%'},{queue: false, easing: 'easeOutCirc', duration: 1500, complete: function(){jQuery.fn.axZm.resizeStart(1);}}); jQuery('#naviToTheRight').stop(true, false).animate({height: '700px', width: '30%'},{queue: false, easing: 'easeOutCirc', duration: 1500})"><br>		
			
			<!-- jQuery.fn.axZm.fillArea can be triggered in certain callbacks, same can be achieved with autoZoom option set in php config file -->
			<input type="button" style="width: 170px; text-align: left;" value="API $.fn.axZm.fillArea" onclick="jQuery.fn.axZm.fillArea({ callback: function(){} });"><br>		
			<input type="button" style="width: 170px; text-align: left;" value="Reset size and zoom" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#AZplayerParentContainer').stop(true, false).css({height: '400px', width: '80%'}); jQuery('#naviToTheRight').stop(true, false).css({height: '400px', width: '20%'}); jQuery.fn.axZm.resizeStart(1,  jQuery.fn.axZm.zoomReset);"><br>
		</div>
		
        <div style="padding: 10px">
            Switch to a different 360 with the API <a href="http://www.ajax-zoom.com/index.php?cid=docs#api_loadAjaxSet">jQuery.fn.axZm.loadAjaxSet</a> API
            <div style="padding-top: 10px">
                <div class="switchNumber" onclick="jQuery.fn.axZm.loadAjaxSet('example=17&3dDir=/pic/bikes/Audacio-400')">1</div>
                <div class="switchNumber" onclick="jQuery.fn.axZm.loadAjaxSet('example=17&3dDir=/pic/bikes/DH-Team')">2</div>
                <div class="switchNumber" onclick="jQuery.fn.axZm.loadAjaxSet('example=17&3dDir=/pic/bikes/Shaper-900')">3</div>
                <div class="switchNumber" onclick="jQuery.fn.axZm.loadAjaxSet('example=17&3dDir=/pic/bikes/XR-Team-Eshock')">4</div>  
            </div>
        </div>
	</div>
</div>
<div style="padding: 10px; float: left; background-color: #F2D3A2;">
	<p>
	If AJAX-ZOOM "responsive" parent container is resized with javascript by e.g. click on a button, then  
	you might want to call jQuery.fn.axZm.resizeStart(3000); when it starts resizing and jQuery.fn.axZm.resizeStart(1); when it definitely ends. 
	No need to do this if your responsive layout is resized by window resize or orinetation change events, AJAX-ZOOM will do it instantly then. 
	</p>
	<p>Also please note that among many, many other settings and design restyles you can also 
	<input type="button" value="disable" onclick="jQuery.axZm.displayNavi=false; jQuery.axZm.fullScreenNaviBar = false; $('#axZm_zoomNavigation').css('display', 'none'); jQuery.fn.axZm.resizeStart(1);"> 
	this <a href="http://www.ajax-zoom.com/index.php?cid=docs#Zoom_Navigation" target="_blank">black tollbar</a> under the player and 
	<input type="button" value="enable" onclick="jQuery.fn.axZm.spinStop(); jQuery.fn.axZm.openFullScreen('../axZm/', 'example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali', {onBeforeStart: function(){jQuery.axZm.spinReverse = false; jQuery('.axZm_zoomContainer').css({backgroundColor: '#FFFFFF'})}}, 'AZplayerParentContainer', false, true);"> 
	a different one if you want. Please also take a look at 
	<a href="example33_responsive.php">example33_responsive.php</a> with hotspots 
	made with <a href="example33.php">hotspots configurator (example33.php)</a>.
	</p>
</div>


<script type="text/javascript">
	// If you are triggering jQuery.fn.axZm.openFullScreen outside of jQuery(document).ready,
	// then make sure it done after your parent container, in this case "AZplayerParentContainer"
	jQuery(document).ready(function() {
		// Define some callbacks
		var callbacks = {
			onBeforeStart: function(){
				// Some of the options can be set directly as js var in this callback, e.g. 
				jQuery.axZm.spinReverse = false;
				// jQuery.axZm.spinReverseZ = true;
			},
 
			onLoad: function(){
				jQuery.axZm.fullScreenExitText = false;
			}
		}
			
		// Define your custom parameter query string
		// example=17 has many presets for 360 images*
		// 3dDir - best of all absolute path to the folder with 360/3D images
		
		// * By defining the query string parameter example=17 
		// some default settings from /axZm/zoomConfig.inc.php are overridden in 
		// /axZm/zoomConfigCustom.inc.php after elseif ($_GET['example'] == 17){. 
		// So if changes in /axZm/zoomConfig.inc.php have no effect - 
		// look for the same options /axZm/zoomConfigCustom.inc.php; 
		// To quickly check a different set of options you can write example=spinIpad
		// which is already preset in /axZm/zoomConfigCustom.inc.php
		
		// Documentation - http://www.ajax-zoom.com/index.php?cid=docs#api_openFullScreen
		jQuery.fn.axZm.openFullScreen('../axZm/', 'example=17&3dDir=/pic/zoom3d/Uvex_Occhiali', callbacks, 'AZplayerParentContainer', false, true);
	});
</script>




</body>
</html>