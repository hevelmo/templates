<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Responsive 2D zoom player with gallery</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta name="description" content="Responsive 2D zoom player with gallery" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_22_new.jpg"/> 

<?php
// Set scale for iPhone and disable user scalability
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<!--  Include jQuery core into head section if not already present -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link type="text/css" href="../axZm/axZm.css" rel="stylesheet" />

<!-- Javascript to style the syntax on this demo page, not needed, should be removed! -->
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
	body {margin: 0; padding: 0; background-color: #CCC;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	#axZmPlayerContainer{width: 60%;}
	#someOtherContainer{width: 40%;}
 	@media only screen and (max-width: 1280px) {
		#axZmPlayerContainer{width: 100%; }	
		#someOtherContainer{width: 100%; height: auto !important;}
	}
	
</style>

</head>
<body>

<div style="max-width: 1600px; margin: 0 auto;">

	<?php
	// This include is just for the demo, you should remove it
	include ('navi.php');
	?>
	
	<div style="height: 110px; background-color: #B9CC52; position: relative;">
		<h2 style="margin: 0; padding: 25px 10px 0 10px;">
			Responsive 2D zoom player with gallery and only CSS for layout
		</h2>
	</div>

	<div style="height: calc(100vh - 110px - 58px - 10px); position: relative;">

		<div id="someOtherContainer" style="height: 100%; float: left; background-color: #f8f8f8; position: relative; overflow-y: auto; overflow-x: hidden;">
			<div style="padding: 10px">
				<p style="margin-top: 10;">In the HTML markup below we simplified by setting the height to a fixed pixel value.
					In your CSS layout, if you want to the height to be responsive, please make sure that the parent container is responsive too / has calculated height. 
					Then you could set the height of "axZmPlayerContainer" to 100%; Otherwise you will not see anything! 
					Indeed in this example we have set the CSS height of one of the nested parent containers to calc(100vh - 110px - 58px - 10px) which is 
					100% body height minus some other values...
				</p>
				<h3>Javascript and CSS files in head</h3>
				<?php
				echo "<pre class='brush: html;'>";
				echo htmlspecialchars ('
					<!--  Include jQuery core into head section if not already present -->
					<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

					<!--  AJAX-ZOOM javascript -->
					<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
					<link type="text/css" href="../axZm/axZm.css" rel="stylesheet" />');
				echo '</pre>';
				?>
				<h3>HTML Markup</h3>
				<?php
				echo "<pre class='brush: html;'>";
				echo htmlspecialchars ('
					<!-- Container where AJAX-ZOOM will be loaded into -->
					<div id="axZmPlayerContainer" style="width: 100%; height: 500px; background-color: #FFF; position: relative;"></div>');
				echo '</pre>';
				?>
				
				<h3>Javacript</h3>
				<?php
				echo "<pre class='brush: js;'>";
				echo htmlspecialchars ('
					// Define some var to hold AJAX-ZOOM related values
					window.ajaxZoom = {};
					
					// Path to /axZm/ folder, adjust the path in your implementaion
					ajaxZoom.path = "../axZm/";
					
					// Define the ID of the responsive container
					ajaxZoom.targetID = "axZmPlayerContainer";
					
					// Images to load
					ajaxZoom.zoomData = [
						"/pic/zoom/boutique/boutique_001.jpg",
						"/pic/zoom/boutique/boutique_002.jpg",
						"/pic/zoom/boutique/boutique_003.jpg",
						"/pic/zoom/boutique/boutique_004.jpg",
						"/pic/zoom/boutique/boutique_005.jpg",
						"/pic/zoom/boutique/boutique_006.jpg",
						"/pic/zoom/boutique/boutique_013.jpg",
						"/pic/zoom/boutique/boutique_014.jpg",
						"/pic/zoom/fashion/fashion_002.jpg",
						"/pic/test/hb/i7a0125.jpg",
						"/pic/test/hb/i7a1445.jpg"
					];
					
					// "example" in query string which is passed to AJAX-ZOOM defines an options set
					// which differs from default values. You can find the options set of this example 
					// in /axZm/zoomConfigCustom.inc.php after 
					// elseif ($_GET[\'example\'] == 23)
					ajaxZoom.queryString = "example=23";
					
					// Pass images as CSV separated with \'|\', you could also use zoomDir to load entire directory with images instead of zoomData
					// For more information about parameters which can be passed see example27.php
					ajaxZoom.queryString += "&zoomData="+ajaxZoom.zoomData.join("|");

					// AJAX-ZOOM possible callbacks
					ajaxZoom.ajaxZoomCallbacks = {
						
					};
					
					// Enable overlay before AJAX-ZOOM loads
					window.fullScreenStartSplash = {"enable": true, "className": false, "opacity": 0.75};
					
					// Use jQuery.fn.axZm.openFullScreen() API to trigger AJAX-ZOOM responsive
					jQuery.fn.axZm.openResponsive(ajaxZoom.path, ajaxZoom.queryString, ajaxZoom.ajaxZoomCallbacks, ajaxZoom.targetID, true, false, false);');
				echo '</pre>';
				?>
			</div>
		</div>
		
		<!-- Container where AJAX-ZOOM will be loaded into -->
		<div id="axZmPlayerContainer" style="height: 100%; float: left; background-color: #FFF; position: relative;"></div>
		
	</div>
	 
	<div style="height: 10px; background-color: #CCC;">

	</div>

</div>

<script type="text/javascript">
	// Define some var to hold AJAX-ZOOM related values
	window.ajaxZoom = {};
	
	// Path to /axZm/ folder, adjust the path in your implementaion
	ajaxZoom.path = '../axZm/';
	
	// Define the ID of the responsive container
	ajaxZoom.targetID = 'axZmPlayerContainer';
	
	// Images to load
	ajaxZoom.zoomData = [
		'/pic/zoom/boutique/boutique_001.jpg',
		'/pic/zoom/boutique/boutique_002.jpg',
		'/pic/zoom/boutique/boutique_003.jpg',
		'/pic/zoom/boutique/boutique_004.jpg',
		'/pic/zoom/boutique/boutique_005.jpg',
		'/pic/zoom/boutique/boutique_006.jpg',
		'/pic/zoom/boutique/boutique_007.jpg',
		'/pic/zoom/boutique/boutique_008.jpg',
		'/pic/zoom/fashion/fashion_001.jpg',
		'/pic/zoom/fashion/fashion_002.jpg',
		'/pic/zoom/fashion/fashion_003.jpg',
		'/pic/zoom/fashion/fashion_004.jpg',
		'/pic/zoom/fashion/fashion_005.jpg'
	];
	
	// "example" in query string which is passed to AJAX-ZOOM defines an options set
	// which differs from default values. You can find the options set of this example 
	// in /axZm/zoomConfigCustom.inc.php after 
	// elseif ($_GET['example'] == 23)
	ajaxZoom.queryString = 'example=23';
	
	// Pass images as CSV separated with '|', you could also use zoomDir to load entire directory with images instead of zoomData
	// For more information about parameters which can be passed see example27.php
	ajaxZoom.queryString += '&zoomData='+ajaxZoom.zoomData.join('|');

	// AJAX-ZOOM possible callbacks
	ajaxZoom.ajaxZoomCallbacks = {
		
	};
	
	// Enable overlay before AJAX-ZOOM loads
	window.fullScreenStartSplash = {'enable': true, 'className': false, 'opacity': 0.75};
	
	// Use jQuery.fn.axZm.openFullScreen() API to trigger AJAX-ZOOM responsive
	jQuery.fn.axZm.openResponsive(ajaxZoom.path, ajaxZoom.queryString, ajaxZoom.ajaxZoomCallbacks, ajaxZoom.targetID, true, false, false);
	
</script>
</body>
</html>