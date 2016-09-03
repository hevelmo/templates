<!doctype html>
<html>
<head>
<title>Responsive / adaptive mouseover zoom with left vertical gallery</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="Clean example with responsive mouseover zoom and vertical gallery to the left" />
<meta property="og:type" content="article"/>
<meta property="og:title" content="Responsive / adaptive mouseover zoom with left vertical gallery"/>
<meta property="og:description" content="Clean example with responsive mouseover zoom and vertical gallery to the left"/>
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_32_responsive_vertical.jpg"/> 


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
<link href="../axZm/extensions/axZmMouseOverZoom/jquery.axZm.mouseOverZoom.4.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/extensions/axZmMouseOverZoom/jquery.axZm.mouseOverZoom.4.js"></script>
<script type="text/javascript" src="../axZm/extensions/axZmMouseOverZoom/jquery.axZm.mouseOverZoomInit.4.js"></script>

<!--  Fancybox lightbox javascript, please note: it has been slightly modified for AJAX-ZOOM, only needed if ajaxZoomOpenMode below is set to "fancyboxFullscreen" or "fancybox", optional-->
<link href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.js"></script>

<!--  AJAX-ZOOM extension to load AJAX-ZOOM into maximized fancybox, 
requires jquery.fancybox-1.3.4.css and jquery.fancybox-1.3.4.js, optional -->
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.openAjaxZoomInFancyBox.js"></script>

<!-- Colorbox plugin, only needed if ajaxZoomOpenMode below is set to "colorbox", optional -->
<link href="../axZm/plugins/demo/colorbox/example2/colorbox.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>

<!-- IE < 9 @media query support -->
<script src="../axZm/plugins/css3-mediaqueries.min.js"></script>

