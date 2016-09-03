<?php
$thumbSliderWidth = isset($sliderWidth) ? '&sliderWidth='.$sliderWidth : '';
echo "<iframe width=\"100%\" height=\"200\" frameborder=\"0\" src=\"nav_thumbs.php?ref=".basename($_SERVER['SCRIPT_FILENAME'])."&footerMargin=".(isset($footerMargin) ? $footerMargin : 0).$thumbSliderWidth."\" allowfullscreen></iframe>";
?>