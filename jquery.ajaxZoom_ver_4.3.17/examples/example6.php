<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Thumbnails click image zoom in lightbox</title>
<meta property="og:type" content="article"/>
<meta property="og:title" content=""/>
<meta property="og:description" content=""/>
<meta name="description" content="" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_6.jpg"/> 

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
<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.hoverThumb.css" type="text/css">
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.hoverThumb.js"></script>

<!--  Fancybox lightbox javascript, please note: it has been slightly modified for AJAX-ZOOM, 
only needed if ajaxZoomOpenMode below is set to "fancyboxFullscreen" or "fancybox", optional -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, 
requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if ajaxZoomOpenMode below is set to "colorbox", optional -->
<link rel="stylesheet" href="../axZm/plugins/demo/colorbox/example1/colorbox.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>

<!-- IE < 9 @media query support -->
<script src="../axZm/plugins/css3-mediaqueries.min.js"></script>

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
	/*body, html {height: 100%;}*/
	body {margin:0px; padding:0px; background-image: none;}
	html {margin:0px; padding:0px; border: 0; font-family: Tahoma, Arial; font-size: 10pt;}
	form {padding:0px; margin:0px}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;} 

	.block_1_parent{
		/* same as border-right in block_1 */
		margin-right: -5px;
		margin-bottom: 20px;
	}
	.block_1{
		float: left;
		width: 12.5%;
		height: auto;
		box-sizing: border-box;
		border-right: 5px solid #FFF;
		border-bottom: 5px solid #FFF;
	}
	
	@media only screen and (max-width: 1600px) {
		.block_1{width: 16.6666666666%;}
	}	
	
	@media only screen and (max-width: 1400px) {
		.block_1{width: 20%;}
	}
	@media only screen and (max-width: 900px) {
		.block_1{width: 25%;}
	}
	@media only screen and (max-width: 700px) {
		.block_1{width: 33.333333333333333%;}
	}
	@media only screen and (max-width: 500px) {
		.block_1{width: 50%;}	
	}
	@media only screen and (max-width: 400px) {
		.block_1{width: 100%;}	
	}
	
	.block_2_parent{
		/* same as border-right in block_2 */
		margin-right: -5px;
	}
	
	.block_2{
		float: left;
		width: 200px;
		height: 136px;
		box-sizing: border-box;
		border-right: 5px solid #FFF;
		border-bottom: 5px solid #FFF;
	}
	
	.block_3_parent{
		/* same as border-right in block_2 */
		margin-right: -5px;
	}
	
	.block_3{
		float: left;
		height: 136px;
		box-sizing: border-box;
		border-right: 5px solid #FFF;
		border-bottom: 5px solid #FFF;
	}
	
</style>

</head>
<body>

<?php
include ('navi.php');
?>
	
