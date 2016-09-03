<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Hover Zoom with image tiles</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Hover Zoom with image tiles"/>
<meta property="og:description" content="Javascript hover zoom / mouseover zoom with image tiles."/>
<meta name="description" content="Javascript hover zoom / mouseover zoom with image tiles." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_20.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>
<!-- jQuery core, needed if not already present! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core, needed! -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!-- Include mousewheel script, optional -->
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.mousewheel.min.js"></script>

<!-- Include thumbSlider JS & CSS, optional -->
<link rel="stylesheet" type="text/css" href="../axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css" />
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.axZm.thumbSlider.js"></script>

<!-- Include mouseOverZoomTiles JS & CSS, needed! -->
<link rel="stylesheet" type="text/css" href="../axZm/extensions/jquery.axZm.mouseOverZoomTiles.css" />
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.mouseOverZoomTiles.js"></script>


<style type="text/css" media="screen"> 
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
<h2 style="margin-left: 20px;">AJAX-ZOOM - flyout zoom / hover zoom - clean example</h2>
<div style="padding: 10px 0px 10px 20px;">
	

	<!-- Wrapper for media data, position relative or absolute! -->
	<div class="mouseOverTilesWrapper" style="position: relative; width: 302px; min-height: 400px;">

		<!-- Container for preview image (AJAX-ZOOM "image map") -->
		<div id="mouseOverTilesMapContainer" style="width: 300px; height: 300px;">
			<!-- Optional enlarge icon -->
			<div class="mouseOverTilesEnlarge"></div>
			
			<!-- Optional message -->
			<div class="mouseOverTilesMsg">use mousewheel to zoom in and out, click to enlarge</div>
		</div>

		<!-- Gallery with thumbs (will be filled with JS instantly as UL, LI) -->
		<div id="mouseOverTilesGallery" class="horizontal">
			Gellery loading...
		</div>
	</div>

	<!-- Link load documentation -->
	<p style="margin-top: 10px; clear: both; width: 950px;" id="docuParent">
		<script>var optionsHeader = '$.mouseOverZoomTiles documentation'; var optionsText = '';</script>
		<a href="javascript: void(0)" onclick="$.ajax({url: 'extensions_doc/docu_mouseOverZoomTiles.inc.html', cache: false, complete: function(r){$('#docuParent').html(r.responseText)}})">Load documentaion</a> for $.mouseOverZoomTiles 
	</p>
</div>
 
<!-- Init Mouse over zoom with tiles -->
<script type="text/javascript">
	$.mouseOverZoomTiles({
		axZmPath: "auto", // path to /axZm directory, e.g. /test/axZm/ or "auto" (auto might not always work)
		mapDivID: "mouseOverTilesMapContainer", // ID of the container for mouseover element
		galleryDivID: "mouseOverTilesGallery", // ID of the container where thumbnails will be inserted into
		images: {
			1: {img: "/pic/zoom/fashion/fashion_001.jpg", title: "fashion_001.jpg"},
			2: {img: "/pic/zoom/fashion/fashion_002.jpg", title: "fashion_002.jpg"},
			3: {img: "/pic/zoom/fashion/fashion_003.jpg", title: "fashion_003.jpg"},
			4: {img: "/pic/zoom/fashion/fashion_004.jpg", title: "fashion_004.jpg"},
			5: {img: "/pic/zoom/portrait/portrait_001.jpg", title: "portrait_001.jpg"},
			6: {img: "/pic/zoom/portrait/portrait_002.jpg", title: "portrait_002.jpg"},
			7: {img: "/pic/zoom/portrait/portrait_003.jpg", title: "portrait_003.jpg"},
			8: {img: "/pic/zoom/world/world_001.jpg", title: "world_001.jpg"},
			9: {img: "/pic/zoom/world/world_002.jpg", title: "world_002.jpg"},
			10: {img: "/pic/zoom/world/world_003.jpg", title: "world_003.jpg"}
		},
		firstImageToLoad: 1,
		thumbWidth: 86, // width of the thumbnail image
		thumbHeight: 86, // height of the thumbnail image
		galleryAxZmThumbSlider: true, // use $.axZmThumbSlider for the gallery. If false a different Ul->LI structure will be applied without scrolling capeability
		zoomWidth: 640, // max width of the image that will be shown in the zoom window
		zoomHeight: 500, // max height of the image that will be shown in the zoom window
		adjustX: 20, // space between mouse over zoom ("mapDivID") and flyout window to the right
		adjustY: 0, // vertical shift of the flyout window
		mapSelSmoothDrag: false, // activate smooth drag
		mapSelSmoothDragSpeed: 500, // speed of the dragging
		scrollZoom: 16, // prc zoom on mouse scroll
		fullScreenApi: false, // try to open AJAX-ZOOM at browsers fullscreen mode, possible on modern browsers 
		axZmCallBacks: {}  // callbacks which can be passed to AJAX-ZOOM
	});
</script>

</body>
</html>