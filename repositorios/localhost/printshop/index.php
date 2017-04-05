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
		<title>Print Shop</title>

	    <meta class="temp" name="description" content="Ofrecemos soluciones integrales a las necesidades específicas de nuestros clientes y los ayudamos a resolverlas con planes estratégicos en las áreas de impresión y marketing." />
        <meta class="temp" name="copyright" content="© Copyright 2016 Print Shop MKT" />
        <meta class="temp" name="robots" content="index, follow" />
        <!--<link class="temp" rel="alternate" hreflang="es-MX" href="" />-->

        <?php /*
        <!-- FAVICON  -->
	    <!-- Place your favicon.ico in the images directory -->
	    <link rel="shortcut icon" href="img/ico/favicon.ico" type="image/x-icon">
	    <link rel="icon" href="img/ico/favicon.ico" type="image/x-icon">
        */ ?>

	    <!-- STYLESHEETS  -->
	    <!-- IMPORT CSS -->
        <link rel="stylesheet" href="css/import.css">
        <?php /*
        <link rel="stylesheet" href="css/styles.css">
        */?>

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if IE]>
        <link rel="stylesheet" href="css/styles/ie.css">
        <![endif]-->
        <!--[if lte IE 8]>
        <script src="lib/assets/plugins/respond.js"></script>
        <![endif]-->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	    <![endif]-->

	    <!-- ANALYTICS -->

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
        <script src="lib/assets/plugins/modernizr.js"></script>
	</head>
	<body>
        <div class="fading-overlay"></div>
        <div id="init-navbar-side-mobile" class="mo-navbar-side-menu">
            <a id="navbar-buton-mobile" class="mob-navbar-button">
                <span class="mob-navbar-icon-mobile">
                    <span class="mob-navbar-icon-bar-mobile"></span>
                    <span class="mob-navbar-icon-bar-mobile"></span>
                    <span class="mob-navbar-icon-bar-mobile"></span>
                </span>
            </a>
            <div class="mob-sidebar-nav-panel mob-sidebar-nav">
                <div class="mob-sidebar-nav-content-block">
                    <div class="mob-sidebar-nav-list-menu">
                        <div class="mob-sidebar-nav-list-group">
                            <nav>
                                <ul>
                                    <li class="deactivated mob-sidebar-nav-item-list-divider">
                                        <a class="deactivated mob-sidebar-nav-item-link mob-sidebar-nav-close-panel mob-sidebar-nav-item-content">
                                            <div class="mob-sidebar-nav-item-media media-right">
                                                <i class="fa fa-times fa-2x"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="deactivated mob-sidebar-nav-item-list" id="menu-holder-home">
                                        <a class="deactivated mob-sidebar-nav-item-link mob-sidebar-nav-close-panel mob-sidebar-nav-item-content" href="#/">
                                            <div class="mob-sidebar-nav-item-media">
                                                <i class="fa fa-home fa-2x"></i>
                                            </div>
                                            <div class="mob-sidebar-nav-item-inner">
                                                <div class="mob-sidebar-nav-item-title">
                                                    Inicio
                                                </div>
                                                <div class="mob-sidebar-nav-item-after"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="deactivated mob-sidebar-nav-item-list" id="menu-holder-about-us">
                                        <a class="deactivated mob-sidebar-nav-item-link mob-sidebar-nav-close-panel mob-sidebar-nav-item-content" href="#/quienes-somos">
                                            <div class="mob-sidebar-nav-item-media">
                                                <i class="fa fa-puzzle-piece fa-2x" aria-hidden="true"></i>
                                            </div>
                                            <div class="mob-sidebar-nav-item-inner">
                                                <div class="mob-sidebar-nav-item-title">
                                                    ¿Quiénes somos?
                                                </div>
                                                <div class="mob-sidebar-nav-item-after"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="deactivated mob-sidebar-nav-item-list" id="menu-holder-services">
                                        <a class="deactivated mob-sidebar-nav-item-link mob-sidebar-nav-close-panel mob-sidebar-nav-item-content" href="#/servicios">
                                            <div class="mob-sidebar-nav-item-media">
                                                <i class="fa fa-pencil   fa-2x" aria-hidden="true"></i>
                                            </div>
                                            <div class="mob-sidebar-nav-item-inner">
                                                <div class="mob-sidebar-nav-item-title">
                                                    Servicios
                                                </div>
                                                <div class="mob-sidebar-nav-item-after"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <!--
                                    <li class="deactivated with-sub"
                                        <a href="#/servicios" class="deactivated"></a>
                                        <ul class="submenu" id="inner-submenu-services">
                                        </ul>
                                    </li>
                                    -->
                                    <li class="deactivated mob-sidebar-nav-item-list" id="menu-holder-contacto">
                                        <a class="deactivated mob-sidebar-nav-item-link mob-sidebar-nav-close-panel mob-sidebar-nav-item-content" href="#/contacto">
                                            <div class="mob-sidebar-nav-item-media">
                                                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                            </div>
                                            <div class="mob-sidebar-nav-item-inner">
                                                <div class="mob-sidebar-nav-item-title">
                                                    Contacto
                                                </div>
                                                <div class="mob-sidebar-nav-item-after"></div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<!-- Auxiliar Temporal Inputs's DIV -->
    	<div id='hidden-inputs-session'></div>

    	<!-- Auxiliar Temporal Inputs's DIV -->
    	<div id='hidden-inputs-temporal'>
            <input id="hidden_key" class="clean-hidden" type="hidden" value="">
            <input id="hidden_name" class="clean-hidden" type="hidden" value="">
        </div>

    	<!-- Loader -->
    	<div class="wrapper-content-loader" id="init-loader"></div>

    	<!-- BOF Header -->
    	<header>
    		<div class="jx-header-1">
    			<!-- BOF Top Bar -->
    			<div class="wrapper-content-header-topbar" id="init-jx-topbar"></div>
    			<!-- EDF Top Bar -->
    			<!-- BOF Heades Line -->
    			<div class="wrapper-content-header-line" id="init-jx-header-line"></div>
    			<!-- EDF Heades Line -->
    		</div>
			<!-- BOF Menu Holder -->
			<div class="wrapper-content-menu-holder" id="init-jx-menu-holder"></div>
			<!-- EDF Menu Holder -->
            <!-- BOF Title Bar -->
            <div class="wrapper-content-titlebar" id="init-jx-titlebar"></div>
            <!-- EDF Title Bar -->
			<!-- BOF Slider -->
            <div class="wrapper-content-slider" id="init-jx-slider"></div>
            <!-- EDF Slider -->
        </header>
        <!-- EDF Header -->

        <!-- BOF Header -->
        <div class="main no-top-padding" role="main">
            <!--Templates's DIV-->
            <div class="wrapper_content_interactive" id='content-temporal-interactive'></div>

            <!-- BOF Tagline Newsletter -->
            <!--<div class="jx-container jx-default-bg">
                <div class="wrapper-content-jx-newsletter" id="init-jx-newsletter"></div>
            </div>-->
            <!-- EDF Tagline Newsletter -->
        </div>
        <!-- EDF Header -->

        <!-- BOF Footer -->
        <footer class="jx-footer-section">
            <div class="wrapper-content-jx-footer-1" id="init-jx-footer-1"></div>
        </footer>
		<!-- EDF Footer -->

		<!-- back to top -->
		<a href="#" class="top" style="background-color:#EE6352;">Top</a>
		<!-- /.back to top -->

		<!-- SCRIPTS -->
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
        <script src="lib/assets/plugins/jquery.slicknav.js"></script>
        <script src="lib/assets/plugins/matchMedia.js"></script>
        <script src="lib/assets/plugins/jquery.counterup.js"></script>
        <script src="lib/assets/plugins/waypoints.js"></script>
        <script src="lib/assets/plugins/waypoints-sticky.js"></script>
        <script src="lib/assets/plugins/plugins.js"></script>
        <script src="lib/assets/plugins/respond.js"></script>
        <script src="lib/assets/plugins/jquery.appear.js"></script>
        <script src="lib/assets/plugins/jquery.prettyPhoto.js"></script>
        <script src="lib/assets/plugins/jquery.isotope.min.js"></script>
        <script src="lib/assets/plugins/jquery.flexslider.js"></script>
        <script src="lib/assets/plugins/jquery.themepunch.tools.js"></script>
        <script src="lib/assets/plugins/jquery.themepunch.revolution.js"></script>
        <script src="lib/assets/plugins/jquery.sticky.js"></script>
        <?php /*
        <script src="lib/assets/min/core.lib.min.js"></script>
        */ ?>
        <!-- TEMPLATES -->
        <script src='templates/min/templates.min.js'></script>
        <!-- GOOGLE API -->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCqo-F2TnMAABZvfV5yTQLlWvUCJlJViU&amp;sensor=false"></script>
        <?php /*
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