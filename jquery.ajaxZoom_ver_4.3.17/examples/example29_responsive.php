<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Responsive 3D/360 spins, images, videos and documents in one gallery</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta name="description" content="Responsive 3D/360 spins, images, videos and documents in one gallery." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_29_responsive.jpg"/> 

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
	
	#playerWrap{
		padding-right: 120px; 
		height: 400px; 
		position: relative;
	}
	
	#spinGalleryContainer{
		position: absolute;
		z-index: 11;
		width: 120px; 
		height: 100%; 
		right: 0px; 
		top: 0px;
	}

	#spinGallery{
		position: absolute;
		right: 0;
		width: 110px; 
		height: 100%; 
		background-color: #FFFFFF;
		overflow: hidden;
	}
	#highlightsText{
		position: absolute; top: -23px; width: 90px; height: 17px; right: 0; text-align: left;
		padding: 2px 5px; font-family: monospace;
		background-color: #F2D3A2;
	}
</style>

</head>
<body>
<?php
// This include is just for the demo, you should remove it
include ('navi.php');
?>
<div style="height: 110px; background-color: #B9CC52; position: relative;">
	<h2 style="margin: 0; padding: 25px 10px 0 10px;">
		Responsive 3D/360 spins, images, videos and documents in one gallery
	</h2>
</div>

<div id="playerWrap">

	<div id="highlightsText">Navigation</div>
	
	<div id="axZmPlayerContainer" style="height: 100%; position: relative">
		<!-- This div will be removed after anything is loaded into "content" div -->
		<div style="padding:20px; color: #000000; font-size: 16pt">Loading, please wait...</div>
	</div>
	
	<div id="spinGalleryContainer">
		<!-- Thumb slider -->
		<div id="spinGallery">
			<!-- Temp message that will be removed after the slider initialization -->
			<div id="spinGallery_temp" class="spinGallery_temp">
				Gallery with 360 objects will be loaded after the first spin is fully loaded, please wait...
			</div>
		</div>
	</div>
</div>
 
<div style="padding: 10px; background-color: #F2D3A2;">
	<p>Basically besides some CSS the only difference between responsive and not responsive integration of jQuery.axZm360Gallery 
		is that the "embedResponsive" option is set to true.
	</p>
	<p>If AJAX-ZOOM "responsive" parent container is resized with javascript by e.g. click on a button, then you might want to call jQuery.fn.axZm.resizeStart(3000); when it starts resizing and jQuery.fn.axZm.resizeStart(1); when it definitely ends. No need to do this if your responsive layout is resized by window resize or orinetation change events, AJAX-ZOOM will do it instantly then.  
	<p>
	<input type="button" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#playerWrap').stop(true, false).css('height', '600px'); setTimeout(function(){jQuery.fn.axZm.resizeStart(1)})" value="Resize to 700px height" style="width: 170px; text-align: left;">
	<input type="button" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#playerWrap').stop(true, false).animate({height: '500px', width: '40%'},{queue: false, easing: 'easeOutCirc', duration: 1500, complete: function(){jQuery.fn.axZm.resizeStart(1);}});" value="Resize with animation" style="width: 170px; text-align: left;">
	<input type="button" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#playerWrap').stop(true, false).css({height: '400px', width: ''}); setTimeout(function(){jQuery.fn.axZm.resizeStart(1)})" value="Restore" style="width: 170px; text-align: left;">
</div>

 

<script type="text/javascript">
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
			["imageZoom", "/pic/zoom/boutique/boutique_004.jpg"],
			["imageZoom", "/pic/zoom/boutique/boutique_005.jpg"],
			["imageZoom", "/pic/zoom/boutique/boutique_006.jpg"],
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
		embedResponsive: true, // if divID is responsive, set this to true
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
		axZmThumbSlider: true, 
		
		// Options passed to $.axZmThumbSlider
		// For more information see /axZm/extensions/axZmThumbSlider/
		axZmThumbSliderParam: {
			btn: false,
			orientation: "vertical",
			scrollbar: true,
			scrollbarMargin: 10,
			wrapStyle: {borderWidth: 0}
			//scrollbarClass: "axZmThumbSlider_scrollbar_thin"
		},
		
		// try to open AJAX-ZOOM at browsers fullscreen mode
		fullScreenApi: false,
		
		// Show 360 thumb gallery at fullscreen mode, 
		// possible values: "bottom", "top", "left", "right" or false 
		thumbsAtFullscreen: false, 

		thumbsCache: true, // cache thumbnails
		thumbWidth: 87, // width of the thumbnail image
		thumbHeight: 87, // height of the thumbnail image
		thumbQual: 90, // jpg quality of the thumbnail image
		thumbMode: false, // possible values: "contain", "cover" or false
		thumbBackColor: "#FFFFFF", // background color of the thumb if thumbMode is set to "contain"
		thumbRetina: true, // true will double the resolution of the thumbnails
		thumbDescr: true, // Show thumb description
		
		// Custom description of the thumbs
		thumbDescrObj: {
			"boutique_001.jpg": "Image 1",
			"boutique_002.jpg": "Image 2",
			"boutique_003.jpg": "Image 3",
			"boutique_004.jpg": "Image 4",
			"boutique_005.jpg": "Image 5",
			"boutique_006.jpg": "Image 6",
			"Uvex_Occhiali": "EOS_1100D",
			"docu_360Gallery.inc.html": "Documentation",
			"3XviR7esUvo": "Video 3XviR7esUvo",
			"92938001": "Video 92938001",
			"x20g8k1": "Video x20g8k1"
		},
		
		thumbIcon: true // Show 360 or 3D icon for the thumbs
	});
</script>
 
</body>
</html>