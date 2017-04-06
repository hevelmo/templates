<?php

/* landing/financiamiento/contacto/contact_form.twig */
class __TwigTemplate_4710bfb6140926704405bfbeeece64bd99616c0bb513fec465512061a950a721 extends Twig_Template
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
    <form class=\"email-form visible\" id=\"financing\">
        <p>Nos gustaría enviarte una cotización por correo electrónico</p>
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
        <div class=\"financing_elements\">
            <div class=\"financing_element ab\">
                <fieldset>
                    <label for=\"leads_email\">
                        <span style=\"color: red;\" class=\"fa fa-asterisk\"></span> Selecciona Agencia
                    </label>
                    <div class=\"select\">
                        <select id=\"aud_agn\" type=\"dropdown\" name=\"agencia\" class=\"financing-select form-control seleccionar validate-required stl_select\" style=\"width: 100%;\" data-validation-data=\"required\">
                            <option label=\"Selecciona Agencia...\" selected=\"selected\" disabled=\"disabled\" value=\"\">Selecciona Agencia</option>
                            <option data-max-id=\"11\" label=\"Audi Lopez Mateos\" value=\"Audi Lopez Mateos\">Audi Lopez Mateos</option>
                            <option data-max-id=\"10\" label=\"Audi Patria\" value=\"Audi Patria\">Audi Patria</option>
                        </select>
                        <p class=\"invalid-message\" id=\"error_agencia\">Este campo es obligatorio<span>&nbsp;</span></p>
                    </div>
                </fieldset>
            </div>
            <div class=\"clearfix\"></div>
        </div>
        <p class=\"border-bottom mt10 pb10\">
            Comentarios <br>
            <span style=\"font-size: 12px;\">Escribe tus necesidades, tenemos un plan para tí.</span>
        </p>
        <p></p>
        <div class=\"financing_elements\">
            <div class=\"financing_element ab\">
                <fieldset>
                    <label for=\"aud_message\">
                        <span style=\"color: red;\" class=\"fa fa-asterisk\"></span> Mensaje
                    </label>
                    <textarea
                        name=\"mensaje\"
                        class=\"form-control escribir2 validate-required\"
                        id=\"aud_message\"
                        data-validation-data=\"required|free\"></textarea>
                    <p class=\"invalid-message\" id=\"error_mensaje\">Este campo es obligatorio<span>&nbsp;</span></p>
                </fieldset>
            </div>
            <div class=\"clearfix\"></div>
        </div>
        <input type=\"hidden\" name=\"producto\" id=\"aud_producto\" value=\"\">
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
                    <button class=\"primaryLinkWithStyle plwsLight TargetLinks financing_by_model is_empty_email send_contact_form\" id=\"financing-send\">
                        <span>ENVIAR</span>
                    </button>
                </div>
                <div class=\"pl0\" id=\"button-return\">
                    <a href=\"";
        // line 134
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
        return "landing/financiamiento/contacto/contact_form.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  154 => 134,  19 => 1,);
    }
}
/* <div id="form-wrapper">*/
/*     <form class="email-form visible" id="financing">*/
/*         <p>Nos gustaría enviarte una cotización por correo electrónico</p>*/
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
/*         <div class="financing_elements">*/
/*             <div class="financing_element ab">*/
/*                 <fieldset>*/
/*                     <label for="leads_email">*/
/*                         <span style="color: red;" class="fa fa-asterisk"></span> Selecciona Agencia*/
/*                     </label>*/
/*                     <div class="select">*/
/*                         <select id="aud_agn" type="dropdown" name="agencia" class="financing-select form-control seleccionar validate-required stl_select" style="width: 100%;" data-validation-data="required">*/
/*                             <option label="Selecciona Agencia..." selected="selected" disabled="disabled" value="">Selecciona Agencia</option>*/
/*                             <option data-max-id="11" label="Audi Lopez Mateos" value="Audi Lopez Mateos">Audi Lopez Mateos</option>*/
/*                             <option data-max-id="10" label="Audi Patria" value="Audi Patria">Audi Patria</option>*/
/*                         </select>*/
/*                         <p class="invalid-message" id="error_agencia">Este campo es obligatorio<span>&nbsp;</span></p>*/
/*                     </div>*/
/*                 </fieldset>*/
/*             </div>*/
/*             <div class="clearfix"></div>*/
/*         </div>*/
/*         <p class="border-bottom mt10 pb10">*/
/*             Comentarios <br>*/
/*             <span style="font-size: 12px;">Escribe tus necesidades, tenemos un plan para tí.</span>*/
/*         </p>*/
/*         <p></p>*/
/*         <div class="financing_elements">*/
/*             <div class="financing_element ab">*/
/*                 <fieldset>*/
/*                     <label for="aud_message">*/
/*                         <span style="color: red;" class="fa fa-asterisk"></span> Mensaje*/
/*                     </label>*/
/*                     <textarea*/
/*                         name="mensaje"*/
/*                         class="form-control escribir2 validate-required"*/
/*                         id="aud_message"*/
/*                         data-validation-data="required|free"></textarea>*/
/*                     <p class="invalid-message" id="error_mensaje">Este campo es obligatorio<span>&nbsp;</span></p>*/
/*                 </fieldset>*/
/*             </div>*/
/*             <div class="clearfix"></div>*/
/*         </div>*/
/*         <input type="hidden" name="producto" id="aud_producto" value="">*/
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
/*                     <button class="primaryLinkWithStyle plwsLight TargetLinks financing_by_model is_empty_email send_contact_form" id="financing-send">*/
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
