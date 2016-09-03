<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>iPad style 3D/360° html5 spin rotate and zoom with no navigationbar and custom buttons</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="iPad style 360° html5 spin rotate and zoom with no navigationbar and custom buttons"/>
<meta property="og:description" content="Nice looking 360° html5 spin rotate tool with custom buttons. Works very good on iPad."/>
<meta name="description" content="Nice looking 360° html5 spin rotate tool with custom buttons. Works very good on iPad." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_28.jpg"/> 

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

<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript && CSS -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>


<!--  syntaxhighlighter is not needed, you can remove this block along with SyntaxHighlighter.all(); below -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>

</head>
<body>

<?php
// This include is just for the demo, you can remove it
include ('navi.php');
?>

<div style="width: 720px; margin: 0 auto;">
	<h2>iPad style 3D/360° rotate example with no navigationbar and custom buttons</h2>
	
	<div id='AZplayerParentContainer' style='width: 720px; min-height: 480px; color: gray; border: #CCCCCC 1px solid'>
		<div style='margin: 0; padding-top: 175px; padding-left: 260px; min-height: 225px; background: url(../axZm/icons/ajax-loader-bar.gif) center center no-repeat;'>
		Loading, please wait...
		</div>
	</div>
	
	<div>
		<p>Yes, it is possible to achieve full control over spin, zoom and pan of a 3D/360° object with just two buttons. 
		In this example the navigation bar, as well as spin and zoom sliders are deactivated. 
		Instead there are only two custom buttons placed directly over the player. 
		<strike>They are injected with JavaScript over callback function - see sourcecode.</strike> 
		Update: Ver. 4.0+ no need to use callbacks any more for this. 
		Just configure <a href="http://www.ajax-zoom.com/index.php?cid=docs#mNavi">mNavi</a> option.
		</p>
		<p>The example object loaded into the player on www.ajax-zoom.com is a multilevel (multirow) 3D one. 
		However it makes no difference to a regular 360° product spin with just one row.
		</p>
		<p>The only difference between regular 360 spin and multirow is that original images are placed in subfolders of the target folder. 
		E.g. the path passed to the folder is ajaxZoom.parameter = "example=17&3dDir=/pic/zoomVR/nike"; 
		images of each row are placed in subfolders, e.g. /pic/zoomVR/nike/0, /pic/zoomVR/nike/15, /pic/zoomVR/nike/30, 
		/pic/zoomVR/nike/45, /pic/zoomVR/nike/60, /pic/zoomVR/nike/75, /pic/zoomVR/nike/90; 
		It is not important how these subfolders are named (e.g. it could be row1, row2 ...) 
		and you also do not need to define these subfolder names anywhere. 
		AJAX-ZOOM will instantly detect them and proceede all the images in them. 
		</p>
		<img src="http://www.ajax-zoom.com/pic/layout/3d_files.png" alt="" />
		<p>Many more examples and information on 360° spins can be found in 
		<a href="http://www.ajax-zoom.com/examples/example15.php">example15.php</a>. 
		In the <a href="http://www.ajax-zoom.com/index.php?cid=docs#VR_Object">docs</a> you will find more options to adjust 360 spin tool.
		</p>
		<p><a href="http://www.ajax-zoom.com/examples/example28_fullscreen.php">See this example initializing at fullscreen mod</a>
		</p> 
	</div>
	<?php
	// This include is just for the demo, you can remove it
	include ('footer.php');
	?>
</div>


<!--  Init AJAX-ZOOM player -->
<script type="text/javascript">
	// Create empty jQuery object
	var ajaxZoom = {}; 

	// Define callbacks, for complete list check the docs
	ajaxZoom.opt = {
		onBeforeStart: function(){
			// Set backgrounf color, can also be done in css file
			jQuery('.zoomContainer').css({backgroundColor: '#FFFFFF'});		
		}
	};

	// Define the path to the axZm folder, adjust the path if needed!
	ajaxZoom.path = "../axZm/"; 
	
	// The ID of the element where ajax-zoom has to be inserted into
	ajaxZoom.divID = "AZplayerParentContainer";

	// Define your custom parameter query string
	// example=spinIpad has many presets for 360 images
	// 3dDir - best of all absolute path to the folder with 360/3D images
	// ajaxZoom.parameter = "example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali"; 
	ajaxZoom.parameter = "example=spinIpad"; 
	
	ajaxZoom.parameter += "&3dDir=/pic/zoom3d/Uvex_Occhiali/";

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