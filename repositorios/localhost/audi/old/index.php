<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="es" class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html lang="es" class="no-js lt-ie10"> <![endif]-->
<html class="no-js" lang="es">
	<head>
        <meta name="fragment" content="!">
        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <meta http-equiv='cache-control' content='no-cache' />
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />

		<meta class="temp" name="description" content=""/>
		<meta class="temp" name="copyright" content="© Copyright 2016 Chicotes Automotrices Gómez">
		<meta class="temp" name="robots" content="index, follow">
		<link class="temp" rel="alternate" hreflang="es" href="" />

		<title id="head-change-section-title">Audi Guadalajara</title>

        <link href='http://fonts.googleapis.com/css?family=Ubuntu:700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto:100,300,700' rel='stylesheet' type='text/css'>
        <link href="http://fonts.googleapis.com/css?family=Roboto:100,400,300,700,400italic,500%7CMontserrat:400,700" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400,300,700" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Roboto:100,400,300,700,400italic,500%7CMontserrat:400,700" rel="stylesheet" type="text/css">
        <?php /*
        <link rel="stylesheet" href="css/styles.min.css">
        */ ?>
        <link rel="stylesheet" href="css/styles.css">

        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <!-- Google Analytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-88259451-1', 'auto');
            ga('send', 'pageview');

        </script>
        <script>
            var nav = navigator.appName;

            if(nav == "Microsoft Internet Explorer"){
                // Detectamos si nos visitan desde IE
                if(nav == "Microsoft Internet Explorer"){
                    // Convertimos en minusculas la cadena que devuelve userAgent
                    var ie = navigator.userAgent.toLowerCase();
                    // Extraemos de la cadena la version de IE
                    var version = parseInt(ie.split('msie')[1]);

                    // Dependiendo de la version mostramos un resultado
                    switch(version){
                        case 6:
                            alert("Estas usando IE 6, es obsoleto. \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        case 7:
                            alert("Estas usando IE 7, es obsoleto \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        case 8:
                            alert("Estas usando IE 8, es obsoleto \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        /*case 9:
                            alert("Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v10 y v11 ");
                            console.log("Estas usando IE 9, mas o menos compatible");
                            break;*/
                        default:
                            console.log("Usas una version compatible");
                            break;
                    }
                }
            }
        </script>
    </head>
    <body id="index">
        <div id="inicio"></div>
        
        <!-- Auxiliar Temporal Inputs's DIV -->
        <div id='hidden-inputs-session'></div>
        
        <!-- Auxiliar Temporal Inputs's DIV -->
        <div id='hidden-inputs-temporal'>
            <input type="hidden" id="hidden_model_name" value="">
            <input type="hidden" id="hidden_model_key" value="">
            <input type="hidden" id="hidden_agencie_name" value="">
            <input type="hidden" id="hidden_agencie_key" value="">
        </div>

        <!-- Template navbar -->
        <div class="wrapper_content_navbar" id='content-temporal-site-header'></div>

        <!-- Templates's DIV -->
        <div class="wrapper_content_interactive" id='content-temporal-interactive'></div>

        <!-- Footer -->
        <div class="main-container _content" id="header">
            <!-- Begin: Footer container -->
            <footer class="footer-2" style="background-color: transparent; clear: both;">
                <div class="container">
                    <div class="row">
                        <!--
                        <div class="col-sm-6">
                            <a href="#/">
                                <img alt="logo" class="logo" src="img/logo/chicotes-automotrices-gomez.gif">
                            </a>
                            <span class="tagline"></span>
                        </div>
                        -->

                        <div class="col-sm-12 text-center">
                            <!--
                            <ul class="social-links">
                                <li>
                                    <div class="log-medigraf" style="margin-top: 15px;">
                                        <a id="get-icon-corp-medigraf-event-ga" href="http://medigraf.com.mx" target="_blank" class="inline-block">
                                            <div class="medigraf"></div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="toolbar-icon-social">
                                        <a class="icon-social bg-icon-color-facebook" href="https://www.facebook.com/CamcarMexico" target="_blank">
                                            <i class="icon-color fa fa-facebook"></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="toolbar-icon-social">
                                        <a class="icon-social bg-icon-color-twitter" href="https://twitter.com/CamcarMexico" target="_blank">
                                            <i class="icon-color fa fa-twitter"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            -->
                        </div>
                    </div><!--end of row-->

                    <div class="row">
                        <div class="col-xs-12 text-center">
                            <div class="footer-lower">
                                <span class="copyright text-font"><i class="fa fa-copyright"></i> Audi Guadalajara.</span>
                            </div>
                            <!--<div class="footer-lower pull-right">
                                <span class="copyright text-font">
                                    <a id="go-privacy-news" title="Aviso de Privacidad" alt="Aviso de Privacidad">Aviso de privacidad</a>
                                </span>
                            </div>-->
                        </div>
                    </div><!--end of row-->
                </div><!--end of container-->
            </footer>
            <!--   End: Footer container -->
        </div>

        <!-- MAIN -->
        <script src="lib/jquery.js"></script>
        <script src="lib/modernizr.js"></script>
        <script src="lib/bootstrap.js"></script>
        <!-- CORE -->
        <script src="lib/jquery.gdb.js"></script>

        <script src="lib/jquery-ui.js"></script>
        <script src="lib/underscore.js"></script>
        <script src="lib/moment.js"></script>
        <script src="lib/accounting.js"></script>
        <script src="lib/finch.js"></script>
        <!-- HANDLEBARS -->
        <script src="lib/handlebars.runtime.js"></script>
        <!-- TEMPLATES -->
        <script src='templates/min/templates.min.js'></script>
        <!-- FORMS -->
        <script src="lib/forms.js"></script>
        <script src="lib/sha512.js"></script>

        <!-- Plugins -->
        <script src="lib/herocarousel/jquery.herocarousel-plugins.js"></script>
        <script src="lib/plugins/jquery.sticky.js"></script>
        <script src="lib/plugins/jquery.scrollTo.js"></script>
        <script src="lib/plugins/jquery.easing.1.3.js"></script>
        <script src="lib/plugins/bootstrap-select.js"></script>
        <script src="lib/plugins/isotope.js"></script>
        <script src="lib/plugins/jquery.appear.js"></script>
        <script src="lib/plugins/jquery.countTo.js"></script>
        <script src="lib/plugins/superfish.js"></script>
        <script src="lib/plugins/jquery.nav.js"></script>
        <script src="lib/plugins/waypoints.js"></script>
        <script src="lib/plugins/waypoints-sticky.js"></script>
        <script src="lib/plugins/wow-animated.js"></script>
        <script src="lib/plugins/jquery.smooth-scroll.js"></script>

        <script src="lib/flexslider/jquery.flexslider.js"></script>

        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCqo-F2TnMAABZvfV5yTQLlWvUCJlJViU&amp;sensor=false"></script>

        <!-- CORE JS -->
        <?php /*
        <script src='js/min/core.min.js'></script>
        */ ?>
        <script src='js/objects.js'></script>
        <script src='js/method.js'></script>
        <script src='js/model.js'></script>
        <script src='js/room.js'></script>
        <script src='js/required.js'></script>
        <script src='js/main.js'></script>
    </body>
</html>