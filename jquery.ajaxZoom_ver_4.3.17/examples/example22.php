<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM responsive liquid layout design javascript</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM responsive liquid layout design javascript"/>
<meta property="og:description" content="AJAX-ZOOM is placed inside a container with dynamic width and height, controlled by JavaScript. "/>
<meta name="description" content="AJAX-ZOOM is placed inside a container with dynamic width and height, controlled by JavaScript. " />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_22.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<link rel="stylesheet" href="../axZm/axZm.css" type="text/css" media="screen">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0; overflow: hidden;}
	body {margin: 0; padding: 0; overflow: hidden;}
	
	h2 {padding:0px; margin: 0px 0px 15px 0px; font-size: 16pt; }

	/* Layout */
	#nav{
		float: left; width: 220px; background-color: #AAAAAA; border-right: #808080 solid 1px; overflow: hidden; font-size: 12px; color: #FFFFFF;
	}
	
	#content{
		height: 150px; float: right; background-color: #FFFFFF;
	}
	
	#footer{
		clear: both;
	}
</style>

</head>

<body>
	<!-- Top area -->
	<div id="header"><?php include ('navi.php');?></div>
	
	<!-- Left area -->
	<div id="nav">
		<div style="padding: 7px;">
			An example of AJAX-ZOOM placed inside a container with dynamic / responsive width and height 
			(depends on screen resolution and browser window size). Resize the window to see the adjustments. <br><br>
			Please note that the layout in this example is controlled by javascript (see "adjustHeight" function in the source code). 
			If you have responsive layout which adjusts instantly you do not need such a javascript control.<br><br>
			The vertical gallery to the right can be disabled or replaced with horizontal gallery.<br><br>
			With $.fn.axZm.loadAjaxSet() AJAX-ZOOM API you can change the set of loaded images easily: 
			e.g. $.fn.axZm.loadAjaxSet('zoomDir=/pic/zoom/estate&example=23'); <br><br>
			click <input type="button" value="HERE" onclick="jQuery.fn.axZm.loadAjaxSet('zoomDir=/pic/zoom/estate&example=23&zoomID=2')"> to try the above <br>
			click <input type="button" value="RESTORE" onclick="jQuery.fn.axZm.loadAjaxSet(ajaxZoom.queryString)"> to set back <br><br>
			For loading specific images use "zoomData" instead of "zoomDir"; "zoomData" is a CSV string separated with vertical slash ("|")
		</div>
	</div>
	
	<!-- Left area, where responsive AJAX-ZOOM will be put into -->
	<div id="content">
		<!-- This div will be removed -->
		<div style="padding: 20px; color: #000000; font-size: 16pt">Loading, please wait...</div>
	</div>
	
	<!-- Bottom area -->
	<div id="footer"></div> 

	<script type="text/javascript">
		jQuery(document).ready(function(){
		
			// A function to controll this responsive layout with JS
			var adjustHeight = function(){
				var a = (window.innerHeight ? window.innerHeight : $(window).height()) - jQuery('#header').outerHeight() - jQuery('#footer').outerHeight() - 1;
				jQuery('#content').css({height: a, width: jQuery(window).width() - jQuery('#nav').outerWidth() - 1});
				jQuery('#nav').css('height', a);
				window.scrollTo(0,0);
			};

			// Trigger adjustHeight on jQuery(document).ready
			adjustHeight();
			
			// Bind adjustHeight to window onresize event
			jQuery(window).bind('resize', adjustHeight);
		
			// Define some var to hold AJAX-ZOOM related values
			window.ajaxZoom = {};
			
			// Path to /axZm/ folder, adjust the path in your implementaion
			ajaxZoom.path = '../axZm/';
			
			// Define the ID of the responsive container
			ajaxZoom.targetID = 'content';
			
			// Images to load
			ajaxZoom.zoomData = [
				'/pic/zoom/boutique/boutique_001.jpg',
				'/pic/zoom/boutique/boutique_002.jpg',
				'/pic/zoom/boutique/boutique_003.jpg',
				'/pic/zoom/boutique/boutique_004.jpg',
				'/pic/zoom/boutique/boutique_005.jpg',
				'/pic/zoom/boutique/boutique_006.jpg',
				'/pic/zoom/boutique/boutique_007.jpg',
				'/pic/zoom/boutique/boutique_008.jpg',
				'/pic/zoom/fashion/fashion_001.jpg',
				'/pic/zoom/fashion/fashion_002.jpg',
				'/pic/zoom/fashion/fashion_003.jpg',
				'/pic/zoom/fashion/fashion_004.jpg',
				'/pic/zoom/fashion/fashion_005.jpg'
			];
			
			// "example" in query string which is passed to AJAX-ZOOM defines an options set
			// which differs from default values. You can find the options set of this example 
			// in /axZm/zoomConfigCustom.inc.php after 
			// elseif ($_GET['example'] == 23)
			ajaxZoom.queryString = 'example=23';
			
			// Pass images as CSV separated with '|'
			ajaxZoom.queryString += '&zoomData='+ajaxZoom.zoomData.join('|');

			// AJAX-ZOOM callbacks (there are many others)
			ajaxZoom.ajaxZoomCallbacks = {
				onVertGalLoaded: function(){
					// A function to place image name and resolution as description of the thumbs
					$.each($.axZm.zoomGA, function(k,v){
						$.fn.axZm.setDescr (k, null, v.img+' ('+v.ow+'x'+v.oh+')');
					});
					setTimeout(function(){
						$.fn.axZm.adjVertGallery(true);
					}, 100);
				}
			};
			
			// Enable overlay before AJAX-ZOOM loads
			window.fullScreenStartSplash = {'enable': true, 'className': false, 'opacity': 0.75};
			
			// Use jQuery.fn.axZm.openFullScreen() API to trigger AJAX-ZOOM responsive
			jQuery.fn.axZm.openFullScreen(ajaxZoom.path, ajaxZoom.queryString, ajaxZoom.ajaxZoomCallbacks, ajaxZoom.targetID, false, false, false);
		});
	</script>

</body>
</html>