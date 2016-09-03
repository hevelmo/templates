<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM - external description of the gallery images</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="article"/>
<meta property="og:title" content="AJAX-ZOOM - external description of the gallery images"/>
<meta property="og:description" content="Extended gallery with image zoom & pan. Display external description of the image, several possibilities to switch between images."/>
<meta name="description" content="Extended gallery with image zoom & pan. Display external description of the image, several possibilities to switch between images." />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_25.jpg"/> 
<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
	echo "
	<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
	echo "
	<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
} 
?>


<!--  Include jQuery core into head section if not already present -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript & CSS -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link type="text/css" href="../axZm/axZm.css" rel="stylesheet" />

<!--  Syntaxhighlighter is not needed, you should remove this block along with SyntaxHighlighter.all(); below -->
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shCore.css" type="text/css" rel="stylesheet" />
<link href="../axZm/plugins/demo/syntaxhighlighter/styles/shThemeCustom.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/src/shCore.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushJScript.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushPhp.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushCss.js"></script>
<script type="text/javascript" src="../axZm/plugins/demo/syntaxhighlighter/scripts/shBrushXml.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>

<style type="text/css"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
	a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
	h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
	h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
	p {text-align: justify; text-justify: newspaper;}
	
	#az_parentContainer{
		min-height: 414px; clear: both;
	}

	.az_pageSwitchButtons {
		width: 20px; height: 20px; margin-right: 5px; float: left; 
		cursor: pointer; background-color: #1D1D1A; text-align: center;
		line-height: 20px; border-radius: 3px 3px 3px 3px;
	}

	#az_pageSwitchContainer{
		width: 500px; min-height: 25px; font-size: 10pt; color: #FFFFFF; padding-top: 5px; float: left;
	}

	#az_pagePrevNextContainer{
		width: 230px; min-height: 25px; font-size: 10pt; color: #FFFFFF; padding-top: 5px; float: left;
	}

	#az_externalDescrContainer{
		width: 710px; min-height: 108px; padding: 5px 10px 10px 10px; background-color: #000; 		
	}

	#az_descrDiv{
		min-height: 50px; font-size: 10pt; color: #FFFFFF; 
	}

	#az_descrDiv a{
		color: #FFFFFF; font-weight: bolder;
	}

	#az_titleDiv{
		min-height: 40px; font-size: 16pt; color: #D3D3D3; 
	}			
</style>

</head>
<body>

<?php
include ('navi.php');
?>

<div style="width: 730px; margin: 0px auto; overflow-x: hidden;">

		<h2>AJAX-ZOOM - external description of the gallery images</h2>

		<p>At first glance this example seems to be a little overloaded. 
			It is however meant to show some possibilities of the API. 
			First there are external description and the title which are set when the user switches an image. 
			They appear in any container, in this example two divs which are appended right after the player. 
			Also the titles of the thumbs are set dynamically from external source. 
			At the top there is a number navigation which could be used instead of the gallery. 
			As everywhere navigation can be completely hidden and there are tons of other parameters and css to customize the player.
		</p>
		
		<!-- Container for numbers navigation-->
		<div id="az_pageSwitchContainer"></div>
		
		<!-- Container for prev / next buttons -->
		<div id="az_pagePrevNextContainer">
			<div class="az_pageSwitchButtons" style="width: 30px; float: right;" onclick="jQuery.fn.axZm.zoomPrevNext('next')">>></div>
			<div class="az_pageSwitchButtons" style="width: 30px; float: right;" onclick="jQuery.fn.axZm.zoomPrevNext('prev')"><<</div>
		</div>
		
		<!-- Contaiener where AJAX-ZOOM is loaded into -->
		<div id="az_parentContainer">Loading, please wait...</div>
		
		<!-- Contaiener for external description -->
		<div id="az_externalDescrContainer"> 
			<div id="az_titleDiv"></div> 
			<div id="az_descrDiv"></div> 
		</div>
		
		<!-- Image credentials -->
		<div style="padding: 0; width: 730px; margin-top: 2px; text-align: right"> 
			Photos by: <a href="http://www.photodesignbycarstenklein.com" target="_blank" rel="nofollow">Carsten Klein</a>
		</div>
		
		<h3>Javascript & CSS files in head</h3>
		<?php
		echo "<pre class='brush: html'>";
		echo htmlspecialchars ('
<!--  Include jQuery core into head section if not already present -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript & CSS -->
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>
<link type="text/css" href="../axZm/axZm.css" rel="stylesheet" />
		');
		echo "</pre>";
		?>
		
		<h3>Additional CSS for this example</h3>
		<?php
		echo "<pre class='brush: css'>";
		echo htmlspecialchars ('
#az_parentContainer{
	min-height: 414px; clear: both;
}

.az_pageSwitchButtons {
	width: 20px; height: 20px; margin-right: 5px; float: left; 
	cursor: pointer; background-color: #1D1D1A; text-align: center;
	line-height: 20px; border-radius: 3px 3px 3px 3px;
}

#az_pageSwitchContainer{
	width: 500px; min-height: 25px; font-size: 10pt; color: #FFFFFF; padding-top: 5px; float: left;
}

