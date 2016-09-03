<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM 360°/3D with objects gallery</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="AJAX-ZOOM 360° with objects gallery" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_15_gallery_clean.jpg"/> 
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

<!-- Include axZm.thumbSlider -->
<link rel="stylesheet" type="text/css" href="../axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css" />
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.axZm.thumbSlider.js"></script>

<!-- JavaScript for 360/3D gallery -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.360Gallery.js"></script>
<link rel="stylesheet" type="text/css" href="../axZm/extensions/jquery.axZm.360Gallery.css" />

<style type="text/css" media="screen"> 
	.clearfix:after {content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;}	 
	.clearfix {display: inline-block;}
	html[xmlns] .clearfix {display: block;}
	* html .clearfix {height: 1%;}
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
</style>
 

</head>
<body>
	<?php
	// This include is just for the demo, you should remove it
	include ('navi.php');
	?>
	<h2 style="margin-left: 10px;">Clean AJAX-ZOOM 360°/3D with objects gallery.</h2>
	
	<!--  Slider with 360 objects (optionally). You can put it somewhere else, e.g. under the player, besides the player or whereever -->
	<DIV id="spinGalleryContainer" style="min-height: 80px; width: 602px; margin-left: 10px; position: relative">
		<DIV id="spinGallery" style="min-height: 80px; width: 100%; position: releative">
			<!-- Temp message that will be removed after the slider initialization -->
			<DIV id="spinGallery_temp" class="spinGallery_temp">
				Gallery with 360 objects will be loaded after the first spin is fully loaded, please wait...
			</DIV>
		</DIV>
	</DIV>

	<!--  Placeholder for AJAX-ZOOM player -->
	<DIV id="axZmPlayerContainer" style='margin: 5px 0px 0px 10px; width: 602px; min-height: 400px; color: gray;'>
		<DIV style="margin: 0; padding-top: 175px; padding-left: 200px; min-height: 225px; background: url(../axZm/icons/ajax-loader-bar.gif) center center no-repeat;">
		Loading, please wait...
		</DIV>
	</DIV>
	
	<p style="margin-left: 10px; width: 602px;" id="docuParent">
		<a href="#" onclick="$.ajax({url: 'extensions_doc/docu_360Gallery.inc.html', complete: function(r){$('#docuParent').html(r.responseText)}})">Load documentaion</a> for $.axZm360Gallery
	</p>
 
	<script type="text/javascript">
	// Init AJAX-ZOOM 360 and the 360 gallery
	jQuery.axZm360Gallery ({
		axZmPath: "auto", // Path to /axZm/ directory, e.g. "/test/axZm/"
		
		// This is the path where we want to get other 360s or 3D from
		// So if under this path there are any other subfolders, 
		// then the first image will be loaded into the gallery
		// ajaxZoom.galleryFolder is used in onSpinPreloadEnd callback
		gallery3dDir: "/pic/zoom3d", // Path to the folder where in subfolders are images for several 360s/3D
		first3dDir: "/pic/zoom3d/Uvex_Occhiali", // index or name of the folder to be loaded at first
		
		// Configuration set value which is passed to ajax-zoom, e.g. 17 or "spinIpad"
		// some default settings from /axZm/zoomConfig.inc.php are overridden in 
		// /axZm/zoomConfigCustom.inc.php after elseif ($_GET['example'] == 17){
		example: 17, 
		
		// Some of the AJAX-ZOOM option normally set in zoomConfig.inc.php and zoomConfigCustom.inc.php 
		// can be set directly as js var in this callback
		azOptions: {
			//e.g.
			// zoomSlider: false,
			// gallerySlideNavi: true,
			// gallerySlideNaviOnlyFullScreen: true
		},

		divID: "axZmPlayerContainer", // The ID of the element (placeholder) where AJAX-ZOOM has to be inserted into
		spinGalleryContainerID: "spinGalleryContainer", // Parent container of gallery div
		spinGalleryID: "spinGallery", // ID of the menu container
		spinGallery_tempID: "spinGallery_temp", // ID of the menu container
		
		// background color of the player, possible values: #hex color or "auto" 
		// if "auto" AJAX-ZOOM will try to determin the background color
		// use "auto" only if you have e.g. black and white on different 360s
		backgroundColor: "#FFFFFF", 

		checkReverse: true, // Set to check spinReverse / spinReverseZ settings upon the below options (toReverseArr, toReverseArrZ)
		// Array with folder names where spinReverse option should be applied
		toReverseArr: ['Atomic', 'Floete', 'Nike_Running', 'Pelican', 'Speed_Strength_BlackJacket', 'Speed_Strength_WhiteJacket', 'Uzi_32'], 
		toReverseArrZ: [], // Array with folder names where spinReverseZ option should be applied
		
		fullScreenApi: false, // try to open AJAX-ZOOM at browsers fullscreen mode
		thumbsAtFullscreen: "bottom", // show 360 thumb gallery at fullscreen mode, possible values: "bottom", "top", false
		axZmThumbSlider: true, // use axZmThumbSlider extension for the thumbs, set false to disable
		
		// Options passed to axZmThumbSlider
		// For more information see /axZm/extensions/axZmThumbSlider/
		axZmThumbSliderParam: {
			// e.g.
			//btn: false // disable left/right buttons
		},
		
		thumbsCache: true, // cache thumbnails
		thumbWidth: 70, // width of the thumbnail image
		thumbHeight: 70, // height of the thumbnail image
		thumbQual: 90, // jpg quality of the thumbnail image
		thumbMode: false, // possible values: "contain", "cover" or false
		thumbBackColor: "#FFFFFF", // background color of the thumb if thumbMode is set to "contain"
		thumbRetina: true, // true will double the resolution of the thumbnails
		thumbDescr: true, // Show thumb description
		
		// Custom description of the thumbs
		thumbDescrObj: {
			// e.g.
			//"Uvex_Occhiali": "test",
			//"some_other": "test123"
		},
		thumbIcon: true, // Show 360 or 3D icon for the thumbs

		// Object with AJAX-ZOOM callbacks, http://www.ajax-zoom.com/index.php?cid=docs#onBeforeStart
		axZmCallBacks: {
			// e.g.
			//onload: function(){console.log("onLoad fired")},
			//onSpinPreloadEnd: function(){console.log("spin preloaded")}
		}
	});
 
	</script>
	
	</body>
</html>