<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM - image map outside, custom layout</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM - image map outside, custom layout"/>
<meta property="og:description" content="Sometimes designers have the need for very simple image zoom feature with extended styling possibilities. Unlike most other examples the image map is positioned outside of AJAX-ZOOM player."/>
<meta name="description" content="Sometimes designers have the need for very simple image zoom feature with extended styling possibilities. Unlike most other examples the image map is positioned outside of AJAX-ZOOM player." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_16.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>


<!-- jQuery core, needed! -->
<script type="text/javascript" src="../axZm/plugins/jquery-1.8.3.min.js"></script>

<!-- AJAX-ZOOM core, needed! -->
<link rel="stylesheet" href="../axZm/axZm.css" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!-- AJAX-ZOOM thumbGallery extension, needed! -->
<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.thumbGallery.css" type="text/css">
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.thumbGallery.js"></script>

<!-- This code block (syntaxhighlighter) is not needed! Pleae remove it from your application! -->
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
	p {text-align: justify; text-justify: newspaper;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}

	#axZm_zoomContainer{
		background-color: #FFFFFF;
	}
	
	#axZm_zoomMapHolder{
		border-color: #000;
		bottom: 0 !important;
	}
	
	.axZm_zoomCustomNavi, .axZm_zoomCustomNaviFS{
		background-image: none;
		padding: 0;
	}
</style>
	
</head>
<body>

<?php
// This is only for the demo, you can remove it
include ('navi.php');
?>

