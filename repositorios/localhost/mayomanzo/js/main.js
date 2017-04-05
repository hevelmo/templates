$(document).ready(function() {
    var $back_to_top;
    $back_to_top = $('.top');
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
    // BAC TO TOP
    $('body').on('click', '.top', backToTopMethod.backToTop);
    // NAVBAR COLLAPSE ON SCROLL
    $(window).on('scroll', navbar_collapse_on_scroll_method.navbar_collapse_on_scroll);

    // SCROLLING EATURE
    $(domEl.div_recurrent).on('click', 'a.smooth-scroll', page_scrolling_feature_method.page_scrolling_feature);

    // GO SECTION
    $(domEl.start_site_tp_header).on('click', '#go_home', go_section_method.go_section_home);
    $(domEl.start_site_tp_navbar).on('click', '#go_home', go_section_method.go_section_home);
    $(domEl.div_recurrent).on('click', '#go_home', go_section_method.go_section_home);

    // VALIDATEION MESSAGE
    $(domEl.div_recurrent).on('focusout', domEl.validate_required, validateMethods.validate_input);
});
