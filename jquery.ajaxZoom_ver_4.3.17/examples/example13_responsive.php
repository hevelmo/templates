<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM responsive iframe</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM iframe wordpress ebay image zoom<"/>
<meta property="og:description" content="Probably the simplest way to implement AJAX-ZOOM on any content management system is to use an responsive iframe."/>
<meta name="description" content="Probably the simplest way to implement AJAX-ZOOM on any content management system is to use an responsive iframe."/>
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_13_resposnive.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
}
?>

<!-- jQuery core, needed! -->
<script type="text/javascript" src="../axZm/plugins/jquery-1.8.3.min.js"></script>

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
	body {height: 100%; margin: 0; padding: 0;}
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	
	#outerDiv{
		width: 70%; 
		max-width: 1280px;
		margin: 0px auto; 
		overflow: hidden;
		box-sizing: border-box;
	}
	.aZ_iframe{
		height: 70vh;
	}
	@media screen and (max-width: 800px) {
		#outerDiv{
			width: 100%; 
			padding: 0 10px 0 10px;
		} 
	}
</style>

</head>
<body>

<?php include ('navi.php'); ?>

<div id="outerDiv">
	<h2>AJAX-ZOOM - load zoom viewer in an responsive iframe</h2>
	
	<p> 
	</p>
 
	<p>If your Iframe is responsive and AJAX-ZOOM is triggered fullscreen inside this iframe, then it will adjust instantly when iframe is resized...
		Additionaly you can place more than one player into a page... Moisewheel zoom is disabled in this example. Crossdomain use is not supported by the license.
	</p>
	
	<h3>360° spin Local</h3>
	<iframe class="aZ_iframe" width="100%" frameborder="0" src="example33_vario.php?3dDir=/pic/zoom3d/Uvex_Occhiali&spinReverse=0&mouseScrollEnable=1&spinNoInit=1" scrolling="no" allowfullscreen></iframe>
 	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('<iframe class="aZ_iframe" width="100%" frameborder="0" src="example33_vario.php?3dDir=/pic/zoom3d/Uvex_Occhiali&spinReverse=0&mouseScrollEnable=1&spinNoInit=1" scrolling="no" allowfullscreen></iframe>');
		echo "</pre>";	
	?>
	</div>
	
	<h3>Some image (gallery) from http://www.ajax-zoom.com</h3>
	<iframe class="aZ_iframe" width="100%" frameborder="0" src="http://www.ajax-zoom.com/examples/example33_vario.php?zoomDir=trasportation&zoomFile=transportation_007.jpg&mouseScrollEnable=1" scrolling="no" allowfullscreen></iframe>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('<iframe class="aZ_iframe" width="100%" frameborder="0" src="http://www.ajax-zoom.com/examples/example33_vario.php?zoomDir=trasportation&zoomFile=transportation_007.jpg&mouseScrollEnable=1" scrolling="no" allowfullscreen></iframe>');
		echo "</pre>";	
	?>
	</div>
	
	<h3>360° spin from http://www.ajax-zoom.com</h3>
	<iframe class="aZ_iframe" width="100%" height="533" frameborder="0" src="http://www.ajax-zoom.com/examples/example33_vario.php?3dDir=/pic/zoom3d/Ecco&spinReverse=1&mouseScrollEnable=1&spinNoInit=1" scrolling="no" allowfullscreen></iframe>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('<iframe class="aZ_iframe" width="100%" height="533" frameborder="0" src="http://www.ajax-zoom.com/examples/example33_vario.php?3dDir=/pic/zoom3d/Ecco&spinReverse=1&mouseScrollEnable=1&spinNoInit=1" scrolling="no" allowfullscreen></iframe>');
		echo "</pre>";	
	?>
	</div>
	
	<h3>Local iframe</h3>
	<iframe class="aZ_iframe" width="100%" height="533" frameborder="0" src="example33_vario.php?zoomData=/pic/zoom/furniture/furniture_006.jpg&mouseScrollEnable=1" scrolling="no" allowfullscreen></iframe>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('<iframe class="aZ_iframe" width="100%" height="533" frameborder="0" src="example33_vario.php?zoomData=/pic/zoom/furniture/furniture_006.jpg&mouseScrollEnable=1" scrolling="no" allowfullscreen></iframe>');
		echo "</pre>";	
	?>
	</div>
	
	<?php include ('footer.php'); ?>
</div>

</body>
</html>