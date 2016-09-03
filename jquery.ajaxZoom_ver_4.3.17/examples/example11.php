<!doctype html>
<html>
<head>
<title>Online image viewer with zoom</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Online image viewer with zoom"/>
<meta property="og:description" content="Online image viewer with zoom. HTML5 + PHP"/>
<meta name="description" content="Online image viewer with zoom. HTML5 + PHP" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_11.jpg"/>
 
<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>


<!-- jQuery core -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM -->
<link rel="stylesheet" href="../axZm/axZm.css" type="text/css" media="screen">
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

<!-- AJAX-ZOOM gallery extension -->
<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.thumbGallery.css" type="text/css">
<script type="text/javascript" src="../axZm/extensions/jquery.axZm.thumbGallery.js"></script>

<!-- jQuery splitter plugin for changing the size of the "windows" -->
<link rel="stylesheet" href="../axZm/plugins/demo/jquery.splitter/css/jquery.splitter.css" />
<script type="text/javascript" src="../axZm/plugins/demo/jquery.splitter/js/jquery.splitter-0.14.0.js"></script>

<!-- This code block (syntaxhighlighter) is not needed! Pleae remove it from your application! -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>


<style type="text/css"> 
	body {padding: 0; margin: 0; height: 100%}
	html {font-family: Tahoma, Arial; font-size: 10pt; height: 100%; margin: 0; padding: 0; border: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}

	/* CSS for layout */
	#splitLayoutParent{position: absolute; width: 100%; top: 58px; bottom: 0;}
	#zoomInlineContent{position: absolute; width: 50%; height: 100%; overflow: hidden; z-index: 1;}
	#rightHalf{position: absolute; width: 50%; height: 100%; right: 0; background-color: #EEE; z-index: 1; overflow-x: hidden;}
	#rightFoldersParent{position: absolute; height: 180px; top: 0; overflow-x: hidden; overflow-y: auto;}
	#rightThumbsParent{position: absolute; bottom: 0; overflow-x: hidden; overflow-y: auto;}
</style>

</head>
<body>

<?php
include ('navi.php');
?>

