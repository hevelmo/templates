<?php

/* super.twig */
class __TwigTemplate_c248157a572d30c78f897b5e0b2630ea90646946adf236c1f0c25e98d9d949d5 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'metas' => array($this, 'block_metas'),
            'facebook_tag' => array($this, 'block_facebook_tag'),
            'title' => array($this, 'block_title'),
            'links' => array($this, 'block_links'),
            'head_scripts' => array($this, 'block_head_scripts'),
            'navbar_recurrent' => array($this, 'block_navbar_recurrent'),
            'content_recurrent' => array($this, 'block_content_recurrent'),
            'body_scripts' => array($this, 'block_body_scripts'),
            'load_scripts' => array($this, 'block_load_scripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang=\"es\" class=\"no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->
<!--[if IE 7]>         <html lang=\"es\" class=\"no-js lt-ie10 lt-ie9 lt-ie8\"> <![endif]-->
<!--[if IE 8]>         <html lang=\"es\" class=\"no-js lt-ie10 lt-ie9\"> <![endif]-->
<!--[if IE 9]>         <html lang=\"es\" class=\"no-js lt-ie10\"> <![endif]-->
<html class=\"no-js\" lang=\"es\">
    <head>
\t    ";
        // line 8
        $this->displayBlock('head', $context, $blocks);
        // line 90
        echo "\t    <!-- Facebook Pixel Code -->
\t\t<script>
\t\t\t!function(f,b,e,v,n,t,s)
\t\t\t{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
\t\t\tn.callMethod.apply(n,arguments):n.queue.push(arguments)};
\t\t\tif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
\t\t\tn.queue=[];t=b.createElement(e);t.async=!0;
\t\t\tt.src=v;s=b.getElementsByTagName(e)[0];
\t\t\ts.parentNode.insertBefore(t,s)}(window,document,'script',
\t\t\t'https://connect.facebook.net/en_US/fbevents.js');
\t\t \tfbq('init', '388345931302119'); 
\t\t\tfbq('track', 'PageView');
\t\t</script>
\t\t<noscript>
\t \t\t<img height=\"1\" width=\"1\" src=\"https://www.facebook.com/tr?id=388345931302119&ev=PageView &noscript=1\"/>
\t\t</noscript>
\t\t<!-- End Facebook Pixel Code -->
\t</head>
\t<body id=\"index\" style=\"padding-top: 0px !important;\">
\t\t<div id=\"inicio\"></div>
\t\t";
        // line 111
        echo "        <input id=\"master-host\" type=\"hidden\" value=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "\">
        ";
        // line 113
        echo "\t\t<input id=\"master-max\" type=\"hidden\" value=\"";
        echo twig_escape_filter($this->env, (isset($context["_max"]) ? $context["_max"] : null), "html", null, true);
        echo "\">
\t\t";
        // line 115
        echo "        <div id=\"hidden-inputs-session\"></div>
        ";
        // line 117
        echo "        <div id=\"hidden-inputs-temporal\"></div>

        ";
        // line 120
        echo "        <header id=\"header\" class=\"navbar navigation-bar-header _content\">
        \t";
        // line 121
        $this->displayBlock('navbar_recurrent', $context, $blocks);
        // line 122
        echo "\t\t</header>
\t\t
        ";
        // line 125
        echo "        <div class=\"wrapper_content_interactive _content\" id='content-temporal-interactive'>
            ";
        // line 126
        $this->displayBlock('content_recurrent', $context, $blocks);
        // line 127
        echo "        </div>
       \t
       \t";
        // line 130
        echo "       \t";
        $this->loadTemplate("super.twig", "super.twig", 130, "630266657")->display($context);
        // line 131
        echo "
       \t";
        // line 133
        echo "       \t<a href=\"#0\" class=\"back-to-top cd-top no-print\">top</a>

       \t";
        // line 135
        $this->displayBlock('body_scripts', $context, $blocks);
        // line 158
        echo "       \t";
        ob_start();
        // line 159
        echo "\t        <script>";
        $this->displayBlock('load_scripts', $context, $blocks);
        echo "</script>
\t    ";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
        // line 161
        echo "\t</body>
