<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>AJAX-ZOOM 360 fullscreen with Hotspots</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM 360 fullscreen Hotspots"/>
<meta property="og:description" content="AJAX-ZOOM 360 fullscreen with Hotspots"/>
<meta name="description" content="AJAX-ZOOM 360 with Hotspots" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_33_clean.jpg"/> 

<?php
// Set scale for iPhone and disable user scalability
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>


<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0; height: 100%; overflow: hidden;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;} 
</style>
<link rel="stylesheet" type="text/css" href="../axZm/axZm.css" media="all" />
<!-- jQuery core, needed! -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core -->
<script type="text/javascript" src="../axZm/jquery.axZm.js?rand=<?php echo rand().rand().rand();?>"></script>

<!-- Only needed for the click example with fancybox -->
<link href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.zIndex.css" type="text/css" media="screen" rel="stylesheet">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.js"></script>

<!-- A small function to add different type of description, not necessarily needed -->
<link rel="stylesheet" type="text/css" href="../axZm/extensions/jquery.axZm.expButton.css">
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.expButton.min.js"></script>

</head>
<body>

<div id="headerNavi" style="width: 320px; z-index: 2147483647; position: absolute; left: 50%; top: 0; margin-left: -130px;"><?php include ('navi.php');?></div>


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
		jQuery.axZm.spinDemoTime = 2500;
		
		// Set mNavi buttons here if you want
		if (typeof jQuery.axZm.mNavi == 'object'){
			jQuery.axZm.mNavi.order = {mPan: 5, mSpin: 10, mHotspots: 5, mSpinPlay: 0};
			jQuery.axZm.mNavi.mouseOver = true;
			/*
			jQuery.axZm.mNavi.customPos = {
				mHotspots: {
					css: {
						right: 5, 
						bottom: 5, 
						position: 'absolute', 
						zIndex: 123
					}, 
					mouseOver: true
				}
			};
			*/
		}
	},
	onLoad: function(){ // onSpinPreloadEnd
		jQuery.axZm.spinReverse = false;
		// Load hotspots over this function... or just define jQuery.axZm.hotspots here and trigger jQuery.fn.axZm.initHotspots(); after this.
		jQuery.fn.axZm.loadHotspotsFromJsFile('../pic/hotspotJS/eos_1100D.js', false);
 
	} 
};

// Define the path to the axZm folder, adjust the path if needed!
ajaxZoom.path = "../axZm/"; 

// Define your custom parameter query string
// example=spinIpad has many presets for 360 images
// 3dDir - best of all absolute path to the folder with 360/3D images
// ajaxZoom.parameter = "example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali"; 
ajaxZoom.parameter = "example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali/"; 

// Init fullscreen
jQuery.fn.axZm.openFullScreen(ajaxZoom.path, ajaxZoom.parameter, ajaxZoom.opt, 'window', false, true);

</script>

</body>
</html>