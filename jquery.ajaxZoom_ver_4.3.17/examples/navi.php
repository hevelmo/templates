<?php
error_reporting(0);
if (!function_exists('natIndex')){
	function natIndex($array, $reverse){
		$i=1; $nArray=array(); natcasesort($array); if ($reverse){$array = array_reverse($array);} foreach ($array as $k=>$v){$nArray[$i]=$v;$i++;} return $nArray;
	}
}

$serverhost = $_SERVER['HTTP_HOST'] ? $_SERVER['HTTP_HOST'] : $_SERVER['SERVER_NAME']; $isAjaxZoomCom = strpos($serverhost, 'ajax-zoom.com'); if (!isset($_SESSION['referer']) && isset($_SERVER['HTTP_REFERER'])){$_SESSION['referer'] = $_SERVER['HTTP_REFERER'];} 
$prevFile = false; $nextFile = false; $filesExamples = scandir(dirname(__FILE__)); $filesExamples = natIndex($filesExamples, false); $arrayExamples = array(); $currentExample = basename($_SERVER['PHP_SELF']); $currentIndex = 0; $n = 0;

if (!empty($filesExamples)){foreach ($filesExamples as $k=>$file){$baseName = basename($file); if (!stristr($baseName, 'vario')){if (strstr($file,'example') && strstr($file,'.php')){ $n++; $arrayExamples[$n] = $baseName; if ($currentExample == $baseName){$currentIndex = $n;}}}}}
if (isset($arrayExamples[$currentIndex-1])){$prevFile = $arrayExamples[$currentIndex-1];}
if (isset($arrayExamples[$currentIndex+1])){$nextFile = $arrayExamples[$currentIndex+1];}
if ($prevFile){$prevButton = "<a href='".$prevFile."'><img src='../axZm/icons/previous-icon-48.png' border='0' width='48' height='48' alt='".$prevFile."' title='".$prevFile."'></a>";}
else {$prevButton = "<img src='../axZm/icons/previous-icon-48-disabled.png' border='0' width='48' height='48'>";}

if ($nextFile){$nextButton = "<a href='".$nextFile."'><img src='../axZm/icons/next-icon-48.png' border='0' width='48' height='48' alt='".$nextFile."' title='".$nextFile."'></a>";}
else {$nextButton = "<img src='../axZm/icons/next-icon-48-disabled.png' border='0' width='48' height='48'>";}

if (!isset($displayHome)){
	if ($isAjaxZoomCom){
		$homeButton = "<a href='http://www.ajax-zoom.com/examples/'><img src='../axZm/icons/overview_48x48.png' border='0' width='48' height='48' style='margin-left:25px' alt='Examples overview' title='Examples overview'></a>";
	}else{
		$homeButton = "<a href='index.php'><img src='../axZm/icons/overview_48x48.png' border='0' width='48' height='48' style='margin-left:25px' alt='Overview (index.php)' title='Overview (index.php)'></a>";
	}
	
	if ($isAjaxZoomCom){
		$homeButton .= "<a href='http://www.ajax-zoom.com/index.php?cid=download'><img src='../axZm/icons/download_48x48.png' border='0' width='48' height='48' style='margin-left:5px' alt='Download' title='Download'></a>";
	} else{
		$homeButton .= "<a href='http://www.ajax-zoom.com/index.php?cid=download' target='_blank'><img src='../axZm/icons/buy_48x48.png' border='0' width='48' height='48' style='margin-left:5px' alt='Buy / Download' title='Buy / Download'></a>";
	}
	
	$homeButton .= "<a href='http://www.ajax-zoom.com/index.php?cid=contact'><img width='48' height='48' border='0' title='Ask a question' alt='Ask a question' style='margin-left: 5px' src='../axZm/icons/support_48x48.png'></a>";

	
}else{
	$homeButton = '';
}

$backgroundColor = '#808080';
$fullscreenExamples = array('example23');
foreach($fullscreenExamples as $k=>$v){if (stristr($currentExample, $v) || stristr($currentExample, 'fullscreen')){$backgroundColor = 'transparent';}}


echo "<DIV style='clear: both; height: 58px; background-color: $backgroundColor; width: 100%;'><DIV style='float: left; width: 230px; padding: 5px 0px 0px 5px'>$prevButton$homeButton</DIV><DIV style='float: right; width: 53px; padding: 5px 0px 0px 0px'>$nextButton</DIV></DIV>";

?>