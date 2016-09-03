<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Responsive 3D/360 spins, images, videos and documents in one horizontal gallery</title>
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

<!-- IE < 9 @media query support -->
<script src="../axZm/plugins/css3-mediaqueries.min.js"></script>

<style type="text/css"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	

	/* overwrite some css from /axZm/axZm.css*/
	.axZmTempLoading{background-color: #FFF!important;}
	.zFsOResOverlay{background-color: #FFF!important;}
	.axZm_zoomContainer{background-color: #FFF!important;}
	.axZm_zoomCustomNaviFS{background-image: none!important; left: 0!important; bottom: 0!important}
	.axZm_zoomMapSel{border-color: #0191FF;}
	.axZm_zoomMapSelArea{background-color: transparent;}
	.axZm_spinPreloaderBar{background-color: #0191ff; background-image: none;}
	.axZm_spinPreloaderHolder{background-image: url('../axZm/icons/tr_black_50.png'); -moz-border-radius: 0px; -webkit-border-radius: 0px; border-radius: 0px;}
	
	/* overwrite some css from /axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css */
	#spinGallery li{background-color: #FFF!important; box-shadow: none!important;}
	#spinGallery .axZmThumbSliderDescription {font-size: 10px; bottom: 2px;}
	
	/* responsive page layout */
	#topContainer {height: 110px; background-color: #B9CC52; position: relative;}
	#leftSide {width: 66%; background-color: #FFF; float: left;}
	#rightSide {width: 34%; background-color: #F2D3A2; min-height: 500px; float: right;}
	#axZmPlayerContainer {height: 400px; position: relative;}
	
	/* media query to adjust the layout if it is lesser then 800px width */
	@media only screen and (max-width: 800px){
		#leftSide {width: 100%;}
		#rightSide {width: 100%; min-height: 100px; background-color: #F2D3A2; float: none;}
		#leftSide {float: none;}
		#axZmPlayerContainer {height: 300px;}
		#topContainer {display: none;}
	}
</style>


</head>
<body>

<?php
// This include is just for the demo, you should remove it
include ('navi.php');
?>
<div id="topContainer">
	<h2 style="margin: 0; padding: 25px 10px 0 10px;">
		Responsive multimedia zoom gallery with 360° spins, images, videos and documents navigated over responsive horizontal slider
	</h2>
</div>

<div id="responsiveContainer">
	<div id="leftSide">
		<div id="axZmPlayerContainer">
			<!-- This div will be removed after anything is loaded into "content" div -->
			<div style="padding:20px; color: #000000; font-size: 16pt">Loading, please wait...</div>
		</div>
		
		<div id="spinGalleryContainer" style="height: 120px; overflow: hidden;">
			<!-- Thumb slider -->
			<div id="spinGallery">
				<!-- Temp message that will be removed after the slider initialization -->
				<div id="spinGallery_temp" class="spinGallery_temp">
					Gallery with 360 objects will be loaded after the first spin is fully loaded, please wait...
				</div>
			</div>
		</div>
	</div>
	
	<div id="rightSide">
		<div style="padding: 5px 5px 5px 10px;">
			<p style="margin-top: 0">AJAX-ZOOM is fully integrateable into any responsive layout. 
				In this responsive example the width of the elements is set as percentage and 
				their positioning and width determined over css "media queries" depending on 
				max-width of the window. So e.g. below 800px the layout changes. 
				Such an approach is very common in modern templates. 
			</p>
			<p>The initialization of AJAX-ZOOM and the gallery is done over single  
				<code>jQuery.axZm360Gallery</code> extension. 
				Nevertheless you can pass additional options to each of the scripts (main AJAX-ZOOM and the thumbslider) 
				over jQuery.axZm360Gallery options. Other than in the beforehand example29_*.php here we extensively use "azOptions" object and 
				"axZmCallBacks" object and "onBeforeStart" AJAX-ZOOM callback to overwrite AJAX-ZOOM options which are normally set in 
				<code>/axZm/zoomConfig.inc.php</code> and <code>/axZm/zoomConfigCustom.inc.php</code>. So this examples might be also interesting  
				for developers as even the config files are not modified.
			</p>
		</div>
	</div>
</div>
 

<script type="text/javascript">
	// Load 360 gallery and first spin
	jQuery.axZm360Gallery ({
		axZmPath: "auto", // Path to /axZm/ directory, e.g. "/test/axZm/"
		divID: "axZmPlayerContainer", // The ID of the element (placeholder) where AJAX-ZOOM has to be inserted into
		embedResponsive: true, // if divID is responsive, set this to true
		spinGalleryContainerID: "spinGalleryContainer", // Parent container of gallery div
		spinGalleryID: "spinGallery",  
		spinGallery_tempID: "spinGallery_temp",
			
		// Over galleryData" option you can precisely define which 360s or 3D have to beloaded. 
		// Additionally you can also define regular 2D images and videos located at 
		// some straming platform like youtube, iframed content or load content over ajax
		galleryData: [
			["youtube", "YzVl970CUoo"],
			["image360", "/pic/zoom3d/Uvex_Occhiali"],
			["imageZoom", "/pic/zoom/furniture/furniture_001.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_002.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_003.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_004.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_005.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_006.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_007.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_008.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_009.jpg"],
			["ajax", "extensions_doc/docu_360Gallery.inc.html"]
		],
		
		firstToLoad: "imageZoom",

		// Some of the AJAX-ZOOM option normally set in zoomConfig.inc.php and zoomConfigCustom.inc.php 
		// can be set directly as js var in this callback
		azOptions: {
			mapPos: 'bottomRight',
			mapBorder: {top: 0, right: 0, bottom: 0, left: 0},
			mapOpacity: 0.5,
			zoomMapSelOpacity: 0,
			fullScreenCornerButtonMouseOver: true,
			dragToSpin: {
				enabled: true, //enable / disable
				file: 'drag_to_spin_en.png', // message as image file to display e.g. file
				showAfter: 1000, // ms
				removeAfter: 2000, // display for this ms and remove instantly
				fadeIn: 300, // ms
				fadeOut: 300 // ms
			},
			spinPreloaderSettings: {
				text: '',
				width: '100%',
				height: 7,
				gravity: 'bottom',
				gravityMargin: 0,
				borderW: 0,
				margin: 5,
				countMsg: false,
				statusMsg: false,
				barH: 7,
				barOpacity: 1
			},
			mapHorzMargin: 0,
			mapVertMargin: 0,
			mapMouseOver: false,
			mapSelSmoothDrag: false,
			zoomLoaderEnable: false
		},
		
		axZmCallBacks: {
			onBeforeStart: function(){
				if ($.axZm.spinMod){
					$.axZm.gallerySlideNavi = false;
				}else{
					$.axZm.mNavi.enabled = false;
					$.axZm.gallerySlideNavi = true;
					$.axZm.gallerySlideNaviOnlyFullScreen = false;
					$.axZm.gallerySlideNaviMargin = 0;
				}
				$.axZm.icons.slideNext = {file: $.axZm.buttonSet+'/zoombutton_slide_vert_next', ext: 'png', w: 20, h: 100};
				$.axZm.icons.slidePrev = {file: $.axZm.buttonSet+'/zoombutton_slide_vert_prev', ext: 'png', w: 20, h: 100};
			}
		},

 
		
		axZmPar: "buttonSet=flat",
		
		
		
		// use axZmThumbSlider extension for the thumbs, set false to disable
		axZmThumbSlider: true, 
		
		// Options passed to $.axZmThumbSlider
		// For more information see /axZm/extensions/axZmThumbSlider/
		axZmThumbSliderParam: {
			btn: true,
			btnHidden: true,
			orientation: "horizontal",
			scrollbar: false,
			centerNoScroll: true,
			wrapStyle: {borderWidth: 0}
		},
		thumbIcon: true, // Show 360 or 3D icon for the thumbs
		
		thumbIconFile: {
			text: 'text_clean_256x256.png'
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
			"Uvex_Occhiali": "360° of something",
			"furniture_001.jpg": "orange",
			"furniture_002.jpg": "black",
			"furniture_003.jpg": "cream",
			"furniture_004.jpg": "orange",
			"furniture_005.jpg": "black",
			"furniture_006.jpg": "cream",
			"furniture_007.jpg": "dining table",
			"furniture_008.jpg": "dining table",
			"furniture_009.jpg": "dining table",
			"YzVl970CUoo": "image film",
			"docu_360Gallery.inc.html": "$.axZm360Gallery"
		}
	});
</script>
 
</body>
</html>