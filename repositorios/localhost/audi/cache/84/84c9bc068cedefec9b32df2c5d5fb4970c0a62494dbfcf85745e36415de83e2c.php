<?php

/* landing/_navbar.twig */
class __TwigTemplate_4d970ffd287b5d8a606b0c241c0da5831b1a1406f25636951d9e39a97f294f61 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 2
        echo "<div class=\"container sp-cont\">
    <a class=\"visible-sm visible-xs mobile-toggle\" id=\"menu-toggle\">
        ";
        // line 5
        echo "        <div class=\"bar-1\"></div>
        <div class=\"bar-2\"></div>
    </a>
    <a class=\"visible-xs-home-link visible-sm visible-xs\" id=\"go_home_logo_resp\" href=\"";
        // line 8
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "\">
        <img alt=\"Logo\" class=\"logo\" src=\"";
        // line 9
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "img/logo/logo-audi.png\" alt=\"Audi Guadalajara\">
    </a>
    ";
        // line 12
        echo "    <nav class=\"main-navigation dd-menu toggle-menu navigation-bar\" role=\"navigation\">
        <a class=\"home-link main-navigator-home-link\" id=\"go_home_logo\" href=\"";
        // line 13
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "\">
            <span class=\"primary-text\">Audi Guadalajara</span>
        </a>
        <ul class=\"sf-menu navigation-bar\">
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 17
        echo " href=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "#audi-a3-sedan\" class=\"cur-hover\">Audi A3 Sedan</a></li>
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 18
        echo " href=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "#audi-a6\" class=\"cur-hover\">Audi A6</a></li>
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 19
        echo " href=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "#audi-a7\" class=\"cur-hover\">Audi A7</a></li>
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 20
        echo " href=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "#audi-a8\" class=\"cur-hover\">Audi A8</a></li>
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 21
        echo " href=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "#audi-accesorios\" class=\"cur-hover\">Accesorios</a></li>
            ";
        // line 23
        echo "            ";
        // line 28
        echo "            ";
        // line 31
        echo "            ";
        // line 33
        echo "            <li style=\"width: 12%; margin-right: 0px;\"><img alt=\"Logo\" class=\"logo hidden-xs\" src=\"";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "img/logo/logo-audi.png\" alt=\"Audi Guadalajara\" style=\"width: 100px;\"></li>
        </ul>
    </nav>
</div>
";
    }

    public function getTemplateName()
    {
        return "landing/_navbar.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 33,  76 => 31,  74 => 28,  72 => 23,  67 => 21,  62 => 20,  57 => 19,  52 => 18,  47 => 17,  40 => 13,  37 => 12,  32 => 9,  28 => 8,  23 => 5,  19 => 2,);
    }
}
/* {# Start Site Header #}*/
/* <div class="container sp-cont">*/
/*     <a class="visible-sm visible-xs mobile-toggle" id="menu-toggle">*/
/*         {#<i class="fa fa-bars"></i>#}*/
/*         <div class="bar-1"></div>*/
/*         <div class="bar-2"></div>*/
/*     </a>*/
/*     <a class="visible-xs-home-link visible-sm visible-xs" id="go_home_logo_resp" href="{{ _host }}">*/
/*         <img alt="Logo" class="logo" src="{{ _host }}img/logo/logo-audi.png" alt="Audi Guadalajara">*/
/*     </a>*/
/*     {# Main Navigation #}*/
/*     <nav class="main-navigation dd-menu toggle-menu navigation-bar" role="navigation">*/
/*         <a class="home-link main-navigator-home-link" id="go_home_logo" href="{{ _host }}">*/
/*             <span class="primary-text">Audi Guadalajara</span>*/
/*         </a>*/
/*         <ul class="sf-menu navigation-bar">*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_a3_sedan"#} href="{{ _host }}#audi-a3-sedan" class="cur-hover">Audi A3 Sedan</a></li>*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_a6"#} href="{{ _host }}#audi-a6" class="cur-hover">Audi A6</a></li>*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_a7"#} href="{{ _host }}#audi-a7" class="cur-hover">Audi A7</a></li>*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_a8"#} href="{{ _host }}#audi-a8" class="cur-hover">Audi A8</a></li>*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_accesorios"#} href="{{ _host }}#audi-accesorios" class="cur-hover">Accesorios</a></li>*/
/*             {#<li><a id="go_home" href="{{ _host }}#inicio" class="cur-hover">Inicio</a></li>#}*/
/*             {#<li><a id="go_audi_a1" href="{{ _host }}#audi-a1" class="cur-hover">Audi A1</a></li>*/
/*             <li><a id="go_audi_q3" href="{{ _host }}#audi-q3" class="cur-hover">Audi Q3</a></li>*/
/*             <li><a id="go_audi_a3" href="{{ _host }}#audi-a3" class="cur-hover">Audi A3</a></li>*/
/*             <li><a id="go_audi_a4" href="{{ _host }}#audi-a4" class="cur-hover">Audi A4</a></li>*/
/*             #}*/
/*             {#<li><a id="go_audi_q5" href="{{ _host }}#audi-q5" class="cur-hover">Audi Q5</a></li>*/
/*             <li><a id="go_audi_accesorios" href="{{ _host }}#audi-accesorios" class="cur-hover">Accesorios</a></li>*/
/*             #}*/
/*             {#<li><a id="go_service" href="#servicio" class="cur-hover">Servicio</a></li>*/
/*             <li><a id="go_contact"  href="#contacto" class="cur-hover">Contacto</a></li>#}*/
/*             <li style="width: 12%; margin-right: 0px;"><img alt="Logo" class="logo hidden-xs" src="{{ _host }}img/logo/logo-audi.png" alt="Audi Guadalajara" style="width: 100px;"></li>*/
/*         </ul>*/
/*     </nav>*/
/* </div>*/
/* {# End Start Site Header #}*/
