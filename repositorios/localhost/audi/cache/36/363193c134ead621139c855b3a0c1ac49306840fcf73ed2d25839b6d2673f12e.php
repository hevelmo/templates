<?php

/* landing/financiamiento/modelos/_modelos.twig */
class __TwigTemplate_ea9916d9b7e7e5e92e89efa42657136f418f8ba00dec2c30abe375dcc49242b2 extends Twig_Template
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
        echo "<div class=\"tab_content_agencies animation-fadeIn _content\">
    <section style=\"padding: 35px 15px 15px;\">
        <div class=\"row\" style=\"display: none;\">
            <div class=\"col-md-12\">
                <div class=\"text-center\" style=\"margin-bottom: 70px;\">
                    <h3 style=\"font-weight: bold;color: #000;\">.</h3>
                </div>
            </div>
        </div>
        <div class=\"container\">
            <!-- Item Carousel -->
                <div class=\"row c4\">
                    <div id=\"owl-team\" class=\"owl-carousel owl-theme\"> 
                        ";
        // line 14
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["audpa"]) ? $context["audpa"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["modelo"]) {
            // line 15
            echo "                            <!-- Item -->
                            <div class=\"item\" data-id=\"";
            // line 16
            echo twig_escape_filter($this->env, $this->getAttribute($context["modelo"], "id", array()), "html", null, true);
            echo "\">
                                <div class=\"h caption-4 m-b\">
                                    <figure><img src=\"";
            // line 18
            echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
            echo "img/modelos/audi/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["modelo"], "image", array()), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["modelo"], "name", array()), "html", null, true);
            echo "\">
                                        <figcaption>
                                            ";
            // line 25
            echo "                                        </figcaption>
                                    </figure>
                                </div>
                                <h5 class=\"f-w-900\">";
            // line 28
            echo twig_escape_filter($this->env, $this->getAttribute($context["modelo"], "name", array()), "html", null, true);
            echo "</h5>
                                ";
            // line 30
            echo "                                <div id=\"social-buttons\">
                                <a class=\"col-md-12 primaryLinkWithStyle plwsLight TargetLinks resp-button clearfix\" href=\"";
            // line 31
            echo twig_escape_filter($this->env, (isset($context["_host "]) ? $context["_host "] : null), "html", null, true);
            echo "financiamiento/modelos/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["modelo"], "key", array()), "html", null, true);
            echo "\" data-link-desktop=\"";
            echo twig_escape_filter($this->env, (isset($context["_host "]) ? $context["_host "] : null), "html", null, true);
            echo "financiamiento/modelos/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["modelo"], "key", array()), "html", null, true);
            echo "\" data-target=\"current\" id=\"get-view-web-site-event-ga\" style=\"margin-bottom: 20px;\">
                                    <span>MÁS INFORMACIÓN</span>
                                </a>
                                </div>
                                <p class=\"bio\">
                                    ";
            // line 36
            echo twig_escape_filter($this->env, $this->getAttribute($context["modelo"], "description", array()), "html", null, true);
            echo "
                                </p>    
                            </div>
                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['modelo'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 40
        echo "                    </div><!-- /End Owl Team -->
                </div><!-- /End Row -->
        </div>";
        // line 43
        echo "    </section>
</div>";
    }

    public function getTemplateName()
    {
        return "landing/financiamiento/modelos/_modelos.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 43,  91 => 40,  81 => 36,  67 => 31,  64 => 30,  60 => 28,  55 => 25,  46 => 18,  41 => 16,  38 => 15,  34 => 14,  19 => 1,);
    }
}
/* <div class="tab_content_agencies animation-fadeIn _content">*/
/*     <section style="padding: 35px 15px 15px;">*/
/*         <div class="row" style="display: none;">*/
/*             <div class="col-md-12">*/
/*                 <div class="text-center" style="margin-bottom: 70px;">*/
/*                     <h3 style="font-weight: bold;color: #000;">.</h3>*/
/*                 </div>*/
/*             </div>*/
/*         </div>*/
/*         <div class="container">*/
/*             <!-- Item Carousel -->*/
/*                 <div class="row c4">*/
/*                     <div id="owl-team" class="owl-carousel owl-theme"> */
/*                         {% for modelo in audpa %}*/
/*                             <!-- Item -->*/
/*                             <div class="item" data-id="{{ modelo.id }}">*/
/*                                 <div class="h caption-4 m-b">*/
/*                                     <figure><img src="{{ _host }}img/modelos/audi/{{ modelo.image }}" alt="{{ modelo.name }}">*/
/*                                         <figcaption>*/
/*                                             {#<div class="caption-box vertical-center-abs text-center social-btn">*/
/*                                                 <a href="#" class="sb-twitter"><i class="fa fa-twitter"></i></a>*/
/*                                                 <a href="#" class="sb-linkedin"><i class="fa fa-linkedin"></i></a>*/
/*                                                 <a href="#" class="sb-instagram"><i class="fa fa-instagram"></i></a>*/
/*                                             </div>#}*/
/*                                         </figcaption>*/
/*                                     </figure>*/
/*                                 </div>*/
/*                                 <h5 class="f-w-900">{{ modelo.name }}</h5>*/
/*                                 {#<p class="role">Head Physician</p>#}*/
/*                                 <div id="social-buttons">*/
/*                                 <a class="col-md-12 primaryLinkWithStyle plwsLight TargetLinks resp-button clearfix" href="{{ _host }}financiamiento/modelos/{{ modelo.key }}" data-link-desktop="{{ _host }}financiamiento/modelos/{{ modelo.key }}" data-target="current" id="get-view-web-site-event-ga" style="margin-bottom: 20px;">*/
/*                                     <span>MÁS INFORMACIÓN</span>*/
/*                                 </a>*/
/*                                 </div>*/
/*                                 <p class="bio">*/
/*                                     {{ modelo.description }}*/
/*                                 </p>    */
/*                             </div>*/
/*                         {% endfor %}*/
/*                     </div><!-- /End Owl Team -->*/
/*                 </div><!-- /End Row -->*/
/*         </div>{#end of container#}*/
/*     </section>*/
/* </div>*/
