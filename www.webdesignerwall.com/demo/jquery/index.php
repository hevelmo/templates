<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Simple Slide Panel</title>
<style>
	* { margin: 0; padding: 0; }
	.wrapper-container {
		overflow: hidden;
	}
	.about-content {
	    width: 100%;
	    /* z-index: 1; */
	    transition: all 0.7s ease;
	    -webkit-transition: all 0.7s ease;
	    -moz-transition: all 0.7s ease;
	    max-width: 1580px;
	    margin: 0 auto;

	    border:  1px solid red;
	}
	.google-maps {
	    height: 500px;
	    position: relative;
	    overflow: hidden;
	    background-color: rgb(229, 227, 223);
	}
	.footer-fixed {
		position: relative;
		z-index: 9999;
		bottom: 0px;
		width: 100%;
		height: 70px;
		padding-top: 0px;
	}
	.dark-footer-fixed {
		background-color: #0c1117;
		border-top: solid 1px rgba(0,0,0,0.1);
	}
	.brands-agencies {
		display: block;
		padding: 20px;
		color: #fff;
	}
</style>

</head>
	<body>
		<div id="content-start-dealer-search-map" class="about-content">
			<div class="wrapper-container">
				<div class="panel-wrapper">
				</div>
				<div class="panel-wrapper-gmap">
					<div id="gmap" class="google-maps"></div>
				</div>
				<div class="tap-brands-bottom-close"></div>
				<div class="tap-brands-bottom tap-brands-bottom-config active-tap-brands-bottom">
				</div>
				<div class="footer-fixed dark-footer-fixed">
					<div class="brands-agencies">
						<a href="" class="show-brands-bottom show-brands-bottom-config">
							logo
						</a>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript">
		$(document).ready(function(){	 
		});
		</script>
	</body>
</html>
