define([], function() {
    var e = null;
    return {
        init: function() {
            e = this
        },
        clickAgendarPruebaStepOne: function() {
            ga("send", "event", "Prueba de Manejo", "Paso_1", "Header_Selecciona_Suzuki")
        },
        clickAgendarPruebaStepTwo: function() {
            ga("send", "event", "Prueba de Manejo", "Paso_2", "Header_Selecciona_Concesionaria")
        },
        clickAgendarPruebaStepThree: function() {
            ga("send", "event", "Prueba de Manejo", "Paso_3", "Header_Fecha_Datos")
        },
        sendAgendarPrueba: function(e, n, o, a) {
            var t = Math.floor(.066 * o);
            ga("send", "event", "Prueba de Manejo", e, n + "_" + a, t.toString())
        },
        sendCotizacionModel: function(e, n, o, a) {
            if (a === !0) {
                var t = Math.floor(.066 * n);
                ga("send", "event", "Cotizacion con Prueba", "Confirmacion", e + "_" + o, t.toString())
            } else {
                var t = Math.floor(.0086 * n);
                ga("send", "event", "Cotizador", "Confirmacion", e + "_" + o, t.toString())
            }
        },
        inscriptionNewsletterFooter: function() {
            ga("send", "event", "Newsletter", "Confirmacion", "Footer", 600)
        },
        clickCaracteristicasModel: function(e) {
            ga("send", "pageview", "https://www.suzuki.com.mx/autos/" + e + "/caracteristicas")
        },
        clickGaleriaModel: function(e) {
            ga("send", "pageview", "https://www.suzuki.com.mx/autos/" + e + "/galeria")
        },
        clickVersionesModel: function(e) {
            ga("send", "pageview", "https://www.suzuki.com.mx/autos/" + e + "/versiones_prices")
        },
        clickAgendarPruebaModel: function(e) {
            ga("send", "pageview", "https://www.suzuki.com.mx/autos/" + e + "/prueba-de-manejo")
        },
        downloadCatalogoAccesoriosModel: function(e) {
            ga("send", "event", "Material de apoyo", "Descarga", "Accesorios" + e)
        },
        downloadFichaTecnicaModel: function(e) {
            ga("send", "event", "Material de apoyo", "Descarga", "Ficha_" + e)
        },
        downloadCatalog: function(e) {
            ga("send", "event", "Material de apoyo", "Descarga", "Catalogo_" + e)
        },
        sendContactForm: function(e, n, o, a) {
            if (a || "Ventas" == o || ga("send", "event", "Formulario", "Envio_Sin_Newsletter", o), !a && "Ventas" === o) {
                var t = Math.floor(.03 * n);
                ga("send", "event", "Formulario", "Envio_Sin_Newsletter", "Ventas_" + e, t.toString())
            }
            if (a && "Ventas" != o && ga("send", "event", "Formulario", "Envio_con_Newsletter", o, 600), a && "Ventas" === o) {
                var t = Math.floor(.03 * n + 600);
                ga("send", "event", "Formulario", "Envio_con_Newsletter", "Ventas_" + e, t.toString())
            }
        },
        clickQuieroMiBono: function() {
            ga("send", "event", "Promociones", "clic", "bono")
        },
        callbackQuieroMiBono: function(e, n) {
            ga("send", "event", "Promociones", "enviar", e + "_" + n)
        },
        callbackPruebaPromocion: function(e, n, o) {
            var a = Math.floor(.066 * n);
            ga("send", "event", "Promocion con Prueba ", "Confirmacion", e + "_" + o, a.toString())
        },
        clickTooltipTenReasons: function(e) {
            ga("send", "event", "Tooltip", "Clic", e)
        },
        clickTooltipInstantdrive: function(e, n) {
            ga("send", "event", "Tooltip", "Clic", "Instant_" + e + "_" + n)
        }
    }
});