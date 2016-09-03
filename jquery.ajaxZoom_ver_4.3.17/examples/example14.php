<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM - callback API visual console</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM - callback API visual console"/>
<meta property="og:description" content="AJAX-ZOOM has some callbacks that can be used to develop custom applications dealing with HTML5 image zoom."/>
<meta name="description" content="AJAX-ZOOM has some callbacks that can be used to develop custom applications dealing with HTML5 image zoom." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_14.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>
<!-- jQuery core -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- AJAX-ZOOM core file -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link rel="stylesheet" href="../axZm/axZm.css" type="text/css">

<!-- Used in this example to print text in visual console -->
<script type="text/javascript" src="../axZm/plugins/jquery.scrollTo.min.js"></script>
<script type="text/javascript" src="../axZm/plugins/JSON/jquery.json-2.3.min.js"></script>

<!-- This syntaxhighlighter block is only needed to pretify code, you can remove it -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>

<!-- Some additional css for this example -->
<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	.h3{background-color: #000000; color: #FFFFFF; font-size: 12pt; padding-top: 5px; padding-bottom: 5px;
		width: 350px; border-top: #000000 5px solid; border-left: #000000 5px solid; border-right: #000000 5px solid;
	}
	
	.consoleEntry {
		border-bottom: green 1px dotted;
		padding: 3px;
		margin-bottom: 2px;
	}
	
	#callBackConsole{
		height: 350px; 
		overflow-x: hidden;
		overflow-y: auto;
		font-size: 8pt;
		background-color: #101010;
		color: #3CC628;
		width: 350px;
		border-bottom: #000000 5px solid;
		border-left: #000000 5px solid;
		border-right: #000000 5px solid;
	}

	form {margin: 0; padding: 0;}
</style>
</head>
<body>

<?php
include ('navi.php');
?>

