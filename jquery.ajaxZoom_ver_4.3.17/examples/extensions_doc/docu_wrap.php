<!DOCTYPE html>
<html>
<head>
<title>Docs iframe</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
</head>
<body>
<?php 
	if (isset($_GET['docu'])){
		if (file_exists(dirname(__FILE__).'/docu_'.$_GET['docu'].'.inc.html')){
			include(dirname(__FILE__).'/docu_'.$_GET['docu'].'.inc.html');
		}else{
			echo 'Error 404 file not found';
		}
	}else{
		echo '"docu" query string parameter not passed.';
	}
?>
</body>
</html>