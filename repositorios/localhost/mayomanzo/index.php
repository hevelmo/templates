<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="es" class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html lang="es" class="no-js lt-ie10"> <![endif]-->
<html class="no-js" lang="es">
	<head>
        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />

        <!-- TITLE OF SITE -->
		<title>Mayo Manzo</title>

	    <meta class="temp" name="description" content="" />
        <meta class="temp" name="copyright" content="© Copyright 2016 Mayo Manso" />
        <meta class="temp" name="robots" content="index, follow" />
        <link class="temp" rel="alternate" hreflang="es-MX" href="" />

        <!-- FAVICON  -->
	    <!-- Place your favicon.ico in the images directory -->
	    <link rel="shortcut icon" href="img/ico/mayomanzo-white.ico" type="image/x-icon">
	    <link rel="icon" href="img/ico/mayomanzo-white.ico" type="image/x-icon">

	    <!-- STYLESHEETS  -->
	    <!-- IMPORT CSS -->
        <link rel="stylesheet" href="css/import.css">
        <?php /*
		<link rel="stylesheet" href="css/styles.css">
        */?>

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	    <![endif]-->

	    <!-- ANALYTICS -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-81140741-1', 'auto');
            ga('send', 'pageview');

        </script>

	    <!-- NAV DETECT -->
	    <script>
            var nav = navigator.appName;

            if(nav == "Microsoft Internet Explorer"){
                //Detectamos si nos visitan desde IE
                if(nav == "Microsoft Internet Explorer"){
                    //Convertimos en minusculas la cadena que devuelve userAgent
                    var ie = navigator.userAgent.toLowerCase();
                    //Extraemos de la cadena la version de IE
                    var version = parseInt(ie.split('msie')[1]);

                    //Dependiendo de la version mostramos un resultado
                    switch(version){
                        case 6:
                            alert("El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.");
                            break;
                        case 7:
                            alert("El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.");
                            break;
                        case 8:
                            alert("El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.");
                            break;
                        /*
                        case 9:
                            alert("El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.");
                            //console.log("Estas usando IE 9, mas o menos compatible");
                            break;
                        */
                        default:
                            //console.log("Usas una version compatible");
                            break;
                    }
                }
            }
        </script>
	</head>

	<body>
		<!-- Auxiliar Temporal Inputs's DIV -->
    	<div id='hidden-inputs-session'></div>

    	<!-- Auxiliar Temporal Inputs's DIV -->
    	<div id='hidden-inputs-temporal'></div>

		<!-- tp-header -->
    	<div class="wrapper_content_interactive_top_header" id='content-temporal-top-header'></div>
		<!-- /.tp-header -->

		<!-- tp navigation -->
    	<div class="wrapper_content_interactive_navbar" id='content-temporal-navbar'></div>
		<!-- /.tp navigation -->

		<!-- tp-slider -->
    	<div class="wrapper_content_interactive_slider" id='content-temporal-slider'></div>
		<!-- /.tp-slider -->

		<!-- tp service section -->
		<!--Templates's DIV-->
    	<div class="wrapper_content_interactive" id='content-temporal-interactive'></div>
		<!-- /.tp service section -->

		<!-- tp footer -->
    	<div class="wrapper_content_interactive_footer" id='content-temporal-footer'></div>
		<!-- /.tp footer -->

		<!-- tp tiny footer -->
		<div class="tp-tiny-footer"><!-- tp tiny footer -->
			<div class="container">
				<div class="row">
					<div class="col-md-5">
						<p>© 2016. Mayo Manzo.</p>
					</div>
					<div class="col-md-7"><!-- social media icon -->
						<!--<ul class="social-icon-ft pull-right">
							<li><a href="https://www.facebook.com/Mayo-Manzo-Cirug%C3%ADa-Pl%C3%A1stica-622138891222247/" target="_blank"><i class="fa fa-facebook-square"></i></a></li>
							<li><a href="https://twitter.com/mayomanzo" target="_blank"><i class="fa fa-twitter-square"></i></a></li>
						</ul>-->
					</div>
					<!-- social media icon -->
				</div>
			</div>
		</div>
		<!-- /.tp tiny footer -->

		<!-- back to top -->
		<a href="#" class="top" style="background-color:#7D1808;">Top</a>
		<!-- /.back to top -->

		<!-- SCRIPTS -->
		<?php /*
        <script src="lib/assets/jquery-1.11.2.js"></script>
        <script src="lib/assets/bootstrap.js"></script>
        <script src="lib/assets/jquery.easing.1.3.js"></script>
        <script src="lib/assets/jquery.gdb.js"></script>
        <script src="lib/assets/jquery-ui.js"></script>
        <script src="lib/assets/underscore.js"></script>
        <script src="lib/assets/handlebars.runtime.js"></script>
        <script src="lib/assets/moment.js"></script>
        <script src="lib/assets/accounting.js"></script>
        <script src="lib/assets/finch.js"></script>
        <!-- FORMS -->
        <script src="lib/assets/forms.js"></script>
        <script src="lib/assets/sha512.js"></script>
        <!-- Plugins -->
        <script src="lib/assets/plugins/jquery.flexslider.js"></script>
        <script src="lib/assets/plugins/owl.carousel.js"></script>
        <script src="lib/assets/plugins/ripples.js"></script>
        <script src="lib/assets/plugins/material.js"></script>
        <script src="lib/assets/plugins/jquery.sticky.js"></script>
        <script src="lib/assets/plugins/waypoints.js"></script>
        <script src="lib/assets/plugins/waypoints-sticky.js"></script>
        */ ?>
        <script src="lib/assets/min/core.lib.min.js"></script>
        <!-- TEMPLATES -->
        <script src='templates/min/templates.min.js'></script>
        <!-- GOOGLE API -->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCqo-F2TnMAABZvfV5yTQLlWvUCJlJViU&amp;sensor=false"></script>
        <?php /*
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAVsdbsunhRRM-Bfx7eXuF0QJKLDhKrEM&callback=initMap&v=3&sensor=false" type="text/javascript"></script>
        <script src="http://maps.google.com/maps/api/js?v=3&amp;sensor=false" type="text/javascript"></script>
        */ ?>
        <?php /*
        <script src="lib/google.maps/initmap.min.js"></script>
        <!--<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAVsdbsunhRRM-Bfx7eXuF0QJKLDhKrEM&callback=initMap&v=3.24&sensor=false" type="text/javascript"></script>-->
        <!--<script src="https://maps-api-ssl.google.com/maps?file=googleapi&amp;key=AIzaSyBAVsdbsunhRRM-Bfx7eXuF0QJKLDhKrEM&amp;v=2" type="text/javascript"></script>-->
        */ ?>
        
        <!-- CORE JS -->
		<script src='js/min/core.min.js'></script>
        <?php /*
	    <script src='js/objects.js'></script>
	    <script src='js/method.js'></script>
	    <script src='js/model.js'></script>
	    <script src='js/room.js'></script>
        <script src='js/main.js'></script>
	    <script src='js/validate.js'></script>
        */ ?>
    </body>
</html>