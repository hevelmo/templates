<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Thumbnails click image zoom in lightbox</title>
<meta property="og:type" content="article"/>
<meta property="og:title" content="Thumbnails click image zoom in lightbox"/>
<meta property="og:description" content="In this example all images are loaded from a specific folder and displayed as thumbnails in liquid layout. By clicking on the thumbnail AJAX-ZOOM player opens loaded into a light box."/>
<meta name="description" content="In this example all images are loaded from a specific folder and displayed as thumbnails in liquid layout. By clicking on the thumbnail AJAX-ZOOM player opens loaded into a light box." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_5.jpg"/> 

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
<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.thumbGallery.css" type="text/css">
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.thumbGallery.js"></script>

<!--  Fancybox lightbox javascript, please note: it has been slightly modified for AJAX-ZOOM, 
only needed if ajaxZoomOpenMode below is set to "fancyboxFullscreen" or "fancybox", optional -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.pack.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, 
requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if ajaxZoomOpenMode below is set to "colorbox", optional -->
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


<style type="text/css" media="screen"> 
	body {margin:0px; padding:0px; background-image: none;}
	html {margin:0px; padding:0px; border: 0; font-family: Tahoma, Arial; font-size: 10pt;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	form {padding:0px; margin:0px}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;} 

</style>

</head>
<body>

<?php
include ('navi.php');
?>
	
<div style='background-color: #FFFFFF; width: 800px; margin: 0px auto; overflow-x: hidden;'>
	
	<h2>AJAX-ZOOM - responsive thumbnails gallery with ajax page switch</h2>
	
	<p>Ver. 4.2.1+ This example has been totally rewritten. It does not contain indispensable PHP code within the actual page any more. 
	Also all JavaScript has been wrapped into one plugin (jQuery.axZm.thumbGallery) which is controllable 
	over various options passed to it. 
	</p>
	<p>With the below configurations the plugin gets all image paths from  
	"zoomDir" option value, instantly generates thumbnails and lists them in a container. 
	When the user clicks on the thumb AJAX-ZOOM image player opens in a configurable lightbox or fullscreen. 
	</p>
	
	<p>$.axZm.thumbGallery is commented and could be edited by interesting programmers. 
	The plugin is used in several other examples you might want to take a look at<sup><a href="#o_sup_1">1</a></sup>.
	</p>
	
	<!-- Container where subfolders will be loaded into -->
	<div id="selectParentContainer" class="clearfix" style="margin-bottom: 10px; padding-bottom: 3px;" ></div>

	<!-- Container where thumbs will be loaded into -->
	<div id="thumbsParentContainer" class="clearfix" style="min-height: 150px; clear: both"></div>
	
	<!-- Fire azThumbGallery, that's it -->
	<script type="text/javascript">
		
		jQuery.azThumbGallery({
			axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
			zoomDir: "/pic/zoom/fashion", // Path to subfolders with images
			folderSelect: false, // Possible values: "select", "folders", "imgFolders" or false
			axZmCallBacks: {}, // AJAX-ZOOM has several callbacks, http://www.ajax-zoom.com/index.php?cid=docs#onBeforeStart
			fullScreenApi: false, // try to open AJAX-ZOOM at browsers fullscreen mode
			thumbsCache: true, // cache thumbnails
			thumbWidth: 100, // width of the thumbnail image
			thumbHeight: 100, // height of the thumbnail image
			thumbQual: 90, // jpg quality of the thumbnail image
			thumbMode: false, // possible values: "contain", "cover" or false
			thumbBackColor: "#ffffff", // background color of the thumb if thumbMode is set to "contain"
			thumbPadding: 10, // Padding 
			thumbMarginRight: 12,
			thumbMarginBottom: 12,
			thumbsPerPage: 10, // Show this number of thumbnails at once
			thumbRetina: true, // true will double the resolution of the thumbnails
			thumbPreloadingImg: "ajax-loader-map-white.gif", // image located in /axZm/icons folder which is shown befor thumbnail is loaded
			thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to
			selectContainer: "selectParentContainer", // ID of the element where the select with subfolders will be appended to
			ajaxZoomOpenMode: "fancybox", // possible values: "fullscreen", "fancyboxFullscreen", "fancybox", "colorbox"
			exampleFullscreen: "mouseOverExtension", // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is "fullscreen"
			exampleFancyboxFullscreen: "mouseOverExtension", // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is "fancyboxFullscreen"
			exampleFancybox: 2, // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is "fancybox"
			exampleColorbox: 'modal' // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is "colorbox"
		});
	</script>
	
	<div style='clear:both; padding-top: 20px;'>
		<h3>Try various AJAX-ZOOM open mods</h3>
		
		<!--  This is just a helper function for the demo to switch between ajaxZoomOpenMode option -->
		<script type="text/javascript" language="javascript">
			function setOpt(opt){
				var param = $.azThumbGallery.getParam('thumbsParentContainer'),
					val = $("input[name='"+opt+"']:checked").val();
					
				if (val == undefined){
					val = $("select[name='"+opt+"'] option:selected").val();
				}
 				if (val == 'true'){val = true;} if (val == 'false'){val = false;}

 				param[opt] = val;
 				
 				if (opt == 'thumbsPerPage'){
 					$('#thumbsParentContainer').data('reloadThumbs')();
				}
				
 				if (opt == 'folderSelect'){
 					$('#thumbsParentContainer').data('reloadFolders')();
				}
			};
		</script>
		
        <table>
	        <tr>
		        <td width="30"><input type="radio" autocomplete="off"  name="ajaxZoomOpenMode" onclick="setOpt('ajaxZoomOpenMode')"  value="fullscreen"></td>
		        <td>Open AJAX-ZOOM at fullscreen mode</td>
	        </tr>
	        
	        <tr>
		        <td><input type="radio" autocomplete="off"  name="ajaxZoomOpenMode" onclick="setOpt('ajaxZoomOpenMode')" value="fancyboxFullscreen"></td>
		        <td>Open AJAX-ZOOM in responsive "Fancybox"</td>
	        </tr>
	        
	        <tr>
		        <td><input type="radio" autocomplete="off"  name="ajaxZoomOpenMode" onclick="setOpt('ajaxZoomOpenMode')" value="fancybox" checked></td>
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
	        
	        <tr>
	             <td>&zwj;</td>
	             <td> 
			        Thumbs per page: 
			        <select name="thumbsPerPage" autocomplete="off"  onchange="setOpt('thumbsPerPage')">
			        	<option value="null">All</option>
			        	<option value="1">1</option>
			        	<option value="2">2</option>
			        	<option value="3">3</option>
			        	<option value="4">4</option>
			        	<option value="5">5</option>
			        	<option value="6">6</option>
			        	<option value="8">8</option>
			        	<option value="10" selected>10</option>
			        	<option value="12">12</option>
			        	<option value="15">15</option>
			        	<option value="20">20</option>
			        	<option value="25">25</option>
			        	<option value="30">30</option>
			        	<option value="50">50</option>
			        	<option value="100">100</option>
			        </select>	                	 
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
<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.thumbGallery.css" type="text/css">
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.thumbGallery.js"></script>