<div style='width: 960px; margin: 0px auto;'>

	<h2>AJAX-ZOOM - callback examples (last updated 2015-03-01)</h2>
	
	
	<div style='float: right; width: 572px; height: 540px'>
		<!-- AJAX-ZOOM container -->
		<div id='test' style='float: right; margin: 0px 0px 0px 0px'>Loading, please wait...</div>
	</div>
	
	<!-- Console HTML -->
	<div id='callBackConsoleContainer' style="float: left; height: 540px">
		<div id='callBackConsoleInner'>
			<div class='h3'>Callback Console 
				<input type='button' value='Clear' style='font-size: 8pt; float: right;' onclick="$('#callBackConsole').empty(); lastTime = null; firstTime = null; orderNo = 0;">
			</div>
			<div id='callBackConsole'></div>
		</div>
		<form id='someFormID' onsubmit="return false">
			<table cellspacing='2' cellpadding='2'>
				<tr>
					<td width='80'>Callback onSelection:</td>
					<td width='50'>x1: <input type='text' id='z_x1' style='width: 30px'></td>
					<td width='50'>y1: <input type='text' id='z_y1' style='width: 30px'></td>
					<td width='50'>x2: <input type='text' id='z_x2' style='width: 30px'></td>
					<td width='50'>y2: <input type='text' id='z_y2' style='width: 30px'></td>
				</tr>
			</table>
		</form>
	</div>
	
	<div style="clear: both;">


	<p>AJAX-ZOOM has many callbacks which can be used to develop advanced applications. 
		See <a href='http://www.ajax-zoom.com/index.php?cid=docs#heading_7'>API documentation</a>.
		Let us know if you miss an "event" to place your hook. Normally it is quickly implemented without additional costs. 
	</p>
	
	<p>After the initialization of AJAX-ZOOM the callback functions are stored in the object 
		<code>jQuery.axZm.userFunc</code> e.g. <code>jQuery.axZm.userFunc.onZoomInClickStart</code> 
		so you can access them later and redefine if needed:
	</p>
	
	</div>
	 
	<pre class='brush: js;'>
		jQuery.axZm.userFunc.onZoomInClickStart = function(){
			// Do something
			console.log('This is a test');
		};

		// access later
		$.axZm.userFunc.onZoomInClickStart = null;
	</pre>
	
	<p>With <code>$.fn.axZm.getAllCallBackNames()</code> you can get a list of all callbacks available in the current version. 
		Note than some API functions have callbacks too.
	</p>
	
	<p>The first argument of the callback function is often an object containing information about e.g. click coordinates, viewport and other
		information which could be very useful creating applications, e.g.
	</p>
	
	<pre class='brush: js;'>
		jQuery.axZm.userFunc.onZoom = function(info){
			console.log(info);
		};
	</pre>
	
	<p>In most cases the return of your callback function does not matter. However for <code>onZoomInClickStart</code> it does. 
		If <code>onZoomInClickStart</code> returns <code>false</code> the actual zoom will be aborted. You can grap the "info" object 
		passed to this callbackfunction and do something else with it, e.g. place a hotspot like it is done in <a href="example12.php">example12.php</a> 
		or whatever:
	</p>
	
	<pre class='brush: js;'>
		var checkClickedCoordinates = function(x, y){
			// do checks here abot x and y
			
			// return true or false
		};
		
		jQuery.axZm.userFunc.onZoomInClickStart = function(info){
			// coordinates releated to original image size
			var x = info.viewport.x;
			var y = info.viewport.y;
			
			return checkClickedCoordinates(x, y);
		};
	</pre>

	
	<p>A specific callback can be also a js object containing more than one function. 
		This usually happens when two or more functions for the same callback name are merged with <code>$.fn.axZm.mergeCallBackObj()</code> 
		before or after AJAX-ZOOM is initialized. For many examples we have created "wrapper" plugins for special functionality 
		where AJAX-ZOOM callbacks are extensivly used but developers can also pass their own, additional callbacks for the same "event"; 
		In this case they are merged into js object by  <code>$.fn.axZm.mergeCallBackObj()</code> 
		and executed one by one.
	</p>
	
	<p>So when AJAX-ZOOM is already initialized you can safely add your callback function like this: </p>
	<pre class='brush: js;'>
		var anOtherOnZoom = function(info){
			console.log(info);
		};
		
		$.axZm.userFunc = $.fn.axZm.mergeCallBackObj($.axZm.userFunc, {
			onZoom: anOtherOnZoom
		});
		
		// or like this when AJAX-ZOOM is already initialized: 
		$.fn.axZm.addCallback('onZoom', anOtherOnZoom);
		
	</pre>
	
	<p>In most cases you would put the logic into your <code>anOtherOnZoom</code> function and would not need to change / replace this callback. 
		In case you do, add it like this: 
	</p>
	
	<pre class='brush: js;'>
		var anOtherOnZoom = function(info){
			console.log(info);
		};
		
		$.axZm.userFunc = $.fn.axZm.mergeCallBackObj($.axZm.userFunc, {
			onZoom: {myOnZoom: anOtherOnZoom}
		});
		
		// or like this when AJAX-ZOOM is already initialized: 
		$.fn.axZm.addCallback('onZoom', {myOnZoom: anOtherOnZoom});
		
		// and e.g. replace your onZoom callback named myOnZoom like this:
		$.axZm.userFunc.onZoom.myOnZoom = function(info){
			// do something else
		}
	</pre>	

	<script type="text/javascript">
	
		function strReplace(s, r, subj) {
			if (!subj){return;}
			return subj.split(s).join(r);
		}
	
		// Function append to console for demonstration of callbacks
		var lastTime = null;
		var firstTime = null;
		var orderNo = 0;
		function appendToConsole(name, info){
			if (!lastTime){lastTime = Date.now(); firstTime = Date.now();}
			timeDiff = Date.now() - lastTime;
			lastTime = Date.now();
			orderNo++;
			name = orderNo+'. AJAX-ZOOM callback "'+name+'" ('+(lastTime-firstTime)+' ms | '+timeDiff+' ms)';
			if (info){
				var toStr = jQuery.toJSON(info);
				toStr = strReplace(',"', '," ', toStr);
				toStr = strReplace('":', '": ', toStr);
				name += ':<br>'+toStr;
			}

			$('#callBackConsole').append('<DIV class="consoleEntry">'+name+'</DIV>')
			.scrollTo('max');
		}
	
		// Example of a callback function defined elsewhere
		var someCallBackFunction = function(info){
				$('#z_x1').val(Math.round(info.selector.x1));
				$('#z_y1').val(Math.round(info.selector.y1));
				$('#z_x2').val(Math.round(info.selector.x2));
				$('#z_y2').val(Math.round(info.selector.y2));
		};
	
		var ajaxZoom = {}; // Create empty object which will be interpreted by jquery.axZm.loader.js
		ajaxZoom.path = '../axZm/'; // Path to the axZm folder
		ajaxZoom.parameter = 'zoomDir=/pic/zoom/animals&example=clb'; // Needed parameter
		ajaxZoom.divID = 'test'; // The id of the Div where ajax-zoom has to be inserted

		ajaxZoom.opt = {}; // Callbacks passed over the options. All other options are defined in zoomConfig.inc.php
		
		// Assign to each AJAX-ZOOM callback "console.log" function with possibly passed parameter converted to string
		jQuery.each($.fn.axZm.getAllCallBackNames(), function(i, name){
			ajaxZoom.opt[name] = function(info){
				appendToConsole(name, info);
			}
		});
	
		// As we assign same callback to each possible callback above, redefine some to fit this example
		ajaxZoom.opt.onSelection = function(info){
			appendToConsole('onSelection', info);
			someCallBackFunction(info);
		};
		
		
		ajaxZoom.opt.onFullScreenReady = function(info){
			appendToConsole('onFullScreenReady', info);
			
			jQuery('#callBackConsole').css('height', 200);
			jQuery('#callBackConsoleInner').css({
				position: 'absolute',
				zIndex: 123,
				opacity: 0.8
			}).appendTo('#axZm_zoomLayer').css({
				bottom: 0,
				right: 0
			});
		};
		
		ajaxZoom.opt.onFullScreenClose = function(info){
			appendToConsole('onFullScreenClose', info);
			jQuery('#callBackConsoleInner').prependTo('#callBackConsoleContainer').css({
				position: '',
				right: '',
				bottom: '',
				opacity: 1,
				zIndex: ''
			});
			jQuery('#callBackConsole').css('height', 300);
		};
		
		// fire AJAX-ZOOM
		$.fn.axZm.load({
			opt: ajaxZoom.opt,
			path: ajaxZoom.path,
			parameter: ajaxZoom.parameter,
			divID: ajaxZoom.divID
		});

	</script>
 	
 	
<?php
include ('footer.php');
?>
</div>
	


</body>
</html>