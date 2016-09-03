<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>jQuery Image Slider with touch Swipe, Zoom & Pan</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="jQuery Image Slider with Swipe, Zoom & Pan"/>
<meta property="og:description" content="Display high resolution 360°/3D objects and plain 2D images in one jQuery HTML5 player for your product presentations."/>
<meta name="description" content="Display high resolution 360°/3D objects and plain 2D images in one jQuery HTML5 player for your product presentations." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_31.jpg"/> 

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

<!-- Only needed for the online configurator -->
<script type="text/javascript" src="../axZm/plugins/JSON/jquery.json-2.3.min.js"></script>
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.imageSliderEditor.js"></script>

<!-- not needed -->
<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
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

<DIV style="width: 800px; margin: 0 auto;">
	<h2>jQuery Image Slider with Touch Swipe, Image Zoom & Pan, fullscreen view, dynamic options configurator etc.</h2>
	
	<DIV id='axZmPlayerOuter' left style="width: 800px; height: 430px; float: left;">
		<!-- Container where AJAX-ZOOM will be loaded into. Everything inside is removed when AJAX-ZOOM is loaded-->	
		<DIV id='axZmPlayerCont' class='axZmPlayerCont' style='width: 100%; height: 400px; color: gray; float: left'>
			<DIV style='margin: 0 auto; min-height: 100px; background: url(../axZm/icons/ajax-loader-bar.gif) center center no-repeat;'>
			Loading, please wait...
			</DIV>
		</DIV>
	</DIV>

	<!-- Init AJAX-ZOOM -->	
	<script type="text/javascript">

	$.fn.ajaxZoomSlider({
		axZmPath: 'auto', // Path to the axZm folder
		divID: 'axZmPlayerCont',
		parameter: 'zoomDir=/pic/zoom/trasportation', // see below /pic/slide_2_1
		bulletsGravity: "top",
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
	
	<input type="button" value="Display more options and generate copy/paste JavaScript" onclick="$('#axZmSliderDynConf').toggle(); $('#axZmPlayerOuter').toggle();">
	
	<DIV style="clear:both; height: auto; width: 100%; display: block" id="axZmSliderDynConf"></DIV>

<DIV id="axZmSliderDynConfWrap" style="padding-top: 20px; clear: both; width: 100%">
<DIV style="height: auto; padding: 5px; border: #CCCCCC 1px solid" id="axZmSliderDynConfHTML">
<pre style='color:#000000;background:#ffffff;'><span style='color:#004a43; '>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"</span><span style='color:#5555dd; '>http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd</span><span style='color:#004a43; '>"></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#274796; '> xmlns</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"http://www.w3.org/1999/xhtml"</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>></span>

    <span style='color:#696969; '>&lt;!-- jQuery core --></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
    
    <span style='color:#696969; '>&lt;!-- AJAX-ZOOM main js and css file --></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script type="text/javascript" src="../axZm/jquery.axZm.js"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>link</span><span style='color:#274796; '> </span><span style='color:#074726; '>rel</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"stylesheet"</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"text/css"</span><span style='color:#274796; '> </span><span style='color:#074726; '>href</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"../axZm/axZm.css"</span><span style='color:#274796; '> </span><span style='color:#074726; '>media</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"all"</span><span style='color:#274796; '> </span><span style='color:#a65700; '>/></span>
    
    <span style='color:#696969; '>&lt;!-- AJAX-ZOOM imageSlider extension --></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>link</span><span style='color:#274796; '> </span><span style='color:#074726; '>rel</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"stylesheet"</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"text/css"</span><span style='color:#274796; '> </span><span style='color:#074726; '>href</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"../axZm/extensions/jquery.axZm.imageSlider.js"</span><span style='color:#274796; '> </span><span style='color:#074726; '>media</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"all"</span><span style='color:#274796; '> </span><span style='color:#a65700; '>/></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script type="text/javascript" src="../axZm/extensions/jquery.axZm.imageSlider.js"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>

<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>></span>
<span style='color:#696969; '>&lt;!-- Container where AJAX-ZOOM will be loaded into. </span>
<span style='color:#696969; '>Everything inside axZmPlayerCont is removed when AJAX-ZOOM is loaded--></span>    
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>DIV</span><span style='color:#274796; '> </span><span style='color:#074726; '>id</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"axZmPlayerOuter"</span><span style='color:#274796; '> </span><span style='color:#074726; '>left</span><span style='color:#274796; '> </span><span style='color:#074726; '>style</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#008c00; '>800</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>min-height</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#008c00; '>430</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>float</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#074726; '>left</span><span style='color:#800080; '>;</span><span style='color:#0000e6; '>"</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>DIV</span><span style='color:#274796; '> </span><span style='color:#074726; '>id</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'axZmPlayerCont'</span><span style='color:#274796; '> </span><span style='color:#074726; '>style</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'</span><span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#008c00; '>800</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>min-height</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#008c00; '>400</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>float</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#074726; '>left</span><span style='color:#0000e6; '>'</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>DIV</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>DIV</span><span style='color:#a65700; '>></span>

<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script type="text/javascript"</span><span style='color:#a65700; '>></span>
<span style='color:#696969; '>// This code below is updated dynamically when you use the options configurator. 
Please find the desciptions of each option in the configurator: 
http://www.ajax-zoom.com/examples/example30.php</span><DIV style="clear:both; height: auto; padding: 1px; color: #000000; background-color: #FFFFCC;" id="axZmSliderDynConfPrint"></DIV>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>

<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#a65700; '>></span>
</pre>

</DIV>
</DIV>
 
	<!-- Bla, bla-->
	<DIV style="clear:both;">
 		<p style="padding-top: 20px">This jQuery image slider is a wrapper and extension of AJAX-ZOOM jQuery plugin. 
			Considering what you see above as just another image slider out of many on internet, the WOW effect is certainly 
			its ability to dynamically zoom into images of virtually any dimensions and file sizes. 
			Also the fullscreen option, as well as touch device compatibility with pinch zoom and touch swipe make it unique. 
			Please note that the original sized image never loads into cache. Only the portion of the image being zoomed.
		</p>
		
		<p>All elements like buttons, bullet navigation, description etc. 
			can be disabled and positioned anywhere over the image or besides just by setting an option in jQuery plugin manner or with the online configurator. 
			Most CSS is defined in a separate file. The slider extension is open source, commented and can be extended as you like (no overkill js). 
			Most of the options are specific to this slider extension. Some options however are passed directly to AJAX-ZOOM and set its 
			options dynamically over this extension. In fact this is a wrapper for AJAX-ZOOM extended by more custom functionality using AJAX-ZOOM API. 
		</p>
	</DIV>

</DIV>




<?php
include ('footer.php');
?>

</body>
</html>