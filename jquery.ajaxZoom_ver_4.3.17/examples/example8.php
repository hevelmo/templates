<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Responsive ready AJAX-ZOOM external thumbs gallery</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="Responsive ready AJAX-ZOOM external thumbs gallery"/>
<meta property="og:description" content="Show thumbs gallery and display high resolution images with jQuery AJAX-ZOOM player."/>
<meta name="description" content="Show thumbs gallery and display high resolution images with jQuery AJAX-ZOOM player." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_8.jpg"/> 

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
	body {margin: 0; padding: 0; height: 100%;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	
	.p{text-align: justify; text-justify: newspaper;}
	
	
	/* Override some default styles for the demo */
	.axZm_zoomLogHolder{
		width: 50px;
		height: 35px;
	}
	
	.axZm_zoomLogJustLevel{
		width: 45px;
		color: #444444;
		font-size: 13pt; 
		font-family: Tahoma, Arial;
		margin: 10px 0px 0px 3px;
	}
	
</style>

</head>
<body>

<?php
// This is only for the demo, you can remove it
include ('navi.php');
?>

<div style='width: 800px; margin: 0px auto;'>
	
		<h2>AJAX-ZOOM - embedded implementation with custom gallery next to the player. 
		Get all images from a folder with "zoomDir". 
		Responsive ready.</h2>
		
		<div class="clearfix">
			<table cellspacing="0" cellpadding="0" width="100%">
				<tr>
					<td>
			
						<!-- Demo -->
						<div>
							<h3>Try some options</h3>
							
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
							         <td> 
									    Thumbs per page: 
									    <select name="thumbsPerPage" autocomplete="off"  onchange="setOpt('thumbsPerPage')">
			        						<option value="null" selected>All</option>
			        						<option value="1">1</option>
			        						<option value="2">2</option>
			        						<option value="3">3</option>
			        						<option value="4">4</option>
			        						<option value="5">5</option>
			        						<option value="6">6</option>
			        						<option value="8">8</option>
			        						<option value="10">10</option>
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
							    <tr>
							         <td> 
									    Display folders: 
									    <select name="folderSelect" autocomplete="off"  onchange="setOpt('folderSelect')">
			        						<option value="imgFolders">With images</option>
			        						<option value="folders">Only folder icons</option>
			        						<option value="select" selected>Select form element</option>
			        						<option value="false">disabled</option>
									    </select>	                	 
							         </td>
							    </tr>
							    
						    
						    </table>

						</div>
					</td>
					
					<td style="width: 430px;">
						<p>Ver. 4.2.1+ This example has been totally rewritten. It does not contain required PHP code within the actual page any more. 
						Also all JavaScript has been wrapped into one plugin ($.axZm.thumbGallery) which is controllable 
						over various options passed to it. 
						</p>
						
						<p>The plugin generates a select form element or some other html to display the subfolders. 
						When changed / clicked on the folder thumbnailed images are instantly generated and displayed in a responsive way. 
						Clicking on a thumb switches the image in AJAX-ZOOM player which is displayed next to the external gallery.
						</p>
					</td>
				</tr>
			
			</table>



			<div class="clearfix">
				<!-- Container where AJAX-ZOOM will be loaded into -->
				<div id="zoomInlineContent" style="float: left; width: 325px; min-height: 400px;"></div>
				
				<!-- Container where folders navigation will be loaded into -->
				<div id="selectParentContainer" style="width: 430px; float: right; margin-bottom: 10px;"></div>
				
				<!-- Container where thumbs will be loaded into -->
				<div id="thumbsParentContainer" style="width: 430px; float: right;"></div>
			</div>
			
			
			<p style="clear: both; padding-top: 30px;">To achieve simmilar result one could also use AJAX-ZOOM native API (without $.axZm.thumbGallery plugin).
			Most important API functions for this are: 
			<a href="http://www.ajax-zoom.com/index.php?cid=docs#api_zoomSwitch">$.fn.axZm.zoomSwitch</a> and 
			<a href="http://www.ajax-zoom.com/index.php?cid=docs#api_loadAjaxSet">$.fn.axZm.loadAjaxSet</a>; 
			$.axZm.thumbGallery is commented and could be edited by interesting programmers. 
			The plugin is used in several other examples you might want to take a look at<sup><a href="#o_sup_1">1</a></sup>.
			</p>

			
			<!-- Fire azThumbGallery, that's it -->
			<script type="text/javascript">
				jQuery.azThumbGallery({
					axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
					zoomDir: "/pic/zoom", // Path to subfolders with images
					firstFolder: "fashion", // After page loads select from which subfolder thumbnails should be loaded, integer or string
					folderSelect: "select", // Possible values: "select", "folders", "imgFolders"
					axZmCallBacks: {}, // AJAX-ZOOM has several callbacks
					fullScreenApi: false, // Try to open AJAX-ZOOM at browsers fullscreen mode
					thumbsCache: true, // Cache thumbnails
					thumbWidth: 70, // Width of the thumbnail image
					thumbHeight: 70, // Height of the thumbnail image
					thumbQual: 90, // jpg quality of the thumbnail image
					thumbPadding: 5, // Padding 
					thumbMarginRight: 5, // Margin right
					thumbMarginBottom: 5, // Margin bottom
					thumbsPerPage: null, // Show this number of thumbnails at once
					thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to
					selectContainer: "selectParentContainer", // ID of the element where the select with subfolders will be appended to
					
					embedMode: true, // Display AJAX-ZOOM next to the thumbs
					embedResponsive: false, // if "embedDivID" is responsive, set it to true
					embedExample: 9, // Configuration set which is passed to AJAX-ZOOM when "embedMode" is enabled
					embedDivID: "zoomInlineContent", // ID of the element (placeholder) where AJAX-ZOOM has to be inserted into 
					embedZoomSwitchAnm: "SwipeHorz", // Possible values: "Center", "Top", "Right", "Bottom", "Left", "StretchVert", "StretchHorz", "SwipeHorz", "SwipeVert", "Vert", "Horz" 
					embedZoomSwitchSpeed: 300
				});
			</script>
			
		</div>
		

		
		<!-- Code head -->
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
		');
		echo "</pre>";	
		?>
		</div>
		
		<!-- Code body -->
		<h3>HTML makup in body</h3>
		<p>All containers can be responsive! If the container where AJAX-ZOOM will be loaded into is responsive, 
		then set "embedResponsive" option below to true.
		</p>
		<div style="clear:both; margin: 5px 0px 5px 0px;">
		<?php
			echo "<pre class='brush: html; js; '>";
			echo htmlspecialchars ('
	<div>
		<!-- Container where AJAX-ZOOM will be loaded into -->
		<div id="zoomInlineContent" style="float: left; width: 325px; min-height: 400px;"></div>
		
		<!-- Container where folders navigation will be loaded into -->
		<div id="selectParentContainer" style="width: 430px; float: right; margin-bottom: 10px;"></div>
		
		<!-- Container where thumbs will be loaded into -->
		<div id="thumbsParentContainer" style="width: 430px; float: right;"></div>
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
	jQuery.azThumbGallery({
		axZmPath: "auto", // Path to /axZm directory, e.g. /test/axZm/
		zoomDir: "/pic/zoom", // Path to subfolders with images
		firstFolder: "fashion", // After page loads select from which subfolder thumbnails should be loaded, integer or string
		folderSelect: "select", // Possible values: "select", "folders", "imgFolders"
		axZmCallBacks: {}, // AJAX-ZOOM has several callbacks
		fullScreenApi: false, // Try to open AJAX-ZOOM at browsers fullscreen mode
		thumbsCache: true, // Cache thumbnails
		thumbWidth: 70, // Width of the thumbnail image
		thumbHeight: 70, // Height of the thumbnail image
		thumbQual: 90, // jpg quality of the thumbnail image
		thumbPadding: 5, // Padding 
		thumbMarginRight: 5, // Margin right
		thumbMarginBottom: 5, // Margin bottom
		thumbsPerPage: null, // Show this number of thumbnails at once
		thumbsContainer: "thumbsParentContainer", // ID of the element where thumbnails appended to
		selectContainer: "selectParentContainer", // ID of the element where the select with subfolders will be appended to
		
		embedMode: true, // Display AJAX-ZOOM next to the thumbs
		embedResponsive: false, // if "embedDivID" is responsive, set it to true
		embedExample: 9, // Configuration set which is passed to AJAX-ZOOM when "embedMode" is enabled
		embedDivID: "zoomInlineContent", // ID of the element (placeholder) where AJAX-ZOOM has to be inserted into 
		embedZoomSwitchAnm: "SwipeHorz", // Possible values: "Center", "Top", "Right", "Bottom", "Left", "StretchVert", "StretchHorz", "SwipeHorz", "SwipeVert", "Vert", "Horz" 
		embedZoomSwitchSpeed: 300
	});
			');
			echo "</pre>";		
			?>
			
		</div>
		
		<!-- Docu -->
		<h3>$.azThumbGallery - documentation (options)</h3>
		<div>
			<?php include (dirname(__FILE__).'/extensions_doc/docu_thumbGallery.inc.html');?>
		</div>

		<?php
		// This is only for the demo, you can remove it
		include ('footer.php');
		?>
</div>

</body>
</html>