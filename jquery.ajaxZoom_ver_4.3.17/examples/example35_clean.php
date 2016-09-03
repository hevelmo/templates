<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Cropped thumbs vertical gallery with zoomTo or 360 spinTo and zoomTo</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Cropped thumbs vertical gallery with zoomTo or 360 spinTo and zoomTo"/>
<meta property="og:description" content="Cropped thumbs vertical gallery with zoomTo or 360 spinTo and zoomTo."/>
<meta name="description" content="Crop high resolution images with jCrop and AJAX-ZOOM." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_35_clean.jpg"/>

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
}
?>

<!-- jQuery core -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM -->
<link rel="stylesheet" href="../axZm/axZm.css" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!-- Include axZm.thumbSlider plugin -->
<link rel="stylesheet" href="../axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css" type="text/css" />
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.axZm.thumbSlider.js"></script>

<!-- Include jquery.axZm.imageCropLoad.js -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.imageCropLoad.js"></script>

<!-- A small function to add title button which will expend to full description -->
<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.expButton.css" type="text/css" />
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.expButton.js"></script>


<style type="text/css"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	
	#playerInnerWrap{
		border-left: 1px solid #AAAAAA; 
		border-top: 1px solid #AAAAAA; 
		border-bottom: 1px solid #AAAAAA; 
		position: relative;
	}

	#cropSliderWrap{
		position: absolute;
		background-color: #FFFFFF;
		z-index: 11;
		width: 100px; 
		height: 100%; 
		right: 0px; 
		top: 0px;
	}

	#cropSlider{
		position: absolute; 
		width: 100px; 
		height: 100%; 
	}
	
	#axZmFsSpaceRight div{
		box-sizing: border-box;
	}
	
	.axZmThumbSlider li.vertical.first {
		margin-top: 3px !important;
	}
	
	.axZmThumbSlider li.vertical.last {
		margin-bottom: 3px !important; 
	}
</style>

</head>
<body>
 <?php
// This include is just for the demo, you can remove it
include ('navi.php');
?>
<h2 style="margin-left: 10px;">Cropped thumbs vertical gallery with zoomTo or 360 spinTo and zoomTo</h2>
<div id="playerWrap" style="width: 821px; margin-left: 10px;">
	<div id="playerInnerWrap" style="min-height: 480px;">
		<div id="azPlayer" style="width: 721px;">
			<!-- Content inside target will be removed -->
			<div style="padding: 20px">Loading, please wait...</div>
		</div>

		<!-- Thumb slider with croped images -->
		<div id="cropSliderWrap">
			<div id="cropSlider">
				<ul></ul>
			</div>
		</div>	
	</div>
</div>

<!-- Link load documentation -->
<p style="margin: 10px; clear: both; width: 950px;" id="docuParent">
	<script>var optionsHeader = '$.axZmImageCropLoad documentation'; var optionsText = '';</script>
	<a href="javascript: void(0)" onclick="$.ajax({url: 'extensions_doc/docu_imageCropLoad.inc.html', cache: false, complete: function(r){$('#docuParent').html(r.responseText)}})">Load documentaion</a> for $.axZmImageCropLoad
</p>

