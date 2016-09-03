<?php
if(!session_id()){session_start();}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM short tutorial - JAVASCRIPT - no PHP / ASP.NET</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM short tutorial 1 - no PHP / ASP.NET"/>
<meta property="og:description" content="Call AJAX-ZOOM player without using PHP. A short tutorial with basic functionality of HTML5 image zooming."/>
<meta name="description" content="Call AJAX-ZOOM player without using PHP. A short tutorial with basic functionality of HTML5 image zooming." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_26.jpg"/>


<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "
	<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "
	<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<!--  Syntaxhighlighter is not needed, you should remove this block along with SyntaxHighlighter.all(); below -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>

<!--  Include jQuery core into head section if not already present -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link type="text/css" href="../axZm/axZm.css" rel="stylesheet" />

<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	
	#axZm_zoomLogHolder{width: 55px;}
</style>

</head>
<body>

<?php include ('navi.php');?>

<div style="width: 722px; margin: 0px auto; overflow-x: hidden;">

	<h2>AJAX-ZOOM - short tutorial - JAVASCRIPT</h2>

	<p>Unlike in <a href="example18.php">example18.php</a> 
		this and most other examples do not require any PHP codes in the frontend and could be even posted 
		with WYSIWYG editor into a CMS content. All you have to do is to define ajaxZoom.parameter 
		string with paths to the source images and adjust the path to axZm directory.
	</p>


	<!-- Div where AJAX-ZOOM is loaded into -->
	<div id="ajaxZoomContainer" style="min-height: 462px;">Loading, please wait...</div>
	
	<p>In the code below we show two possibilities. 
		The first one requires that jQuery core, AJAX-ZOOM javascript and css files are already in head. 
		If you do not have access to head you can also use the second possibility and 
		insert jquery.axZm.loader.js in a script tag which will byload jQuery core if not already present 
		and other javascript / css files instantly.
	</p>
	
	<h3>Possibility I (one)</h3>
	Requires some files to be in head section though they could be also pasted in body.
	<h4>Javascript and CSS in head section</h4>
	<?php
	echo "<pre class='brush: html'>";
	echo htmlspecialchars ('
	<!--  Include jQuery core into head section if not already present -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

	<!--  AJAX-ZOOM javascript -->
	<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
	<link type="text/css" href="../axZm/axZm.css" rel="stylesheet" />
	');
	echo "</pre>";			
	?>
	
	<h4>HTML in body</h4>
	<?php
	echo "<pre class='brush: html'>";
	echo htmlspecialchars ('
	<!-- Div where AJAX-ZOOM is loaded into -->
	<div id="ajaxZoomContainer" style="min-height: 462px;">Loading, please wait...</div>
	');
	echo "</pre>";			
	?>
	
	<h4>Javascript in body</h4>
	<?php
	echo "<pre class='brush: js;'>";
	echo htmlspecialchars ('
	<script type="text/javascript">
		// Create empty object
		var ajaxZoom = {}; 

		// Define the path to the axZm folder
		ajaxZoom.path = "../axZm/"; 

		// Define your custom parameter query string
		ajaxZoom.parameter = "example=2&zoomData=/pic/zoom/furniture/furniture_004.jpg\
		|/pic/zoom/furniture/furniture_003.jpg\
		|/pic/zoom/boutique/boutique_001.jpg\
		|/pic/zoom/boutique/boutique_002.jpg\
		"; 

		// The ID of the element where ajax-zoom has to be inserted into
		ajaxZoom.divID = "ajaxZoomContainer";

		ajaxZoom.opt = {
			onLoad: function(){
				// Do something
			}
		};
		
		// Load AJAX-ZOOM 
		jQuery(document).ready(function(){
			// not responsive
			jQuery.fn.axZm.load({
				opt: ajaxZoom.opt,
				path: ajaxZoom.path,
				parameter: ajaxZoom.parameter,
				divID: ajaxZoom.divID
			});
			
			// open AZ responsive
			/*
			jQuery.fn.axZm.openFullScreen(
				ajaxZoom.path, 
				ajaxZoom.parameter, 
				ajaxZoom.opt, 
				ajaxZoom.divID, 
				true, 
				false,
				false
			);
			*/
		});
	</script>
	');
	echo "</pre>";			
	?>
	
	<h3>Possibility II (two)</h3>
	The way with the "loader" javascript file. First we define over Javascript where to find /axZm directory (ajaxZoom.path), 
	then we define which files and with which configuration set they should be loaded (ajaxZoom.parameter), 
	then the container ID where AJAX-ZOOM schould be loaded into. Finally we insert "jquery.axZm.loader.js" 
	which will load everything else needed.
	
	<h4>HTML in body</h4>
	<?php
	echo "<pre class='brush: html'>";
	echo htmlspecialchars ('
	<!-- Div where AJAX-ZOOM is loaded into -->
	<div id="ajaxZoomContainer" style="min-height: 462px;">Loading, please wait...</div>
	');
	echo "</pre>";
	?>
	<?php
	echo "<pre class='brush: js;'>";
	echo htmlspecialchars ('
	<script type="text/javascript">
		// Create empty object
		var ajaxZoom = {}; 

		// Define the path to the axZm folder
		ajaxZoom.path = "../axZm/"; 

		// Define your custom parameter query string
		ajaxZoom.parameter = "example=2&zoomData=/pic/zoom/furniture/furniture_004.jpg\
		|/pic/zoom/furniture/furniture_003.jpg\
		|/pic/zoom/boutique/boutique_001.jpg\
		|/pic/zoom/boutique/boutique_002.jpg\
		"; 

		// The ID of the element where ajax-zoom has to be inserted into
		ajaxZoom.divID = "ajaxZoomContainer";

		ajaxZoom.opt = {
			onLoad: function(){
				// Do something
			}
		};
	</script>
	<!-- Insert the loader file that will take the above settings (ajaxZoom) and load the player -->
	<script type="text/javascript" src="../axZm/jquery.axZm.loader.js"></script>	
	');
	echo "</pre>";			
	?>
	
	
	<h3>Possibility III (three)</h3>
	If you experience any problems with the above or need more then one instance of AJAX-ZOOM showing simultaneously 
	you could also use iframes..
	
	<h4>HTML in body</h4>
	<?php
	echo "<pre class='brush: html'>";
	echo htmlspecialchars ('
	<!-- AJAX-ZOOM will be loaded into iframe -->
	<iframe src="../examples/example33_vario.php?zoomData=/pic/zoom/furniture/furniture_003.jpg|/pic/zoom/boutique/boutique_001.jpg" width="100%" height="400" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" allowfullscreen></iframe>
	');
	echo "</pre>";			
	?>
	
	
	<h3>Important notes</h3>
	<p>By defining the query string parameter in ajaxZoom.parameter example=2 some default settings from /axZm/zoomConfig.inc.php 
		are overridden in /axZm/zoomConfigCustom.inc.php after <code>elseif ($_GET['example'] == 2){</code> 
		So if changes in /axZm/zoomConfig.inc.php have no effect look for the same options /axZm/zoomConfigCustom.inc.php; 
	</p>
	
 	Thus in /axZm/zoomConfigCustom.inc.php after <code>elseif ($_GET['example'] == 2){</code> you could for example set: 
	<ul>
		<li><code>$zoom['config']['picDim']</code> - inner size of the player.</li>
		<li><code>$zoom['config']['useHorGallery']</code> - enable / disable horizontal gallery.</li>
		<li><code>$zoom['config']['useGallery']</code> - enable / disable vertical gallery.</li>
		<li><code>$zoom['config']['displayNavi']</code> - enable / disable navigation bar.</li>
		<li><code>$zoom['config']['innerMargin']</code> - border width around the player.</li>
		<li>and many others...</li>
	</ul>
	
	
	<?php include ('footer.php');?>
</div>
			

<script type="text/javascript">
	// Create empty object
	var ajaxZoom = {}; 

	// Define the path to the axZm folder
	ajaxZoom.path = "../axZm/"; 
	
	// Define your options set
	ajaxZoom.parameter = "example=2&";
	
	// Define your images
	ajaxZoom.parameter += "zoomData=/pic/zoom/furniture/furniture_010.jpg\
	|/pic/zoom/furniture/furniture_009.jpg\
	|/pic/zoom/furniture/furniture_002.jpg\
	|/pic/zoom/furniture/furniture_008.jpg\
	|/pic/zoom/furniture/furniture_007.jpg\
	|/pic/zoom/furniture/furniture_006.jpg\
	|/pic/zoom/furniture/furniture_003.jpg\
	|/pic/zoom/furniture/furniture_001.jpg\
	"; 

	// The ID of the element where ajax-zoom has to be inserted into
	ajaxZoom.divID = "ajaxZoomContainer";

	ajaxZoom.opt = {
		onLoad: function(){
			// Do something
		}
	};
</script>

<!-- Insert the loader file that will take the above settings (ajaxZoom) and load the player -->
<script type="text/javascript" src="../axZm/jquery.axZm.loader.js"></script>

</body>
</html>