<style type="text/css"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0; width: 100%; height: 100%;}
	body {margin: 0; padding: 0; height: 100%;}
	h2 {padding:0px; margin: 25px 0px 15px 0px; font-size: 16pt;}	
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p { }
	p code {background-color: #FDFDFD; border-radius: 4px; color: #AB166C; font-size: 90%; padding: 2px 4px; white-space: nowrap;
}

	.clearfix:after {
	    visibility: hidden;
	    display: block;
	    content: "";
	    clear: both;
	    height: 0;
	}
	* html .clearfix             { zoom: 1; }
	*:first-child+html .clearfix { zoom: 1; }
	
	/* On default it is black */
	body:-webkit-full-screen  {background-color: #FFFFFF;} 
	body:-moz-full-screen     {background-color: #FFFFFF;} 
	body:-ms-full-screen      {background-color: #FFFFFF;} 
	body:-o-full-screen       {background-color: #FFFFFF;} 
	body:full-screen          {background-color: #FFFFFF;} 

	
 	/***************************************************************************************
		Overwrite some css from /axZm/extensions/skins/default/jquery.axZm.thumbSlider.css 
	****************************************************************************************/
	.axZmThumbSlider li{
		background-color: #FFF!important; box-shadow: none!important;
	}

	
 	/*******************************************
		Overwrite some css from /axZm/axZm.css 
	*******************************************/
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
	.jspTrack{background-image: none !important; background-color: #E7E7E7 !important;}
	
	.axZm_spinPreloaderBar{
		background-color: #0191ff;
	}

	.axZm_spinPreloaderHolder{
		background-image: url('../axZm/icons/tr_black_50.png');
	    -moz-border-radius: 0px;
	    -webkit-border-radius: 0px;
	    border-radius: 0px;
	}
	
	.axZm_zoomMapHolder{
		border-color: #AAA;
	}
 
 
 	/******************************
		AJAX-ZOOM mouseover block 
	******************************/
	
	/* wrapper for all html */
	#az_mouseOverZoomParent{
		position: relative; 
		width: 100%;
		margin-bottom: 20px;
	}
	
	/* wrapper for gallery */
	#az_mouseOverZoomGallery{
		position: absolute; 
		width: 72px; 
		z-index: 1; 
		height: 100%;
		-moz-user-select: none;
	}
	.az_mouseOverZoomGalleryRight{
		right: 0;
	}
	
	/* wrapper for az_mouseOverZoomContainer with offset */
	#az_mouseOverZoomContainerParentGalleryLeft{
		margin-left: 80px; 
		min-height: 100px; /* set some minimal height*/
	}
	
	#az_mouseOverZoomContainerParentGalleryRight{
		min-height: 100px; /* set some minimal height*/
		margin-right: 80px;
	}
	
	/* Container for mouse over image */
	#az_mouseOverZoomContainer{
		position: relative; 
		border: #AAA 1px solid;
		background-color: #FFFFFF;
		padding: 0; /* should not have padding !*/
	}
 
 
 	/*********************************************************
		Responsive page layout used for this demo, not needed 
	**********************************************************/
	#responsiveContainer{padding: 10px; position: relative;}
		
	#topContainer {height: 110px; background-color: #B9CC52; position: relative;}
	#leftSide {width: 40%; background-color: #FFF; float: left; position: relative; z-index: 1; /* pos and zindex - fix for IE7*/}
	
	#middleSide {margin-left: 40%; margin-right: 200px; background-color: #FFF; min-height: 500px;}
	#middleSideInner {margin-left: 10px; background-color: #EEE; overflow: hidden;}
	#middleSideContent {padding: 10px 10px 200px 10px; position: relative;}
	
	#rightSide {width: 200px; position: absolute; right: 0px; top: 0; height: 100%;}
	#rightSideInner {background-color: #E66E55; position: absolute; top: 10px; right: 10px; bottom: 10px; left: 0px;}
	#rightSideContent {padding: 10px; color: #FFF;}	
	
	#commentDiv {clear: both; padding: 10px; margin: 10px 10px 10px 10px; background-color: #EEEEEE;}

	
	.colorSwitchTest{
		display: inline-block; width: 40px; height: 40px; cursor: pointer; border: 2px solid #FFF; border-radius: 22px;
	}
	.colorSwitchTest:hover{
		border: 2px solid transparent;
	}
	
	/**********************************************************************
		media query to adjust the layout if it is lesser then 960px width
		responsive page layout used for this demo, not needed
	**********************************************************************/
	@media only screen and (max-width: 960px){
		#responsiveContainer {padding: 0; overflow-x: hidden;}
		#az_mouseOverZoomContainer {border-width: 0px!important;}
		
		#leftSide {width: 100%; float: none;}
		
		#middleSide {width: 100%; margin-left: 0; float: none; min-height: 100px; background-color: #F2D3A2; overflow-x: hidden;}
		#middleSideInner {margin-left: 0;}
		#middleSideContent {padding: 10px;}
		
		#rightSide {width: 100%; float: none; position: static; height: auto; overflow-x: hidden;}
		#rightSideInner {position: static;} 
		#commentDiv {margin: 0; overflow-x: hidden;}
	}
</style>

</head>
<body>

<?php
// This include is just for the demo, you can remove it
include ('navi.php');
?>

<div id="topContainer">
	<h2 style="margin: 0; padding: 25px 10px 0 10px;">
		Responsive AJAX-ZOOM mousehover zoom jQuery extension with <u>optional</u> 360° spins or multilevel 3D 
		and verical gallery to the left
	</h2>
</div>

<div id="responsiveContainer">

	<div id="leftSide" class="clearfix">
		
		<!-- AJAX-ZOOM mouseover block gallery left -->
		<div id="az_mouseOverZoomParent">

			<!-- gallery with thumbs (will be filled with thumbs by javascript) -->
			<div id="az_mouseOverZoomGallery">
				Gellery loading...
			</div> 

			<!-- Parent container for offset to the left or right -->
			<div id="az_mouseOverZoomContainerParentGalleryLeft">
				
				<!-- Container for mouse over image -->
				<div id="az_mouseOverZoomContainer">
					Mouseover Zoom loading...
				</div>
			</div>
		</div>
		<!-- AJAX-ZOOM mouseover block gallery left END -->
		
		
		<!-- AJAX-ZOOM mouseover block gallery right -->
		<!--<div id="az_mouseOverZoomParent">-->

			<!-- gallery with thumbs (will be filled with thumbs by javascript) -->
			<!--<div id="az_mouseOverZoomGallery" class="az_mouseOverZoomGalleryRight">-->
				<!--Gellery loading...-->
			<!--</div> -->

			<!-- Parent container for offset to the left or right -->
			<!--<div id="az_mouseOverZoomContainerParentGalleryRight">-->
				
				<!-- Container for mouse over image -->
				<!--<div id="az_mouseOverZoomContainer">-->
					<!--Mouseover Zoom loading...-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->
		<!-- AJAX-ZOOM mouseover block gallery right END -->	
		
		
	</div>

	<div id="middleSide">
		<div id="middleSideInner">
			<div id="middleSideContent">
				<h3 style="margin: 0; padding-top: 0px; text-shadow: 1px 1px 0px #FFF;">Vertical left sided gallery</h3>
				<p style="font-size: 120%;">Please find the documentation and other information about 
					this responsive mouseover zoom in <a href="example32_responsive.php">example32_responsive.php</a>
				</p>
				<p>In the source code of this example you will also find the commented out HTML markup 
					("AJAX-ZOOM mouseover block gallery right") for placing the gallery to the right. 
					If you replace with this markup, then the only option which basically needs to be suited is "adjustX".
				</p>
			    <table width="100%">
				    <tr class="doptth">
				         <th>&zwj;</th><th style="text-align: left;">This will change "ajaxZoomOpenMode" option</th>
				    </tr>
				    <tr>
					    <td width="30"><input type="radio" name="ajaxZoomOpenMode" autocomplete=off onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'ajaxZoomOpenMode')"  value="fullscreen"></td>
					    <td>Open AJAX-ZOOM at fullscreen mode</td>
				    </tr>
				    
				    <tr>
					    <td><input type="radio" name="ajaxZoomOpenMode" autocomplete=off onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'ajaxZoomOpenMode')" value="fancyboxFullscreen" checked></td>
					    <td>Open AJAX-ZOOM in responsive "Fancybox"</td>
				    </tr>
				    
				    <tr>
					    <td><input type="radio" name="ajaxZoomOpenMode" autocomplete=off onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'ajaxZoomOpenMode')" value="fancybox"></td>
					    <td>Open AJAX-ZOOM in regular "Fancybox"</td>
				    </tr>
				    
				    <tr>
					    <td><input type="radio" name="ajaxZoomOpenMode" autocomplete=off onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'ajaxZoomOpenMode')" value="colorbox"></td>
					    <td>Open AJAX-ZOOM in "Colorbox"</td>
				    </tr>
				    <tr>
				         <td>&zwj;</td>
				         <td> 
						    <div style="width: 150px; float: left;">Enable monitor size fullscreen:</div>
						    <input type="radio" name="fullScreenApi" onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'fullScreenApi')" autocomplete=off value="true" checked> - enable 
						    <input type="radio" name="fullScreenApi" onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'fullScreenApi')" autocomplete=off value="false"> - disable	                	 
				         </td>
				    </tr>
				    <tr>
				         <td>&zwj;</td>
				         <td> 
						    <div style="width: 150px; float: left;">360°/3D "preview" mode:</div>
						    <input type="radio" name="images360Preview" onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'images360Preview')" autocomplete=off value="true" checked> - enable 
						    <input type="radio" name="images360Preview" onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'images360Preview')" autocomplete=off value="false"> - disable	                	 
				         </td>
				    </tr>
				    
				    <tr>
				         <td>&zwj;</td>
				         <td> 
						    <div style="width: 150px; float: left;">Disable scroll animation:</div>
						    <input type="radio" name="disableScrollAnm" onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'disableScrollAnm')" autocomplete=off value="false" > - enable 
						    <input type="radio" name="disableScrollAnm" onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'disableScrollAnm')" autocomplete=off value="true" checked> - disable	                	 
				         </td>
				    </tr>
				    
				    <tr id="tintFilter_div">
				         <td>&zwj;</td>
				         <td> 
						    <div style="width: 150px; float: left;">Tint filter:</div>
						    <select name="tintFilter" onchange="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'tintFilter', 'mouseOverZoomParam', undefined, true)" autocomplete=off>
						    	<option value="false"> none </option>
						    	<option value="blur"> blur </option>
						    	<option value="grayscale"> grayscale </option>
						    	<option value="sepia"> sepia </option>
						    	<option value="invert"> invert </option>
						    	<option value="saturate"> saturate </option>
						    	<option value="custom"> custom </option>
						    </select>
				         </td>
				    </tr>
				    <tr>
				         <td>&zwj;</td>
				         <td> 
						    <div style="width: 150px; float: left;">Mouseover Zoom:</div>
						    <input type="radio" name="noMouseOverZoom" onclick="jQuery('#slideOutDest_div').css('display', 'none'); jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'noMouseOverZoom', 'mouseOverZoomParam', undefined, true)" autocomplete=off value="false" checked> - enabled 
						    <input type="radio" name="noMouseOverZoom" onclick="jQuery('#slideOutDest_div').css('display', ''); jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'noMouseOverZoom', 'mouseOverZoomParam', undefined, true)" autocomplete=off value="true"> - disabled	                	 
				         </td>
				    </tr>
				    
				    <tr style="display: none;" id="slideOutDest_div">
				         <td>&zwj;</td>
				         <td> 
						    <div style="width: 150px; float: left;">Slider effect:</div>
						    <select name="slideOutDest" onchange="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'slideOutDest', 'mouseOverZoomParam', undefined, true)" autocomplete=off>
						    	<option value="1"> 1 </option>
						    	<option value="2"> 2 </option>
						    	<option value="3"> 3 </option>
						    </select>
				         </td>
				    </tr>
				    
				    <tr>
				         <td>&zwj;</td>
				         <td> 
						    <div style="width: 150px; float: left;">Prev, next arrows:</div>
						    <input type="radio" name="prevNextArrows" onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'prevNextArrows'); jQuery('#az_mouseOverZoomContainer>.axZm_mouseOverPrevNextArrows').css('display', 'block');" autocomplete=off value="true"> - enabled 
						    <input type="radio" name="prevNextArrows" onclick="jQuery.mouseOverZoom_setOpt('az_mouseOverZoomContainer', 'prevNextArrows'); jQuery('#az_mouseOverZoomContainer>.axZm_mouseOverPrevNextArrows').css('display', 'none');" autocomplete=off value="false" checked> - disabled	                	 
				         </td>
				    </tr>
			    
			    </table>
			    
			    <h3 style="margin: 0; text-shadow: 1px 1px 0px #FFF;">Load different images / 360° sets</h3>
			    <table>
			    	<tr>
			    		<td style="width: 60px"><div id="color_1" class="colorSwitchTest" style="background-color: #D83E2D;"></div></td>
			    		<td style="width: 60px"><div id="color_2" class="colorSwitchTest" style="background-color: #33354E;"></div></td>
			    		<td style="width: 60px"><div id="color_3" class="colorSwitchTest" style="background-color: red;"></div></td>
			    		<td style="width: 60px"><div id="color_4" class="colorSwitchTest" style="background-color: yellow;"></div></td>
			    		<td style="width: 60px"><div id="color_5" class="colorSwitchTest" style="background-color: gray;"></div></td>
			    		<td style="width: 60px"><div id="color_6" class="colorSwitchTest" style="background-color: green;"></div></td>
			    	</tr>
			    	<tr>
			    		<td style="font-size: 80%"> 360 +<br>images </td>
			    		<td style="font-size: 80%"> only<br>images </td>
			    		<td style="font-size: 80%"> only one 360 </td>
			    		<td style="font-size: 80%"> two 360<br>or more </td>
			    		<td style="font-size: 80%"> only one image </td>
			    		<td style="font-size: 80%"> no 360<br>no images </td>
			    	</tr>
			    </table>
			    
			    <script id="replaceImages1">
			    	// 360 + images
			    	jQuery('#color_1').bind('click', function(){
						jQuery.mouseOverZoomInit.replaceImages({
						    divID: 'az_mouseOverZoomContainer',
						    images360Overlay: true,
						    images360Thumb: true,
						    images360: {
						    	1: {path: "/pic/zoom3d/Uvex_Occhiali", position: "first", spinReverse: false, spinDemoTime: 4500}
						    },
							images: {
								1: {img: "/pic/zoom/fashion/fashion_004.jpg", title: "Test Title 1"},
								2: {img: "/pic/zoom/fashion/fashion_003.jpg", title: "Test Title 2"},
								3: {img: "/pic/zoom/fashion/fashion_001.jpg", title: "Test Title 3"},
								4: {img: "/pic/zoom/fashion/fashion_002.jpg", title: "Test Title 4"},
								5: {img: "/pic/zoom/fashion/fashion_008.jpg", title: "Test Title 5"},
								6: {img: "/pic/zoom/fashion/fashion_010.jpg", title: "Test Title 6"}
							}
						});
			    	});
			    </script>
			    
			    <script id="replaceImages2">
			    	// Bind jQuery.mouseOverZoomInit.replaceImages to the element with ID #color_2
			    	// We only need the reference to "az_mouseOverZoomContainer" 
			    	// and define images obeject and or images360 object
			    	jQuery('#color_2').bind('click', function(){
						jQuery.mouseOverZoomInit('replaceImages', {
						    divID: 'az_mouseOverZoomContainer',
						    images360: {
						      // You could put a different 360 in here
						    },
							images: {
								1: {img: "/pic/zoom/fashion/fashion_005.jpg", title: "Test Title 1"},
								2: {img: "/pic/zoom/fashion/fashion_006.jpg", title: "Test Title 2"},
								3: {img: "/pic/zoom/fashion/fashion_007.jpg", title: "Test Title 3"},
								4: {img: "/pic/zoom/fashion/fashion_009.jpg", title: "Test Title 4"}
							}						
						});
			    	});
			     </script>
			     
			    <script id="replaceImages3">
			    	// Only one 360
			    	jQuery('#color_3').bind('click', function(){
						jQuery.mouseOverZoomInit.replaceImages({
						    divID: 'az_mouseOverZoomContainer',
						    images360: {
						    	1: {path: "/pic/zoom3d/Uvex_Occhiali", position: "first", spinReverse: false, spinDemoTime: 4500}
						    },
							images: {
								// no images
							}						
						});
			    	});
			    </script>
			    
			    <script id="replaceImages4">
			    	// Two 360 or more
			    	jQuery('#color_4').bind('click', function(){
						jQuery.mouseOverZoomInit.replaceImages({
						    divID: 'az_mouseOverZoomContainer',
						    images360Overlay: false,
							images360Thumb: true,
						    images360: {
						     	1: {path: "/pic/zoom3d/Uvex_Occhiali", position: "first", spinReverse: false, spinDemoTime: 4500},
						      	1: {path: "/pic/zoom3d/Uvex_Occhiali", position: "first", spinReverse: false, spinDemoTime: 4500}
						    },
							images: {
								// no images
							}
						});
			    	});
			    </script>
			    
			    <script id="replaceImages5">
			    	// No 360, one image
			    	jQuery('#color_5').bind('click', function(){
						jQuery.mouseOverZoomInit.replaceImages({
						    divID: 'az_mouseOverZoomContainer',
						    images360: {
						      	// no 360
						    },
							images: {
								1: {img: "/pic/zoom/fashion/fashion_009.jpg", title: "Test Title 1"},
							}
						});
			    	});
			    </script>
			    
			    <script id="replaceImages6">
			    	// No 360, no images
			    	jQuery('#color_6').bind('click', function(){
						jQuery.mouseOverZoomInit.replaceImages({
						    divID: 'az_mouseOverZoomContainer',
						    images360: {
						      	// no 360
						    },
							images: {
								// no images
							}
						});
			    	});
			    </script>
				
			</div>
		</div>
	</div>
	
	<div id="rightSide">
		<div id="rightSideInner">
			<div id="rightSideContent">
				<h3 style="margin: 0; padding-top: 0; color: #FFF;">About this responsive mousehover zoom</h3>
				<p style="margin-top: 5px"> 
					Please find the documentation and other information about 
					this responsive mouseover zoom in <a href="example32_responsive.php" style="color: #FFF;">example32_responsive.php</a> 
				</p>
			</div>
			
		</div>
	</div>
	
