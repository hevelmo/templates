<?php

/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("super.twig", "landing/_home.twig", 1);
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
        echo "\t";
        $this->loadTemplate("landing/_home.twig", "landing/_home.twig", 4, "768977275")->display($context);
    }

    // line 6
    public function block_content_recurrent($context, array $blocks = array())
    {
        // line 7
        echo "\t<a id=\"audi-a3-sedan\" class=\"section-separator\"></a>
\t<div id=\"conten-page-banner-audi-a3-sedan\" class=\"_content\">
\t\t";
        // line 9
        $this->loadTemplate("landing/_home.twig", "landing/_home.twig", 9, "737741694")->display($context);
        echo "\t\t
\t</div>
\t<a id=\"audi-a6\" class=\"section-separator\"></a>
\t<div id=\"conten-page-banner-audi-a6\" class=\"_content\">
\t\t";
        // line 13
        $this->loadTemplate("landing/_home.twig", "landing/_home.twig", 13, "912915405")->display($context);
        echo "\t\t
\t</div>
\t<a id=\"audi-a7\" class=\"section-separator\"></a>
\t<div id=\"conten-page-banner-audi-a7\" class=\"_content\">
\t\t";
        // line 17
        $this->loadTemplate("landing/_home.twig", "landing/_home.twig", 17, "1770304745")->display($context);
        echo "\t\t
\t</div>
\t<a id=\"audi-a8\" class=\"section-separator\"></a>
\t<div id=\"conten-page-banner-audi-a8\" class=\"_content\">
\t\t";
        // line 21
        $this->loadTemplate("landing/_home.twig", "landing/_home.twig", 21, "664301640")->display($context);
        echo "\t\t
\t</div>
\t<div id=\"audi-accesorios\"></div>
\t<div id=\"content-page-banner-audi-accesorios\" class=\"_content\">
\t\t";
        // line 25
        $this->loadTemplate("landing/_home.twig", "landing/_home.twig", 25, "1288154974")->display($context);
        // line 26
        echo "\t</div>
\t<a id=\"audi-modelos\" class=\"section-separator\"></a>
\t<div id=\"content-page-modelos\" class=\"_content\">
\t\t";
        // line 29
        $this->loadTemplate("landing/_home.twig", "landing/_home.twig", 29, "442963091")->display($context);
        // line 30
        echo "\t</div>
\t<a id=\"audi-contacto\" class=\"section-separator\"></a>
\t<div id=\"content-page-agencias\" class=\"_content\">
\t\t";
        // line 33
        $this->loadTemplate("landing/_home.twig", "landing/_home.twig", 33, "1039074646")->display($context);
        // line 34
        echo "\t</div>
\t";
    }

    // line 39
    public function block_load_scripts($context, array $blocks = array())
    {
        // line 40
        echo "windowWidthMethod.windowWidth();
backToTopMethod.init_window_scroll_top();
\$(\".paner-card-body\").hide();
/* default settings */
\$('.venobox').venobox({
    framewidth: '',        // default: ''
    frameheight: '',       // default: ''
    border: '5px',             // default: '0'
    bgcolor: '#fff',            // default: '#fff'
    titleattr: 'data-title',    // default: 'title'
    numeratio: true,            // default: false
    infinigall: true            // default: false
});
owl_team.init();
smoothScroll.init();
";
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3_768977275 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 4
        $this->parent = $this->loadTemplate("super_navbar.twig", "landing/_home.twig", 4);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "super_navbar.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  147 => 4,  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3_737741694 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 9
        $this->parent = $this->loadTemplate("landing/promos/audiA3Sedan.twig", "landing/_home.twig", 9);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/promos/audiA3Sedan.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  187 => 9,  147 => 4,  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3_912915405 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 13
        $this->parent = $this->loadTemplate("landing/promos/audiA6.twig", "landing/_home.twig", 13);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/promos/audiA6.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  227 => 13,  187 => 9,  147 => 4,  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3_1770304745 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 17
        $this->parent = $this->loadTemplate("landing/promos/audiA7.twig", "landing/_home.twig", 17);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/promos/audiA7.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  267 => 17,  227 => 13,  187 => 9,  147 => 4,  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3_664301640 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 21
        $this->parent = $this->loadTemplate("landing/promos/audiA8.twig", "landing/_home.twig", 21);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/promos/audiA8.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  307 => 21,  267 => 17,  227 => 13,  187 => 9,  147 => 4,  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3_1288154974 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 25
        $this->parent = $this->loadTemplate("landing/promos/promo_audi_accesorios.twig", "landing/_home.twig", 25);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/promos/promo_audi_accesorios.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  347 => 25,  307 => 21,  267 => 17,  227 => 13,  187 => 9,  147 => 4,  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3_442963091 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 29
        $this->parent = $this->loadTemplate("landing/financiamiento/modelos/_modelos.twig", "landing/_home.twig", 29);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/financiamiento/modelos/_modelos.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  387 => 29,  347 => 25,  307 => 21,  267 => 17,  227 => 13,  187 => 9,  147 => 4,  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}


/* landing/_home.twig */
class __TwigTemplate_350b105f13e3101abb5a717959c3a2eb814b9d31924303875def2001541ec9c3_1039074646 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 33
        $this->parent = $this->loadTemplate("landing/agencias/_agencias.twig", "landing/_home.twig", 33);
        $this->blocks = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return "landing/agencias/_agencias.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "landing/_home.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  427 => 33,  387 => 29,  347 => 25,  307 => 21,  267 => 17,  227 => 13,  187 => 9,  147 => 4,  104 => 40,  101 => 39,  96 => 34,  94 => 33,  89 => 30,  87 => 29,  82 => 26,  80 => 25,  73 => 21,  66 => 17,  59 => 13,  52 => 9,  48 => 7,  45 => 6,  40 => 4,  37 => 3,  31 => 2,  11 => 1,);
    }
}
/* {% extends "super.twig" %}*/
/* {% block title %}{{ title }}{% endblock %}*/
/* {% block navbar_recurrent %}*/
/* 	{% embed "super_navbar.twig" %}{% endembed %}*/
/* {% endblock %}*/
/* {% block content_recurrent %}*/
/* 	<a id="audi-a3-sedan" class="section-separator"></a>*/
/* 	<div id="conten-page-banner-audi-a3-sedan" class="_content">*/
/* 		{% embed "landing/promos/audiA3Sedan.twig" %}{% endembed %}		*/
/* 	</div>*/
/* 	<a id="audi-a6" class="section-separator"></a>*/
/* 	<div id="conten-page-banner-audi-a6" class="_content">*/
/* 		{% embed "landing/promos/audiA6.twig" %}{% endembed %}		*/
/* 	</div>*/
/* 	<a id="audi-a7" class="section-separator"></a>*/
/* 	<div id="conten-page-banner-audi-a7" class="_content">*/
/* 		{% embed "landing/promos/audiA7.twig" %}{% endembed %}		*/
/* 	</div>*/
/* 	<a id="audi-a8" class="section-separator"></a>*/
/* 	<div id="conten-page-banner-audi-a8" class="_content">*/
/* 		{% embed "landing/promos/audiA8.twig" %}{% endembed %}		*/
/* 	</div>*/
/* 	<div id="audi-accesorios"></div>*/
/* 	<div id="content-page-banner-audi-accesorios" class="_content">*/
/* 		{% embed "landing/promos/promo_audi_accesorios.twig" %}{% endembed %}*/
/* 	</div>*/
/* 	<a id="audi-modelos" class="section-separator"></a>*/
/* 	<div id="content-page-modelos" class="_content">*/
/* 		{% embed "landing/financiamiento/modelos/_modelos.twig" %}{% endembed %}*/
/* 	</div>*/
/* 	<a id="audi-contacto" class="section-separator"></a>*/
/* 	<div id="content-page-agencias" class="_content">*/
/* 		{% embed "landing/agencias/_agencias.twig" %}{% endembed %}*/
/* 	</div>*/
/* 	{#*/
/* 	{% embed "landing/herocarousel_lab.twig" %}{% endembed %}*/
/* 	#}*/
/* {% endblock %}*/
/* {% block load_scripts %}*/
/* windowWidthMethod.windowWidth();*/
/* backToTopMethod.init_window_scroll_top();*/
/* $(".paner-card-body").hide();*/
/* /* default settings *//* */
/* $('.venobox').venobox({*/
/*     framewidth: '',        // default: ''*/
/*     frameheight: '',       // default: ''*/
/*     border: '5px',             // default: '0'*/
/*     bgcolor: '#fff',            // default: '#fff'*/
/*     titleattr: 'data-title',    // default: 'title'*/
/*     numeratio: true,            // default: false*/
/*     infinigall: true            // default: false*/
/* });*/
/* owl_team.init();*/
/* smoothScroll.init();*/
/* {% endblock %}*/
