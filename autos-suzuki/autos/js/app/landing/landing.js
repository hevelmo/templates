define(["jquery", "slick", "fancybox", "fancybox-thumbs", "moment", "pikaday", "app/modules/config", "app/modules/utils", "app/ui/ui", "app/services/services", "app/validations/validations", "app/analytics/analytics"], function(e, t, a, i, s, n, l, r, d, o, c, u) {
    Array.max = function(e) {
        return Math.max.apply(Math, e)
    };
    var f = null,
        v = [],
        _ = [],
        h = !1,
        p = 0,
        g = 0;
    _mobile_breakpoint = l.ui.MOBILE_BREAKPOINT * l.ui.FONT_BASE, _fancybox_is_created = !1, _verions_cells_array = [];
    var m = {
            car_model: "",
            car_model_id: "",
            car_price: 0,
            car_image: "",
            dealer: "",
            dealer_id: "",
            dealer_address: "",
            date: "",
            email: "",
            name: "",
            lastname: "",
            phone: "",
            source: "",
            newsletter: 0
        },
        b = null,
        T = null,
        y = null,
        D = null,
        E = null,
        k = null,
        C = null,
        j = null,
        I = null,
        O = null,
        N = null,
        A = null,
        S = null,
        L = null,
        w = null,
        V = null,
        M = null,
        x = null,
        R = null,
        P = null,
        B = null,
        U = null,
        Y = null,
        F = null,
        G = null,
        H = null,
        X = null,
        W = null,
        q = null,
        z = null,
        $ = null,
        K = null,
        Q = null,
        Z = null,
        J = null,
        ee = null,
        te = null,
        ae = null,
        ie = null,
        se = null,
        ne = null,
        le = null,
        re = null,
        de = function() {
            b.scroll(function() {
                if (!d.isResponsive()) {
                    var e = b.scrollTop();
                    e > 0 ? (h || (D.addClass("is-off-top"), E.addClass("is-visible"), ce(), j.fadeIn(), h = !0), d.isVisible(R) ? ue(0) : d.isVisible(P) ? ue(1) : d.isVisible(B) ? ue(2) : d.isVisible(F) ? ue(3) : d.isVisible(G) ? ue(4) : d.isVisible(H) && ue(5)) : (E.removeClass("is-visible"), D.removeClass("is-off-top"), j.fadeOut(), h = !1, setTimeout(function() {
                        ue(0)
                    }, l.timers.MENU_OPEN))
                }
            }), b.resize(function() {
                d.isLarge() ? fe() : ve(), be()
            }), k.bind("click", function(t) {
                t.preventDefault(), k.removeClass("active"), e(this).addClass("active"), ce(), e("html, body").animate({
                    scrollTop: e(e(this).attr("href")).offset().top - E.height()
                }, l.timers.SCROLL_TO)
            }), N.bind("click", function(t) {
                t.preventDefault(), N.removeClass("active"), e(this).addClass("active"), I.attr("src", e(this).data("color")), O.text(e(this).data("colorname") + " disponible en " + e(this).data("available"))
            }), U.bind("click", function(t) {
                return t.preventDefault(), r.isMobile() && e(this).data("visor") ? (alert(l.messages.ERROR_360), 0) : void _e(e(this).data("type"), e(this).data("model"), e(this).data("category"))
            }), W.bind("click", function() {
                e(this).hasClass("disabled") || e(this).hasClass("active") || f.gotoStep(e(this).index())
            }), z.on("click", ".js-landing-testdrive-dealer-link", function(t) {
                t.preventDefault(), e("body").append('<img style="display:none;" src="https://tags.w55c.net/rs?id=d25095e599574bf1b6a042d883847c2a&t=cart" />'), f.setTestdriveDataValue("dealer", e(this).data("dealername")), f.setTestdriveDataValue("dealer_id", e(this).data("dealerid")), f.setTestdriveDataValue("dealer_address", e(this).data("dealeraddress")), f.gotoStep(1)
            }), se.bind("click", function(t) {
                if (t.preventDefault(), !e(this).hasClass("m-button--disabled") && c.validateSendLandingTestdrive()) {
                    f.setTestdriveDataValue("car_model_id", X.data("carid")), f.setTestdriveDataValue("car_model", X.data("carname")), f.setTestdriveDataValue("car_price", parseFloat(X.data("carprice"))), f.setTestdriveDataValue("date", Z.val()), f.setTestdriveDataValue("email", te.val()), f.setTestdriveDataValue("name", J.val()), f.setTestdriveDataValue("lastname", ee.val()), f.setTestdriveDataValue("phone", ae.val()), f.setTestdriveDataValue("source", "Confirmacion_Models"), f.putDataToElement(ne, l.ui.CONTROL_TYPES.TEXT, m.email), f.putDataToElement(le, l.ui.CONTROL_TYPES.TEXT, m.dealer), ie.is(":checked") ? f.setTestdriveDataValue("newsletter", 1) : f.setTestdriveDataValue("newsletter", 0);
                    var a = {
                        car_model_id: m.car_model_id,
                        concessionaire_id: m.dealer_id,
                        date: m.date,
                        email: m.email,
                        name: m.name,
                        phone: m.phone,
                        source: m.source,
                        lastname: m.lastname,
                        newsletter: m.newsletter
                    };
                    o.testdriveService(a, f.successTestdrive, f.errorTestdrive), d.setButtonLoadingStyle(e(this), l.messages.SENDING, !1)
                }
            })
        },
        oe = function(e) {
            var t = e.data("hex"),
                a = t.substring(1),
                i = parseInt(a, 16),
                s = i >> 16 & 255,
                n = i >> 8 & 255,
                l = i >> 0 & 255,
                r = .2126 * s + .7152 * n + .0722 * l;
            r > 230 && e.addClass("m-model-colors__picker__item__link__clear")
        },
        ce = function() {
            var e = k.filter(".active");
            C.css("left", e.position().left + e.width() / 2), C.fadeTo(0, 1)
        },
        ue = function(e) {
            k.removeClass("active"), k.eq(e).addClass("active"), ce()
        },
        fe = function() {
            S.css("left", w.offset().left - S.width() - l.ui.MOBILE_PADDING + "px"), L.css({
                right: "auto",
                left: w.offset().left + w.width() + l.ui.MOBILE_PADDING + "px"
            })
        },
        ve = function() {
            S.css("left", l.ui.MOBILE_PADDING), L.css({
                left: "auto",
                right: l.ui.MOBILE_PADDING
            })
        },
        _e = function(e, t, a) {
            o.galleryService(e, t, a, he)
        },
        he = function(t, a) {
            for (var i = 0; i < a.length; i++) {
                var s = r.isMobile() ? a[i].picture_mobile : a[i].picture,
                    n = e('<a href="' + s + '" rel="gallery-' + t + '" data-fancybox-title="' + a[i].title + '" class="js-gallery-fancybox" style="display: none;" data-visor="' + a[i].is_360 + '"></a>');
                T.append(n)
            }
            if (Y = e(".js-gallery-fancybox"), a[0].is_360) {
                if (Y.first().data("visor")) {
                    var d = Y.first().attr("href");
                    Y.fancybox({
                        href: d,
                        type: "iframe",
                        padding: 0,
                        width: l.ui.FANCYBOX_360_WIDTH,
                        afterClose: function() {
                            Y.remove(), e(document).unbind("click.fb-start")
                        }
                    })
                }
            } else Y.fancybox({
                padding: 0,
                maxWidth: 600,
                type: "image",
                helpers: {
                    thumbs: {
                        width: l.ui.FANCYBOX_THUMB_WIDTH,
                        height: l.ui.FANCYBOX_THUMB_HEIGHT
                    }
                },
                afterClose: function() {
                    Y.remove(), e(document).unbind("click.fb-start")
                }
            });
            Y.first().trigger("click"), _fancybox_is_created = !0
        },
        pe = function(e) {
            return e.find("tbody tr").length
        },
        ge = function(e, t) {
            for (var a = pe(t), i = e - a; i > 0;) t.find("tbody").append("<tr><td></td></tr>"), i--
        },
        me = function(t) {
            var a = [];
            t.find("tbody tr").each(function(t) {
                var i = [];
                i.push(t, e(this)), a.push(i)
            }), _verions_cells_array.push(a)
        },
        be = function() {
            for (var t = [], a = [], i = 0; g > i; i++) {
                t = [], a = [];
                for (var s = 0; p > s; s++) {
                    var n = _verions_cells_array[s][i],
                        l = e(n[1]),
                        r = l.find("td").height();
                    t.push(r), a.push(l)
                }
                for (var d = Array.max(t), o = 0; o < a.length; o++) {
                    var c = e(a[o]).find("td");
                    c.height(d)
                }
            }
        },
        Te = function() {
            var t = [];
            x.each(function(a) {
                t.push(e(this).height())
            });
            var a = Array.max(t);
            x.each(function(t) {
                e(this).height(a)
            })
        };
    return {
        init: function() {
            if (f = this, b = e(window), T = e("body"), y = e("html body"), D = e(".js-desktop-header"), E = e(".js-landing-menu"), k = e(".js-landing-menu-link"), C = e(".js-landing-menu-indicator"), j = e(".js-back-top"), I = e(".js-color-image"), O = e(".js-color-available"), N = e(".js-color-picker"), A = e(".js-landing-slider"), w = A.find(".js-landing-features-wrapper").first(), V = e(".js-landing-versions"), M = V.find(".js-landing-version"), x = e(".js-landing-version-table thead tr td"), U = e(".js-gallery-block"), R = e("#colores"), P = e("#caracteristicas"), B = e("#galeria"), F = e("#precios"), G = e("#accesorios"), H = e("#testdrive"), X = e(".js-landing-info"), W = e(".js-landing-tab"), q = e(".js-landing-testdrive-step"), z = e(".js-landing-dealers-list"), $ = e(".js-landing-address-fieldset"), K = e(".js-landing-not-found-dealers"), Q = e(".js-landing-testdrive-step-2-form"), Z = e(".js-landing-testdrive-date"), J = e(".js-landing-testdrive-name"), ee = e(".js-landing-testdrive-lastname"), te = e(".js-landing-testdrive-email"), ae = e(".js-landing-testdrive-phone"), ie = e(".js-landing-testdrive-want-news"), se = e(".js-landing-testdrive-send"), ne = e(".js-landing-email-label"), le = e(".js-landing-dealer-name"), _$landing_testdrive_step_two_container = e(".js-landing-ste-2-container"), re = e(".js-landing-thanks"), N.first().addClass("active"), N.each(function() {
                    oe(e(this))
                }), A.slick({
                    accessibility: !1,
                    slide: ".js-landing-slide",
                    speed: l.timers.DEFAULT_TIMER
                }), S = A.find(".slick-prev"), L = A.find(".slick-next"), d.isLarge() && fe(), p = M.length, p > 1) {
                var t = [];
                M.each(function(a) {
                    t.push(pe(e(this).find(".js-landing-version-table")))
                }), g = Array.max(t), M.each(function(t) {
                    ge(g, e(this).find(".js-landing-version-table"))
                })
            }
            V.on("init", function(t) {
                p > 1 && setTimeout(function() {
                    M.each(function(t) {
                        me(e(this).find(".js-landing-version-table"))
                    }), Te(), be()
                }, l.timers.LANDING_TABLES_INIT)
            }), V.slick({
                accessibility: !1,
                slide: ".js-landing-version",
                speed: l.timers.DEFAULT_TIMER,
                slidesToShow: p <= l.ui.MAX_VERSIONS_TO_SHOW ? p : l.ui.MAX_VERSIONS_TO_SHOW,
                slidesToScroll: p <= l.ui.MAX_VERSIONS_TO_SHOW ? p : 1,
                infinite: !1,
                responsive: [{
                    breakpoint: _mobile_breakpoint,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: !1
                    }
                }]
            });
            d.createDatePicker(document.getElementById("picker-testdrive-landing"));
            T.addClass("body-landing");
            var a = document.getElementById("landing-dealer-input"),
                i = new google.maps.places.Autocomplete(a, l.ui.AUTOCOMPLETE_OPTIONS);
            google.maps.event.addListener(i, "place_changed", function() {
                for (var e = f.getNearDealers(i.getPlace()), t = [], a = 0; a < e.length; a++) t.push(r.template(l.templates.LANDING_TESTDRIVE_DEALER_TEMPLATE, {
                    dealer_id: e[a].id,
                    dealer_name: e[a].name,
                    dealer_address: e[a].address,
                    dealer_state: e[a].state_name
                }));
                $.hide(), z.html(t).show(), 0 === e.length && (z.hide(), K.show())
            }), o.getDealers(f.setDealers), de()
        },
        setDealers: function(e) {
            v = e
        },
        getNearDealers: function(e) {
            if (_ = [], e.geometry) {
                var t, a, i, s = e.geometry.location,
                    n = s.lat(),
                    l = s.lng();
                for (f.orderDealersNearest(n, l), a = 0, i = v.length; i > a && (t = v[a], _.length < 5) && t.distance < .1;) _.push(t), a++
            }
            return _
        },
        orderDealersNearest: function(e, t) {
            for (var a, i, s, n = v.length; n--;) a = v[n], i = parseFloat(a.latitude) - e, s = parseFloat(a.longitude) - t, a.distance = Math.sqrt(i * i + s * s);
            v.sort(function(e, t) {
                return e.distance - t.distance
            })
        },
        setTestdriveDataValue: function(e, t) {
            m[e] = t
        },
        successTestdrive: function(t) {
            d.removeButtonLoadingStyle(se, !1), W.removeClass("active").addClass("disabled"), _$landing_testdrive_step_two_container.hide(), re.fadeIn(), u.sendAgendarPrueba(m.source, m.car_model, m.car_price, m.dealer), "CIAZ" == m.car_model ? r.trackConversionEvent(l.facebook_testdrive_ciaz.VALUE, l.facebook_testdrive_ciaz.CURRENCY, l.facebook_testdrive_ciaz.ID) : r.trackConversionEvent(l.facebook_testdrive.VALUE, l.facebook_testdrive.CURRENCY, l.facebook_testdrive.ID);
            var a = l.twitter_testdrive[m.car_model.replace(/ /g, "_")];
            e("body").append('<img style="display:none;" src="https://tags.w55c.net/rs?id=feb04cbf322f4060b45368e59a0a16c3&t=checkout&tx=' + t.content.id + '&price=0"/>'), a && r.trackTwitterConversionEvent(a.PID, a.AMMOUNT, a.QUANTITY)
        },
        errorTestdrive: function() {
            re.hide(), _$landing_testdrive_step_two_container.fadeIn(), d.setButtonLoadingStyle(se, !1)
        },
        putDataToElement: function(e, t, a) {
            switch (t) {
                case l.ui.CONTROL_TYPES.INPUT:
                    e.val(a);
                    break;
                case l.ui.CONTROL_TYPES.TEXT:
                    e.text(a);
                    break;
                case l.ui.CONTROL_TYPES.IMAGE:
                    e.attr("src", a)
            }
        },
        gotoStep: function(e) {
            q.hide(), q.eq(e).fadeIn(), f.setActiveTab(W.eq(e))
        },
        setActiveTab: function(e) {
            e.siblings().removeClass("active"), e.removeClass("disabled").addClass("active")
        }
    }
});