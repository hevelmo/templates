<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Simple gallery with 360° spins, images and progressive zoom feature</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="Simple gallery with 360° spins, images and progressive zoom feature" />
<meta property="og:type" content="article"/>
<meta property="og:title" content="Simple gallery with 360° spins, images and progressive zoom feature"/>
<meta property="og:description" content="Simple gallery with 360° spins, images and progressive zoom feature"/>
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_29_responsive_easy.jpg"/> 

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
	
	.clearfix:before,
	.clearfix:after {
	  content: "";
	  display: table;
	}
	 
	.clearfix:after {
	  clear: both;
	}
	 
	.clearfix {
	  zoom: 1; /* ie 6/7 */
	}

	/* overwrite some css from /axZm/axZm.css*/
	.axZmTempLoading{background-color: #FFF!important;}
	.zFsOResOverlay{background-color: #FFF!important;}
	.axZm_zoomContainer{background-color: #FFF!important;}
	.axZm_zoomCustomNaviFS{background-image: none!important; left: 0!important; bottom: 0!important}
	.axZm_zoomMapSel{border-color: #0191FF;}
	.axZm_zoomMapSelArea{background-color: transparent;}
	.axZm_spinPreloaderBar{background-color: #0191ff; background-image: none;}
	.axZm_spinPreloaderHolder{background-image: url('../axZm/icons/tr_black_50.png'); -moz-border-radius: 0px; -webkit-border-radius: 0px; border-radius: 0px;}
	.zFsO{background-color: #FFF;}
	
	.axZm_zoomCustomNaviFS{display: none !important;}
	.axZm_displayBlockImportant{display: block !important;}
	
	
	/* overwrite some css from /axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css */
	#spinGallery li{background-color: #FFF!important; box-shadow: none!important;}
	#spinGallery .axZmThumbSliderDescription {font-size: 10px; bottom: 2px;}
	
	/* responsive page layout */
	#topContainer {height: 110px; background-color: #B9CC52; position: relative;}
	#leftSide {width: 66%; background-color: #FFF; float: left;}
	#rightSide {width: 34%; background-color: #F2D3A2; min-height: 520px; float: right;}
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
		"Simple" responsive gallery with 360° spins, images and progressive zoom feature
	</h2>
</div>

<div id="responsiveContainer" class="clearfix">
	<div id="leftSide">
		<div id="axZmPlayerContainer">
			<!-- This div will be removed after anything is loaded into "content" div -->
			<div style="padding:20px; color: #000000; font-size: 16pt">Loading, please wait...</div>
		</div>
		
		<div id="spinGalleryContainer" style="height: 120px; overflow: hidden;">
			<!-- Thumb slider -->
			<div id="spinGallery" style="height: 100px;">
				<!-- Temp message that will be removed after the slider initialization -->
				<div id="spinGallery_temp" class="spinGallery_temp">
					Gallery with 360 objects will be loaded after the first spin is fully loaded, please wait...
				</div>
			</div>
		</div>
	</div>
	
	<div id="rightSide">
		<div style="padding: 5px 5px 5px 10px;">
			<p style="margin-top: 0">Another responsive example of AJAX-ZOOM where settings 
				are set the way that the user has only the possibility to spin at not zoomed state;  
				zoom on click goes down to 100%; an other click at zoomed state will zoom out again; 
				additionally a button appears for zoom out; with "prevNextAllData" option enabled 
				it is farthermore posssible to switch between different types of data (video, 360, plain images) 
				over left/right buttons, also at fullscreen mode.
			</p>
		</div>
	</div>
</div>
 

<script type="text/javascript">
	// Load 360 gallery and first spin
	jQuery.axZm360Gallery ({
		axZmPath: "../axZm/", // Path to /axZm/ directory, e.g. "/test/axZm/"
		divID: "axZmPlayerContainer", // The ID of the element (placeholder) where AJAX-ZOOM has to be inserted into
		embedResponsive: true, // if divID is responsive, set this to true
		spinGalleryContainerID: "spinGalleryContainer", // Parent container of gallery div
		spinGalleryID: "spinGallery",  
		spinGallery_tempID: "spinGallery_temp",
		
		// Configuration set value which is passed to ajax-zoom when using "galleryData"; 
		// some default settings from /axZm/zoomConfig.inc.php are overridden in 
		// /axZm/zoomConfigCustom.inc.php after elseif ($_GET['example'] == 'spinAnd2D_easy'){...;
		// additionally to $_GET['example'], image360 is passed over query string as a paramter 
		// when 360 or 3D are loaded, so it is available in the config file as $_GET['image360'] 
		// and the configuration set can be differed from plain images.
		exampleData: 'spinAnd2D_easy',
			
		// Over galleryData" option you can precisely define which 360s or 3D have to beloaded. 
		// Additionally you can also define regular 2D images and videos located at 
		// some straming platform like youtube, iframed content or load content over ajax
		galleryData: [
			["image360", "/pic/zoom3d/Uvex_Occhiali"],
			["youtube", "YzVl970CUoo"],
			["imageZoom", "/pic/zoom/furniture/furniture_001.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_002.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_003.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_004.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_005.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_006.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_007.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_008.jpg"],
			["imageZoom", "/pic/zoom/furniture/furniture_009.jpg"]
		],
		
		firstToLoad: "image360",
		
		prevNextAllData: {
			enabled: true,
			next: {file: '[buttonSet]/zoombutton_slide_vert_next', ext: 'png', w: 20, h: 100},
			prev: {file: '[buttonSet]/zoombutton_slide_vert_prev', ext: 'png', w: 20, h: 100} ,
			posNext: {right: 0, top: '50%', marginTop: -50, position: 'absolute', zIndex: 5},
			posPrev: {left: 0, top: '50%', marginTop: -50, position: 'absolute', zIndex: 5}
		},

		// Some of the AJAX-ZOOM option normally set in zoomConfig.inc.php and zoomConfigCustom.inc.php 
		// can be set directly as js var in this callback
		azOptions: {
			mapPos: 'bottomRight',
			mapBorder: {top: 0, right: 0, bottom: 0, left: 0},
			mapOpacity: 0.5,
			zoomMapSelOpacity: 0,

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
			
			},
			
			onCropEnd: function(info){
				if (!$.axZm.panSwitched && 
					!(info.crop.x1 == 0 && info.crop.y1 == 0 && info.crop.x2 == $.axZm.ow && info.crop.y2 == $.axZm.oh) && 
					!(info.crop.x1 == 0 && info.crop.y1 == 0 && info.crop.x2 == 0 && info.crop.y2 == 0)
					)
				{
					if (!$.axZm.panSwitched){
						$.fn.axZm.switchPan();
					}
				}
			},
			
 			onZoom: function(info){
				$('#axZm_zoomCustomNavi').addClass('axZm_displayBlockImportant');
				if (info.crop.x1 == 0 && info.crop.y1 == 0 && info.crop.x2 == $.axZm.ow && info.crop.y2 == $.axZm.oh){
					
					$('#axZm_zoomCustomNavi').removeClass('axZm_displayBlockImportant');
					
					if (!$.axZm.spinSwitched){
						$.fn.axZm.switchSpin();
					}
				}
			},
			
			onRestoreStart: function(){
				$.fn.axZm.switchSpin();
				$('#axZm_zoomCustomNavi').removeClass('axZm_displayBlockImportant');
			},
			
			onRestoreEnd: function(){
				$.fn.axZm.switchSpin();
				$('#axZm_zoomCustomNavi').removeClass('axZm_displayBlockImportant');
			},
			
			onSwipe: function(dir){
				
				if (dir == 'left'){
					$('#customBtn_mCustomBtn1').trigger('touchstart').trigger('touchend');
				}else if (dir == 'right'){
					$('#customBtn_mCustomBtn2').trigger('touchstart').trigger('touchend');
				}
				return false; // !
			}
		},
		
		axZmPar: "buttonSet=flat",
		
		zoomSwitchAnm: 'Center',
		
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
		thumbsAtFullscreen: 'bottom', 

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
			"Danform_split": "360° of the chair",
			"furniture_013.jpg": "orange",
			"furniture_014.jpg": "black",
			"furniture_015.jpg": "cream",
			"furniture_016.jpg": "orange",
			"furniture_017.jpg": "black",
			"furniture_018.jpg": "cream",
			"furniture_010.jpg": "dining table",
			"furniture_011.jpg": "dining table",
			"furniture_012.jpg": "dining table"
		}
	});
</script>
 
<div style="overflow: hidden; padding: 20px 10px 20px 10px;">
	<h2>Options</h2>
	<?php include ('extensions_doc/docu_360Gallery.inc.html'); ?>
</div>
</body>
</html>