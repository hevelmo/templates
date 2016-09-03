<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>3D Spin Rotate & Zoom 360 product viewer Javascript jQuery VR Objects 360° Reel</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="3D Spin Rotate & Zoom 360 product viewer Javascript jQuery VR Objects 360° Reel"/>
<meta property="og:description" content="AJAX-ZOOM is a unique tool to present 360° product images on the web (JavaScript). Users can rotate the VR 360 object, also on Z-axis (multirow). Additionally deep zoom on every frame. The adoption of image tiles technology (image pyramid) allows the usage of high resolution images without compression. It has full support for touch devices and works great on iPad. Pinch zoom is implemented too. "/>
<meta name="description" content="AJAX-ZOOM is a unique tool to present 360° product images on the web (JavaScript). Users can rotate the  VR 360 object, also on Z-axis (multirow). Additionally deep zoom on every frame. The adoption of image tiles technology (image pyramid) allows the usage of high resolution images without compression. It has full support for touch devices and works great on iPad. Pinch zoom is implemented too." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_15.jpg"/> 
 
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
	/*
	ol, ul {margin: 0; padding: 0 0 0 1em;}	
	li {margin-top: 10px;}
	*/
	.divEx {margin: 0px 0px 12px 0px; padding: 5px; border: #AAA 1px solid; background-color: #FDFDFD;}
	.divEx a{color: #000}
	.divExHead {margin-bottom: 0; background-color: #AAA; color: #000; padding: 5px;}
	.linkImage{width: 150px; height: auto; margin-right: 10px; border: #000000 1px solid;}
	.aAPI{background-color: #565656; border-radius: 3px; color: white; display: inline-block; font-size: smaller; margin: 3px; padding: 3px; text-decoration: none;}
	.aAPI:hover{background-color: #000000; color:#FFF;}
	.clearfix:after {content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;}	 
	.clearfix {display: inline-block;}
	html[xmlns] .clearfix {display: block;}
	* html .clearfix {height: 1%;}
	

</style>
 
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

<!--  Syntaxhighlighter is not needed, you should remove this block along with SyntaxHighlighter.all(); below -->
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

<div style='width: 990px; margin: 0px auto; overflow-x: hidden'>

	<h2>AJAX-ZOOM - 360°/3D Spin & Zoom JavaScript player</h2>

	<div style='clear: both;'>
		<table cellpadding="0" cellspacing="0"><tr>
			<td style="width: 602px; vertical-align: top;">
				
				<div style="width: 602px;">
					
					<!-- Placeholder for AJAX-ZOOM player -->
					<div id="axZmPlayerContainer" style='margin: 5px 0px 0px 0px; width: 602px; min-height: 400px; color: gray;'>
						<div style="margin: 0; padding-top: 175px; padding-left: 200px; min-height: 225px; background: url(../axZm/icons/ajax-loader-bar.gif) center center no-repeat;">
						Loading, please wait...
						</div>
					</div>
					
				</div>
				
				<h3 style="margin-top: 10px;">Selected AJAX-ZOOM 360° example highlights</h3>
				
				<!-- example35 -->
				<div style="" class="clearfix divEx">
					<a href="example35.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_35.jpg" border="0" align="left" class="linkImage" alt="Crop editor" title="Crop editor"></a>
					Fully configurable "cropped thumbs gallery" with "spinTo" and "zoomTo" is definitely must-see!<br />
					<a href="example35_clean.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_35_clean.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Clean example" title="Clean example"></a>
					<a href="example35_clean_horizontal.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_35_clean_horizontal.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Horizontal slider" title="Horizontal slider"></a>
					<a href="example35_responsive.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_35_responsive.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Resopnsive" title="Resopnsive"></a>
					<a href="example35_gallery.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_35_gallery.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Free layout" title="Free layout"></a>
				</div>
				
				<!-- example32 -->
				<div style="" class="clearfix divEx">
					<a href="example32.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_32.jpg" border="0" align="left" class="linkImage" alt="Mouseover zoom + 360" title="Mouseover zoom + 360"></a>
					Mouseover zoom with integrated 360°/3D support is a perfect all-in-one solution for e-commerce.<br />
					<a href="example32_clean.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_32_clean.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Clean example" title="Clean example"></a>
					<a href="example32_clean_vertical.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_32_clean_vertical.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Vertiacal gallery" title="Vertiacal gallery"></a>
				</div>
				
				<!-- example29 -->
				<div style="" class="clearfix divEx">
					<a href="example29.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_29.jpg" border="0" align="left" class="linkImage"></a>
					Show 360°/3D spins together with normal images, videos + documents as in "one player"<br />
					<a href="example29_clean.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_29_clean.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Clean example" title="Clean example"></a>
					<a href="example29_responsive.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_29_responsive.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Resopnsive" title="Resopnsive"></a>
					<a href="example29_no_slider.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_29_no_slider.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Free layout" title="Free layout"></a>

				</div>

				<div style="" class="clearfix divEx">
					<a href="example33.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_33.jpg" border="0" align="left" class="linkImage" alt="Hotspot configurator" title="Hotspot configurator"></a>
					Also check out the clickable and fully configurable <a href="example33.php">HOTSPOTS</a> configurator with tons of interesting features!<br>
					<a href="example33_clean.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_33_clean.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000; " alt="Clean example" title="Clean example"></a>
					<a href="example33_responsive.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_33_responsive.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Resopnsive" title="Resopnsive"></a>
					<a href="example33_fullscreen.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_33_fullscreen.jpg" border="0" align="left" style="float: left; width: 75px; margin-right: 10px; margin-top: 10px; border: 1px solid #000000;" alt="Resopnsive" title="Fullscreen"></a>
				</div>
				
				
				<h3>Derived / "clean" examples of example15.php</h3>
				<div class="clearfix divEx">
					<a href='example15_clean.php'><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_15_clean.jpg" border="0" align="left" class="linkImage"></a>
					For a clean example <b>without "360°/3D gallery"</b> and anything else please see here:<br>
					<a href='example15_clean.php'>http://www.ajax-zoom.com/examples/example15_clean.php</a><br>
					(no PHP code required at the frontend!)
				</div> 
				
				<div class="clearfix divEx">
					<a href="example15_responsive.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_15_responsive.jpg" border="0" align="left" class="linkImage"></a>
					To start AJAX-ZOOM <b>360°/3D in responsive / adaptive layout</b>, see <br>
					<a href="example15_responsive.php">http://www.ajax-zoom.com/examples/example15_responsive.php</a>
				</div>

				<div class="clearfix divEx">
					<a href="example15_fullscreen.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_15_fullscreen.jpg" border="0" align="left" class="linkImage"></a>
					To start AJAX-ZOOM <b>360°/3D in fullscreen mode</b>, see <br>
					<a href="example15_fullscreen.php">http://www.ajax-zoom.com/examples/example15_fullscreen.php</a>
				</div>
				
				<div class="clearfix divEx">
					<a href='example15_gallery_clean.php'><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_15_gallery_clean.jpg" border="0" align="left" class="linkImage"></a>
					For a clean example <b>with "360°/3D gallery"</b> and anything else please see here:<br>
					<a href='example15_gallery_clean.php'>http://www.ajax-zoom.com/examples/example15_gallery_clean.php</a><br>
					No PHP code required at the frontend. 
					The PHP code inside the file can be extracted into a different file and called over AJAX, 
					please see comments at the biginning of this PHP file.
				</div> 

				<h3>Some other implementations & examples of 360 spin tool</h3>

				<div class="clearfix divEx">
					<a href="example24.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_24.jpg" border="0" align="left" class="linkImage"></a>
					To implement AJAX-ZOOM <b>360/3D in responsive / adaptive layout with or without gallery</b>, see<br>
					<a href="example24.php">http://www.ajax-zoom.com/examples/example24.php</a>
				</div>
				
				<div class="clearfix divEx">
					<a href="example3.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_3.jpg" border="0" align="left" class="linkImage"></a>
					To load AJAX-ZOOM <b>360/3D in a lightbox e.g. Fancybox</b>, see <br>
					<a href="example3.php">http://www.ajax-zoom.com/examples/example3.php</a>
				</div>
				
				<div class="clearfix divEx">
					<a href="example27.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_27.jpg" border="0" align="left" class="linkImage"></a>
					To load AJAX-ZOOM <b>360/3D in a responsive / adaptive lightbox</b>, see 
					<a href="example27.php">http://www.ajax-zoom.com/examples/example27.php</a> 
				</div>
				
				<div class="clearfix divEx">
					<a href="http://www.ajax-zoom.com/examples/example15_vr.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_15_vr.jpg" border="0" align="left" class="linkImage"></a>
					Here you will find a <b>3D - multirow spin, rotate & zoom</b> example:<br>
					<a href="http://www.ajax-zoom.com/examples/example15_vr.php">http://www.ajax-zoom.com/examples/example15_vr.php</a><br> 
					It is not included in the download package, but 
					the only difference between regular 360 spin and multirow is that original images are placed in subfolders of the target folder 
					(the one you will be pointing AJAX-ZOOM at). You do not need to define these subfolders anywhere separately. 
					AJAX-ZOOM will instantly detect and procede all the images in them.<br><br> 
					<a href="http://www.ajax-zoom.com/examples/example15_vr9.php"><img src="http://www.ajax-zoom.com/pic/layout/image-zoom_15_vr9.jpg" border="0" align="left" class="linkImage"></a>
					Here is a truly VR spherical example with 9 rows and 90 images per row = 810 images 
					<a href="http://www.ajax-zoom.com/examples/example15_vr9.php">http://www.ajax-zoom.com/examples/example15_vr9.php</a> 
				</div>
 				
				<input type="button" value="All examples tagged with 360/3D" onclick="window.location.href='http://www.ajax-zoom.com/index.php?kw=360_product_view&lang=en';">

				
			</td>
			
			<td style="padding-left: 28px; vertical-align: top;">
			
				<!-- Slider with 360 objects (optionally). You can put it somewhere else, e.g. under the player, besides the player or whereever -->
				<div id="spinGalleryContainer" style="min-height: 80px; width: 360px; position: relative">
					<div id="spinGallery" style="min-height: 80px; width: 100%; position: releative">
						<!-- Temp message that will be removed after the slider initialization -->
						<div id="spinGallery_temp" class="spinGallery_temp" style="margin-top: 0;">
							Gallery with 360° objects will be loaded after the first spin is fully loaded, please wait...
						</div>
					</div>
				</div>

				
				<h3>General information - non technical</h3>
				<p style="margin-top: 0;">AJAX-ZOOM is a unique "Flash" free tool to present 360°/ 3D product images on the web. 
					Users can rotate 360° object (the sprite contains a set of single images), 
					also on Z-axis (3D multirow) and additionally deep zoom on every frame. 
					The adoption of image tiles technology (image pyramid) allows utilizing high resolution images without 
					compression rates which would destroy the image quality.
				</p>
				
				<p>AJAX-ZOOM has full support for touch devices, e.g. pinch zoom with two fingers and works great on iPad. 
					In the full screen or responsive modes AJAX-ZOOM loads as many image tiles as needed to fit users screen resolution and 
					thus provides best details quality quickly also with low bandwidth connectivity, which is perfect for mobile implementations.
					AJAX-ZOOM player can be completely restyled (skinned) to fit any design / corporate identity. 
				</p>
				
				<div style="margin-top: 5px;">
					<b>Some external controls and functionality over AJAX-ZOOM API</b><br>
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.zoomIn({ajxTo: 750})">zoomIn</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.zoomOut({ajxTo: 750})">zoomOut</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.zoomReset()">reset</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.switchPan()">switch pan</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.switchSpin()">switch spin</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.switchCrop()">switch crop</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.spinStart(999)">start spin</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.spinStop()">stop spin</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.spinPlayToggle(999)">spin toggle</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.spinBy(1)">spinBy (1)</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.spinBy(-1)">spinBy (-1)</a> 
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.spinTo(1, false, false, false, {'x1': ($.axZm.ow/2), 'y1': ($.axZm.oh/2), 'zoomLevel': '100%'})">spinTo third frame and zoom</a>
					<a href="javascript: void(0)" class="aAPI" onclick="jQuery.fn.axZm.initFullScreen()">Go fullscreen</a>
				</div>
				
				
				<h3>360° Gallery</h3>
				<p style="margin-top: 0;">The gallery with other 360/3D objects right to the player on this page is optional! 
					Most likely you will not need this gallery. However we also provide a "clean" 
					example with this gallery and no PHP in the frontend. 
					Player and gallery are loaded over one function - $.axZm360Gallery() and are really easy to configure. 
					Update: the "thumb slider" used for the external 360 gallery is replaced with our own which can 
					be configured in many different ways, see demo <a href="../axZm/extensions/axZmThumbSlider/">here</a>.
				</p>
				
				<h3>Do not like the black toolbar?</h3>
				<p style="margin-top: 0;">
					<img src="http://www.ajax-zoom.com/pic/layout/option_screens/mNavi1.jpg" border="0" align="left" style="margin: 3px 10px 5px 0px">
					If you do not like the toolbar below the player see e.g. 
					<a href="http://www.ajax-zoom.com/examples/example28.php">example28.php</a> which is fully functional without this toolbar. 
					Of course you can also completely reskinn and disable certain buttons, 
					<a href="http://www.ajax-zoom.com/index.php?cid=docs#Zoom_Navigation" target="_blank">remove</a> this toolbar completely, 
					<a href="http://www.ajax-zoom.com/index.php?cid=docs#Mobile_Navigation" target="_blank">enable a different tollbar</a> 
					which looks more modern and has more options to configure. 
					And you can also reproduce the navi behaviour with buttons placed whereever in your layout using  
					<a href="http://www.ajax-zoom.com/index.php?cid=docs#API_JS_METHODS" target="_blank">AJAX-ZOOM API</a>. 
					Please note that this black toolbar might not be seen if you are on iPad or some other mobile devices, 
					because the default settings of 
					<a href="http://www.ajax-zoom.com/index.php?cid=docs#touchSettings" target="_blank">touchSettings</a> 
					option might be set to disable this navi for touch devices...
				</p>

				<h3>For developers - some technical stuff</h3>
				<p style="margin-top: 0;">Following is some very basic technical information about AJAX-ZOOM. If your are serious about trying and implementing AJAX-ZOOM on your webpage, 
					then viewing <a href="http://www.ajax-zoom.com/index.php?cid=examples">other examples</a> and browsing in 
					documentation are highly recommended as first step! After you have found an example which does conceptually suits your needs, 
					your should 
					<a href="http://www.ajax-zoom.com/index.php?cid=download" href="_blank">download</a> the package and 
					<a href="http://www.ajax-zoom.com/index.php?cid=docs#heading_2" href="_blank">make it work</a> on your server or localhost. 
				</p>
				
				<p>While searching for a suitable example do not pay attention to design, galleries and other things, 
					which are all configurable, adjustable and can be disabled. 
					The point is, that AJAX-ZOOM is so flexible, that our team sometimes does not recognize its own product 
					after it has been implemented and adjusted by the customers. 
					If you are not sure what example is the right one to start with, you can 
					<a href="http://www.ajax-zoom.com/index.php?cid=contact">send us</a> 
					a mockup which would visualize your intent and we will gladly give you a hint. 
				</p>

				<p>Basically to load the 360 spinner all you need is to define the directory ("3dDir" parameter) where images (frames of 360) are located. 
					The number of frames depends on the number of images in this directory and will be determined instantly! 
					For a single row (360, not sptherical 3D) you should have at least 12 images. 
					The more images are available, the smoother is your animation. 
					However, the more images are loaded, the longer it takes for the preload. 
					Therefore we consider 72 images as perfertly smooth for the web; 
					36 images is a good average used by many customers these days.
				</p>
				
				<p>All image processing including the generation of image tiles is done on-the-fly during the first load of AJAX-ZOOM in the browser. 
					You can however pre-process all your 360s with the provided batch tool (/axZm/zoomBatch.php);
				</p>

				<p>There are several 360/3D specific <a href="http://www.ajax-zoom.com/index.php?cid=docs#VR_Object" target="_blank">options</a> 
					to adjust the spin behaviour and appearance. However all other options from plain 2D zoom are applicable to 360 degree player as well! 
					A small selection of selected parameters has been made to be visually changed in this example 
					(more parameters in the <a href="http://www.ajax-zoom.com/index.php?cid=docs">online documentation</a>): 
					<a href="javascript: void(0)" onclick="reverseSpin()">Reverse</a> spin direction.  
					<a href="javascript: void(0)" onclick="setSpinState(true)">Enable</a> | 
					<a href="javascript: void(0)" onclick="setSpinState(false)">disable</a> the blur effect. 
					<a href="javascript: void(0)" onclick="setNaviStatus(false)">Disable</a> | 
					<a href="javascript: void(0)" onclick="setNaviStatus(true)">enable</a> the navigation toolbar. 
					<a href="javascript: void(0)" onclick="setZoomSlider(false)">Disable</a> | 
					<a href="javascript: void(0)" onclick="setZoomSlider(true)">enable</a> the zoom slider and 
					<a href="javascript: void(0)" onclick="setSpinSlider(false)">disable</a> |
					<a href="javascript: void(0)" onclick="setSpinSlider(true)">enable</a> the spin slider.
				</p>

				<p>By defining the query string parameter in ajaxZoom.parameter "example=17" some default settings from 
					/axZm/zoomConfig.inc.php are overridden in /axZm/zoomConfigCustom.inc.php after <code>elseif ($_GET['example'] == 17){</code>.
					So if changes in /axZm/zoomConfig.inc.php have no effect look for the same options /axZm/zoomConfigCustom.inc.php; 
					<a href="http://www.ajax-zoom.com/index.php?cid=docs#heading_3" target="_blank">Here</a> 
					you will find more information on how to setup options best.
				</p>			
				
				<p>To interested developers AJAX-ZOOM offers a variety of 
					<a href="http://www.ajax-zoom.com/index.php?cid=docs#API_JS_METHODS" target="_blank">methods</a> and 
					<a href="http://www.ajax-zoom.com/index.php?cid=docs#API_CALLBACKS" target="_blank">callbacks</a> 
					to develop a highly customized applications. Alternatively we can create your individual application as a custom work. 
				</p>
				
				<input type="button" value="Download AJAX-ZOOM 360°/3D" style="font-size: 150%; margin-right: 10px; cursor: pointer;" onclick="window.location.href = 'http://www.ajax-zoom.com/index.php?cid=download'"> 
				<br><span style="font-size: 80%">free download with sample images and all the examples</span>
				
			</td>
		
		</tr></table>


 		<!-- Init AJAX-ZOOM 360 and the 360 gallery -->
		<script type="text/javascript">
			// Init AJAX-ZOOM 360 and the 360 gallery
			$.axZm360Gallery ({
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
				thumbsAtFullscreen: false, // show 360 thumb gallery at fullscreen mode, possible values: "bottom", "top", false
				axZmThumbSlider: true, // use axZmThumbSlider extension for the thumbs, set false to disable
				
				// Options passed to axZmThumbSlider
				// For more information see /axZm/extensions/axZmThumbSlider/
				axZmThumbSliderParam: {
					// e.g.
					//btn: false // disable left/right buttons
				},
				
				thumbsCache: true, // cache thumbnails
				thumbWidth: 68, // width of the thumbnail image
				thumbHeight: 68, // height of the thumbnail image
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

		


		<!-- ********************************************* -->
		<!-- Following is not needed for AJAX-ZOOM to work -->
		<!-- ********************************************* -->
		<script type="text/javascript">
			// These js functions are just for the demo, they are not needed for the implementation
			var scrollToPageTop = function(){
				window.scrollTo(0, 0); 
			};
			
			var setSpinState = function(q){
				if(jQuery.axZm){
					jQuery.axZm.spinEffect.enabled=q;
					scrollToPageTop();
				}
			};
			
			var setNaviStatus = function(q){
				if(jQuery.axZm){
					if (q===false){
						jQuery('#axZm_zoomNavigation').css('display', 'none');
						jQuery.fn.axZm.switchSpin(true);
					} else{
						jQuery('#axZm_zoomNavigation').css('display', 'block');
					}
					scrollToPageTop();
				}
			};
			
			var reverseSpin = function(){
				if(jQuery.axZm){
					if (jQuery.axZm.spinReverse === true){
						jQuery.axZm.spinReverse = false;
					}else{
						jQuery.axZm.spinReverse = true;
					}
					scrollToPageTop();
				}
			};
			
			var setZoomSlider = function(q){
				if (q === false){
					jQuery('#axZm_zoomSliderZoomContainer').css('visibility', 'hidden');
				} else {
					jQuery('#axZm_zoomSliderZoomContainer').css('visibility', 'visible');
				}
				scrollToPageTop();
			};
			
			var setSpinSlider = function(q){
				if (q === false){
					jQuery('#axZm_zoomSliderSpinContainer').css('display', 'none');
				} else {
					jQuery('#axZm_zoomSliderSpinContainer').css('display', 'block');
				}
				scrollToPageTop();
			};
		</script>
 		
 		<h3>Simple integration example code - fixed width and height without 360 gallery</h3>
		<p style="margin-top: 0;">The below code is from <a href="example15_clean.php">example15_clean.php</a>; 
			For 360 gallery and responsive examples please see derived examples and other above.
		</p>
		
		<!-- Code head -->
		<h4>JavaScript & CSS files in Head</h4>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
			echo "<pre class='brush: html; js; '>";
			echo htmlspecialchars ('
<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript && CSS -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
		');
		echo "</pre>";	
		?>
		</div>
		
		<!-- Code body -->
		<h4>HTML markup in body</h4>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('
<!--  Placeholder for AJAX-ZOOM player -->
<DIV id="AZplayerParentContainer" style="margin: 5px 0px 0px 10px; width: 602px; min-height: 400px; color: gray;">
<DIV style="margin: 0; padding-top: 175px; padding-left: 200px; min-height: 225px; background: url(../axZm/icons/ajax-loader-bar.gif) center center no-repeat;">
Loading, please wait...
</DIV>
</DIV>
		');
		echo "</pre>";	
		?>
		</div>
		
		<!-- Code js -->
		<h4>JavaScript</h4>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
			echo "<pre class='brush: js; '>";
			echo htmlspecialchars ('
// Create empty jQuery object which is interpreted in axZm/jquery.axZm.loader.js
var ajaxZoom = {}; 

// Define callbacks, for complete list check the docs
// http://www.ajax-zoom.com/index.php?cid=docs#API_CALLBACKS
ajaxZoom.opt = {
	onBeforeStart: function(){
		// Some of the options can be set directly as js var in this callback
		jQuery.axZm.spinReverse = true;
	}
};

// Define the path to the axZm folder, adjust the path if needed!
ajaxZoom.path = "../axZm/"; 

// Define your custom parameter query string
// example=17 has many presets for 360 images*
// 3dDir - best of all absolute path to the folder with 360/3D images
// *By defining the query string parameter in ajaxZoom.parameter example=17 
// some default settings from /axZm/zoomConfig.inc.php are overridden in 
// /axZm/zoomConfigCustom.inc.php after elseif ($_GET[\'example\'] == 17){. 
// So if changes in /axZm/zoomConfig.inc.php have no effect - 
// look for the same options /axZm/zoomConfigCustom.inc.php; 
ajaxZoom.parameter = "example=17&3dDir=/pic/zoom3d/Uvex_Occhiali"; 

// The ID of the element (placeholder) where AJAX-ZOOM has to be inserted into
ajaxZoom.divID = "AZplayerParentContainer";

// Load AJAX-ZOOM
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

		
	</div>
	
	<?php
	// This include is just for the demo, you can remove it
	include ('footer.php');
	?>
</div>



</body>
</html>