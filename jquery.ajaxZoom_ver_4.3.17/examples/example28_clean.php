<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>3D/360° rotate javascript</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="Nice looking 360° jQuery spin rotate tool with custom buttons. Works very good on iPad." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_28_clean.jpg"/> 

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
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	
</style>

<!-- Include jQuery core into head section if not already present -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link type="text/css" href="../axZm/axZm.css" rel="stylesheet" />

</head>
<body>
<?php
// This include is just for the demo, you should remove it
include ('navi.php');
?>
<h2 style="margin-left: 10px">3D/360° rotate javascript clean example</h2>

<DIV id='test' style='margin-left: 10px; width: 720px; min-height: 480px; color: gray; border: #CCCCCC 1px solid'>
	<DIV style='margin: 0; padding-top: 175px; padding-left: 260px; min-height: 225px; background: url(../axZm/icons/ajax-loader-bar.gif) center center no-repeat;'>
	Loading, please wait...
	</DIV>
</DIV>


<!--  Init AJAX-ZOOM player -->
<script type="text/javascript">
// Create empty jQuery object
var ajaxZoom = {};  

// The ID of the element where ajax-zoom has to be inserted into
ajaxZoom.divID = "test";

// Define the path to the axZm folder, adjust the path if needed!
ajaxZoom.path = "../axZm/"; 

// Define your custom parameter query string
// example=spinIpad has many presets for 360 images
// 3dDir - best of all absolute path to the folder with 360/3D images
// ajaxZoom.parameter = "example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali"; 
ajaxZoom.parameter = "example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali/"; 

// Define callbacks, for complete list check the docs
ajaxZoom.opt = {
	onBeforeStart: function(){
		// Set backgrounf color, can also be done in css file
		jQuery('.zoomContainer').css({backgroundColor: '#FFFFFF'});		
	},
	onSpinPreloadEnd: function(){ 
 		// do things
	} 
};

// load AJAX-ZOOM not responsive
$(document).ready(function(){
	$.fn.axZm.load({
		path: ajaxZoom.path,
		opt: ajaxZoom.opt,
		parameter: ajaxZoom.parameter,
		divID: ajaxZoom.divID
	});
});
</script>

</body>
</html>