<div style='background-color: #FFFFFF; margin: 0px auto; padding: 10px;'>
	
	<h2>AJAX-ZOOM - thumb hover zoom gallery</h2>
	
	<p>Ver. 4.2.1+ This example has been totally rewritten. It now uses a simple "thumb hover zoom" jQuery plugin;  
	jquery.axZm.hoverThumb.js is shipped as extension to AJAX-ZOOM.
	</p>
	
	<h3>Responsive 20% width</h3>
	<p style="margin-top: 0;">Depending on resolution width changes over adjustable CSS3 @media Queries to 16.66, 20%, 25%, 33.33%, 50% or 100%; 
	height is set instantly over $.azHoverThumb "parentHeightRatio" option, which is a fixed width/height image ratio;
	</p>
	
	
	<!-- Container with hover thumbs -->
	<div class="block_1_parent clearfix">
        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="Optional title: car 1" data-img="/pic/zoom/trasportation/transportation_001.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_001.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="Optional title: car 2" data-img="/pic/zoom/trasportation/transportation_002.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_002.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="" data-img="/pic/zoom/trasportation/transportation_003.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_003.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="" data-img="/pic/zoom/trasportation/transportation_004.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_004.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="" data-img="/pic/zoom/trasportation/transportation_005.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_005.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="" data-img="/pic/zoom/trasportation/transportation_006.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_006.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="" data-img="/pic/zoom/trasportation/transportation_007.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_007.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="" data-img="/pic/zoom/trasportation/transportation_008.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_008.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_1">
            <img class="azHoverThumb" data-group="cars1" data-descr="" data-img="/pic/zoom/trasportation/transportation_009.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_009.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

	</div>
	
	<!-- Fire azHoverThumb on .azHoverThumb under block_1_parent -->
	<script type="text/javascript">
		$('.block_1_parent .azHoverThumb').azHoverThumb({
			parentHeightRatio: 0.665,
			zoomRatio: 1.34
		});
	</script>
	
	
	<!-- Container with hover thumbs -->
	<h3>Fixed width and height of the thumbs</h3>
	<div class="block_2_parent clearfix">
	
        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_001.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_001.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_002.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_002.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_003.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_003.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_004.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_004.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_005.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_005.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_006.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_006.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_007.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_007.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_008.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_008.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_2">
            <img class="azHoverThumb" data-group="cars2" data-descr="" data-img="/pic/zoom/trasportation/transportation_009.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_009.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
        </div>

	</div>
	
	<!-- Fire azHoverThumb on .azHoverThumb under block_2_parent -->
	<script type="text/javascript">
		$(".block_2_parent .azHoverThumb").azHoverThumb({
			zoomRatio: 2,
			zoomInSpeed: 600,
			zoomOutSpeed: 300
		});
	</script>
	
	
	<!-- Container with hover thumbs -->
	<h3>Fixed height of the thumbs (height can be also responsive as %) and "parentWidthRatio" set to "auto"</h3>
	<p style="margin-top: 0;">"auto" width also works in IE < 9 with this plugin</p>
	<div class="block_3_parent clearfix">
	
        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_001.jpg" src="../axZm/zoomLoad.php?previewPic=animals_001.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_002.jpg" src="../axZm/zoomLoad.php?previewPic=animals_002.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_003.jpg" src="../axZm/zoomLoad.php?previewPic=animals_003.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_004.jpg" src="../axZm/zoomLoad.php?previewPic=animals_004.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_005.jpg" src="../axZm/zoomLoad.php?previewPic=animals_005.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_006.jpg" src="../axZm/zoomLoad.php?previewPic=animals_006.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_007.jpg" src="../axZm/zoomLoad.php?previewPic=animals_007.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_008.jpg" src="../axZm/zoomLoad.php?previewPic=animals_008.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_009.jpg" src="../axZm/zoomLoad.php?previewPic=animals_009.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>

        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_010.jpg" src="../axZm/zoomLoad.php?previewPic=animals_010.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_011.jpg" src="../axZm/zoomLoad.php?previewPic=animals_011.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_012.jpg" src="../axZm/zoomLoad.php?previewPic=animals_012.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>
        
        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_013.jpg" src="../axZm/zoomLoad.php?previewPic=animals_013.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div>  
        
        <div class="block_3">
            <img class="azHoverThumb" data-group="animals1" data-descr="" data-img="/pic/zoom/animals/animals_014.jpg" src="../axZm/zoomLoad.php?previewPic=animals_014.jpg&previewDir=/pic/zoom/animals&qual=90&width=400&height=300" alt="" />
        </div> 
	</div>
	
	<!-- Fire azHoverThumb on .azHoverThumb under block_2_parent -->
	<script type="text/javascript">
		$(".block_3_parent .azHoverThumb").azHoverThumb({
			parentWidthRatio: 'auto'
		});
	</script>
	
	<!-- Switch between different ajaxZoomOpenMode option values, not needed -->
	<div>
		<!--  This is just a helper function for the demo to switch between ajaxZoomOpenMode option, not needed -->
		<script type="text/javascript" language="javascript">
			function setOpt(opt){
				var val = $("input[name='"+opt+"']:checked").val();
					
				if (val == undefined){
					val = $("select[name='"+opt+"'] option:selected").val();
				}
				
 				if (val == 'true'){val = true;} if (val == 'false'){val = false;}
 				
 				$('.block_1_parent .block_1, .block_2_parent .block_2, .block_3_parent .block_3').data(opt, val);
			};
		</script>
		
		<h3>Try various AJAX-ZOOM open mods</h3>
        <table>
	        <tr>
		        <td width="30"><input type="radio" autocomplete="off"  name="ajaxZoomOpenMode" onclick="setOpt('ajaxZoomOpenMode')"  value="fullscreen" checked></td>
		        <td>Open AJAX-ZOOM at fullscreen mode</td>
	        </tr>
	        
	        <tr>
		        <td><input type="radio" autocomplete="off"  name="ajaxZoomOpenMode" onclick="setOpt('ajaxZoomOpenMode')" value="fancyboxFullscreen"></td>
		        <td>Open AJAX-ZOOM in responsive "Fancybox"</td>
	        </tr>
	        
	        <tr>
		        <td><input type="radio" autocomplete="off"  name="ajaxZoomOpenMode" onclick="setOpt('ajaxZoomOpenMode')" value="fancybox"></td>
		        <td>Open AJAX-ZOOM in regular "Fancybox"</td>
	        </tr>
	        
	        <tr>
		        <td><input type="radio" autocomplete="off"  name="ajaxZoomOpenMode" onclick="setOpt('ajaxZoomOpenMode')" value="colorbox"></td>
		        <td>Open AJAX-ZOOM in "Colorbox"</td>
	        </tr>
	        
	        <tr>
	             <td>&zwj;</td>
	             <td> 
			        Enable monitor size fullscreen: 
			        <input type="radio" autocomplete="off"  name="fullScreenApi" onclick="setOpt('fullScreenApi')" value="true"> - enable 
			        <input type="radio" autocomplete="off"  name="fullScreenApi" onclick="setOpt('fullScreenApi')" value="false" checked> - disable	                	 
	             </td>
	        </tr>
        
        </table>

	</div>
	

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
<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.hoverThumb.css" type="text/css">
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.hoverThumb.js"></script>

