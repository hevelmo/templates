<?php
if(!session_id()){session_start();}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Fullscreen image player AJAX-ZOOM</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Fullscreen image player AJAX-ZOOM"/>
<meta property="og:description" content="Short example of how to open AJAX-ZOOM as fullscreen"/>
<meta name="description" content="Short example of how to open AJAX-ZOOM as fullscreen" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_30.jpg"/> 
 
<?php
// Set scale for iPhone and disable user scalability
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>
<!--  Include jQuery core into head section if not already present -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript and CSS, adjust the path if needed. Best set absolute path -->
<link  href="../axZm/axZm.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!--  Syntaxhighlighter is not needed, you can remove this block along with SyntaxHighlighter.all(); below -->
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
	p {text-align: justify; text-justify: newspaper;}
    
	.azDemoButton {
		display:inline-block; outline: 0; outline-style: none;
		-moz-box-shadow:inset 0px 1px 0px 0px #ffffff;-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;box-shadow:inset 0px 1px 0px 0px #ffffff;
		background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf));
		background:-moz-linear-gradient( center top, #ededed 5%, #dfdfdf 100% );
		filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf');
		background-color:#ededed;border-radius: 5px; text-indent:0;border:1px solid #dcdcdc; text-decoration:none; text-align:center;
		color:#666; font-family:arial; font-size:15px; font-weight:bold; font-style:normal; height:30px; text-shadow:1px 1px 0px #ffffff;
		line-height:30px;min-width:100px;padding: 0 5px 0 5px; margin: 3px 0 5px 0;
		-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;
	}
	.azDemoButton:hover {
		background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #dfdfdf), color-stop(1, #ededed) );
		background:-moz-linear-gradient( center top, #dfdfdf 5%, #ededed 100% );
		filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed');
		background-color:#dfdfdf;border-color:#C9C9C9;
		color:#555; text-indent: 0;
	}
	.azDemoButton:active {
		color:#444;
	}
	
	/* Override some css from /axZm/axZm.css */
	.axZm_zoomContainer{background-color: #FFF;}
	.axZm_zoomGalleryVerticalContainer{background-color: #FFF;}
	.zFsO{background-color: #FFF;}
	.axZm_zoomGalleryBox, .axZm_zoomGalleryBoxOver, .axZm_zoomGalleryBoxSelected{
		border-color: #AAA; /*anim*/
		background-color: #FFF; /*anim*/
		color: #444; /*anim*/
	}
	.axZm_zoomGalleryBoxSelected{
		border-color: #AAA; /*anim*/
		background-color: #EEE; /*anim*/
		color: #444; /*anim*/
	}
	.jspTrack{
		background-image: none !important; /* important because this gallery css will be byloaded */
		background-color: #FFF !important;
	}

</style>


</head>
<body>

<?php
// This include is just for the demo, you can remove it
include ('navi.php');
?>

<div style='width: 920px; margin: 0px auto; overflow: hidden;'>

	<h2>Short example about how to open AJAX-ZOOM as fullscreen</h2>
	
	This example describes $.fn.axZm.openFullScreen which 
	is needed to open AJAX-ZOOM as fullscreen from a link or bind 
	to click event within JS.
	<br><br>
	
	
 	<a href="javascript:void(0)" class="azDemoButton" onClick="jQuery.fn.axZm.openFullScreen('../axZm/', 'example=23&zoomData=/pic/zoom/boutique/boutique_001.jpg|/pic/zoom/boutique/boutique_002.jpg|/pic/zoom/boutique/boutique_003.jpg|/pic/zoom/boutique/boutique_004.jpg|/pic/zoom/boutique/boutique_005.jpg|/pic/zoom/boutique/boutique_006.jpg|/pic/zoom/boutique/boutique_007.jpg|/pic/zoom/boutique/boutique_008.jpg|/pic/zoom/fashion/fashion_002.jpg|/pic/zoom/fashion/fashion_005.jpg', {}, 'window', true);">
	Open <b>regular images</b> as monitor size fullscreen (not IE < 10)
	</a><br>
	
 	<a href="javascript:void(0)" class="azDemoButton" onClick="jQuery.fn.axZm.openFullScreen('../axZm/', 'example=17&3dDir=/pic/zoom3d/Uvex_Occhiali', {onLoad: function(){jQuery.axZm.spinReverse = true;}}, 'window', true);">
	Open <b>360</b> as monitor size fullscreen (not IE < 10)
	</a><br>
	
 	<a href="javascript:void(0)" class="azDemoButton" onClick="jQuery.fn.axZm.openFullScreen('../axZm/', 'example=23&zoomData=/pic/zoom/boutique/boutique_001.jpg|/pic/zoom/boutique/boutique_002.jpg|/pic/zoom/boutique/boutique_003.jpg|/pic/zoom/boutique/boutique_004.jpg|/pic/zoom/boutique/boutique_005.jpg|/pic/zoom/boutique/boutique_006.jpg|/pic/zoom/boutique/boutique_007.jpg|/pic/zoom/boutique/boutique_008.jpg|/pic/zoom/fashion/fashion_002.jpg|/pic/zoom/fashion/fashion_005.jpg', {}, 'window', false, false);">
	Open <b>regular images</b> as window fullscreen
	</a><br>

 	<a href="javascript:void(0)" class="azDemoButton" onClick="jQuery.fn.axZm.openFullScreen('../axZm/', 'example=17&3dDir=/pic/zoom3d/Uvex_Occhiali', {onLoad: function(){jQuery.axZm.spinReverse = true;}}, 'window', false, false);">
	Open <b>360</b> as as window fullscreen
	</a><br>
	
	
	<h3>Javascript and CSS files in head section</h3>
	<?php
	// This is only syntax highlighting, not needed
	echo "<pre class='brush: html;'>";
	echo htmlspecialchars ('
<!--  Include jQuery core into head section if not already present -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript and CSS, adjust the path if needed. Best set absolute path -->
<link  href="../axZm/axZm.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
	');
	echo "</pre>";
	?>
	
	<h3>HTML</h3>
	<?php
	echo "<pre class='brush: html;'>";
	echo htmlspecialchars ('
<a href="javascript:void(0)" onClick="jQuery.fn.axZm.openFullScreen(\'../axZm/\', \'example=23&zoomData=/pic/zoom/boutique/test_boutique1.png|/pic/zoom/boutique/test_boutique2.png|/pic/zoom/boutique/test_boutique3.png|/pic/zoom/boutique/test_boutique4.png\', {}, \'window\', true);">
Open regular images as monitor size fullscreen
</a>

<a href="javascript:void(0)" onClick="jQuery.fn.axZm.openFullScreen(\'../axZm/\', \'example=17&3dDir=/pic/zoom3d/Uvex_Occhiali\', {}, \'window\', true);">
Open 360 as monitor size fullscreen
</a>
 
<a href="javascript:void(0)" onClick="jQuery.fn.axZm.openFullScreen(\'../axZm/\', \'example=23&zoomData=/pic/zoom/boutique/test_boutique1.png|/pic/zoom/boutique/test_boutique2.png|/pic/zoom/boutique/test_boutique3.png|/pic/zoom/boutique/test_boutique4.png\', {}, \'window\', false, false);">
Open regular images as window fullscreen
</a>

<a href="javascript:void(0)" onClick="jQuery.fn.axZm.openFullScreen(\'../axZm/\', \'example=17&3dDir=/pic/zoom3d/Uvex_Occhiali\', {}, \'window\', false, false);">
Open 360 as window fullscreen
</a>
	');
	echo "</pre>";
	?>
		
	<p>Here ist the API reference for <a href="http://www.ajax-zoom.com/index.php?cid=docs#api_openFullScreen">jQuery.fn.axZm.openFullScreen</a>
	</p>
	<p>"zoomData" is not the only parameter that can be set to define which images to display in the player. 
		<a href="http://www.ajax-zoom.com/examples/example27.php">example27.php</a> can serve as tutorial for other methods.
	</p>
	<p>Please note, that by defining the query string parameter example=23 some default settings from /axZm/zoomConfig.inc.php 
		are overridden in /axZm/zoomConfigCustom.inc.php after elseif ($_GET['example'] == 23){ 
		So if changes in /axZm/zoomConfig.inc.php have no effect look for the same options /axZm/zoomConfigCustom.inc.php;
	</p>
	<p>Thus in /axZm/zoomConfigCustom.inc.php after elseif ($_GET['example'] == 23){ you could for example set:
	</p>
	<ul>
		<li>$zoom['config']['useHorGallery'] - enable / disable horizontal gallery.</li>
		<li>$zoom['config']['useGallery'] - enable / disable vertical gallery.</li>
		<li>$zoom['config']['displayNavi'] - enable / disable navigation bar.</li>
		<li>and many others...</li>
	</ul>
</div>
<?php
include ('footer.php');
?>
</body>
</html>