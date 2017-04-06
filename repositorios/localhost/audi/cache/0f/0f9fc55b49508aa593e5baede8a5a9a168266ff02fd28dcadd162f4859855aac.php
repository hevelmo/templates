<?php

/* landing/financiamiento/audi/_q5.twig */
class __TwigTemplate_4586890961e866ce458a0afcaacb5e70b0509adfd3ef0d0da662b1610ca9d57b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("super.twig", "landing/financiamiento/audi/_q5.twig", 1);
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
        $this->loadTemplate("landing/financiamiento/audi/_q5.twig", "landing/financiamiento/audi/_q5.twig", 4, "841837702")->display($context);
    }

    // line 6
    public function block_content_recurrent($context, array $blocks = array())
    {
        // line 7
        echo "<header class=\"page-header parallax overlay-light-gradient-slider\" id=\"set-banner\">
    ";
        // line 11
        echo "</header>
<div id=\"content-financing-newform\" class=\"content content-main full pt0i pb0i clearfix\">
    <div class=\"col-md-12\">
        <div class=\"row\">
            <div class=\"financing_main\">
                <div class=\"financing_content\">
                    <div class=\"col-md-8 col-md-offset-2 borderleft plr30 no-plr\">
                        <div id=\"content-leads-financing-form\">
                            <input id=\"master-product\" type=\"hidden\" value=\"Invitación Q5 2018\">
                            ";
        // line 20
        $this->loadTemplate("landing/financiamiento/audi/_q5.twig", "landing/financiamiento/audi/_q5.twig", 20, "838083417")->display($context);
        // line 21
        echo "                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
";
    }

    // line 29
    public function block_load_scripts($context, array $blocks = array())
    {
        // line 30
        echo "\$('header#set-banner').attr('style','background-image: url(";
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "img/financing/banner/q5_registro.jpg); padding: 0 0;');
set_data.set_product();
";
    }

    public function getTemplateName()
    {
        return "landing/financiamiento/audi/_q5.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 30,  75 => 29,  64 => 21,  62 => 20,  51 => 11,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/financiamiento/audi/_q5.twig */
class __TwigTemplate_4586890961e866ce458a0afcaacb5e70b0509adfd3ef0d0da662b1610ca9d57b_841837702 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 4
        $this->parent = $this->loadTemplate("landing/_navbar.twig", "landing/financiamiento/audi/_q5.twig", 4);
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
        return "landing/financiamiento/audi/_q5.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  110 => 4,  78 => 30,  75 => 29,  64 => 21,  62 => 20,  51 => 11,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/financiamiento/audi/_q5.twig */
class __TwigTemplate_4586890961e866ce458a0afcaacb5e70b0509adfd3ef0d0da662b1610ca9d57b_838083417 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 20
        $this->parent = $this->loadTemplate("landing/financiamiento/contacto/contact_form_registro.twig", "landing/financiamiento/audi/_q5.twig", 20);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/financiamiento/contacto/contact_form_registro.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/financiamiento/audi/_q5.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  150 => 20,  110 => 4,  78 => 30,  75 => 29,  64 => 21,  62 => 20,  51 => 11,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}
/* {% extends "super.twig" %}*/
/* {% block title %}{{ title }}{% endblock %}*/
/* {% block navbar_recurrent %}*/
/*     {% embed "landing/_navbar.twig" %}{% endembed %}*/
/* {% endblock %}*/
/* {% block content_recurrent %}*/
/* <header class="page-header parallax overlay-light-gradient-slider" id="set-banner">*/
/*     {#<div class="container">*/
/*         <h1 class="page-title text-center uppercase" id="content-title"></h1>*/
/*     </div>#}*/
/* </header>*/
/* <div id="content-financing-newform" class="content content-main full pt0i pb0i clearfix">*/
/*     <div class="col-md-12">*/
/*         <div class="row">*/
/*             <div class="financing_main">*/
/*                 <div class="financing_content">*/
/*                     <div class="col-md-8 col-md-offset-2 borderleft plr30 no-plr">*/
/*                         <div id="content-leads-financing-form">*/
/*                             <input id="master-product" type="hidden" value="Invitación Q5 2018">*/
/*                             {% embed "landing/financiamiento/contacto/contact_form_registro.twig" %}{% endembed %}*/
/*                         </div>*/
/*                     </div>*/
/*                 </div>*/
/*             </div>*/
/*         </div>*/
/*     </div>*/
/* </div>*/
/* {% endblock %}*/
/* {% block load_scripts %}*/
/* $('header#set-banner').attr('style','background-image: url({{ _host }}img/financing/banner/q5_registro.jpg); padding: 0 0;');*/
/* set_data.set_product();*/
/* {% endblock %}*/
/* */
