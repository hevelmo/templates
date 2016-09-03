<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM - embed with custom loader</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM - embed with custom loader"/>
<meta property="og:description" content="Embed AJAX-ZOOM zoom & pan player with JavaScript loader anywhere."/>
<meta name="description" content="Embed AJAX-ZOOM zoom & pan player with JavaScript loader anywhere" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_9.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>

<script type="text/javascript" src="../axZm/plugins/jquery-1.8.3.min.js"></script>

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
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
</style>
</head>
<body>
<?php
include ('navi.php');
?>

<div style='width: 900px; margin: 0px auto;'>
	<h2>AJAX-ZOOM - embed with custom loader - jquery.axZm.loader.js</h2>
	
	<div style='clear: both;'>
	
		<DIV id='test' style='float: right; width: 452px; height: 390px; margin: 0px 0px 15px 20px;'>
			Loading, please wait...
		</DIV>
		<script type="text/javascript">
			var ajaxZoom = {};
			ajaxZoom.path = '../axZm/'; // Path to the axZm folder
			ajaxZoom.parameter = 'zoomDir=furniture&example=11'; // Needed parameter
			ajaxZoom.divID = 'test'; // The id of the Div where ajax-zoom has to be inserted
			ajaxZoom.postMode  = true;
		</script>
		<script type="text/javascript" src="../axZm/jquery.axZm.loader.js"></script>

		<p>With this custom JS loader file neither jQuery core nor AJAX-ZOOM JS and CSS files are needed to be loaded 
		before triggering AJAX-ZOOM. jquery.axZm.loader.js loads everything in case it is needed on-the-fly. 
		It might be useful if you cannot edit or do not have access the header in your CMS. 
		</p>
		<p>Please note that if you need to place more than one instance of AJAX-ZOOM on the same page, then you will need to use 
		iframes which is also an alternative for quick integration, see <a href="example13.php">example13.php</a>
		</p>
		<!--googleoff: index-->
		<p style="color: #A3A3A3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
		</p>
		<p style="color: #A3A3A3">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
		</p>
		<p style="color: #A3A3A3">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. 
		</p>
		<p style="color: #A3A3A3">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
		</p>
		<!--googleon: index-->

		<h3>Embed AJAX-ZOOM with custom loader:</h3>
		
		<?php
		echo '<pre class="brush: js; html">';
		echo htmlspecialchars ('

<div id="test">This text will be replaced after AJAX-ZOOM is loaded</div>
<script type="text/javascript">
var ajaxZoom = {}; // New empty object
ajaxZoom.path = "../axZm/"; // Path to the axZm folder
ajaxZoom.parameter = "zoomDir=furniture&example=11"; // Your custom parameter
ajaxZoom.divID = "test"; // The ID of the div where ajax-zoom has to be inserted into
ajaxZoom.opt = {}; // No callbacks
</script>
<script type="text/javascript" src="../axZm/jquery.axZm.loader.js"></script>
');
echo "</pre>";
		?>
		
		<?php
		include ('footer.php');
		?>

	</div>
</div>

</body>
</html>