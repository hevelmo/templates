/*
    In this section will be added some necessary functions and code when
    the page loads and is ready.
    The manage of the DOM elements events will be here too.
*/

$(document).ready(function() {

    // Add favicon
    window.onload = function() {
        favicon.change("img/favicon.png");
        // Uncomment to see how change() will cancel the animation
        setTimeout(function() { favicon.change("img/favicon.png") }, 10000);
    }
    $(window).resize(function() {
        __sizeCheck($(this));
    });

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
        EVENT CONTROL
    \* ------------------------------------------------------ */

    $(domEl.div_recurrent_body).on('click', ':not(".menu")', menuResponsiveMethod.clickMenuResponsive);
    $(domEl.div_recurrent_body).on('click', ".menu,.menu-responsive", menuResponsiveMethod.stopPropagation);

    $(window).on('scroll', scrollHeaderMethods.toTopScroll);
    $(window).on('scroll', scrollHeaderMethods.pageHeaderScroll);

    $(domEl.div_recurrent_body).on('click', '#totop', scrollHeaderMethods.clickToTopScroll);

    $(domEl.nav_recurrent).on('click', domEl.finch_return_menu_index, actionMethod.clickRetun);
    $(domEl.div_recurrent_body).on('click', domEl.finch_return_logo_index, actionMethod.clickRetun);
    $(domEl.div_recurrent_body).on('click', domEl.finch_return_footer_index, actionMethod.clickRetun);
    $(domEl.div_recurrent_header_background).on('click', domEl.finch_return_breadcumb_index, actionMethod.clickRetun);
    $(domEl.nav_recurrent).on('click', domEl.finch_menu_ucd, actionMethod.clickGoUcd);
    $(domEl.nav_recurrent).on('click', domEl.finch_menu_services, actionMethod.clickGoServices);
    $(domEl.nav_recurrent).on('click', domEl.finch_menu_results, actionMethod.clickGoViewResults);
    $(domEl.nav_recurrent).on('click', domEl.finch_menu_program, actionMethod.clickProgram);
    $(domEl.div_recurrent).on('click', domEl.finch_menu_program, actionMethod.clickProgram);
    $(domEl.nav_recurrent).on('click', domEl.finch_menu_promos, actionMethod.clickPromos);
    $(domEl.nav_recurrent).on('click', domEl.finch_menu_recognitions, actionMethod.clickGoRecognitions);
    $(domEl.nav_recurrent).on('click', domEl.finch_menu_contact, actionMethod.clickGoContact);
    $(domEl.nav_recurrent).on('click', domEl.finch_menu_appointment, actionMethod.clickGoAppointment);
    $(domEl.div_recurrent_body).on('click', domEl.finch_footer_privacy_notice, actionMethod.clickGoPrivacyNotice);

    /* SEND CONTACT */
    $(domEl.div_recurrent).on('click', '#ucd_send_contact_submit', contactMethods.sendContactForm);
});