</div>

<div id="commentDiv">
	<?php
	// Bottom navigation for examples, not needed!
	include ('footer.php');
	?>
</div>

<!-- Init mouseover -->
<script type="text/javascript" id='mouseOverZoomInit'>
	// or
	// jQuery('#az_mouseOverZoomContainer').mouseOverZoomInit
	// if you need it chainable
	jQuery.mouseOverZoomInit({
		axZmPath: "../axZm/", // Path to AJAX-ZOOM, e.g. /zoomTest/axZm/
		divID: "az_mouseOverZoomContainer", // DIV for mouseover zoom
		galleryDivID: "az_mouseOverZoomGallery", // DIV id of the gallery, set to false to disable gallery

		// Object containing absolte paths to the master images, optional with titles. Start with 1, not 0
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
			
		images360: { // path(s) to the folder with 360 images
			1: {path: "/pic/zoom3d/Uvex_Occhiali", position: "first", spinReverse: true, spinDemoTime: 4500}
		},
		
		images360firstToLoad: false, // Show 360 image first instead of plain image

		images360Thumb: true, // show first image of the spin as thumb
		images360Preview: true, // 360 / 3D over mouse over first 
		images360examplePreview: "mouseOverExtension360", // Configuration set which is passed to ajax-zoom when images360Preview is true
		
		thumbW: 64, // gallery thumb width
		thumbH: 64, // gallery thumb height
		thumbRetina: true, // will double the resolution
		
		galleryAxZmThumbSlider: true, // use axZmThumbSlider on gallery thumbnails
		
		// axZmThumbSlider parametrs if used - "galleryAxZmThumbSlider" option set to true
		// for more info see http://www.ajax-zoom.com/axZm/extensions/axZmThumbSlider/
		galleryAxZmThumbSliderParam: {			
 			orientation: 'vertical',
 			scrollBy: 3,
 			smoothMove: 6,
 			quickerStop: true,
 			pressScrollSnap: true,
 			btn: true,
 			btnClass: 'axZmThumbSlider_button_new',
 			btnBwdStyle: {marginTop: 0, marginBottom: 0},
 			btnFwdStyle: {marginTop: 0, marginBottom: 0},
			btnLeftText: null, 
			btnRightText: null, 
			btnTopText: null, 
			btnBottomText: null,
			btnHidden: true,
			mouseWheelScrollBy: 1,
 			wrapStyle: {
 				borderLeftWidth: 0, 
 				borderRightWidth: 0
 			},
 			scrollbar: false,
 			
 			thumbLiSubClass: {
 				first: null,
 				last: null 
 			},
 			thumbImgStyle:{
 				maxHeight: "64px",
 				maxWidth: "64px",
 				borderRadius: 3
			},
 			thumbLiStyle: {
	            width: 64, 
	            height: 64, 
	            lineHeight: "62px",
	            marginBottom: 2,
	            marginLeft: 3,
	            marginRight: 3,
	            borderRadius: 3
		    }
		},
		preloadMouseOverImages: true, // preload all preview and mouse over images, possible values: false, true, "oneByOne" 
		heightRatio: 1.0, // If "responsive" option is enabled, "heightRatio" with instantly adjust the height of mouseover container depending on width
		heightMaxWidthRatio:  false, // Set "heightRatio" depending on window width
		maxSizePrc: "1|-50", // If "responsive" option is enabled
		
		//Please note that the size is limited by <code>$zoom['config']['allowDynamicThumbsMaxSize']</code> which is can be set in '/axZm/zoomConfig.inc.php'
		mouseOverZoomWidth: 1200, // max width of the image that will be shown in the zoom window (flyout)
		mouseOverZoomHeight: 1200, // max height of the image that will be shown in the zoom window (flyout)

		ajaxZoomOpenMode: "fancyboxFullscreen", // possible values: "fullscreen", "fancyboxFullscreen", "fancybox", "colorbox"
		
		disableScrollAnm: true, // disable animation while AJAX-ZOOM zooming
		fullScreenApi: true, // try to open AJAX-ZOOM at browsers fullscreen mode, possible on modern browsers except IE and mobile
		axZmCallBacks: { // AJAX-ZOOM has several callbacks, http://www.ajax-zoom.com/index.php?cid=docs#onBeforeStart
			onFullScreenReady: function(){ // example placing any information above the viewer
				// Here you can place you custom code
			}
		},

		// Mouse hover zoom parameters
		mouseOverZoomParam: {
			position: "right", // inside, top, right, bottom, left
			posAutoInside: 150, // applies when width (left, right) or height (top, bottom) of zoom window are less than this px value (zoomWidth || zoomHeight are set to auto); if zoomWidth || zoomHeight are fixed, applies when zoom window is out of page border
			touchScroll: 0.8, // enable slider for touch devices if width is more than 80% of window width
			zoomWidth: "#middleSideContent", // width of the zoom window e.g. 530 or "auto" or jQuery selector|correction value, e.g. "#refWidthTest|+20"
			zoomHeight: "#middleSideContent", // height of the zoom window e.g. 375, or "auto"!
			autoMargin: 10, // if zoomWidth or zoomHeight are set to "auto", the margin to the edge of the screen
			adjustX: 10, // horizontal margin of the zoom window
			adjustY: -1, // vertical margin of the zoom window
			
			zoomAreaBorderWidth: 1, // border thickness of the zoom window
			galleryFade: 150, // speed of inner fade or false
			shutterSpeed: 150, // speed of shutter fadein or false; applies only if image proportions are different from container
			showFade: 300, // speed of fade out for mouse over
			hideFade: 300, // speed of fade in for mouse over			
			smoothMove: 6, // int bigger 1 indicates smoother movements; set 0 to disable
		}

	});
</script>

</body>
</html>