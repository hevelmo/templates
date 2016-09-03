<?php
/**
* Plugin: jQuery AJAX-ZOOM
* Copyright: Copyright (c) 2010-2016 Vadim Jacobi
* License Agreement: http://www.ajax-zoom.com/index.php?cid=download
* Version: 4.2.13
* Date: 2016-03-07
* URL: http://www.ajax-zoom.com
* License: http://www.ajax-zoom.com/index.php?cid=download
* Documentation: http://www.ajax-zoom.com/index.php?cid=docs
*/

error_reporting(0);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>AJAX-ZOOM Demo Installation</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css" media="screen"> 
    html {font-family: Tahoma, Arial; font-size: 11pt; margin: 0; padding: 0;}
    body {margin: 10px 10px 10px 10px; padding: 0;}
    h2 {padding:0px; margin: 20px 0px 10px 0px; font-size: 16pt; color: #1a4a7a;}
    h3 {padding:0px; margin: 20px 0px 10px 0px; font-size: 14pt; color: #1a4a7a;}
    a,a:visited{color: #0000F4;}
    a:hover{color: green;}
    p { }
    .exampleImg{
        border: #000000 2px solid;
        cursor: pointer;
        margin: 0px 7px 10px 0px;
        overflow: hidden;
        width: 300px;
        height: 169px;
        background-repeat: no-repeat;
        background-position: center;
    }
    .rbox{
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        border-radius: 4px 4px 4px 4px;
    }
    .readme{
         -ms-word-break: break-all; word-break: break-all; word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto;
    }
    
    .exampleImg:hover{
        border: #0191ff 2px solid;
    }
    
    .shadow{
        -moz-box-shadow: 0px 2px 2px #C2C2C2;
        box-shadow: 0px 2px 2px #C2C2C2;
        -webkit-box-shadow: 0px 2px 2px #C2C2C2;    
    }
    
    .exampleHead{
        background-color: #000000; 
        background-color: rgba(0,0,0,0.9); 
        line-height: 20px; 
        margin: 5px; 
        min-width: 30px;
        padding: 0px 3px 3px 3px; 
        border: #FFFFFF 2px solid;
        color: #FFFFFF;
        display: inline-block;
        text-decoration: none;
        position: relative;
        float: right;
        top: -8px;
    }
    .clearfix:after {content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;}     
    .clearfix {display: inline-block;}
    html[xmlns] .clearfix {display: block;}
    * html .clearfix {height: 1%;}
    
    #leftColumn{
        float: left; width: 50%; padding-right: 20px; box-sizing: border-box; overflow: hidden;
    }
    #rightColumn{
        float: left; width: 50%; overflow: hidden; box-sizing: border-box;
    }
    
    @media only screen and (max-width: 1276px){
        #leftColumn{ width: auto; padding-right: 0;}
        #rightColumn{ width: auto;}
    }
</style>
<script type="text/javascript" src="axZm/plugins/jquery-1.8.3.min.js"></script>
</head>
<body>
<?php

function makeLink($string){
    $string = preg_replace("/([^\w\/])(www\.[a-z0-9\-]+\.[a-z0-9\-]+)/i", "$1http://$2",$string);
    $string = preg_replace("/([\w]+:\/\/[\w-?&;#~=\.\/\@]+[\w\/])/i","<a target=\"_blank\" href=\"$1\">$1</A>",$string);
    $string = preg_replace("/([\w-?&;#~=\.\/]+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?))/i","<A HREF=\"mailto:$1\">$1</A>",$string);    
    return $string;
}


function readtxt($f){
    $return = '';
    $filename = $f;
    $ini_handle = fopen($filename, "r");
    $return = fread($ini_handle, filesize($filename));
    $return = nl2br($return);
    return makeLink($return);
}

function natIndex($array, $reverse){
    $i=1; $nArray=array();
    natcasesort($array);
    if ($reverse){
        $array = array_reverse($array);
    }
    foreach ($array as $k=>$v){
        $nArray[$i]=$v;
        $i++;
    }
    return $nArray;
}

function checkRemoteFile($url){
    return $url;
    if (function_exists('curl_version')){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_NOBODY, 1);
        curl_setopt($ch, CURLOPT_FAILONERROR, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        if(curl_exec($ch) !== false){
            return $url;
        }
        else{
            return 'http://www.ajax-zoom.com/pic/layout/image-zoom_chrome.jpg';
        }
    }else{
        return $url;
    }
}

function getIonCubeVersion(){
    if (function_exists('ioncube_loader_iversion')) {
        $liv = ioncube_loader_iversion();
        $lv = sprintf("%d.%d.%d", $liv / 10000, ($liv / 100) % 100, $liv % 100);
        return $lv;
    }else{
        return '';
    }
}

echo "<div id='leftColumn'>";
    echo "<h1>AJAX-ZOOM Demo Installation</h1>";
    
    // This info is for AJAX-ZOOM team if you ask us to look why AJAX-ZOOM does not work for you
    echo 'PHP: ' . PHP_VERSION .'<br>';
    echo 'OS: ' . PHP_OS .'<br>';
    echo 'Safe mode: ' . (ini_get('safe_mode') ? 'true' : 'false').'<br>';
    echo 'Sapi: ' . PHP_SAPI .'<br>';
    if (getIonCubeVersion()){
         echo 'Ioncube loader version: '. getIonCubeVersion().'<br>';
    }
    
    if (ini_set ("memory_limit", "128M") === false){
        echo '<span style="color: red">Warning: AJAX-ZOOM will be not able to change memory_limit with ini_set() and make image tiles for very large images</span><br>';
    } 
    
    if (ini_set ("max_execution_time", "90") === false){
        echo '<span style="color: red">Warning: AJAX-ZOOM will be not able to set max_execution_time with ini_set() dynamically and make image tiles for very large images </span><br>';
    }
    
    if (defined('PHALANGER') && file_exists('readme.ASP.NET.txt')){
        echo "<h2>readme.ASP.NET.txt</h2>";
        echo "<div>";
        echo readtxt('readme.ASP.NET.txt');
        echo "</div>";
    }

    echo "<h2>Readme.txt</h2>";
    echo "<div class='readme'>";
    if (file_exists('readme.txt')){
        echo readtxt('readme.txt');
    } else if (file_exists(dirname(__FILE__).'/axZm/readme.txt')){
        echo readtxt(dirname(__FILE__).'/axZm/readme.txt');
    } else{
        echo 'readme.txt is not present...';
    }
    echo "</div><br><br>";

    // Some tests
    $error = '';
    $warning = '';
    $info = '';
    
    if (!defined('PHALANGER')){
        $php_version = phpversion();
        
        if (intval($php_version) < 5){
            $error = '<li>You need PHP 5 to run AJAX-ZOOM. Currently you are running PHP version: '.$php_version.'</li>';
        }
        if (!function_exists('gd_info')){
            $error .= '<li>GD Lib is not installed on your server. AJAX-ZOOM needs it to operate properly.</li>';
        }
        
        $extensions = get_loaded_extensions();
        $ionCube = false;
        $gettext = false;
    
        foreach ($extensions as $k=>$v){
            if (stristr($v, 'ioncube')){
                $ionCube = true;
            }

            if (stristr($v, 'gettext')){
                $gettext = true;
            }
        }
    
        if (!$ionCube){
            if (!ini_get('enable_dl')){
                $error .= '<li>It seems that ionCube is not installed and 
                because dynamically loaded extensions aren\'t enabled it is essential to take care about this problem!!! 
                </li>';
            }else{
                $error .= '<li>It seems that ionCube is not installed on your server. ';
            }
            
            $error .= "
                Please make sure Ioncube is installed. You can download the loaders and 
                the \"Loader Wizard\" (PHP script to help with installation) for free at 
                <a href='http://www.ioncube.com/loaders.php' target='_blank'>http://www.ioncube.com/loaders.php</a>
            ";
            
            $error .= '</li>';
        }else{
            // check ioncube version
            $ionCubeVersion = getIonCubeVersion();
            if (version_compare($ionCubeVersion, '4.0', '<')){
                $error .= "<li>You Ioncube loader version () is too old. Please install a newer version.
                </li>";
            }
        }
        
        if (!$gettext){
            $warning .= '<li>For some options "gettext" is needed to be installed on the server.
            </li>';
        }
        
        if ($error){
            echo "<h2>Error</h2>";
            echo "<div style='padding: 3px; margin: 5px 0px 5px 0px; border: red 5px solid' class='rbox'><ul>$error</ul></div>";
        }    
    
        if ($warning){
            echo "<h2>Warning</h2>";
            echo "<div style='padding: 3px; margin: 5px 0px 5px 0px; border: orange 5px solid' class='rbox'><ul>$warning</ul></div>";
        }        
    
        if ($info){
            echo "<h2>Info</h2>";
            echo "<div style='padding: 3px; margin: 5px 0px 5px 0px; border: gray 5px solid' class='rbox'><ul>$info</ul></div>";
        }
    }
    
    if (!$error){
        echo "<h2>Congratulations</h2>";
        echo '<div style="padding: 10px; margin: 5px 0px 5px 0px; border: green 5px solid" class="rbox">
        AJAX-ZOOM should run on this server. In case You get an error stating, 
        that images could not be found or broken layout, 
        please open /axZm/zoomConfig.inc.php and set these options manually:<br><br>
        <ul>
            <li><a href="http://www.ajax-zoom.com/index.php?cid=docs#installPath" target="_blank">$zoom[\'config\'][\'installPath\']</a><br><br>
                Replace:<br>
                $zoom[\'config\'][\'installPath\'] = $axZmH->installPath();<br><br>
                with:<br>
                $zoom[\'config\'][\'installPath\'] = \'\';<br>
                or if the path to your application is \'/shop\', then set:
                $zoom[\'config\'][\'installPath\'] = \'/shop\';<br><br>
            </li>
            
            <li><a href="http://www.ajax-zoom.com/index.php?cid=docs#fpPP" target="_blank">$zoom[\'config\'][\'fpPP\']</a><br><br>
            Server root path to www directory, 
            e.g. \'/srv/www/htdocs/web123\' or \'/home/yourdomain/public_html\'. 
            Usually it is $_SERVER[\'DOCUMENT_ROOT\']; without slash at the end. 
            Set this option manually if it does not produce correct results!<br><br>
            </li>
            
            <li><a href="http://www.ajax-zoom.com/index.php?cid=docs#rewriteBase" target="_blank">$zoom[\'config\'][\'rewriteBase\']</a><br><br>
            Ver. 4.2.11+ remove a part of the string (path) passed to AJAX-ZOOM from an application. 
            Usefull if e.g. rewriteBase in htaccess is set the way that AJAX-ZOOM gets wrong paths for images 
            e.g. Bitnami Magento and XAMPP on localhost, the path in the browser is 
            http://192.168.178.27/magento, then the setup for making AZ extension work would be: <br>
            $zoom[\'config\'][\'fpPP\'] = \'C:/xampp/apps/magento/htdocs\';<br>
            $zoom[\'config\'][\'urlPath\'] = \'/magento/js/axzoom\';<br>
            $zoom[\'config\'][\'rewriteBase\'] = \'/magento\';<br>
            </li>   
        </ul>
        <br>
        ';
        
        if ( ini_get('safe_mode') ){
            echo '<div class="rbox" style="border: 5px solid red; padding: 10px; font-size: 120%">
            Attention - PHP "Safe Mode" is enabled!<br><br>One known issue with safe_mode is that when AJAX-ZOOM creates subfolders and tries to put image tiles for each image in them, 
            the subfolders are created, but because of save_mode turned on it is not allowed to write in them. 
            You could try to solve this problem by changing the owner of AJAX-ZOOM files and folders. Mostly the FTP owner and PHP owner are different.
            </div><br><br>';
        }
        
        echo '</div>';
        
        echo '<h3>Reading this will save your time and protect your nerves</h3>';
        echo 'Each example in the download package uses a special configuration options set. 
        Default options in "/axZm/zoomConfig.inc.php" are overridden in "/axZm/zoomConfig<b>Custom</b>.inc.php" which is included at the bottom of "zoomConfig.inc.php". 
        This happens by passing an extra parameter "<b>example=</b>[some value]" to AJAX-ZOOM directly from examples or plugins over query string. 
        To find out which "example" value is used see sourcecode of the implementation in question or inspect 
        an ajax call to "/axZm/zoomLoad.php" with Firebug or an other developer tool. 
        Thus your specific options set can be found in "zoomConfigCustom.inc.php" after elseif ($_GET[\'example\'] == [some value]){. 
        Please note that the value of example parameter passed over the query string to AJAX-ZOOM does <b>not</b> correspond to the number of an example 
        found in /examples folder of the download package. 
        <br><br>
        Because AJAX-ZOOM is updated very frequently and its options base grows accordingly, 
        the best practice is to copy options you need to change from "zoomConfig.inc.php" to "zoomConfigCustom.inc.php" 
        after elseif ($_GET[\'example\'] == [some value]). Ofcourse you can create your own [some value] in "zoomConfigCustom.inc.php". 
        By keeping "zoomConfig.inc.php" as it is ($zoom[\'config\'][\'licenceKey\'] and $zoom[\'config\'][\'licenceType\'] can be copied as well 
        at the beginning of zoomConfigCustom.inc.php before the if statement to serve all examples) 
        you will be able to update your customized implementation by simply overwriting all files except "zoomConfigCustom.inc.php" and custom css file. 
        <br><br>
        Ver. 4.3.1+ you can also create zoomConfigCustomAZ.inc.php file and place it outside of /axZm directory (same level). 
        This way you could place your custom configurations in this file and overwrite whole /axZm directiry during future updates.
        <br><br>
        
        <h3>Skinning:</h3>
        In order to change the button template into your own (skin AJAX-ZOOM) 
        simply set <a href="http://www.ajax-zoom.com/index.php?cid=docs#buttonSet" target="_blank">$zoom[\'config\'][\'buttonSet\']</a> option,  
        create a subfolder under /axZm/icons/[yourTemplate] and put your buttons into it (copy them from /axZm/icons/default at first). 
        Also create a new CSS file in /axZm/styles/[yourTemplate]/style.css; If needed adjust the width and height of the buttons 
        (w and h keys) by editing corresponding $zoom[\'config\'][\'icons\'] array, <br>e.g. 
        $zoom[\'config\'][\'icons\'][\'pan\'] = array(\'file\'=>\'zoombutton_pan\', \'ext\'=>\'jpg\', 
        \'w\'=><span style=\'color: red\'>31</span>, \'h\'=><span style=\'color: red\'>31</span>); <br><br>
        For CSS colors an so on you can change <a href="http://www.ajax-zoom.com/index.php?cid=docs#themeCss" target="_blank">$zoom[\'config\'][\'themeCss\']</a> option; 
        If you want to create your own, e.g. "green", create subdirectory /axZm/themes/green and place axZm_green.css into this folder. 
        You could copy / rename CSS file from e.g. /axZm/themes/white and then change the colors of your axZm_green.css; 
        Do not forget to set $zoom[\'config\'][\'themeCss\'] = \'green\'; then...  <br><br>
        Important: in the CSS file (/axZm/axZm.css) please do not add any width, height, margin or other "px" values, 
        unless they are already present there and You just want to change them! Since/axZm/axZm.css is updated from time to time as well, 
        you can override CSS classes in /axZm/axZmCustom.css (add !important if needed) and / or in 
        /axZm/styles/default/style.css; The default style is "default". <br><br>
        ';
        
        echo "<h3>360 & 3D info</h3>";
        echo '
        
        <b>VERY IMPORTANT THINGs TO TAKE ACCOUNT OF WITH 360 OR 3D</b><br>
        Every image must have an unique filename!!! This is also the case if images are prepared for completely different 360s or 3D; 
        If all your source images happen to have the same filenames (e.g. spin001.jpg, spin002.jpg, [...], spin036.jpg), 
        you could then prefix each image of a spin e.g. with the product ID or something else logical 
        to ensure this uniqueness, e.g.<br>
        
        /360_source_images/123/123_spin001.jpg, <br>
        /360_source_images/123/123_spin002.jpg, <br>
        /360_source_images/123/123_spin003.jpg, <br>
        [...], <br>
        /360_source_images/123/123_spin036.jpg <br>
        <br><br>
        
        <b>3D (MULTIROW / SPHECICAL)</b><br>
        The only difference between regular 360 spin and multirow is that original images are placed in subfolders of the target folder. 
        E.g. the path along with the example parameter passed to AJAX-ZOOM is "example=spinIpad&3dDir=/pic/zoomVR/nike"; 
        Now if it is 3D (multirow) and not 360, then images of each row are placed in subfolders of the target 3dDir parameter, 
        e.g. /pic/zoomVR/nike/0, /pic/zoomVR/nike/15, /pic/zoomVR/nike/30, /pic/zoomVR/nike/45, 
        /pic/zoomVR/nike/60, /pic/zoomVR/nike/75, /pic/zoomVR/nike/90; 
        It is not important how these subfolders are named (e.g. it could be row1, row2 ...) and you also do not need to define these subfolder names anywhere. 
        AJAX-ZOOM will instantly detect them and process all the images in them. For more info and visualization of the 
        file structure see example28.php <br><br>
        ';
        
        echo "<h3>Batch processing images</h3>";
        echo "AJAX-ZOOM is designed to create all needed images like thumbs and tiles on-the-fly. 
        However if you have thousands of images it is a good idea to batch process all existing images planned to be shown over AJAX-ZOOM before launching it. 
        This can be done in <a href='axZm/zoomBatch.php'>/axZm/zoomBatch.php</a>; in order to access this file you will need to open it with 
        an editor and set your personal password in it.
        ";
        
        echo "<br><br>
        <div style='text-align: right;'>Have fun with AJAX-ZOOM.</div>";
        
        
    }
    
echo '</div>';

echo '<div id="rightColumn">';
    echo "<h1>Local Examples</h1>";
    echo "<p>Local examples do not contain high-resolution images. 
        Please find these and other examples with high-resolution images at <br>".makeLink('http://www.ajax-zoom.com/index.php?cid=examples')." 
    </p>
    ";
    echo "<div class='clearfix' style='margin-right: -6px'>
    ";
    
        $files = scandir('examples');
        $files = natIndex($files, false);
        $prevNum = '';
        $num = '';
        $n = 0;
        if (!empty($files)){
            foreach (array_reverse($files, true) as $k=>$file){
            if (strstr($file,'example') && strstr($file,'php')){
                if ($num){$prevNum = $num;}
                $num = intval(str_replace(array('example','.php'),'',basename($file)));

                $n++;

                $bbb = explode('_',basename($file),2); 
                if (isset($bbb[1])){$bbb[1] = str_replace('.php','',$bbb[1]);}
                
                if (isset($bbb[1])){$thumbName = 'image-zoom_'.$num.'_'.$bbb[1].'.jpg';}
                else {$thumbName = 'image-zoom_'.$num.'.jpg';}
                
                $exampleThumb = checkRemoteFile('http://www.ajax-zoom.com/pic/layout/'.$thumbName);
                $isVario = basename($file) == 'example33_vario.php';
                
                echo "<a href='examples/".basename($file).($isVario ? '?zoomDir=/pic/zoom/animals' : '')."' target='_blank' style='display: block; float: left' class='rbox'>
                <div id='example__".$n."' class='exampleImg shadow'>
                    <div class='exampleHead shadow'>".basename($file)."</div>
                </div>
                </a>";
                ?>
                <script type="text/javascript">
                    $('<img>')
                    .load(function(){$('#example__<?php echo $n;?>').css('background-image', 'url(<?php echo $exampleThumb;?>)')})
                    .error(function(){
                        $('#example__<?php echo $n;?>').css('background-image', 'url(http://www.ajax-zoom.com/pic/layout/image-zoom_chrome.jpg)')
                    })
                    .attr('src', '<?php echo $exampleThumb;?>')
                </script>
                <?php
            }
        }
    }
    echo "</div>";
    
     
    echo '<div style="height: 100px"></div>';
     
    
echo '</div>';
?>
<script>
	if (document.location.hostname == 'localhost'){
		setTimeout(function(){
			alert('You are using "localhost"! \n\nThis might cause problems like jerky behaviour / animations and AJAX-ZOOM not functioning correctly in general.\nPlease use 127.0.0.1 instead!');
		}, 3000);
	} 
</script>
</body>
</html>