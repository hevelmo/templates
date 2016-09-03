<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>HTML5 multimedia gallery with 360°</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="HTML5 multimedia gallery with 360°" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_29_no_slider.jpg"/> 

<?php
// Set scale for iPhone and disable user scalability
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link type="text/css" href="../axZm/axZm.css" rel="stylesheet" />

<!-- JavaScript for 360/3D gallery -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.360Gallery.js"></script>
<link rel="stylesheet" type="text/css" href="../axZm/extensions/jquery.axZm.360Gallery.css" />

<!-- Include axZm.thumbSlider -->
<link rel="stylesheet" type="text/css" href="../axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css" />
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.axZm.thumbSlider.js"></script>


<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	.azThumb li {
	    background-color: #FFFFFF;
	    background-position: center center;
	    background-repeat: no-repeat;
	    border: 2px solid #000;
	    border-radius: 0px;
	    cursor: pointer;
	    display: inline-block;
	    float: left !important;
	    font-size: 0;
	    line-height: 0;
	    margin: 0px 5px 0px 0px;
	    padding: 2px;
	    position: relative;
	    text-align: center;
	    vertical-align: middle;
	    width: 52px;
	    height: 52px;
	}
	
	.azThumb li.selected {
	    background-color: #FFFFFF;
	    border: 2px solid #267CB8;
	    box-shadow: none;
	}
	
	.spinGallery_temp {
	    background: none;
	    color: white;
	    margin-top: 20px;
	    min-height: 30px;
	    padding: 10px 0 0 40px;
	}
		
	.axZmThumbSliderDescription {
		display: none;
	}
</style>
 
</head>
<body>
<?php
// This include is just for the demo, you should remove it
include ('navi.php');
?>
<h2 style="padding-left: 10px;">HTML5 multimedia gallery with 360°</h2>
<div style="padding: 10px;">
	<div style="float: left; padding: 10px; background-color: #3D3D3D">
		<!--  Gallery -->
		<div id='spinGalleryContainer' style='width: 600px; height: 65px; float: left;'>
			<div id="spinGallery" style="position: releative; height: 65px; margin-right: -10px;">
				<!-- Temp message that will be removed after the slider initialization -->
				<div id="spinGallery_temp" class="spinGallery_temp">
					Gallery with 360 objects will be loaded after the first spin is fully loaded, please wait...
				</div>
			</div>
		</div>
		
		<!-- Container where AJAX-ZOOM will be loaded into -->	
		<div id='axZmPlayerContainer' class="shadow" style='width: 600px; height: 400px; background-color: #FFFFFF; clear: both; float: left'>
			<!-- This div will be removed after anything is loaded into "content" div -->
			<div style="padding:20px; color: #000000; font-size: 16pt">Loading, please wait...</div>
		</div>
		</div>
	
</div>


<!--  Init AJAX-ZOOM player -->
<script type="text/javascript">

jQuery(document).ready(function(){

	// Load 360 gallery and first spin
	jQuery.axZm360Gallery ({
		axZmPath: "auto", // Path to /axZm/ directory, e.g. "/test/axZm/"
		
		// Over galleryData" option you can precisely define which 360s or 3D have to beloaded. 
		// Additionally you can also define regular 2D images and videos located at 
		// some straming platform like youtube, iframed content or load content over ajax
		galleryData: [
			["image360", "/pic/zoom3d/Uvex_Occhiali"],
			["imageZoom", "/pic/zoom/boutique/boutique_001.jpg"],
			["imageZoom", "/pic/zoom/boutique/boutique_002.jpg"],
			["imageZoom", "/pic/zoom/boutique/boutique_003.jpg"],
			["youtube", "3XviR7esUvo"],
			["vimeo", "92938001"],
			["dailymotion", "x20g8k1"],
			["ajax", "extensions_doc/docu_360Gallery.inc.html"],
			["iframe", "extensions_doc/docu_360Gallery.inc.html"]
		],
		
		// AJAX-ZOOM supports "hotspots" which can be optionally loaded 
		// for 3D/360 or 2D (plain images). 
		// Hotspots can be configured manually in example33.php 
		galleryHotspots: {
			bike360: "../pic/hotspotJS/bike.js"
		},

		// Some of the AJAX-ZOOM option normally set in zoomConfig.inc.php and zoomConfigCustom.inc.php 
		// can be set directly as js var in this callback
		azOptions: {
			//e.g.
			// zoomSlider: false,
			// gallerySlideNavi: true,
			// gallerySlideNaviOnlyFullScreen: true
		},

		divID: "axZmPlayerContainer", // The ID of the element (placeholder) where AJAX-ZOOM has to be inserted into
		embedResponsive: false, // if divID is responsive, set this to true
		spinGalleryContainerID: "spinGalleryContainer", // Parent container of gallery div
		spinGalleryID: "spinGallery",  
		spinGallery_tempID: "spinGallery_temp", 
		
		// background color of the player, possible values: #hex color or "auto" 
		// if "auto" AJAX-ZOOM will try to determin the background color
		// use "auto" only if you have e.g. black and white on different 360s
		backgroundColor: "#FFFFFF", 
		
		// Set to check spinReverse / spinReverseZ settings upon the below options (toReverseArr, toReverseArrZ)
		checkReverse: true, 
		
		// Array with folder names where spinReverse option should be applied
		toReverseArr: [
			"Atomic", 
			"Floete", 
			"Nike_Running", 
			"Pelican", 
			"Speed_Strength_BlackJacket", 
			"Speed_Strength_WhiteJacket", 
			"Uzi_32"
		], 
		
		// Array with folder names where spinReverseZ option should be applied
		toReverseArrZ: [], 
		toBounceArr: ["Teva"],
		
		// use axZmThumbSlider extension for the thumbs, set false to disable
		axZmThumbSlider: false, 
		
		// try to open AJAX-ZOOM at browsers fullscreen mode
		fullScreenApi: true,
		
		// Show 360 thumb gallery at fullscreen mode, 
		// possible values: "bottom", "top", "left", "right" or false 
		thumbsAtFullscreen: false, 

		thumbsCache: true, // cache thumbnails
		thumbWidth: 52, // width of the thumbnail image
		thumbHeight: 52, // height of the thumbnail image
		thumbQual: 90, // jpg quality of the thumbnail image
		thumbMode: false, // possible values: "contain", "cover" or false
		thumbBackColor: "#FFFFFF", // background color of the thumb if thumbMode is set to "contain"
		thumbRetina: true, // true will double the resolution of the thumbnails
		thumbDescr: true, // Show thumb description
		thumbIcon: true // Show 360 or 3D icon for the thumbs
	});
	
});

</script>

</body>
</html>