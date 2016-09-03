<?php error_reporting(0);?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<title>AJAX-ZOOM examples overview</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="imagetoolbar" content="no">

<meta property="og:type" content="website"/>
<meta property="og:url" content="http://www.ajax-zoom.com/examples/"/>
<meta property="og:title" content="AJAX-ZOOM examples overview"/>
<meta property="og:description" content="AJAX-ZOOM :: HTML5 360° and zoom player - overview of all examples"/>
<meta name="description" content="AJAX-ZOOM :: HTML5 360° and zoom player - overview of all examples" />
<meta property="og:image" content="http://www.ajax-zoom.com/pic/layout/image-zoom_examples_overview.jpg"/> 

<style type="text/css"> 
	html {font-family: Tahoma, Arial; font-size: 10pt;}
	body {margin: 0; padding: 0;}
	.exampleImg{
		border: #000000 2px solid;
		cursor: pointer;
		margin: 0px 10px 10px 0px;
		overflow: hidden;
		width: 300px;
		height: 169px;
		background-repeat: no-repeat;
		background-position: center;
	}
	
	.rbox{
		/*-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		border-radius: 4px 4px 4px 4px;*/
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
</style>

</head> 
<body>
<div style="clear: both; height: 58px; background-color: #808080; width: 100%;">
	<div style="float: left; width: 300px; padding: 5px 0px 0px 5px">
		<a href="http://www.ajax-zoom.com"><img width="48" height="48" border="0" title="HOME" alt="HOME" style="margin-left: 5px" src="../axZm/icons/home-icon.png"></a>
		<a href="http://www.ajax-zoom.com/index.php?cid=download"><img width="48" height="48" border="0" title="Download AJAX-ZOOM" alt="Download AJAX-ZOOM" style="margin-left: 5px" src="../axZm/icons/download_48x48.png"></a>
		<a href="http://www.ajax-zoom.com/index.php?cid=docs"><img width="48" height="48" border="0" title="Documentaion" alt="Documentaion" style="margin-left: 5px" src="../axZm/icons/docu_48x48.png"></a>
		<a href="http://www.ajax-zoom.com/index.php?cid=contact"><img width="48" height="48" border="0" title="Ask a question" alt="Ask a question" style="margin-left: 5px" src="../axZm/icons/support_48x48.png"></a>
	</div>
</div>

<div style="padding: 10px 0 10px 10px;">
	<h2>AJAX-ZOOM examples overview</h2>
	<?php
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
					if ($bbb[1]){$bbb[1] = str_replace('.php','',$bbb[1]);}
					
					if ($bbb[1]){$thumbName = 'image-zoom_'.$num.'_'.$bbb[1].'.jpg';}
					else {$thumbName = 'image-zoom_'.$num.'.jpg';}
					
					$exampleThumb = checkRemoteFile('http://www.ajax-zoom.com/pic/layout/'.$thumbName);
					$isVario = basename($file) == 'example33_vario.php';
					
					echo "<a href='".basename($file).($isVario ? '?zoomDir=/pic/zoom/animals' : '')."' style='display: block; float: left' class='rbox'>
					<div style='background-image: url(".$exampleThumb.")' class='exampleImg rbox shadow'>
						<div class='exampleHead rbox shadow'>".basename($file)."</div>
					</div>
					</a>";
				}
			}
		}
		
		if (file_exists($_SERVER['DOCUMENT_ROOT'].'/admin/google.php')){
			include($_SERVER['DOCUMENT_ROOT'].'/admin/google.php');
		}
	?>
</div>
</body>
</html>