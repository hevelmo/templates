<?php

/* landing/financiamiento/contacto/contact_form_registro.twig */
class __TwigTemplate_0a63552c3b4523693eb36b0109e0a8874dea3339002045bcd64a10d646e70cd6 extends Twig_Template
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
        echo "<div id=\"form-wrapper\">
    <form class=\"email-form visible\" id=\"registry\">
        <p>Audi Center López Mateos y Audi Center Guadalajara te invitan a conocer el nuevo Audi Q5 2018 el día 9 de febrero a las 20:30 h.</p>
        <p>Llena el siguiente formulario y un asesor se comunicara contigo para enviarte tu invitación al evento.</p>
        <p><span style=\"color: red; font-size: 12px;\">Los campos marcados con <span style=\"color: red;\" class=\"fa fa-asterisk\"></span> son requeridos</span></p>
        <!-- financing -->
        <div class=\"financing_elements\">
            <div class=\"financing_element a\">
                <fieldset>
                    <label for=\"aud_name\">
                        <span style=\"color: red;\" class=\"fa fa-asterisk\"></span> Nombre
                    </label>
                    <input
                        type=\"text\"
                        id=\"aud_name\"
                        name=\"nombre\"
                        class=\"form-control validate-required\"
                        placeholder=\"Nombre\"
                        data-validation-data=\"required|name\">
                    <p class=\"invalid-message\" id=\"error_name\">Este campo es obligatorio<span>&nbsp;</span></p>
                </fieldset>
            </div>
            <div class=\"financing_element b\">
                <fieldset>
                    <label for=\"aud_lastname\">
                        <span style=\"color: red;\" class=\"fa fa-asterisk\"></span> Apellido
                    </label>
                    <input
                        type=\"text\"
                        id=\"aud_lastname\"
                        name=\"apellidos\"
                        class=\"form-control validate-required\"
                        placeholder=\"Apellidos Paterno y Materno\"
                        data-validation-data=\"required|name\">
                    <p class=\"invalid-message\" id=\"error_lastname\">Este campo es obligatorio<span>&nbsp;</span></p>
                </fieldset>
            </div>
            <div class=\"clearfix\"></div>
        </div>
        <div class=\"financing_elements\">
            <div class=\"financing_element a\">
                <fieldset>
                    <label for=\"aud_email\">
                        <span style=\"color: red;\" class=\"fa fa-asterisk\"></span> Correo electrónico
                    </label>
                   <input
                        type=\"email\"
                        id=\"aud_email\"
                        name=\"correo\"
                        class=\"form-control validate-required input icon email\"
                        placeholder=\"Correo electrónico\"
                        data-validation-data=\"required|email\">
                   <p class=\"invalid-message\" id=\"error_mail\">Este campo es obligatorio<span>&nbsp;</span></p>
                </fieldset>
            </div>
            <div class=\"financing_element b\">
                <fieldset>
                    <label for=\"aud_phone\">
                        <span style=\"color: red;\" class=\"fa fa-asterisk\"></span> Número de celular
                    </label>
                    <input
                        type=\"tel\"
                        id=\"aud_phone\"
                        name=\"telefono\"
                        class=\"form-control validate-required\"
                        maxlength=\"13\"
                        placeholder=\"Número de celular\"
                        data-validation-data=\"required|phone\">
                    <p class=\"invalid-message\" id=\"error_phone\">Este campo es obligatorio<span>&nbsp;</span></p>
                </fieldset>
            </div>
            <div class=\"clearfix\"></div>
        </div>
        <p class=\"border-bottom mt10 pb10\">
            Comentarios
        </p>
        <p></p>
        <div class=\"financing_elements\">
            <div class=\"financing_element ab\">
                <fieldset>
                    <label for=\"aud_message\">
                        Mensaje
                    </label>
                    <textarea
                        name=\"mensaje\"
                        class=\"form-control escribir2 \"
                        id=\"aud_message\"
                        ></textarea>
                </fieldset>
            </div>
            <div class=\"clearfix\"></div>
        </div>
        <input type=\"hidden\" name=\"producto\" id=\"aud_producto\" value=\"\">
        <input type=\"hidden\" name=\"agencia\" id=\"aud_agn\" value=\"Audi Center López Mateos\">
    </form>
    <div class=\"financing_elements\">
        <div class=\"financing_element a\">
            <fieldset>
                <div id=\"loader_send_icon\" class=\"form-loader\" style=\"display: none;\">
                    <div class=\"loader\">
                        <div class=\"loader-wrap\">
                            <div class=\"loader-item\"></div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div class=\"financing_element b\">
            <fieldset>
                <div class=\"pl0\" id=\"button_leads_form_financing\">
                    <button class=\"primaryLinkWithStyle plwsLight TargetLinks financing_by_model is_empty_email send_contact_form\" id=\"registry-send\">
                        <span>ENVIAR</span>
                    </button>
                </div>
                <div class=\"pl0\" id=\"button-return\">
                    <a href=\"";
        // line 116
        echo twig_escape_filter($this->env, (isset($context["_host"]) ? $context["_host"] : null), "html", null, true);
        echo "\" class=\"primaryLinkWithStyle plwsLight TargetLinks resp-button\" id=\"primaryLinkWithStyle\">
                        <span>REGRESAR</span>
                    </a>
                </div>
            </fieldset>
        </div>
    </div>
    <div class=\"clearfix\"></div>
    <div class=\"financing_elements\">
        <div class=\"financing_element ab\">
            <fieldset>
                <p id=\"revisa_aviso\">
                    Tus datos están a salvo.<br>
                    Para mayor información revisa nuestro <a href=\"http://www.audi.com.mx/mx/brand/es2.html#overlay/load/mx/brand/es2/tools/navigation/meta/privacy.html\" target=\"_blank\">Aviso de privacidad</a>
                </p>
            </fieldset>
        </div>
    </div>
    <div class=\"clearfix\"></div>
