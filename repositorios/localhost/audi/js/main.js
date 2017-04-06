$(document).ready(function() {
    /* ------------------------------------------------------ *\
     [METHOS Control] Serialize Form
    \* ------------------------------------------------------ */
        //This method change a form into a JSON
        $.fn.serializeFormJSON = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
    /* ------------------------------------------------------ *\
     [METHOS Control] Currency Format
    \* ------------------------------------------------------ */
        Number.prototype.format = function(n, x) {
            var re = '(\\d)(?=(\\d{' + (x || 3) + '}) + ' + (n > 0 ? '\\.' : '$') + ')';
            return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
        };
    /* ------------------------------------------------------ *\
     [Funciones Control] Hidding and Showing divs
    \* ------------------------------------------------------ */

    /*$('body').on('click', '.panel-card .tools-card .fa', function () {
        var time, el;
        time = 100;

        el = $(this).parents(".panel-card").children(".paner-card-body");
        if ($(this).hasClass("fa-chevron-down")) {
            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(time);
            $('.paner-card-body').slideDown();
        } else {
            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(time); 
            $('.paner-card-body').slideUp();
        }
    });
    */
    $('body').on( "click", ".toogle-card", showDetailCard.clickShowDetails);
    /* ------------------------------------------------------ *\
        EVENT CONTROL
    \* ------------------------------------------------------ */
    $('body').on('click', '.back-to-top', backToTopMethod.backToTop);
    $(window).scroll(fixed_header.fixed_scroll);
    // NAVBAR
    $('body').on('click', domEl._menu_toogle, mobile_menu_methods.mobile_menu_toggle);
    // MOBILE MENU TOGGLE
    $('body').on('click', domEl._menu_toogle_close, mobile_menu_methods.close_menu_toggle);

    //
    $(domEl.div_recurrent).on('focusout', '.validate-required', function() { $.validate_input( $(this) ) });
    $(domEl.div_recurrent).on("click", '#financing-send', financingForm.clickSend);
    $(domEl.div_recurrent).on("click", '#registry-send', registryForm.clickSend);
    $(domEl.div_recurrent).on("click", '#financing-accesories-send', financingAccesoriesForm.clickSend);
    //
    $(domEl.div_recurrent).on('click', '#scroll-aud-a3-sedan', scrollContact.initA3Sedan);
    $(domEl.div_recurrent).on('click', '#scroll-aud-a6', scrollContact.initA6);
    $(domEl.div_recurrent).on('click', '#scroll-aud-a7', scrollContact.initA7);
    $(domEl.div_recurrent).on('click', '#scroll-aud-a8', scrollContact.initA8);
    $(domEl.div_recurrent).on('click', '#scroll-aud-accesorios', scrollContact.initAccesorios);
});