</html>";
    }

    // line 8
    public function block_head($context, array $blocks = array())
    {
        // line 9
        echo "\t    \t";
        $this->displayBlock('metas', $context, $blocks);
        // line 28
        echo "\t        <title>
\t        \t";
        // line 29
        $this->displayBlock('title', $context, $blocks);
        // line 30
        echo "\t        </title>
\t        ";
        // line 31
        $this->displayBlock('links', $context, $blocks);
        // line 46
        echo "\t        ";
        $this->displayBlock('head_scripts', $context, $blocks);
        // line 89
        echo "\t    ";
    }

    // line 9
    public function block_metas($context, array $blocks = array())
    {
        // line 10
        echo "\t\t    \t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE7\">
\t\t        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">
\t\t        <meta http-equiv=\"cache-control\" content=\"no-cache\">
\t\t        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
\t\t        <meta name=\"viewport\" content=\"width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0\">
\t\t        <meta class=\"temp\" name=\"description\" content=\"\">
\t\t        <meta class=\"temp\" name=\"copyright\" content=\"© Copyright 2016 MAN Camiones y Autobuses.\">
\t\t        <meta class=\"temp\" name=\"robots\" content=\"index, follow\">
\t\t        ";
        // line 18
        $this->displayBlock('facebook_tag', $context, $blocks);
        // line 27
        echo "\t        ";
    }

    // line 18
    public function block_facebook_tag($context, array $blocks = array())
    {
        // line 19
        echo "                    ";
        // line 20
        echo "                    <meta property=\"og:title\" content=\"";
        echo twig_escape_filter($this->env, (isset($context["tag_name_default"]) ? $context["tag_name_default"] : null), "html", null, true);
        echo "\" />
                    <meta property=\"og:type\" content=\"website\" />
                    <meta property=\"og:image:type\" content=\" ";
        // line 22
        echo twig_escape_filter($this->env, (isset($context["tag_content_type"]) ? $context["tag_content_type"] : null), "html", null, true);
        echo "\" />
                    <meta property=\"og:image\" content=\"";
        // line 23
        echo twig_escape_filter($this->env, (isset($context["tag_image_default"]) ? $context["tag_image_default"] : null), "html", null, true);
        echo "\" />
                    <meta property=\"og:description\" content=\"";
        // line 24
        echo twig_escape_filter($this->env, (isset($context["tag_description"]) ? $context["tag_description"] : null), "html", null, true);
        echo "\"/>
                    <meta property=\"og:site_name\" content=\"";
        // line 25
        echo twig_escape_filter($this->env, (isset($context["tag_site_name"]) ? $context["tag_site_name"] : null), "html", null, true);
        echo "\" />
                ";
    }

    // line 29
    public function block_title($context, array $blocks = array())
    {
        echo "Audi.";
    }

    // line 31
    public function block_links($context, array $blocks = array())
    {
        // line 32
        echo "\t        \t<link class=\"temp\" rel=\"alternate\" hreflang=\"es-MX\" href=\"http://\" />
\t        \t";
        // line 34
        echo "\t            ";
        // line 37
        echo "\t            <link rel=\"stylesheet\" href=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "css/styles.css\">
\t            ";
        // line 39
        echo "\t            <link href=\"http://fonts.googleapis.com/css?family=Roboto:100,400,300,700,400italic,500%7CMontserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">
\t            ";
        // line 41
        echo "\t            <link type=\"image/x-icon\" rel=\"shortcut icon\" href=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "img/ico/favicon.ico\">
\t            ";
        // line 45
        echo "\t        ";
    }

    // line 46
    public function block_head_scripts($context, array $blocks = array())
    {
        // line 47
        echo "\t\t        <!--[if lt IE 9]>
\t\t\t\t\t<script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>
\t\t\t\t<![endif]-->
\t\t\t\t<script>
\t\t\t\t\t(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
\t\t\t\t\t(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
\t\t\t\t\tm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
\t\t\t\t\t})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

\t\t\t\t\tga('create', 'UA-88259451-1', 'auto');
\t\t\t\t\tga('send', 'pageview');
\t\t\t\t</script>
\t            <script>
\t                var nav = navigator.appName;
\t                if(nav == \"Microsoft Internet Explorer\") {
\t                    //Detectamos si nos visitan desde IE
\t                    if(nav == \"Microsoft Internet Explorer\") {
\t                        //Convertimos en minusculas la cadena que devuelve userAgent
\t                        var ie = navigator.userAgent.toLowerCase();
\t                        //Extraemos de la cadena la version de IE
\t                        var version = parseInt(ie.split('msie')[1]);
\t                        //Dependiendo de la version mostramos un resultado
\t                        switch(version) {
\t                            case 6:
\t                                alert(\"El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.\");
\t                                break;
\t                            case 7:
\t                                alert(\"El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.\");
\t                                break;
\t                            case 8:
\t                                alert(\"El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.\");
\t                                break;
\t                            /*
\t                            case 9:
\t                                alert(\"El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.\");
\t                                break;
\t                            */
\t                        }
\t                    }
\t                }
\t            </script>
\t        ";
    }

    // line 121
    public function block_navbar_recurrent($context, array $blocks = array())
    {
    }

    // line 126
    public function block_content_recurrent($context, array $blocks = array())
    {
    }

    // line 135
    public function block_body_scripts($context, array $blocks = array())
    {
        // line 136
        echo "   \t\t\t";
        // line 137
        echo "   \t\t\t<script src=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "lib/min/lib.core.min.js\"></script>

   \t\t\t";
        // line 140
        echo "   \t\t\t";
        // line 143
        echo "
\t\t\t";
        // line 147
        echo "
   \t\t\t";
        // line 149
        echo "   \t\t\t<script src=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "js/min/core.min.js\"></script>
   \t\t\t";
        // line 157
        echo "       \t";
    }

    // line 159
    public function block_load_scripts($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "super.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  311 => 159,  307 => 157,  302 => 149,  299 => 147,  296 => 143,  294 => 140,  288 => 137,  286 => 136,  283 => 135,  278 => 126,  273 => 121,  228 => 47,  225 => 46,  221 => 45,  216 => 41,  213 => 39,  208 => 37,  206 => 34,  203 => 32,  200 => 31,  194 => 29,  188 => 25,  184 => 24,  180 => 23,  176 => 22,  170 => 20,  168 => 19,  165 => 18,  161 => 27,  159 => 18,  149 => 10,  146 => 9,  142 => 89,  139 => 46,  137 => 31,  134 => 30,  132 => 29,  129 => 28,  126 => 9,  123 => 8,  118 => 161,  112 => 159,  109 => 158,  107 => 135,  103 => 133,  100 => 131,  97 => 130,  93 => 127,  91 => 126,  88 => 125,  84 => 122,  82 => 121,  79 => 120,  75 => 117,  72 => 115,  67 => 113,  62 => 111,  40 => 90,  38 => 8,  29 => 1,);
    }
}


/* super.twig */
class __TwigTemplate_c248157a572d30c78f897b5e0b2630ea90646946adf236c1f0c25e98d9d949d5_630266657 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 130
        $this->parent = $this->loadTemplate("super_footer.twig", "super.twig", 130);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "super_footer.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "super.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  340 => 130,  311 => 159,  307 => 157,  302 => 149,  299 => 147,  296 => 143,  294 => 140,  288 => 137,  286 => 136,  283 => 135,  278 => 126,  273 => 121,  228 => 47,  225 => 46,  221 => 45,  216 => 41,  213 => 39,  208 => 37,  206 => 34,  203 => 32,  200 => 31,  194 => 29,  188 => 25,  184 => 24,  180 => 23,  176 => 22,  170 => 20,  168 => 19,  165 => 18,  161 => 27,  159 => 18,  149 => 10,  146 => 9,  142 => 89,  139 => 46,  137 => 31,  134 => 30,  132 => 29,  129 => 28,  126 => 9,  123 => 8,  118 => 161,  112 => 159,  109 => 158,  107 => 135,  103 => 133,  100 => 131,  97 => 130,  93 => 127,  91 => 126,  88 => 125,  84 => 122,  82 => 121,  79 => 120,  75 => 117,  72 => 115,  67 => 113,  62 => 111,  40 => 90,  38 => 8,  29 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <!--[if lt IE 7]>      <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->*/
/* <!--[if IE 7]>         <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->*/
/* <!--[if IE 8]>         <html lang="es" class="no-js lt-ie10 lt-ie9"> <![endif]-->*/
/* <!--[if IE 9]>         <html lang="es" class="no-js lt-ie10"> <![endif]-->*/
/* <html class="no-js" lang="es">*/
/*     <head>*/
/* 	    {% block head %}*/
/* 	    	{% block metas %}*/
/* 		    	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">*/
/* 		        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">*/
/* 		        <meta http-equiv="cache-control" content="no-cache">*/
/* 		        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">*/
/* 		        <meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0">*/
/* 		        <meta class="temp" name="description" content="">*/
/* 		        <meta class="temp" name="copyright" content="© Copyright 2016 MAN Camiones y Autobuses.">*/
/* 		        <meta class="temp" name="robots" content="index, follow">*/
/* 		        {% block facebook_tag %}*/
/*                     {# sample fb meta #}*/
/*                     <meta property="og:title" content="{{ tag_name_default }}" />*/
/*                     <meta property="og:type" content="website" />*/
/*                     <meta property="og:image:type" content=" {{ tag_content_type }}" />*/
/*                     <meta property="og:image" content="{{ tag_image_default }}" />*/
/*                     <meta property="og:description" content="{{ tag_description }}"/>*/
/*                     <meta property="og:site_name" content="{{ tag_site_name }}" />*/
/*                 {% endblock %}*/
/* 	        {% endblock %}*/
/* 	        <title>*/
/* 	        	{% block title %}Audi.{% endblock %}*/
/* 	        </title>*/
/* 	        {% block links %}*/
/* 	        	<link class="temp" rel="alternate" hreflang="es-MX" href="http://" />*/
/* 	        	{# stylesheet #}*/
/* 	            {#*/
/* 	            <link rel="stylesheet" href="{{ _host }}css/styles.min.css">*/
/* 	            #}*/
/* 	            <link rel="stylesheet" href="{{ _host }}css/styles.css">*/
/* 	            {# google fonts #}*/
/* 	            <link href="http://fonts.googleapis.com/css?family=Roboto:100,400,300,700,400italic,500%7CMontserrat:400,700" rel="stylesheet" type="text/css">*/
/* 	            {# favicon #}*/
/* 	            <link type="image/x-icon" rel="shortcut icon" href="{{ _host }}img/ico/favicon.ico">*/
/* 	            {#*/
/* 	            <link rel="apple-touch-icon" href="{{ _host }}img/ico/apple-touch-icon.png">*/
/* 	            #}*/
/* 	        {% endblock %}*/
/* 	        {% block head_scripts %}*/
/* 		        <!--[if lt IE 9]>*/
/* 					<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>*/
/* 				<![endif]-->*/
/* 				<script>*/
/* 					(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){*/
/* 					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),*/
/* 					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)*/
/* 					})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');*/
/* */
/* 					ga('create', 'UA-88259451-1', 'auto');*/
/* 					ga('send', 'pageview');*/
/* 				</script>*/
/* 	            <script>*/
/* 	                var nav = navigator.appName;*/
/* 	                if(nav == "Microsoft Internet Explorer") {*/
/* 	                    //Detectamos si nos visitan desde IE*/
/* 	                    if(nav == "Microsoft Internet Explorer") {*/
/* 	                        //Convertimos en minusculas la cadena que devuelve userAgent*/
/* 	                        var ie = navigator.userAgent.toLowerCase();*/
/* 	                        //Extraemos de la cadena la version de IE*/
/* 	                        var version = parseInt(ie.split('msie')[1]);*/
/* 	                        //Dependiendo de la version mostramos un resultado*/
/* 	                        switch(version) {*/
/* 	                            case 6:*/
/* 	                                alert("El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.");*/
/* 	                                break;*/
/* 	                            case 7:*/
/* 	                                alert("El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.");*/
/* 	                                break;*/
/* 	                            case 8:*/
/* 	                                alert("El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.");*/
/* 	                                break;*/
/* 	                            /**/
/* 	                            case 9:*/
/* 	                                alert("El sitio no es compatible con Internet Explorer, te recomendamos usar Chrome o Firefox.");*/
/* 	                                break;*/
/* 	                            *//* */
/* 	                        }*/
/* 	                    }*/
/* 	                }*/
/* 	            </script>*/
/* 	        {% endblock %}*/
/* 	    {% endblock %}*/
/* 	    <!-- Facebook Pixel Code -->*/
/* 		<script>*/
/* 			!function(f,b,e,v,n,t,s)*/
/* 			{if(f.fbq)return;n=f.fbq=function(){n.callMethod?*/
/* 			n.callMethod.apply(n,arguments):n.queue.push(arguments)};*/
/* 			if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';*/
/* 			n.queue=[];t=b.createElement(e);t.async=!0;*/
/* 			t.src=v;s=b.getElementsByTagName(e)[0];*/
/* 			s.parentNode.insertBefore(t,s)}(window,document,'script',*/
/* 			'https://connect.facebook.net/en_US/fbevents.js');*/
/* 		 	fbq('init', '388345931302119'); */
/* 			fbq('track', 'PageView');*/
/* 		</script>*/
/* 		<noscript>*/
/* 	 		<img height="1" width="1" src="https://www.facebook.com/tr?id=388345931302119&ev=PageView &noscript=1"/>*/
/* 		</noscript>*/
/* 		<!-- End Facebook Pixel Code -->*/
/* 	</head>*/
/* 	<body id="index" style="padding-top: 0px !important;">*/
/* 		<div id="inicio"></div>*/
/* 		{# Root Project URL#}*/
/*         <input id="master-host" type="hidden" value="{{ _host }}">*/
/*         {# Auxiliar Master Max Leads #}*/
/* 		<input id="master-max" type="hidden" value="{{ _max }}">*/
/* 		{# Auxiliar Temporal Inputs's DIV #}*/
/*         <div id="hidden-inputs-session"></div>*/
/*         {# Auxiliar Temporal Inputs's DIV #}*/
/*         <div id="hidden-inputs-temporal"></div>*/
/* */
/*         {# super navbar #}*/
/*         <header id="header" class="navbar navigation-bar-header _content">*/
/*         	{% block navbar_recurrent %}{% endblock %}*/
/* 		</header>*/
/* 		*/
/*         {# Templates's DIV #}*/
/*         <div class="wrapper_content_interactive _content" id='content-temporal-interactive'>*/
/*             {% block content_recurrent %}{% endblock %}*/
/*         </div>*/
/*        	*/
/*        	{# super footer #}*/
/*        	{% embed "super_footer.twig" %}{% endembed %}*/
/* */
/*        	{# back to top #}*/
/*        	<a href="#0" class="back-to-top cd-top no-print">top</a>*/
/* */
/*        	{% block body_scripts %}*/
/*    			{# core libs #}*/
/*    			<script src="{{ _host }}lib/min/lib.core.min.js"></script>*/
/* */
/*    			{# google api #}*/
/*    			{#*/
/*    			<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=true&libraries=geometry&libraries=places&key=AIzaSyCCqo-F2TnMAABZvfV5yTQLlWvUCJlJViU&amp;sensor=false"></script>*/
/*    			#}*/
/* */
/* 			{# TEMPLATES */
/*             <script src="{{ _sitio }}templates/handlebars/min/templates.min.js"></script>*/
/* 			#}*/
/* */
/*    			{# core js #}*/
/*    			<script src="{{ _host }}js/min/core.min.js"></script>*/
/*    			{#*/
/*    			<script src="{{ _host }}js/objects.js"></script>*/
/*    			<script src="{{ _host }}js/method.js"></script>*/
/*    			<script src="{{ _host }}js/model.js"></script>*/
/*    			<script src="{{ _host }}js/main.js"></script>*/
/*    			<script src="{{ _host }}js/required.js"></script>*/
/*    			#}*/
/*        	{% endblock %}*/
/*        	{% spaceless %}*/
/* 	        <script>{% block load_scripts %}{% endblock %}</script>*/
/* 	    {% endspaceless %}*/
/* 	</body>*/
/* </html>*/