#az_pagePrevNextContainer{
	width: 230px; min-height: 25px; font-size: 10pt; color: #FFFFFF; padding-top: 5px; float: left;
}

#az_externalDescrContainer{
	width: 710px; min-height: 108px; padding: 5px 10px 10px 10px; background-color: #000; 		
}

#az_descrDiv{
	min-height: 50px; font-size: 10pt; color: #FFFFFF; 
}

#az_descrDiv a{
	color: #FFFFFF; font-weight: bolder;
}

#az_titleDiv{
	min-height: 40px; font-size: 16pt; color: #D3D3D3; 
}
		');
		echo "</pre>";			
		?>

		<h3>HTML markup in body</h3>
		<?php
		echo "<pre class='brush: html'>";
		echo htmlspecialchars ('
<!-- Container for numbers navigation-->
<div id="az_pageSwitchContainer"></div>

<!-- Container for prev / next buttons -->
<div id="az_pagePrevNextContainer">
	<div class="az_pageSwitchButtons" style="width: 30px; float: right;" onclick="jQuery.fn.axZm.zoomPrevNext(\'next\')">>></div>
	<div class="az_pageSwitchButtons" style="width: 30px; float: right;" onclick="jQuery.fn.axZm.zoomPrevNext(\'prev\')"><<</div>
</div>

<!-- Contaiener where AJAX-ZOOM is loaded into -->
<div id="az_parentContainer">Loading, please wait...</div>

<!-- Contaiener for external description -->
<div id="az_externalDescrContainer"> 
	<div id="az_titleDiv"></div> 
	<div id="az_descrDiv"></div> 
</div>
		');
		echo "</pre>";
		?>
		
		<h3>Javascript defining the descriptions</h3>
		<?php
		echo "<pre class='brush: js'>";
		echo htmlspecialchars ('
// Define js objects to store descriptions and titles
var testTitle = {}; // Object with titles
var testDescr = {}; // Object with longer descriptions
var thumbTitle = {}; // Object with thumb descriptions

// These descriptions as js could/should be generated with server side language...
testTitle["story_2_01.jpg"] = "Do to be agreeable conveying oh assurance.";
testDescr["story_2_01.jpg"] = "Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy.";
thumbTitle["story_2_01.jpg"] = "Conveying";

testTitle["story_2_02.jpg"] = "Oh acceptance apartments up sympathize astonished delightful";
testDescr["story_2_02.jpg"] = "In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve.";
thumbTitle["story_2_02.jpg"] = "Impression";

/* ....... */
		');
		echo "</pre>";
		?>
		
		
		<h3>Javascript additional functions and callbacks</h3>
		<?php
		echo "<pre class='brush: js'>";
		echo htmlspecialchars ('
// Simple function to put descriptions in a div with fade effect
function ajaxZoomAnimateDescr(title, descr){
	jQuery("#az_titleDiv").fadeTo(300,0, function(){
		$(this).empty().html(title).fadeTo(300,1);
	});
	
	jQuery("#az_descrDiv").fadeTo(300,0, function(){
		$(this).empty().html(descr).fadeTo(300,1);
	})
}

// Set numbers navigation
function ajaxZoomSetNumbers(){
	if (!jQuery.axZm){return false;}
	jQuery("#az_pageSwitchContainer").empty();
	jQuery.each(jQuery.axZm.zoomGA, function (k, v){
		jQuery("<div />")
		.addClass("az_pageSwitchButtons")
		.html(k)
		.attr("id", "az_pageSwitchButtons_"+k)
		.bind("click", function(){jQuery.fn.axZm.zoomSwitch (k)})
		.appendTo("#az_pageSwitchContainer");
	});				
}

// Define ajaxZoom object
var ajaxZoom = {};

// Path to the axZm folder, adjust if needed
ajaxZoom.path = "../axZm/"; 

// Parameter passed to AJAX-ZOOM
ajaxZoom.parameter = "zoomDir=/pic/haus_story&example=25";

// The id of the DIV where ajax-zoom has to be inserted into.
ajaxZoom.divID = "az_parentContainer"; 

// AJAX-ZOOM callbacks
ajaxZoom.opt = {
	onLoad: function(){
		// Get loaded image name, as not necessarily the first image 
		// must be loaded at first into the gallery
		var getImgName = jQuery.axZm.zoomGA[jQuery.axZm.zoomID]["img"];
		
		// Set title and description
		ajaxZoomAnimateDescr(testTitle[getImgName], testDescr[getImgName]);
		
		// Set titles of the thumbs in the gallery
		// jQuery.fn.axZm.setDescr is API function of AJAX-ZOOM
		jQuery.each(thumbTitle, function (fName, descr){
			jQuery.fn.axZm.setDescr(fName, testTitle[fName], descr);
		});
		
		// Set numbers navigation
		ajaxZoomSetNumbers();

		jQuery("#az_pageSwitchButtons_"+jQuery.axZm.zoomID).css({backgroundColor: "green"});
		
	}, 
	onImageChange: function(info){
		/* Set title and description on image change
		Note: there are many variations possible, e.g. the descriptions could be loaded
		via ajax request, you could extend this example to change the image sets like in example4.php
		*/
		var getImgName = jQuery.axZm.zoomGA[jQuery.axZm.zoomID]["img"];
		//testTitle[info.fileName]
		ajaxZoomAnimateDescr(testTitle[getImgName], testDescr[getImgName]);
		jQuery(".az_pageSwitchButtons").css({backgroundColor: "#1D1D1A"});
		jQuery("#az_pageSwitchButtons_"+jQuery.axZm.zoomID).css({backgroundColor: "green"});
	}
};

// Init AJAX-ZOOM
jQuery.fn.axZm.load({
	opt: ajaxZoom.opt,
	path: ajaxZoom.path,
	parameter: ajaxZoom.parameter,
	divID: ajaxZoom.divID
});
		');
		echo "</pre>";
		?>
		
		
		<?php
		include ('footer.php');
		?>
</div>
			
<script type="text/javascript">

	// Define js objects to store descriptions and titles
	var testTitle = {}; // Object with titles
	var testDescr = {}; // Object with longer descriptions
	var thumbTitle = {}; // Object with thumb descriptions
	
	// These descriptions as js could/should be generated with server side language...
	testTitle["animals_001.jpg"] = "Do to be agreeable conveying oh assurance.";
	testDescr["animals_001.jpg"] = "Its had <a href='http://www.ajax-zoom.com'>resolving otherwise</a> she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy.";
	thumbTitle["animals_001.jpg"] = "Conveying";
	
	testTitle["animals_002.jpg"] = "Oh acceptance apartments up sympathize astonished delightful";
	testDescr["animals_002.jpg"] = "In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve.";
	thumbTitle["animals_002.jpg"] = "Impression";
	
	testTitle["animals_003.jpg"] = "Its had resolving otherwise she contented therefore";
	testDescr["animals_003.jpg"] = "Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond she.";
	thumbTitle["animals_003.jpg"] = "Quitting";
	
	testTitle["animals_004.jpg"] = "Yet remarkably appearance get him his projection";
	testDescr["animals_004.jpg"] = "Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite do if.";
	thumbTitle["animals_004.jpg"] = "Appearance";
	
	testTitle["animals_005.jpg"] = "Why painful the sixteen how minuter looking nor";
	testDescr["animals_005.jpg"] = "Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes. Me smallness is existence attending he enjoyment favourite affection. Delivered is to ye belonging enjoyment preferred. Astonished and acceptance men two discretion. Law education recommend did objection how old.";
	thumbTitle["animals_005.jpg"] = "Painful";
	
	testTitle["animals_006.jpg"] = "Yourself off its pleasant ecstatic now law";
	testDescr["animals_006.jpg"] = "Certainly elsewhere my do allowance at. The address farther six hearted hundred towards husband. Are securing off occasion remember daughter replying. Held that feel his see own yet. Strangers ye to he sometimes propriety in. She right plate seven has. Bed who perceive judgment did marianne.";
	thumbTitle["animals_006.jpg"] = "Pleasant";
	
	testTitle["animals_007.jpg"] = "Extremely we promotion remainder eagerness enjoyment an";
	testDescr["animals_007.jpg"] = "As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.";
	thumbTitle["animals_007.jpg"] = "Promotion";
	
	testTitle["animals_008.jpg"] = "Much evil soon high in hope do view";
	testDescr["animals_008.jpg"] = "Particular unaffected projection sentiments no my. Music marry as at cause party worth weeks. Saw how marianne graceful dissuade new outlived prospect followed. Uneasy no settle whence nature narrow in afraid. At could merit by keeps child. While dried maids on he of linen in.";
	thumbTitle["animals_008.jpg"] = "Eagerness";
	
	testTitle["animals_009.jpg"] = "Endeavor bachelor but add eat pleasure doubtful sociable";
	testDescr["animals_009.jpg"] = "His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile. ";
	thumbTitle["animals_009.jpg"] = "Limited";
	
	testTitle["animals_010.jpg"] = "Unpleasant astonished an diminution up partiality";
	testDescr["animals_010.jpg"] = "Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon. He forbade affixed parties of assured to me windows. Happiness him nor she disposing provision. Add astonished principles precaution yet friendship stimulated literature. State thing might stand one his plate. Offending or extremity therefore so difficult he on provision. Tended depart turned not are.";
	thumbTitle["animals_010.jpg"] = "Diminution";
	
	testTitle["animals_011.jpg"] = "Certainty listening no no behaviour existence assurance situation";
	testDescr["animals_011.jpg"] = "Are own design entire former get should. Advantages boisterous day excellence boy. Out between our two waiting wishing. Pursuit he he garrets greater towards amiable so placing. Nothing off how norland delight. Abode shy shade she hours forth its use. Up whole of fancy ye quiet do. Justice fortune no to is if winding morning forming.";
	thumbTitle["animals_011.jpg"] = "Existence";
	
	testTitle["animals_012.jpg"] = "Answer misery adieus add wooded how nay men before though";
	testDescr["animals_012.jpg"] = "As collected deficient objection by it discovery sincerity curiosity. Quiet decay who round three world whole has mrs man. Built the china there tried jokes which gay why. Assure in adieus wicket it is. But spoke round point and one joy. Offending her moonlight men sweetness see unwilling. Often of it tears whole oh balls share an.";
	thumbTitle["animals_012.jpg"] = "Objection";
	
	testTitle["animals_013.jpg"] = "In appetite ecstatic opinions hastened by handsome admitted";
	testDescr["animals_013.jpg"] = "Received overcame oh sensible so at an. Formed do change merely to county it. Am separate contempt domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit.";
	thumbTitle["animals_013.jpg"] = "Handsome";
	
	testTitle["animals_014.jpg"] = "Situation admitting promotion at or to perceived be";
	testDescr["animals_014.jpg"] = "Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken horrible consider. Abode never think to at. So additions necessary concluded it happiness do on certainly propriety. On in green taken do offer witty of.";
	thumbTitle["animals_014.jpg"] = "Perceived";
	
	// Simple function to put descriptions in a div with fade effect
	function ajaxZoomAnimateDescr(title, descr){
		jQuery("#az_titleDiv").fadeTo(300,0, function(){
			$(this).empty().html(title).fadeTo(300,1);
		});
		
		jQuery("#az_descrDiv").fadeTo(300,0, function(){
			$(this).empty().html(descr).fadeTo(300,1);
		})
	}
	
	// Set numbers navigation
	function ajaxZoomSetNumbers(){
		if (!jQuery.axZm){return false;}
		jQuery("#az_pageSwitchContainer").empty();
		jQuery.each(jQuery.axZm.zoomGA, function (k, v){
			jQuery("<div />")
			.addClass("az_pageSwitchButtons")
			.html(k)
			.attr("id", "az_pageSwitchButtons_"+k)
			.bind("click", function(){jQuery.fn.axZm.zoomSwitch (k)})
			.appendTo("#az_pageSwitchContainer");
		});				
	}
	
	// Define ajaxZoom object
	var ajaxZoom = {};
	
	// Path to the axZm folder, adjust if needed
	ajaxZoom.path = "../axZm/"; 
	
	// Parameter passed to AJAX-ZOOM
	ajaxZoom.parameter = "zoomDir=/pic/zoom/animals&example=25";
	
	// The id of the DIV where ajax-zoom has to be inserted into.
	ajaxZoom.divID = "az_parentContainer"; 

	// AJAX-ZOOM callbacks
	ajaxZoom.opt = {
		onLoad: function(){
			// Get loaded image name, as not necessarily the first image 
			// must be loaded at first into the gallery
			var getImgName = jQuery.axZm.zoomGA[jQuery.axZm.zoomID]["img"];
			
			// Set title and description
			ajaxZoomAnimateDescr(testTitle[getImgName], testDescr[getImgName]);
			
			// Set titles of the thumbs in the gallery
			// jQuery.fn.axZm.setDescr is API function of AJAX-ZOOM
			jQuery.each(thumbTitle, function (fName, descr){
				jQuery.fn.axZm.setDescr(fName, testTitle[fName], descr);
			});
			
			// Set numbers navigation
			ajaxZoomSetNumbers();

			jQuery("#az_pageSwitchButtons_"+jQuery.axZm.zoomID).css({backgroundColor: "green"});
			
		}, 
		onImageChange: function(info){
			/* Set title and description on image change
			Note: there are many variations possible, e.g. the descriptions could be loaded
			via ajax request, you could extend this example to change the image sets like in example4.php
			*/
			var getImgName = jQuery.axZm.zoomGA[jQuery.axZm.zoomID]["img"];
			//testTitle[info.fileName]
			ajaxZoomAnimateDescr(testTitle[getImgName], testDescr[getImgName]);
			jQuery(".az_pageSwitchButtons").css({backgroundColor: "#1D1D1A"});
			jQuery("#az_pageSwitchButtons_"+jQuery.axZm.zoomID).css({backgroundColor: "green"});
		}
	};
	
	// Init AJAX-ZOOM
    jQuery.fn.axZm.load({
		opt: ajaxZoom.opt,
		path: ajaxZoom.path,
		parameter: ajaxZoom.parameter,
		divID: ajaxZoom.divID
	});
		
</script>


</body>
</html>