<script type="text/javascript">
	// Init the slider
	// Thumbs will be appended instantly
	jQuery("#cropSlider").axZmThumbSlider({
		orientation: "vertical",
		btnOver: true,
		btnHidden: true,
		btnFwdStyle: {borderRadius: 0, height: 20, bottom: -1, lineHeight: "20px"},
		btnBwdStyle: {borderRadius: 0, height: 20, top: -1, lineHeight: "20px"},	

		thumbLiStyle: {
			height: 90,
			width: 90,
			lineHeight: 90,
			borderRadius: 0,
			margin: 3
		}
	});
	
	// AJAX-ZOOM
	// Create empty jQuery object (no not rename here)
	var ajaxZoom = {}; 
	
	// Define the path to the axZm folder, adjust the path if needed!
	ajaxZoom.path = "../axZm/"; 
	
	// Id of element where AJAX-ZOOM will be loaded into
	ajaxZoom.divID = "azPlayer";
	
	// Define your custom parameter query string
	// example=spinIpad has many presets for 360 images
	// 3dDir - best of all absolute path to the folder with 360/3D images
	// if it is a 2D image just pass zoomData=/path/to/your/image/image1.jpg|/path/to/other/image/image2.jpg instead of 3dDir
	// ajaxZoom.parameter = "example=spinIpad&3dDir=/pic/zoom3d/Uvex_Occhiali"; 
	// Define your custom parameter query string
	ajaxZoom.parameter = "example=spinIpad";
	
	ajaxZoom.parameter += "&3dDir=../pic/zoom3d/Uvex_Occhiali";

	// Define callbacks, for complete list check the docs
	ajaxZoom.opt = {
		onLoad: function(){ 
			// Load crop thumbs
			// You can also pass the path over query string, e.g.
			// example35.php?cropJsonURL=../pic/cropJSON/eos_1100d.json 
			// and skip cropJsonURL key in $.axZmImageCropLoad
			$.axZmImageCropLoad({
				cropJsonURL: "../pic/cropJSON/eos_1100d_demo.json",
				sliderID: "cropSlider",
				spinToSpeed: "2500", // as string to override spinDemoTime when clicked on the thumbs
				spinToMotion: "easeOutQuint", // optionally pass spinToMotion to override spinToMotion set in config file, def. easeOutQuad
				handleTexts: "default"
				/*
				handleTexts: function(title, description){
					// One of the possible things to do with title and description
					// e.g. display texts with jquery.axZm.expButton.js (AJAX-ZOOM additional plugin)
					$.axZmEb({
						title: title,
						descr: description,
						gravity: "top", // possible values: topLeft, top, topRight, bottomLeft, bottom, bottomRight, center
						marginY: 5,  // vertical margin depending on gravity
						zoomSpinPanRemove: "cropSlider", // removes button / layer when there is some action inside AJAX-ZOOM
						autoOpen: false, // button opens instantly; if no tilte but descr is defined, autoOpen executes instantly
						removeOnClose: false // removes button when extended state is closed
					});
				}
				*/
			});
			// Possible motions types: 
			// "swing", "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", 
			// "easeOutQuart","easeInOutQuart", "easeInQuint","easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", 
			// "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeInElastic", "easeOutElastic",
			// "easeInOutElastic", "easeInBack", "easeOutBack", "easeInOutBack", "easeInBounce", "easeOutBounce", "easeInOutBounce"
			
			
			// This would be the code for additionally loading hotspots made e.g. with example33.php
			//jQuery.aZcropEd.getJSONdataFromFile("../pic/cropJSON/eos_1100d.json");
		},
		onBeforeStart: function(){
 			
 			if ($.axZm.spinMod){
 				jQuery.axZm.restoreSpeed = 300;
			}else{
				jQuery.axZm.restoreSpeed = 0;
			}
 			
			//jQuery.axZm.fullScreenCornerButton = false;
			jQuery.axZm.fullScreenExitText = false;
			
			// Chnage position of the map
			//jQuery.axZm.mapPos = "bottomLeft";
			
			// Set extra space to the right at fullscreen mode for the crop gallery
			jQuery.axZm.fullScreenSpace = {
				right: $("#cropSlider").outerWidth(),
				top: 0, bottom: 0, left: 0, layout: 1
			};
		},
		onFullScreenSpaceAdded: function(){
			jQuery("#cropSlider")
			.css({bottom: 0,right: 0, height: "100%", zIndex: 555})
			.appendTo("#axZmFsSpaceRight");
		},
		onFullScreenClose: function(){
			jQuery.fn.axZm.tapShow();

			jQuery("#cropSlider")
			.css({bottom: "", right: "", zIndex: ""})
			.appendTo("#cropSliderWrap");
		},
		onFullScreenCloseEndFromRel: function(){
			// Restore position of the slider
			jQuery("#cropSlider")
			.css({bottom: "", right: "", zIndex: ""})
			.appendTo("#cropSliderWrap");
		}
	};
	
	// Load AJAX-ZOOM not responsive
	jQuery.fn.axZm.load({
	    opt: ajaxZoom.opt,
	    path: ajaxZoom.path,
	    postMode: false,
	    apiFullscreen: false,
	    parameter: ajaxZoom.parameter,
	    divID: ajaxZoom.divID
	});
	  
	// Load responsive
	//window.fullScreenStartSplash = {enable: false, className: false, opacity: 0.75};
	//jQuery.fn.axZm.openFullScreen(ajaxZoom.path, ajaxZoom.parameter, ajaxZoom.opt, ajaxZoom.divID, false, false);
 </script>
 
</body>
</html>