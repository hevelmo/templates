<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>360° - 3D product configuration basics</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">
<meta name="description" content="360° - 3D Product Configurator basics with AJAX-ZOOM" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_36.jpg"/> 

<?php
if (strpos($_SERVER['HTTP_USER_AGENT'],"iPhone")){
    echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=0.5, maximum-scale=0.5, user-scalable=no\">";
}else{
    echo "<meta name=\"viewport\" content=\"width=device-width,  minimum-scale=1, maximum-scale=1, user-scalable=no\">";
}
?>
 
<style type="text/css" media="screen"> 
	html {font-family: Tahoma, Arial; font-size: 10pt; margin: 0; padding: 0; border: 0;}
	body {margin: 0; padding: 0;}
    a {color: blue; outline: 0; outline-style: none; text-decoration: none;} a:visited {color: blue;} a:hover {color: green;}
    h2 {padding:0px; margin: 35px 0px 15px 0px; font-size: 22px;}
    h3 {font-family: Arial; color: #1A4A7A; font-size: 18px; padding: 20px 0px 3px 0px; margin: 0;}
    p {text-align: justify; text-justify: newspaper;}
    body>.zFsO>.axZm_zoomContainer{background-color: #FFF !important;}
    .colorWrap{width: 40px; height: 40px; position: relative; display: inline-block; margin: 0 10px 10px 0; cursor: pointer; overflow: hidden; border-radius: 50%; border: 2px #FFF solid;}
    .colorWrap:hover{border-color: #267CB8}
    .color1 {position: absolute; width: 50%; height: 100%;}
    .color2 {position: absolute; width: 50%; height: 100%; right: 0;}
    #naviToTheRight{overflow-x: hidden; overflow-y: scroll;}
</style>
 
<!--  Include jQuery core into head section -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!--  AJAX-ZOOM javascript && CSS -->
<link href="../axZm/axZm.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../axZm/jquery.axZm.js"></script>

</head>
<body>
<?php
// This include is just for the demo, you should remove it
include ('navi.php');
?>


<div style="position: relative; max-width: 1200px; margin: 0 auto;">
    <!-- Basically only an element with any certain ID is needed, we call it AZplayerParentContainer here -->
    <div id="AZplayerParentContainer" style="height: 600px; float: left; width: 50%;"></div>

    <!-- We have made this right element with buttons absolute because while animating jQuery not always makes the best job when animating %, which might break the layout -->
    <div id="naviToTheRight" style="height: 600px; position: absolute; z-index: 1; top: 0px; right: 0px; width: 50%; background-color: #CECECE">

        
        <div style="padding: 10px;">
            <h2 style="margin-top: 20px;">360° / 3D product configurator basics</h2>
            <div>
                <div style="padding-bottom: 5px;"><span style="color: red;">New (beta)</span>: API $.fn.axZm.loadAjax360Type; injects new 360 of the same size keeping same zoom level and frame number. Perfect for 360 product configurators.</div>
                <div id="az_colorSwathes">
                    <div class="colorWrap" onclick="jQuery.fn.axZm.loadAjax360Type('example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali')">
                        <div class="color1" style="background-color: black;"></div>
                        <div class="color2" style="background-color: #583e31;"></div>
                    </div>
                    <div class="colorWrap" onclick="jQuery.fn.axZm.loadAjax360Type('example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali')">
                        <div class="color1" style="background-color: black;"></div>
                        <div class="color2" style="background-color: silver;"></div>
                    </div>
                    <div class="colorWrap" onclick="jQuery.fn.axZm.loadAjax360Type('example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali')">
                        <div class="color1" style="background-color: #dcccbf;"></div>
                        <div class="color2" style="background-color: #d2a679;"></div>
                    </div>
                    <div class="colorWrap" onclick="jQuery.fn.axZm.loadAjax360Type('example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali')">
                        <div class="color1" style="background-color: #ec7032;"></div>
                        <div class="color2" style="background-color: #583e31;"></div> 
                    </div>
                </div>
            </div>
        
            <div>
                <div style="padding-bottom: 5px;">Old / alternative: API $.fn.axZm.loadAjaxSet; loads / reloads new 360 into player independent of new 360 image size and number of frames.</div>
                <div>
                    <!-- -->
                    <div class="colorWrap" onclick="jQuery.fn.axZm.loadAjaxSet('example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali&zoomID='+jQuery.axZm.zoomID)">
                        <div class="color1" style="background-color: black;"></div>
                        <div class="color2" style="background-color: #583e31;"></div>
                    </div>
                    <div class="colorWrap" onclick="jQuery.fn.axZm.loadAjaxSet('example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali&zoomID='+jQuery.axZm.zoomID)">
                        <div class="color1" style="background-color: black;"></div>
                        <div class="color2" style="background-color: silver;"></div>
                    </div>
                    <div class="colorWrap" onclick="jQuery.fn.axZm.loadAjaxSet('example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali&zoomID='+jQuery.axZm.zoomID)">
                        <div class="color1" style="background-color: #dcccbf;"></div>
                        <div class="color2" style="background-color: #d2a679;"></div>
                    </div>
                    <div class="colorWrap" onclick="jQuery.fn.axZm.loadAjaxSet('example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali&zoomID='+jQuery.axZm.zoomID)">
                        <div class="color1" style="background-color: #ec7032;"></div>
                        <div class="color2" style="background-color: #583e31;"></div> 
                    </div>
                </div>
            </div>            
            
        </div>
        
        <div style="padding: 10px">
            <div>
                Some Javascript driven resizing examples without browser window being resized:<br><br>
                <input type="button" style="width: 47%; text-align: left;" value="Resize to 70% width" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#AZplayerParentContainer').stop(true, false).css('width', '70%'); jQuery('#naviToTheRight').stop(true, false).css({width: '30%'}); setTimeout(function(){jQuery.fn.axZm.resizeStart(1)})"> 
                <input type="button" style="width: 47%; text-align: left;" value="Resize to 840px height" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#AZplayerParentContainer, #naviToTheRight').stop(true, false).css('height', '840px'); setTimeout(function(){jQuery.fn.axZm.resizeStart(1)})"><br>
                <input type="button" style="width: 47%; text-align: left;" value="Resize with animation" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#AZplayerParentContainer').stop(true, false).animate({height: $(window).height() - $(':first-child', 'body').outerHeight(), width: '70%'},{queue: false, easing: 'easeOutCirc', duration: 1500, complete: function(){jQuery.fn.axZm.resizeStart(1);}}); jQuery('#naviToTheRight').stop(true, false).animate({height: $(window).height() - $(':first-child', 'body').outerHeight(), width: '30%'},{queue: false, easing: 'easeOutCirc', duration: 1500})">     
                <input type="button" style="width: 47%; text-align: left;" value="Reset size and zoom" onclick="jQuery.fn.axZm.resizeStart(3000); jQuery('#AZplayerParentContainer').stop(true, false).css({height: '600px', width: '50%'}); jQuery('#naviToTheRight').stop(true, false).css({height: '600px', width: '50%'}); jQuery.fn.axZm.resizeStart(1,  jQuery.fn.axZm.zoomReset);"><br>

                <!-- jQuery.fn.axZm.fillArea can be triggered in certain callbacks, same can be achieved with autoZoom option set in php config file -->
                <input type="button" style="width: 47%; text-align: left;" value="API $.fn.axZm.fillArea" onclick="jQuery.fn.axZm.fillArea({ callback: function(){} });"><br>        
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    // If you are triggering jQuery.fn.axZm.openFullScreen outside of jQuery(document).ready,
    // then make sure it done after your parent container, in this case "AZplayerParentContainer"
    jQuery(document).ready(function() {
        
        // Define some callbacks
        var callbacks = {
            
            onBeforeStart: function(){
                // Some of the options can be set directly as js var in this callback, e.g. 
                jQuery.axZm.spinReverse = true;
                // jQuery.axZm.spinReverseZ = true;
                
            },
 
            onLoad: function(){
                jQuery.axZm.fullScreenExitText = false;
            },
            
            onFullScreenStartFromRel: function(){
                // Optionally clone and put colorswatches over AJAX-ZOOM when it goes fullscreen
                var az_colorSwathesClone = $('#az_colorSwathes')
                .clone(true, true)
                .attr('id', 'az_colorSwathes_clone')
                .css({position: 'absolute', zIndex: 2, bottom: 10, left: '50%', padding: 0})
                .appendTo('#axZm_zoomLayer');
                
                az_colorSwathesClone.css({marginLeft: -(az_colorSwathesClone.outerWidth() / 2)})
            },
            
            onFullScreenCloseFromRel: function(){
                // Remove cloned colorswatches div
                $('#az_colorSwathes_clone' ,'#axZm_zoomLayer').remove();
            }
        }
 
        // * By defining the query string parameter example=colorSwatch 
        // some default settings from /axZm/zoomConfig.inc.php are overridden in 
        // /axZm/zoomConfigCustom.inc.php after elseif ($_GET['example'] == 'colorSwatch'){. 
        // So if changes in /axZm/zoomConfig.inc.php have no effect - 
        // look for the same options /axZm/zoomConfigCustom.inc.php; 
        // To quickly check a different set of options you can write example=spinIpad
        // which is already preset in /axZm/zoomConfigCustom.inc.php
        
        // Documentation - http://www.ajax-zoom.com/index.php?cid=docs#api_openResponsive
        jQuery.fn.axZm.openResponsive('../axZm/', 'example=colorSwatch&3dDir=../pic/zoom3d/Uvex_Occhiali', callbacks, 'AZplayerParentContainer', true, true, true);
        
        /*
        // load ajax-zoom not responsice
        jQuery.fn.axZm.load({
            opt: callbacks,
            path: '../axZm/',
            parameter: 'example=colorSwatch&3dDir=/pic/armchair/black',
            divID: 'AZplayerParentContainer'
        });
        */
    });
</script>

</body>
</html>