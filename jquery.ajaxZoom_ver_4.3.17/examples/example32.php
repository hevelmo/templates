<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM mouseover zoom click fullscreen zoom</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="Zoom on hover or enlarge to fullscreen zoom on click" />
<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM mouseover zoom click fullscreen zoom"/>
<meta property="og:description" content="Zoom on hover or enlarge to fullscreen zoom on click"/>
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_32.jpg"/> 


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

<!-- Include mousewheel script, optional -->
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.mousewheel.min.js"></script>

<!-- Include thumbSlider JS & CSS, optional -->
<link href="../axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.axZm.thumbSlider.js"></script>

<!-- Preloading spinner, optional -->
<script type="text/javascript" src="../axZm/plugins/spin/spin.min.js"></script>

<!-- AJAX-ZOOM mouse over zoom extension, needed! -->
<link href="../axZm/extensions/jquery.axZm.mouseOverZoom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.mouseOverZoom.js"></script>
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.mouseOverZoomInit.js"></script>

<!--  Fancybox lightbox javascript, please note: it has been slightly modified for AJAX-ZOOM, only needed if ajaxZoomOpenMode below is set to "fancyboxFullscreen" or "fancybox", optional -->
<link href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, 
requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if ajaxZoomOpenMode below is set to "colorbox", optional -->
<link href="../axZm/plugins/demo/colorbox/example2/colorbox.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>

<!-- Javascript to style the syntax on this demo page, not needed, should be removed! -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>


