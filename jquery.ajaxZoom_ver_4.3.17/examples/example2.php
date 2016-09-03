<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM image zooming tool Lightbox examples with an iFrame</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM image zooming tool Lightbox examples with an iFrame"/>
<meta property="og:description" content="Open AJAX-ZOOM image zoom player in a lightbox from a simple link as iframed content, e.g. in eBay auctions. Examples show Fancybox and Colorbox implementations."/>
<meta name="description" content="Open AJAX-ZOOM image zoom player in a lightbox from a simple link as iframed content, e.g. in eBay auctions. Examples show Fancybox and Colorbox implementations." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_2.jpg"/>

<?php
// Not needed but usefull
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<!-- jQuery core, needed for the lightboxes! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  Fancybox lightbox javascript, only needed if used, please note: it has been slightly modified for AJAX-ZOOM -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.pack.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, 
requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if used -->
<link rel="stylesheet" href="../axZm/plugins/demo/colorbox/example1/colorbox.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>


<!-- This code block (syntaxhighlighter) is not needed! Pleae remove it from your application! -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>

<!-- These styles are all not needed! -->
<style type="text/css" media="screen"> 
	body {margin:0px; padding:0px;}
	html {margin:0px; padding:0px; border: 0; font-family: Tahoma, Arial; font-size: 10pt;}
	form {padding:0px; margin:0px}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	h4 {padding:0px; margin: 5px 0px 5px 0px; font-size: 10pt;}
	p {text-align: justify; text-justify: newspaper;}
	.clearfix:after { visibility: hidden; display: block; font-size: 0;content: " "; clear: both; height: 0;}
	.clearfix {display: inline-block;}
	* html .clearfix {height: 1%;}
	.clearfix {display: block;}
	.azOuterLayoutBack{
		background-color: #FFFFFF; width: 100%; background-image: url(http://www.ajax-zoom.com/pic/zoomp/zoom_shot_1.jpg); 
		background-repeat: no-repeat; background-position: right 125px; background-position-y: 125px;
	}
	.lnkBtn{
		display: inline-block; clear:both; font: bold 11px Arial; text-decoration: none; background-color: #EEEEEE;
		color: #333333; padding: 2px 6px 2px 6px; border-top: 1px solid #CCCCCC; border-right: 1px solid #333333;
		border-bottom: 1px solid #333333; border-left: 1px solid #CCCCCC; margin: 2px 0 4px 0;
		border-radius: 2px; outline: 0;
	}

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
	}.azDemoButton:active {
		color:#444;
	}
	
</style>

</head>
<body>

<?php
// This is only for the demo, you can remove it
include ('navi.php');
?>

