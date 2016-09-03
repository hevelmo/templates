<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM - high resolution 360 animations with zoom & pan</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM - high resolution 360 animations with zoom & pan"/>
<meta property="og:description" content=" "/>
<meta name="description" content=" " />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_19.jpg"/> 

 <?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<!-- jQuery core, needed if not already present! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  Include AJAX-ZOOM javascript && css, adjust the path if needed. Best set absolute path -->
<link rel="stylesheet" href="../axZm/axZm.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!-- Javascript to style the syntax, not needed! -->
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
	
	.rbox{
		-moz-border-radius: 10px;
    	-webkit-border-radius: 10px;
    	border-radius: 10px 10px 10px 10px;
	}
	
	#axZm_zoomGalHorArea{background-color: #191919;}
	#axZm_zoomGalHorDiv{background-color: #191919;}
	#axZm_zoomGalHorCont{background-color: #191919;}
	#axZm_zoomGalHor{background-color: #191919;}
	.axZm_zoomContainer{background-color: #000000;}
	.axZm_zoomLogHolder{width: 70px}
	
</style>

</head>
<body>

<?php
include ('navi.php');
?>
			
<div style='width: 620px; margin: 0px auto; overflow-x: hidden;'>
	<h2>AJAX-ZOOM - high resolution animations</h2>

	<p>In this 360° animation the internal horizontal gallery is turned on. 
		Normally it would show all the available frames/images of the animation. 
		But as you can see not all of the frames are displayed. They are filtered by "zoomCueFrames" 
		parameter which is passed to AJAX-ZOOM along with other data (see Javascript code below at line 24).
	</p>
	
	<div class="rbox" style='width: 600px; min-height: 400px; padding: 10px; background-color: #818181'>
		<div id="azParentContainer" style='margin: 0px; width: 600px; min-height: 400px;'>
			Loading, please wait...
		</div>
	</div>
	
	
	<!-- Trigger AJAX-ZOOM -->
	<script type="text/javascript">
	
		// Create a var to hold the settings
		var ajaxZoom = {}; 
		
		// AJAX-ZOOM callbacks
		ajaxZoom.opt = {
			// e.g. onBeforeStart
			onBeforeStart: function(){
				// do something
				jQuery.axZm.gallerySlideNavi = false;
			}
		};
		
		// Path to /axZm/ folder, best set absolute path
		ajaxZoom.path = "../axZm/"; 
		
		// 3dDir - path to the folder with 360 images
		ajaxZoom.parameter = "3dDir=/pic/zoom3d/Uvex_Occhiali";
		
		// example - options set in /axZm/zoomConfigCustom.inc.php after 
		// elseif ($_GET['example'] == 21){
		ajaxZoom.parameter += "&example=21";
		
		// zoomCueFrames - CSV of frames which should be shown in the gallery
		ajaxZoom.parameter += "&zoomCueFrames=1,4,8,10,12,15,18"; 
		
		// The ID of the element where ajax-zoom has to be inserted into
		ajaxZoom.divID = "azParentContainer";
		
		// Tigger AJAX-ZOOM
		jQuery(document).ready(function(){
			jQuery.fn.axZm.load({
				opt: ajaxZoom.opt,
				path: ajaxZoom.path,
				parameter: ajaxZoom.parameter,
				divID: ajaxZoom.divID
			});
		});
	</script>

	
	<!-- These js functions are just for the demo, they are not needed fox the example -->
	<script type="text/javascript">
		var setNaviStatus = function(q){
			if(jQuery.axZm){
				if (q === false){
					jQuery('#axZm_zoomNavigation').css('display', 'none');
					jQuery.fn.axZm.switchSpin(true);
					jQuery.axZm.fullScreenNaviBar = false;
				} else{
					jQuery('#axZm_zoomNavigation').css('display', 'block');
					jQuery.axZm.fullScreenNaviBar = true;
				}
			}
		}
		
		var reverseSpin = function(){
			if(jQuery.axZm){
				if (jQuery.axZm.spinReverse === true){
					jQuery.axZm.spinReverse = false;
				}else{
					jQuery.axZm.spinReverse = true;
				}
			}
		}
		
		var setZoomSlider = function(q){
			if (q === false){
				jQuery('#axZm_zoomSliderZoomContainer').css('visibility', 'hidden');
			} else {
				jQuery('#axZm_zoomSliderZoomContainer').css('visibility', 'visible');
			}
		}
		
		var setSpinSlider = function(q){
			if (q === false){
				jQuery('#axZm_zoomSliderSpinContainer').css('display', 'none');
			} else {
				jQuery('#axZm_zoomSliderSpinContainer').css('display', 'block');
			}
		}
	</script>
	
	<h3>Alternatives</h3>
	<p style="margin-top: 0;">In <a href="example35.php">example35.php</a> you can create a similar gallery but with much more options like zoom level,  
		instant generation of the thumbnails and add descriptions for each crop. 
	</p>
	
	<!-- Code head -->
	<h3>JavaScript & CSS files in Head</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('
<!-- jQuery core, needed if not already present! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  Include AJAX-ZOOM javascript && css, adjust the path if needed. Best set absolute path -->
<link rel="stylesheet" href="../axZm/axZm.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
	');
	echo "</pre>";	
	?>
	</div>
	
	<!-- HTML -->
	<h3>HTML markup</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
		echo "<pre class='brush: html;'>";
		echo htmlspecialchars ('
		<div id="azParentContainer" style="width: 600px; min-height: 400px;">
			Loading, please wait...
		</div>
	');
	echo "</pre>";	
	?>
	</div>
	
	<!-- Javascript -->
	<h3>Javascript</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
		echo "<pre class='brush: js;'>";
		echo htmlspecialchars ('
// Create a var to hold the settings
var ajaxZoom = {}; 

// AJAX-ZOOM callbacks
ajaxZoom.opt = {
	// e.g. onBeforeStart
	onBeforeStart: function(){
		// do something
		jQuery.axZm.gallerySlideNavi = false;
	}
};

// Path to /axZm/ folder, best set absolute path
ajaxZoom.path = "../axZm/"; 

// 3dDir - path to the folder with 360 images
ajaxZoom.parameter = "3dDir=/pic/zoomAnm/Watch";

// example - options set in /axZm/zoomConfigCustom.inc.php after 
// elseif ($_GET[\'example\'] == 21){
ajaxZoom.parameter += "&example=21";

// zoomCueFrames - CSV of frames which should be shown in the gallery
ajaxZoom.parameter += "&zoomCueFrames=1,4,8,15,28,39"; 

// The ID of the element where ajax-zoom has to be inserted into
ajaxZoom.divID = "azParentContainer";

// Tigger AJAX-ZOOM
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
	
</div>


</body>
</html>