<style type="text/css"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	.doptth{background-color: #E66E55; font-size: 10pt; color: #FFF}


	/* Overwrite some css from /axZm/axZm.css */
	.axZm_zoomHorGalleryDescr{display:none;}
	.axZm_zoomHorGalleryDescr{display: none;}
	
	#axZm_zoomContainer{background-color: #FFFFFF;}
	.axZm_zoomContainer{background-color: #FFFFFF;}
	.axZm_zoomGalleryVerticalContainer{background-color: #FFFFFF;}
	.zFsO{background-color: #FFFFFF;}
	.zFsOResOverlay{background-color: #FFFFFF;}
	#axZmTempLoading{background-image: url('../axZm/icons/ajax-loader-bert.gif'); background-repeat: no-repeat; background-position: center;}
	
	/* Vertical Thumbs */
	.axZm_zoomGalleryBox, .axZm_zoomGalleryBoxOver, .axZm_zoomGalleryBoxSelected{
		border-color: #AAAAAA; /*anim*/
		background-color: #FFFFFF; /*anim*/
		color: #444444; /*anim*/
	    -moz-border-radius: 3px;
	    -webkit-border-radius: 3px;
	    border-radius: 3px;
	}

	.axZm_zoomGalleryBoxSelected{
		border-color: #0191ff; /*anim*/
		background-color: #FFFFFF; /*anim*/
		color: #444444; /*anim*/
	}

	.axZm_zoomGalleryBoxOver{
		border-color: #0191ff; /*anim*/
		background-color: #FFFFFF; /*anim*/
		color: #444444; /*anim*/
	}

	/* the css is byloaded, so we use important here */
	.jspTrack{background-image: none !important;background-color: #E7E7E7 !important;}
	
	.axZm_spinPreloaderBar{
		background-color: #0191ff;
		background-image: url('../axZm/icons/spin_preloader_blue_10x10.png');
	}

	.axZm_spinPreloaderHolder{
		background-image: url('../axZm/icons/tr_black_50.png');
	    -moz-border-radius: 0px;
	    -webkit-border-radius: 0px;
	    border-radius: 0px;
	}
	
</style>

</head>
<body>

<?php
// Top navigation for examples, not needed!
include ('navi.php');
?>

<div style="width: 800px; margin: 0px auto;">

	<div style="float: left; min-height: 600px; min-width: 780px; background-color: #FFFFFF; margin: 5px;">
		<h2>Responsive jQuery Mouseover Zoom (jQuery.axZmMouseOverZoom) together with AJAX-ZOOM fullscreen or lightbox on click 
		& <span style="text-decoration: underline;">optional</span> 360°/3D object spins with zoom!</h2>
		<div style="clear: both;">
			<!-- Wrapper for media, this HTML is all you need -->
			<div style="float: left; position: relative; width: 252px; margin: 0px 20px 20px 0px">
				
				<!-- Container for mouse over image -->
				<div id="az_mouseOverZoomContainer" style="position: absolute; width: 250px; height: 375px; background-color: #FFFFFF; border: #AAA 1px solid">
					Mouseover Zoom loading...
				</div>
				
				<!-- gallery with thumbs (will be filled with thumbs by javascript) -->
				<!--<div id="az_mouseOverZoomGallery" style="position: absolute; width: 252px; bottom: 0px; display: none;"> -->
				<div id="az_mouseOverZoomGallery" style="position: absolute; top: 395px; display: none;">
					Gellery loading...
				</div> 
				
			</div>
		
            <div style="float: right; width: 500px" id="refWidthTest">	
            	<h3 style="padding-top: 0;">About this mouseover zoom</h3>
				<p style="margin-top: 0;">
					Despite looking similar to other mouseover zoom scripts this AJAX-ZOOM mousehover extension 
					offers more than it lookes like at first. When the user clicks on the lens 
					AJAX-ZOOM with real high resolution tiled view opens at several modes, try it: 
				</p>

				<h3 style="margin: 0">Alternative AJAX-ZOOM opening methods</h3>
                <table width="100%">
	                <tr class="doptth">
	                	 <th>&zwj;</th><th>This will change "ajaxZoomOpenMode" option</th>
	                </tr>
	                <tr>
		                <td width="30"><input type="radio" name="ajaxZoomOpenMode" autocomplete=off onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'ajaxZoomOpenMode')"  value="fullscreen"></td>
		                <td>Open AJAX-ZOOM at fullscreen mode</td>
	                </tr>
	                
	                <tr>
		                <td><input type="radio" name="ajaxZoomOpenMode" autocomplete=off onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'ajaxZoomOpenMode')" value="fancyboxFullscreen" checked></td>
		                <td>Open AJAX-ZOOM in responsive "Fancybox"</td>
	                </tr>
	                
	                <tr>
		                <td><input type="radio" name="ajaxZoomOpenMode" autocomplete=off onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'ajaxZoomOpenMode')" value="fancybox"></td>
		                <td>Open AJAX-ZOOM in regular "Fancybox"</td>
	                </tr>
	                
	                <tr>
		                <td><input type="radio" name="ajaxZoomOpenMode" autocomplete=off onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'ajaxZoomOpenMode')" value="colorbox"></td>
		                <td>Open AJAX-ZOOM in "Colorbox"</td>
	                </tr>
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Enable monitor size fullscreen:</div>
			                <input type="radio" name="fullScreenApi" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'fullScreenApi')" autocomplete=off value="true"> - enable 
			                <input type="radio" name="fullScreenApi" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'fullScreenApi')" autocomplete=off value="false" checked> - disable	                	 
	                	 </td>
	                </tr>
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">360°/3D "preview" mode:</div>
			                <input type="radio" name="images360Preview" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'images360Preview')" autocomplete=off value="true" checked> - enable 
			                <input type="radio" name="images360Preview" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'images360Preview')" autocomplete=off value="false"> - disable	                	 
	                	 </td>
	                </tr>
	                
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Disable scroll animation:</div>
			                <input type="radio" name="disableScrollAnm" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'disableScrollAnm')" autocomplete=off value="false" > - enable 
			                <input type="radio" name="disableScrollAnm" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'disableScrollAnm')" autocomplete=off value="true" checked> - disable	                	 
	                	 </td>
	                </tr>
                
                </table>
                <table width="100%">
	                <tr class="doptth">
	                	 <th>&zwj;</th><th>Some basic mouseover zoom (flyout window) options</th>
	                </tr>
	                <tr>
	                	 <td width="30">&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Position:</div>
			                <input type="radio" name="position" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'position', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="right" checked> - right 
			                <input type="radio" name="position" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'position', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="left" > - left	                	 
	                	 	<input type="radio" name="position" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'position', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="inside" > - inner zoom	
	                	 </td>
	                </tr>
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Auto width:</div>
			                <input type="radio" name="zoomWidth" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'zoomWidth', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="auto" > - enable 
			                <input type="radio" name="zoomWidth" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'zoomWidth', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="520" checked> - disable	                	 
	                	 </td>
	                </tr>
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Auto height:</div>
			                <input type="radio" name="zoomHeight" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'zoomHeight', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="auto" > - enable 
			                <input type="radio" name="zoomHeight" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'zoomHeight', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="490" checked> - disable	                	 
	                	 </td>
	                </tr>
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Flyout animation:</div>
			                <input type="radio" name="radio_flyOutSpeed_flyBackSpeed" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'flyOutSpeed', 'mouseOverZoomParam', 300, false); $.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'flyBackSpeed', 'mouseOverZoomParam', 300, true);" autocomplete=off  checked> - enable 
			                <input type="radio" name="radio_flyOutSpeed_flyBackSpeed" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'flyOutSpeed', 'mouseOverZoomParam', false, false); $.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'flyBackSpeed', 'mouseOverZoomParam', false, true);" autocomplete=off> - disable	                	 
	                	 </td>
	                </tr>
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Smooth move level:</div>
							<select name="smoothMove" autocomplete=off  onchange="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'smoothMove', 'mouseOverZoomParam', undefined, true);">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2" selected>2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="15">15</option>
								<option value="20">20</option>
							</select>                	 
	                	 </td>
	                </tr>
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Show title:</div>
			                <input type="radio" name="showTitle" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'showTitle', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="true" checked> - enable 
			                <input type="radio" name="showTitle" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'showTitle', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="false"> - disable	                	 
	                	 </td>
	                </tr> 
	                <tr>
	                	 <td>&zwj;</td>
	                	 <td> 
			                <div style="width: 200px; float: left;">Tint:</div>
			                <input type="radio" name="tint" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'tint', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="#0191FF" > - enable 
			                <input type="radio" name="tint" onclick="$.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'tint', 'mouseOverZoomParam', undefined, true);" autocomplete=off value="false" checked> - disable	                	 
	                	 </td>
	                </tr>
                </table>
                
				
				<p>In addition the size of the flyout window for simple mousehover effect can instantly fit 
					other element (e.g. text to the right). And it works on touch devices like iOS and Android.
				</p>
				
				<h3 style="margin: 0; padding-top: 0;"><span style="color: red">New:</span> fully responsive mouseover zoom Ver. 4.0</h3>
				<div onclick="location.href='example32_responsive.php'" style="cursor: pointer; width: 142px; height: 169px; float: right; margin-left: 15px; background-image: url(http://www.ajax-zoom.com/pic/layout/image-zoom_32_responsive.jpg);"></div>
				<p style="margin-top: 0">Prior to Ver. 4.0 (beta) of this AJAX-ZOOM mousehover zoom extension it was optionally responsive for the flyout window. 
					The actual "preview image" was not really responsive. 
					In this <a href="example32_responsive.php">new mousehover zoom extension Ver. 4.0 (beta)</a> everything is absolutly responsive now. 
					A positive side effect caused by the added responsiveness is that a single image 
					can be used as "preview image" - the image which is hovered and the big "flyout image". 
					Many new options like "pinterest" integration and also new API for easy replacing the images have been added too.
				</p>
				
				<h3 style="margin: 0">Gallery / Slider</h3>
				<div onclick="location.href='example32_clean_vertical.php'" style="cursor: pointer; width: 142px; height: 169px; float: right; margin-left: 15px; background-image: url(http://www.ajax-zoom.com/pic/layout/image-zoom_32_clean_vertical.jpg);"></div>
				<p style="margin-top: 0">The sliding thumbnail gallery below the mousehover image is optional. 
					It can be replaced or disabled so you have only thumbs floating below or somewhere else, 
					see it in <a href="example32_no_slider.php">this example</a>. 
				</p>
				<p>On default we use <a href="../axZm/extensions/axZmThumbSlider">$.axZmThumbSlider</a> which is one of AJAX-ZOOM extensions. 
					$.axZmThumbSlider is highly configurable, skinable, responsive and touch friendly. 
					You can also configure it to be <a href="example32_clean_vertical.php">displayed vertically</a> and place to the side of mouseover zoom container. 
					The previously used "jCarousel" has been completly removed from this example.
				</p>
				
				<h3 style="clear: both; margin: 0">About 360°/3D rotate</h3>
				<p style="margin-top: 0;">The integrated 360°/3D object spin support is optional! 
					You do not need to have a 360° for every product. However you can put more than one 360° into the gallery 
					and configure it to either open above the mousehover zoom or open at various modes directly. 
					You can try it by changing  360°/3D "preview" mode above.
				</p>
				
				<h3 style="clear: both; margin: 0">What makes the difference exactly</h3>
				<p style="margin-top: 0">On default only the high resolution "master images" (source images) need to be defined, 
				see "images" object / array in the example code below. This "images" object is basically the only thing 
				which needs to be replaces dynamically by your application. </p>
				<p>All thumbnails and flyout view images are instantly generated by AJAX-ZOOM "image server" which is located at your place (server). 
				The size of the flyout image can be set to e.g. 1200x1200px, which are at most 1.44 Mio. pixels. 
				For a 21 megapixels master image made by e.g. Canon EOS 5D these are around 5-7% of the actual resolution and size. 
				</p>
				
				<p>Alternatively to AJAX-ZOOM PHP based image server the paths to these flyout "preview" images can be hardset 
				(see "images" option below) to point to some static (already scaled) images.
				</p> 
				
				<p>By clicking on the lens your users can explore the details of the entire big image with AJAX-ZOOM, which 
				utilizes image tiles technology (simmilar to google maps where the view "gets sharp" when you zoom in), 
				so the big master image never loads into browsers cache;  
				it can be even protected from direct access over http e.g. with .htaccess - (simply put 
				.htaccess file with this code and nothing else into the top directory with your master images: <code>deny  from all</code>).
				</p>
				
				<p>Same as with thumbnails all image tiles can be generated instantly on-the-fly or pregenerated with our special batch tool...
				</p>
				
				<h3>Clean examples</h3>
				<p style="margin-top: 0">
					Open <a href="example32_clean.php">example32_clean.php</a> to see the html without too much irrelevant content around<br />
					Open <a href="example32_clean_vertical.php">example32_clean_vertical.php</a> to see this mouseover with vertical gallery<br />
					Open <a href="example32_no_slider.php">example32_no_slider.php</a> to see this mouseover without $.axZmThumbSlider
				</p> 
				
		    </div>  
		</div>
	</div>
	
	<div style="width: 800px; clear: both; overflow-x: hidden;">
		
		<h3>JavaScript & CSS files in Head</h3>
		Please note that depending on configuration not all of these js and css files are needed! See "Dependencies" below;
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
			echo "<pre class='brush: html;'>";
			echo htmlspecialchars ('
<!-- jQuery core, needed if not already present! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core, needed! -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!-- Include mousewheel script, optional -->
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.mousewheel.min.js"></script>

<!-- Include thumbSlider JS & CSS, optional -->
<link href="../axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.axZm.thumbSlider.js"></script>

<!-- Preloading spinner, optional -->
<script type="text/javascript" src="../axZm/plugins/spin/spin.min.js"></script>

<!-- AJAX-ZOOM mouse over zoom extension, needed! -->
<link href="../axZm/extensions/jquery.axZm.mouseOverZoom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.mouseOverZoom.js"></script>
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.mouseOverZoomInit.js"></script>

<!--  Fancybox lightbox javascript, please note: it has been slightly modified for AJAX-ZOOM, only needed if ajaxZoomOpenMode below is set to "fancyboxFullscreen" or "fancybox", optional -->
<link href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if ajaxZoomOpenMode below is set to "colorbox", optional -->
<link href="../axZm/plugins/demo/colorbox/example2/colorbox.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>
			');
			echo '</pre>';
			?>
		</div>
		
		<h3>HTML markup</h3>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
			echo "<pre class='brush: html;'>";
			echo htmlspecialchars ('
<!-- Wrapper for media, this HTML is all you need -->
<div style="float: left; width: 252px; position: relative; height: 480px; margin: 0px 20px 20px 0px">
	
	<!-- Container for mouse over image -->
	<div id="az_mouseOverZoomContainer" style="position: absolute; width: 250px; height: 375px; background-color: #FFFFFF; border: #AAA 1px solid">
		Mouseover Zoom loading...
	</div>
	
	<!-- gallery with thumbs (will be filled with thumbs by javascript) -->
	<!-- gallery with thumbs (will be filled with thumbs by javascript) -->
	<div id="az_mouseOverZoomGallery" style="position: absolute; width: 252px; bottom: 0px; display: none;">
		Gellery loading...
	</div> 
	
</div>
			');
			echo '</pre>';
			?>
		</div>
		
		<h3>Javascript (minimal configuration)</h3>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
			echo "<pre class='brush: js;'>";
			echo htmlspecialchars ('
jQuery.fn.mouseOverZoomInit({
	axZmPath: "auto", // Path to AJAX-ZOOM, e.g. /zoomTest/axZm/
	divID: "az_mouseOverZoomContainer", // DIV for mouseover zoom
	galleryDivID: "az_mouseOverZoomGallery", // DIV id of the gallery
	
	// Objecct containing absolte paths to the master images, optional with titles. Start with 1, not 0
	// Your master image can be as big as you want, it never loads into cache
	// You can also protect the directory with .htaccess or other http access restrictions.
	// Alternatively you can link to your static images with these keys: 
	// "zoom" - big mouseover image, "preview" - preview image and "thumb" - image for the gallery. 
	// "img" - your master image is needed anyway to open AJAX-ZOOM on click
	images: {
		1: {img: "/pic/zoom/fashion/fashion_004.jpg", title: "Test Title 1"},
		2: {img: "/pic/zoom/fashion/fashion_003.jpg", title: "Test Title 2"},
		3: {img: "/pic/zoom/fashion/fashion_001.jpg", title: "Test Title 3"},
		4: {img: "/pic/zoom/fashion/fashion_002.jpg", title: "Test Title 4"},
		5: {img: "/pic/zoom/fashion/fashion_008.jpg", title: "Test Title 5"},
		6: {img: "/pic/zoom/fashion/fashion_010.jpg", title: "Test Title 6"}
	}
	
	// Optionally include AJAX-ZOOM 360/3D into the same layout
	images360: {
		1: {path: "/pic/zoom3d/Uvex_Occhiali", position: "first"}
	},
	
	// If you want to show 360 first set images360firstToLoad to true
	images360firstToLoad: true
});
			');
			echo '</pre>';
			?>
		</div>

		<h3>Dependencies</h3>
		<p style="margin-top: 0;">	Several different plugins are used in this mouseover zoom tool. 
			Depending on the configuration not all of them are needed but they all  
			are included in the <a href="http://www.ajax-zoom.com/index.php?cid=download">download package</a>. 
			The options below refer to $.mouseOverZoomInit(options) which acts like a proxy to the other plugins. 
		</p>
		
		Needed plugins: 
 		<ul>
			<li>jquery.axZm.mouseOverZoom.js - main mouseover zoom extension;
			</li>
			<li>jquery.axZm.mouseOverZoomInit.js - function to build all needed html and call other plugins which simplifies integration; 
				if you would like to change something in the source code of jquery.axZm.mouseOverZoomInit.js please copy it renamed 
				in the same directory so your changes do not get overwritten when you or somebody else will be updating AJAX-ZOOM later.
			</li>
			<li>jquery.axZm.js - main AJAX-ZOOM javascript file which loads AJAX-ZOOM to display high resolution image when the user clicks on the lens; 
			depending on AJAX-ZOOM configuration AJAX-ZOOM loads some other stoff dynamically, so you do not have to worry about it.
			</li>
		</ul>
		
		Optional plugins to open AJAX-ZOOM: 
 		<ul>
			<li>jquery.fancybox-1.3.4.js - needed if "ajaxZoomOpenMode" option is set to 'fancyboxFullscreen' or 'fancybox';
			</li>
			<li>jquery.axZm.openAjaxZoomInFancyBox.js - needed if "ajaxZoomOpenMode" option is set to 'fancyboxFullscreen';
			</li>
			<li>jquery.colorbox.js - needed if "ajaxZoomOpenMode" option is set to 'colorbox'; please note that colorbox has at least 
				five skins which are changed over the included css file: 
				<code>/axZm/plugins/demo/colorbox/example<span style="color: red; font-weight: bold;">2</span>/colorbox.css</code>
			</li>
		</ul>
		
		Optional plugins: 
 		<ul>
			<li>jquery.axZm.thumbSlider.js - needed if "galleryAxZmThumbSlider" option is set to true; 
			this is the replacement for previously used jcarousel (jQuery plugin for sliding thumbs which has got too old);
			</li>
			<li>spin.js - needed if "spinner" option is set to true;
			</li>
			<li>jquery.mousewheel.js - needed if in "galleryAxZmThumbSlider" option is set to true and in 
			"galleryAxZmThumbSliderParam" the suboption "mouseWheelScrollBy" is used;
			</li>
		</ul>
		
		
		<h3>$.mouseOverZoomInit(options) documentation</h3>
		<?php include (dirname(__FILE__).'/extensions_doc/docu_mouseOverZoom.inc.html');?>
		
		<?php
		// Bottom navigation for examples, not needed!
		include ('footer.php');
		?>
	</div>

	<script type="text/javascript">
		jQuery.fn.mouseOverZoomInit({
			axZmPath: 'auto', // Path to AJAX-ZOOM, e.g. /zoomTest/axZm/
			divID: 'az_mouseOverZoomContainer', // DIV for mouseover zoom
			galleryDivID: 'az_mouseOverZoomGallery', // DIV id of the gallery, set to false to disable gallery
			
			// Objecct containing absolte paths to the master images, optional with titles. Start with 1, not 0
			// Your master image can be as big as you want, it never loads into cache
			// You can also protect the directory with .htaccess or other http access restrictions.
			// Alternatively you can link to your static images with these keys: 
			// "zoom" - big mouseover image, "preview" - preview image and "thumb" - image for the gallery. 
			// "img" - your master image is needed anyway to open AJAX-ZOOM on click
			images: {
				1: {img: "/pic/zoom/fashion/fashion_004.jpg", title: "Test Title 1"},
				2: {img: "/pic/zoom/fashion/fashion_003.jpg", title: "Test Title 2"},
				3: {img: "/pic/zoom/fashion/fashion_001.jpg", title: "Test Title 3"},
				4: {img: "/pic/zoom/fashion/fashion_002.jpg", title: "Test Title 4"},
				5: {img: "/pic/zoom/fashion/fashion_008.jpg", title: "Test Title 5"},
				6: {img: "/pic/zoom/fashion/fashion_010.jpg", title: "Test Title 6"}
			},
			
			firstImageToLoad: 1, // image which should be loaded at first
			
			images360: {
				1: {path: '/pic/zoom3d/Uvex_Occhiali', position: 'first', spinReverse: false, spinDemoTime: 3000}
			},
			
			images360firstToLoad: false, // Ver.4.2.1+ show 360 image first instead of plain image
			images360Opt: ['spinReverse', 'spinReverseZ', 'spinBounce', 'spinDemoRounds', 'spinDemoTime', 'spinWhilePreload'], // Ver. 4.2.1
			images360Thumb: false, // 4.2.1+ show first image of the spin as thumb
			images360Preview: true, // Ver. 4.2.1+ load 360 / 3D over mouse over first 
			images360PreviewResponsive: true, // Ver. 4.2.1
			images360examplePreview: 'mouseOverExtension360', // Ver. 4.2.1+ configuration set which is passed to ajax-zoom when images360Preview is true

			galleryAxZmThumbSlider: true, // use axZmThumbSlider on gallery thumbnails or not
			galleryAxZmThumbSliderParam: {
 				scrollBy: 3,
 				smoothMove: 6,
 				quickerStop: true,
 				pressScrollSnap: true,
 				btn: true,
 				btnClass: 'axZmThumbSlider_button_new',
 				btnBwdStyle: {marginLeft: -24, marginRight: 0},
 				btnFwdStyle: {marginLeft: 0, marginRight: -24},
				btnLeftText: null, 
				btnRightText: null, 
				btnTopText: null, 
				btnBottomText: null,
				mouseWheelScrollBy: null,
 				wrapStyle: {borderTopWidth: 0, borderBottomWidth: 0},
 				scrollbar: false,
 				
 				thumbLiSubClass: {
 					first: null,
 					last: null 
 				},
 				thumbImgStyle:{
 					maxHeight: '90px',
 					maxWidth: '70px'
				},
 				thumbLiStyle: {
	                width: 70, 
	                height: 90, 
	                lineHeight: '88px',
	                marginBottom: 2,
	                marginLeft: 3,
	                marginRight: 3,
	                borderRadius: 0
		        }
			},
			
			preloadMouseOverImages: false, // preload all preview and mouse over images, possible values: false, true, 'oneByOne' 
			width: 'auto', // width of the mouse image or 'auto'
			height: 'auto', // height of the mouse image or 'auto'
			mouseOverZoomWidth: 1200, // max width of the image that will be shown in the zoom window
			mouseOverZoomHeight: 1200, // max height of the image that will be shown in the zoom window

			ajaxZoomOpenMode: 'fancyboxFullscreen', // Ver. 4.1.5+ possible values: 'fullscreen', 'fancyboxFullscreen', 'fancybox', 'colorbox'
			example: 'mouseOverExtension', // configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is 'fullscreen'
			exampleFancyboxFullscreen: 'mouseOverExtension', // Ver. 4.1.5 configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is 'fancyboxFullscreen'
			exampleFancybox: 'modal', // Ver. 4.1.5 configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is 'fancybox'
			exampleColorbox: 'modal', // Ver. 4.1.5 configuration set which is passed to ajax-zoom when ajaxZoomOpenMode is 'colorbox'
			
			fancyBoxParam: {
				boxMargin: 0,
				boxPadding: 0,
				boxCenterOnScroll: true,
				boxOverlayShow: true,
				boxOverlayOpacity: 0.75,
				boxOverlayColor: '#777',
				boxTransitionIn: 'fade', // 'elastic', 'fade' or 'none'
				boxTransitionOut: 'fade', // 'elastic', 'fade' or 'none'
				boxSpeedIn: 300,
				boxSpeedOut: 300,
				boxEasingIn: 'swing',
				boxEasingOut: 'swing',
				boxShowCloseButton: true, // close button
				boxEnableEscapeButton: true,
				boxTitleShow : true,
				boxTitlePosition : 'float', // 'float', 'outside', 'inside' or 'over'
				boxTitleFormat : null
			},
			disableScrollAnm: true, // disable animation while AJAX-ZOOM zooming
			fullScreenApi: false, // try to open AJAX-ZOOM at browsers fullscreen mode, possible on modern browsers except IE and mobile
			axZmCallBacks: { // AJAX-ZOOM has several callbacks, http://www.ajax-zoom.com/index.php?cid=docs#onBeforeStart
				onFullScreenReady: function(){ // example placing any information above the viewer
					// Here you can place you custom code
				}
			},
			thumbW: 90, // gallery thumb width
			thumbH: 90, // gallery thumb height
			thumbRetina: true,
			mouseOverZoomParam: {
				position: 'right', // inside, top, right, bottom, left
				posAutoInside: 150, // applies when width (left, right) or height (top, bottom) of zoom window are less than this px value (zoomWidth || zoomHeight are set to auto); if zoomWidth || zoomHeight are fixed, applies when zoom window is out of page border
				autoFlip: false, //  flip right to left and bottom to top if less than int px or false to disable
				biggestSpace: false, // Overrides position and instantly chooses the direction, disables autoFlip; playes nicely when zoomWidth and zoomHeight are set to 'auto'
				zoomFullSpace: false, // Uses full screen height (does not align to the map / disables adjustY) if position is right or left || uses full screen width (does not align to the map / disables adjustX) if position is top or bottom
				zoomWidth: 520, // width of the zoom window e.g. 530 or 'auto' or Ver. 4.1.5+ jQuery selector|correction value, e.g. '#refWidthTest|+20'
				zoomHeight: 490, // height of the zoom window e.g. 375, or 'auto'!
				autoMargin: 15, // if zoomWidth or zoomHeight are set to 'auto', the margin to the edge of the screen
				adjustX: 20, // horizontal margin of the zoom window
				adjustY: -1, // vertical margin of the zoom window
				lensOpacity: 0.30, // opacity of the selector lens
				zoomAreaBorderWidth: 1, // border thickness of the zoom window
				galleryFade: 300, // speed of inner fade or false
				shutterSpeed: 150, // speed of shutter fadein or false; applies only if image proportions are different from container
				showFade: 300, // speed of fade out for mouse over
				hideFade: 300, // speed of fade in for mouse over
				
				flyOutSpeed: 300, // speed for flyout or false to disable
				flyOutTransition: 'linear', // transition for flyout
				flyOutOpacity: 0.6, // initial opacity for flyout
				flyBackSpeed: 300, // speed for fly back or false to disable
				flyBackTransition: 'linear',
				flyBackOpacity: 0.2,
				smoothMove: 6, // int bigger 1 indicates smoother movements; set 0 to disable
				tint: false, // color value around the lens or false
				tintOpacity: 0.5, // opacity of the area around the lens when tint is not false
				showTitle: true, // bool, enable / disable title on zoom window
				titleOpacity: 0.4,
				titlePosition: 'top', // position of the title, top or bottom
				cursorPositionX: 0.5, // cursor over lens  horizontal offset, 0.5 is middle
				cursorPositionY: 0.55, //  cursor over lens vertical offset, 0.5 is middle
				loading: true, // display loading information, CSS .mouseOverLoading
				loadingMessage: 'Loading...', // Loading message, not needed, can be just the spinner - see below
				loadingWidth: 90, // width of loading container 
				loadingHeight: 20, // height of loading container 
				loadingOpacity: 1.0, // opacity of the loading container (the transparent background is set via png image on default, see css class)
				zoomHintEnable: true, // Ver. 4.2.1+
				zoomHintText: 'Zoom', // Ver. 4.2.1+
				spinner: true, // use ajax loading spinner without gif files etc.
				spinnerParam: { // spinner options, for more info see: http://fgnass.github.com/spin.js/
					lines: 11, // The number of lines to draw
					length: 3, // The length of each line
					width: 3, // The line thickness
					radius: 4, // The radius of the inner circle
					corners: 1, // Corner roundness (0..1)
					rotate: 0, // The rotation offset
					color: '#FFFFFF', // #rgb or #rrggbb
					speed: 1, // Rounds per second
					trail: 90, // Afterglow percentage
					shadow: false, // Whether to render a shadow
					hwaccel: false, // Whether to use hardware acceleration
					className: 'spinner', // The CSS class to assign to the spinner
					zIndex: 2e9, // The z-index (defaults to 2000000000)
					top: 0, // Top position relative to parent in px
					left: 1 // Left position relative to parent in px
				}
			}

		});
	</script>

</div>



</body>
</html>