<?php

/* super_navbar.twig */
class __TwigTemplate_5266480922cee5dda85a83952e615f0267771688eb0337fc349ad6afc920b894 extends Twig_Template
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
            ";
        // line 18
        echo "            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        echo " href=\"#audi-a3-sedan\" class=\"cur-hover\">Audi A3 Sedan</a></li>
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 19
        echo " href=\"#audi-a6\" class=\"cur-hover\">Audi A6</a></li>
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 20
        echo " href=\"#audi-a7\" class=\"cur-hover\">Audi A7</a></li>
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 21
        echo " href=\"#audi-a8\" class=\"cur-hover\">Audi A8</a></li>
            <li><a data-scroll data-options='{ \"easing\": \"easeOutQuad\" }' ";
        // line 22
        echo " href=\"#audi-accesorios\" class=\"cur-hover\">Accesorios</a></li>
            <li style=\"width: 12%; margin-right: 0px;\"><img alt=\"Logo\" class=\"logo hidden-xs\" src=\"";
        // line 23
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "img/logo/logo-audi.png\" alt=\"Audi Guadalajara\" style=\"width: 100px;\"></li>
        </ul>
    </nav>
</div>
";
    }

    public function getTemplateName()
    {
        return "super_navbar.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  63 => 23,  60 => 22,  57 => 21,  54 => 20,  51 => 19,  47 => 18,  40 => 13,  37 => 12,  32 => 9,  28 => 8,  23 => 5,  19 => 2,);
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
/*             {#<li><a id="go_home" href="#inicio" class="cur-hover">Inicio</a></li>#}*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_a3_sedan"#} href="#audi-a3-sedan" class="cur-hover">Audi A3 Sedan</a></li>*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_a6"#} href="#audi-a6" class="cur-hover">Audi A6</a></li>*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_a7"#} href="#audi-a7" class="cur-hover">Audi A7</a></li>*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_a8"#} href="#audi-a8" class="cur-hover">Audi A8</a></li>*/
/*             <li><a data-scroll data-options='{ "easing": "easeOutQuad" }' {#id="audi_accesorios"#} href="#audi-accesorios" class="cur-hover">Accesorios</a></li>*/
/*             <li style="width: 12%; margin-right: 0px;"><img alt="Logo" class="logo hidden-xs" src="{{ _host }}img/logo/logo-audi.png" alt="Audi Guadalajara" style="width: 100px;"></li>*/
/*         </ul>*/
/*     </nav>*/
/* </div>*/
/* {# End Start Site Header #}*/
