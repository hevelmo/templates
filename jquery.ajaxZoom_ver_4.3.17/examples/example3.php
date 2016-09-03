<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Lightbox AJAX-ZOOM jQuery image zoomer with deep zoom / 360 spin tool zoom</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Lightbox AJAX-ZOOM jQuery image zoomer with deep zoom / 360 spin tool zoom"/>
<meta property="og:description" content="Open AJAX-ZOOM player in a lightbox (Colorbox and Fancybox) from a simple link as Ajax invoked content. 360 degree product spins can be opened as well. "/>
<meta name="description" content="Open AJAX-ZOOM player in a lightbox (Colorbox and Fancybox) from a simple link as Ajax invoked content. 360 degree product spins can be opened as well. " />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_3.jpg"/> 


<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
}  
?>

<!-- jQuery core, needed for the lightboxes! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core, needed! -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!--  Fancybox lightbox javascript, only needed if used, please note: it has been slightly modified for AJAX-ZOOM -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.pack.js"></script>

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

<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
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

<script type="text/javascript">
jQuery(document).ready(function() {

	// Bind Colorbox to all elements with class ajaxExampleColorbox
	jQuery(".ajaxExampleColorbox").colorbox({
		initialWidth: 300,
		initialHeight: 300,
		scrolling: false,
		scrollbars: false,
		preloading: false,
		opacity: 0.95,
		// this option has been added by ajax-zoom to enforce loading href as url and not image
		ajax: true, 
		onClosed: function(){
			jQuery.fn.axZm.spinStop();
		},
		onComplete: function(){
			// Trigger AJAX-ZOOM after loading
			jQuery.fn.axZm(); 
		}
	});

	// Bind Fancybox to all elements with class ajaxExampleFancybox
	jQuery(".ajaxExampleFancybox").fancybox({
		padding				: 0,
		overlayShow			: true,
		overlayOpacity		: 0.9,
		zoomSpeedIn			: 0,
		zoomSpeedOut		: 100,
		easingIn			: "swing",
		easingOut			: "swing",
		hideOnContentClick	: false,
		centerOnScroll		: false,
		onComplete : function(){
			jQuery.fn.axZm(); // Important callback after loading
		},
		onClosed : function(){
			jQuery.fn.axZm.spinStop();
		},
		// fancybox ver.2.x options in case fancybox 2.x is used
		type: "ajax", // 
		afterLoad: function(a){ //
			// Need to trigger delayed
			setTimeout(function(){jQuery.fn.axZm();}, 1)
		},
		beforeClose: function(){
			jQuery.fn.axZm.spinStop();
		}
	});	
	
});
</script>

</head>
<body>

<?php
// This is not needed!!!
include ('navi.php');
?>

