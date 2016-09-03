<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM Photo Zoom external javascript controls</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Responsive ready AJAX-ZOOM external thumbs gallery"/>
<meta property="og:description" content="Show thumbs gallery and display high resolution images with jQuery AJAX-ZOOM player."/>
<meta name="description" content="Show thumbs gallery and display high resolution images with jQuery AJAX-ZOOM player." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_7.jpg"/> 

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
	body {margin: 0; padding: 0; height: 100%;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	.p{text-align: justify; text-justify: newspaper;}
	
	
	.outerimg{
		margin: 0px 5px 3px 0px;
		border: blue 2px solid;
	}
	
	/* Override some default styles for the demo
	   For your application you schould change the css file!	
	*/
	
	.axZm_zoomLogHolder{
		width: 50px;
		height: 35px;
	}
	
	.axZm_zoomLogJustLevel{
		width: 45px;
		color: #444444;
		font-size: 13pt; 
		font-family: Tahoma, Arial;
		margin: 10px 0px 0px 3px;
	}	
</style>


</head>
<body>

<?php
// This is only for the demo, you can remove it
include ('navi.php');
?>

<div style='width: 800px; margin: 0px auto;'>

	<h2>AJAX-ZOOM - embedded implementation with custom gallery next to the player. 
	Specified images with "zoomData". 
	Responsive ready.</h2>
	<div class="clearfix">
		<p>Ver. 4.2.1+ This example has been totally rewritten. It does not contain indispensable PHP code within the actual page any more. 
		Also all JavaScript has been wrapped into one plugin ($.axZm.thumbGallery) which is controllable 
		over various options passed to it. 
		</p>
		
		<p>In this example several images from different location are passed to the $.axZm.thumbGallery over "zoomData" option. 
		The plugin then generates a grid of thumbs next to AJAX-ZOOM player. 
		When clicked on the thumbs images in the player are switched to the selection. 
		</p>

		<div>
			<!-- Container where AJAX-ZOOM will be loaded into -->
			<div id="zoomInlineContent" style="float: left; width: 400px; min-height: 600px;"></div>

			<!-- Container where thumbs will be loaded into -->
			<div id="thumbsParentContainer" style="width: 380px; float: right;"></div>
			
			<!-- Not needed: some html for prev / next buttons -->
			<div style="text-align: center; width: 380px; float: right; margin-top: 20px">
				<input type="button" onclick="jQuery.fn.axZm.zoomPrevNext('prev')" value="<<">
				<input type="button" onclick="jQuery.fn.axZm.zoomPrevNext('next')" value=">>">
			</div>
			<div style="text-align: center; width: 380px; float: right; margin-top: 20px">
				Switch to next, prev image with API method 
				<a href="http://www.ajax-zoom.com/index.php?cid=docs#api_zoomPrevNext">$.fn.axZm.zoomPrevNext()</a>
			</div>
		</div>
		
		<p style="clear: both; padding-top: 30px;">To achieve similar result one could also use AJAX-ZOOM native API (without $.axZm.thumbGallery plugin).
		Most important API function for this is: 
		<a href="http://www.ajax-zoom.com/index.php?cid=docs#api_zoomSwitch">$.fn.axZm.zoomSwitch</a>;  
		$.axZm.thumbGallery is commented and could be edited by interesting programmers. 
		The plugin is used in several other examples you might want to take a look at<sup><a href="#o_sup_1">1</a></sup>.
		</p>
		
		<!-- Fire azThumbGallery, that's it -->
		<script type="text/javascript">
			jQuery.azThumbGallery({
				axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
				// Instead of zoomDir (entire folder or subfolders) we here pass
				// zoomData with images from different locations
				zoomData: [
					"/pic/zoom/fashion/fashion_001.jpg", 
					"/pic/zoom/fashion/fashion_002.jpg", 
					"/pic/zoom/fashion/fashion_003.jpg",
					"/pic/zoom/fashion/fashion_004.jpg",
					"/pic/zoom/fashion/fashion_005.jpg",
					"/pic/zoom/fashion/fashion_006.jpg",
					"/pic/zoom/fashion/fashion_007.jpg",
					"/pic/zoom/fashion/fashion_008.jpg",
					"/pic/zoom/fashion/fashion_010.jpg",
					"/pic/zoom/erotic/erotic_001.jpg",
					"/pic/zoom/erotic/erotic_003.jpg",
					"/pic/zoom/erotic/erotic_004.jpg"
				], 
				folderSelect: false, // Possible values: "select", "folders", "imgFolders"
				axZmCallBacks: {}, // No AJAX-ZOOM callbacks required
				fullScreenApi: true, // Try to open AJAX-ZOOM at browsers fullscreen mode
				
				thumbsCache: true, // Cache thumbnails
				thumbWidth: 80, // Width of the thumbnail image
				thumbHeight: 120, // Height of the thumbnail image
				thumbPadding: 2, // Padding 
				thumbMarginRight: 5, // Margin right
				thumbMarginBottom: 5, // Margin bottom
				thumbCss: {borderRadius: 1},
				thumbsPerPage: null, // Show this number of thumbnails at once
				thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to

				embedMode: true, // Display AJAX-ZOOM next to the thumbs
				embedResponsive: false, // if "embedDivID" is responsive, set it to true
				embedExample: "new9", // Configuration set which is passed to AJAX-ZOOM when "embedMode" is enabled
				embedDivID: "zoomInlineContent", // ID of the element (placeholder) where AJAX-ZOOM has to be inserted into 
				embedZoomSwitchAnm: "SwipeHorz", // Possible values: "Center", "Top", "Right", "Bottom", "Left", "StretchVert", "StretchHorz", "SwipeHorz", "SwipeVert", "Vert", "Horz" 
				embedZoomSwitchSpeed: 300
			});
		</script>
		
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
	<p>Both containers can be responsive! If the container where AJAX-ZOOM will be loaded into is responsive, 
	then set "embedResponsive" option below to true.
	</p>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('
<div>
<!-- Container where AJAX-ZOOM will be loaded into -->
<div id="zoomInlineContent" style="float: left; width: 400px; min-height: 600px;"></div>

<!-- Container where thumbs will be loaded into -->
<div id="thumbsParentContainer" style="width: 350px; float: right;"></div>
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
				// Instead of zoomDir (entire folder or subfolders) we here pass
				// zoomData with images from different locations
				zoomData: [
					"/pic/zoom/fashion/fashion_014.jpg", 
					"/pic/zoom/fashion/fashion_009.jpg", 
					"/pic/zoom/fashion/fashion_010.jpg", 
					"/pic/zoom/fashion/fashion_011.jpg", 
					"/pic/zoom/fashion/fashion_012.jpg", 
					"/pic/zoom/fashion/fashion_013.jpg", 
					"/pic/zoom/fashion/fashion_001.jpg", 
					"/pic/zoom/fashion/fashion_002.jpg", 
					"/pic/zoom/fashion/fashion_003.jpg", 
					"/pic/zoom/fashion/fashion_004.jpg", 
					"/pic/zoom/fashion/fashion_018.jpg", 
					"/pic/zoom/fashion/fashion_019.jpg",						
					"/pic/zoom/fashion/fashion_005.jpg", 
					"/pic/zoom/fashion/fashion_006.jpg", 
					"/pic/zoom/fashion/fashion_007.jpg", 
					"/pic/zoom/fashion/fashion_008.jpg",
					"/pic/zoom/fashion/fashion_016.jpg",
					"/pic/zoom/fashion/fashion_015.jpg",
					"/pic/zoom/fashion/fashion_017.jpg"
				], 
				folderSelect: false, // Possible values: "select", "folders", "imgFolders" or false
				axZmCallBacks: {}, // No AJAX-ZOOM callbacks required
				fullScreenApi: true, // Try to open AJAX-ZOOM at browsers fullscreen mode
				
				thumbsCache: true, // Cache thumbnails
				thumbWidth: 60, // Width of the thumbnail image
				thumbHeight: 90, // Height of the thumbnail image
				thumbPadding: 2, // Padding 
				thumbMarginRight: 5, // Margin right
				thumbMarginBottom: 5, // Margin bottom
				thumbCss: {borderRadius: 1},
				thumbsPerPage: null, // Show this number of thumbnails at once
				thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to

				embedMode: true, // Display AJAX-ZOOM next to the thumbs
				embedResponsive: false, // if "embedDivID" is responsive, set it to true
				embedExample: "new9", // Configuration set which is passed to AJAX-ZOOM when "embedMode" is enabled
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
		// This is only for the demo, you can remove it
		include ('footer.php');
	?>
</div>

</body>
</html>