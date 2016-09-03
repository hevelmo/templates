<?php error_reporting(0);?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>Other examples</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<!-- jQuery core, needed if not already present! -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<!-- Include axZm.thumbSlider plugin -->
<link rel="stylesheet" href="../axZm/extensions/axZmThumbSlider/skins/default/jquery.axZm.thumbSlider.css" type="text/css" />
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="../axZm/extensions/axZmThumbSlider/lib/jquery.axZm.thumbSlider.js"></script>

<style type="text/css"> 
	html {font-family: Tahoma, Arial; font-size: 10pt;}
	body {margin: 0 <?php echo isset($_GET['footerMargin']) ? $_GET['footerMargin'] : 0; ?>px 0 <?php echo isset($_GET['footerMargin']) ? $_GET['footerMargin'] : 0; ?>px; padding: 0; overflow: hidden;}
	.moreExamples{
	    color: #1a4a7a;
	    font-size: 18px;
		font-family: Arial;
		font-weight: bold;
	    margin: 0 0 5px 0;
	    padding-left: 0px;
	}
	.axZmThumbSlider div.label{
		font-size: 10px;
	}
	.axZmThumbSlider li img.thumb{
		margin-bottom: 10px;
		border: #CCCCCC 1px solid;
	}
	
	.axZmThumbSlider_scrollbar.horizontal .track {
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		border-radius: 5px;
	}
</style>
<script type="text/javascript">

</script>

</head>
<body unselectable="on">
	<?php
		if (!function_exists('natIndex')){function natIndex($array, $reverse){
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
		}}
		
		if (!function_exists('checkRemoteFile')){function checkRemoteFile($url){
			return $url;
			$isLocalhost = ($_SERVER['HTTP_HOST'] == 'localhost') || substr($_SERVER['HTTP_HOST'], 0, 3) == '127' || substr($_SERVER['HTTP_HOST'], 0, 3) == '192';
			if (!$isLocalhost && function_exists('curl_version')){
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
		}}
	?> 
	<div style="height: 20px;"></div>
	<div class="moreExamples" style="<?php echo (isset($_GET['sliderWidth']) ? ('width: '.$_GET['sliderWidth'].'; margin: 0 auto;') : '100%;')?>">Other AJAX-ZOOM examples</div>
	<div id="slider1" style="width: <?php echo (isset($_GET['sliderWidth']) ? ($_GET['sliderWidth'].'; margin: 0 auto;') : '100%;')?> height: 125px; position: relative;">
		<ul style="display: none">
			<?php
		
				$files = scandir(dirname(__FILE__));
				$files = natIndex($files, false);
				$prevNum = '';
				$num = '';
				$n = 0;
				
				if (!empty($files)){
					foreach ($files as $k=>$file){
						if (strstr($file,'example') && strstr($file,'php')){
							if ($num){$prevNum = $num;}
							$num = intval(str_replace(array('example','.php'),'',basename($file)));
							

							$n++;
							if (intval($n/3) == $n/3){
								$rightMargin = '; margin-right: 0;';
							}else{
								$rightMargin = '';
							}
							$bbb = explode('_',basename($file),2); 
							if (isset($bbb[1])){$bbb[1] = str_replace('.php','',$bbb[1]);}
							
							if (isset($bbb[1])){$thumbName = 'image-zoom_'.$num.'_'.$bbb[1].'.jpg';}
							else {$thumbName = 'image-zoom_'.$num.'.jpg';}
							
							$exampleThumb = checkRemoteFile('http://www.ajax-zoom.com/pic/layout/'.$thumbName);
							$isVario = basename($file) == 'example33_vario.php';
							
							echo "<li id=\"thumb_".basename($file, ".php")."\" onclick=\"parent.location.href='".basename($file).($isVario ? '?zoomDir=/pic/zoom/animals' : '')."'\"><img src='".$exampleThumb."'><div class=\"label\">".basename($file)."</div></li>";
						
						}
					}
				}
			?>
		</ul>
	</div>
		    
	<script type="text/javascript">
	$('#slider1').axZmThumbSlider({
		thumbLiStyle: {
			//backgroundSize: 'contain', //contain, cover
			width: 160, 
			height: 105,
			lineHeight: '85px',
			borderRadius: 0
		},
		thumbImgStyle:{
			width: 150,
			height: 85,
			marginBottom: 10
		},
		btnBwdStyle: {
			borderRadius: 0,
			lineHeight: '125px',
			//borderLeftWidth: 0,
			width: 30
		},
		btnFwdStyle:{
			borderRadius: 0,
			lineHeight: '125px',
			//borderRightWidth: 0,
			width: 30
		},
		scrollbarMargin: 100,
		scrollbarOffset: 15,
		scrollbarIdleOpacity: 0,
		scrollbarOpacity: 1,
		wrapStyle: {
			backgroundColor: '#FFF'
		},
		debugNumbers: false,
		scrollbar: true,
		firstThumb: $('#thumb_<?php echo basename($_GET['ref'], '.php');?>'), 
		firstThumbPos: 'middle',
		firstThumbTriggerClick:	false, 
		firstThumbHighlight: true 
	});		
	</script>
</body>
</html>