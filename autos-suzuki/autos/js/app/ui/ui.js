define(["jquery", "fancybox", "fancybox-thumbs", "select2", "simpleSlider", "moment", "pikaday", "tooltipster", "app/modules/config", "app/modules/utils", "app/ui/ui", "app/validations/validations", "app/services/services", "app/analytics/analytics", "app/financing/financing", "i18n_es"], function(e, t, i, n, s, o, a, l, r, u, c, d, f, p, m, h) {
    Array.max = function(e) {
        return Math.max.apply(Math, e)
    };
    var v, g, b = null,
        w = !1,
        j = !1,
        T = 0,
        k = !1,
        E = null,
        O = null,
        L = null,
        C = null,
        M = null,
        _ = null,
        x = null,
        D = null,
        B = null,
        R = null,
        A = null,
        I = null,
        y = null,
        S = null,
        N = null,
        P = null,
        F = null,
        U = null,
        H = null,
        K = null,
        Y = null,
        z = null,
        V = null,
        W = function() {
            E.resize(function() {
                b.isResponsive() || b.setFullHeights()
            }), E.scroll(function() {
                b.isResponsive() || (E.scrollTop() > 0 ? (j || (O.addClass("menu-is-fixed"), _.addClass("is-fixed"), j = !0), O.hasClass("menu-is-fixed") && O.css("padding-top", x.filter(":visible").height() + T + "px")) : (O.removeClass("menu-is-fixed"), _.removeClass("is-fixed"), O.css("padding-top", "0px"), j = !1))
            }), M.bind("click", function(t) {
                t.preventDefault(), e(this).addClass("l-mobile-header__menu-icon--active"), L.addClass("mobile-menu--open"), setTimeout(function() {
                    w = !0
                }, r.timers.MENU_OPEN)
            }), L.bind("click", function() {
                b.isResponsive() && w && (M.removeClass("l-mobile-header__menu-icon--active"), L.removeClass("mobile-menu--open"), setTimeout(function() {
                    w = !1
                }, r.timers.MENU_OPEN))
            }), D.bind("click", function(t) {
                t.preventDefault();
                var i = e(this).attr("href");
                b.isBigMenuOpen(i) ? b.closeBigMenu(i) : (b.openBigMenu(i), "#prueba-de-manejo" === i && p.clickAgendarPruebaStepOne())
            }), B.bind("click", function(t) {
                t.preventDefault(), b.closeBigMenu(e(this).attr("href"))
            }), R.bind("click", function(t) {
                t.preventDefault();
                var i = b.isResponsive() ? 0 : T;
                O.animate({
                    scrollTop: e(e(this).attr("href")).offset().top - i
                }, r.timers.SCROLL_TO)
            }), I.bind("click", function() {
                if (b.isResponsive()) {
                    var t = e(this).parent();
                    t.hasClass("active") ? (t.removeClass("active").find(".js-submenu-links").slideUp(), A.show()) : (A.hide(), t.addClass("active").show().find(".js-submenu-links").slideDown())
                }
            }), S.bind("click", function() {
                b.isResponsive() && (e(this).hasClass("active") ? (S.removeClass("active"), S.parent().find(".js-footer-toggle-list").slideUp()) : (S.removeClass("active"), e(this).addClass("active"), S.parent().find(".js-footer-toggle-list").slideUp(), e(this).parent().find(".js-footer-toggle-list").slideDown()))
            }), K.bind("click", function(t) {
                if (t.preventDefault(), !e(this).data("disabled"))
                    if (d.validateFooterNewsletter()) {
                        var i = e(this).closest(".js-form-footer-newsletter"),
                            n = i.find(".js-footer-name").val(),
                            s = i.find(".js-footer-email").val();
                        f.newsletterService(n, s, r.analytics.SOURCE_FOOTER, X), b.setButtonLoadingStyle(e(this), r.messages.SENDING, !1)
                    } else console.log("Error")
            })
        },
        G = function(t) {
            q();
            var i = u.template(r.templates.FAKE_ALERT_TEMPLATE, {
                fake_link: t.link,
                fake_text: t.text,
                fake_id: t.id
            });
            O.append(i), V = e(".js-fake-alert-" + t.id), V.fadeIn(), V.find(".js-fake-alert-close").bind("click", function() {
                clearTimeout(g), q()
            }), g = setTimeout(function() {
                q()
            }, r.timers.FAKE_TIMEOUT)
        },
        q = function() {
            null != V && V.fadeOut(r.timers.DEFAULT_TIMER, function() {
                e(".js-fake-alert").remove()
            })
        },
        J = function() {
            f.quotesService(G)
        },
        Q = function(e) {},
        X = function() {
            Y.hide(), z.fadeIn(), b.removeButtonLoadingStyle(K, !1), p.inscriptionNewsletterFooter()
        },
        Z = function() {
            N.length && (N.parent().find(".slick-prev").css("margin-left", "-" + (N.width() / 2 + 20) + "px"), N.parent().find(".slick-next").css("margin-left", N.width() / 2 + 10 + "px"))
        },
        $ = function(t) {
            return e.inArray(t, r.logic.VALID_HASHES) > -1
        },
        ee = function(t) {
            return e.inArray(t, r.logic.VALID_HASHES_SCROLL) > -1
        };
    return {
        init: function() {
            b = this, E = e(window), O = e("body"), L = e(".js-offcanvas"), C = e(".js-full-height"), M = e(".js-mobile-menu-icon"), _ = e(".js-desktop-header"), x = e(".js-big-menu"), D = e(".js-open-bigmenu"), B = e(".js-close-bigmenu"), R = e(".js-scroll-to"), A = e(".js-submenu-group"), I = e(".js-submenu-action"), y = e(".js-submenu-group-title"), N = e(".js-generic-slider .slick-dots"), S = e(".js-footer-toggle-button"), P = e(".js-fancybox-link"), F = e(".js-select"), U = e(".js-range"), H = e(".js-tooltip"), K = e(".js-footer-submit"), Y = e(".js-footer-news"), z = e(".js-footer-news-message"), T = _.height();
            var t = window.location.hash;
            "rendimientos" == window.location.pathname.split("/").slice(-1)[0] && b.openBigMenu("#modelos"), t.length > 0 && $(t) && b.openBigMenu(t), b.isResponsive() || b.setFullHeights(), ee(t) && e("html, body").animate({
                scrollTop: e(t).offset().top - 60
            }, r.timers.SCROLL_TO), F.each(function(t) {
                var i = e(this).data("label"),
                    n = e(this).data("service");
                n ? Q(e(this)) : e(this).select2({
                    placeholder: i,
                    language: h
                })
            }), U.simpleSlider();
            b.createDatePicker(document.getElementById("picker-financing-header")), b.createDatePicker(document.getElementById("picker-testdrive-header"));
            H.tooltipster({
                arrow: r.ui.TOOLTIP.arrow,
                content: r.ui.TOOLTIP.content,
                maxWidth: r.ui.TOOLTIP.maxwidth,
                position: r.ui.TOOLTIP.position,
                touchDevices: r.ui.TOOLTIP.touchDevices,
                functionBefore: function(t, i) {
                    var n = e(t);
                    t.tooltipster("option", "arrow", t.data("arrow")), t.tooltipster("content", e(n.data("content"))), t.tooltipster("option", "maxWidth", t.data("maxwidth")), t.tooltipster("option", "position", t.data("position")), i()
                }
            }), u.isMobile() || (v = window.setInterval(function() {
                J()
            }, r.timers.FAKE_INTERVAL)), Z(), W()
        },
        openBigMenu: function(t) {
            x.hide(), x.find(".js-big-menu-content").fadeTo(0, 0);
            var i = e(t);
            switch (x.data("open", !1), i.data("open", !0), k ? i.show() : i.slideDown(), setTimeout(function() {
                i.find(".js-big-menu-content").fadeTo(r.timers.MENU_OPEN, 1)
            }, r.timers.MENU_TIMEOUT), setTimeout(function() {
                b.isResponsive() || O.hasClass("menu-is-fixed") && O.css("padding-top", i.height() + T + "px")
            }, r.timers.BIGMENU_SLIDEDOWN), b.setLinkBigMenuActive(t), k = !0, b.isResponsive() && A.show().removeClass("active").find(".js-submenu-links").hide(), O.animate({
                scrollTop: 0
            }, r.timers.SCROLL_TO), t) {
                case "#cotizar":
                    m.getFinancingData()
            }
        },
        closeBigMenu: function(t) {
            var i = e(t);
            i.slideUp(), b.isResponsive() || O.css("padding-top", "0px"), i.data("open", !1), b.unsetLinkBigMenuActive(t), k = !1
        },
        isBigMenuOpen: function(t) {
            return e(t).data("open")
        },
        setLinkBigMenuActive: function(t) {
            D.removeClass("active"), e('[data-active="' + t + '"]').addClass("active")
        },
        unsetLinkBigMenuActive: function(t) {
            e('[data-active="' + t + '"]').removeClass("active")
        },
        setButtonLoadingStyle: function(e, t, i) {
            e.data("disabled", !0), e.addClass("m-button--disabled"), i ? (e.find(".js-button-icon").hide(), e.find(".js-button-label").text(t)) : e.text(t)
        },
        removeButtonLoadingStyle: function(e, t) {
            e.removeClass("m-button--disabled"), e.data("disabled", !1), t ? (e.find(".js-button-icon").show(), e.find(".js-button-label").text(e.data("label"))) : e.text(e.data("label"))
        },
        createDatePicker: function(e) {
            return new a({
                field: e,
                format: "YYYY-MM-DD",
                minDate: new Date,
                i18n: r.ui.PICKER_DAY_ES
            })
        },
        setFullHeights: function() {
            C.length > 0 && C.css("min-height", e(window).height() - e(".js-desktop-header").height())
        },
        isResponsive: function() {
            return !!(u.isMobile() || e(window).width() / parseFloat(e("body").css("font-size")) < r.ui.MOBILE_BREAKPOINT)
        },
        isLarge: function() {
            return e(window).width() / parseFloat(e("body").css("font-size")) > r.ui.LARGE_BREAKPOINT
        },
        isVisible: function(e) {
            var t = E,
                i = {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                };
            i.right = i.left + t.width(), i.bottom = i.top + t.height();
            var n = e.offset();
            return n.right = n.left + e.outerWidth(), n.bottom = n.top + e.outerHeight(), i.top >= n.top - T && i.top <= n.bottom - T
        }
    }
});