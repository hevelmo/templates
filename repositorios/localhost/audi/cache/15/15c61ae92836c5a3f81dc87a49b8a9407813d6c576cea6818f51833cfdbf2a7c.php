<?php

/* landing/_audi_a1.twig */
class __TwigTemplate_32f5a3cfe0891e5e4307f9beceabda47c0c29e0c87e981b97a531effb7bcf126 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("super.twig", "landing/_audi_a1.twig", 1);
        $this->blocks = array(
            'title' => array($this, 'block_title'),
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
    public function block_content_recurrent($context, array $blocks = array())
    {
        // line 4
        echo "here
";
    }

    // line 6
    public function block_load_scripts($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "landing/_audi_a1.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 6,  39 => 4,  36 => 3,  30 => 2,  11 => 1,);
    }
}
/* {% extends "super.twig" %}*/
/* {% block title %}{{ title }}{% endblock %}*/
/* {% block content_recurrent %}*/
/* here*/
/* {% endblock %}*/
/* {% block load_scripts %}*/
/* {% endblock %}*/
