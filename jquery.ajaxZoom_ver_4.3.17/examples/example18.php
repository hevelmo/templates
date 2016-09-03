<?php
if(!session_id()){session_start();}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM short tutorial PHP</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM short tutorial 2"/>
<meta property="og:description" content="This example can be seen a short tutorial on how you could quickly define one or more images in PHP and embed AJAX-ZOOM into your application"/>
<meta name="description" content="This example can be seen a short tutorial on how you could quickly define one or more images and embed AJAX-ZOOM into your application" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_18.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
 
?>

<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  Include AJAX-ZOOM javascript && css, adjust the path if needed. Best set absolute path -->
<link rel="stylesheet" href="../axZm/axZm.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!--  Syntaxhighlighter is not needed, you should remove this block along with SyntaxHighlighter.all(); below -->
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
	body {height: 100%; margin: 0; padding: 0;}
	
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	
	.axZm_zoomHorGalleryDescr{display: none;}
	/*.axZm_zoomContainer{background-color: #FFF;}*/
</style>
</head>
<body>

<?php
include ('navi.php');
?>

<div style='width: 602px; margin: 0px auto; overflow-x: hidden;'>

	<h2>AJAX-ZOOM - short tutorial PHP</h2>
	<p>This example can be seen a short tutorial on how you could quickly define one or more images and embed AJAX-ZOOM into your application <b>with PHP</b>. 
 		Although it is possible to use some PHP class methods to launch AJAX-ZOOM it is not the preferred way. 
 		Please note that all the other examples without PHP code can be inserted into a PHP or template file...
	</p>
	
	<?php
	// Create empty array
	$zoomData = array();
	
	// Add images to the array
	$zoomData[1] = '/pic/zoom/animals/animals_001.jpg';
	$zoomData[2] = '/pic/zoom/animals/animals_002.jpg';
	$zoomData[3] = '/pic/zoom/animals/animals_003.jpg';
	$zoomData[4] = '/pic/zoom/portrait/portrait_003.jpg';
	$zoomData[5] = '/pic/zoom/portrait/portrait_004.jpg';
	$zoomData[6] = '/pic/zoom/trasportation/transportation_001.jpg';
	$zoomData[7] = '/pic/zoom/trasportation/transportation_002.jpg';
	$zoomData[8] = '/pic/zoom/trasportation/transportation_003.jpg';
	$zoomData[9] = '/pic/zoom/trasportation/transportation_004.jpg';
	$zoomData[10] = '/pic/zoom/trasportation/transportation_005.jpg';
	$zoomData[11] = '/pic/zoom/trasportation/transportation_006.jpg';
	$zoomData[12] = '/pic/zoom/estate/house_01.jpg';
	$zoomData[13] = '/pic/zoom/estate/house_02.jpg';
	$zoomData[14] = '/pic/zoom/estate/house_03.jpg';
	
	// Turn above array into string
	$_GET['zoomData'] = strtr(base64_encode(addslashes(gzcompress(serialize($zoomData),9))), '+/=', '-_,');
	
	// Select a set of custom settings in zoomConfigCustom.inc.php
	$_GET['example'] = 20; 
	
	// Include all classes etc.
	require ('../axZm/zoomInc.inc.php');
	
	// Html output
	echo $axZmH->drawZoomBox($zoom, $zoomTmp);
	
	// JS config parameters from zoomConfig.inc.php and zoomConfigCustom.inc.php
	echo $axZmH->drawZoomJsConf($zoom, $rn = false, $pack = true);
	
	// String
	$azCallbacks = '{onLoad: function(){}}';
	
	// JS load AJAX-ZOOM
	echo $axZmH->drawZoomJsLoad($zoom, $pack = true, $windowLoad = true, $azCallbacks);		
	?>
	
	<p>By passing / defining the query string parameter <code>$_GET['example'] = 20;</code> (in source code) some default settings from /axZm/zoomConfig.inc.php 
		are overridden in /axZm/zoomConfigCustom.inc.php after <code>elseif ($_GET['example'] == 20){</code> 
		So if changes in /axZm/zoomConfig.inc.php have no effect look for the same options /axZm/zoomConfigCustom.inc.php; 
	</p>
	
	Thus in /axZm/zoomConfigCustom.inc.php after <code>elseif ($_GET['example'] == 20){</code> you could for example set: 
	<ul>
		<li><code>$zoom['config']['picDim']</code> - inner size of the player.</li>
		<li><code>$zoom['config']['useHorGallery']</code> - enable / disable horizontal gallery.</li>
		<li><code>$zoom['config']['useGallery']</code> - enable / disable vertical gallery.</li>
		<li><code>$zoom['config']['displayNavi']</code> - enable / disable navigation bar.</li>
		<li><code>$zoom['config']['innerMargin']</code> - border width around the player.</li>
		<li>and many others...</li>
	</ul>
	
	<!-- Code head -->
	<h3>JavaScript & CSS files in Head</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('
<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  Include AJAX-ZOOM javascript && css, adjust the path if needed. Best set absolute path -->
<link rel="stylesheet" href="../axZm/axZm.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
	');
	echo "</pre>";	
	?>
	</div>
	
	<!-- Code body -->
	<h3>PHP code in body</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
	echo "<pre class='brush: php; '>";
	echo htmlspecialchars ('
	<?php
	// Create empty array
	$zoomData = array();
	
	// Add images to the array
	$zoomData[1] = \'/pic/zoom/boutique/boutique_007.jpg\';
	$zoomData[2] = \'/pic/zoom/boutique/boutique_019.jpg\';
	$zoomData[3] = \'/pic/zoom/animals/animals_016.jpg\';
	$zoomData[4] = \'/pic/zoom/objects/objects_001.jpg\';
	$zoomData[5] = \'/pic/zoom/portrait/portrait_005.jpg\';
	$zoomData[6] = \'/pic/zoom/trasportation/transportation_001.jpg\';
	$zoomData[7] = \'/pic/zoom/trasportation/transportation_014.jpg\';
	$zoomData[8] = \'/pic/zoom/trasportation/transportation_015.jpg\';
	$zoomData[9] = \'/pic/zoom/trasportation/transportation_016.jpg\';
	$zoomData[10] = \'/pic/zoom/trasportation/transportation_021.jpg\';
	$zoomData[11] = \'/pic/zoom/trasportation/transportation_022.jpg\';
	$zoomData[12] = \'/pic/zoom/estate/house_01.jpg\';
	$zoomData[13] = \'/pic/zoom/estate/house_02.jpg\';
	$zoomData[14] = \'/pic/zoom/estate/house_03.jpg\';
	
	// Turn above array into string
	$_GET[\'zoomData\'] = strtr(base64_encode(addslashes(gzcompress(serialize($zoomData),9))), \'+/=\', \'-_,\');
	
	// Select a set of custom settings in zoomConfigCustom.inc.php
	$_GET[\'example\'] = 20; 
	
	// Include all classes etc.
	require (\'../axZm/zoomInc.inc.php\');
	
	// Html output
	echo $axZmH->drawZoomBox($zoom, $zoomTmp);
	
	// JS config parameters from zoomConfig.inc.php and zoomConfigCustom.inc.php
	echo $axZmH->drawZoomJsConf($zoom, $rn = false, $pack = true);
	
	// JS code as string, which is not very convenient...
	$azCallbacks = \'{onLoad: function(){}}\';
	
	// JS load AJAX-ZOOM
	echo $axZmH->drawZoomJsLoad($zoom, $pack = true, $windowLoad = true, $azCallbacks);	
	
	?>
	');
	echo "</pre>";	
	?>
	
	<?php
	include ('footer.php');
	?>
	</div>
</div>


</body>
</html>