</div>";
    }

    public function getTemplateName()
    {
        return "landing/financiamiento/contacto/contact_form_registro.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  136 => 116,  19 => 1,);
    }
}
/* <div id="form-wrapper">*/
/*     <form class="email-form visible" id="registry">*/
/*         <p>Audi Center López Mateos y Audi Center Guadalajara te invitan a conocer el nuevo Audi Q5 2018 el día 9 de febrero a las 20:30 h.</p>*/
/*         <p>Llena el siguiente formulario y un asesor se comunicara contigo para enviarte tu invitación al evento.</p>*/
/*         <p><span style="color: red; font-size: 12px;">Los campos marcados con <span style="color: red;" class="fa fa-asterisk"></span> son requeridos</span></p>*/
/*         <!-- financing -->*/
/*         <div class="financing_elements">*/
/*             <div class="financing_element a">*/
/*                 <fieldset>*/
/*                     <label for="aud_name">*/
/*                         <span style="color: red;" class="fa fa-asterisk"></span> Nombre*/
/*                     </label>*/
/*                     <input*/
/*                         type="text"*/
/*                         id="aud_name"*/
/*                         name="nombre"*/
/*                         class="form-control validate-required"*/
/*                         placeholder="Nombre"*/
/*                         data-validation-data="required|name">*/
/*                     <p class="invalid-message" id="error_name">Este campo es obligatorio<span>&nbsp;</span></p>*/
/*                 </fieldset>*/
/*             </div>*/
/*             <div class="financing_element b">*/
/*                 <fieldset>*/
/*                     <label for="aud_lastname">*/
/*                         <span style="color: red;" class="fa fa-asterisk"></span> Apellido*/
/*                     </label>*/
/*                     <input*/
/*                         type="text"*/
/*                         id="aud_lastname"*/
/*                         name="apellidos"*/
/*                         class="form-control validate-required"*/
/*                         placeholder="Apellidos Paterno y Materno"*/
/*                         data-validation-data="required|name">*/
/*                     <p class="invalid-message" id="error_lastname">Este campo es obligatorio<span>&nbsp;</span></p>*/
/*                 </fieldset>*/
/*             </div>*/
/*             <div class="clearfix"></div>*/
/*         </div>*/
/*         <div class="financing_elements">*/
/*             <div class="financing_element a">*/
/*                 <fieldset>*/
/*                     <label for="aud_email">*/
/*                         <span style="color: red;" class="fa fa-asterisk"></span> Correo electrónico*/
/*                     </label>*/
/*                    <input*/
/*                         type="email"*/
/*                         id="aud_email"*/
/*                         name="correo"*/
/*                         class="form-control validate-required input icon email"*/
/*                         placeholder="Correo electrónico"*/
/*                         data-validation-data="required|email">*/
/*                    <p class="invalid-message" id="error_mail">Este campo es obligatorio<span>&nbsp;</span></p>*/
/*                 </fieldset>*/
/*             </div>*/
/*             <div class="financing_element b">*/
/*                 <fieldset>*/
/*                     <label for="aud_phone">*/
/*                         <span style="color: red;" class="fa fa-asterisk"></span> Número de celular*/
/*                     </label>*/
/*                     <input*/
/*                         type="tel"*/
/*                         id="aud_phone"*/
/*                         name="telefono"*/
/*                         class="form-control validate-required"*/
/*                         maxlength="13"*/
/*                         placeholder="Número de celular"*/
/*                         data-validation-data="required|phone">*/
/*                     <p class="invalid-message" id="error_phone">Este campo es obligatorio<span>&nbsp;</span></p>*/
/*                 </fieldset>*/
/*             </div>*/
/*             <div class="clearfix"></div>*/
/*         </div>*/
/*         <p class="border-bottom mt10 pb10">*/
/*             Comentarios*/
/*         </p>*/
/*         <p></p>*/
/*         <div class="financing_elements">*/
/*             <div class="financing_element ab">*/
/*                 <fieldset>*/
/*                     <label for="aud_message">*/
/*                         Mensaje*/
/*                     </label>*/
/*                     <textarea*/
/*                         name="mensaje"*/
/*                         class="form-control escribir2 "*/
/*                         id="aud_message"*/
/*                         ></textarea>*/
/*                 </fieldset>*/
/*             </div>*/
/*             <div class="clearfix"></div>*/
/*         </div>*/
/*         <input type="hidden" name="producto" id="aud_producto" value="">*/
/*         <input type="hidden" name="agencia" id="aud_agn" value="Audi Center López Mateos">*/
/*     </form>*/
/*     <div class="financing_elements">*/
/*         <div class="financing_element a">*/
/*             <fieldset>*/
/*                 <div id="loader_send_icon" class="form-loader" style="display: none;">*/
/*                     <div class="loader">*/
/*                         <div class="loader-wrap">*/
/*                             <div class="loader-item"></div>*/
/*                         </div>*/
/*                     </div>*/
/*                 </div>*/
/*             </fieldset>*/
/*         </div>*/
/*         <div class="financing_element b">*/
/*             <fieldset>*/
/*                 <div class="pl0" id="button_leads_form_financing">*/
/*                     <button class="primaryLinkWithStyle plwsLight TargetLinks financing_by_model is_empty_email send_contact_form" id="registry-send">*/
/*                         <span>ENVIAR</span>*/
/*                     </button>*/
/*                 </div>*/
/*                 <div class="pl0" id="button-return">*/
/*                     <a href="{{ _host }}" class="primaryLinkWithStyle plwsLight TargetLinks resp-button" id="primaryLinkWithStyle">*/
/*                         <span>REGRESAR</span>*/
/*                     </a>*/
/*                 </div>*/
/*             </fieldset>*/
/*         </div>*/
/*     </div>*/
/*     <div class="clearfix"></div>*/
/*     <div class="financing_elements">*/
/*         <div class="financing_element ab">*/
/*             <fieldset>*/
/*                 <p id="revisa_aviso">*/
/*                     Tus datos están a salvo.<br>*/
/*                     Para mayor información revisa nuestro <a href="http://www.audi.com.mx/mx/brand/es2.html#overlay/load/mx/brand/es2/tools/navigation/meta/privacy.html" target="_blank">Aviso de privacidad</a>*/
/*                 </p>*/
/*             </fieldset>*/
/*         </div>*/
/*     </div>*/
/*     <div class="clearfix"></div>*/
/* </div>*/
