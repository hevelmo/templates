<?php
$filename = 'Anun-Fast Start-V2-ene-Excelsior-RSVP-23.93x26_adaptado.pdf';
$content = file_get_contents($filename);
$file_content = base64_encode($content);
echo($file_content);