<div style="width: 800px; margin: 0px auto; overflow-x: hidden;">
	<div style="float: left;" class="azOuterLayoutBack"> 
	
		<h2>AJAX-ZOOM "Lightbox" <br>examples with AJAX content</h2>
		
		<p style="width: 420px;">Press on the buttons below to open various 
		AJAX-ZOOM configurations in a lightbox as AJAX loaded content:
		</p>
		
		<!-- Folders  -->
		<h3>Load all images from a directory with "zoomDir"</h3>
		
		<div class="clearfix">
			<div style='float: left; clear: both; width: 140px;'>
				<h4>Fancybox</h4>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=/pic/zoom/estate&example=4'>Example 1</a><br>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=/pic/zoom/animals&zoomID=4&example=5'>Example 2</a><br>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=/pic/zoom/trasportation&example=6'>Example 3</a><br>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=high_res&zoomID=3&example=5'>Example 4</a><br>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=world&zoomID=16&example=7'>Example 5</a><br>
			</div>
			
			<div style='float: left; width: 140px;'>
				<h4>Colorbox</h4>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=/pic/zoom/estate&example=4'>Example 1</a><br>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=/pic/zoom/animals&zoomID=4&example=5'>Example 2</a><br>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=/pic/zoom/trasportation&example=6'>Example 3</a><br>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=high_res&zoomID=3&example=5'>Example 4</a><br>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&zoomDir=world&zoomID=16&example=7'>Example 5</a><br>
			</div>
			
			<div style='float: left; width: 150px;'>
				<h4>Responsive Fancybox</h4>
				See <a href="example27.php">example27.php</a>
			</div>
		</div>
		
		
		<!-- Specified images  -->
		<h3 style="clear: both;">Load specified images with "zoomData"</h3>
		
		<div class="clearfix">
			<div style='float: left; clear: both; width: 140px;'>
				<h4>Fancybox</h4>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=4&zoomData=/pic/zoom/animals/animals_011.jpg|/pic/zoom/animals/animals_012.jpg|/pic/zoom/animals/animals_015.jpg'>Example 6</a><br>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=7&zoomData=/pic/zoom/animals/animals_011.jpg|/pic/zoom/animals/animals_012.jpg|/pic/zoom/animals/animals_015.jpg'>Example 7</a><br>
			</div>		

			<div style='float: left; width: 140px;'>
				<h4>Colorbox</h4>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=4&zoomData=/pic/zoom/animals/animals_011.jpg|/pic/zoom/animals/animals_012.jpg|/pic/zoom/animals/animals_015.jpg'>Example 6</a><br>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=7&zoomData=/pic/zoom/animals/animals_011.jpg|/pic/zoom/animals/animals_012.jpg|/pic/zoom/animals/animals_015.jpg'>Example 7</a><br>
			</div>
			
			<div style='float: left; width: 150px;'>
				<h4>Responsive Fancybox</h4>
				See <a href="example27.php">example27.php</a>
			</div>
				
		</div>
		
		<!-- 360 / 3D  -->
		<h3 style="clear: both;">Load 360 / 3D images with "3dDir"</h3>
		
		<div class="clearfix">
			<div style='float: left; clear: both; width: 140px;'>
				<h4>Fancybox</h4>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=17&3dDir=/pic/zoom3d/Uvex_Occhiali'>360 Example</a><br>
				<a class='azDemoButton ajaxExampleFancybox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=17&3dDir=/pic/zoomVR/nike'>3D Example</a><br>
			</div>		

			<div style='float: left; width: 140px;'>
				<h4>Colorbox</h4>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=17&3dDir=/pic/zoom3d/Uvex_Occhiali'>360 Example</a><br>
				<a class='azDemoButton ajaxExampleColorbox' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=17&3dDir=/pic/zoomVR/nike'>3D Example</a><br>
			</div>
			
			<div style='float: left; width: 150px;'>
				<h4>Responsive Fancybox</h4>
				See <a href="example27.php">example27.php</a>
			</div>
			
 		</div>
		
		<h3>Load specified images with zoomData and play with descriptions</h3>
		<p style="margin-top: 0;">For this type of descriptions some additional JS code is passed over AJAX-ZOOM callbacks. 
		The code creates an empty div element in the "onLoad" AJAX-ZOOM callback and appends it after the player. 
		Title and descriptions are defined in a separate JS object for each image and appended to the created 
		div element over "onImageChange" AJAX-ZOOM callback which is triggered whenever the image changes. 
		All the AJAX-ZOOM callbacks are passed to AJAX-ZOOM when it is initialized with jQuery.fn.axZm(); 
		you will find the code commented in the source of this file right after the buttons below.
		</p><p>For custom description handling see also <a href="example25.php">example25.php</a></p>
		
		<div class="clearfix">
			<div style='float: left; clear: both; width: 140px;'>
				<h4>Fancybox</h4>
				Todo
			</div>
			
			<div style='float: left; width: 140px;'>
				<h4>Colorbox</h4>
				<a class='azDemoButton ajaxExampleColorboxDesc' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=4&zoomData=/pic/zoom/animals/animals_011.jpg|/pic/zoom/animals/animals_012.jpg|/pic/zoom/animals/animals_015.jpg'>Example 8</a><br>
				<a class='azDemoButton ajaxExampleColorboxDesc' href='../axZm/zoomLoad.php?zoomLoadAjax=1&example=7&zoomData=/pic/zoom/animals/animals_011.jpg|/pic/zoom/animals/animals_012.jpg|/pic/zoom/animals/animals_015.jpg'>Example 9</a><br>
			</div>
			
			<div style='float: left; width: 150px;'>
				<h4>Responsive Fancybox</h4>
				Todo
			</div>
			
 			<!-- This additional JS is only needed for ajaxExampleColorboxDesc where we append descriptions to the lightbox after the player-->	
			<script type="text/javascript">
				// JS objects to store descriptions and titles
				var testTitle = {}; // Object with titles
				var testDescr = {}; // Object with longer descriptions
				var thumbTitle = {}; // Object with thumb descriptions
				
				testTitle["animals_011.jpg"] = "Description animals 1";
				testDescr["animals_011.jpg"] = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
				thumbTitle["animals_011.jpg"] = "animals 1";

				testTitle["animals_012.jpg"] = "Description animals 2";
				testDescr["animals_012.jpg"] = "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
				thumbTitle["animals_012.jpg"] = "animals 2";

				testTitle["animals_015.jpg"] = "Description animals 3";
				testDescr["animals_015.jpg"] = "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.";
				thumbTitle["animals_015.jpg"] = "animals 3";
				
				// Simple function to put descriptions in a div with fade effect
				var ajaxZoomAnimateDescr = function(title, descr){
					jQuery("#testTitleDiv").fadeTo(300,0, function(){
						jQuery(this).empty().html(title).fadeTo(300,1);
					});
				
					jQuery("#testDescrDiv").fadeTo(300,0, function(){
						jQuery(this).empty().html(descr).fadeTo(300,1);
					});
					
					setTimeout(function(){jQuery.colorbox.resize();},500);
				};
				
				// Callbacks to pass to jQuery.fn.axZm() function
				var ajaxZoomCallbacks = {
					onLoad: function(){
						// Container for external title and description
						var testTitleDescrContainer = jQuery('<DIV />').css({
							clear: 'both', 
							padding: '5px 10px 10px 10px',
							backgroundColor: '#1D1D1A'
						});
						
						// Title div
						jQuery('<DIV />').attr('id', 'testTitleDiv').css({
							minHeight: 30,
							fontSize: '16pt',
							color: '#D3D3D3'
						}).appendTo(testTitleDescrContainer);
						
						// Description div
						jQuery('<DIV />').attr('id', 'testDescrDiv').css({
							minHeight: 40,
							fontSize: '10pt',
							color: '#FFFFFF'
						}).appendTo(testTitleDescrContainer);				
						
						// Margin div
						jQuery('<DIV />').css({
							minHeight: 10,
							clear: 'both'
						}).appendTo('#axZm_zoomAll');				
						
						// Append everything above after the player, could also be inside...
						testTitleDescrContainer.insertAfter('#axZm_zoomAll');

						// Resize the colorbox
						jQuery.colorbox.resize();
						
						// Current image name
						var getImgName = jQuery.axZm.zoomGA[jQuery.axZm.zoomID]["img"];
						
						// Set descriptions and title
						ajaxZoomAnimateDescr(testTitle[getImgName], testDescr[getImgName]);
					
						// Titles of the thumbs
						jQuery.each(thumbTitle, function (fName, descr, download){
							jQuery.fn.axZm.setDescr(fName, testTitle[fName], descr, download);
						});
					}, 
					onImageChange: function(info){
						// Current image name
						var getImgName = jQuery.axZm.zoomGA[jQuery.axZm.zoomID]["img"];
						
						// Set descriptions and title
						ajaxZoomAnimateDescr(testTitle[getImgName], testDescr[getImgName]);
					}
				};

				// Colorbox example
				jQuery(".ajaxExampleColorboxDesc").colorbox({
					initialWidth: 300,
					initialHeight: 300,
					scrolling: false,
					scrollbars: false,
					preloading: false,
					opacity: 0.95,
					ajax: true, // this option has been added by ajax-zoom to enforce loading href as url and not image
					onComplete: function(){
						// Trigger AJAX-ZOOM after loading
						jQuery.fn.axZm(ajaxZoomCallbacks); 
					}
				});
				
			</script>

		</div>

 

		<h3>About</h3>
 
		<div style='clear: both;'>
			<p style="margin-top: 0;">This example demonstrates how to open multiple zoom galleries with some lightbox clones (please click on the links above). 
			The content is loaded via Ajax requests. 
			This solution does not work "cross domain". 
			</p>
			
			<p>Please note, that not all lightbox clones fully support ajax content.
			</p> 
			
			<p>When you have jpg or png in href of the link, which is the case when using zoomData and passing image paths directly without any encoding, 
			most lightboxes consider it as a direct link to the image file and do not trigger the request to the url via ajax. 
			<span style="text-decoration:underline">The here used and in the download package included lightboxes (Fancybox & Colorbox) have been slightly modified to load the url and not 
			"mistakenly" consider it to be an image...</span>
			</p>
		</div>
		
		<h3>JavaScript & CSS files in Head</h3>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
				echo "<pre class='brush: html; js; '>";
				echo htmlspecialchars ('
<!-- jQuery core, needed for the lightboxes! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core, needed! -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!--  Fancybox lightbox javascript, only needed if used, please note: it has been slightly modified for AJAX-ZOOM -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/jquery.fancybox/jquery.fancybox-1.3.4.pack.js"></script>

<!-- Colorbox plugin, only needed if used -->
<link rel="stylesheet" href="../axZm/plugins/demo/colorbox/example1/colorbox.css" media="screen" type="text/css">
<script type="text/javascript" src="../axZm/plugins/demo/colorbox/jquery.colorbox-min.js"></script>
			');
			echo "</pre>";	
			?>
		</div>
		
		<h3>JavaScript: bind either colorbox and/or fancybox to elements with certain classes</h3>
		<p>Please notice that jQuery.fn.axZm(); needs to be triggered in onComplete callbacks 
		(when AJAX request is finisched)
		</p>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
			echo "<pre class='brush: js; '>";
			echo htmlspecialchars ('
// Bind Colorbox to all elements with class ajaxExampleColorbox
jQuery(document).ready(function() {
	jQuery(".ajaxExampleColorbox").colorbox({
		initialWidth: 300,
		initialHeight: 300,
		scrolling: false,
		scrollbars: false,
		preloading: false,
		opacity: 0.95,
		// this option has been added by ajax-zoom to enforce loading href as url and not image
		ajax: true, 
		onClosed: function(){
			jQuery.fn.axZm.spinStop();
		},
		onComplete: function(){
			// Trigger AJAX-ZOOM after loading
			jQuery.fn.axZm(); 
		}
	});

	// Bind Fancybox to all elements with class ajaxExampleFancybox
	jQuery(".ajaxExampleFancybox").fancybox({
		padding: 0,
		overlayShow: true,
		overlayOpacity: 0.9,
		zoomSpeedIn: 0,
		zoomSpeedOut: 100,
		easingIn: "swing",
		easingOut: "swing",
		hideOnContentClick: false,
		centerOnScroll: false,
		onComplete : function(){
			jQuery.fn.axZm(); // Important callback after loading
		},
		onClosed : function(){
			jQuery.fn.axZm.spinStop();
		},
		// fancybox ver.2.x options in case fancybox 2.x is used
		type: "ajax", // 
		afterLoad: function(a){ //
			// Need to trigger delayed
			setTimeout(function(){jQuery.fn.axZm();}, 1)
		},
		beforeClose: function(){
			jQuery.fn.axZm.spinStop();
		}
	});	
});	
			');
			echo "</pre>";	
		?>
		</div>	
		
		<h3>Example links</h3>
		<p style="margin-top: 0">For variations please see the source of this file... 
		As you can see the only difference is the class of the elment because we bind either fancybox or colorbox 
		to all elemets with a certain class. In your scripts you can use onclick attribute on bind click event 
		e.g. like this $(selector).fancybox(same code)
		</p>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
			<?php
				echo "<pre class='brush: html; js; '>";
				echo htmlspecialchars ('
// Fancybox
<a class="ajaxExampleFancybox" href="../axZm/zoomLoad.php?zoomLoadAjax=1&example=4&zoomData=/pic/zoom/animals/animals_011.jpg|/pic/zoom/animals/animals_012.jpg|/pic/zoom/animals/animals_015.jpg">Example 6</a><br>

// Colorbox
<a class="ajaxExampleColorbox" href="../axZm/zoomLoad.php?zoomLoadAjax=1&example=4&zoomData=/pic/zoom/animals/animals_011.jpg|/pic/zoom/animals/animals_012.jpg|/pic/zoom/animals/animals_015.jpg">Example 6</a><br>
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

</body>
</html>