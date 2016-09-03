<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM - image map same size as zoom image.</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM - image map outside, custom layout"/>
<meta property="og:description" content="AJAX-ZOOM - outer image map same size as initial image. Autozoom after image loads."/>
<meta name="description" content="AJAX-ZOOM - outer image map same size as initial image. Autozoom after load enabled." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_17.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<!-- jQuery core -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core files -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link rel="stylesheet" href="../axZm/axZm.css" type="text/css">

<!-- This syntaxhighlighter block is only needed to pretify code, you can remove it -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>

<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	
	.clearfix:after {content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;}	 
	.clearfix {display: inline-block;}
	html[xmlns] .clearfix {display: block;}
	* html .clearfix {height: 1%;}

	.aAPI{background-color: #565656; border-radius: 3px; color: white; display: inline-block; font-size: smaller; margin: 3px; padding: 3px; text-decoration: none;}
	.aAPI:hover{background-color: #000000; color:#FFF;}
	.axZm_zoomHorGalleryDescr{display:none;}
	.axZm_zoomContainer{background-color: #FFFFFF;}
	.axZm_zoomMapHolder{border-color: #FFFFFF;}
	.axZm_zoomBorder{background-color: #FFFFFF;}
	#axZm_zoomMapSel{border-color: #2379b5;}  /*#30FF00*/
	#axZm_zoomMapSelArea{background-color: #2379b5;}	
</style>

</head>
<body>
<?php include ('navi.php');?>

<div style='width: 755px; margin: 0px auto; overflow-x: hidden;'>

	<h2>AJAX-ZOOM - experiment: outer "image map" same size as initial image. Autozoom after image loads. Before / after?</h2>
	
	<div class="clearfix" style="padding: 10px; background-color: #3D3D3D">
		<div style="float: left; width: 362px; height: 542px; position: relative;">
			<div id="mapContainer" style="position: absolute; width: 362px; height: 542px; top:-1px;"></div>
		</div>
		<div id="ajaxZoomTest" style="float: right; width: 362px; height: 542px;">Loading, please wait...</div>
	</div>
	
	<div style="text-align: center; padding-top: 5px; position: relative;">
		<div style="position: absolute; top: -2px; right: 0; width: 250px; text-align: right;">Image source: canon.com; Canon EOS 5DS; ISO: 100; 5792x8688px</div>
		<a class="aAPI" href="javascript:void(0)" onclick="jQuery.fn.axZm.zoomSwitchQuick(1)">Image 1</a>
		<a class="aAPI" href="javascript:void(0)" onclick="jQuery.fn.axZm.zoomSwitchQuick(2)">Image 2</a>
	</div>
	
	<h3>About</h3>
	<p style="margin-top: 0;">
		In this example the "image map" is placed outside of AJAX-ZOOM player and has the same size as the player. 
		If you define more than one image which are passed to AJAX-ZOOM, then despite that all galleries are turned off 
		AJAX-ZOOM still knows about the other images. Provided that all images have the same dimensions (width x height) 
		you can switch between the images with the API <code>$.fn.axZm.zoomSwitchQuick()</code>  without losing the zoom state.
	</p>
	
	<!-- Code head -->
	<h3>JavaScript & CSS files in Head</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('
<!-- jQuery core -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core files -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link rel="stylesheet" href="../axZm/axZm.css" type="text/css">
	');
	echo "</pre>";	
	?>
	</div>
	
	<h3>HTML makup in body</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('
<div class="clearfix" style="padding: 10px; background-color: #3D3D3D">
	<div style="float: left; width: 362px; height: 542px; position: relative;">
		<div id="mapContainer" style="position: absolute; width: 362px; height: 542px; top:-1px;"></div>
	</div>
	<div id="ajaxZoomTest" style="float: right; width: 362px; height: 542px;">Loading, please wait...</div>
</div>

<div style="text-align: center; padding-top: 5px; position: relative;">
	<div style="position: absolute; top: -2px; right: 0;">Image source: canon.com</div>
	<a class="aAPI" href="javascript:void(0)" onclick="jQuery.fn.axZm.zoomSwitchQuick(1)">Image 1</a>
	<a class="aAPI" href="javascript:void(0)" onclick="jQuery.fn.axZm.zoomSwitchQuick(2)">Image 2</a>
</div>
	');
	echo "</pre>";	
	?>
	</div>
	
	<h3>JavaScript</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
		echo "<pre class='brush: js; '>";
		echo htmlspecialchars ('
		// Create new object
		var ajaxZoom = {};
		ajaxZoom.opt = {
			onBeforeStart: function(){
				// Not all but some AJAX-ZOOM options can be set inside onBeforeStart callback
				jQuery.axZm.useMap = true;
				jQuery.axZm.mapParent = "mapContainer";
				jQuery.axZm.zoomSlider = true;
				jQuery.axZm.zoomSliderHorizontal = true;
				jQuery.axZm.zoomSliderHeight = 100;
				jQuery.axZm.zoomSliderHandleSize = 11;
				jQuery.axZm.zoomSliderWidth = 5;
				jQuery.axZm.zoomSliderMarginH = 10;
				jQuery.axZm.zoomSliderMarginV = 10;
				jQuery.axZm.zoomSliderPosition = "bottomLeft";
				jQuery.axZm.zoomSliderMouseOver = false;
				
				// Hide AJAX-ZOOM on loading
				$("#axZm_zoomContainer").css("visibility", "hidden");
			},
			onLoad: function(){
				jQuery.fn.axZm.zoomTo({
					x1: "50%",
					y1: "40%",
					speed: 0,
					speedZoomed: 0,
					ajxTo: 0,
					zoomLevel: "100%",
					callback: function(){
						// Show AJAX-ZOOM after zoomTo
						$("#axZm_zoomContainer").css("visibility", "visible");
					}
				});
			},
			onFullScreenCloseEnd: function(){
				setTimeout(function(){
					jQuery.fn.axZm.clearTiles(true);
					jQuery.fn.axZm.zoomTo({
						speed: 0,
						speedZoomed: 0,
						ajxTo: 0,
						zoomLevel: "100%"
					});
				}, 1);
			}
		};
		// Path to the axZm folder
		ajaxZoom.path = "../axZm/"; 
		
		// Define your custom parameter query string
		// By example=19 some settings are overridden in zoomConfigCustom.inc.php
		// zoomData is the php array with images turned into string
		ajaxZoom.parameter = "zoomData=/pic/test/canon_eos_5ds/canon_eos_5ds_sample1.jpg|/pic/test/canon_eos_5ds/canon_eos_5ds_sample1_bw.jpg&example=19"; 
		
		// The id of the Div where ajax-zoom has to be inserted into
		ajaxZoom.divID = "ajaxZoomTest"; 
		
		jQuery(document).ready(function(){
			jQuery.fn.axZm.load({
				opt: ajaxZoom.opt,
				path: ajaxZoom.path,
				parameter: ajaxZoom.parameter,
				divID: ajaxZoom.divID
			});			
		});
	');
	echo "</pre>";	
	?>
	</div>

	<?php
	include ('footer.php');
	?>
	
	<script type="text/javascript">
		// Create new object
		var ajaxZoom = {};
		ajaxZoom.opt = {
			onBeforeStart: function(){
				// Not all but some AJAX-ZOOM options can be set inside onBeforeStart callback
				jQuery.axZm.useMap = true;
				jQuery.axZm.mapParent = "mapContainer";
				jQuery.axZm.zoomSlider = true;
				jQuery.axZm.zoomSliderHorizontal = true;
				jQuery.axZm.zoomSliderHeight = 100;
				jQuery.axZm.zoomSliderHandleSize = 11;
				jQuery.axZm.zoomSliderWidth = 5;
				jQuery.axZm.zoomSliderMarginH = 10;
				jQuery.axZm.zoomSliderMarginV = 10;
				jQuery.axZm.zoomSliderPosition = "bottomLeft";
				jQuery.axZm.zoomSliderMouseOver = false;
				
				// Hide AJAX-ZOOM on loading
				$("#axZm_zoomContainer").css('visibility', 'hidden');
			},
			onLoad: function(){
				jQuery.fn.axZm.zoomTo({
					x1: "50%",
					y1: "40%",
					speed: 0,
					speedZoomed: 0,
					ajxTo: 0,
					zoomLevel: "100%",
					callback: function(){
						// Show AJAX-ZOOM after zoomTo
						$("#axZm_zoomContainer").css('visibility', 'visible');
					}
				});
			},
			onFullScreenCloseEnd: function(){
				setTimeout(function(){
					jQuery.fn.axZm.clearTiles(true);
					jQuery.fn.axZm.zoomTo({
						speed: 0,
						speedZoomed: 0,
						ajxTo: 0,
						zoomLevel: "100%"
					});
				}, 1);
			}
		};
		// Path to the axZm folder
		ajaxZoom.path = "../axZm/"; 
		
		// Define your custom parameter query string
		// By example=19 some settings are overridden in zoomConfigCustom.inc.php
		// zoomData is the php array with images turned into string
		ajaxZoom.parameter = "zoomData=/pic/zoom/fashion/fashion_001.jpg|/pic/zoom/fashion/fashion_002.jpg&example=19"; 
		
		// The id of the Div where ajax-zoom has to be inserted into
		ajaxZoom.divID = "ajaxZoomTest"; 
		
		jQuery(document).ready(function(){
			jQuery.fn.axZm.load({
				opt: ajaxZoom.opt,
				path: ajaxZoom.path,
				parameter: ajaxZoom.parameter,
				divID: ajaxZoom.divID
			});			
		});
	</script>
</div>

</body>
</html>