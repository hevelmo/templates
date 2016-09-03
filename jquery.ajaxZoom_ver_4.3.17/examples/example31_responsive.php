<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>jQuery responsive image slider with zoom</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="jQuery responsive image slider with zoom"/>
<meta property="og:description" content="jQuery responsive image slider with zoom"/>
<meta name="description" content="jQuery responsive image slider with zoom" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_31_responsive.jpg"/> 

<?php
// Set scale for iPhone and disable user scalability
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<!-- jQuery core -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM main js and css file -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link rel="stylesheet" type="text/css" href="../axZm/axZm.css" media="all" />

<!-- AJAX-ZOOM imageSlider extension -->
<link rel="stylesheet" type="text/css" href="../axZm/extensions/jquery.axZm.imageSlider.css" media="all" />
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.imageSlider.js"></script>

<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0; height: 100%;}
	body {margin: 0; padding: 0; height: 100%;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
</style>

</head>
<body>

<?php
// This include is just for the demo, you can remove it
include ('navi.php');
?>

<div style="height: 110px; background-color: #B9CC52">
	<h2 style="margin: 0; padding: 25px 10px 0 10px;">jQuery responsive image slider with touch swipe and bullet navigation</h2>
</div>

<div id="myResponsiveDivID" class="axZmBorderBox" style="width: 100%; height: 60%;">Loading...</div>

<div class="axZmBorderBox" style="padding: 10px; background-color: #E2E2E2;">

	<p style="margin-top: 0px; padding: 10px;">If AJAX-ZOOM "responsive" parent container is resized with javascript by e.g. click on a button, 
		then you might want to call jQuery.fn.axZm.resizeStart(3000); when it starts resizing and jQuery.fn.axZm.resizeStart(1); when it definitely ends. 
		No need to do this if your responsive layout is resized by window resize or orinetation change events, AJAX-ZOOM will do it instantly then. 
		Click 
		<input type="button" value="here" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#myResponsiveDivID').css('height', '300px'); setTimeout(function(){jQuery.fn.axZm.resizeStart(1)})"> 
		to resize the above container to 300px with javascript. 
		For more information and visual examples please take a look at <a href="example15_responsive.php">example15_responsive.php</a>
	</p>
</div>

<!-- Init AJAX-ZOOM -->	
<script type="text/javascript">
	$.fn.ajaxZoomSlider({
		axZmPath: 'auto', // Path to the axZm folder
		divID: 'myResponsiveDivID',
		responsive: true, // 
		parameter: 'zoomDir=/pic/zoom/trasportation',
		descriptionObject: {
			'transportation_002.jpg': {
				descr: 'Audi TT, description can also be a link (click me)', 
				title: 'Audi TT',
				href: 'http://www.ajax-zoom.com'
			},
			'transportation_003.jpg': {
				descr: 'Red Biplane, description can be JavaScript function (click me)', 
				title: 'Red Biplane', 
				href: function(){
					alert('This image filename is '+$.axZm.zoomGA[$.axZm.zoomID]["img"]+'\nand it\'s dimensions are '+$.axZm.zoomGA[$.axZm.zoomID]["ow"]+'x'+$.axZm.zoomGA[$.axZm.zoomID]["oh"]);
				}
			},  
			'transportation_004.jpg' : {descr: 'Hotroad'},
			'transportation_005.jpg': {
				descr: 'Mercedes-Benz 300 SL W 198 Image No 1, <span style="color: red; font-size: 12px">description can be css styled</span>',
				title: '300 SL interior'
			},
			'transportation_006.jpg': {
				descr: 'Mercedes-Benz 300 SL W 198 Image No 2, description can be positioned really anywhere, add certain css classes (e.g. this background), override defaults like maxWidth and bind JavaScript (e.g. click me to remove)', 
				title: '300 SL front view',
				gravity: 'center', 
				addClass: 'axZmPlayerDescrBoxCustom',
				maxWidth: 450,
				hideOnZoom: true,
				href: function(){$('#axZmPlayerDescrBox').remove();}
			},
			'transportation_007.jpg': {
				descr: 'Mercedes-Benz 300 SL W 198 Image No 3, so custom description animations for each frame are possible. This one will also hide on zoom',
				title: '300 SL rear view',
				gravity: 'bottom',
				maxWidth: 300,
				vertMargin: 60,
				addClass: 'axZmPlayerDescrBoxCustom',
				slideInFrom: 'top',
				animationInTime: 1500,
				slideInEasing: 'easeOutBounce',
				hideOnZoom: true,
				callbackLoad: function(){}
			},
			'transportation_008.jpg': {
				descr: 'Mercedes-Benz 300 SL W 198 Image No 4',
				title: '300 SL steering wheel'
			},
			'transportation_009.jpg': {descr: 'Mini Cooper'}
		}
	});
</script>

</body>
</html>