<div id="splitLayoutParent">
	<!-- This is where AJAX-ZOOM will be inserted into -->
	<div id="zoomInlineContent"></div>
	
	<!-- Parent container for folders and thumbs -->
	<div id="rightHalf">

		<div id="rightFoldersParent">
			<!-- This is where folders or select element will be inserted into -->
			<div id="selectParentContainer" style="padding: 10px;"></div>
		</div>
		
		<div id="rightThumbsParent">
			<!-- This is where thumbnails will be inserted into -->
			<div id="thumbsParentContainer" style="padding: 10px;"></div>
			
			
			<!-- Below is not needed, this is just some content -->
			<div style="padding: 10px; clear: both; overflow-x: hidden;">
				
				<h3>About</h3>
				Ver. 4.2.1+ This example has been replaced with a different one because the old example simply got obsolete. 
				The new $.azThumbGallery extension is integrated into responsive layout 
				and it does not require any PHP code within the actual page. 
				A slightly modified and optional third party $.split plugin has been added allowing users to change 
				the predefined size of the "windows". 
				
				<!-- Code head -->
				<h3>JavaScript & CSS files in Head</h3>
				<div style="clear:both; margin: 5px 0px 5px 0px;">
					<?php
					echo "<pre class='brush: html; js; '>";
					echo htmlspecialchars ('
						<!-- jQuery core -->
						<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

						<!-- AJAX-ZOOM -->
						<link rel="stylesheet" href="../axZm/axZm.css" type="text/css" media="screen">
						<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

						<!-- AJAX-ZOOM gallery extension -->
						<link rel="stylesheet" href="../axZm/extensions/jquery.axZm.thumbGallery.css" type="text/css">
						<script type="text/javascript" src="../axZm/extensions/jquery.axZm.thumbGallery.js"></script>

						<!-- jQuery splitter plugin for changing the size of the "windows" -->
						<link rel="stylesheet" href="../axZm/plugins/demo/jquery.splitter/css/jquery.splitter.css" />
						<script type="text/javascript" src="../axZm/plugins/demo/jquery.splitter/js/jquery.splitter-0.14.0.js"></script>
					');
					echo "</pre>";	
				?>
				</div>
				
				<h3>CSS in Head (can be put into a css file)</h3>
				<div style="clear:both; margin: 5px 0px 5px 0px;">
					<?php
					echo "<pre class='brush: css; '>";
					echo htmlspecialchars ('
						body {padding: 0; margin: 0; height: 100%}
						html {font-family: Tahoma, Arial; font-size: 10pt; height: 100%}
						
						/* Override some of AJAX-ZOOM css */
						#zoomNavigation{background: none repeat scroll 0 0 #eee;}
						#zoomLevel{color: #3D3D3D}

						/* CSS for layout */
						#splitLayoutParent{position: absolute; width: 100%; top: 58px; bottom: 0;}
						#zoomInlineContent{position: absolute; width: 50%; height: 100%; overflow: hidden; z-index: 1;}
						#rightHalf{position: absolute; width: 50%; height: 100%; right: 0; background-color: #EEE; z-index: 1; overflow-x: hidden;}
						#rightFoldersParent{position: absolute; height: 180px; top: 0; overflow-x: hidden; overflow-y: auto;}
						#rightThumbsParent{position: absolute; bottom: 0; overflow-x: hidden; overflow-y: auto;}
					');
					echo "</pre>";	
				?>
				</div>
				
				<!-- Code body -->
				<h3>HTML makup in body</h3>
				<p>All containers are responsive in this example! Note that "embedResponsive" option below is set to true.
				</p>
				<div style="clear:both; margin: 5px 0px 5px 0px;">
				<?php
					echo "<pre class='brush: html; js; '>";
					echo htmlspecialchars ('
					<div id="splitLayoutParent">
						<!-- This is where AJAX-ZOOM will be inserted into -->
						<div id="zoomInlineContent"></div>
						
						<!-- Parent container for folders and thumbs -->
						<div id="rightHalf">

							<div id="rightFoldersParent">
								<!-- This is where folders or select element will be inserted into -->
								<div id="selectParentContainer" style="padding: 10px;"></div>
							</div>
							
							<div id="rightThumbsParent">
								<!-- This is where thumbnails will be inserted into -->
								<div id="thumbsParentContainer" style="padding: 10px;"></div>
							</div>
							
						</div>
					</div>
					');
					echo "</pre>";	
				?>
				</div>
				
				<!-- Code js -->
				<h3>JavaScript</h3>
				<div style="clear:both; margin: 5px 0px 5px 0px;">
				<?php
					echo "<pre class='brush: js; '>";
					echo htmlspecialchars ('
						jQuery(function($){
							// Get overall height of the right side
							var rightHalfHeight = $("#rightHalf").height(),
							
								// Height is initially set as px
								rightFoldersParentHeight = $("#rightFoldersParent").height(),
								
								// Height converted to %
								prcHeightFolders = Math.ceil(rightFoldersParentHeight / rightHalfHeight * 100);
							
							// Set height as %
							$("#rightFoldersParent").css("height", prcHeightFolders + "%");
							$("#rightThumbsParent").css("height", (100 - prcHeightFolders) + "%");
							
							// Splitter between folders and thumbnails
							$("#rightHalf").split({
								orientation: "horizontal", 
								limit: 120,
								position: prcHeightFolders + "%"
							});

							// Splitter between left and right side
							$("#splitLayoutParent").split({
								orientation: "vertical", 
								limit: 400,
								position: "50%",
								onDragStart: function(){
									$.fn.axZm.resizeStart(30000); 
								},
								onDragEnd: function(){
									$.fn.axZm.resizeStart(1); 
								}
							});
							
							// Init AJAX-ZOOM gallery extension
							$.azThumbGallery({
								axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
								zoomDir: "/pic/zoom", // Path to subfolders with images
								firstFolder: "boutique", // After page loads select from which subfolder thumbnails should be loaded, integer or string
								folderSelect: "folders", // Possible values: "select", "folders", "imgFolders"
								axZmCallBacks: {}, // AJAX-ZOOM has several callbacks
								fullScreenApi: false, // Try to open AJAX-ZOOM at browsers fullscreen mode
								thumbsCache: true, // Cache thumbnails
								thumbWidth: 110, // Width of the thumbnail image
								thumbHeight: 110, // Height of the thumbnail image
								thumbQual: 90, // jpg quality of the thumbnail image
								thumbPadding: 5, // Padding 
								thumbMarginRight: 5, // Margin right
								thumbMarginBottom: 18, // Margin bottom
								thumbsPerPage: null, // Show this number of thumbnails at once
								thumbDescr: ["fileName"], // Show filename under thumbs
								thumbDescrTruncate: 25, // Trancate filename string after 25 chars
								thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to
								selectContainer: "selectParentContainer", // ID of the element where the select with subfolders will be appended to
								
								embedMode: true, // Display AJAX-ZOOM next to the thumbs
								embedResponsive: true, // if "embedDivID" is responsive, set it to true
								embedExample: 9, // Configuration set which is passed to AJAX-ZOOM when "embedMode" is enabled
								embedDivID: "zoomInlineContent", // ID of the element (placeholder) where AJAX-ZOOM has to be inserted into 
								embedZoomSwitchAnm: "SwipeHorz", // Possible values: "Center", "Top", "Right", "Bottom", "Left", "StretchVert", "StretchHorz", "SwipeHorz", "SwipeVert", "Vert", "Horz" 
								embedZoomSwitchSpeed: 300
							});
						});
					');
					echo "</pre>";		
					?>
					
				</div>
			
			
				<h3>Documentation</h3>
				<?php include (dirname(__FILE__).'/extensions_doc/docu_thumbGallery.inc.html');?>
				
				<?php include('footer.php'); ?>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">

	jQuery(function($){
		// Get overall height of the right side
		var rightHalfHeight = $("#rightHalf").height(),
		
			// Height is initially set as px
			rightFoldersParentHeight = $("#rightFoldersParent").height(),
			
			// Height converted to %
			prcHeightFolders = Math.ceil(rightFoldersParentHeight / rightHalfHeight * 100);
		
		// Set height as %
		$("#rightFoldersParent").css("height", prcHeightFolders + "%");
		$("#rightThumbsParent").css("height", (100 - prcHeightFolders) + "%");
		
		// Splitter between folders and thumbnails
		$("#rightHalf").split({
			orientation: "horizontal", 
			limit: 120,
			position: prcHeightFolders + "%"
		});

		// Splitter between left and right side
		$("#splitLayoutParent").split({
			orientation: "vertical", 
			limit: 400,
			position: "50%",
			onDragStart: function(){
				$.fn.axZm.resizeStart(30000); 
			},
			onDragEnd: function(){
				$.fn.axZm.resizeStart(1); 
			}
		});
		
		// Init AJAX-ZOOM gallery extension
		$.azThumbGallery({
			axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
			zoomDir: "/pic/zoom", // Path to subfolders with images
			firstFolder: "boutique", // After page loads select from which subfolder thumbnails should be loaded, integer or string
			folderSelect: "folders", // Possible values: "select", "folders", "imgFolders"
			axZmCallBacks: {}, // AJAX-ZOOM has several callbacks
			fullScreenApi: false, // Try to open AJAX-ZOOM at browsers fullscreen mode
			thumbsCache: true, // Cache thumbnails
			thumbWidth: 110, // Width of the thumbnail image
			thumbHeight: 110, // Height of the thumbnail image
			thumbQual: 90, // jpg quality of the thumbnail image
			thumbPadding: 5, // Padding 
			thumbMarginRight: 5, // Margin right
			thumbMarginBottom: 18, // Margin bottom
			thumbsPerPage: null, // Show this number of thumbnails at once
			thumbDescr: ["fileName"], // Show filename under thumbs
			thumbDescrTruncate: 25, // Trancate filename string after 25 chars
			thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to
			selectContainer: "selectParentContainer", // ID of the element where the select with subfolders will be appended to
			
			embedMode: true, // Display AJAX-ZOOM next to the thumbs
			embedResponsive: true, // if "embedDivID" is responsive, set it to true
			embedExample: 9, // Configuration set which is passed to AJAX-ZOOM when "embedMode" is enabled
			embedDivID: "zoomInlineContent", // ID of the element (placeholder) where AJAX-ZOOM has to be inserted into 
			embedZoomSwitchAnm: "SwipeHorz", // Possible values: "Center", "Top", "Right", "Bottom", "Left", "StretchVert", "StretchHorz", "SwipeHorz", "SwipeVert", "Vert", "Horz" 
			embedZoomSwitchSpeed: 300
		});
	});

</script>


</body>
</html>