<!--  Fancybox lightbox javascript, please note: it has been slightly modified for AJAX-ZOOM, only needed if ajaxZoomOpenMode below is set to "fancyboxFullscreen" or "fancybox", optional -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, 
requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if ajaxZoomOpenMode below is set to "colorbox", optional -->
<link rel="stylesheet" href="../axZm/plugins/demo/colorbox/example1/colorbox.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>

<!-- IE < 9 @media query support -->
<script src="../axZm/plugins/css3-mediaqueries.min.js"></script>
		');
		echo "</pre>";	
	?>
	</div>
	
	<h3>CSS</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
		echo "<pre class='brush: css; '>";
		echo htmlspecialchars ('
.block_1{
	float: left;
	width: 12.5%;
	height: auto;
	box-sizing: border-box;
	border-right: 5px solid #FFF;
	border-bottom: 5px solid #FFF;
}

.block_1_parent{
	/* same as border-right in .block_1 */
	margin-right: -5px;
	margin-bottom: 20px;
}

@media only screen and (max-width: 1600px) {
	.block_1{width: 16.6666666666%;}
}	

@media only screen and (max-width: 1400px) {
	.block_1{width: 20%;}
}
@media only screen and (max-width: 900px) {
	.block_1{width: 25%;}
}
@media only screen and (max-width: 700px) {
	.block_1{width: 33.333333333333333%;}
}
@media only screen and (max-width: 500px) {
	.block_1{width: 50%;}	
}
@media only screen and (max-width: 400px) {
	.block_1{width: 100%;}	
}
		');
		echo "</pre>";	
	?>
	</div>
	
	<h3>HTML makup in body</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('
<!-- Container where subfolders will be loaded into -->
<div class="block_1_parent clearfix">
    <div class="block_1">
        <img class="azHoverThumb" data-group="cars" data-descr="Optional title: car 1" data-img="/pic/zoom/trasportation/transportation_005.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_005.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
    </div>

    <div class="block_1">
        <img class="azHoverThumb" data-group="cars" data-descr="Optional title: car 2" data-img="/pic/zoom/trasportation/transportation_006.jpg" src="../axZm/zoomLoad.php?previewPic=transportation_006.jpg&previewDir=/pic/zoom/trasportation&qual=90&width=400&height=300" alt="" />
    </div>
</div>
		');
		echo "</pre>";	
	?>
	</div>
	
	<h3>JavaScript</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: js; '>";
		echo htmlspecialchars ('
// Fire azHoverThumb on .azHoverThumb under block_1_parent
$(".block_1_parent .azHoverThumb").azHoverThumb({
	parentHeightRatio: 0.665,
	zoomRatio: 1.34
});
		');
		echo "</pre>";		
		?>
		
	</div>

	<h3>$.azHoverThumb - documentation (options)</h3>
	<div>
		<?php include (dirname(__FILE__).'/extensions_doc/docu_hoverThumb.inc.html');?>
	</div>
	<?php
		// this is not needed
		include ('footer.php');
	?>
</div>


</body>
</html>