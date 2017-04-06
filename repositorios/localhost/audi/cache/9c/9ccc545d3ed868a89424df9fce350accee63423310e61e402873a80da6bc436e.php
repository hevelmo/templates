<?php

/* landing/herocarousel_lab.twig */
class __TwigTemplate_8a5885cc50a4a5e08e48fafdfc5bf82dd5481df160ebfb40f105592ae08daa53 extends Twig_Template
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
        // line 1
        echo "<script src=\"";
        echo twig_escape_filter($this->env, (isset($context["_host "]) ? $context["_host "] : null), "html", null, true);
        echo "lib/herocarousel/lab.js\"></script>";
    }

    public function getTemplateName()
    {
        return "landing/herocarousel_lab.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }
}
/* <script src="{{ _host }}lib/herocarousel/lab.js"></script>*/