<div style='width: 820px; margin: 0px auto;'>
	
	<div style='background-color: #FFF; padding: 10px; margin: 5px;'>

		<div class="clearfix">

			<div class="clearfix" style="width: 780px; position: relative; padding: 10px; background-image: url(../axZm/icons/body.gif);">
				<h2>AJAX-ZOOM - no toolbar, image map outside, zoom slider enabled, custom navi using api functions. 
					Responsive ready!
				</h2>
				
				<!-- Container where AJAX-ZOOM will be loaded into -->
				<div id="zoomInlineContent" style="float: left; width: 402px; min-height: 602px;"></div>
				
				<!-- Container where thumbs will be loaded into -->
				<div id="thumbsParentContainer" style="width: 360px; height: 340px; float: right;"></div>
				
				<!-- Container for map -->
				<div id="mapContainer" style="position: absolute; width: 360px; height: 302px; right: 10px; bottom: 10px;"></div>
			</div>
			
			<!-- Fire azThumbGallery, that's it -->
			<script type="text/javascript">
				jQuery.azThumbGallery({
					axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
					zoomData: [ // Paths to images
						"/pic/zoom/fashion/fashion_001.jpg",
						"/pic/zoom/fashion/fashion_002.jpg",
						"/pic/zoom/fashion/fashion_003.jpg",
						"/pic/zoom/fashion/fashion_004.jpg",
						"/pic/zoom/fashion/fashion_005.jpg",
						"/pic/zoom/boutique/boutique_006.jpg"
					], 
					firstFolder: null, // After page loads select from which subfolder thumbnails should be loaded, integer or string
					folderSelect: false, // Possible values: "select", "folders", "imgFolders"
					axZmCallBacks: {  // AJAX-ZOOM has several callbacks
						onBeforeStart: function(){
							jQuery.axZm.useMap = true;
							
							// Set some controls over JS
							jQuery.axZm.mNavi.enabled = true;
							jQuery.axZm.mNavi.fullScreenShow = true;
							jQuery.axZm.mNavi.mouseOver = true;
							jQuery.axZm.mNavi.gravity = 'bottomRight';
							jQuery.axZm.mNavi.offsetVert = 5;
							jQuery.axZm.mNavi.offsetVertFS = 5;
							
							jQuery.axZm.mNavi.alt.enabled = false;
							jQuery.axZm.mNavi.order = {
								mZoomOut: 5,
								mZoomIn: 5,
								mReset: 0
							}
							
							jQuery.axZm.icons.mZoomIn = {file: 'default/button_iPad_in', ext: 'png', w: 25, h: 25};
							jQuery.axZm.icons.mZoomOut = {file: 'default/button_iPad_out', ext: 'png', w: 25, h: 25};
							jQuery.axZm.icons.mReset = {file: 'default/button_iPad_reset', ext: 'png', w: 25, h: 25};
							
							jQuery.axZm.zoomSlider = true;
							jQuery.axZm.zoomSliderHorizontal = true;
							jQuery.axZm.zoomSliderHeight = 100;
							jQuery.axZm.zoomSliderHandleSize = 11;
							jQuery.axZm.zoomSliderWidth = 5;
							jQuery.axZm.zoomSliderMarginH = 10;
							jQuery.axZm.zoomSliderPosition = 'bottomLeft';
							jQuery.axZm.zoomSliderMouseOver = true;
						}
					},
					fullScreenApi: false, // Try to open AJAX-ZOOM at browsers fullscreen mode
					thumbsCache: true, // Cache thumbnails
					thumbWidth: 90, // Width of the thumbnail image
					thumbHeight: 90, // Height of the thumbnail image
					thumbQual: 90, // jpg quality of the thumbnail image
					thumbPadding: 5, // Padding 
					thumbMarginRight: 10, // Margin right
					thumbMarginBottom: 10, // Margin bottom
					thumbsPerPage: null, // Show this number of thumbnails at once
					thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to
					selectContainer: "selectParentContainer", // ID of the element where the select with subfolders will be appended to
					
					embedMode: true, // Display AJAX-ZOOM next to the thumbs
					embedResponsive: false, // if "embedDivID" is responsive, set it to true
					embedExample: 18, // Configuration set which is passed to AJAX-ZOOM when "embedMode" is enabled
					embedDivID: "zoomInlineContent", // ID of the element (placeholder) where AJAX-ZOOM has to be inserted into 
					embedZoomSwitchAnm: "SwipeHorz", // Possible values: "Center", "Top", "Right", "Bottom", "Left", "StretchVert", "StretchHorz", "SwipeHorz", "SwipeVert", "Vert", "Horz" 
					embedZoomSwitchSpeed: 300
				});
			</script>
			
			<p>Ver. 4.2.1+ This example has been totally rewritten. It does not contain indispensable PHP code within the actual page any more. 
			Also all JavaScript has been wrapped into one plugin ($.axZm.thumbGallery) which is controllable 
			over various options passed to it. 
			</p>
			
			<p>In this example several images from different location are passed to the $.axZm.thumbGallery over "zoomData" option. 
			The plugin then generates a grid of thumbs next to AJAX-ZOOM player. 
			When clicked on the thumbs images in the player are switched to the selection. 
			</p>
			
			<p>To achieve simmilar result one could also use AJAX-ZOOM native API (without $.axZm.thumbGallery plugin).
			Most important API function for this is: 
			<a href="http://www.ajax-zoom.com/index.php?cid=docs#api_zoomSwitch">$.fn.axZm.zoomSwitch</a>;  
			$.axZm.thumbGallery is commented and could be edited by interesting programmers. 
			The plugin is used in several other examples you might want to take a look at<sup><a href="#o_sup_1">1</a></sup>.
			</p>
			
			<p style="text-decoration: line-through"><b>Toolbar:</b> in this example the "native" toolbar is completly disabled. 
			Instead there is a custom div container with some icons in it. 
			Each icon has an onclick event with api function like jQuery.fn.axZm.zoomIn() or jQuery.fn.axZm.zoomOut(). 
			After AJAX-ZOOM is loaded this div container is appended to and positioned inside AJAX-ZOOM with the help of the "onLoad" callback.
			</p>
			
			<p><b>Toolbar:</b> in this example the "native" toolbar is completly disabled. 
			Instead "mNavi" buttons are set in onBeforeStart callback with JS. 
			Can be also done in /axZm/zoomConfig.inc.php or /axZm/zoomConfigCustom.inc.php 
			after <code>elseif ($_GET['example'] == 18){</code> 
			See also "embedExample" option below.
			</p>
			
			<p><b>Image map:</b> unlike in most other examples the image map is positioned outside of AJAX-ZOOM player. 
			This can be done with the option "mapParent" in /axZm/zoomConfig.inc.php or zoomConfigCustom.inc.php; 
			"mapParent" defines the ID of a block element e.g. a DIV on the page. 
			The size of the map is controlled by the options "mapWidth" and "mapHeight". 
			</p>
			
		</div>
		
		<!-- Code head -->
		<h3>JavaScript & CSS files in Head</h3>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
			echo "<pre class='brush: html; js; '>";
			echo htmlspecialchars ('
	<!-- jQuery core, needed! -->
	<script type="text/javascript" src="../axZm/plugins/jquery-1.8.3.min.js"></script>

	<!-- AJAX-ZOOM core, needed! -->
	<link rel="stylesheet" href="../axZm/axZm.css" type="text/css">
	<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

	<!-- AJAX-ZOOM thumbGallery extension, needed! -->
	<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.thumbGallery.css" type="text/css">
	<script type="text/javascript" src="../axZm/extensions/jquery.axZm.thumbGallery.js"></script>
		');
		echo "</pre>";	
		?>
		</div>
		
		<!-- Code body -->
		<h3>HTML markup in body</h3>
		<p>All containers can be responsive! If the container where AJAX-ZOOM will be loaded into is responsive, 
		then set "embedResponsive" option below to true.
		</p>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
			echo "<pre class='brush: html; js; '>";
			echo htmlspecialchars ('
<div class="clearfix" style="width: 780px; position: relative; padding: 10px;">
	<!-- Container where AJAX-ZOOM will be loaded into -->
	<div id="zoomInlineContent" style="float: left; width: 402px; min-height: 602px;"></div>
	
	<!-- Container where thumbs will be loaded into -->
	<div id="thumbsParentContainer" style="width: 360px; height: 340px; float: right;"></div>
	
	<!-- Container for map -->
	<div id="mapContainer" style="position: absolute; width: 360px; height: 302px; right: 10px; bottom: 10px;"></div>
</div>
		');
		echo "</pre>";	
		?>
		</div>
		
		<!-- Code js -->
		<h3>JavaScript</h3>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
			echo "<pre class='brush: js; '>";
			echo htmlspecialchars ('
jQuery.azThumbGallery({
	axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
	zoomData: [ // Paths to images
		"/pic/zoom/fashion/fashion_001.jpg",
		"/pic/zoom/fashion/fashion_002.jpg",
		"/pic/zoom/fashion/fashion_003.jpg",
		"/pic/zoom/fashion/fashion_004.jpg",
		"/pic/zoom/fashion/fashion_005.jpg",
		"/pic/zoom/boutique/boutique_006.jpg"
		
	], 
	firstFolder: null, // After page loads select from which subfolder thumbnails should be loaded, integer or string
	folderSelect: false, // Possible values: "select", "folders", "imgFolders"
	axZmCallBacks: {  // AJAX-ZOOM has several callbacks
		onBeforeStart: function(){
			// Set some controls over JS
			jQuery.axZm.mNavi.enabled = true;
			jQuery.axZm.mNavi.fullScreenShow = true;
			jQuery.axZm.mNavi.mouseOver = true;
			jQuery.axZm.mNavi.gravity = "bottomRight";
			jQuery.axZm.mNavi.offsetVert = 5;
			jQuery.axZm.mNavi.offsetVertFS = 5;
			
			jQuery.axZm.mNavi.alt.enabled = false;
			jQuery.axZm.mNavi.order = {
				mZoomOut: 5,
				mZoomIn: 5,
				mReset: 0
			}
			
			jQuery.axZm.icons.mZoomIn = {file: "default/button_iPad_in", ext: "png", w: 25, h: 25};
			jQuery.axZm.icons.mZoomOut = {file: "default/button_iPad_out", ext: "png", w: 25, h: 25};
			jQuery.axZm.icons.mReset = {file: "default/button_iPad_reset", ext: "png", w: 25, h: 25};
			
			jQuery.axZm.zoomSlider = true;
			jQuery.axZm.zoomSliderHorizontal = true;
			jQuery.axZm.zoomSliderHeight = 100;
			jQuery.axZm.zoomSliderHandleSize = 11;
			jQuery.axZm.zoomSliderWidth = 5;
			jQuery.axZm.zoomSliderMarginH = 10;
			jQuery.axZm.zoomSliderPosition = "bottom";
			jQuery.axZm.zoomSliderMouseOver = true;
		}
	},
	fullScreenApi: false, // Try to open AJAX-ZOOM at browsers fullscreen mode
	thumbsCache: true, // Cache thumbnails
	thumbWidth: 90, // Width of the thumbnail image
	thumbHeight: 90, // Height of the thumbnail image
	thumbQual: 90, // jpg quality of the thumbnail image
	thumbPadding: 5, // Padding 
	thumbMarginRight: 10, // Margin right
	thumbMarginBottom: 10, // Margin bottom
	thumbsPerPage: null, // Show this number of thumbnails at once
	thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to
	selectContainer: "selectParentContainer", // ID of the element where the select with subfolders will be appended to
	
	embedMode: true, // Display AJAX-ZOOM next to the thumbs
	embedResponsive: false, // if "embedDivID" is responsive, set it to true
	embedExample: 18, // Configuration set which is passed to AJAX-ZOOM when "embedMode" is enabled
	embedDivID: "zoomInlineContent", // ID of the element (placeholder) where AJAX-ZOOM has to be inserted into 
	embedZoomSwitchAnm: "SwipeHorz", // Possible values: "Center", "Top", "Right", "Bottom", "Left", "StretchVert", "StretchHorz", "SwipeHorz", "SwipeVert", "Vert", "Horz" 
	embedZoomSwitchSpeed: 300
});
			');
			echo "</pre>";		
			?>
			
		</div>
		
		<!-- Docu -->
		<h3>$.azThumbGallery - documentation (options)</h3>
		<div>
			<?php include (dirname(__FILE__).'/extensions_doc/docu_thumbGallery.inc.html');?>
		</div>

		<?php
		// // This is only for the demo, you can remove it
		include ('footer.php');
		?>
	</div>
</div>

</body>
</html>