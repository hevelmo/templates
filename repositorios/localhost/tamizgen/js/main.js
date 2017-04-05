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
        EVENT CONTROL
    \* ------------------------------------------------------ */

    $(domEl.body_recurrent).on('click', ':not(".menu")', menuResponsiveMethod.clickMenuResponsive);
    $(domEl.body_recurrent).on('click', ".menu,.menu-responsive", menuResponsiveMethod.stopPropagation);
    $(window).on('scroll', scrollHeaderMethods.toTopScroll);
    $(window).on('scroll', scrollHeaderMethods.pageHeaderScroll);
    $(domEl.body_recurrent).on('click', '#totop', scrollHeaderMethods.clickToTopScroll);

    $(domEl.div_header_nav_recurrent).on('click', domEl.goSection_index, clikGoMethods.clickGo_home);

    $(domEl.body_recurrent).on('click', domEl.finch_return_logo_index, clikGoMethods.clickGo_home);
    $(domEl.body_recurrent).on('click', domEl.finch_return_footer_index, clikGoMethods.clickGo_home);

    $(domEl.div_header_nav_recurrent).on('click', domEl.goSection_about_us, clikGoMethods.clickGo_about_us);
    $(domEl.div_header_nav_recurrent).on('click', domEl.goSection_services, clikGoMethods.clickGo_services);
    $(domEl.div_recurrent).on('click', domEl.goSection_featuresServices, clikGoMethods.clickGo_services);
    $(domEl.div_header_nav_recurrent).on('click', domEl.goSection_objectives, clikGoMethods.clickGo_objectives);
    $(domEl.div_header_nav_recurrent).on('click', domEl.goSection_contact, clikGoMethods.clickGo_contact);
    // SECTION CONTACT START GMAP
    $(domEl.div_recurrent).on('click', '.map-holder', gmapMethod.gmapHolder);
    // SEND CONTACT
    $(domEl.div_recurrent).on('click', '#ucd_send_contact_submit', contactFormMethods.sendContactForm);
});
