<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Image zoom JavaScript PHP inLine implementation</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="Embedded image zoom example. Also contains a demonstration of how to externally load a different set of pictures into AJAX-ZOOM player without reloading the page" />
<meta property="og:type" content="article"/>
<meta property="og:title" content="Image zoom JavaScript PHP inLine implementation"/>
<meta property="og:description" content="Embedded image zoom example. Also contains a demonstration of how to externally load a different set of pictures into AJAX-ZOOM player without reloading the page"/>
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_4.jpg"/> 


<?php
// Set scale for iPhone and disable user scalability
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

<!-- js for subfolders -->
<link rel="stylesheet" href="../axZm/plugins/demo/lavalamp/lavalamp_test.css" type="text/css" media="screen">
<script type="text/javascript" src="../axZm/plugins/demo/lavalamp/jquery.lavalamp.js"></script>

<!-- js for this example (example4.php) -->
<script type="text/javascript" src="../axZm/extensions/axZmExamples/jquery.axZm.azExample4.js"></script>

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
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify;}
	
</style>
</head>
<body>
<?php
include ('navi.php');
?>


<div style="width: 754px; margin: 0px auto;">
	<h2>AJAX-ZOOM - embedded implementation</h2>
	<div style="clear: both;">
		<p>Ver. 4.2.1+ This example has been totally rewritten. 
		It does not contain indispensable PHP code within the actual page any more. 
		Also all JavaScript has been wrapped into one function - jQuery.azExample4(options);
		</p>
		
		<p>The main API functions utilized in this example are 
		<a href="http://www.ajax-zoom.com/index.php?cid=docs#api_load">$.fn.axZm.load</a> and 
		<a href="http://www.ajax-zoom.com/index.php?cid=docs#api_loadAjaxSet">$.fn.axZm.loadAjaxSet</a>; 
		To display the folders jquery.lavalamp.js (the black / green menu under the player) has been used, 
		but feel free to rewrite jQuery.azExample4.js to suit your needs...
		</p>

		<!-- Container where AJAX-ZOOM will be loaded into -->
		<div id="axZmPlayerContainer" style="min-height: 458px; ">
			Loading, please wait...
		</div>
		
		<!-- Container for folders menu -->
		<div id="lavaLampContainer" style="background-color: #bebebe; border-radius: 0px; height: 28px; color: #FFF; overflow: hidden; margin-top: 0px; position: relative; top: -5px;">
			Loading...
		</div>
		
		<!-- Fire AJAX-ZOOM -->
		<script type="text/javascript">
 			jQuery.azExample4({
				axZmPath: '../axZm/',
				zoomDir: '/pic/zoom',
				divID: 'axZmPlayerContainer',
				menuDivID: 'lavaLampContainer',
				firstFolder: 1,
				firstImage: 1,
				example: 8,
				axZmCallBacks: {},
				responsive: false,
				fullScreenApi: true
 			});
		</script>
		
		<h3 style="margin-bottom: 0">JavaScript & CSS files in Head</h3>
		<div style="clear:both; margin: 5px 0px 5px 0px; width: 100%; overflow-x: hidden;">
			<?php
			echo "<pre class='brush: html; js; '>";
			echo htmlspecialchars ('
<!-- jQuery core, needed! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core, needed! -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!-- js for subfolders -->
<link rel="stylesheet" href="../axZm/plugins/demo/lavalamp/lavalamp_test.css" type="text/css" media="screen">
<script type="text/javascript" src="../axZm/plugins/demo/lavalamp/jquery.lavalamp.js"></script>

<!-- js for this example (example4.php) -->
<script type="text/javascript" src="../axZm/extensions/axZmExamples/jquery.axZm.azExample4.js"></script>
		');
		echo "</pre>";	
		?>
		</div>
		<h3 style="margin-bottom: 0">HTML markup in body</h3>
		<div style="clear:both; margin: 5px 0px 5px 0px; width: 100%; overflow-x: hidden;">
			<?php
			echo "<pre class='brush: html; js; '>";
			echo htmlspecialchars ('
<!-- Container where AJAX-ZOOM will be loaded into -->
<div id="axZmPlayerContainer" style="min-height: 448px;">
	Loading, please wait...
</div>

<!-- Container for folders menu -->
<div id="lavaLampContainer" style="height: 28px; overflow: hidden; margin-top: 5px;">
	Loading...
</div>
			');
			echo "</pre>";		
			?>
			
		</div>
		
		<h3 style="margin-bottom: 0">Javascript</h3>
		<div style="clear:both; margin: 5px 0px 5px 0px; width: 100%; overflow-x: hidden;">
			<?php
			echo "<pre class='brush: js; '>";
			echo htmlspecialchars ('
jQuery.azExample4({
	axZmPath: "../axZm/", // Path to /axZm directory, e.g. /test/axZm/
	zoomDir: "/pic/zoom", // Path to subfolders with images
	divID: "axZmPlayerContainer", // ID of the main container 
	menuDivID: "lavaLampContainer", // ID of the menu container 
	firstFolder: 1, // index or name of the folder to be loaded at first
	firstImage: 1, // index or name of the image to load from firstFolder
	example: 8, // configuration set value which is passed to ajax-zoom
	axZmCallBacks: {}, // AJAX-ZOOM has several callbacks
	responsive: false,
	fullScreenApi: true // try to open AJAX-ZOOM at browsers fullscreen mode
});
			');
			echo "</pre>";		
			?>
			
		</div>
		
	</div>
	<?php
	// this is not needed
	include ('footer.php');
	?>
</div>




</body>
</html>