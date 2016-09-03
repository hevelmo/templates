<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM iframe</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM iframe wordpress ebay image zoom<"/>
<meta property="og:description" content="Probably the simplest way to implement AJAX-ZOOM on any content management system is to use an iframe."/>
<meta name="description" content="Probably the simplest way to implement AJAX-ZOOM on any content management system is to use an iframe."/>
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_13.jpg"/> 

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
	
</style>

</head>
<body>

<?php include ('navi.php'); ?>

<div style='width: 800px; margin: 0px auto; overflow: hidden;'>
	<h2>AJAX-ZOOM - load zoom viewer in an iframe</h2>
	
	<p>There are several reasons why you would want to embed AJAX-ZOOM 
		into an iframe. In fact this is the easiest way to embed AJAX-ZOOM 
		as you do not need the jQuery core in the actual page and do not 
		need other script as well. One of the immanent reasons is that due to 
		simple API using and programming you can not have more then one 
		instance of AJAX-ZOOM showing simultaniously at one page. 
		You can however switch between several instances like 
		in <a href="example29.php">example29.php</a>
	</p>
	<p>Due to AJAX-ZOOM license restriction using crossdomain iframes is turned off on default. 
	</p>
	<p>For developers: it is not widely known - if you need cross-origin communication please google for "window.postMessage";
	
	</p>

	<h3>Some image (gallery) from http://www.ajax-zoom.com</h3>
	<iframe width="800" height="533" frameborder="0" src="http://www.ajax-zoom.com/examples/example33_vario.php?zoomDir=trasportation&zoomFile=transportation_007.jpg" scrolling="no" allowfullscreen></iframe>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('<iframe width="800" height="533" frameborder="0" src="http://www.ajax-zoom.com/examples/example33_vario.php?zoomDir=trasportation&zoomFile=transportation_007.jpg" scrolling="no" allowfullscreen></iframe>');
		echo "</pre>";	
	?>
	</div>
	
	<h3>360° spin from http://www.ajax-zoom.com</h3>
	<iframe width="800" height="533" frameborder="0" src="http://www.ajax-zoom.com/examples/example33_vario.php?3dDir=/pic/zoom3d/Ecco&spinReverse=1&spinNoInit=1" scrolling="no" allowfullscreen></iframe>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('<iframe width="800" height="533" frameborder="0" src="http://www.ajax-zoom.com/examples/example33_vario.php?3dDir=/pic/zoom3d/Ecco&spinReverse=1&spinNoInit=1" scrolling="no" allowfullscreen></iframe>');
		echo "</pre>";	
	?>
	</div>
	
	<h3>Local iframe</h3>
	<iframe width="800" height="533" frameborder="0" src="example33_vario.php?zoomData=/pic/zoom/high_res/high_res_001.jpg" scrolling="no" allowfullscreen></iframe>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('<iframe width="800" height="533" frameborder="0" src="example33_vario.php?zoomData=/pic/zoom/high_res/high_res_001.jpg" scrolling="no" allowfullscreen></iframe>');
		echo "</pre>";	
	?>
	</div>
	
	<?php include ('footer.php'); ?>
</div>

</body>
</html>