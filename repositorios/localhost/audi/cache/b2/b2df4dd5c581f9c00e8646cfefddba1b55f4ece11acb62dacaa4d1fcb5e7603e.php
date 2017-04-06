<?php

/* landing/financiamiento/modelos/promo/_cotiza.twig */
class __TwigTemplate_3a91c8edbb50ac63832544dce4f8577ddfa455152ecea4cd0ae33091b7c6967e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("super.twig", "landing/financiamiento/modelos/promo/_cotiza.twig", 1);
        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'navbar_recurrent' => array($this, 'block_navbar_recurrent'),
            'content_recurrent' => array($this, 'block_content_recurrent'),
            'load_scripts' => array($this, 'block_load_scripts'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "super.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_title($context, array $blocks = array())
    {
        echo twig_escape_filter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true);
    }

    // line 3
    public function block_navbar_recurrent($context, array $blocks = array())
    {
        // line 4
        echo "    ";
        $this->loadTemplate("landing/financiamiento/modelos/promo/_cotiza.twig", "landing/financiamiento/modelos/promo/_cotiza.twig", 4, "410895988")->display($context);
    }

    // line 6
    public function block_content_recurrent($context, array $blocks = array())
    {
        // line 7
        echo "    ";
        $context["model"] = (isset($context["audpa"]) ? $context["audpa"] : null);
        // line 8
        echo "    <input id=\"master-product\" type=\"hidden\" value=\"";
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute((isset($context["model"]) ? $context["model"] : null), "name", array())), "html", null, true);
        echo "\">
    <input id=\"master-product-key\" type=\"hidden\" value=\"";
        // line 9
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["model"]) ? $context["model"] : null), "key", array()), "html", null, true);
        echo "\">
    <header class=\"page-header parallax overlay-light-gradient-slider\" id=\"set-banner\">
        ";
        // line 14
        echo "    </header>
    <div id=\"content-financing-newform\" class=\"content content-main full pt0i pb0i clearfix\">
        <div class=\"col-md-12\">
            <div class=\"row\">
                <div class=\"financing_main\">
                    <div class=\"financing_content\">
                        <div class=\"col-md-8 col-md-offset-2 borderleft plr30 no-plr\">
                            <div id=\"content-leads-financing-form\">
                                ";
        // line 22
        $this->loadTemplate("landing/financiamiento/modelos/promo/_cotiza.twig", "landing/financiamiento/modelos/promo/_cotiza.twig", 22, "1093774780")->display($context);
        // line 23
        echo "                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
";
    }

    // line 31
    public function block_load_scripts($context, array $blocks = array())
    {
        // line 32
        $context["model"] = (isset($context["audpa"]) ? $context["audpa"] : null);
        // line 33
        echo "\$('header#set-banner').attr('style','background-image: url(";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "img/banner/";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["model"]) ? $context["model"] : null), "banner", array()), "html", null, true);
        echo "); padding: 0 0;');
set_data.set_product();
";
    }

    public function getTemplateName()
    {
        return "landing/financiamiento/modelos/promo/_cotiza.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  89 => 33,  87 => 32,  84 => 31,  73 => 23,  71 => 22,  61 => 14,  56 => 9,  51 => 8,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/financiamiento/modelos/promo/_cotiza.twig */
class __TwigTemplate_3a91c8edbb50ac63832544dce4f8577ddfa455152ecea4cd0ae33091b7c6967e_410895988 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 4
        $this->parent = $this->loadTemplate("landing/_navbar.twig", "landing/financiamiento/modelos/promo/_cotiza.twig", 4);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/_navbar.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/financiamiento/modelos/promo/_cotiza.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  123 => 4,  89 => 33,  87 => 32,  84 => 31,  73 => 23,  71 => 22,  61 => 14,  56 => 9,  51 => 8,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/financiamiento/modelos/promo/_cotiza.twig */
class __TwigTemplate_3a91c8edbb50ac63832544dce4f8577ddfa455152ecea4cd0ae33091b7c6967e_1093774780 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 22
        $this->parent = $this->loadTemplate("landing/financiamiento/modelos/promo/contact_form.twig", "landing/financiamiento/modelos/promo/_cotiza.twig", 22);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/financiamiento/modelos/promo/contact_form.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/financiamiento/modelos/promo/_cotiza.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  163 => 22,  123 => 4,  89 => 33,  87 => 32,  84 => 31,  73 => 23,  71 => 22,  61 => 14,  56 => 9,  51 => 8,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}
/* {% extends "super.twig" %}*/
/* {% block title %}{{ title }}{% endblock %}*/
/* {% block navbar_recurrent %}*/
/*     {% embed "landing/_navbar.twig" %}{% endembed %}*/
/* {% endblock %}*/
/* {% block content_recurrent %}*/
/*     {% set model = audpa %}*/
/*     <input id="master-product" type="hidden" value="{{ model.name|upper }}">*/
/*     <input id="master-product-key" type="hidden" value="{{ model.key }}">*/
/*     <header class="page-header parallax overlay-light-gradient-slider" id="set-banner">*/
/*         {#<div class="container">*/
/*             <h1 class="page-title text-center uppercase" id="content-title"></h1>*/
/*         </div>#}*/
/*     </header>*/
/*     <div id="content-financing-newform" class="content content-main full pt0i pb0i clearfix">*/
/*         <div class="col-md-12">*/
/*             <div class="row">*/
/*                 <div class="financing_main">*/
/*                     <div class="financing_content">*/
/*                         <div class="col-md-8 col-md-offset-2 borderleft plr30 no-plr">*/
/*                             <div id="content-leads-financing-form">*/
/*                                 {% embed "landing/financiamiento/modelos/promo/contact_form.twig" %}{% endembed %}*/
/*                             </div>*/
/*                         </div>*/
/*                     </div>*/
/*                 </div>*/
/*             </div>*/
/*         </div>*/
/*     </div>*/
/* {% endblock %}*/
/* {% block load_scripts %}*/
/* {% set model = audpa %}*/
/* $('header#set-banner').attr('style','background-image: url({{ _host }}img/banner/{{ model.banner }}); padding: 0 0;');*/
/* set_data.set_product();*/
/* {% endblock %}*/
/* */