<div style="width: 800px; margin: 0px auto; overflow-x: hidden;">
	<div style="float: left;" class="azOuterLayoutBack"> 
	
		<h2>AJAX-ZOOM "Lightbox" iFrame<br>examples</h2>
		
		<p style="width: 420px;">Press on the buttons below to open various 
		AJAX-ZOOM configurations as iframed content in a lightbox:
		</p>
		
		<!-- Folders  -->
		<h3>Load all images from a directory with "zoomDir"</h3>
		
		<div class="clearfix">
			<div style='float: left; width: 140px;'>
				<h4>Fancybox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.fancybox({href: 'example1.php?zoomDir=estate&example=1&iframe=1', type: 'iframe', autoScale: false, width: 754, height: 458, scrolling: 'no'})">Link gallery 1</a><br>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.fancybox({href: 'example1.php?zoomDir=animals&example=2&iframe=1', type: 'iframe', autoScale: false, width: 722, height: 530, scrolling: 'no'})">Link gallery 2</a><br>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.fancybox({href: 'example1.php?zoomDir=trasportation&example=3&iframe=1', type: 'iframe', autoScale: false, width: 942, height: 458, scrolling: 'no'})">Link gallery 2</a>
			</div>
			
			<div style='float: left; width: 140px;'>
				<h4>Colorbox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.colorbox({href: 'example1.php?zoomDir=estate&example=1&iframe=1', iframe: true, width: 804, height: 528, scrolling: false})">Link gallery 1</a><br>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.colorbox({href: 'example1.php?zoomDir=animals&example=2&iframe=1', iframe: true, width: 772, height: 600, scrolling: false})">Link gallery 2</a><br>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.colorbox({href: 'example1.php?zoomDir=trasportation&example=3&iframe=1', iframe: true, width: 992, height: 528, scrolling: false})">Link gallery 3</a>
			</div>
			
			<div style='float: left; width: 150px;'>
				<h4>Responsive Fancybox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="$.openAjaxZoomInFancyBox({href: 'example33_vario.php?zoomDir=estate', iframe: true})">Example 1</a><br>
				<a class="azDemoButton" href="javascript:void(0)" onclick="$.openAjaxZoomInFancyBox({href: 'example33_vario.php?zoomDir=animals', iframe: true})">Example 2</a><br>
				<a class="azDemoButton" href="javascript:void(0)" onclick="$.openAjaxZoomInFancyBox({href: 'example33_vario.php?zoomDir=trasportation', iframe: true})">Example 3</a>
			</div>
		</div>
		
		<!-- Specified images  -->
		<h3 style="clear: both;">Load specified images with "zoomData"</h3>
		
		<div class="clearfix">
			<div style='float: left; width: 140px;'>
				<h4>Fancybox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.fancybox({href: 'example1.php?zoomData=/pic/zoom/estate/house_01.jpg|/pic/zoom/animals/animals_001.jpg|/pic/zoom/furniture/furniture_002.jpg&example=1&iframe=1', type: 'iframe', autoScale: false, width: 754, height: 458, scrolling: 'no'})">Link gallery 1</a><br>
			</div>
			
			<div style='float: left; width: 140px;'>
				<h4>Colorbox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.colorbox({href: 'example1.php?zoomData=/pic/zoom/estate/house_01.jpg|/pic/zoom/animals/animals_001.jpg|/pic/zoom/furniture/furniture_002.jpg&example=1&iframe=1', iframe: true, width: 804, height: 528, scrolling: false})">Link gallery 1</a><br>
			</div>
			
			<div style='float: left; width: 150px;'>
				<h4>Responsive Fancybox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.openAjaxZoomInFancyBox({href: 'example33_vario.php?zoomData=/pic/zoom/estate/house_01.jpg|/pic/zoom/animals/animals_001.jpg|/pic/zoom/furniture/furniture_002.jpg', iframe: true})">Link gallery 1</a> 
			</div>
		</div>
		
		<!-- 360 / 3D  -->
		<h3 style="clear: both;">Load 360 / 3D images with "3dDir"</h3>
		
		<div class="clearfix">
			<div style='float: left; width: 140px;'>
				<h4>Fancybox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.fancybox({href: 'example1.php?3dDir=/pic/zoom3d/Uvex_Occhiali&example=17&iframe=1', type: 'iframe', autoScale: false, width: 602, height: 475, scrolling: 'no'})">360 example</a><br>
			</div>
			
			<div style='float: left; width: 140px;'>
				<h4>Colorbox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.colorbox({href: 'example1.php?3dDir=/pic/zoom3d/Uvex_Occhiali&example=17&iframe=1', iframe: true, width: 644, height: 550, scrolling: false})">360 example</a><br>
			</div>
			
			<div style='float: left; width: 150px;'>
				<h4>Responsive Fancybox</h4>
				<a class="azDemoButton" href="javascript:void(0)" onclick="jQuery.openAjaxZoomInFancyBox({href: 'example33_vario.php?3dDir=/pic/zoom3d/Uvex_Occhiali', iframe: true})">360 example</a> 
			</div>
		</div>
		
		<!-- Description and code -->
		<div style='clear: both;'>
			<h3>About</h3>
		 
			<p style="margin-top: 0">This example demonstrates how to display AJAX-ZOOM gallery which grabs and shows all images from a particular folder, 
			loads specified images from different folders or 360°/3D with some "lightboxes" (please click on the buttons above). 
			The content of the iframe in the lightboxes is simply the file of the first example (example1.php) and for the "responsive Fancybox" - example33_vario.php. 
			</p>
			
			<p>Due to AJAX-ZOOM license issues the iFrame source should be from the same domain as source domain. 
			If you have legit reasons for crossdomain use, please contact AJAX-ZOOM support.  
			</p>
			
			<p>Please note that not all lightboxes on internet support iframed content. 
			If you are going to use a different lightbox make sure to remove the scrollbars from the iframe.
			</p>
			
			<h3>JavaScript & CSS files in Head</h3>
			<div style="clear:both; margin: 5px 0px 5px 0px;">
				<?php
				echo "<pre class='brush: html; js; '>";
				echo htmlspecialchars ('
<!-- jQuery core, needed for the lightboxes! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  Fancybox lightbox javascript, only needed if used, please note: it has been slightly modified for AJAX-ZOOM -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.pack.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if used -->
<link rel="stylesheet" href="../axZm/plugins/demo/colorbox/example1/colorbox.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>
			');
			echo "</pre>";	
			?>
			</div>
			
			<p>In the below code we simply write the onclick attribute inline. 
			Of course you can use <code>jQuery(selector).bind('click', function(){...})</code> in your applications. 
			</p>
			
			<h3>Load all images from a directory with "zoomDir"</h3>
			<div style="clear:both; margin: 5px 0px 5px 0px;">
				<?php
				echo "<pre class='brush: html; js; '>";
				echo htmlspecialchars ('
<!-- Fancybox -->
<a href="javascript:void(0)" onclick="jQuery.fancybox({href: \'example1.php?zoomDir=estate&example=1&iframe=1\', type: \'iframe\', autoScale: false, width: 754, height: 458, scrolling: \'no\'})">Fancybox</a>

<!-- Colorbox -->				
<a href="javascript:void(0)" onclick="jQuery.colorbox({href: \'example1.php?zoomDir=estate&example=1&iframe=1\', iframe: true, width: 804, height: 528, scrolling: false})">Colorbox</a>
	
<!-- Responsive Fancybox -->
<a href="javascript:void(0)" onclick="$.openAjaxZoomInFancyBox({href: \'example33_vario.php?zoomDir=estate\', iframe: true})">Responsive Fancybox</a>
				');
				echo "</pre>";	
			?>
			</div>
			
			<h3>Load specified images with "zoomData"</h3>
			<div style="clear:both; margin: 5px 0px 5px 0px;">
				<?php
				echo "<pre class='brush: html; js; '>";
				echo htmlspecialchars ('
<!-- Fancybox -->
<a href="javascript:void(0)" onclick="jQuery.fancybox({href: \'example1.php?zoomData=/pic/zoom/estate/house_01.jpg|/pic/zoom/animals/animals_001.jpg|/pic/zoom/furniture/furniture_002.jpg&example=1&iframe=1\', type: \'iframe\', autoScale: false, width: 754, height: 458, scrolling: \'no\'})">Fancybox</a><br>

<!-- Colorbox -->				
<a href="javascript:void(0)" onclick="jQuery.colorbox({href: \'example1.php?zoomData=/pic/zoom/estate/house_01.jpg|/pic/zoom/animals/animals_001.jpg|/pic/zoom/furniture/furniture_002.jpg&example=1&iframe=1\', iframe: true, width: 804, height: 528, scrolling: false})">Colorbox</a><br>	

<!-- Responsive Fancybox -->
<a href="javascript:void(0)" onclick="jQuery.openAjaxZoomInFancyBox({href: \'example33_vario.php?zoomData=/pic/zoom/estate/house_01.jpg|/pic/zoom/animals/animals_001.jpg|/pic/zoom/furniture/furniture_002.jpg\', iframe: true})">Responsive Fancybox</a> 				
				');
				echo "</pre>";	
			?>
			</div>
 
			
			<h3>Load 360 / 3D images with "3dDir"</h3>
			<div style="clear:both; margin: 5px 0px 5px 0px;">
				<?php
				echo "<pre class='brush: html; js; '>";
				echo htmlspecialchars ('
<!-- Fancybox -->
<a class="lnkBtn" href="javascript:void(0)" onclick="jQuery.fancybox({href: \'example1.php?3dDir=/pic/zoom3d/Uvex_Occhiali&example=17&iframe=1\', type: \'iframe\', autoScale: false, width: 602, height: 475, scrolling: \'no\'})">Fancybox 360</a><br>

<!-- Colorbox -->				
<a class="lnkBtn" href="javascript:void(0)" onclick="jQuery.colorbox({href: \'example1.php?3dDir=/pic/zoom3d/Uvex_Occhiali&example=17&iframe=1\', iframe: true, width: 644, height: 550, scrolling: false})">Colorbox 360</a><br>
	
<!-- Responsive Fancybox -->
<a class="lnkBtn" href="javascript:void(0)" onclick="jQuery.openAjaxZoomInFancyBox({href: \'example33_vario.php?3dDir=/pic/zoom3d/Uvex_Occhiali\', iframe: true})">Responsive Fancybox 360</a> 
				');
				echo "</pre>";	
			?>
			</div>
			<?php
			// This is not needed!!!
			include ('footer.php');
			?>
			
		</div>

	</div>
 

</div>



</body>
</html>