<!--  Fancybox lightbox javascript, please note: it has been slightly modified for AJAX-ZOOM, only needed if ajaxZoomOpenMode below is set to "fancyboxFullscreen" or "fancybox", optional -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.pack.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if ajaxZoomOpenMode below is set to "colorbox", optional -->
<link rel="stylesheet" href="../axZm/plugins/demo/colorbox/example1/colorbox.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>
	');
	echo "</pre>";	
	?>
	</div>
	
	<h3>HTML markup in body</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: html; js; '>";
		echo htmlspecialchars ('
<!-- Container where subfolders will be loaded into -->
<div id="selectParentContainer" class="clearfix" style="margin-bottom: 10px; padding-bottom: 3px;" ></div>

<!-- Container where thumbs will be loaded into -->
<div id="thumbsParentContainer" class="clearfix" style="min-height: 150px; clear: both"></div>
	');
	echo "</pre>";	
	?>
	</div>
	
	<h3>JavaScript</h3>
	<div style="clear:both; margin: 5px 0px 5px 0px;">
	<?php
		echo "<pre class='brush: js; '>";
		echo htmlspecialchars ('
jQuery.azThumbGallery({
	axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
	zoomDir: "/pic/zoom/fashion", // Path to subfolders with images
	folderSelect: false, // Possible values: "select", "folders", "imgFolders" or false
	axZmCallBacks: {}, // AJAX-ZOOM has several callbacks, http://www.ajax-zoom.com/index.php?cid=docs#onBeforeStart
	fullScreenApi: false, // try to open AJAX-ZOOM at browsers fullscreen mode
	thumbsCache: true, // cache thumbnails
	thumbWidth: 100, // width of the thumbnail image
	thumbHeight: 100, // height of the thumbnail image
	thumbQual: 90, // jpg quality of the thumbnail image
	thumbMode: false, // possible values: "contain", "cover" or false
	thumbBackColor: "#ffffff", // background color of the thumb if thumbMode is set to "contain"
	thumbPadding: 10, // Padding 
	thumbMarginRight: 12,
	thumbMarginBottom: 12,
	thumbsPerPage: 10, // Show this number of thumbnails at once
	thumbRetina: true, // true will double the resolution of the thumbnails
	thumbPreloadingImg: "ajax-loader-map-white.gif", // image located in /axZm/icons folder which is shown befor thumbnail is loaded
	thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to
	selectContainer: "selectParentContainer", // ID of the element where the select with subfolders will be appended to
	ajaxZoomOpenMode: "fancybox", // possible values: "fullscreen", "fancyboxFullscreen", "fancybox", "colorbox"
	exampleFullscreen: "mouseOverExtension", // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is "fullscreen"
	exampleFancyboxFullscreen: "mouseOverExtension", // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is "fancyboxFullscreen"
	exampleFancybox: 2, // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is "fancybox"
	exampleColorbox: "modal" // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is "colorbox"
});
		');
		echo "</pre>";
		?>
		
	</div>
	
	<h3>$.azThumbGallery - documentation (options)</h3>
	<div>
		<?php include (dirname(__FILE__).'/extensions_doc/docu_thumbGallery.inc.html');?>
	</div>
	
	<?php
		// this is not needed
		include ('footer.php');
	?>
	
</div>


</body>
</html>