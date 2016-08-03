define(["jquery", "select2", "simpleSlider", "moment", "pikaday", "accounting", "app/modules/config", "app/modules/utils", "app/analytics/analytics", "app/validations/validations", "app/services/services"], function(e, t, a, s, i, r, n, d, l, c, o) {
    var _ = null,
        u = null,
        v = [],
        p = [],
        m = {
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
        h = null,
        T = null,
        f = null,
        g = null,
        D = null,
        b = null,
        $ = null,
        j = null,
        k = null,
        E = null,
        S = null,
        w = null,
        C = null,
        O = null,
        N = null,
        V = null,
        y = null,
        L = null,
        I = null,
        P = null,
        R = null,
        A = null;
    _$testdrive_date_input = null, _$testdrive_name_input = null, _$testdrive_lastname_input = null, _$testdrive_email_input = null, _$testdrive_phone_input = null, _$testdrive_want_news_input = null, _$testdrive_send = null, _$testdrive_step_three_form = null, _$testdrive_step_three_container = null, _$testdrive_thanks = null, _$testdrive_email = null, _$testdrive_end = null;
    var M = function() {
        f.bind("click", function() {
            e(this).hasClass("disabled") || e(this).hasClass("active") || _.gotoStep(e(this).index())
        }), j.bind("click", function(t) {
            t.preventDefault(), _.pickModel(e(this).data("carid"), e(this).data("carname"), e(this).data("carprice"), e(this).data("carimage")), u.isResponsive() && (k.hide(), E.fadeIn())
        }), C.bind("click", function(e) {
            e.preventDefault(), E.hide(), k.fadeIn()
        }), N.bind("click", function(e) {
            e.preventDefault(), l.clickAgendarPruebaStepTwo(), _.gotoStep(1)
        }), w.bind("click", function(e) {
            e.preventDefault(), _.gotoStep(0), u.isResponsive() && (E.hide(), k.fadeIn())
        }), O.bind("click", function(e) {
            e.preventDefault(), L.hide(), y.hide(), I.find(".js-testdrive-dealer-input").val(""), I.show()
        }), L.on("click", ".js-testdrive-dealer-link", function(t) {
            t.preventDefault(), _.setTestdriveDataValue("dealer", e(this).data("dealername")), _.setTestdriveDataValue("dealer_id", e(this).data("dealerid")), _.setTestdriveDataValue("dealer_address", e(this).data("dealeraddress")), _.putDataToElement(P, n.ui.CONTROL_TYPES.TEXT, m.dealer), _.putDataToElement(R, n.ui.CONTROL_TYPES.TEXT, m.dealer_address), l.clickAgendarPruebaStepThree(), e("body").append('<img style="display:none;" src="https://tags.w55c.net/rs?id=d25095e599574bf1b6a042d883847c2a&t=cart" />'), _.gotoStep(2)
        }), A.bind("click", function(e) {
            e.preventDefault(), _.gotoStep(1)
        }), _$testdrive_send.bind("click", function(t) {
            if (t.preventDefault(), !e(this).hasClass("m-button--disabled") && c.validateSendTestdrive()) {
                _.setTestdriveDataValue("date", _$testdrive_date_input.val()), _.setTestdriveDataValue("email", _$testdrive_email_input.val()), _.setTestdriveDataValue("name", _$testdrive_name_input.val()), _.setTestdriveDataValue("lastname", _$testdrive_lastname_input.val()), _.setTestdriveDataValue("phone", _$testdrive_phone_input.val()), _.setTestdriveDataValue("source", "Confirmacion_Header"), _.putDataToElement(_$testdrive_email, n.ui.CONTROL_TYPES.TEXT, m.email), _$testdrive_want_news_input.is(":checked") ? _.setTestdriveDataValue("newsletter", 1) : _.setTestdriveDataValue("newsletter", 0);
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
                o.testdriveService(a, _.successTestdrive, _.errorTestdrive), u.setButtonLoadingStyle(e(this), n.messages.SENDING, !1)
            }
        }), _$testdrive_end.bind("click", function(e) {
            e.preventDefault(), u.closeBigMenu("#prueba-de-manejo"), setTimeout(function() {
                _.resetTestdrive(), T.length > 0 ? _.pickModel(T.data("carid"), T.data("carname"), T.data("carprice"), T.data("carimage")) : j.first().trigger("click")
            }, n.timers.MENU_OPEN)
        })
    };
    return {
        init: function() {
            _ = this, u = require("app/ui/ui"), h = e("html, body"), T = e(".js-landing-info"), f = e(".js-testdrive-tab"), g = e(".js-testdrive-step"), D = e(".js-testdrive-step-1"), b = e(".js-testdrive-step-2"), $ = e(".js-testdrive-step-3"), j = e(".js-testdrive-car-option"), k = e(".js-testdrive-mobile-car-list"), E = e(".js-testdrive-mobile-car-change"), S = e(".js-testdrive-car-name"), w = e(".js-testdrive-change-car"), C = e(".js-testdrive-mobile-change-car"), O = e(".js-testdrive-change-dealer"), N = e(".js-testdrive-pick-dealer"), V = e(".js-testdrive-car-image"), y = e(".js-testdrive-not-found-dealers"), L = e(".js-testdrive-dealers-list"), I = e(".js-testdrive-address-fieldset"), P = e(".js-testdrive-dealer-name"), R = e(".js-testdrive-dealer-address"), A = e(".js-testdrive-change-dealer-step-3"), _$testdrive_date_input = e(".js-testdrive-date-input"), _$testdrive_name_input = e(".js-testdrive-name-input"), _$testdrive_lastname_input = e(".js-testdrive-lastname-input"), _$testdrive_email_input = e(".js-testdrive-email-input"), _$testdrive_phone_input = e(".js-testdrive-phone-input"), _$testdrive_want_news_input = e(".js-testdrive-want-news-input"), _$testdrive_send = e(".js-testdrive-send"), _$testdrive_step_three_form = e(".js-testdrive-step-3-form"), _$testdrive_step_three_container = e(".js-testdrive-step-3-container"), _$testdrive_thanks = e(".js-testdrive-thanks"), _$testdrive_email = e(".js-testdrive-email"), _$testdrive_end = e(".js-testdrive-end"), o.getDealers(_.setDealers), M(), T.length > 0 ? _.pickModel(T.data("carid"), T.data("carname"), T.data("carprice"), T.data("carimage")) : j.first().trigger("click"), u.isResponsive() && (k.hide(), E.show());
            var t = document.getElementById("testdrive-dealer-input"),
                a = new google.maps.places.Autocomplete(t, n.ui.AUTOCOMPLETE_OPTIONS);
            google.maps.event.addListener(a, "place_changed", function() {
                for (var e = _.getNearDealers(a.getPlace()), t = [], s = 0; s < e.length; s++) t.push(d.template(n.templates.TESTDRIVE_DEALER_TEMPLATE, {
                    dealer_id: e[s].id,
                    dealer_name: e[s].name,
                    dealer_address: e[s].address,
                    dealer_state: e[s].state_name
                }));
                I.hide(), L.html(t).show(), 0 === e.length && (L.hide(), y.show())
            })
        },
        setTestdriveDataValue: function(e, t) {
            m[e] = t
        },
        getTestdriveDataValue: function(e) {
            return m[e]
        },
        pickModel: function(e, t, a, s) {
            _.setTestdriveDataValue("car_model_id", e), _.setTestdriveDataValue("car_model", t), _.setTestdriveDataValue("car_price", parseFloat(a)), _.setTestdriveDataValue("car_image", s), _.putDataToElement(S, n.ui.CONTROL_TYPES.TEXT, t), _.putDataToElement(V, n.ui.CONTROL_TYPES.IMAGE, s)
        },
        setDealers: function(e) {
            v = e
        },
        getDealers: function() {
            return v
        },
        getNearDealers: function(e) {
            if (p = [], e.geometry) {
                var t, a, s, i = e.geometry.location,
                    r = i.lat(),
                    n = i.lng();
                for (_.orderDealersNearest(r, n), a = 0, s = v.length; s > a && (t = v[a], p.length < 5) && t.distance < .1;) p.push(t), a++
            }
            return p
        },
        orderDealersNearest: function(e, t) {
            for (var a, s, i, r = v.length; r--;) a = v[r], s = parseFloat(a.latitude) - e, i = parseFloat(a.longitude) - t, a.distance = Math.sqrt(s * s + i * i);
            v.sort(function(e, t) {
                return e.distance - t.distance
            })
        },
        successTestdrive: function(t) {
            u.removeButtonLoadingStyle(_$testdrive_send, !1), f.removeClass("active").addClass("disabled"), _$testdrive_step_three_container.hide(), _$testdrive_thanks.fadeIn(), "CIAZ" == m.car_model ? d.trackConversionEvent(n.facebook_testdrive_ciaz.VALUE, n.facebook_testdrive_ciaz.CURRENCY, n.facebook_testdrive_ciaz.ID) : d.trackConversionEvent(n.facebook_testdrive.VALUE, n.facebook_testdrive.CURRENCY, n.facebook_testdrive.ID);
            var a = n.twitter_testdrive[m.car_model.replace(/ /g, "_")];
            a && d.trackTwitterConversionEvent(a.PID, a.AMMOUNT, a.QUANTITY), l.sendAgendarPrueba(m.source, m.car_model, m.car_price, m.dealer), e("body").append('<img style="display:none;" src="https://tags.w55c.net/rs?id=feb04cbf322f4060b45368e59a0a16c3&t=checkout&tx=' + t.content.id + '&price=0"/>'), e("body").append('<script language="JavaScript1.1" src="//pixel.mathtag.com/event/js?mt_id=1043760&mt_adid=167260&v1=&v2=&v3=&s1=&s2=&s3="></script>'), e("body").append('<script language="JavaScript1.1" src="//pixel.mathtag.com/event/js?mt_id=1043761&mt_adid=167260&v1=&v2=&v3=&s1=&s2=&s3="></script>'), d.isMobile() && h.animate({
                scrollTop: 0
            }, n.timers.SCROLL_TO)
        },
        errorTestdrive: function() {
            _$testdrive_thanks.hide(), _$testdrive_step_three_container.fadeIn(), u.setButtonLoadingStyle(_$testdrive_send, !1)
        },
        resetTestdrive: function() {
            m = {
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
            }, _$testdrive_thanks.hide(), _$testdrive_step_three_container.show(), _$testdrive_step_three_form.trigger("reset"), L.hide(), y.hide(), I.find(".js-testdrive-dealer-input").val(""), I.show(), _.gotoStep(0)
        },
        putDataToElement: function(e, t, a) {
            switch (t) {
                case n.ui.CONTROL_TYPES.INPUT:
                    e.val(a);
                    break;
                case n.ui.CONTROL_TYPES.TEXT:
                    e.text(a);
                    break;
                case n.ui.CONTROL_TYPES.IMAGE:
                    e.attr("src", a)
            }
        },
        gotoStep: function(e) {
            g.hide(), g.eq(e).fadeIn(), _.setActiveTab(f.eq(e))
        },
        setActiveTab: function(e) {
            e.siblings().removeClass("active"), e.removeClass("disabled").addClass("active")
        }
    }
});