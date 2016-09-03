<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Zoom & Pan to coordinates</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Zoom & Pan to coordinates"/>
<meta property="og:description" content="AJAX-ZOOM API example zoom to area, coordinates. Crop image, make thumbnails."/>
<meta name="description" content="AJAX-ZOOM API example zoom to area, coordinates." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_10.jpg"/> 

<?php

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

<!-- Javascript to style the syntax on this demo page, not needed, should be removed! -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>

<style type="text/css" media="screen"> 
	.clearfix:after {content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;}	 
	.clearfix {display: inline-block;}
	html[xmlns] .clearfix {display: block;}
	* html .clearfix {height: 1%;}

	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0; height: 100%;}	
	
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
 
	input {font-size: 9pt;} 
	form {padding:0px; margin: 0px;}
	#zoomedThumbnails{clear: both; min-height: 80px; background-color: #EEE; padding: 10px 0px 10px 10px;}
	.cropImage {float: left; margin: 0 10px 10px 0px; border: black 1px solid; cursor: pointer;}
	
	.optionsTable {width: 100%; border-spacing: 0; border: 1px solid #AAAAAA; font-family: Tahoma, Geneva, sans-serif; font-size: 10pt;}
	.optionsTable th {background-color: #D4D4D4; padding-top: 10px; padding-bottom: 10px; font-size:12pt; font-family: "Comic Sans MS", cursive, sans-serif;}
	.optionsTable td,th{padding-left: 5px; padding-right: 5px;}
	.optionsTable th{white-space: nowrap;}
	.optionsTable td,th {vertical-align: top; line-height: 1.2em; text-align: left; border-bottom: 1px solid #AAAAAA; padding-top: 3px; padding-bottom: 8px;}
	.optionsTable .subOpt td {border-bottom-width: 0; font-size: 12pt;}
	.optionsTable tr.important {font-weight: bolder;}
	.optionsTable td:nth-child(1) {border-right: #AAA 1px dotted;}
	.optionsTable td:nth-child(2) {border-right: #AAA 1px dotted;}
	.optionsTable ul,ol {padding-left: 14px; margin: 0 0 0 20px;}
	.optionsTable ul {list-style-type: square;}
	.optionsTable li {margin-bottom: 5px; padding-left: 14px; line-height: 0.85em;}
	.optionsTable tr:nth-child(odd) { background-color: #FDFDFD;}
	.optionsTable tr:nth-child(even) { background-color: #FFFFFF;}
	.optionsTable tr:last-child>td { border-bottom: none;}	
	.optionsTable.sub th {padding-top: 3px; padding-bottom: 3px; font-size: 11pt;}
	.optionsTable.sub td {line-height: 1em; padding-bottom: 2px; padding-top: 2px;}
	.optionsTable pre {padding: 0 0 0 20px; margin: 5px 0px 5px 0px; tab-size: 4; -moz-tab-size: 4; line-height: 0.85em;}
	.optionsTable code {font-size: 9pt; font-family: monospace;}
	.optionsTable .mono {font-family: monospace;}

</style>

<script type="text/javascript">
	// var indicating that thumbnail is generating
	var cropLoading = false;
	
	// function to get x1, y1, x2 and y2 values
	function getZoomParam(){
		if (!$.axZm){return;}
		
		// Get values
		var getCropValues = $.fn.axZm.getCropValues()[1];
		
		// Set values into form fields
		$('#z_x1').val(getCropValues[0]);
		$('#z_y1').val(getCropValues[1]);
		$('#z_x2').val(getCropValues[2]);
		$('#z_y2').val(getCropValues[3]);
	}
	
	// function to retrieve values from form fields and fire zoomTo
	function setZoomParam(){
		if (!$.axZm){return;}
		
		// speed should be integer
		var speed = $('#sbm_speed').val(); if (speed >= 0 ){speed = parseInt(speed);}else{speed = 1000;}
		
		$.fn.axZm.zoomTo({
			// if x2 and y2 are not supposed to be passed but property is defined, it should be of type undefined
			x1: $('#z_x1').val() || undefined,
			y1: $('#z_y1').val() || undefined,
			x2: $('#z_x2').val() || undefined,
			y2: $('#z_y2').val() || undefined,
			speed: speed,
			speedZoomed: speed,
			ajxTo: speed,
			motion: $('#sbm_motion').val(),
			motionZoomed: $('#sbm_motion').val(),
			zoomLevel: $('#sbm_zoomLevel').val() || false
		});
	}
	
	// function to retrieve values from form fields and fire zoomTo
	function zoomToTest(){
		if (!$.axZm){return;}
		
		// speed should be integer
		var speed = $('#sbm_speed').val(); if (speed >= 0 ){speed = parseInt(speed);}else{speed = 1000;}
		
		$.fn.axZm.zoomTo({
			x1: $('#sbm_x1').val() || undefined,
			y1: $('#sbm_y1').val() || undefined,
			x2: $('#sbm_x2').val() || undefined,
			y2: $('#sbm_y2').val() || undefined,
			speed: speed,
			speedZoomed: speed,
			ajxTo: speed,
			motion: $('#sbm_motion').val(),
			motionZoomed: $('#sbm_motion').val(),
			zoomLevel: $('#sbm_zoomLevel').val() || false
		});
	}
	
	function createThumbnail(){
		if (!$.axZm || cropLoading){return;}
		
		// Get values
		var getCropValues = $.fn.axZm.getCropValues()[1];
		var cropWidth = 109;
		var cropHeight = 109;
		
		// Width height of the thumbnail
		/*var cropWidth = $('#cropWidth').val();
		var cropHeight = $('#cropHeight').val();
		if (cropWidth > 220){cropWidth = 220;}
		if (cropHeight > 220){cropHeight = 220;}
		if (cropWidth < 50){cropWidth = 50;}
		if (cropHeight < 50){cropHeight = 50;}*/
		
		// Generate a string for thumb
		var dynThumbPar = $.fn.axZm.installPath() + 'zoomLoad.php?azImg=' + $.axZm.zoomGA[$.axZm.zoomID]['ph'] + $.axZm.zoomGA[$.axZm.zoomID]['img'];
		dynThumbPar += '&x1='+getCropValues[0];
		dynThumbPar += '&y1='+getCropValues[1];
		dynThumbPar += '&x2='+getCropValues[2];
		dynThumbPar += '&y2='+getCropValues[3];
		dynThumbPar += '&width='+cropWidth;
		dynThumbPar += '&height='+cropHeight;
		
		// Set cropping status
		cropLoading = true;
		
		// Preload image
		$('<img>')
		.load(function(){
			cropLoading = false;

			if ($('#zoomedThumbnails>img').length == 0){
				$('#zoomedThumbnails').empty();
			}
			
			// Prepend thumb to a div
			$('<img>').attr('src', dynThumbPar)
			.addClass('cropImage')
			.bind('click', function(){
				// on thumb click zoom to this area
				var speed = $('#sbm_speed').val(); if (speed >= 0 ){speed = parseInt(speed);}else{speed = 1000;}
				$.fn.axZm.zoomTo({
					x1: getCropValues[0],
					y1: getCropValues[1],
					x2: getCropValues[2],
					y2: getCropValues[3],
					speed: speed,
					speedZoomed: speed,
					ajxTo: speed,
					motion: $('#sbm_motion').val(),
					motionZoomed: $('#sbm_motion').val()
				});
			})
			.prependTo('#zoomedThumbnails')
			
			// Remove all thumbs except first 8 (this is just for the test)
			$('#zoomedThumbnails>img').slice(8).remove();
		})
		.error(function(){
			cropLoading = false;
			alert('Making crop failed');
		})
		.attr('src', dynThumbPar);
	}
</script>

</head>
<body>
<?php
include ('navi.php');
?>

<div style='width: 980px; margin: 0px auto; overflow-x: hidden;'>
		<!-- Heading -->
		<h2>AJAX-ZOOM - $.fn.axZm.zoomTo() demo + zoom & crop basics and demo</h2>
		
		<p>This example shows the basics of AJAX-ZOOM $.fn.axZm.zoomTo API and dynamic crop generation. With this basics one can 
			develop more sophisticated applications for front as well as backend usage. For developers we also recommend 
			to visit <a href="example14.php">example14.php</a> to get an overview about various callbacks provided by AJAX-ZOOM.
		</p>
		
		<p>If you are looking for a fast way to create a simple gallery with zooming to a specified image area, then please proceed to 
			<a href="example35.php">image crop editor (example35.php)</a> where you will be able to create and save 
			(thus beeing able to reproduce) such a gallery within 30 seconds. This <a href="example35.php">image crop configurator</a> 
			can work with single images, AJAX-ZOOM galleries, 360 and 3D multirow animations.
		</p>
	
		<!-- Player -->
		<div style='float: right; width: 524px; height: 390px; position: relative;'>
			<div id='azParentContainer' style='width: 512px; height: 390px; margin-left: 12px'></div>
			<div id="azMapParent" style="position: absolute; top: 75px; left: -150px; width: 130px; height: 90px;"></div>			
		</div>
		
		<div style="float: left; width: 456px; padding-bottom: 10px;" class="clearfix">
			<h3 style="margin: 0 0 5px 0; padding-top: 0">jQuery.fn.axZm.zoomTo test basic parameters</h3>
			<table cellspacing='2' cellpadding='2'>
				<tr>
					<td width='100'>Coordinates:</td>
					<td width='80'>x1: <input type='text' id='sbm_x1' value='40%' style='width: 40px'></td>
					<td width='80'>y1: <input type='text' id='sbm_y1' value='40%' style='width: 40px'></td>
					<td width='80'>x2: <input type='text' id='sbm_x2' style='width: 40px' value=""></td>
					<td width='80'>y2: <input type='text' id='sbm_y2' style='width: 40px' value=""></td>
				</tr>
				<tr>
					<td>zoomLevel:</td>
					<td colspan='4'><input type='text' id='sbm_zoomLevel' style='width: 40px' value="100"> %</td>
				</tr>
				<tr>
					<td>speed:</td>
					<td colspan='4'><input type='text' id='sbm_speed' style='width: 40px' value="1000"> ms</td>
				</tr>
				<tr>
					<td>motion:</td>
					<td colspan='4'>
						<select id="sbm_motion">
							<option>swing</option> <option>linear</option> <option>easeInQuad</option> <option>easeOutQuad</option> <option>easeInOutQuad</option> <option>easeInCubic</option> <option>easeOutCubic</option> <option>easeInOutCubic</option> <option>easeInQuart</option> 
							<option>easeOutQuart</option><option>easeInOutQuart</option> <option>easeInQuint</option><option>easeOutQuint</option> <option>easeInOutQuint</option> <option>easeInSine</option> <option>easeOutSine</option> <option>easeInOutSine</option> 
							<option>easeInExpo</option> <option>easeOutExpo</option> <option>easeInOutExpo</option> <option>easeInCirc</option> <option>easeOutCirc</option> <option>easeInOutCirc</option> <option>easeInElastic</option> <option>easeOutElastic</option>
							<option>easeInOutElastic</option> <option>easeInBack</option> <option>easeOutBack</option> <option>easeInOutBack</option> <option>easeInBounce</option> <option>easeOutBounce</option> <option>easeInOutBounce</option> 
						</select>
					</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td colspan='5'><input type='button' value='zoomTo' onClick="zoomToTest();"> &nbsp;</td>
				</tr>
			</table>
			
			<h3 style="margin: 15px 0 5px 0; padding-top: 0">Retrieve x1, y1, x2, y2</h3>
			<table cellspacing='2' cellpadding='2'>
				<tr>
					<td width='100'>Original image:</td>
					<td width='80'>x1: <input type='text' id='z_x1' style='width: 40px'></td>
					<td width='80'>y1: <input type='text' id='z_y1' style='width: 40px'></td>
					<td width='80'>x2: <input type='text' id='z_x2' style='width: 40px'></td>
					<td width='80'>y2: <input type='text' id='z_y2' style='width: 40px'></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td colspan='4'>
						<input type='button' value='GET parameters' onClick="getZoomParam();"> &nbsp;&nbsp;
						<input type='button' value='SET parameters (zoomTo)' onClick="setZoomParam();"> &nbsp;&nbsp;
					</td>
				</tr>
			</table>
			
			<h3 style="margin: 15px 0 5px 0; padding-top: 0">Make crop / thumbnail</h3>
			<div class="clearfix"><p style="margin-top: 0;">AJAX-ZOOM has API to create thumbnails (sort of screenshots) of zoomed image on-the-fly. 
				This feature can be generally disabled and has many parameters which can be adjusted.</p> 
				Zoom with the above tools or in the player and press the button below to test.
				<br><input type='button' value='Create crop / thumbnail' onClick="createThumbnail();"> &nbsp;&nbsp;
				<!--
				Width: <input type="text" value="100" id="cropWidth" style="width: 50px;" />
				Height: <input type="text" value="100" id="cropHeight" style="width: 50px;" />
				-->
			</div>
		</div>
		
		<div class="clearfix" id="zoomedThumbnails">Area for thumbnails</div>
		
		<!-- Text -->
		<div style='clear: both;'>
			<h3>Some code</h3>
			<p style="margin-top: 0;">Zooming into a predefined image area is very simple. 
			All you need to know are the coordinates of the edges in the <u>original image</u>: x1, y1 (top left corner) and x2, y2 (bottom right corner).
			You will then need to pass this coordinates to the method jQuery.fn.axZm.zoomTo() and bind the method to any event: 
			</p>
			<?php
			echo "<pre class='brush: html'>";
			echo htmlspecialchars ("<a href='javascript: void(0)' onclick=\"jQuery.fn.axZm.zoomTo({x1: 2584, y1: 1650, x2: 3424, y2: 2210, motion: 'easeOutBack', motionZoomed: 'easeOutSine', speed: 1500, speedZoomed: 750}); return false;\">Zoom to rect</a>");
			echo "</pre>";
			?>	
			
			<p>You can also zoom to a certain point knowing only the x1 and y1 coordinates or even define x1 and y1 as percentage. 
			With the additional property "zoomLevel" you can adjust the final level of zoomed area.
			</p>
			<?php
			echo "<pre class='brush: html'>";
			echo htmlspecialchars ("<a href='javascript: void(0)' onclick=\"jQuery.fn.axZm.zoomTo({x1: '40%', y1: '60%', zoomLevel: '75%'}); return false;\">Zoom to point</a>");
			echo "</pre>";
			?>	
			
			<p>For the three tests left to the player following simple functions are used:</p>
			<?php
			echo "<pre class='brush: js'>";
			echo htmlspecialchars ("
// var indicating that thumbnail is generating
var cropLoading = false;

// function to get x1, y1, x2 and y2 values
function getZoomParam(){
	if (!$.axZm){return;}
	
	// Get values
	var getCropValues = $.fn.axZm.getCropValues()[1];
	
	// Set values into form fields
	$('#z_x1').val(getCropValues[0]);
	$('#z_y1').val(getCropValues[1]);
	$('#z_x2').val(getCropValues[2]);
	$('#z_y2').val(getCropValues[3]);
}

// function to retrieve values from form fields and fire zoomTo
function setZoomParam(){
	if (!$.axZm){return;}
	
	// speed should be integer
	var speed = $('#sbm_speed').val(); if (speed >= 0 ){speed = parseInt(speed);}else{speed = 1000;}
	
	$.fn.axZm.zoomTo({
		// if x2 and y2 are not supposed to be passed but property is defined, it should be of type undefined
		x1: $('#z_x1').val() || undefined,
		y1: $('#z_y1').val() || undefined,
		x2: $('#z_x2').val() || undefined,
		y2: $('#z_y2').val() || undefined,
		speed: speed,
		speedZoomed: speed,
		ajxTo: speed,
		motion: $('#sbm_motion').val(),
		motionZoomed: $('#sbm_motion').val(),
		zoomLevel: $('#sbm_zoomLevel').val() || false
	});
}

// function to retrieve values from form fields and fire zoomTo
function zoomToTest(){
	if (!$.axZm){return;}
	
	// speed should be integer
	var speed = $('#sbm_speed').val(); if (speed >= 0 ){speed = parseInt(speed);}else{speed = 1000;}
	
	$.fn.axZm.zoomTo({
		x1: $('#sbm_x1').val() || undefined,
		y1: $('#sbm_y1').val() || undefined,
		x2: $('#sbm_x2').val() || undefined,
		y2: $('#sbm_y2').val() || undefined,
		speed: speed,
		speedZoomed: speed,
		ajxTo: speed,
		motion: $('#sbm_motion').val(),
		motionZoomed: $('#sbm_motion').val(),
		zoomLevel: $('#sbm_zoomLevel').val() || false
	});
}

// create crop thumbnails on-the-fly
function createThumbnail(){
	if (!$.axZm || cropLoading){return;}
	
	// Get values
	var getCropValues = $.fn.axZm.getCropValues()[1];
	
	// Generate a string for thumb
	var dynThumbPar = $.fn.axZm.installPath() + 'zoomLoad.php?azImg=' + $.axZm.zoomGA[$.axZm.zoomID]['ph'] + $.axZm.zoomGA[$.axZm.zoomID]['img'];
	dynThumbPar += '&x1='+getCropValues[0];
	dynThumbPar += '&y1='+getCropValues[1];
	dynThumbPar += '&x2='+getCropValues[2];
	dynThumbPar += '&y2='+getCropValues[3];
	dynThumbPar += '&width=100';
	dynThumbPar += '&height=100';
	
	// Set cropping status
	cropLoading = true;
	
	// Preload image
	$('<img>')
	.load(function(){
		cropLoading = false;
		
		// Prepend thumb to a div
		$('<img>').attr('src', dynThumbPar)
		.addClass('cropImage')
		// on thumb click zoom to this area
		.bind('click', function(){
			var speed = $('#sbm_speed').val(); if (speed >= 0 ){speed = parseInt(speed);}else{speed = 1000;}
			$.fn.axZm.zoomTo({
				x1: getCropValues[0],
				y1: getCropValues[1],
				x2: getCropValues[2],
				y2: getCropValues[3],
				speed: speed,
				speedZoomed: speed,
				ajxTo: speed,
				motion: $('#sbm_motion').val(),
				motionZoomed: $('#sbm_motion').val()
			});
		})
		.prependTo('#zoomedThumbnails')
		
		// Remove all thumbs except first 8 (this is just for the test)
		$('#zoomedThumbnails>img').slice(8).remove();
	})
	.error(function(){
		cropLoading = false;
		alert('Making crop failed');
	})
	.attr('src', dynThumbPar);
}
			");
			echo "</pre>";	
			?>
		</div>
		
		<!-- Docs -->
		<div style="clear: both;">
			<h3>jQuery.fn.axZm.zoomTo (options)</h3>
			<table class="optionsTable" width="100%">
				<tbody>
					<tr><th width="100" class='opth3'>Option</th><th class='opth3'>Type</th><th class='opth3'>Description</th></tr>
					<tr><td class='optdl'>x1</td><td class='optdm'>int|string</td><td class='optdr'>
						Top-left x coordinate as integer or percentage, e.g. '40%' as string; <br>
						You should provide y1 coordinate too;<br>
						If you do not provide x2 and y2 coordinates AJAX-ZOOM will take x1 and y1 coordinates as the middle point to where it should zoom 
						which is very conveninent in some cases. <br>
						The level of zoom is supplied by zoomLevel option, see below. 
					</td></tr>
					<tr><td class='optdl'>y1</td><td class='optdm'>int|string</td><td class='optdr'>Top-left y coordinate as integer or percentage, e.g. '40%' as string</td></tr>
					<tr><td class='optdl'>x2</td><td class='optdm'>int|string</td><td class='optdr'>
						Bottom-right x coordinate as integer or persentage e.g. '60%' as string; <br> 
						If you provide x2 coordinates you have to provide y2 coordinates too;<br> 
						So by providing x1, y1, x2 and y2 you specify a rectangle for zoomTo; <br> 
						It is ok when the proportion of these rectangle does not math the proportions of the player / viewing area 
						which would happen for responsive AJAX-ZOOM implementation anyway.<br> 
					</td></tr>
					<tr><td class='optdl'>y1</td><td class='optdm'>int|string</td><td class='optdr'>Bottom-right y coordinate as integer or percentage, e.g. '60%' as string</td></tr>
					
					<tr><td class='optdl'>zoomLevel</td><td class='optdm'>float</td><td class='optdr'>
						Desired zoom level (percent) if only x1 and y1 coordinates are proveded, e.g. 50; 
						100 is zoom at max. 
					</td></tr>
					<tr><td class='optdl'>motion</td><td class='optdm'>string</td><td class='optdr'>
						Type of easing used when initially the image is not zoomed.
					</td></tr>
					<tr><td class='optdl'>motionZoomed</td><td class='optdm'>string</td><td class='optdr'>
						Type of easing if the image is already zoomed. 
					</td></tr>
					<tr><td class='optdl'>speed</td><td class='optdm'>int</td><td class='optdr'>
						Speed in ms of transition if image is not zoomed. 
					</td></tr>
					<tr><td class='optdl'>speedZoomed</td><td class='optdm'>int</td><td class='optdr'>
						Speed in ms of transition if image is zoomed. 
					</td></tr>
					<tr><td class='optdl'>initial</td><td class='optdm'>bool</td><td class='optdr'>
						If set to true, all coordinates will be regarded as coordinates of the not zoomed state 
						of AJAX-ZOOM player. Default: false
					</td></tr>
					<tr><td class='optdl'>ajxTo</td><td class='optdm'>int</td><td class='optdr'>
						Time after which the zoom should get sharp (load tiles) Default: 1000
					</td></tr>
					<tr><td class='optdl'>callback</td><td class='optdm'>function</td><td class='optdr'>
						You custom callback function.
					</td></tr>
				</tbody>
			</table>
		</div>

		<?php
		include ('footer.php');
		?>
</div>
 


<script type="text/javascript">
	var ajaxZoom = {}; // New object
	ajaxZoom.divID = 'azParentContainer'; // The id of the Div where ajax-zoom has to be inserted into		
	ajaxZoom.path = '../axZm/'; // Path to the axZm folder
	ajaxZoom.parameter = 'zoomData=/pic/zoom/high_res/high_res_001.jpg&example=testZoomTo'; // Custom parameter
	ajaxZoom.opt = {
		onBeforeStart: function(){
			$.axZm.mapParent = 'azMapParent';
			$.axZm.mapBorder = {top: 1, right: 1, bottom: 1, left: 1}
		},
		onLoad: function(){
			//jQuery.fn.axZm.zoomTo({x1: 2584, y1: 1650, x2: 3424, y2: 2210, motion: 'easeOutBack', motionZoomed: 'easeOutQuad', speed: 1500, speedZoomed: 1000});
		}
	};
	
	// Load AJAX-ZOOM
	$.fn.axZm.load({
	    opt: ajaxZoom.opt,
	    path: ajaxZoom.path,
	    parameter: ajaxZoom.parameter,
		divID: ajaxZoom.divID
	});
</script>

</body>
</html>