<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Old multimedia gallery example29</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta name="description" content="Old multimedia gallery example29" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_29_clean_old.jpg"/> 

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
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	.customThumbOuter{
 		display: block; 
		width: 75px;
		height: 50px;
		border: #CCCCCC 1px solid;
		background-position: center center;
		background-repeat: no-repeat;
		margin-bottom: 5px;
		cursor: pointer;
		outline:none;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		border-radius: 4px 4px 4px 4px;
		-khtml-border-radius: 4px;
 
	}
	.customThumbInner{
		position: relative;
		width: 75px;
		height: 50px;
		outline:none;
	}
	
	.axZm_zoomContainer {background-color: #FFF;}
	.zoomMapSel {border-color: #0083DE;}
	.zoomMapSelArea {background-color: #0083DE;}

</style>

</head>
<body>
<?php
// This include is just for the demo, you should remove it
include ('navi.php');
?>
<h2 style="padding-left: 10px;">Old multimedia gallery example29.php</h2>
<div style="padding: 10px;">
	<DIV id='axZmPlayerContainer' class="shadow" style='width: 600px; min-height: 400px; color: gray; float: left'>
		<DIV style='margin: 0; padding-top: 175px; padding-left: 260px; min-height: 225px; background: url(../axZm/icons/ajax-loader-bar.gif) center center no-repeat;'>
		Loading, please wait...
		</DIV>
	</DIV>

	<!-- Display custom gallery right to the player 
	In fact it can be anywhere and look how ever
	The thumbs are generated and loaded dynamically, e.g. background-image: url(../axZm/zoomLoad.php?previewPic=nike_running_01.jpg&[...]
	$zoom['config']['allowDynamicThumbs'] in /axZm/zoomConfig.inc.php must be set to true
	Of course you could replace it with static images, although the results of this dynamic generation are cached in filesystem
	-->
	<DIV id='axZmNaviContainer' style='width: 110px; height: 400px; color: gray; float: left; margin-left: 15px; overflow: hidden; overflow-y: auto;'>
		<!-- 360 Spin -->
		<DIV class="customThumbOuter" onClick="jQuery.axZmSwitchImage('image360', false, '/pic/zoom3d/Uvex_Occhiali', false, null)" 
		style="background-image: url(../axZm/zoomLoad.php?previewPic=EOS_1100D_LOW_RES_18F_004.jpg&previewDir=/pic/zoom3d/Uvex_Occhiali/&qual=90&width=75&height=50)">
			<DIV class="customThumbInner"><img src="../axZm/icons/360_2.png" style="position: absolute; z-index: 1; top: -1px; right: -17px;"></DIV>
		</DIV>

		<!-- Video on Youtube -->
		<DIV class="customThumbOuter" onClick="jQuery.axZmSwitchImage('youtube', 'V6Tsrg_EQMw', false, false, false)" 
		style="background-image: url(http://i1.ytimg.com/vi/V6Tsrg_EQMw/default.jpg)">
			<DIV class="customThumbInner"><img src="../axZm/icons/youtube_icon.png" style="position: absolute; z-index: 1; top: -1px; right: -17px;"></DIV>
		</DIV>	
		
		<!-- 2D Images,  axZmSwitchImage third argument has to be exactly the same -->
		<DIV class="customThumbOuter" onClick="jQuery.axZmSwitchImage('imageZoom', 'boutique_001.jpg', '/pic/zoom/boutique/boutique_001.jpg|/pic/zoom/boutique/boutique_002.jpg|/pic/zoom/boutique/boutique_003.jpg')"
		style= "background-image: url(../axZm/zoomLoad.php?previewPic=boutique_001.jpg&previewDir=/pic/zoom/boutique/&qual=90&width=75&height=50)">
		</DIV>
		
		<DIV class="customThumbOuter" onClick="jQuery.axZmSwitchImage('imageZoom', 'boutique_002.jpg', '/pic/zoom/boutique/boutique_001.jpg|/pic/zoom/boutique/boutique_003.jpg|/pic/zoom/boutique/boutique_003.jpg')" 
		style= "background-image: url(../axZm/zoomLoad.php?previewPic=boutique_002.jpg&previewDir=/pic/zoom/boutique/&qual=90&width=75&height=50)">
		</DIV>
		
		<DIV class="customThumbOuter" onClick="jQuery.axZmSwitchImage('imageZoom', 'boutique_003.jpg', '/pic/zoom/boutique/boutique_001.jpg|/pic/zoom/boutique/boutique_002.jpg|/pic/zoom/boutique/boutique_003.jpg')" 
		style= "background-image: url(../axZm/zoomLoad.php?previewPic=boutique_003.jpg&previewDir=/pic/zoom/boutique/&qual=90&width=75&height=50)">
		</DIV>
	</DIV>

</div>

<!--  Init AJAX-ZOOM player -->
<script type="text/javascript">
 
	jQuery(document).ready(function() {
		// Manually trigger loading the first item of custom thumbs
		// jQuery.axZmSwitchImage('image360', false, '/pic/zoom3d/Nike_Running', true, null);
		
		// Instantly trigger loading the first item of custom thumbs by geting it's click event
		if (jQuery(".customThumbOuter").length){
			jQuery(".customThumbOuter").first().click();
		}
		
		// Add mouseover for custom thumbs
		/*
		jQuery(".customThumbOuter").bind('mouseover', function(){
			jQuery(this).css('borderColor', '#323232');
		}).bind('mouseout', function(){
			jQuery(this).css('borderColor', '#cccccc');
		});
		*/
	});


/**
  * Custom function to load AJAX-ZOOM player, switch images / 3d / 360 objects. Edit it to suit your needs.
  * @param string mode - possible values 'image360' and 'imageZoom'
  * @param string lnk - first selected image if mode is 'imageZoom'
  * @param string zData - query string - images to load or path to 360 folder
  * @param mixed spinReverse - reverse spin direction x axis, overrides $zoom['config']['spinReverse'] in zoomConfig.inc.php / zoomConfigCustom.inc.php
  * @param mixed spinReverseZ - reverse spin direction y axis (multirow), overrides $zoom['config']['spinReverseZ'] in zoomConfig.inc.php / zoomConfigCustom.inc.php
  **/	

jQuery.axZmSwitchImage = function(mode, lnk, zData, spinReverse, spinReverseZ){
	
	// Create empty jQuery object
	var ajaxZoom = {}; 

	// The ID of the element where ajax-zoom has to be inserted into
	ajaxZoom.divID = "axZmPlayerContainer";

	// Define the path to the axZm folder, adjust the path if needed!
	ajaxZoom.path = "../axZm/";
	
	// Define your custom parameter query string
	// example=spinAnd2D has many presets for 360 images
	// 3dDir - best of all absolute path to the folder with 360/3D images
	ajaxZoom.parameter = "example=spinAnd2D&"+((mode == 'image360') ? '3dDir=' : 'zoomData=')+zData;
	
	// Add specific parameters for 360 images
	// Find it in zoomConfigCustom.inc.php after elseif ($_GET['example'] == 'spinAnd2D'){ and then if (isset($_GET['image360'])){
	if (mode == 'image360'){
		ajaxZoom.parameter += '&image360=1';
	}
	
	// Add parameter for which image file should be loaded first
	if (lnk){
		ajaxZoom.parameter += '&zoomFile='+lnk;
	}
	
	// Stop 360 rotating if needed
	if (jQuery.axZmCurrentZoomMod){
		jQuery.fn.axZm.spinStop();
	}
	
	//var data = 'example=17&3dDir='+path;
	//jQuery.fn.axZm.loadAjaxSet(data);
	
	// Same mode as previous 360 object / 2D image
	if (jQuery.axZmCurrentZoomMod == mode && mode != 'youtube'){
		
		// Switch between images in the gallery
		if (mode == 'imageZoom'){
			jQuery.fn.axZm.zoomSwitch(lnk);
		}
		
		// Load a new 360 set
		else if (mode == 'image360'){
			jQuery.fn.axZm.loadAjaxSet(ajaxZoom.parameter);
			
			if (spinReverse === true || spinReverse === false){
				$.axZm.spinReverse = spinReverse;
			}
		
			if (spinReverseZ === true || spinReverseZ === false){
				setTimeout(function(){$.axZm.spinReverseZ = spinReverseZ;}, 2000);
			}
		} 
	}
	
	// if previous mode is different or not present, reload / load the player
	else{
		
		// Save current mode
		jQuery.axZmCurrentZoomMod = mode; // imageZoom / image360
		
		if (mode == 'youtube'){
			var w = $('#'+ajaxZoom.divID).innerWidth();
			var h = $('#'+ajaxZoom.divID).innerHeight();
			$('#'+ajaxZoom.divID).axZmEmpty();
			$('<iframe />').attr({
				src: 'http://www.youtube-nocookie.com/embed/'+lnk+'?rel=0',
				width: w,
				height: h-4,
				frameborder: 0,
				allowfullscreen: ' '
			}).appendTo('#'+ajaxZoom.divID);
		} else {
		
			// Define callbacks if needed, for complete list check the docs
			ajaxZoom.opt = {
				onLoad: function(){
					// Set mouse spin direction on X-axis, not necessary
					if (spinReverse === true || spinReverse === false){
						$.axZm.spinReverse = spinReverse;
					}
					
					// Set mouse spin direction on Y-axis, not necessary
					if (spinReverseZ === true || spinReverseZ === false){
						$.axZm.spinReverseZ = spinReverseZ;
					}
				}
			};

			// Load / Reload AJAX-ZOOM
			function ajaxZoomLoad(){
				var url = ajaxZoom.path + 'zoomLoad.php';
				var parameter = 'zoomLoadAjax=1&'+ajaxZoom.parameter;
				 
				jQuery.ajax({
					url: url,
					data: parameter, // important
					dataType: 'html',
					cache: false,
					success: function (data){
						if (jQuery.isFunction(jQuery.fn.axZm) && data){
							jQuery('#'+ajaxZoom.divID).html(data);
						}
					},
					complete: function () {
						if (jQuery.isFunction(jQuery.fn.axZm)){
							jQuery.fn.axZm(ajaxZoom.opt);
						}
					}
				});
			}
			
			ajaxZoomLoad();
		}
	}
}
</script>

</body>
</html>